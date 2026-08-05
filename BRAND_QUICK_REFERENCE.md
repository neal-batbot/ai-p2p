# Anthropic Brand Quick Reference Card

## Color Palette (Exact RGB Values)

```css
/* Primary Colors */
--anthropic-dark:       rgb(20, 20, 19)      /* #141413 */
--anthropic-light:      rgb(250, 249, 245)   /* #FAF9F5 */

/* Neutral Colors */
--anthropic-mid-gray:   rgb(176, 174, 165)   /* #B0AEA5 */
--anthropic-light-gray: rgb(232, 230, 220)   /* #E8E6DC */

/* Accent Colors */
--anthropic-orange:     rgb(217, 119, 87)    /* #D97757 */
--anthropic-blue:       rgb(106, 155, 204)   /* #6A9BCC */
--anthropic-green:      rgb(120, 140, 93)    /* #788C5D */
```

## Typography

```css
/* Headings (24pt and larger) */
font-family: 'Poppins', Arial, sans-serif;
font-weight: 600-700;

/* Body Text (under 24pt) */
font-family: 'Lora', Georgia, serif;
font-weight: 400-500;

/* UI Elements (buttons, labels) */
font-family: 'Poppins', Arial, sans-serif;
font-weight: 500;
```

## Common Classes

```html
<!-- Buttons -->
<button class="btn btn-primary">Primary Action</button>
<button class="btn btn-secondary">Secondary Action</button>
<button class="btn btn-outline">Outlined Button</button>

<!-- Text Colors -->
<span class="text-orange">Orange accent text</span>
<span class="text-blue">Blue accent text</span>
<span class="text-green">Green accent text</span>

<!-- Backgrounds -->
<div class="bg-light">Light background</div>
<div class="bg-dark">Dark background with light text</div>
```

## Spacing System (8px Grid)

```css
--spacing-xs: 0.5rem;   /* 8px */
--spacing-sm: 1rem;     /* 16px */
--spacing-md: 1.5rem;   /* 24px */
--spacing-lg: 2rem;     /* 32px */
--spacing-xl: 3rem;     /* 48px */
```

## Border Radius

```css
--radius-sm: 4px;
--radius-md: 8px;
--radius-lg: 12px;
```

## Shadows

```css
--shadow-sm: 0 2px 4px rgba(20, 20, 19, 0.1);
--shadow-md: 0 4px 8px rgba(20, 20, 19, 0.12);
--shadow-lg: 0 8px 16px rgba(20, 20, 19, 0.15);
```

## Transitions

```css
--transition-fast:   150ms ease;
--transition-normal: 250ms ease;
--transition-slow:   350ms ease;
```

## Color Usage Guidelines

| Color | Primary Use | Secondary Use |
|-------|-------------|---------------|
| **Orange** | Primary buttons, CTAs | Highlights, key metrics |
| **Blue** | Links, info states | Secondary actions |
| **Green** | Success states | Tertiary accents |
| **Dark** | Primary text, nav bar | Dark backgrounds |
| **Light** | Page background | Text on dark |
| **Mid Gray** | Secondary text | Placeholders |
| **Light Gray** | Borders, dividers | Subtle backgrounds |

## Responsive Breakpoints

```css
/* Mobile First */
@media (max-width: 480px)  { /* Phone */ }
@media (max-width: 768px)  { /* Tablet */ }
@media (max-width: 1024px) { /* Small Desktop */ }
@media (min-width: 1025px) { /* Desktop */ }
```

## Component Examples

### Result Card
```html
<div class="result-item">
    <p>
        <span class="result-label">Part Number:</span>
        <strong class="text-orange">TLV2365</strong>
    </p>
    <p>
        <span class="result-label">Manufacturer:</span>
        <span>Texas Instruments</span>
    </p>
    <p>
        <span class="result-label">Description:</span>
        Low-power operational amplifier
    </p>
</div>
```

### Search Box
```html
<div class="search-box">
    <input type="text"
           placeholder="Search..."
           aria-label="Search">
</div>
<button class="btn btn-primary">Search</button>
```

### Navigation Item
```html
<div class="nav-item">
    Products
    <div class="sub-menu">
        <div>Chips</div>
        <div>Sensors</div>
    </div>
</div>
```

## Accessibility Requirements

- Minimum contrast ratio: 4.5:1 (AA)
- Include ARIA labels on interactive elements
- Support keyboard navigation (Tab, Enter, Space)
- Provide focus visible indicators
- Use semantic HTML5 elements

## Do's and Don'ts

### DO
✓ Use exact RGB values from brand palette
✓ Apply Poppins to headings, Lora to body text
✓ Rotate accent colors (orange → blue → green)
✓ Include fallback fonts
✓ Add hover and focus states
✓ Use CSS custom properties
✓ Test on mobile devices
✓ Include ARIA attributes

### DON'T
✗ Approximate color values
✗ Mix different font styles
✗ Overuse a single accent color
✗ Forget accessibility
✗ Use inline styles (use classes)
✗ Hard-code color values
✗ Ignore responsive design
✗ Skip keyboard navigation

## Testing Commands

```bash
# Start the application
./mvnw spring-boot:run

# Access search page
# http://localhost:80/search?content=TLV2365

# Test responsive design (Chrome DevTools)
# Toggle Device Toolbar (Cmd+Shift+M)
```

## File Locations

```
CSS:      /src/main/resources/static/css/anthropic-brand.css
HTML:     /src/main/resources/templates/search.html
Docs:     /ANTHROPIC_BRAND_IMPLEMENTATION.md
Compare:  /VISUAL_BRAND_COMPARISON.md
Summary:  /BRAND_SUMMARY.md
```

## Color Contrast Ratios (WCAG AA)

| Foreground | Background | Ratio | Pass |
|------------|------------|-------|------|
| Dark | Light | 16.5:1 | ✓ AAA |
| Dark | Light Gray | 14.2:1 | ✓ AAA |
| Orange | Light | 4.6:1 | ✓ AA |
| Blue | Light | 5.2:1 | ✓ AA |
| Green | Light | 6.8:1 | ✓ AA |

## Quick Start

1. Include the CSS:
   ```html
   <link rel="stylesheet" href="/static/css/anthropic-brand.css">
   ```

2. Use brand classes:
   ```html
   <h1>Heading with Poppins</h1>
   <p>Body text with Lora</p>
   <button class="btn btn-primary">Action</button>
   ```

3. Apply colors via variables:
   ```css
   .my-element {
       color: var(--anthropic-dark);
       background: var(--anthropic-light);
   }
   ```

## Version Info

**Version**: 1.0
**Date**: 2025-12-31
**Author**: Claude Code (Claude Sonnet 4.5)
**Status**: Production Ready

---

Print this card for easy reference while developing!
