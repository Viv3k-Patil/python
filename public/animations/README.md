# Animations Directory

Interactive HTML animations for full-stack development topics.

## 📁 Structure

Each topic has its own folder with an `index.html` file:

```
animations/
├── python-fundamentals/
│   └── index.html          # Core syntax, data structures, functions
├── oop/
│   └── index.html          # Classes, inheritance, encapsulation
├── sql-databases/
│   └── index.html          # Schema design, queries, joins
├── rest-api/
│   └── index.html          # API design, FastAPI, CRUD
├── html-css/
│   └── index.html          # Structure, styling, responsive layout
├── javascript-dom/
│   └── index.html          # Logic, DOM manipulation, API calls
├── react-fundamentals/
│   └── index.html          # Components, state, hooks, routing
└── integration-capstone/
    └── index.html          # Full-stack integration example
```

## 🎯 Design Guidelines

All animations **must** follow these principles:

### 1. **Self-Contained**
- No external CDN dependencies (except system fonts)
- All CSS inline or in `<style>` tag
- All JavaScript inline or in `<script>` tag
- Images as base64 or SVG only

### 2. **Responsive Design**
- Works on mobile (320px+), tablet, and desktop
- Use `viewport meta tag`
- Media queries for responsive layouts
- Touch-friendly interactive elements (min 44px tap target)

### 3. **Accessibility**
- Semantic HTML (`<button>`, `<nav>`, `<main>`, etc.)
- Color contrast ≥ 4.5:1 for body text
- ARIA labels where needed
- Keyboard navigation support

### 4. **Performance**
- Optimize animations: use CSS transforms & transitions
- File size < 100KB (HTML + inline CSS/JS)
- Smooth 60fps animations
- Lazy load images if needed

### 5. **Motion Respect**
```css
@media (prefers-reduced-motion: reduce) {
  * { 
    animation-duration: 0.01s !important; 
    transition-duration: 0.01s !important; 
  }
}
```

### 6. **Consistent Styling**

Use the GitHub-inspired color palette:

```css
:root {
  --bg: #FFFFFF;
  --surface: #F6F8FA;
  --border: #D0D7DE;
  --text-primary: #24292F;
  --text-secondary: #57606A;
  --accent: #0969DA;
}
```

#### Module-Specific Colors
- **Python**: `#3B6EA5` (bg: `#EAF0F7`)
- **OOP**: `#4E5FA8` (bg: `#ECEDF8`)
- **SQL**: `#2A7F72` (bg: `#E7F3F1`)
- **API**: `#6D5AA6` (bg: `#F0EDF7`)
- **Web**: `#B8672E` (bg: `#FAEEE3`)
- **JavaScript**: `#9C7F1F` (bg: `#F8F1DE`)
- **React**: `#2478A3` (bg: `#E7F1F6`)
- **Capstone**: `#A23E3E` (bg: `#FAEBEB`)

## 📝 Template Structure

Every animation should follow this basic structure:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Topic Name — Interactive Animation</title>
  <style>
    /* All CSS here */
  </style>
</head>
<body>
  <div class="container">
    <!-- Interactive content here -->
  </div>
  <script>
    // All JavaScript here
  </script>
</body>
</html>
```

## 🎨 Interactive Elements

### Buttons
```html
<button class="primary">Action</button>
<button>Secondary</button>
```

### Cards/Panels
```html
<div class="card">
  <h3>Title</h3>
  <p>Description</p>
</div>
```

### Info Boxes
```html
<div class="info-box">
  <strong>Note:</strong> Important information
</div>
```

## 🚀 Animation Patterns

### Fade In
```css
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.element {
  animation: fadeIn 0.3s ease-out;
}
```

### Slide Up
```css
@keyframes slideUp {
  from { opacity: 0; transform: translateY(12px); }
  to { opacity: 1; transform: translateY(0); }
}

.element {
  animation: slideUp 0.4s ease-out;
}
```

### Scale In
```css
@keyframes scaleIn {
  from { opacity: 0; transform: scale(0.95); }
  to { opacity: 1; transform: scale(1); }
}

.element {
  animation: scaleIn 0.3s ease-out;
}
```

## 📦 Embedding in React

Use the `AnimationFrame` component:

```jsx
import AnimationFrame from './components/AnimationFrame';

<AnimationFrame 
  src="/animations/python-fundamentals/"
  title="Python Fundamentals"
  description="Core syntax and data structures"
/>
```

The component will:
- Render an iframe with 16:9 aspect ratio
- Show loading state
- Provide open-in-new-window link
- Handle responsive sizing

## ✅ Quality Checklist

Before submitting an animation:

- [ ] Works on mobile (320px+)
- [ ] Works on desktop (1200px+)
- [ ] No console errors
- [ ] Keyboard navigable
- [ ] Respects `prefers-reduced-motion`
- [ ] Uses consistent color palette
- [ ] File size < 100KB
- [ ] Smooth animations (60fps)
- [ ] Accessible (WCAG 2.1 AA)
- [ ] Semantic HTML structure

## 🔄 Common Patterns

### State Toggle Button
```javascript
let isActive = false;

button.addEventListener('click', () => {
  isActive = !isActive;
  button.classList.toggle('active', isActive);
  // Update content
});
```

### Animated List
```javascript
items.forEach((item, i) => {
  item.style.animationDelay = `${i * 0.08}s`;
});
```

### Fetch Data Simulation
```javascript
function simulateFetch(duration = 2000) {
  return new Promise(resolve => {
    setTimeout(() => resolve(data), duration);
  });
}
```

## 🎓 Learning Resources

- [CSS Animations](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations)
- [GitHub Primer Design System](https://primer.style)
- [Web Accessibility](https://www.w3.org/WAI/WCAG21/quickref/)
- [Web Performance](https://web.dev/performance/)

## 📞 Questions?

Refer to `UI_GUIDELINES.md` in the project root for comprehensive design documentation.

