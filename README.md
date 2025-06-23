# Radix UI Primitives + Panda CSS Setup Guide

## What is Radix UI?

**Radix UI Primitives** is a low-level, unstyled component library built with accessibility in mind. It offers behavior-only UI components (like dialogs, tooltips, switches) that are WCAG-compliant out of the box.

- 🔧 Headless components
- ♿ Full accessibility: ARIA, keyboard support, focus management
- 🔄 Controlled + uncontrolled API support
- 🧩 Works seamlessly with any styling solution

## What is Panda CSS?

**Panda CSS** is a modern CSS-in-JS framework designed to use **static, token-based styling**. It compiles atomic styles at build time, based on your usage and token system.

- 🎨 Design-token-driven
- ⚡ Zero-runtime CSS generation
- 🧑‍🎨 Works great with custom or Figma design tokens
- 🧱 Provides **recipes**, **patterns**, and **utility APIs**

---

## Why Choose Radix UI + Panda CSS?

| Feature       | Radix UI           | Panda CSS                   |
| ------------- | ------------------ | --------------------------- |
| Accessibility | ✅ Full            | ❌ Not applicable           |
| Styling       | ❌ None (unstyled) | ✅ Full styling with tokens |
| Design System | Headless, BYO      | Fully tokenized             |
| Runtime       | Minimal            | Zero CSS runtime            |
| Customization | Full control       | Full control via tokens     |

---

## Setup Guide

### 1. Install Dependencies

```bash
npm install @radix-ui/react-dialog @radix-ui/react-tooltip
npm install @pandacss/dev
```

### 2. Initialize Panda CSS

```bash
npx panda init
```

This generates:

- `panda.config.ts`
- `styled-system/` with token definitions and recipes

### 3. Define Your Tokens (Optional: import from Figma)

```ts
// panda.config.ts
export const tokens = {
  colors: {
    primary: { value: "#FF0000" },
    neutral: { 100: "#f5f5f5", 900: "#1a1a1a" },
  },
  fontSizes: {
    lg: { value: "18px" },
    xl: { value: "24px" },
  },
};
```

### 4. Create a Styled Component

```tsx
// components/Button.tsx
import * as React from "react";
import { styled } from "../styled-system/jsx";

export const Button = styled("button", {
  base: {
    bg: "primary",
    color: "white",
    px: 4,
    py: 2,
    borderRadius: "md",
    fontWeight: "semibold",
  },
});
```

### 5. Use a Radix Primitive

```tsx
import * as Dialog from "@radix-ui/react-dialog";
import { Button } from "./Button";

<Dialog.Root>
  <Dialog.Trigger asChild>
    <Button>Open Dialog</Button>
  </Dialog.Trigger>
  <Dialog.Content>
    <Dialog.Title>My Dialog</Dialog.Title>
    <Dialog.Description>Accessible and styled!</Dialog.Description>
  </Dialog.Content>
</Dialog.Root>;
```

---

## Bundle Size

- 📦 Radix Primitives: \~45.2kB (no styles)
- 🎨 Panda CSS: \~1.5MB dev size (tree-shaken in build)

---

## ✅ Advantages of Radix UI + Panda CSS

1. **Accessibility Out of the Box** (Radix)

   - Keyboard nav, focus trap, ARIA, screen reader support

2. **Design Token-Based Styling** (Panda)

   - Integrates with Figma Tokens
   - Centralized theme and spacing system

3. **Fully Customizable Components**

   - Build pixel-perfect UI without overriding defaults

4. **Zero Runtime CSS**

   - CSS generated at build time = small runtime footprint

---

## ⚠️ Limitations of Radix UI + Panda CSS

1. **No Native Component Integration**

   - No default button/input styling
   - You build styles manually

2. **Manual Theming**

   - Need to map Figma token names manually
   - No built-in theme switching (must handle with `data-theme` or config)

3. **Component Gaps**

   - Radix Primitives lack some basics like `<Button />`, `<Input />`
   - Requires manual composition and styling

---

## Final Thoughts

Radix UI + Panda CSS is ideal when:

- You want total control over design
- Your team has a Figma token-based system
- You prioritize performance and accessibility

But it **requires effort**: you’ll build from tokens → components manually.

Great for **design systems, teams with a solid design/token infrastructure**, and those looking for **headless + tokenized** UI stack.

---

🧾 npx panda — When to Use It
✅ 1. After Initial Setup
Run after npx panda init to generate the first set of styles:

npx panda
This will:

Compile tokens → static CSS

Output styles to .panda/ or your configured output path

Generate utility classes, recipes, and patterns

✅ 2. After Updating Tokens / Recipes / Patterns
Whenever you change:

panda.config.ts

Custom recipes in recipes/

Design tokens (tokens/)

Conditions (like breakpoints or modes)

You must re-run:

npx panda
If you don’t, your changes won’t be reflected in your generated CSS.

✅ 3. Before Production Builds
Ensure you're bundling the latest CSS output from your token config:

npx panda && npm run build
Or integrate into your CI build step.
