# Thymeleaf Layout System Documentation

This directory contains the master layout templates for the CHIP AI application. The layout system provides reusable fragments for consistent site-wide styling and navigation.

## Table of Contents
- [Overview](#overview)
- [Base Layout Structure](#base-layout-structure)
- [Available Fragments](#available-fragments)
- [Usage Examples](#usage-examples)
- [Navigation Structure](#navigation-structure)
- [Customization](#customization)

---

## Overview

The layout system is built using Thymeleaf's fragment functionality, allowing pages to reuse common elements like headers, navigation, and footers while maintaining flexibility for page-specific customization.

**Key Benefits:**
- Consistent navigation and branding across all pages
- DRY principle: common elements defined once
- Easy to maintain and update site-wide components
- Flexible CSS and JS injection per page
- Mobile-responsive design built-in

---

## Base Layout Structure

The main layout file is `layouts/base.html` which contains these fragments:

```
base.html
├── head-common       (meta tags, fonts, core CSS)
├── navbar            (navigation bar with logo and links)
├── content           (main content area - placeholder)
├── footer            (site footer with links and copyright)
└── scripts-common    (jQuery and common JS)
```

---

## Available Fragments

### 1. `head-common` - Common Head Elements

Contains meta tags, Anthropic brand fonts, and core CSS files.

**Features:**
- UTF-8 charset and responsive viewport
- Dynamic page title with fallback
- Preloaded Google Fonts (Poppins and Lora)
- Core CSS files (brand, navbar, footer)
- Page-specific CSS injection point

**Usage:**
```html
<head>
    <th:block th:replace="layouts/base :: head-common"/>
    <!-- Add page-specific CSS here -->
    <link rel="stylesheet" th:href="@{/static/css/your-page.css}">
</head>
```

**Variables:**
- `${pageTitle}` - Set this variable to customize the page title
  - Example: `model.addAttribute("pageTitle", "芯片分析 - CHIP AI");`

---

### 2. `navbar` - Navigation Bar

A fully responsive navigation bar with desktop and mobile views.

**Features:**
- Logo with emoji icon (🔬) and "CHIP AI" text
- Desktop horizontal menu
- Mobile hamburger menu
- User authentication state (logged in/logged out)
- Thymeleaf URL generation for all links

**Navigation Links:**
- 首页 (Home) - `/`
- 搜索 (Search) - `/search`
- Pin2Pin分析 (Analysis) - `/chip`
- 博客 (Blog) - `/blog`
- 关于 (About) - `/about`

**User State:**
- If logged in: Shows username and "退出" (logout)
- If logged out: Shows "登录" (login) button

**Usage:**
```html
<body>
    <nav th:replace="layouts/base :: navbar"></nav>
    <!-- Your page content -->
</body>
```

**Session Variables:**
- `${session.admin}` - Admin/user object (null if not logged in)
- `${session.admin.name}` - Username to display

---

### 3. `footer` - Site Footer

A comprehensive footer with four columns and social links.

**Columns:**
1. **关于我们 (About Us)** - Description and logo
2. **产品服务 (Products)** - Chip analysis, Pin2Pin, search, chat
3. **资源中心 (Resources)** - Blog, guides, API docs
4. **联系我们 (Contact)** - About, email, partners, privacy

**Features:**
- Responsive grid layout
- Social media icons (GitHub, Twitter, Email)
- Copyright notice with current year
- "Powered by Anthropic Claude" attribution

**Usage:**
```html
<body>
    <!-- Your page content -->
    <footer th:replace="layouts/base :: footer"></footer>
</body>
```

---

### 4. `scripts-common` - Common JavaScript

Includes jQuery and navbar functionality.

**Files Loaded:**
- jQuery (required for most pages)
- Navbar mobile menu toggle script

**Usage:**
```html
<body>
    <!-- Your content -->

    <th:block th:replace="layouts/base :: scripts-common"/>
    <!-- Add page-specific JS here -->
    <script th:src="@{/static/js/your-script.js}"></script>
</body>
```

---

## Usage Examples

### Example 1: Basic Page with Layout

Create a new page that uses the full layout system:

```html
<!DOCTYPE html>
<html lang="zh-CN" xmlns:th="http://www.thymeleaf.org">
<head>
    <th:block th:replace="layouts/base :: head-common"/>
    <!-- Page-specific CSS -->
    <link rel="stylesheet" th:href="@{/static/css/landing.css}">
</head>
<body>
    <nav th:replace="layouts/base :: navbar"></nav>

    <main>
        <!-- Your page content -->
        <section class="hero">
            <h1>欢迎使用 CHIP AI</h1>
            <p>智能芯片分析平台</p>
        </section>
    </main>

    <footer th:replace="layouts/base :: footer"></footer>

    <th:block th:replace="layouts/base :: scripts-common"/>
    <!-- Page-specific JS -->
    <script th:src="@{/static/js/landing.js}"></script>
</body>
</html>
```

---

### Example 2: Page with Custom Title

Set a custom page title by passing a variable from the controller:

**Controller:**
```java
@GetMapping("/chip")
public String chipPage(Model model) {
    model.addAttribute("pageTitle", "Pin2Pin分析 - CHIP AI");
    return "chip";
}
```

**Template:**
```html
<!DOCTYPE html>
<html lang="zh-CN" xmlns:th="http://www.thymeleaf.org">
<head>
    <th:block th:replace="layouts/base :: head-common"/>
    <link rel="stylesheet" th:href="@{/static/css/chip.css}">
</head>
<body>
    <nav th:replace="layouts/base :: navbar"></nav>

    <main>
        <h1>Pin2Pin 芯片替换分析</h1>
        <!-- Content -->
    </main>

    <footer th:replace="layouts/base :: footer"></footer>
    <th:block th:replace="layouts/base :: scripts-common"/>
</body>
</html>
```

---

### Example 3: Page with Multiple Custom CSS Files

```html
<!DOCTYPE html>
<html lang="zh-CN" xmlns:th="http://www.thymeleaf.org">
<head>
    <th:block th:replace="layouts/base :: head-common"/>
    <!-- Multiple page-specific CSS files -->
    <link rel="stylesheet" th:href="@{/static/css/blog.css}">
    <link rel="stylesheet" th:href="@{/static/css/article.css}">
    <link rel="stylesheet" th:href="@{/static/css/syntax-highlight.css}">
</head>
<body>
    <nav th:replace="layouts/base :: navbar"></nav>

    <main>
        <!-- Article content -->
    </main>

    <footer th:replace="layouts/base :: footer"></footer>
    <th:block th:replace="layouts/base :: scripts-common"/>
    <script th:src="@{/static/js/article.js}"></script>
</body>
</html>
```

---

### Example 4: Minimal Page (No Footer)

For pages like login or payment that don't need the full layout:

```html
<!DOCTYPE html>
<html lang="zh-CN" xmlns:th="http://www.thymeleaf.org">
<head>
    <th:block th:replace="layouts/base :: head-common"/>
    <link rel="stylesheet" th:href="@{/static/css/login.css}">
</head>
<body>
    <nav th:replace="layouts/base :: navbar"></nav>

    <main class="login-page">
        <!-- Login form -->
    </main>

    <!-- No footer for minimal pages -->

    <th:block th:replace="layouts/base :: scripts-common"/>
    <script th:src="@{/static/js/login.js}"></script>
</body>
</html>
```

---

## Navigation Structure

The navbar provides access to all main site sections:

```
Site Navigation
├── 首页 (/)                    - Landing page
├── 搜索 (/search)              - Chip search interface
├── Pin2Pin分析 (/chip)         - Chip comparison and analysis
├── 博客 (/blog)                - Technical blog and articles
├── 关于 (/about)               - About page and documentation
└── Auth Section
    ├── 登录 (/login)           - Login page (if not logged in)
    ├── [Username] (/manage)    - User dashboard (if logged in)
    └── 退出 (/logout)          - Logout action (if logged in)
```

**Mobile Navigation:**
- Hamburger menu icon on mobile screens (< 768px)
- Full-screen mobile menu overlay
- Same links as desktop, stacked vertically

---

## Customization

### Adding New Navigation Links

To add a new link to the navbar, edit `layouts/base.html`:

1. **Desktop menu** - Add to `.navbar-menu`:
```html
<li class="navbar-item">
    <a th:href="@{/new-page}" class="navbar-link">新页面</a>
</li>
```

2. **Mobile menu** - Add to `.navbar-mobile-menu`:
```html
<li class="navbar-mobile-item">
    <a th:href="@{/new-page}" class="navbar-mobile-link">新页面</a>
</li>
```

---

### Styling Navbar

The navbar uses these CSS files:
- `/static/css/anthropic-brand.css` - Brand colors and typography
- `/static/css/common/navbar.css` - Navbar-specific styles

**Key CSS Variables (in anthropic-brand.css):**
```css
--primary-color: #191717;      /* Anthropic Black */
--secondary-color: #CC785C;    /* Anthropic Sienna */
--accent-color: #D4A574;       /* Anthropic Gold */
--text-color: #191717;
--bg-color: #ffffff;
--font-primary: 'Poppins', sans-serif;
--font-secondary: 'Lora', serif;
```

---

### Styling Footer

The footer uses:
- `/static/css/anthropic-brand.css` - Brand colors
- `/static/css/common/footer.css` - Footer-specific styles

**Footer Grid Structure:**
```
.footer-container
├── .footer-top (4-column grid)
│   ├── .footer-column (About)
│   ├── .footer-column (Products)
│   ├── .footer-column (Resources)
│   └── .footer-column (Contact)
└── .footer-bottom
    ├── .footer-copyright
    └── .footer-social
```

---

### JavaScript for Mobile Menu

The navbar toggle functionality is in `/static/js/common/navbar.js`:

```javascript
$(document).ready(function() {
    $('#navbar-toggle').on('click', function() {
        $('#navbar-mobile').toggleClass('active');
        $(this).toggleClass('active');
    });

    // Close mobile menu when clicking a link
    $('.navbar-mobile-link').on('click', function() {
        $('#navbar-mobile').removeClass('active');
        $('#navbar-toggle').removeClass('active');
    });
});
```

---

## File Structure

```
src/main/resources/
├── templates/
│   ├── layouts/
│   │   ├── base.html          (Master layout with fragments)
│   │   └── README.md          (This documentation)
│   ├── index.html             (Uses layout)
│   ├── search.html            (Uses layout)
│   ├── chip.html              (Uses layout)
│   └── ...
└── static/
    ├── css/
    │   ├── anthropic-brand.css (Brand variables and utilities)
    │   ├── common/
    │   │   ├── navbar.css      (Navbar styles)
    │   │   └── footer.css      (Footer styles)
    │   ├── landing.css         (Page-specific CSS)
    │   └── ...
    └── js/
        ├── common/
        │   └── navbar.js       (Navbar functionality)
        ├── jquery.min.js       (jQuery library)
        └── ...
```

---

## Best Practices

1. **Always use Thymeleaf URL syntax**
   - Use `th:href="@{/path}"` instead of `href="/path"`
   - This ensures proper context path handling

2. **Set page titles in controller**
   - Pass `pageTitle` attribute for custom titles
   - Fallback title is "CHIP AI - 智能芯片分析平台"

3. **Load common scripts first**
   - Use `th:replace="layouts/base :: scripts-common"` before page-specific JS
   - jQuery is required for most scripts

4. **Keep page-specific CSS separate**
   - Don't modify layout CSS files for page-specific styles
   - Create new CSS files in `/static/css/`

5. **Mobile-first approach**
   - Test all pages on mobile devices
   - Navbar automatically switches to mobile view

6. **Accessibility**
   - Use semantic HTML elements
   - Add `aria-label` attributes for icon buttons
   - Ensure sufficient color contrast

---

## Migration Guide

### Migrating Existing Pages to Use Layout

1. **Replace head section:**
   ```html
   <!-- OLD -->
   <head>
       <meta charset="UTF-8">
       <title>Page Title</title>
       <link rel="stylesheet" href="/static/css/...">
   </head>

   <!-- NEW -->
   <head>
       <th:block th:replace="layouts/base :: head-common"/>
       <link rel="stylesheet" th:href="@{/static/css/...}">
   </head>
   ```

2. **Replace navbar:**
   ```html
   <!-- OLD -->
   <nav class="navbar">...</nav>

   <!-- NEW -->
   <nav th:replace="layouts/base :: navbar"></nav>
   ```

3. **Replace footer:**
   ```html
   <!-- OLD -->
   <footer>...</footer>

   <!-- NEW -->
   <footer th:replace="layouts/base :: footer"></footer>
   ```

4. **Update scripts:**
   ```html
   <!-- OLD -->
   <script src="/static/js/jquery.min.js"></script>

   <!-- NEW -->
   <th:block th:replace="layouts/base :: scripts-common"/>
   ```

---

## Troubleshooting

### Issue: Navbar not displaying correctly
**Solution:** Ensure `/static/css/common/navbar.css` is loaded and not overridden by page-specific styles.

### Issue: Mobile menu not working
**Solution:** Check that `/static/js/common/navbar.js` is loaded after jQuery and the DOM elements have correct IDs.

### Issue: Footer at wrong position
**Solution:** Ensure `<main>` has sufficient content or use `min-height: calc(100vh - navbar-height - footer-height)`.

### Issue: Custom page title not showing
**Solution:** Add `model.addAttribute("pageTitle", "Your Title");` in the controller method.

### Issue: Session admin not available
**Solution:** Ensure user is logged in and session contains `admin` object. Check `LoginController` session management.

---

## Support

For questions or issues with the layout system:
- Check existing pages like `/templates/index.html` for reference
- Review Spring Boot controllers for proper Model attribute passing
- Consult Thymeleaf documentation: https://www.thymeleaf.org/doc/tutorials/3.0/usingthymeleaf.html

---

**Last Updated:** 2025-12-31
**Version:** 1.0.0
**Maintained by:** Agent B - Master Layout Architect
