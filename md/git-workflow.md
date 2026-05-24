# Git Workflow

## Branch Overview

| Branch    | Purpose |
|-----------|---------|
| `develop` | Active development — all feature/fix branches merge here |
| `prod`    | Uncompiled source of truth for what is currently live |
| `live`    | Compiled static files only — served by GitHub Pages |

## Development → Develop

1. Create a branch off `develop` for the fix or feature.
2. Make changes, test locally (`npm start`).
3. Push the branch and merge into `develop`.
4. Test on `develop` before promoting.

## Develop → Prod

Once `develop` is verified, merge it into `prod` and push. `prod` always holds the latest uncompiled source that matches what is live.

```powershell
git checkout prod
git merge develop
git push origin prod
```

## Deploying to Live

`live` is a special branch that contains **only compiled static files** — no source code. It is served directly by GitHub Pages.

Switch to the `live` branch and run the deploy script:

```powershell
git checkout live
.\deploy-to-live.ps1
```

### What `deploy-to-live.ps1` does

1. Stashes any local script changes.
2. Pulls latest `prod` and hard-resets `live` to match it.
3. Runs `npm install --legacy-peer-deps`.
4. Prompts: **GitHub Pages** (`/wayne-heart/` base-href) or **Custom Domain** (`/` base-href).
5. Builds Angular to `dist/live-build/` with the chosen base-href.
6. Deletes everything in the working tree except `.git`, `dist/`, and the script itself.
7. Copies `dist/live-build/browser/*` to the repo root.
8. Creates `404.html` (copy of `index.html`) and `.nojekyll` for SPA routing on GitHub Pages.
9. Commits and **force-pushes** to `origin live`.

GitHub Pages automatically picks up the force-push and the live site updates.

**Live site**: https://Deathwishsa.github.io/wayne-heart/
