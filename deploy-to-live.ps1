# === Angular Deploy Script v8 - Static Build (No SSR) ===
Write-Host "🚀 Angular Deploy to Live - Starting (v8)..." -ForegroundColor Cyan

# 1. Stash any changes to the script
Write-Host "Step 1: Stashing script changes..." -ForegroundColor Yellow
git stash push -m "temp stash" --include-untracked

# 2. Get latest prod
Write-Host "Step 2: Pulling latest prod..." -ForegroundColor Yellow
git checkout prod
git pull origin prod

# 3. Go to live and reset it to prod
Write-Host "Step 3: Resetting live to prod..." -ForegroundColor Yellow
git checkout live
git reset --hard prod

# 4. Install dependencies
Write-Host "Step 4: npm install..." -ForegroundColor Yellow
npm install --legacy-peer-deps

# === Choose deployment type ===
Write-Host "`nIs this for GitHub Pages (subfolder) or Custom Domain?" -ForegroundColor Cyan
Write-Host "Enter [g] for GitHub Pages or [d] for Custom Domain: " -NoNewline
$choice = Read-Host

if ($choice -eq "g" -or $choice -eq "G") {
    $baseHref = "/wayne-heart/"
    $deployType = "GitHub"
    Write-Host "→ GitHub Pages mode selected (base-href = /wayne-heart/)" -ForegroundColor Yellow
}
else {
    $baseHref = "/"
    $deployType = "Domain"
    Write-Host "→ Custom Domain / Root mode selected (base-href = /)" -ForegroundColor Yellow
}

# 5. Build as STATIC (disable SSR/prerendering)
Write-Host "Step 5: Building Angular as Static Site (no SSR)..." -ForegroundColor Yellow
npx ng build --configuration production --output-path dist/live-build --base-href $baseHref

# Check build
if (-Not (Test-Path "dist/live-build/browser/index.html")) {
    Write-Host "❌ Build failed - index.html not found in dist/live-build/browser/" -ForegroundColor Red
    Read-Host "Press Enter to exit"
    exit 1
}
Write-Host "✅ Build successful!" -ForegroundColor Green

# 6. Clean everything except script + .git + dist
Write-Host "Step 6: Cleaning non-build files..." -ForegroundColor Yellow
Get-ChildItem -Path . | Where-Object {
    $_.Name -ne "deploy-to-live.ps1" -and 
    $_.Name -ne ".git" -and 
    $_.Name -ne "dist" -and 
    $_.Name -notlike ".*"
} | Remove-Item -Recurse -Force

# 7. Copy browser build to root
Write-Host "Step 7: Copying browser build to root..." -ForegroundColor Yellow
Copy-Item -Path "dist/live-build/browser/*" -Destination . -Recurse -Force

# 8. SPA Routing Fix
Write-Host "Step 8: Creating SPA routing files (404.html + .nojekyll)..." -ForegroundColor Yellow
Copy-Item -Path "index.html" -Destination "404.html" -Force
New-Item -ItemType File -Name ".nojekyll" -Force | Out-Null

# 9. Commit & Force Push
Write-Host "Step 9: Committing & force pushing..." -ForegroundColor Yellow
git add .
$commitMessage = "Deploy: $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss') - $deployType"
git commit -m $commitMessage
git push origin live --force

git stash pop -q 2>$null

Write-Host "`n🎉 SUCCESS! Deployment completed." -ForegroundColor Green
Write-Host "Live site: https://Deathwishsa.github.io/wayne-heart/" -ForegroundColor Magenta
Write-Host "GitHub live branch: https://github.com/Deathwishsa/wayne-heart/tree/live" -ForegroundColor Magenta

Read-Host "`nPress Enter to close window"