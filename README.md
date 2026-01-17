# Inhaler GHG Comparison Tool

A static, single-page tool for comparing inhaler greenhouse gas impact and suggesting lower-GHG alternatives. The current dataset is populated from PrescQIPP v2.38 (UK) and can be replaced with your local sources.

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
- The UI includes a second tab explaining data sources and calculation logic.

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

Edit the data in `assets/app.js`:
- Update `INHALERS`, `SOURCES_PRESCQIPP`, and `NOTE_SUFFIX` if you use a different dataset.
- Keep units consistent (kg CO2e per inhaler; g CO2e per dose).
- Provide citations in each entry's `sources` array.

The methodology tab in the UI explains how values are derived (per-dose values are calculated by dividing gCO2e per inhaler by doses per inhaler) and how impact bands are assigned.

## Fonts

This project loads fonts from Google Fonts via `@import` in `assets/styles.css`. If you need fully offline use, download the fonts and adjust the CSS.
