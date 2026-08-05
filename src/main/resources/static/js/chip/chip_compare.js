$(document).ready(function () {
    marked.setOptions({
        table: true,
        gfm: true,
        breaks: true,
        highlight: function (code, lang) {
            const validLanguage = hljs.getLanguage(lang) ? lang : 'plaintext';
            return hljs.highlight(code, {language: validLanguage}).value;
        },
        // sanitize: true // HTML自动转义
    });
});

const editor = editormd("content-editor", {
    width: "95%",
    height: "700",
    path: "/static/lib/",
    markdown: "",
    saveHTMLToTextarea: true,
    codeFold: true,
    taskList: true,
    emoji: true,
    tocm: true,
    tex: true,            // 开启科学公式TeX语言支持，默认关闭
    flowChart: true,             // 开启流程图支持，默认关闭
    sequenceDiagram: true,       // 开启时序/序列图支持，默认关闭
    imageUpload: true,
    tocDropdown: true,
    imageFormats: ["jpg", "jpeg", "gif", "png", "bmp", "webp"],
    imageUploadURL: "/api/editormd/album",
    htmlDecode: false,
    onload: function () {
        initPasteDragImg(this);
    }
});

function initPasteDragImg(Editor) {
    const doc = document.getElementById(Editor.id);
    doc.addEventListener('paste', function (event) {
        const items = (event.clipboardData || window.clipboardData).items;
        let file = null;
        if (items && items.length) {
            // 搜索剪切板items
            for (let i = 0; i < items.length; i++) {
                if (items[i].type.indexOf('image') !== -1) {
                    file = items[i].getAsFile();
                    break;
                }
            }
        } else {
            console.log("当前浏览器不支持");
            return;
        }
        if (!file) {
            console.log("粘贴内容非图片");
            return;
        }
        uploadImg(file, Editor);
    });

    const dashboard = document.getElementById(Editor.id);
    dashboard.addEventListener("dragover", function (e) {
        e.preventDefault()
        e.stopPropagation()
    })
    dashboard.addEventListener("dragenter", function (e) {
        e.preventDefault()
        e.stopPropagation()
    })
    dashboard.addEventListener("drop", function (e) {
        e.preventDefault()
        e.stopPropagation()
        var files = this.files || e.dataTransfer.files;
        uploadImg(files[0], Editor);
    })
}

function uploadImg(file, Editor) {
    const formData = new FormData();
    if (file === undefined) {
        alert("不支持的文件类型!");
        return;
    }
    //var fileName=new Date().getTime()+"."+file.name.split(".").pop();
    const fileName = file.name;
    if (/\.(png|jpg|jpeg|gif|bmp|ico|webp)$/.test(fileName)) {
    } else {
        alert("不支持的文件类型!");
        return;
    }
    formData.append('editormd-image-file', file, fileName);

    $.ajax({
        url: Editor.settings.imageUploadURL,
        type: 'post',
        data: formData,
        processData: false,
        contentType: false,
        dataType: 'json',
        async: false,
        success: function (d) {
            if (d.success === 1) {
                const url = d.url;
                if (/\.(png|jpg|jpeg|gif|bmp|ico|webp)$/.test(url)) {
                    Editor.insertValue("![image](" + url + ")");
                } else {
                    Editor.insertValue("[下载附件](" + url + ")");
                }
            } else {
                alert(d.message);
            }
        }
    });
}

// Tab 点击事件
$(".tab-header").on("click", ".tab-item", function () {
    const tabId = $(this).data("tab"); // 获取当前点击的 Tab 对应的内容区域 ID

    // 激活选中 Tab
    $(".tab-item").removeClass("active"); // 移除所有 Tab 的激活状态
    $(this).addClass("active"); // 激活当前点击的 Tab

    // 显示对应的内容区域
    $(".tab-pane").removeClass("active"); // 隐藏所有内容区域
    $(`#${tabId}-panel`).addClass("active"); // 仅显示与当前 Tab 对应的内容区域

    if (tabId === "recent") {
        // 调用后端接口查询最近芯片比较结果
        getChipCompareRecords();
    }
});

function getChipCompareRecords() {
    const recentPanel = $('#recent-panel');
    $.ajax({
        url: '/api/chip/compare/records', // 后端接口
        method: 'GET', // 使用 GET 方法请求
        success: function (response) {
            // 请求成功的回调函数
            console.log('最近比较记录:', response);
            if (response.status !== 0) {
                console.error("get chip compare records error.", response);
                return;
            }
            const records = response.data;
            // 构建表格
            let table = '<table border="1" style="width: 100%; border-collapse: collapse;">';
            table += `
                    <thead>
                        <tr>
                            <th style="text-align: left; padding: 8px;">序号</th>
                            <th style="text-align: left; padding: 8px;">芯片1</th>
                            <th style="text-align: left; padding: 8px;">芯片2</th>
                            <th style="text-align: left; padding: 8px;">状态</th>
                            <th style="text-align: left; padding: 8px;">Model</th>
                            <th style="text-align: left; padding: 8px;">Input_tokens</th>
                            <th style="text-align: left; padding: 8px;">Output_tokens</th>
                            <th style="text-align: left; padding: 8px;">耗时(毫秒)</th>
                            <th style="text-align: left; padding: 8px;">消耗成本(元)</th>
                            <th style="text-align: left; padding: 8px;">时间</th>
                            <th style="text-align: left; padding: 8px;">文件下载</th>
                        </tr>
                    </thead>
                    <tbody>
                `;
            // 遍历记录并将每条记录添加为表格行
            records.forEach((record, index) => {
                table += `
                        <tr>
                            <td style="padding: 8px;">${index + 1}</td>
                            <td style="padding: 8px;">${record.firstChipPartNumber}</td>
                            <td style="padding: 8px;">${record.secondChipPartNumber}</td>
                            <td style="padding: 8px;">${record.status === 0 ? "成功" : "失败"}</td>
                            <td style="padding: 8px;">${record.model}</td>
                            <td style="padding: 8px;">${record.inputTokens}</td>
                            <td style="padding: 8px;">${record.outputTokens}</td>
                            <td style="padding: 8px;">${record.duration}</td>
                            <td style="padding: 8px;">${record.cost}</td>
                            <td style="padding: 8px;">${record.createTime || '未知日期'}</td>
                            <td style="padding: 8px;">${record.status !== 0 ? '' : `<a href="/api/chip/compare/result?id=${record.id}">下载md</a>`}</td>
                        </tr>
                    `;
            });
            table += '</tbody></table>';
            // 将表格插入到 recent-panel 中
            recentPanel.empty();
            recentPanel.append(table);
            console.log("table:", table);
        },
        error: function (xhr, status, error) {
            // 请求失败的回调函数
            console.error('Get chip compare records error.', error);
            recentPanel.innerHTML = "获取记录失败:" + error;
        }
    });
}

const $analyzeButton = $(".analyze-btn");
let fileCount = 0;
// 文件上传逻辑
$('#file-upload').change(function (e) {
    const files = e.target.files;
    let uploadFiles = [...files];
    // if (uploadFiles.length > 1) {
    //     alert("每次最多只能上传一个文件！");
    //     return;
    // }
    fileCount = $(".file-list li").length;

    uploadFiles.forEach((file, index) => {
        const formData = new FormData();
        formData.append("file", file);
        if (fileCount >= 3) {
            alert("文件数量过多");
            return;
        }

        $.ajax({
            url: "/api/chip/pdf/upload",
            type: "POST",
            data: formData,
            processData: false,
            contentType: false,
            success: function (data) {
                if (data.status !== 0) {
                    alert("上传失败");
                    return;
                }
                fileCount++;
                const chipPartNumber = file.name.replace(/\.[^/.]+$/, '');
                $('.file-list').append(`
                            <li>
                                <div style="display: none">${file.name}</div>
                                ${file.name} (${(file.size / 1024 / 1024).toFixed(2)} MB)
                                &emsp;芯片型号：<input type="text" value="${chipPartNumber}" placeholder="请输入芯片型号">
                                <button class="remove-file">❌</button>
                            </li>
                        `);
                updateAnalyzeButton(); // 更新按钮状态
            },
            error: function () {
                alert("文件上传失败，请重试！");
            },
        });
    });
});

// 移除文件
$('.file-list').on('click', '.remove-file', function () {
    // const index = $(this).closest('li').index(); // 获取文件序号
    fileCount--;
    $(this).closest('li').remove(); // 删除 DOM 节点
    updateAnalyzeButton();
});

// 更新分析按钮状态
function updateAnalyzeButton() {
    if (fileCount > 1) {
        $analyzeButton.prop("disabled", false); // 启用按钮
    } else {
        $analyzeButton.prop("disabled", true); // 禁用按钮
    }
}

const analyzeButton = $('.analyze-btn'); // 分析按钮
const buttonText = $('.button-text'); // 按钮文本部分
const loadingIcon = $('.fa-spinner'); // 加载图标

// 分析按钮点击逻辑
analyzeButton.click(function () {
    const stream = !!$('#streaming-checkbox').prop('checked');
    console.log("stream:", stream);
    buttonText.text('Loading...');
    loadingIcon.show();
    analyzeButton.prop('disabled', true);

    if (stream === true) {
        analyzeWithStream();
    } else {
        analyze()
    }
});

// 分析（流式）
function analyzeWithStream() {
    if (fileCount === 0) return;

    const fileList = $('.file-list li').map(function () {
        return $(this).find('div').text();
    }).get();

    const chipPartNumberList = $('.file-list li').map(function () {
        return $(this).find('input').val();
    }).get();

    const progressBar = $('.progress-bar .progress');

    const reportPanel = $('#report-panel');
    progressBar.width('0%');
    reportPanel.empty();
    // 先显示一个加载状态
    reportPanel.html(`
                <div class="info-box">
                    <div id="streaming-content">
                        <h3>🔍 正在分析中...</h3>
                    </div>
                </div>
            `);

    // const modelName = $('input[name="api"]:checked').val();
    const modelName = $('#apiModelDropdown').val();
    const userPrompt = $('#prompt-text').val();
    const temperature = $('#temperature').val();
    const maxTokens = $('#max-tokens').val();
    console.log("modelName:", modelName);
    console.log("userPrompt:", userPrompt);
    console.log("temperature:", temperature);
    console.log("maxTokens:", maxTokens);

    const streamingContent = $('#streaming-content');
    let fullResponse = '';

    // 使用fetch API代替jQuery的ajax，以便处理流式响应
    fetch('/api/chip/analyze/stream', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            fileList: fileList,
            chipPartNumberList: chipPartNumberList,
            stream: true,
            userPrompt: userPrompt,
            temperature: temperature,
            maxTokens: maxTokens,
            modelName: modelName,
        }),
    }).then(response => {
        if (!response.ok) {
            throw new Error('请求失败');
        }
        const reader = response.body.getReader();
        const decoder = new TextDecoder("utf-8");

        function readStream() {
            return reader.read().then(({done, value}) => {
                if (done) {
                    // 去除开头结尾的```markdown```代码块
                    fullResponse = fullResponse.replace(/```markdown\s*([\s\S]*?)\s*```/gm, '$1').trim();
                    console.log("fullResponse:", fullResponse);

                    editor.setMarkdown(fullResponse);

                    streamingContent.html(marked(fullResponse));
                    streamingContent.find('pre code').each((i, block) => {
                        hljs.highlightElement(block);
                    });

                    // 流结束时，可以添加一些完成标记
                    streamingContent.append('<p><strong>✅ 分析完成</strong></p>');

                    // reportPanel.append(`
                    //     <div class="success-box">
                    //         <h3>✅ 完整Markdown</h3>
                    //         <p>${fullResponse}</p>
                    //     </div>
                    //     `);

                    progressBar.width('100%');
                    buttonText.text('🔍 开始分析');
                    loadingIcon.hide();
                    analyzeButton.prop('disabled', false);
                    return;
                }
                // 解码并处理流数据
                let s = decoder.decode(value, {stream: true});
                console.log("chunk:", s);
                const lines = s.split("\n");

                for (let line of lines) {
                    if (line.startsWith("data:")) {
                        line = line.substring(5).trim();
                    }
                    if (!line) {
                        continue;
                    }
                    try {
                        const parsedChunk = JSON.parse(line);
                        const type = parsedChunk?.type;
                        if (type === "message") {
                            const content = parsedChunk?.content;
                            if (content) {
                                fullResponse += content; // 追加内容
                                // 更新 UI
                                streamingContent.html(marked(fullResponse));
                                streamingContent.find('pre code').each((i, block) => {
                                    hljs.highlightElement(block);
                                });
                                streamingContent.scrollTop(streamingContent[0].scrollHeight);

                                // 更新editor.md
                                editor.setMarkdown(fullResponse);
                            }
                        } else if (type === "error") {
                            const content = parsedChunk?.content;
                            console.error("后端报错：", content);
                            reportPanel.append(`
                                    <div class="error-box">
                                        <h3>分析失败，后端错误</h3>
                                        <p>错误：${content}</p>
                                    </div>
                                `);
                            buttonText.text('🔍 开始分析');
                            loadingIcon.hide();
                            analyzeButton.prop('disabled', false);
                            return;
                        }
                    } catch (error) {
                        console.error("解析chunk出错：", error);
                        reportPanel.append(`
                                    <div class="error-box">
                                        <h3>分析失败</h3>
                                        <p>错误：${error}</p>
                                    </div>
                                `);
                        buttonText.text('🔍 开始分析');
                        loadingIcon.hide();
                        analyzeButton.prop('disabled', false);
                        return;
                    }
                }

                // 更新进度条（如果有进度信息）
                // if (chunk.includes('progress')) {
                //     try {
                //         const progressMatch = chunk.match(/"progress":(\d+)/);
                //         if (progressMatch) {
                //             progressBar.width(progressMatch[1] + '%');
                //         }
                //     } catch (e) {
                //         console.error('解析进度失败', e);
                //     }
                // }

                // 继续读取下一块数据
                return readStream();
            });
        }

        return readStream();
    }).catch(error => {
        reportPanel.append(`
                    <div class="error-box">
                        <h3>分析失败</h3>
                        <p>错误：${error}</p>
                    </div>
                `);
        buttonText.text('🔍 开始分析');
        loadingIcon.hide();
        analyzeButton.prop('disabled', false);
    });
}

function analyze() {
    if (fileCount === 0) return;
    // $(this).prop('disabled', true); // 禁用按钮
    const fileList = $('.file-list li').map(function () {
        return $(this).find('div').text();
    }).get();

    const chipPartNumberList = $('.file-list li').map(function () {
        return $(this).find('input').val();
    }).get();

    const progressBar = $('.progress-bar .progress');
    const resultContainer = $('.result-container');
    const reportPanel = $('#report-panel');
    progressBar.width('0%');
    // resultContainer.empty();
    reportPanel.empty();

    // const modelName = $('input[name="api"]:checked').val();
    const modelName = $('#apiModelDropdown').val();
    const userPrompt = $('#prompt-text').val();
    const temperature = $('#temperature').val();
    const maxTokens = $('#max-tokens').val();
    console.log("modelName:", modelName);
    console.log("userPrompt:", userPrompt);
    console.log("temperature:", temperature);
    console.log("maxTokens:", maxTokens);

    $.ajax({
        url: '/api/chip/analyze',
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({
            fileList: fileList,
            chipPartNumberList: chipPartNumberList,
            stream: false,
            userPrompt: userPrompt,
            temperature: temperature,
            maxTokens: maxTokens,
            modelName: modelName,
        }),
        success: function (response) {
            progressBar.width('100%');
            if (response.status !== 0) {
                reportPanel.html(`
                        <div class="error-box">
                            <h3>分析失败</h3>
                        </div>
                    `);
                buttonText.text('🔍 开始分析');
                loadingIcon.hide();
                analyzeButton.prop('disabled', false);
                return;
            }
            // 请求成功，更新结果
            const innerHTML = marked(response.data);
            reportPanel.html(`
                        <div class="success-box">
                            <h3>✅ 分析完成</h3>
                            <p>${innerHTML}</p>
                        </div>
                    `);
            buttonText.text('🔍 开始分析');
            loadingIcon.hide();
            analyzeButton.prop('disabled', false);
        },
        error: function (xhr) {
            progressBar.width('100%');
            reportPanel.html(`
                        <div class="error-box">
                            <h3>分析失败</h3>
                            <p>错误：${xhr.responseText || xhr.statusText}</p>
                        </div>
                    `);
            buttonText.text('🔍 开始分析');
            loadingIcon.hide();
            analyzeButton.prop('disabled', false);
        },
    });
}

window.onload = function () {
    const promptTextarea = document.getElementById('prompt-text');
    promptTextarea.value = `你是一个专业芯片选型分析工程师，负责批量撰写高质量、格式统一的芯片 Pin2Pin 替代分析报告。

# 📎 输入信息：
你收到若干芯片的 datasheet 解析结果，包括型号、品牌、电气参数、功能描述、引脚定义和应用场景。

以下是芯片的文本内容：

%s

# 🎯 分析目标：
请针对这些芯片，进行结构化的 Pin2Pin 对比分析，最终输出为 Markdown 格式的技术报告，包括以下 6 大章节：

## 1. 产品定义和目标应用对比

简要介绍每个芯片解决的问题、产品定位、目标应用领域。强调三者的共性与差异。

## 2. 封装与引脚布局对比（Pin-to-Pin表格）

输出完整的引脚对照表，并说明是否可以物理 Pin2Pin 替代，是否需要修改 PCB，是否有功能不匹配的引脚。

## 3. 电气特性全面对比

用表格列出关键电气参数（如输入电压、输出电流、Vos、PSRR、CMRR、带宽等），并逐项说明：
- 哪个芯片性能最优 ✅
- 哪个芯片存在短板 ⚠️
- 是否可替代？是否存在风险？

## 4. 功能模块特性对比

说明这些芯片的内部功能模块（如零漂移、双参考输入、抗PWM设计等）是否一致，以及它们在抗干扰、温漂、稳定性方面的差异。

## 5. 典型应用适配性分析（按场景分类）

请列出三种应用场景：
- 每种场景下推荐哪款芯片？
- 替代建议是什么？用表格列出说明。

## 6. Pin2Pin替代可行性总结与风险分析

总结这些芯片之间互相替代的可行性，列出：
- 哪些方向可以完全替代 ✅
- 哪些方向存在参数风险 ⚠️
- 哪些方向存在封装、电压不兼容等问题 ❌
- 总结表格 + 替代建议

# ⚠️ 输出格式：

- 采用 Markdown 结构
- 使用清晰的标题（# / ## / ###）
- 所有对比表格使用三列以上格式
- 不要遗漏任何芯片的结论
- 输出必须结构清晰、逻辑严谨、数据支撑、工程落地可用
# 要求
- 只输出Pin2Pin 替代分析报告
要求
不要出现：好的，作为一名专业芯片选型分析工程师，我将根据您提供的两份芯片Datasheet，为您撰写一份结构化的Pin2Pin替代分析报告。`
};