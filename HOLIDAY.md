# Holiday queue: the portfolio site (6 to 23 October 2026)

This is the queue for `AnuGnane/anugnane.github.io`, Anu's portfolio, served by GitHub Pages from the root of `main`. Scheduled cloud agents work it one package a run, and from 6 October 14:00 London they merge their own work: Anu has handed the holiday over and nothing waits for approval (see **Merging**). A merge is live within a minute or two.

## Rules

- Plain HTML and CSS, no build step, no framework, no dependencies, so Pages serves `main` as it is. `scripts/check.mjs` (Node, no packages) checks every internal link and image resolves and every page has a title and a `lang`; that is the gate.
- Phone first. Dark and light through `prefers-color-scheme`. A system font stack. One accent colour. No stock imagery, no icon fonts. Screenshots come from the projects' own repos or docs when they exist there; otherwise none, never a placeholder image.
- Say only what the repos say. Anu's name is Anu Gnane, GitHub `AnuGnane`. Do not write a bio, a job title, a location or a claim about skills; the home page keeps its `<!-- Anu: your words here -->` block for that. Project facts come from each repo's README, docs and specs. If a fact is not in a repo, leave it out.
- The site repo is `anugnane.github.io`. Other repos checked out beside it (`FPL`, `london-insurance-risk`, `wizard-shootout`, `Outbound`, `shift-game`) are reference only; never edit them in this lane. Never copy a key, token, config value or data path from any of them.

## One package a run

1. `git fetch origin`. A package is **done** when its box is ticked on `main`. It is **blocked** when a package it depends on is not done.
2. **Resume first.** A branch `holiday/<id>` (or `claude/holiday-<id>`) on origin that is not merged into `main` is an unfinished run, most likely cut off by a usage limit. Check it out, read its commits and PR, finish it under **Merging**, and only then consider a new package. Never leave a second unfinished branch behind.
3. Take the first package that is neither done nor blocked. If there is none, **refill** (below). If the queue is full and nothing is ready, stop; write one line saying so.
4. Branch from `origin/main` as `holiday/<id>`. Small commits.
5. Tick the box in this file in the same branch. Open the PR with the body below, then follow **Merging**.

### Refill

When no package is ready, add up to three new ones, each sized for one run: a case study for a repo on the home page that has none yet, a pass over an existing page against its repo's docs for anything stale, or a check that every live link on the site still answers. Never a new claim, never a page for a repo that is not Anu's. Commit the refill on `holiday/refill-<date>`, merge it under **Merging**, and stop.

### PR body

```
## For the phone
**What:** two or three lines.
**Gate:** `node scripts/check.mjs` result line.
**Look at:** the page paths to open once merged.
**Rulings:** numbered; each with a default marked. "None" when there are none.
```

## Merging

1. **The gate is green** on the branch's final commit, pasted into the PR.
2. **Review before merging.** Reread the whole diff as a reviewer would, with the Task tool's subagent if it is available: any claim not in a repo, any placeholder, any key or data path, any page that will not read on a phone. Fix what it finds; rerun the gate.
3. **Rebase on `origin/main`** just before merging; rerun the gate if the rebase touched a file.
4. **Merge** with the GitHub MCP tool (`merge_pull_request`, method `merge`). If that is unavailable, `git push origin HEAD:main` after the rebase (a fast-forward); GitHub marks the PR merged. Delete the branch. Never force-push; never rewrite `main`.
5. **After the merge**, wait two minutes, then `curl -sI https://anugnane.github.io/<each page the package added>` and expect 200. If a page is missing, say so in the notification; if the home page is broken, open and merge a revert of the merge commit.
6. **Report:** finish with one push notification: the package id, merged, the pages to look at.

## Queue

- [x] **S-1 The site.** `index.html` with a short list of projects (name, one line, status: live / in development / App Store pending, a link where one exists), `projects/` ready for a page per project, `styles.css`, `.nojekyll`, `scripts/check.mjs`, and `README.md` saying how to add a project. Rulings: the accent colour (default: a deep teal), whether the list is cards or a plain list (default: plain list with a rule between rows).
- [x] **S-2 The Shiftie link site.** Shiftie (the `shift-game` repo, checked out beside this one) needs this domain for Universal Links and for its App Store pages. From its `web/` folder and `web/DEPLOY.md`: put `apple-app-site-association` at `.well-known/apple-app-site-association` **and** at the root, byte for byte as in the repo (it names the app id; do not edit it). From its `metadata/pages/privacy.md` and `support.md`: `shiftie/privacy.html` and `shiftie/support.html` in this site's stylesheet, and `shiftie/index.html` as the "Get Shiftie" page from `web/index.html`, keeping its `<!-- TODO -->` App Store button as a plain line saying the app is coming. A root `404.html` in this site's style that, when `location.pathname` starts with `/challenge/`, shows the "Get Shiftie" copy and a link to `/shiftie/`, and otherwise a plain not-found line with a link home. Leave `[your support email]` as the repo has it and name it in the PR. Gate, and after the merge `curl -s https://anugnane.github.io/.well-known/apple-app-site-association` must return the JSON. Add Shiftie to the home page's list as App Store pending, linking `/shiftie/`.
- [ ] **S-3 london-insurance-risk.** A case study page from its README and `docs/PROJECT_SUMMARY.html`: the question, the data, the model, the live map (https://anugnane.github.io/london-insurance-risk/), what was hard. Link the repo.
- [ ] **S-4 Wizard Shootout.** From its README and ROADMAP: what it is, the classes, local and online play, the live game (https://anugnane.github.io/wizard-shootout/). Link the repo.
- [ ] **S-5 gaffer.** From `README.md` and `docs/GUIDE.md` in the FPL repo: an advisor-only Fantasy Premier League tool, component models and a MILP planner, the honesty rails, what it never does (log in, make transfers). Link the repo. Mention no key, no config, no data path.
- [ ] **S-6 Shunt.** From `docs/SPEC.md` and `docs/DESIGN.md` in the Outbound repo: a turn-based block sliding puzzle for iPhone, the tick, the ink tray, the generator that unbuilds levels from the solved board, the two-engine check. In development, no link; the repo is private. No screenshots unless `docs/mockups/` has images that are clearly renders of the game.
- [ ] **S-7 Shiftie.** A case study from `docs/DESIGN.md`, `HANDOFF.md` and the README in `shift-game` (once SH-1 there has written one): the sliding-word mechanic, dailies and streaks, the archive, challenges by link, the Ember Editorial look. App Store pending; link `/shiftie/`. The repo is private.
- [ ] **S-8 The rest, one line each.** PROSPECT, Prisma Puzzles and CarryTheOne on the home page under "Also", from whatever README is reachable; names only where none is. Then a pass over the home page's order and copy.

## Inbox

- (empty)
