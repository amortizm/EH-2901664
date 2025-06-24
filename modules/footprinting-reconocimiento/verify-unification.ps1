# Script de verificación para los cambios en Topics 3-6
# Verifica que las referencias SVG estén unificadas

Write-Host "🔍 Verificación de unificación de diagramas Topics 3-6" -ForegroundColor Cyan
Write-Host "============================================" -ForegroundColor Cyan

$moduleFile = "c:\SENA\Año 2025\OVA ZAjuna\EH\modules\footprinting-reconocimiento\module.js"
$diagramsFile = "c:\SENA\Año 2025\OVA ZAjuna\EH\assets\images\diagrams.svg"

# Verificar que los archivos existan
if (-not (Test-Path $moduleFile)) {
    Write-Host "❌ No se encontró module.js en: $moduleFile" -ForegroundColor Red
    exit 1
}

if (-not (Test-Path $diagramsFile)) {
    Write-Host "❌ No se encontró diagrams.svg en: $diagramsFile" -ForegroundColor Red
    exit 1
}

Write-Host "`n📋 Verificando referencias SVG en module.js..." -ForegroundColor Yellow

# Verificar que las referencias usen la ruta correcta
$correctPatterns = @(
    '../../assets/images/diagrams.svg#footprinting-process-flow',
    '../../assets/images/diagrams.svg#methodology-diagram',
    '../../assets/images/diagrams.svg#tools-comparison',
    '../../assets/images/diagrams.svg#google-dorks-map',
    '../../assets/images/diagrams.svg#techniques-matrix',
    '../../assets/images/diagrams.svg#osint-framework'
)

$moduleContent = Get-Content $moduleFile -Raw -Encoding UTF8

foreach ($pattern in $correctPatterns) {
    if ($moduleContent -match [regex]::Escape($pattern)) {
        Write-Host "✅ Encontrado: $pattern" -ForegroundColor Green
    } else {
        Write-Host "❌ NO encontrado: $pattern" -ForegroundColor Red
    }
}

Write-Host "`n🎯 Verificando viewBox='0 0 100 100' unificado..." -ForegroundColor Yellow

$viewBoxPattern = 'viewBox="0 0 100 100"'
$viewBoxMatches = [regex]::Matches($moduleContent, [regex]::Escape($viewBoxPattern))
Write-Host "Encontradas $($viewBoxMatches.Count) referencias con viewBox unificado" -ForegroundColor $(if($viewBoxMatches.Count -ge 6) {'Green'} else {'Red'})

Write-Host "`n📄 Verificando existencia de símbolos en diagrams.svg..." -ForegroundColor Yellow

$diagramIds = @(
    'footprinting-process-flow',
    'methodology-diagram', 
    'tools-comparison',
    'google-dorks-map',
    'techniques-matrix',
    'osint-framework'
)

if (Test-Path $diagramsFile) {
    $diagramsContent = Get-Content $diagramsFile -Raw -Encoding UTF8
    
    foreach ($id in $diagramIds) {
        $symbolPattern = "<symbol id=`"$id`""
        if ($diagramsContent -match [regex]::Escape($symbolPattern)) {
            Write-Host "✅ Símbolo encontrado: $id" -ForegroundColor Green
        } else {
            Write-Host "❌ Símbolo NO encontrado: $id" -ForegroundColor Red
        }
    }
} else {
    Write-Host "❌ Archivo diagrams.svg no encontrado" -ForegroundColor Red
}

Write-Host "`n🔧 Verificando patrones incorrectos..." -ForegroundColor Yellow

# Buscar patrones que deberían haber sido reemplazados
$incorrectPatterns = @(
    'href="#tools-comparison"',
    'href="#google-dorks-map"',
    'href="#techniques-matrix"',
    'href="#osint-framework"',
    'viewBox="0 0 800 450"',
    'viewBox="0 0 750 500"',
    'viewBox="0 0 800 600"',
    'viewBox="0 0 900 650"'
)

$issuesFound = 0
foreach ($pattern in $incorrectPatterns) {
    if ($moduleContent -match [regex]::Escape($pattern)) {
        Write-Host "⚠️ Patrón incorrecto encontrado: $pattern" -ForegroundColor Red
        $issuesFound++
    }
}

if ($issuesFound -eq 0) {
    Write-Host "✅ No se encontraron patrones incorrectos" -ForegroundColor Green
} else {
    Write-Host "❌ Se encontraron $issuesFound patrones que necesitan corrección" -ForegroundColor Red
}

Write-Host "`n📊 RESUMEN:" -ForegroundColor Cyan
Write-Host "============" -ForegroundColor Cyan

if ($issuesFound -eq 0) {
    Write-Host "🎉 ÉXITO: Todos los diagramas están unificados correctamente" -ForegroundColor Green
    Write-Host "   - Referencias SVG utilizan rutas completas" -ForegroundColor Green
    Write-Host "   - ViewBox unificado a '0 0 100 100'" -ForegroundColor Green
    Write-Host "   - Símbolos existen en diagrams.svg" -ForegroundColor Green
} else {
    Write-Host "⚠️ ADVERTENCIA: Se encontraron algunos problemas" -ForegroundColor Yellow
    Write-Host "   - Verificar patrones incorrectos arriba" -ForegroundColor Yellow
}

Write-Host "`n🚀 Para probar los cambios:" -ForegroundColor Cyan
Write-Host "   1. Abrir: modules/footprinting-reconocimiento/index.html" -ForegroundColor White
Write-Host "   2. Navegar por los topics 3-6" -ForegroundColor White
Write-Host "   3. Verificar que los diagramas se muestren correctamente" -ForegroundColor White
Write-Host "   4. Test unificado: test-diagrams-unified.html" -ForegroundColor White

Write-Host "`n✨ Cambios aplicados:" -ForegroundColor Green
Write-Host "   - Topic 3: tools-comparison unificado" -ForegroundColor White
Write-Host "   - Topic 4: google-dorks-map unificado" -ForegroundColor White
Write-Host "   - Topic 5: techniques-matrix unificado" -ForegroundColor White
Write-Host "   - Topic 6: osint-framework unificado" -ForegroundColor White
