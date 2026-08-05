$(document).ready(function () {
    marked.setOptions({
        table: true,
        gfm: true,
        breaks: true,
        highlight: function (code, lang) {
            const validLanguage = hljs.getLanguage(lang) ? lang : 'plaintext';
            return hljs.highlight(code, {language: validLanguage}).value;
        }
    });

    $('.format-option input').on('change', function () {
        $(this).closest('.format-option').toggleClass('active', this.checked);
    });
});

function setMdEditorContent(markdown) {
    const frame = document.getElementById('md-editor-frame');
    if (!frame || !frame.contentWindow) return;
    try {
        const app = frame.contentWindow.document.querySelector('#app').__vue_app__;
        const pinia = app && app.config.globalProperties.$pinia;
        const postStore = pinia && pinia._s.get('post');
        if (!postStore || typeof postStore.updatePostContent !== 'function') return;
        const posts = Array.isArray(postStore.posts) ? postStore.posts : (postStore.posts ? postStore.posts.value : []);
        const post = posts.find(item => item.id === postStore.currentPostId) || posts[0];
        if (!post) return;
        postStore.updatePostContent(post.id, markdown);
        if (typeof postStore.persistImmediately === 'function') postStore.persistImmediately();
    } catch (error) {
        console.error('注入 doocs/md 编辑器失败', error);
    }
}

const $analyzeButton = $('.analyze-btn');
const $buttonText = $('.button-text');
const $analysisIndicator = $('.analysis-indicator');
const $analysisIndicatorText = $('.analysis-indicator-text');
let fileCount = 0;

function setAnalysisState(state, label) {
    $analysisIndicator.removeClass('is-running is-complete');
    if (state) $analysisIndicator.addClass(state);
    $analysisIndicatorText.text(label);
}

function resetAnalysisButton() {
    $buttonText.text('开始分析');
    $analyzeButton.removeClass('is-loading');
    updateAnalyzeButton();
}

function updateAnalyzeButton() {
    $analyzeButton.prop('disabled', fileCount < 2 || $analyzeButton.hasClass('is-loading'));
}

$('.tab-header').on('click', '.tab-item', function () {
    const tabId = $(this).data('tab');
    $('.tab-item').removeClass('active').attr('aria-selected', 'false');
    $(this).addClass('active').attr('aria-selected', 'true');
    $('.tab-pane').removeClass('active');
    $(`#${tabId}-panel`).addClass('active');
    if (tabId === 'recent') getChipCompareRecords();
});

function getChipCompareRecords() {
    const $recentPanel = $('#recent-panel');
    $.ajax({
        url: '/api/chip/compare/records',
        method: 'GET',
        success: function (response) {
            if (response.status !== 0) {
                $recentPanel.html('<div class="empty-report"><h3>无法加载分析记录</h3><p>请稍后重试。</p></div>');
                return;
            }
            const records = response.data || [];
            if (!records.length) {
                $recentPanel.html('<div class="empty-report"><h3>暂无分析记录</h3><p>完成一次芯片对比后，记录会显示在这里。</p></div>');
                return;
            }
            let table = '<div class="history-wrap"><table class="history-table"><thead><tr><th>序号</th><th>芯片 1</th><th>芯片 2</th><th>状态</th><th>模型</th><th>输入</th><th>输出</th><th>耗时</th><th>成本</th><th>时间</th><th>结果</th></tr></thead><tbody>';
            records.forEach((record, index) => {
                const status = record.status === 0 ? '<span class="history-status-ok">成功</span>' : '<span class="history-status-fail">失败</span>';
                const downloads = record.status === 0 ? `<span class="history-dl"><a href="/api/chip/compare/result?id=${record.id}&type=md">MD</a><a href="/api/chip/compare/result?id=${record.id}&type=txt">TXT</a></span>` : '';
                table += `<tr><td>${index + 1}</td><td>${record.firstChipPartNumber || '—'}</td><td>${record.secondChipPartNumber || '—'}</td><td>${status}</td><td>${record.model || '—'}</td><td>${record.inputTokens ?? '—'}</td><td>${record.outputTokens ?? '—'}</td><td>${record.duration ?? '—'} ms</td><td>${record.cost ?? '—'}</td><td>${record.createTime || '未知日期'}</td><td>${downloads}</td></tr>`;
            });
            $recentPanel.empty().append(`${table}</tbody></table></div>`);
        },
        error: function () {
            $recentPanel.html('<div class="empty-report"><h3>获取记录失败</h3><p>请检查网络后重试。</p></div>');
        }
    });
}

$('#file-upload').on('change', function (event) {
    const uploadFiles = [...event.target.files];
    fileCount = $('.file-list li').length;
    uploadFiles.forEach(file => {
        if (fileCount >= 2) {
            alert('每次最多上传两份 PDF 数据表');
            return;
        }
        const formData = new FormData();
        formData.append('file', file);
        $.ajax({
            url: '/api/chip/pdf/upload',
            type: 'POST',
            data: formData,
            processData: false,
            contentType: false,
            success: function (data) {
                if (data.status !== 0) {
                    alert('上传失败，请重试');
                    return;
                }
                fileCount++;
                const partNumber = file.name.replace(/\.[^/.]+$/, '');
                $('.file-list').append(`<li><div>${file.name}</div><span>${file.name} · ${(file.size / 1024 / 1024).toFixed(2)} MB</span><input type="text" value="${partNumber}" placeholder="芯片型号" aria-label="芯片型号"><button class="remove-file" type="button" aria-label="移除 ${file.name}"></button></li>`);
                updateAnalyzeButton();
            },
            error: function () { alert('文件上传失败，请重试'); }
        });
    });
    this.value = '';
});

$('.file-list').on('click', '.remove-file', function () {
    fileCount--;
    $(this).closest('li').remove();
    updateAnalyzeButton();
});

function collectRequestData() {
    return {
        fileList: $('.file-list li').map(function () { return $(this).find('div').text(); }).get(),
        chipPartNumberList: $('.file-list li').map(function () { return $(this).find('input').val(); }).get()
    };
}

function showReportTab() {
    $('.tab-item[data-tab="report"]').trigger('click');
}

function renderError($panel, message) {
    $panel.html(`<div class="error-box"><h3>分析失败</h3><p>${message}</p></div>`);
    setAnalysisState('', '分析失败');
    resetAnalysisButton();
}

$analyzeButton.on('click', function () {
    if (fileCount < 2) return;
    $buttonText.text('分析中');
    $analyzeButton.addClass('is-loading').prop('disabled', true);
    setAnalysisState('is-running', '正在分析');
    if ($('#streaming-checkbox').prop('checked')) analyzeWithStream();
    else analyze();
});

function analyzeWithStream() {
    const request = collectRequestData();
    const $progress = $('.progress-bar .progress');
    const $reportPanel = $('#report-panel');
    $progress.width('0%');
    showReportTab();
    $reportPanel.html('<div class="info-box"><div id="streaming-content"><h3>正在分析中</h3></div></div>');
    const $streamingContent = $('#streaming-content');
    let fullResponse = '';

    fetch('/api/chip/analyze/stream', {
        method: 'POST', headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({...request, stream: true})
    }).then(response => {
        if (!response.ok) return response.text().then(text => { throw new Error(text || '请求失败'); });
        const reader = response.body.getReader();
        const decoder = new TextDecoder('utf-8');
        function readStream() {
            return reader.read().then(({done, value}) => {
                if (done) {
                    fullResponse = fullResponse.replace(/```markdown\s*([\s\S]*?)\s*```/gm, '$1').trim();
                    setMdEditorContent(fullResponse);
                    $streamingContent.html(marked(fullResponse)).append('<p><strong>分析完成</strong></p>');
                    $streamingContent.find('pre code').each((_, block) => hljs.highlightElement(block));
                    $progress.width('100%');
                    setAnalysisState('is-complete', '分析完成');
                    resetAnalysisButton();
                    return;
                }
                decoder.decode(value, {stream: true}).split('\n').forEach(line => {
                    const payload = line.startsWith('data:') ? line.substring(5).trim() : line.trim();
                    if (!payload) return;
                    try {
                        const chunk = JSON.parse(payload);
                        if (chunk.type === 'message' && chunk.content) {
                            fullResponse += chunk.content;
                            $streamingContent.html(marked(fullResponse));
                            $streamingContent.find('pre code').each((_, block) => hljs.highlightElement(block));
                            setMdEditorContent(fullResponse);
                        } else if (chunk.type === 'error') {
                            throw new Error(chunk.content || '服务端分析失败');
                        }
                    } catch (error) {
                        if (error.message) throw error;
                    }
                });
                return readStream();
            });
        }
        return readStream();
    }).catch(error => renderError($reportPanel, error.message));
}

function analyze() {
    const request = collectRequestData();
    const $progress = $('.progress-bar .progress');
    const $reportPanel = $('#report-panel');
    $progress.width('0%');
    showReportTab();
    $reportPanel.empty();
    $.ajax({
        url: '/api/chip/analyze', type: 'POST', contentType: 'application/json',
        data: JSON.stringify({...request, stream: false}),
        success: function (response) {
            $progress.width('100%');
            if (response.status !== 0) {
                renderError($reportPanel, '服务端未能完成分析');
                return;
            }
            setMdEditorContent(response.data);
            $reportPanel.html(`<div class="success-box"><h3>分析完成</h3>${marked(response.data)}</div>`);
            setAnalysisState('is-complete', '分析完成');
            resetAnalysisButton();
        },
        error: function (xhr) {
            $progress.width('100%');
            renderError($reportPanel, xhr.responseText || xhr.statusText || '请求失败');
        }
    });
}
