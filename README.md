# Inhaler GHG Comparison Tool

A static, single-page tool for comparing inhaler greenhouse gas impact and suggesting lower-GHG alternatives. Update the dataset in `assets/app.js` to match your sources and local formulary.

## Project Structure

```
.
├── index.html
├── index_pretty.html
└── assets/
    ├── styles.css
    └── app.js
```

- `index.html` is the main entry point used for GitHub Pages.
- `index_pretty.html` mirrors the same UI (kept as a convenience copy).
- `assets/styles.css` contains all styling.
- `assets/app.js` contains the dataset and rendering logic.

## Local Preview

You can open `index.html` directly in your browser, or run a tiny local server:

```
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Deploy to GitHub Pages

1. Create a GitHub repo and push this project.
2. In GitHub, go to **Settings** > **Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select the `main` branch and the `/ (root)` folder.
5. Save. GitHub will publish your site and show the URL on the Pages screen.

Tip: The first deploy can take a minute or two after saving.

## Data Updates

Edit the `INHALERS` array in `assets/app.js`:
- Replace placeholders for CO2e values.
- Add or remove alternatives.
- Provide citations in the `sources` array.

## Fonts

This project loads fonts from Google Fonts via `@import` in `assets/styles.css`. If you need fully offline use, download the fonts and adjust the CSS.
