# anugnane.github.io

Anu Gnane's portfolio. Plain HTML and CSS served by GitHub Pages from the root of `main`. No build step, no framework, no dependencies; `.nojekyll` tells Pages to serve the files as they are.

While Anu is away (October 2026) the site is built by scheduled cloud agents working `HOLIDAY.md` one package a run, each as a PR for Anu to approve. See `AnuGnane/autopilot` for the playbook.

## Layout

- `index.html` — the home page: the projects list.
- `projects/` — one page per project, `projects/<name>.html`.
- `styles.css` — the one stylesheet. Colours are tokens on `:root`, with a dark set under `prefers-color-scheme: dark`; `--accent` is the one accent colour.
- `scripts/check.mjs` — the gate.

## Adding a project

1. Add a row to the `<ul class="projects">` list in `index.html`: an `<h3>` with the name and a `<span class="status">` (Live, In development or App Store pending), one line from the project's own README, and a `<p class="links">` with any live link and the repo link. Leave the links out where none exists.
2. For a case study, copy `index.html`'s `<head>` into `projects/<name>.html`, give it its own `<title>`, link the stylesheet as `../styles.css`, and link the page from the row.
3. Say only what the project's repo says. Screenshots only from the project's own repo or docs; never a placeholder.
4. Run the check.

## Check before you commit

```
node scripts/check.mjs
```

It walks every `.html` file, checks that every internal `href` and `src` resolves and that every page has a `<title>` and a `lang`, prints one result line, and exits 1 on any problem.
