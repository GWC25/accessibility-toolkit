# 🎨 BRANDING FIXES

## ✅ **WHAT TO UPDATE:**

### **1. Upload DigiWest Logo**
- **File:** `assets/logo.png` (the glowing lightbulb)
- **Download:** [logo.png](computer:///mnt/user-data/outputs/digiwest-access-toolkit/assets/logo.png)
- **Upload to:** `assets/` folder in GitHub

### **2. Update HTML Files (Logo Reference)**
- **Download updated HTML files:**
  - [AT-index.html](computer:///mnt/user-data/outputs/digiwest-access-toolkit/AT-index.html)
  - [AT-finder.html](computer:///mnt/user-data/outputs/digiwest-access-toolkit/AT-finder.html)
  - [AT-toolkit.html](computer:///mnt/user-data/outputs/digiwest-access-toolkit/AT-toolkit.html)

**Changed:** `assets/logo.svg` → `assets/logo.png`

---

## 📝 **ALREADY FIXED IN CSS:**

The title "Accessibility Toolkit" already has DigiWest gradient colors in the CSS:

```css
.site-title {
    font-size: 1.5rem;
    font-weight: 700;
    background: var(--gradient-primary);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}
```

Where `--gradient-primary` = **Magenta (#fb51fd) to Cyan (#40f5fd)**

This should already be showing on your live site! The title should have a gradient from magenta to cyan.

---

## 🔍 **IF TITLE ISN'T SHOWING GRADIENT:**

Some browsers need a fallback. If the gradient isn't showing, we can add:

```css
.site-title {
    /* Keep existing styles */
    color: var(--color-cyan); /* Fallback color */
}
```

But try the current version first - it should work in all modern browsers!

---

## 📤 **UPLOAD STEPS:**

1. **Upload logo:**
   - Download `logo.png` from link above
   - In GitHub, go to `assets/` folder
   - Upload `logo.png`

2. **Replace HTML files:**
   - Download 3 updated HTML files
   - Replace existing `AT-index.html`, `AT-finder.html`, `AT-toolkit.html`
   - Commit: "Fix branding - Add DigiWest logo"

3. **Wait 2-3 minutes**

4. **Refresh site** - You should see:
   - ✅ DigiWest glowing lightbulb logo
   - ✅ "Accessibility Toolkit" title with magenta→cyan gradient

---

## 🎨 **EXPECTED RESULT:**

**Header will look like:**
```
[Glowing Lightbulb Logo] Accessibility Toolkit
                          ^gradient text^
```

Where the title text flows from magenta (left) to cyan (right).

---

**Upload these 4 files now!** 🚀