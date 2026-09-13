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
- `projects` contains the project archive and reusable case-study content. Add a project object, then map its slug to a diagram variant in `src/pages/portfolio-pages.tsx`.
- `coursework`, `toolkit`, and `journey` power the archive pages.

Project outcomes intentionally include clearly labeled editable placeholders where measured results were not supplied. Replace those strings with verified results only.

## Replacing media and resume

- Technical diagrams are lightweight inline SVGs in `src/components/engineering-visual.tsx`. Replace a variant there with a local photograph, CAD screenshot, or generated image if desired.
- Keep replacement images in `public/assets/` and reference them with `/assets/...`. This is the centralized media path.
- Replace `public/assets/resume/Zechariah-Diegelman-Resume.pdf` with the current PDF. The Resume page download button already points to this exact path.

## Contact form

The contact form is a complete UI state flow but intentionally does not send a message yet. Connect `handleSubmit` in `src/pages/portfolio-pages.tsx` to Formspree, a server action, or the preferred provider when credentials and backend handling are available.

## Routes

`/`, `/projects`, `/projects/:slug`, `/about`, `/resume`, `/coursework`, `/contact`, and a designed fallback route are wired with wouter.
