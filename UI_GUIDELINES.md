# UI Guidelines — Inspired by GitHub

## Design Philosophy

This project follows GitHub's design principles:
- **Clarity first**: Information hierarchy that guides naturally
- **Subtle & refined**: Soft colors, minimal shadows, generous whitespace
- **Accessible**: WCAG 2.1 AA compliant, keyboard-navigable
- **Responsive**: Adapts gracefully from mobile to 4K
- **Performant**: Animations use transforms, smooth 60fps interactions

---

## Color System

### Semantic Colors
```
Primary:     #0969DA (GitHub blue)
Success:     #1A7F37 (Green)
Danger:      #DA3633 (Red)
Warning:     #9E6a03 (Amber)
Info:        #0550AE (Dark blue)
```

### Neutral Palette
```
Background:  #FFFFFF (White)
Surface:     #F6F8FA (Light gray)
Border:      #D0D7DE (Medium gray)
Text Primary: #24292F (Near black)
Text Muted:  #57606A (Medium gray)
```

### Module Colors
```
Python:      #3B6EA5 with background #EAF0F7
OOP:         #4E5FA8 with background #ECEDF8
SQL:         #2A7F72 with background #E7F3F1
API:         #6D5AA6 with background #F0EDF7
Web:         #B8672E with background #FAEEE3
JavaScript:  #9C7F1F with background #F8F1DE
React:       #2478A3 with background #E7F1F6
Capstone:    #A23E3E with background #FAEBEB
```

---

## Typography

### Font Stack
```
Primary:     -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif
Monospace:   'IBM Plex Mono', 'Courier New', monospace
Display:     'Space Grotesk', sans-serif
```

### Type Scale
| Level | Size | Weight | Usage |
|-------|------|--------|-------|
| h1 | 28px–42px (clamp) | 700 | Page title |
| h2 | 20px–24px | 700 | Module headings |
| h3 | 16px–18px | 600 | Day headings |
| Body | 15.5px | 400 | Paragraph text |
| Small | 13px–13.5px | 400 | Labels, meta |
| Tiny | 11px–12px | 500 | Tags, captions |

---

## Spacing

Follow 8px base unit:
```
xs:  4px
sm:  8px
md:  16px
lg:  24px
xl:  32px
2xl: 48px
3xl: 64px
```

---

## Components

### Cards / Panels
- **Border**: 1px solid #D0D7DE
- **Radius**: 8–12px
- **Shadow**: 0 1px 0 rgba(0,0,0,0.02), 0 1px 3px rgba(0,0,0,0.04)
- **Background**: #FFFFFF
- **Padding**: 16px–24px

**On Hover**:
- Border: 1px solid #C6D1DA
- Shadow: 0 1px 0 rgba(0,0,0,0.04), 0 3px 6px rgba(0,0,0,0.08)

### Buttons
- **Padding**: 8px 12px (small) → 12px 16px (medium)
- **Radius**: 6px
- **Font Weight**: 600
- **Font Size**: 13px

#### Variants
1. **Primary** (CTA)
   - Background: #0969DA
   - Text: #FFFFFF
   - Hover: #0860CA
   - Active: #033D8B

2. **Secondary** (Default)
   - Background: #F6F8FA
   - Border: 1px #D0D7DE
   - Text: #24292F
   - Hover: #F3F5F7

3. **Danger**
   - Background: #DA3633
   - Text: #FFFFFF
   - Hover: #CD2C2C

### Tags/Badges
- **Padding**: 2px 8px
- **Radius**: 4px
- **Font Size**: 11px
- **Font Weight**: 600
- **Use**: background color from module + opacity 0.15 for background, full color for text

### Navigation
- **Link Styling**: No underline by default
- **Hover**: Color shift + subtle background
- **Active**: Bold + left border highlight (3px #0969DA)
- **Visited**: 60% opacity reduction

---

## Animations

### Principles
- **Duration**: 0.15s–0.3s for UI, 0.3s–0.6s for transitions
- **Easing**: `cubic-bezier(0.33, 0.66, 0.66, 1)` (ease-out)
- **Motion**: Respect `prefers-reduced-motion`

### Common Patterns
```css
/* Quick interactions */
transition: background 0.15s ease-out, color 0.15s ease-out;

/* Panel expand/collapse */
transition: max-height 0.3s ease-out, opacity 0.3s ease-out;

/* Slide in */
animation: slideIn 0.4s ease-out forwards;

/* Fade */
animation: fadeIn 0.3s ease-out forwards;
```

### Entrance Animations
- **Card reveal**: Fade + subtle scale (95% → 100%)
- **List items**: Staggered fade (60ms delay)
- **Module expand**: Max-height + opacity

---

## Accessibility

### Keyboard Navigation
- Tab order follows visual order
- Focus rings: 2px solid #0969DA with 2px offset
- Skip-to-main links available

### Color Contrast
- All text meets WCAG AA (4.5:1 for body, 3:1 for large)
- Don't rely on color alone for information
- Status/alerts always have icon + text

### Screen Readers
- Semantic HTML (nav, article, section, etc.)
- ARIA labels for icons and custom controls
- Heading hierarchy (h1 → h2 → h3)

---

## Responsive Breakpoints

| Breakpoint | Width | Layout |
|-----------|-------|--------|
| Mobile | < 640px | Single column, side nav → horizontal |
| Tablet | 640px–1024px | Flexible layout |
| Desktop | 1024px+ | Full navigation sidebar |
| Large | 1280px+ | Max-width container |

---

## Dark Mode (Future)

Placeholder for dark mode variables:
```
--bg-dark: #0d1117
--surface-dark: #161b22
--border-dark: #30363d
--text-primary-dark: #e6edf3
--text-muted-dark: #8b949e
```

---

## Resources

- [GitHub Primer Design System](https://primer.style)
- [Web Accessibility Guidelines](https://www.w3.org/WAI/WCAG21/quickref)
- [CSS Easing Functions](https://cubic-bezier.com)
