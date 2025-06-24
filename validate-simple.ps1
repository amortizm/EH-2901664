Write-Host "Validando modulo Footprinting y Reconocimiento..." -ForegroundColor Cyan

$modulePath = "modules/footprinting-reconocimiento"
$requiredFiles = @(
    "index.html",
    "module.js", 
    "svg-inline-injector.js",
    "icon-fix.js",
    "simple-icon-loader.js",
    "icon-diagnostics.js",
    "test-diagrams.html"
)

$presentFiles = 0
$missingFiles = 0

foreach ($file in $requiredFiles) {
    $fullPath = Join-Path $modulePath $file
    if (Test-Path $fullPath) {
        $presentFiles++
        Write-Host "OK $file" -ForegroundColor Green
    } else {
        $missingFiles++
        Write-Host "FALTA $file" -ForegroundColor Red
    }
}

Write-Host "Archivos presentes: $presentFiles" -ForegroundColor Green
Write-Host "Archivos faltantes: $missingFiles" -ForegroundColor Red

if ($missingFiles -eq 0) {
    Write-Host "Todos los archivos estan presentes!" -ForegroundColor Green
} else {
    Write-Host "Faltan algunos archivos" -ForegroundColor Yellow
}
