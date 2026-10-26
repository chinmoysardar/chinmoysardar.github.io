# chinmoysardar.github.io

Personal academic website of **Chinmoy Sardar**, environmental engineer (BSc Civil Engineering, BUET), working on drinking-water quality and water security in coastal Bangladesh.

**Live site:** https://chinmoysardar.github.io

## Contents

| Page | What it covers |
| --- | --- |
| [Home](index.html) | Research focus, current work, contact |
| [Research](research.html) | Research questions, working paper, thesis, coursework |
| [Thesis](thesis.html) | Stored rainwater quality in household tanks, Koyra, Khulna (2024) |
| [Publications](publications.html) | Working papers, thesis and posters |
| [CV](cv.html) | Education, research experience, skills, awards ([PDF](assets/Chinmoy_Sardar_CV.pdf)) |
| [Visuals](visuals.html) | Artist statement and the photo documentary *Bearing the Burnt* |

## Structure

```
├── index.html, research.html, thesis.html,
│   publications.html, cv.html, visuals.html
├── 404.html
├── sitemap.xml, robots.txt
└── assets/
    ├── style.css            # design tokens, layout, light and dark themes
    ├── site.js              # photo fallback and copy-email button
    ├── favicon.svg
    ├── profile.jpg
    ├── Chinmoy_Sardar_CV.pdf
    ├── docs/                # posters and project reports (PDF)
    └── photos/              # photography, one folder per series
```

The site is plain HTML and CSS with no build step or dependencies, served by GitHub Pages from the `main` branch.

## Local preview

Open `index.html` in a browser, or serve the folder:

```
python3 -m http.server 8000
```

then visit http://localhost:8000.

## Contact

chinmoysardar32@gmail.com · [LinkedIn](https://www.linkedin.com/in/chinmoy-sardar-2b792b1a0/)

## Copyright

© 2026 Chinmoy Sardar. All text, photographs and documents in this repository are the author's own work. Please do not reuse the photographs or documents without permission.
