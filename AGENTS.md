## Cursor Cloud specific instructions

This is a **static HTML/CSS/JS portfolio website** (Snow template). There is no build system, package manager, or backend.

### Running the dev server

```
python3 -m http.server 8000
```

Run from the workspace root. The site is then available at `http://localhost:8000/`.

### Key pages

- `index.html` — Homepage
- `portfolio.html` / `portfolio-single.html` — Portfolio pages
- `blog.html` / `blog-single.html` — Blog pages

### Notes

- No dependencies to install; no `package.json`, `Makefile`, or Docker setup exists.
- CSS and JS are pre-bundled in `assets/css/combined.css` and `assets/js/combined.js`.
- There are no lint, test, or build commands — changes are validated by serving the site and checking in a browser.
