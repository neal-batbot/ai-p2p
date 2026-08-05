/*
 * Navbar Common JavaScript (Base Layout)
 *
 * Features:
 * - Scroll shadow on navbar
 * - Mobile menu toggle
 */

function initNavbarScroll() {
    const navbar = document.querySelector('.navbar');

    if (!navbar) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 40) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

function initNavbarToggle() {
    const toggle = document.getElementById('navbar-toggle');
    const mobileMenu = document.getElementById('navbar-mobile');

    if (!toggle || !mobileMenu) return;

    toggle.addEventListener('click', () => {
        toggle.classList.toggle('active');
        mobileMenu.classList.toggle('active');
    });

    mobileMenu.querySelectorAll('.navbar-mobile-link').forEach((link) => {
        link.addEventListener('click', () => {
            toggle.classList.remove('active');
            mobileMenu.classList.remove('active');
        });
    });
}

function initNavbar() {
    initNavbarScroll();
    initNavbarToggle();
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initNavbar);
} else {
    initNavbar();
}
