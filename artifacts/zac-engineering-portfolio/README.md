# Zac Diegelman — Engineering Portfolio

Premium, responsive portfolio frontend for Zechariah “Zac” Diegelman, a Mechanical Engineering senior at UNC Charlotte.

## Run locally

```bash
npm install
npm run dev
```

## Editing the portfolio

The editable content lives in `src/data/site.ts`:

- `site` contains contact details, school, location, and the availability line.
- `projects` contains the project archive and reusable case-study content, including its local image reference and editable alt text.
- `stockImages` is the single replacement point for the temporary photography used throughout the site. Replace the files in `public/images/stock/`, or update the four `src` values there when new assets are ready. The UI intentionally labels these images as temporary stock so they are not mistaken for Zac's project documentation.
- `coursework`, `toolkit`, and `journey` power the archive pages.

Project outcomes intentionally include clearly labeled editable placeholders where measured results were not supplied. Replace those strings with verified results only.

## Replacing media and resume

- The current portfolio uses local photographs from `public/images/stock/` as editorial placeholders. Source and attribution notes are in `STOCK_IMAGE_SOURCES.md`.
- Keep replacement images local and update `stockImages` in `src/data/site.ts`; do not scatter image paths through page JSX.
- Replace `public/assets/resume/Zechariah-Diegelman-Resume.pdf` with the current PDF. The Resume page download button already points to this exact path.

## Contact form

The contact form is a complete UI state flow but intentionally does not send a message yet. Connect `handleSubmit` in `src/pages/portfolio-pages.tsx` to Formspree, a server action, or the preferred provider when credentials and backend handling are available.

## Routes

`/`, `/projects`, `/projects/:slug`, `/about`, `/resume`, `/coursework`, `/contact`, and a designed fallback route are wired with wouter.
