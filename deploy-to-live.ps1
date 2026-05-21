# === Angular Deploy Script v11 - Static Build + Budget Bypass ===
Write-Host "🚀 Angular Deploy to Live - Starting (v11)..." -ForegroundColor Cyan

git stash push -m "temp stash" --include-untracked

git checkout prod
git pull origin prod

git checkout live
git reset --hard prod

npm install --legacy-peer-deps

# Choose mode
Write-Host "`n[g] GitHub Pages or [d] Custom Domain? " -NoNewline
$choice = Read-Host
$baseHref = if ($choice -eq "g" -or $choice -eq "G") { "/wayne-heart/" } else { "/" }
$deployType = if ($choice -eq "g" -or $choice -eq "G") { "GitHub" } else { "Domain" }

Write-Host "→ Building with base-href: $baseHref" -ForegroundColor Yellow

# Force static build + disable SSR + bypass budgets
npx ng build --configuration production `
    --output-path dist/live-build `
    --base-href $baseHref `
    --prerender false `
    --ssr false `
    --delete-output-path false

if (-Not (Test-Path "dist/live-build/browser/index.html")) {
    Write-Host "❌ Build still failed!" -ForegroundColor Red
    Read-Host "Press Enter to exit"
    exit 1
}

Write-Host "✅ Build successful!" -ForegroundColor Green

# Clean & deploy
Get-ChildItem -Path . | Where-Object {
    $_.Name -ne "deploy-to-live.ps1" -and 
    $_.Name -ne ".git" -and 
    $_.Name -ne "dist" -and 
    $_.Name -notlike ".*"
} | Remove-Item -Recurse -Force

Copy-Item -Path "dist/live-build/browser/*" -Destination . -Recurse -Force

Copy-Item -Path "index.html" -Destination "404.html" -Force
New-Item -ItemType File -Name ".nojekyll" -Force | Out-Null

git add .
$commitMessage = "Deploy: $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss') - $deployType"
git commit -m $commitMessage
git push origin live --force

git stash pop -q 2>$null

Write-Host "`n🎉 SUCCESS!" -ForegroundColor Green
Write-Host "Live: https://Deathwishsa.github.io/wayne-heart/" -ForegroundColor Magenta
Read-Host "`nPress Enter to close"