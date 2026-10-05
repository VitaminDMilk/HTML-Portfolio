# Validation

Browser validation completed on October 4, 2026 (America/Indianapolis) using headless Microsoft Edge and local files.

62 integration checks passed with no JavaScript runtime errors.

- Four experience entries, three selected projects, and two education entries render.
- Both language versions include all interface translations and technical content.
- English and Chinese layouts have no horizontal overflow at 320, 375, 390, 768, 850, 1024, and 1440 pixels.
- Day, night, and blush themes update correctly; language and theme survive reload.
- Core English experience, projects, and contact remain available with JavaScript disabled.
- Language and theme still work when browser preference storage is blocked.
- Existing section anchors resolve; GitHub, email, and intentionally public US phone links remain.
- The old TOEFL score is absent. Missing resume, project URLs, and media do not produce empty buttons.
- System reduced-motion preference stops background animation.
- Image and video gallery behavior was verified using synthetic local fixtures excluded from the delivery.
- Gallery checks cover localized alt text and captions, video metadata loading, next/previous bounds, keyboard navigation, Escape, Close, media cleanup, and focus return.
- Unsafe script/data URLs and URLs containing credentials are rejected.
- Desktop, mobile, Chinese, projects, and night screenshots were inspected.

The replacement script was also run against a disposable copy of the original repository. It preserved the existing uncommitted files in its backup, copied the updated source, and left Git history unchanged.

## Animated background restoration — October 5, 2026

Restored the original 80 blue bubbles, 200 twinkling stars, 100 rotating falling petals, and three gradient backgrounds. The original desktop backup was rendered for comparison; its original `petal.png` is preserved. Canvas layering now explicitly places the background above the body paint and below the page content.

The 62 integration checks were rerun and passed. An additional 21 background checks passed, covering visible frame changes in all three themes, visible particles, original flower asset loading, gradient restoration, pause/resume, saved preference, manual animation activation with reduced motion enabled, translated controls, and header layout at 320px. No JavaScript runtime errors were recorded.

Restored day, night, blush, and mobile screenshots were inspected in the previous session. The user has since applied that version to the desktop repository; no replacement script is needed for ongoing edits.

The online page could not be reached from this environment (`ERR_NETWORK_ACCESS_DENIED`). No live-site visual comparison, external destination availability check, GitHub push, or deployment was performed. All implementation changes are based on the complete supplied content brief and the current local working files, including their uncommitted changes.

No real project screenshots, demo URLs, project repository URLs, or resume PDF were supplied. Their fields remain empty. Project cover graphics describe project themes and do not depict application screenshots.

## Repository handoff and interaction fixes — October 5, 2026

Read the complete content brief and inspected the existing uncommitted diff before editing directly in `C:\Users\david\Desktop\HTML-Portfolio`. No applicable `AGENTS.md` was found in the repository or its ancestor directories. Existing changes were preserved. README installation instructions now describe this repository and no longer ask the user to copy files or run the absent replacement script.

Fixed background pause/resume and visibility handling to retain the current particle scene, rather than rebuilding it at each pause or tab visibility change. Original particle types, counts, assets, gradients, and layering are unchanged. Gallery navigation now returns immediately at the first/last item, so a repeated direction key cannot recreate the current video.

Current-session verification (separate from the previous session's 83 checks):

- The in-app browser loaded the current repository through a loopback-only local server.
- All 14 English/Chinese layout combinations at 320, 375, 390, 768, 850, 1024, and 1440px had no horizontal overflow.
- Three theme controls selected their expected gradient and full-viewport canvas; the visible day background was inspected.
- Language and paused-animation state survived reload; resume restored the pressed playback control.
- Four experiences, three projects, two education entries, and hidden unconfigured resume/media/project links were confirmed in the rendered page.
- No browser warning or error logs were returned during these checks.
- A temporary Node regression harness exercised the actual background scheduler in all three themes: pause does not repaint or rerandomize the scene, resume retains particles, tab visibility retains particles, and repeated synchronization creates one animation loop. System reduced motion and explicit on/off choices also passed.
- The harness verified first/last gallery bounds leave the current media untouched and valid navigation renders the next item. Image/video playback, Escape, and focus return were covered by the previous session; those full media integration checks were not rerun in this session because production media remains unconfigured.
- JavaScript syntax checks and `git diff --check` passed. Git reported its existing LF-to-CRLF conversion notices.

The live site remained inaccessible through the web tool, so this session does not verify its deployed appearance. GitHub's official documentation confirms the existing project-site URL structure and the optional `<owner>.github.io` user-site repository structure. No commit, push, deployment, repository rename, or DNS change was performed.

## VDM Ledger public interactive demo — October 5, 2026

The user supplied `https://vdm-ledger.vercel.app/dashboard` and requested a demo. Browser inspection found an owner-only sign-in screen. The user then explicitly requested an anonymous demo with synthetic data.

Added `demos/vdm-ledger/` directly to this portfolio repository. Its interface and rules are grounded in the actual local Ledger source: dashboard, transactions, payments, monthly reports, spending service, app shell, original brand artwork, and the explicit mock-data fixture. All account names and suffixes were replaced with demo labels. No production database, environment file, credentials, bank records, or private session data was copied. The original Ledger repository and application were not modified.

The working demo provides dashboard/category/account summaries, month switching, merchant/account/category/status/movement filters, sample category and note edits, separate card-payment reporting, monthly breakdowns, CSV download, reset, English/Chinese, light/dark appearance, native modal keyboard support, and focus restoration. Edits remain in memory and reset on reload. It clearly identifies itself as a functional preview with synthetic data; banking connections and authentication are outside its scope. It does not claim to implement the complete production application or XLSX export.

The portfolio's Ledger card now links to `demos/vdm-ledger/index.html` through the existing localized demo action. The English static HTML includes the same link when JavaScript is disabled. The private production application remains available as a labeled owner-sign-in link in the demo footer. No private GitHub repository link was exposed as a public source-code action.

Verification:

- All nine `node --test tests/ledger-demo.test.cjs` tests passed: August spending/income/pending/payment separation, month boundaries, refunds and eligible fees, internal-payment exclusion, pending exclusion, category/account reconciliation, edits, combined filtering, CSV escaping, and formula-safe text fields.
- The sample August summary was $384.43 posted spending, $2,650.00 income, $31.18 pending estimate, and $500.00 card repayments. June was $14.00 net spending ($39.00 eligible fee minus $25.00 refund), and July was $119.08.
- Browser checks verified merchant search (two Uber results), combined pending filtering (one result), filter reset (15 August rows), category/note saves, safe literal note text, chart reallocation without changing spending, cancellation through Escape, focus return, and focus fallback when a category edit removes the row from the filtered result.
- The CSV download actually created `vdm-ledger-demo-2026-06.csv`; its contents were read and matched the two June sample transactions. The in-app browser's download-event wait timed out even though the file was successfully downloaded; direct file inspection confirmed the result.
- All 28 English/Chinese dashboard/transactions layouts at 320, 375, 390, 768, 850, 1024, and 1440px had no horizontal overflow. Chinese payments, monthly reports, and the edit dialog were also checked at 320px.
- Light/dark appearance, localized controls, reset/reload behavior, correct report totals, and desktop/mobile screenshots were inspected. No browser warning/error logs were recorded for the demo.
- The rendered portfolio card exposed the correct relative demo link. Browser automation disallows `file:` navigation, so browser testing used a loopback-only local server. Direct-file opening by automation was not verified; the files use classic local scripts and relative assets without a build step.
- JavaScript syntax checks and `git diff --check` passed.

This demo is available locally and will be served under the existing GitHub Pages project path when the portfolio is committed, pushed, and deployed. No commit, push, deployment, domain change, or production financial action was performed.

## Subsequent publication and portfolio effects — October 5, 2026

After the preceding local-only checkpoint, the user requested publication of the anonymous demo on the existing Ledger site, followed by additional portfolio effects.

- Ledger commit `92c838f1e3cc86ca1a9658774ef3759a44a51c8f` was pushed to its existing private repository. All 126 non-database tests, lint, TypeScript checks, production build, and staged credential scan passed.
- An exact read-only public route allowlist serves static demo assets before owner authentication. The existing production authentication, same-origin checks, security headers, and CSP remain intact.
- Deployed successfully to the existing Vercel project. Anonymous HTTP requests to `https://vdm-ledger.vercel.app/demo` and its JavaScript returned 200; `/dashboard` returned 307 to `/login`, the export API returned 401, and unknown demo paths still required login.
- Live browser verification confirmed the sample totals, two Uber search results, sample-note save, reset, Chinese translation, and no warning/error logs. No production bank or database mutation was performed.
- Both portfolio configuration and English static HTML now link to `https://vdm-ledger.vercel.app/demo`; the local demo remains available.

Added staggered hero entrance and scroll entrance through Web Animations, a floating focus panel, pulsing status dot, project scanning texture/orbit/arrow, CTA sheen, desktop card spotlight and limited perspective, reading progress, and current-section navigation. Content is visible by default; scroll effects do not leave offscreen sections hidden. All new animations obey the existing manual switch and system reduced-motion preference. Fine-pointer detection excludes touch interaction from tilt. No external dependency was added. Original day/night/blush particle counts, sizes, colors, gradients, and pause/resume scheduler were retained.

- All 14 English/Chinese layouts from 320 to 1440px were rechecked with effects enabled and had no horizontal overflow.
- Actual pointer interaction activated the Ledger card glow and nonidentity cover transform; project navigation selected its current section and updated reading progress.
- Pause removed the panel/arrow animation and perspective transform; the pause preference survived reload, and resuming/language rerender restored effects.
- A temporary harness exercised the actual script with five automatic/manual/system motion combinations and verified cancellation of in-progress entrances when paused. The reduced-motion stylesheet disables CSS animation and transition.
- Day, night, and blush backgrounds remained full-viewport; desktop and mobile previews were inspected. Browser logs, syntax checks, the nine demo model tests, and whitespace checks passed.

The Ledger public demo is online. Portfolio files are modified directly in the original checkout and remain uncommitted; their new link and effects have not yet been published to GitHub Pages.

## Portfolio publication preflight — October 5, 2026

The user subsequently explicitly requested publishing the new portfolio. The original checkout remained on `main`, matched `origin/main` before publication, and contained only the expected portfolio, demo, documentation, and test changes. No applicable AGENTS.md was found. GitHub Pages was verified through the authenticated repository API: legacy build from the `main` branch root, no custom domain, HTTPS enabled, and the existing `https://vitamindmilk.github.io/HTML-Portfolio/` URL.

JavaScript syntax checks, all nine Ledger model tests, and whitespace checks passed before publication. This release includes all previously verified bilingual content, the preserved original particle backgrounds, additional effects, and the live Ledger demo link. Publish by normal commit/push to the configured branch, then verify the Pages build revision and compare served assets with local source. No repository rename or DNS modification is part of this release.
