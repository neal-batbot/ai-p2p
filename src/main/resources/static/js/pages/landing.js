/*
 * Landing Page JavaScript
 *
 * Extracted from landing.html prototype
 * Dependencies: common/navbar.js (optional, auto-loads)
 *
 * Features:
 * - Button click tracking/handling
 * - Intersection observer for scroll animations
 * - Console easter egg
 */

/**
 * Initialize button click handlers
 * Handles primary buttons and pricing buttons
 */
function initButtonHandlers() {
    document.querySelectorAll('.btn-primary, .pricing-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            // Only intercept if it's a placeholder link (# or no href)
            if (!this.href || this.href === '#' || this.href.endsWith('#')) {
                e.preventDefault();
                console.log('Button clicked:', this.textContent.trim());
                alert('感谢您的兴趣！这是一个原型演示。\n实际产品中，此按钮将引导您完成注册或购买流程。');
            }
        });
    });
}

/**
 * Initialize scroll-triggered animations for cards
 * Uses Intersection Observer API for performance
 */
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Set initial state for animation
                entry.target.style.opacity = '0';
                entry.target.style.transform = 'translateY(30px)';
                entry.target.style.transition = 'all 0.6s ease';

                // Trigger animation after a short delay
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, 100);

                // Stop observing once animated
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all animatable elements
    document.querySelectorAll('.feature-card, .workflow-step, .pricing-card, .blog-card').forEach(el => {
        observer.observe(el);
    });
}

/**
 * Show console easter egg
 * Displays branded message in browser console
 */
function showConsoleEasterEgg() {
    console.log('%c🚀 CHIP AI - Powered by Claude', 'font-size: 20px; color: #d97757; font-weight: bold;');
    console.log('%c欢迎探索我们的产品！有任何问题欢迎联系我们。', 'font-size: 14px; color: #787773;');
}

/**
 * Initialize all landing page features
 */
function initLandingPage() {
    initButtonHandlers();
    initScrollAnimations();
    showConsoleEasterEgg();
}

// Auto-initialize on DOM ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initLandingPage);
} else {
    initLandingPage();
}

// Export functions for manual use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        initButtonHandlers,
        initScrollAnimations,
        showConsoleEasterEgg,
        initLandingPage
    };
}
