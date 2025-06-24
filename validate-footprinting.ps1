#!/usr/bin/env pwsh
# Script de validación para el módulo Footprinting y Reconocimiento
# Verifica que todos los archivos necesarios estén presentes

Write-Host "🔍 Validando módulo Footprinting y Reconocimiento..." -ForegroundColor Cyan

$modulePath = "modules/footprinting-reconocimiento"
$requiredFiles = @(
    "index.html",
    "module.js", 
    "svg-inline-injector.js",
    "icon-fix.js",
    "simple-icon-loader.js",
    "icon-diagnostics.js",
    "icon-fix.css",
    "module-styles.css",
    "test-diagrams.html"
)

$missingFiles = @()
$presentFiles = @()

foreach ($file in $requiredFiles) {
    $fullPath = Join-Path $modulePath $file
    if (Test-Path $fullPath) {
        $presentFiles += $file
        Write-Host "✅ $file" -ForegroundColor Green
    } else {
        $missingFiles += $file
        Write-Host "❌ $file" -ForegroundColor Red
    }
}

Write-Host "`n📊 Resumen:" -ForegroundColor Yellow
Write-Host "   Archivos presentes: $($presentFiles.Count)" -ForegroundColor Green
Write-Host "   Archivos faltantes: $($missingFiles.Count)" -ForegroundColor Red

if ($missingFiles.Count -eq 0) {
    Write-Host "`n🎉 ¡Todos los archivos necesarios están presentes!" -ForegroundColor Green
    Write-Host "✅ El módulo está listo para su uso." -ForegroundColor Green
} else {
    Write-Host "`n⚠️ Faltan algunos archivos:" -ForegroundColor Yellow
    foreach ($file in $missingFiles) {
        Write-Host "   - $file" -ForegroundColor Red
    }
}

# Verificar estructura de diagramas en module.js
Write-Host "`n🔧 Verificando estructura de diagramas..." -ForegroundColor Cyan
$moduleJsPath = Join-Path $modulePath "module.js"
if (Test-Path $moduleJsPath) {
    $content = Get-Content $moduleJsPath -Raw
    
    $checks = @{
        "UNIVERSAL_DIAGRAM_SYSTEM" = $content -match "UNIVERSAL_DIAGRAM_SYSTEM"
        "applyFallbacks" = $content -match "applyFallbacks\(\)"
        "forceFixDiagrams" = $content -match "window\.forceFixDiagrams"
        "getDiagramStatus" = $content -match "window\.getDiagramStatus"
        "testDiagrams" = $content -match "window\.testDiagrams"
        "Fallback functions" = $content -match "generateProcessFlowFallback"
    }
    
    foreach ($check in $checks.GetEnumerator()) {
        if ($check.Value) {
            Write-Host "✅ $($check.Key)" -ForegroundColor Green
        } else {
            Write-Host "❌ $($check.Key)" -ForegroundColor Red
        }
    }
}

Write-Host "`n🚀 Para probar el módulo:" -ForegroundColor Cyan
Write-Host "   1. Abrir: modules/footprinting-reconocimiento/index.html" -ForegroundColor White
Write-Host "   2. Pruebas: modules/footprinting-reconocimiento/test-diagrams.html" -ForegroundColor White
Write-Host "   3. Consola: Funciones de diagnostico disponibles" -ForegroundColor White
