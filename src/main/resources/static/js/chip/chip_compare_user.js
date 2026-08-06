const MAX_FILES = 5;
const MIN_FILES = 2;
const editorSyncInterval = 600;

let reportMarkdown = '';
let analysisRunning = false;
let fileCount = 0;
let uploadPending = 0;
let analysisStartedAt = null;
let elapsedTimer = null;
let editorSyncTimer = null;
let reportRenderFrame = null;
let lastEditorValue = '';
let initialEditorValue = null;
let hasReportDocument = false;

const $analyzeButton = $('.analyze-btn');
const $buttonText = $('.button-text');
const $analysisIndicator = $('.analysis-indicator');
const $analysisIndicatorText = $('.analysis-indicator-text');
const $progress = $('.progress-bar .progress');
const $progressStage = $('.progress-stage');
const $progressPercent = $('.progress-percent');
const $progressElapsed = $('.progress-elapsed');
const $analysisProgress = $('.analysis-progress');

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
        if ($(this).attr('name') === 'mode') {
            const quick = $(this).val() === 'quick';
            $('.action-hint').text(quick ? '快速结论模式 · 预计 10-25 秒' : '完整报告模式 · 预计 1-1.5 分钟');
        }
    });

    loadBalance();
    updateFileUi();
    setProgress(0, '等待上传文件');
    window.setInterval(syncReportFromEditor, 1500);
});

function getEditorPost() {
    const frame = document.getElementById('md-editor-frame');
    if (!frame || !frame.contentWindow) return null;
    try {
        const app = frame.contentWindow.document.querySelector('#app').__vue_app__;
        const pinia = app && app.config.globalProperties.$pinia;
        const postStore = pinia && pinia._s.get('post');
        if (!postStore) return null;
        const posts = Array.isArray(postStore.posts) ? postStore.posts : (postStore.posts ? postStore.posts.value : []);
        const post = posts.find(item => item.id === postStore.currentPostId) || posts[0];
        return post && postStore ? {postStore, post} : null;
    } catch (error) {
        return null;
    }
}

function getMdEditorContent() {
    const editor = getEditorPost();
    if (!editor) return null;
    return typeof editor.post.content === 'string' ? editor.post.content : '';
}

function setMdEditorContent(markdown) {
    const editor = getEditorPost();
    if (!editor || typeof editor.postStore.updatePostContent !== 'function') return false;
    try {
        editor.postStore.updatePostContent(editor.post.id, markdown);
        if (typeof editor.postStore.persistImmediately === 'function') editor.postStore.persistImmediately();
        lastEditorValue = markdown;
        return true;
    } catch (error) {
        console.error('注入 doocs/md 编辑器失败', error);
        return false;
    }
}

function scheduleEditorSync() {
    window.clearTimeout(editorSyncTimer);
    editorSyncTimer = window.setTimeout(() => setMdEditorContent(reportMarkdown), editorSyncInterval);
}

function syncReportFromEditor() {
    // The report tab is read-only. Only accept manual changes while the editor is visible,
    // otherwise doocs/md initialization can overwrite a completed analysis report.
    if (analysisRunning || !$('#markdown-panel').hasClass('active')) return;
    const editorContent = getMdEditorContent();
    if (editorContent === null) return;
    if (initialEditorValue === null) {
        initialEditorValue = editorContent;
        lastEditorValue = editorContent;
        return;
    }
    if (hasReportDocument && editorContent !== lastEditorValue) {
        reportMarkdown = editorContent;
        lastEditorValue = editorContent;
    }
}

function renderReport() {
    const $panel = $('#report-panel');
    if (!hasReportDocument || !reportMarkdown.trim()) {
        $panel.html('<div class="empty-report"><h3>准备开始一份新的分析</h3><p>上传两至五份 PDF 数据表后，系统会在这里呈现分析过程与结论。</p></div>');
        return;
    }
    $panel.html(`<div class="success-box"><h3>分析报告</h3><div class="report-markdown">${marked(reportMarkdown)}</div></div>`);
    $panel.find('pre code').each((_, block) => hljs.highlightElement(block));
}

function scheduleStreamingPreviewRender() {
    if (reportRenderFrame !== null) return;
    reportRenderFrame = window.requestAnimationFrame(() => {
        reportRenderFrame = null;
        const $content = $('#streaming-content');
        if (!$content.length) return;
        $content.html(marked(reportMarkdown));
        $content.find('pre code').each((_, block) => hljs.highlightElement(block));
    });
}

function loadBalance() {
    $.get('/api/payment/alipay/balance')
        .done(response => {
            const balance = response && response.data && response.data.totalBalance;
            $('.balance-value').text(balance === null || balance === undefined ? '余额不可用' : `余额 ¥${balance}`);
        })
        .fail(() => $('.balance-value').text('余额不可用'));
}

function setAnalysisState(state, label) {
    $analysisIndicator.removeClass('is-running is-complete');
    if (state) $analysisIndicator.addClass(state);
    $analysisIndicatorText.text(label);
}

function setProgress(percent, stage) {
    const normalized = Math.max(0, Math.min(100, Number(percent) || 0));
    $progress.width(`${normalized}%`);
    $progressPercent.text(`${normalized}%`);
    $progressStage.text(stage);
}

function startElapsedTimer() {
    analysisStartedAt = Date.now();
    window.clearInterval(elapsedTimer);
    elapsedTimer = window.setInterval(() => {
        const elapsedSeconds = Math.floor((Date.now() - analysisStartedAt) / 1000);
        $progressElapsed.text(`${String(Math.floor(elapsedSeconds / 60)).padStart(2, '0')}:${String(elapsedSeconds % 60).padStart(2, '0')}`);
    }, 1000);
}

function stopElapsedTimer() {
    window.clearInterval(elapsedTimer);
    elapsedTimer = null;
}

function updateFileUi() {
    $('.file-count').text(fileCount);
    $('.upload-dropzone').toggleClass('is-full', fileCount + uploadPending >= MAX_FILES);
    $('.upload-primary').text(fileCount + uploadPending >= MAX_FILES ? '已达到文件上限' : '选择 PDF 数据表');
    $('.action-hint').text(fileCount < MIN_FILES ? `至少上传 ${MIN_FILES} 份数据表后即可开始` : `已就绪：${fileCount} 份数据表`);
    $analyzeButton.prop('disabled', analysisRunning || fileCount < MIN_FILES || fileCount > MAX_FILES);
}

function resetAnalysisButton() {
    analysisRunning = false;
    $buttonText.text('开始分析');
    $analyzeButton.removeClass('is-loading');
    $analysisProgress.removeClass('is-running');
    stopElapsedTimer();
    updateFileUi();
}

function showTab(tabId) {
    const $tab = $(`.tab-item[data-tab="${tabId}"]`);
    $('.tab-item').removeClass('active').attr('aria-selected', 'false');
    $tab.addClass('active').attr('aria-selected', 'true');
    $('.tab-pane').removeClass('active');
    $(`#${tabId}-panel`).addClass('active');
    if (tabId === 'recent') getChipCompareRecords();
    if (tabId === 'report') {
        // Render only from the page-level report state. Do not pull from the iframe here.
        renderReport();
    }
}

$('.tab-header').on('click', '.tab-item', function () {
    showTab($(this).data('tab'));
});

$('.workspace-fullscreen').on('click', function () {
    const shell = document.querySelector('.app-shell');
    shell.classList.toggle('workspace-maximized');
    $(this).attr('aria-label', shell.classList.contains('workspace-maximized') ? '退出全屏编辑器' : '全屏编辑器');
    window.setTimeout(() => window.dispatchEvent(new Event('resize')), 80);
});

$(document).on('keydown', function (event) {
    if (event.key === 'Escape' && $('.app-shell').hasClass('workspace-maximized')) {
        $('.app-shell').removeClass('workspace-maximized');
        $('.workspace-fullscreen').attr('aria-label', '全屏编辑器');
    }
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

function escapeHtml(value) {
    return $('<div>').text(value).html();
}

$('#file-upload').on('change', function (event) {
    const slots = MAX_FILES - fileCount - uploadPending;
    const selected = [...event.target.files];
    if (selected.length > slots) alert(`最多只能上传 ${MAX_FILES} 份 PDF，本次仅处理前 ${Math.max(slots, 0)} 份。`);
    selected.slice(0, Math.max(slots, 0)).forEach(uploadFile);
    this.value = '';
});

function uploadFile(file) {
    if (file.type && file.type !== 'application/pdf' && !file.name.toLowerCase().endsWith('.pdf')) {
        alert(`${file.name} 不是 PDF 文件`);
        return;
    }
    uploadPending++;
    const itemId = `upload-${Date.now()}-${Math.random().toString(16).slice(2)}`;
    $('.file-list').append(`<li id="${itemId}" class="is-uploading"><div>${escapeHtml(file.name)}</div><span>${escapeHtml(file.name)} · 上传中</span><small class="file-upload-state">正在上传</small></li>`);
    updateFileUi();
    const formData = new FormData();
    formData.append('file', file);
    $.ajax({
        url: '/api/chip/pdf/upload', type: 'POST', data: formData, processData: false, contentType: false,
        success: function (data) {
            uploadPending--;
            const $item = $(`#${itemId}`);
            if (data.status !== 0) {
                $item.remove();
                alert(`${file.name} 上传失败`);
                updateFileUi();
                return;
            }
            fileCount++;
            const partNumber = file.name.replace(/\.[^/.]+$/, '');
            $item.removeClass('is-uploading').attr('data-file', 'true').html(`<div>${escapeHtml(file.name)}</div><span>${escapeHtml(file.name)} · ${(file.size / 1024 / 1024).toFixed(2)} MB</span><input type="text" value="${escapeHtml(partNumber)}" placeholder="芯片型号" aria-label="芯片型号"><button class="remove-file" type="button" aria-label="移除 ${escapeHtml(file.name)}"></button>`);
            updateFileUi();
        },
        error: function () {
            uploadPending--;
            $(`#${itemId}`).remove();
            alert(`${file.name} 上传失败，请重试`);
            updateFileUi();
        }
    });
}

$('.file-list').on('click', '.remove-file', function () {
    fileCount--;
    $(this).closest('li').remove();
    updateFileUi();
});

function collectRequestData() {
    const $files = $('.file-list li[data-file="true"]');
    return {
        fileList: $files.map(function () { return $(this).find('div').text(); }).get(),
        chipPartNumberList: $files.map(function () { return $(this).find('input').val().trim(); }).get(),
        mode: $('input[name="mode"]:checked').val() || 'full'
    };
}

function renderError(message) {
    $('#report-panel').html(`<div class="error-box"><h3>分析失败</h3><p>${escapeHtml(message)}</p></div>`);
    setAnalysisState('', '分析失败');
    setProgress(0, '分析失败');
    resetAnalysisButton();
}

$analyzeButton.on('click', function () {
    if (fileCount < MIN_FILES || fileCount > MAX_FILES || analysisRunning) return;
    if (hasReportDocument && reportMarkdown.trim() && !window.confirm('开始新的分析会覆盖当前编辑器中的报告内容，是否继续？')) return;

    reportMarkdown = '';
    lastEditorValue = '';
    hasReportDocument = false;
    analysisRunning = true;
    $buttonText.text('分析中');
    $analyzeButton.addClass('is-loading').prop('disabled', true);
    $analysisProgress.addClass('is-running');
    setAnalysisState('is-running', '任务已启动');
    setProgress(5, '分析任务已启动');
    startElapsedTimer();
    showTab('report');
    if ($('#streaming-checkbox').prop('checked')) analyzeWithStream();
    else analyze();
});

async function analyzeWithStream() {
    const request = collectRequestData();
    const $reportPanel = $('#report-panel');
    $reportPanel.html('<div class="info-box"><div id="streaming-content"><h3>正在准备分析</h3><p>系统正在建立任务上下文。</p></div></div>');
    try {
        const response = await fetch('/api/chip/analyze/stream', {
            method: 'POST', headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({...request, stream: true})
        });
        if (!response.ok) throw new Error(await response.text() || '请求失败');
        const reader = response.body.getReader();
        const decoder = new TextDecoder('utf-8');
        let pendingText = '';
        while (true) {
            const {done, value} = await reader.read();
            if (done) break;
            pendingText += decoder.decode(value, {stream: true});
            const lines = pendingText.split('\n');
            pendingText = lines.pop();
            for (const line of lines) {
                handleStreamLine(line);
            }
        }
        if (pendingText.trim()) handleStreamLine(pendingText);
        reportMarkdown = reportMarkdown.replace(/```markdown\s*([\s\S]*?)\s*```/gm, '$1').trim();
        hasReportDocument = true;
        lastEditorValue = reportMarkdown;
        setMdEditorContent(reportMarkdown);
        renderReport();
        setProgress(100, '分析完成');
        setAnalysisState('is-complete', '分析完成');
        resetAnalysisButton();
        loadBalance();
    } catch (error) {
        renderError(error.message || '分析请求失败');
    }
}

function handleStreamLine(line) {
    const payload = line.startsWith('data:') ? line.substring(5).trim() : line.trim();
    if (!payload) return;
    let chunk;
    try { chunk = JSON.parse(payload); } catch (_) { return; }
    if (chunk.type === 'error') throw new Error(chunk.content || '服务端分析失败');
    if (chunk.type === 'progress') {
        setProgress(chunk.progress, chunk.content || '正在分析');
        setAnalysisState('is-running', chunk.content || '正在分析');
        return;
    }
    if (chunk.type === 'message' && chunk.content) {
        reportMarkdown += chunk.content;
        scheduleStreamingPreviewRender();
        scheduleEditorSync();
    }
}

function analyze() {
    const request = collectRequestData();
    setProgress(25, '正在解析并分析数据表');
    $.ajax({
        url: '/api/chip/analyze', type: 'POST', contentType: 'application/json',
        data: JSON.stringify({...request, stream: false}),
        success: function (response) {
            if (response.status !== 0) {
                renderError('服务端未能完成分析');
                return;
            }
            reportMarkdown = response.data || '';
            hasReportDocument = true;
            lastEditorValue = reportMarkdown;
            setMdEditorContent(reportMarkdown);
            renderReport();
            setProgress(100, '分析完成');
            setAnalysisState('is-complete', '分析完成');
            resetAnalysisButton();
            loadBalance();
        },
        error: function (xhr) {
            renderError(xhr.responseText || xhr.statusText || '请求失败');
        }
    });
}
