# Quick Start — Adding Custom Animations

## 5-Minute Setup

### Step 1: Create Your Animation File
Copy a template from `/public/animations/{topic}/index.html` and customize it:

```bash
cp /public/animations/python-fundamentals/index.html \
   /public/animations/your-topic/index.html
```

### Step 2: Edit the HTML
Replace placeholder in the template:

```html
<h1>🎯 Your Topic Title</h1>
<p>Brief description</p>

<div class="placeholder">
  <div class="placeholder-icon">🔥</div>
  <div class="placeholder-text">Your interactive content here</div>
</div>
```

### Step 3: Add Interactivity
Use vanilla JavaScript in the `<script>` tag:

```javascript
document.addEventListener('DOMContentLoaded', () => {
  // Your animation logic here
  const button = document.querySelector('.primary');
  button.addEventListener('click', () => {
    console.log('Button clicked!');
  });
});
```

### Step 4: Embed in React (Optional)
In `src/App.tsx`:

```jsx
import AnimationFrame from './components/AnimationFrame';

// Inside your module:
<AnimationFrame 
  src="/animations/your-topic/"
  title="Your Topic Title"
  description="Optional description"
/>
```

---

## Design Token Quick Reference

### Colors
```css
--bg: #FFFFFF                  /* Main background */
--surface: #F6F8FA             /* Card/panel background */
--border: #D0D7DE              /* Borders */
--text-primary: #24292F        /* Main text */
--text-secondary: #57606A      /* Muted text */
--accent: #0969DA              /* Buttons, highlights */
```

### Spacing
```css
8px (1 unit), 16px (2x), 24px (3x), 32px (4x)
```

### Transitions
```css
transition: all 0.15s cubic-bezier(0.33, 0.66, 0.66, 1);
```

### Module Color (Example: Python)
```css
--python: #3B6EA5              /* Module color */
--python-bg: #EAF0F7           /* Light background */
```

---

## Common Patterns

### Interactive Button State
```javascript
let isActive = false;

button.addEventListener('click', () => {
  isActive = !isActive;
  button.classList.toggle('active');
  button.textContent = isActive ? 'Running' : 'Start';
});
```

### Animated List with Stagger
```javascript
const items = document.querySelectorAll('.item');
items.forEach((item, i) => {
  item.style.animation = `slideUp 0.4s ease-out ${i * 0.08}s forwards`;
  item.style.opacity = '0';
});
```

### Fetch Simulation
```javascript
async function loadData() {
  const loader = document.querySelector('.loader');
  loader.style.display = 'block';
  
  await new Promise(r => setTimeout(r, 2000)); // Simulate delay
  
  loader.style.display = 'none';
  showContent();
}
```

### Simple Toggle Animation
```css
.content {
  max-height: 0;
  opacity: 0;
  overflow: hidden;
  transition: max-height 0.3s ease-out, opacity 0.3s ease-out;
}

.content.open {
  max-height: 500px;
  opacity: 1;
}
```

---

## File Size Checklist

Keep your animation under 100KB:

```
✅ Inline CSS (no separate files)
✅ Inline JavaScript (no dependencies)
✅ Images as base64 or SVG (< 30KB total)
✅ No jQuery, Bootstrap, or frameworks
✅ Minify if needed (< 100KB total)
```

---

## Testing Checklist

Before submitting:

```
[ ] Mobile (320px): Responsive, functional
[ ] Tablet (768px): Proper layout
[ ] Desktop (1200px): Full experience
[ ] Keyboard navigation: Tab/Enter work
[ ] Motion reduced: Works without animations
[ ] Console: No errors or warnings
[ ] Performance: Smooth 60fps animations
[ ] Accessibility: Links/buttons have labels
```

---

## Motion-Reduced Support

**Always include this:**

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01s !important;
    transition-duration: 0.01s !important;
  }
}
```

This respects user accessibility preferences.

---

## Ready to Go!

1. **Create folder**: `/public/animations/your-topic/`
2. **Add file**: `index.html` with your content
3. **Test**: Open in browser at `http://localhost:5173/animations/your-topic/`
4. **Embed (optional)**: Use `<AnimationFrame>` in React
5. **Iterate**: Based on learning outcomes

---

## Need the Full Guide?

See `/public/animations/README.md` for complete documentation on:
- Design guidelines
- Accessibility requirements
- Animation patterns
- Best practices
- Performance optimization

Happy animating! 🎬
