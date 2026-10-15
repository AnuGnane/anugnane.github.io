# anugnane.github.io

Anu Gnane's portfolio. Plain HTML and CSS served by GitHub Pages from the root of `main`. No build step, no framework, no dependencies; `.nojekyll` tells Pages to serve the files as they are.

While Anu is away (October 2026) the site is built by scheduled cloud agents working `HOLIDAY.md` one package a run, each as a PR the run itself merges once its gate and review pass (from 6 October 14:00). See `AnuGnane/autopilot` for the playbook.

## Layout

- `index.html` — the home page: the `<!-- Anu: your words here -->` intro block, the projects list and the "Also" list.
- `projects/` — one case study per project, `projects/<name>.html`.
- `shiftie/` — Shiftie's link pages: `index.html` (the **Get Shiftie** page), `privacy.html` and `support.html`, the App Store privacy and support URLs.
- `.well-known/apple-app-site-association` — the AASA file Apple's CDN fetches for Shiftie's `/challenge/*` Universal Links. `apple-app-site-association` at the root is the legacy fallback copy. Both are byte for byte the reference copies in the `shift-game` repo's `web/` folder, because the app ID and the paths are defined by that app; when they change there, copy them here unedited.
- `404.html` — GitHub Pages serves it for every unmatched path, so it is also the landing page for Shiftie's `/challenge/*` links on a device without the app: a `/challenge/` path shows "A friend challenged you", a **Get Shiftie** link and, for code and daily links, an **Open in Shiftie** `shift://` retry; any other path shows "Not found". Its links are root-absolute because it is served at any depth.
- `styles.css` — the one stylesheet. Colours are tokens on `:root`, with a dark set under `prefers-color-scheme: dark`; `--accent` is the one accent colour.
- `scripts/check.mjs` — the gate.

## Adding a project

1. Add a row to the `<ul class="projects">` list in `index.html`: an `<h3>` with the name and a `<span class="status">` (Live, In development or App Store pending), one line from the project's own README, and a `<p class="links">` with the case study, any live link and the repo link. Leave out a link where none exists, and the repo link where the repo is private (Shiftie and Shunt have none).
2. For a case study, copy `index.html`'s `<head>` into `projects/<name>.html`, give it its own `<title>` (`<Name> — Anu Gnane`), link the stylesheet as `../styles.css`, open `<main class="prose">` with the `<p class="crumb"><a href="../">Anu Gnane</a></p>` link home, end with a `<footer>` naming the repo files the page is from, and link the page from the row as "Case study".
3. Say only what the project's repo says. Screenshots only from the project's own repo or docs; never a placeholder.
4. Rows go in status order: Live, then App Store pending, then In development.
5. A project whose repo has no README goes under "Also" (`<ul class="also">`) by name only, with no link.
6. Leave the `<!-- Anu: your words here -->` block in `index.html` as it is; it is Anu's to fill.
7. Run the check.

## Check before you commit

```
node scripts/check.mjs
```

It walks every `.html` file, checks that every internal `href` and `src` resolves and that every page has a `<title>` and a `lang`, prints one result line, and exits 1 on any problem.
