/*
 * Demo Tool Page JavaScript
 *
 * Extracted from demo.html prototype
 * Dependencies: None (vanilla JavaScript)
 *
 * Features:
 * - Tab switching
 * - File upload and management
 * - Format selection
 * - Toggle switches
 * - Modal dialogs (blog publishing)
 * - Toast notifications
 * - Q&A chat interface
 * - Progress bar simulation
 */

/**
 * Tab Switching
 */
function initTabSwitching() {
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const tabName = btn.dataset.tab;

            // Update tab button states
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // Update tab content visibility
            document.querySelectorAll('.tab-content').forEach(content => {
                content.classList.remove('active');
            });
            const targetTab = document.getElementById(tabName + '-tab');
            if (targetTab) {
                targetTab.classList.add('active');
            }
        });
    });
}

/**
 * Format Selection (single-select mode)
 */
function initFormatSelection() {
    document.querySelectorAll('.format-chip').forEach(chip => {
        chip.addEventListener('click', () => {
            document.querySelectorAll('.format-chip').forEach(c => c.classList.remove('active'));
            chip.classList.add('active');
        });
    });
}

/**
 * Toggle Switch Interaction
 */
function initToggleSwitches() {
    document.querySelectorAll('.toggle').forEach(toggle => {
        toggle.addEventListener('click', () => {
            toggle.classList.toggle('active');
        });
    });
}

/**
 * File Item Selection
 */
function initFileSelection() {
    document.querySelectorAll('.file-item').forEach(item => {
        item.addEventListener('click', (e) => {
            // Don't select if clicking remove button
            if (!e.target.closest('.file-remove')) {
                document.querySelectorAll('.file-item').forEach(i => i.classList.remove('active'));
                item.classList.add('active');
            }
        });
    });
}

/**
 * File Removal
 */
function initFileRemoval() {
    document.querySelectorAll('.file-remove').forEach(removeBtn => {
        removeBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            const fileItem = removeBtn.closest('.file-item');
            fileItem.style.transform = 'translateX(100%)';
            fileItem.style.opacity = '0';
            setTimeout(() => {
                fileItem.remove();
            }, 300);
        });
    });
}

/**
 * File Upload Handler
 */
function initFileUpload() {
    const fileUpload = document.getElementById('file-upload');
    if (fileUpload) {
        fileUpload.addEventListener('change', (e) => {
            const files = Array.from(e.target.files);
            console.log('Selected files:', files);
            // In production, handle file upload here
        });
    }
}

/**
 * Drag and Drop Upload
 */
function initDragDrop() {
    const uploadSection = document.querySelector('.upload-section');
    if (!uploadSection) return;

    function preventDefaults(e) {
        e.preventDefault();
        e.stopPropagation();
    }

    ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
        uploadSection.addEventListener(eventName, preventDefaults, false);
    });

    ['dragenter', 'dragover'].forEach(eventName => {
        uploadSection.addEventListener(eventName, () => {
            uploadSection.style.borderColor = 'var(--accent-orange)';
            uploadSection.style.backgroundColor = 'rgba(217, 119, 87, 0.08)';
        }, false);
    });

    ['dragleave', 'drop'].forEach(eventName => {
        uploadSection.addEventListener(eventName, () => {
            uploadSection.style.borderColor = '';
            uploadSection.style.backgroundColor = '';
        }, false);
    });

    uploadSection.addEventListener('drop', (e) => {
        const dt = e.dataTransfer;
        const files = dt.files;
        const fileUpload = document.getElementById('file-upload');
        if (fileUpload) {
            fileUpload.files = files;
            const event = new Event('change', { bubbles: true });
            fileUpload.dispatchEvent(event);
        }
    }, false);
}

/**
 * Input Container Focus Animation
 */
function initInputAnimation() {
    const inputContainer = document.querySelector('.input-container input');
    if (inputContainer) {
        inputContainer.addEventListener('focus', () => {
            inputContainer.parentElement.style.transform = 'translateY(-2px)';
        });

        inputContainer.addEventListener('blur', () => {
            inputContainer.parentElement.style.transform = '';
        });
    }
}

/**
 * Simulate Progress Bar Animation
 */
function simulateProgress() {
    const progressFill = document.querySelector('.progress-fill');
    const progressContainer = document.querySelector('.progress-container');

    if (progressFill && progressContainer) {
        progressContainer.style.display = 'block';
        let progress = 0;
        const interval = setInterval(() => {
            progress += Math.random() * 15;
            if (progress >= 100) {
                progress = 100;
                clearInterval(interval);
                setTimeout(() => {
                    progressContainer.style.display = 'none';
                    progressFill.style.width = '0%';
                }, 500);
            }
            progressFill.style.width = progress + '%';
        }, 200);
    }
}

/**
 * Q&A Interface Functions
 */
const QAInterface = {
    elements: {
        qaMessages: null,
        qaWelcome: null,
        qaTyping: null,
        qaInput: null
    },

    init() {
        this.elements.qaMessages = document.getElementById('qa-messages');
        this.elements.qaWelcome = document.getElementById('qa-welcome');
        this.elements.qaTyping = document.getElementById('qa-typing');
        this.elements.qaInput = document.querySelector('.input-container input');

        this.initSuggestionChips();
        this.initInputHandlers();
    },

    addMessage(text, isUser = false) {
        const { qaMessages, qaWelcome } = this.elements;

        // First message: hide welcome screen
        if (qaWelcome && qaWelcome.style.display !== 'none') {
            qaWelcome.style.display = 'none';
            if (qaMessages) qaMessages.style.display = 'flex';
        }

        if (!qaMessages) return;

        const messageDiv = document.createElement('div');
        messageDiv.className = `qa-message ${isUser ? 'user' : 'assistant'}`;

        const avatar = document.createElement('div');
        avatar.className = `qa-avatar ${isUser ? 'user-avatar' : 'assistant-avatar'}`;
        avatar.textContent = isUser ? 'U' : 'AI';

        const content = document.createElement('div');
        content.className = 'qa-content';
        content.innerHTML = text;

        const timestamp = document.createElement('span');
        timestamp.className = 'qa-timestamp';
        timestamp.textContent = new Date().toLocaleTimeString('zh-CN', {
            hour: '2-digit',
            minute: '2-digit'
        });
        content.appendChild(timestamp);

        if (isUser) {
            messageDiv.appendChild(content);
            messageDiv.appendChild(avatar);
        } else {
            messageDiv.appendChild(avatar);
            messageDiv.appendChild(content);
        }

        qaMessages.appendChild(messageDiv);
        qaMessages.scrollTop = qaMessages.scrollHeight;
    },

    simulateAIResponse(question) {
        const { qaMessages, qaTyping } = this.elements;

        if (qaTyping) {
            qaTyping.classList.add('active');
            if (qaMessages) {
                qaMessages.appendChild(qaTyping);
                qaMessages.scrollTop = qaMessages.scrollHeight;
            }
        }

        setTimeout(() => {
            if (qaTyping) qaTyping.classList.remove('active');

            // Generate response based on question keywords
            let response = '';
            if (question.includes('Pin2Pin') || question.includes('替代')) {
                response = '进行 Pin2Pin 芯片替代分析的步骤如下：<br><br>1️⃣ <strong>上传数据表</strong>：在左侧上传区域上传两个待对比芯片的PDF数据表<br>2️⃣ <strong>参数提取</strong>：系统会自动提取关键参数（电压、电流、封装等）<br>3️⃣ <strong>智能对比</strong>：AI 会分析功能、性能、封装等多个维度<br>4️⃣ <strong>生成报告</strong>：自动生成详细的对比分析报告<br><br>💡 <em>建议重点关注：供电电压、输出电流、封装尺寸、引脚定义等关键参数</em>';
            } else if (question.includes('参数') || question.includes('指标')) {
                response = '芯片替代的<strong>关键指标</strong>包括：<br><br>⚡ <strong>电气参数</strong>：供电电压、工作电流、输入输出特性<br>📦 <strong>封装参数</strong>：封装类型、引脚数量、尺寸规格<br>🌡️ <strong>环境参数</strong>：工作温度范围、存储温度<br>⚙️ <strong>功能特性</strong>：核心功能、特殊功能、保护机制<br>📊 <strong>性能指标</strong>：精度、速度、功耗等<br><br>这些参数直接影响替代的可行性和兼容性。';
            } else if (question.includes('上传') || question.includes('分析')) {
                response = '上传和分析芯片数据表很简单：<br><br>📤 <strong>上传方式</strong>：<br>• 点击左侧上传区域选择文件<br>• 或直接拖拽PDF文件到上传区<br>• 最多支持2个文件同时上传<br><br>🔍 <strong>分析流程</strong>：<br>1. 上传完成后，在底部输入框可添加特殊要求<br>2. 点击发送按钮开始分析<br>3. 系统会实时显示分析进度<br>4. 完成后在编辑器或报告页查看结果<br><br>✨ 支持实时流式输出，让您第一时间看到分析结果！';
            } else if (question.includes('类型') || question.includes('支持')) {
                response = '本系统支持多种<strong>芯片类型</strong>的分析：<br><br>🔌 <strong>模拟芯片</strong>：运放、比较器、电源管理等<br>💾 <strong>数字芯片</strong>：逻辑门、触发器、计数器等<br>🔄 <strong>接口芯片</strong>：RS232、CAN、I2C等通信芯片<br>⚙️ <strong>混合信号</strong>：ADC、DAC、时钟芯片等<br>📡 <strong>射频芯片</strong>：放大器、混频器、调制器等<br><br>只要有完整的PDF数据表，系统都能进行智能分析！';
            } else {
                response = '感谢您的提问！我是智能芯片分析助手，专注于帮助您：<br><br>✅ 进行Pin2Pin芯片替代分析<br>✅ 对比芯片关键参数<br>✅ 生成详细的分析报告<br>✅ 提供专业的替代建议<br><br>您可以尝试问我：<br>• 如何进行芯片替代分析<br>• 哪些参数最重要<br>• 如何使用这个系统<br><br>有任何问题随时问我！😊';
            }

            this.addMessage(response, false);
        }, 1500);
    },

    handleInput() {
        const { qaInput } = this.elements;
        const activeTab = document.querySelector('.tab-btn.active');

        if (activeTab && activeTab.dataset.tab === 'qa' && qaInput && qaInput.value.trim()) {
            const question = qaInput.value.trim();
            this.addMessage(question, true);
            qaInput.value = '';
            this.simulateAIResponse(question);
        } else if (activeTab && activeTab.dataset.tab === 'editor') {
            // Editor mode - simulate progress
            simulateProgress();
        }
    },

    initSuggestionChips() {
        document.querySelectorAll('.suggestion-chip').forEach(chip => {
            chip.addEventListener('click', () => {
                const question = chip.dataset.question || chip.textContent;
                if (this.elements.qaInput) {
                    this.elements.qaInput.value = question;
                    this.handleInput();
                }
            });
        });
    },

    initInputHandlers() {
        const startBtn = document.querySelector('.input-btn');
        if (startBtn) {
            startBtn.addEventListener('click', () => this.handleInput());
        }

        if (this.elements.qaInput) {
            this.elements.qaInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    this.handleInput();
                }
            });
        }
    }
};

/**
 * Blog Publishing Modal
 */
const BlogPublishModal = {
    elements: {
        publishBtn: null,
        modal: null,
        closeBtn: null,
        cancelBtn: null,
        confirmBtn: null,
        form: null,
        textarea: null,
        toast: null
    },

    init() {
        this.elements.publishBtn = document.getElementById('publish-blog-btn');
        this.elements.modal = document.getElementById('publish-modal');
        this.elements.closeBtn = document.getElementById('close-publish-modal');
        this.elements.cancelBtn = document.getElementById('cancel-publish');
        this.elements.confirmBtn = document.getElementById('confirm-publish');
        this.elements.form = document.getElementById('publish-form');
        this.elements.textarea = document.querySelector('.editor-pane textarea');
        this.elements.toast = document.getElementById('publish-success-toast');

        this.attachEventListeners();
        this.initAutoSlugGeneration();
    },

    attachEventListeners() {
        const { publishBtn, closeBtn, cancelBtn, confirmBtn, modal } = this.elements;

        if (publishBtn) {
            publishBtn.addEventListener('click', () => this.open());
        }

        if (closeBtn) {
            closeBtn.addEventListener('click', () => this.close());
        }

        if (cancelBtn) {
            cancelBtn.addEventListener('click', () => this.close());
        }

        if (confirmBtn) {
            confirmBtn.addEventListener('click', (e) => this.submit(e));
        }

        // Click overlay to close
        if (modal) {
            modal.addEventListener('click', (e) => {
                if (e.target === modal) this.close();
            });
        }

        // ESC key to close
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modal && modal.classList.contains('active')) {
                this.close();
            }
        });

        // Toast buttons
        const viewArticleBtn = document.getElementById('view-article');
        const continueEditBtn = document.getElementById('continue-edit');

        if (viewArticleBtn) {
            viewArticleBtn.addEventListener('click', () => {
                const url = document.getElementById('article-url-link').href;
                console.log('🔗 跳转到文章：', url);
                alert(`将跳转到：${url}\n（原型模式，实际开发时会打开真实URL）`);
                this.elements.toast.classList.remove('active');
            });
        }

        if (continueEditBtn) {
            continueEditBtn.addEventListener('click', () => {
                this.elements.toast.classList.remove('active');
            });
        }
    },

    open() {
        const { modal, textarea } = this.elements;
        const content = textarea ? textarea.value : '';

        if (!content.trim()) {
            alert('请先编写 Markdown 内容再发布！');
            return;
        }

        this.updateContentStats(content);
        if (modal) modal.classList.add('active');
    },

    close() {
        const { modal, form } = this.elements;
        if (modal) modal.classList.remove('active');
        if (form) form.reset();
    },

    updateContentStats(content) {
        const charCount = content.length;
        const readTime = Math.ceil(charCount / 400);

        const charCountEl = document.getElementById('char-count');
        const readTimeEl = document.getElementById('read-time');

        if (charCountEl) charCountEl.textContent = charCount;
        if (readTimeEl) readTimeEl.textContent = readTime;
    },

    initAutoSlugGeneration() {
        const titleInput = document.getElementById('article-title');
        const enTitleInput = document.getElementById('article-en-title');

        if (titleInput && enTitleInput) {
            titleInput.addEventListener('input', (e) => {
                const slug = e.target.value
                    .toLowerCase()
                    .replace(/\s+/g, '-')
                    .replace(/[^\w\-\u4e00-\u9fa5]+/g, '')
                    .substring(0, 50);

                if (slug && !enTitleInput.value) {
                    enTitleInput.value = slug || 'untitled-article';
                }
            });
        }
    },

    submit(e) {
        e.preventDefault();

        const title = document.getElementById('article-title').value.trim();
        const enTitle = document.getElementById('article-en-title').value.trim();
        const tag = document.getElementById('article-tag').value;

        if (!title || !enTitle || !tag) {
            alert('请填写必填项：标题、英文标题和分类标签');
            return;
        }

        const formData = {
            title: title,
            enTitle: enTitle,
            subtitle: document.getElementById('article-subtitle').value.trim(),
            tag: tag,
            coverImage: document.getElementById('article-cover').value.trim(),
            privacy: document.querySelector('input[name="privacy"]:checked').value,
            content: this.elements.textarea.value,
            publishTime: new Date().toLocaleString('zh-CN')
        };

        // Show loading state
        const btnText = this.elements.confirmBtn.querySelector('.btn-text');
        const btnLoading = this.elements.confirmBtn.querySelector('.btn-loading');
        if (btnText) btnText.style.display = 'none';
        if (btnLoading) btnLoading.style.display = 'flex';
        this.elements.confirmBtn.disabled = true;

        // Simulate publish (1.5s delay)
        setTimeout(() => {
            // Restore button state
            if (btnText) btnText.style.display = 'inline';
            if (btnLoading) btnLoading.style.display = 'none';
            this.elements.confirmBtn.disabled = false;

            this.close();
            this.showSuccessToast(formData);

            console.log('📝 文章发布数据：', formData);
        }, 1500);
    },

    showSuccessToast(data) {
        const articleUrl = `/article/${data.enTitle}`;
        const urlLink = document.getElementById('article-url-link');

        if (urlLink) {
            urlLink.textContent = articleUrl;
            urlLink.href = articleUrl;
        }

        if (this.elements.toast) {
            this.elements.toast.classList.add('active');

            // Auto-hide after 5 seconds
            setTimeout(() => {
                this.elements.toast.classList.remove('active');
            }, 5000);
        }
    }
};

/**
 * Keyboard Shortcuts
 */
function initKeyboardShortcuts() {
    document.addEventListener('keydown', (e) => {
        // Ctrl/Cmd + K: Focus input
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
            e.preventDefault();
            const input = document.querySelector('.input-container input');
            if (input) input.focus();
        }
    });
}

/**
 * Initialize all demo page features
 */
function initDemoPage() {
    initTabSwitching();
    initFormatSelection();
    initToggleSwitches();
    initFileSelection();
    initFileRemoval();
    initFileUpload();
    initDragDrop();
    initInputAnimation();
    initKeyboardShortcuts();

    QAInterface.init();
    BlogPublishModal.init();
}

// Auto-initialize on DOM ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initDemoPage);
} else {
    initDemoPage();
}

// Export for manual use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        initTabSwitching,
        initFormatSelection,
        initToggleSwitches,
        initFileSelection,
        initFileRemoval,
        initFileUpload,
        initDragDrop,
        simulateProgress,
        QAInterface,
        BlogPublishModal,
        initDemoPage
    };
}
