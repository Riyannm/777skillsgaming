# Cleanup script for Next.js dev server
Write-Host "Cleaning up Next.js dev server..." -ForegroundColor Yellow

# Remove lock file
if (Test-Path ".next\dev\lock") {
    Remove-Item ".next\dev\lock" -Force
    Write-Host "✓ Lock file removed" -ForegroundColor Green
} else {
    Write-Host "✓ No lock file found" -ForegroundColor Green
}

# Kill Node processes (be careful - this kills ALL node processes)
$nodeProcesses = Get-Process -Name "node" -ErrorAction SilentlyContinue
if ($nodeProcesses) {
    Write-Host "Found $($nodeProcesses.Count) Node process(es)" -ForegroundColor Yellow
    $nodeProcesses | ForEach-Object {
        Write-Host "  Stopping process $($_.Id)..." -ForegroundColor Gray
        Stop-Process -Id $_.Id -Force -ErrorAction SilentlyContinue
    }
    Write-Host "✓ Node processes stopped" -ForegroundColor Green
} else {
    Write-Host "✓ No Node processes found" -ForegroundColor Green
}

Write-Host "`nCleanup complete! You can now run 'npm run dev' safely." -ForegroundColor Green
