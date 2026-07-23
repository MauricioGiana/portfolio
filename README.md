# Mauricio Giana | Backend Engineer Portfolio

This repository hosts my personal portfolio. It is engineered from scratch as a high-performance, lightweight, and responsive single-page resume tailored to showcase my technical stack, systems mindset, and architectural case studies.

## 🚀 Key Engineering Highlights

- **Semantic & Accessible Structure:** Built with strict semantic HTML5 tags, `skip-to-content` navigation, and an accessible DOM hierarchy.
- **Vanilla JS Accordion Mechanics:** Custom accordion component built without external UI libraries, utilizing `requestAnimationFrame` double-cycling and `scrollHeight` layout calculations for seamless high-FPS animations.
- **Tailwind CLI Compilation:** Styled using Tailwind CSS v3 compiled via CLI into a minified, high-performance CSS bundle with zero unused utility classes.
- **CI/CD Deployment:** Automated build pipeline using GitHub Actions to compile styles and deploy the standalone distribution directly to GitHub Pages.

## 🛠️ Technical Stack

- **Markup & Styling:** HTML5, Tailwind CSS (CLI & JIT compilation)
- **Scripting:** Modern ES6+ JavaScript (Vanilla)
- **Tooling & CI/CD:** Node.js, GitHub Actions, GitHub Pages

## 📁 Repository Structure

```text
├── .github/
│   └── workflows/
│       └── deploy.yml   # GitHub Actions automated build & deployment
├── src/
│   ├── index.html       # Core semantic structure & DOM layout
│   ├── input.css        # Tailwind directives & custom CSS overrides
│   └── output.css       # Generated/compiled CSS (ignored in git)
├── package.json         # Scripts & Tailwind CSS development dependencies
├── tailwind.config.js   # Custom theme extension & content scanning paths
└── README.md            # Project documentation
```

🛠️ Local Development

1. Install dependencies:

   ```Bash
   npm install
   ```

2. Start Tailwind CLI compiler in watch mode:

   ```Bash
   npm run dev
   ```

3. Open local preview:

   Simply open src/index.html in your browser. The styles update automatically as you edit classes in the HTML.

📦 Production Build

To build the minified production stylesheet locally:

```Bash
npm run build
```
