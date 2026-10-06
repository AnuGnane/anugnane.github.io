# Holiday queue: the portfolio site (6 to 23 October 2026)

This is the queue for `AnuGnane/anugnane.github.io`, Anu's portfolio, served by GitHub Pages from the root of `main`. Scheduled cloud agents work it one package a run and open a PR; Anu approves from the phone and looks at the live site after each merge.

## Rules

- Plain HTML and CSS, no build step, no framework, no dependencies, so Pages serves `main` as it is. One small `scripts/check.mjs` in Node with no packages that checks every internal link and image resolves and every page has a title and a `lang`; that is the gate.
- Phone first. Dark and light through `prefers-color-scheme`. A system font stack. One accent colour. No stock imagery, no icon fonts. Screenshots come from the projects' own repos or docs when they exist there; otherwise none, never a placeholder image.
- Say only what the repos say. Anu's name is Anu Gnane, GitHub `AnuGnane`. Do not write a bio, a job title, a location or a claim about skills; leave one clearly marked `<!-- Anu: your words here -->` block on the home page for that. Project facts come from each repo's README, docs and specs. If a fact is not in a repo, leave it out.
- The site repo is `anugnane.github.io`. Other repos checked out beside it are reference only; never edit them in this lane.

## One package a run

1. `git fetch origin`. A package is **done** when its box is ticked on `main`. It is **in review** when a branch `holiday/<id>` (or `claude/holiday-<id>`) exists on origin and is not merged; leave it alone.
2. Take the first package that is neither. If none, stop with one line.
3. Branch from `origin/main` as `holiday/<id>`. Small commits.
4. Tick the box in this file in the same branch. Open the PR with the body below. Stop.

### PR body

```
## For the phone
**What:** two or three lines.
**Gate:** `node scripts/check.mjs` result line.
**Look at:** the page paths to open once merged.
**Rulings:** numbered; each with a default marked. "None" when there are none.
```

## Queue

- [ ] **S-1 The site.** `index.html` with a short list of projects (name, one line, status: live / in development / App Store pending, a link where one exists), `projects/` ready for a page per project, `styles.css`, `.nojekyll`, `scripts/check.mjs`, and `README.md` saying how to add a project. Rulings: the accent colour (default: a deep teal), whether the list is cards or a plain list (default: plain list with a rule between rows).
- [ ] **S-2 london-insurance-risk.** A case study page from its README and `docs/PROJECT_SUMMARY.html`: the question, the data, the model, the live map (https://anugnane.github.io/london-insurance-risk/), what was hard. Link the repo.
- [ ] **S-3 Wizard Shootout.** From its README and ROADMAP: what it is, the classes, local and online play, the live game (https://anugnane.github.io/wizard-shootout/). Link the repo.
- [ ] **S-4 gaffer.** From `README.md` and `docs/GUIDE.md` in the FPL repo: an advisor-only Fantasy Premier League tool, component models and a MILP planner, the honesty rails, what it never does (log in, make transfers). Link the repo. Mention no key, no config, no data path.
- [ ] **S-5 Shunt.** From `docs/SPEC.md` and `docs/DESIGN.md` in the Outbound repo: a turn-based block sliding puzzle for iPhone, the tick, the ink tray, the generator that unbuilds levels from the solved board, the two-engine check. In development, no link; the repo is private. No screenshots unless `docs/mockups/` has images that are clearly renders of the game.
- [ ] **S-6 The rest, one line each.** PROSPECT, Prisma Puzzles, Shiftie and CarryTheOne on the home page under "Also", from whatever README is reachable; names only where none is. Then a pass over the home page's order and copy.

## Inbox

- (empty)
