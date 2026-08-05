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
                            <td style="padding: 8px;">${record.status !== 0 ? '' : `<a href="/api/chip/compare/result?id=${record.id}&type=md">下载md</a> <a href="/api/chip/compare/result?id=${record.id}&type=txt">下载txt</a>`}</td>
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
    // if (uploadFiles.length > 2) {
    //     alert("每次最多只能上传2个文件！");
    //     return;
    // }
    fileCount = $(".file-list li").length;

    uploadFiles.forEach((file, index) => {
        const formData = new FormData();
        formData.append("file", file);
        if (fileCount >= 2) {
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
        }),
    }).then(response => {
        if (!response.ok) {
            return response.text().then(err => {
                console.log(err);
                throw new Error(err.message || "Request failed");
            });
            return response.json();
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
                            console.error("Server error:", content);
                            reportPanel.append(`
                                    <div class="error-box">
                                        <h3>分析失败，后端错误</h3>
                                        <p>错误：${content}</p>
                                    </div>
                                `);
                            buttonText.text('🔍 开始分析');
                            loadingIcon.hide();
                            analyzeButton.prop('disabled', false);
                            alert("Server error:" + content);
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
                // 继续读取下一块数据
                return readStream();
            });
        }

        return readStream();
    }).catch(error => {
        alert(error.message);
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
    reportPanel.empty();

    $.ajax({
        url: '/api/chip/analyze',
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({
            fileList: fileList,
            chipPartNumberList: chipPartNumberList,
            stream: false,
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