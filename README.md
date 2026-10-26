# Chinmoy Sardar — personal academic website

A plain HTML/CSS site (no build step, no framework). It replaces the Wix site at
`chinmoysardar.wixsite.com/portfolio` and includes every change from the portfolio audit.

## Pages

| File | Page |
| --- | --- |
| `index.html` | Home: positioning, bio, "Currently" box, CV button, email |
| `research.html` | Research questions, working paper, thesis card, coursework |
| `thesis.html` | Full thesis summary with timeline and Figure 1 |
| `publications.html` | Working papers, thesis, posters |
| `cv.html` | Web CV + PDF download |
| `visuals.html` | Artist statement, *Bearing the Burnt* photo documentary, recognition |
| `assets/style.css` | All styling (colours, fonts, layout) |
| `assets/site.js` | Photo fallback + "Copy email" button |

## Before you publish: add your files

These files are linked from the site but could not be downloaded from Wix, so add them yourself:

1. `assets/profile.jpg` — your portrait (4:5 crop works best, about 800×1000 px). Until it exists, a "CS" monogram shows.
2. `assets/Chinmoy_Sardar_CV.pdf` — your updated CV. The "Download CV" buttons point here.
3. `assets/photos/once-there-was-a-home.jpg` — the photograph beside the artist statement.
4. Optional: download the poster and capstone PDFs from Wix into `assets/docs/` and change the links in
   `research.html` and `publications.html`. They currently point to your Wix file URLs, which stop working if you close the Wix site.

## Please confirm these details

The site only states things you have said publicly or told me. Check these before going live:

- **Thesis partner** (thesis.html): M. I. U. Mazumder (confirmed).
- **Independent Researcher, 2025 – present** (cv.html): adjust the start date if needed.
- **Thesis Researcher, 2024 – 2025** (cv.html): adjust to your actual thesis start.
- **Skills** (cv.html): add tools you really use (e.g. QGIS, R, Excel, AutoCAD). Nothing was added that you hadn't mentioned.
- **Photography prizes** (cv.html): replace "Prizes in inter-university photography competitions" with two named results and years.
- **Course numbers** for the two posters were removed because the old site listed both as "Professional Practices & Communication Sessional". Add the correct ones if you like.
- Phone number was left off on purpose. Add it to the footer in each page if you want it public.

## Publish free on GitHub Pages

1. Create a GitHub account if you don't have one.
2. Create a new **public** repository named exactly `YOUR-USERNAME.github.io`
   (this gives the clean address `https://YOUR-USERNAME.github.io`).
3. Upload everything in this folder (drag and drop on the repository page works, or use git:
   `git remote add origin https://github.com/YOUR-USERNAME/YOUR-USERNAME.github.io.git && git push -u origin main`).
4. Repository → Settings → Pages → Source: "Deploy from a branch", Branch: `main`, folder `/ (root)`.
5. Wait a minute, then open the address. No ads, no Wix banner, free hosting.

Optional: buy a domain (e.g. `chinmoysardar.com`) and set it under Settings → Pages → Custom domain.

## Editing later

- Text: open the `.html` file in any editor and change the words between tags.
- "Currently" box and "Updated October 2026": `index.html` and `publications.html` — update monthly.
- When you post a preprint, uncomment the preprint line in `research.html` (search for "preprint").
- When you create ORCID / Google Scholar profiles, uncomment those links in the footer of every page.
- Each new documentary photo on `visuals.html`: copy a `<figure>…</figure>` line inside `<div class="series">` and change the file name and alt text.
