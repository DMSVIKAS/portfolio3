# portfolio

A clean, responsive personal portfolio website built with HTML, CSS and vanilla JavaScript. This repository contains the source code for my portfolio site. The site is designed to look sharp on desktop while staying usable on mobile — and horizontal scrolling has been disabled on mobile view as requested.

---

## Live Demo

Once GitHub Pages is enabled for this repository the site will be available at:

```
https://dmsvikas.github.io/portfolio3/
```

Example (after enabling Pages):

```
https://DMSVIKAS.github.io/portfolio3
```

> Note: If you haven’t enabled Pages yet, see the **Deploy** section below.

---

## Features

* Clean dark UI with accent highlights
* Responsive layout (desktop, tablet, mobile)
* Fixed/sticky top navigation and a sticky sidebar on wide screens
* Projects, services, timeline, skills, certifications and contact sections
* Simple modal popups for project/service details
* Images and media are responsive (no horizontal scroll on mobile)

---

## Tech Stack

* HTML5
* CSS3 (custom, no framework required)
* Vanilla JavaScript (for interactions)

---

## Quick Start (view locally)

1. Clone the repo:

```bash
git clone https://github.com/DMSVIKAS/portfolio3.git
cd portfolio3
```

2. Open `index.html` in a browser (double-click or `File -> Open`), or serve locally with a simple HTTP server:

```bash
# Python 3
python -m http.server 8000
# then open http://localhost:8000
```

> Serving via a local server is recommended if you have scripts that fetch local assets.

---

## Deploy to GitHub Pages (simple)

1. Push your changes to the `main` branch (or the branch you prefer).
2. In your repository on GitHub: `Settings` → `Pages` → `Source` → choose `main` branch (or `gh-pages`) and `/ (root)` folder.
3. Save — GitHub will publish the site. The published URL will be shown in the Pages settings.

If you prefer a branch-based workflow (separate `gh-pages` branch), you can use the `gh-pages` npm package or set the Pages source to the `gh-pages` branch.

---

## Screenshots

Include high-quality screenshots in the repository (e.g. under `assets/screenshots/`) and reference them in the README like:
<img width="1920" height="1080" alt="s1" src="https://github.com/user-attachments/assets/bcde607f-c8cd-49ed-abf8-c0b4a1e28ac1" />
<img width="1920" height="1080" alt="s2" src="https://github.com/user-attachments/assets/efde43b5-300a-422d-b3a4-5b24efeb405c" />
<img width="1920" height="1080" alt="s4" src="https://github.com/user-attachments/assets/696620d8-59d0-4a00-97d8-e2f6eade3d58" />
<img width="1920" height="1080" alt="s3" src="https://github.com/user-attachments/assets/059fc617-ad2a-412d-b32d-a76e171c942e" />

## Contributing

This repository is primarily your personal portfolio. If you want to accept contributions:

1. Create issues describing desired changes.
2. Use branches for features/bugfixes and open a Pull Request.

Small PR checklist:

* Keep styles consistent
* Test changes on desktop and mobile

---

## Troubleshooting

* If images overflow on mobile, ensure they use `max-width: 100%`.
* If you see horizontal scroll after edits, test with DevTools device toolbar and run this snippet in the console to find offending elements:

```js
[...document.querySelectorAll('*')].filter(el => el.offsetWidth > document.documentElement.clientWidth).map(el => ({tag: el.tagName, cls: el.className, w: el.offsetWidth}));
```

---

## License

Use this code freely for your personal portfolio. If you plan to reuse or redistribute, consider adding a license file (e.g., MIT) to make terms explicit.

---

## Contact

If you want me to help finalize or deploy this repo (add screenshots, set up GitHub Pages or create a commit), reply here and I’ll prepare the exact files/commands.

---

*Generated for: `portfolio3`*
