# ========================================
# VERIFICACIÓN DEL SISTEMA DE ICONOS Y DIAGRAMAS
# Módulo: Enumeración de Activos
# ========================================

Write-Host "🔍 VERIFICACIÓN: Sistema de Iconos y Diagramas - Enumeración de Activos" -ForegroundColor Cyan
Write-Host "=" * 70

# Definir rutas
$moduleRoot = "c:\SENA\Año 2025\OVA ZAjuna\EH\modules\enumeracion-activos"
$assetsRoot = "c:\SENA\Año 2025\OVA ZAjuna\EH\assets"

# Lista de archivos requeridos
$requiredFiles = @(
    @{Path = "$moduleRoot\index.html"; Name = "HTML Principal"},
    @{Path = "$moduleRoot\module.js"; Name = "JavaScript Principal"},
    @{Path = "$moduleRoot\icon-fix.css"; Name = "CSS de Corrección de Iconos"},
    @{Path = "$moduleRoot\icon-fix.js"; Name = "JavaScript de Corrección de Iconos"},
    @{Path = "$moduleRoot\svg-inline-injector.js"; Name = "Inyector SVG"},
    @{Path = "$moduleRoot\simple-icon-loader.js"; Name = "Cargador Simple de Iconos"},
    @{Path = "$moduleRoot\icon-diagnostics.js"; Name = "Diagnósticos de Iconos"},
    @{Path = "$moduleRoot\test-sistema-iconos.html"; Name = "Archivo de Test"},
    @{Path = "$assetsRoot\images\diagrams.svg"; Name = "Archivo de Diagramas SVG"},
    @{Path = "$assetsRoot\css\global.css"; Name = "CSS Global"},
    @{Path = "$assetsRoot\css\module.css"; Name = "CSS de Módulos"}
)

Write-Host "`n📁 VERIFICACIÓN DE ARCHIVOS:" -ForegroundColor Yellow

# Verificar archivos
$missingFiles = @()
$existingFiles = @()

foreach ($file in $requiredFiles) {
    if (Test-Path $file.Path) {
        Write-Host "✅ $($file.Name)" -ForegroundColor Green
        $existingFiles += $file
    } else {
        Write-Host "❌ $($file.Name) - NO ENCONTRADO" -ForegroundColor Red
        $missingFiles += $file
    }
}

# Verificar contenido específico
Write-Host "`n🔍 VERIFICACIÓN DE CONTENIDO:" -ForegroundColor Yellow

# Verificar referencias en HTML
$htmlPath = "$moduleRoot\index.html"
if (Test-Path $htmlPath) {
    $htmlContent = Get-Content $htmlPath -Raw
    
    $htmlChecks = @(
        @{Pattern = 'svg-inline-injector\.js'; Name = 'Referencia a SVG Injector'},
        @{Pattern = 'icon-fix\.js'; Name = 'Referencia a Icon Fix'},
        @{Pattern = 'icon-fix\.css'; Name = 'Referencia a Icon Fix CSS'},
        @{Pattern = 'simple-icon-loader\.js'; Name = 'Referencia a Simple Icon Loader'},
        @{Pattern = 'font-awesome'; Name = 'Referencia a FontAwesome'},
        @{Pattern = 'diagrams\.svg'; Name = 'Preload de Diagramas'}
    )
    
    foreach ($check in $htmlChecks) {
        if ($htmlContent -match $check.Pattern) {
            Write-Host "✅ $($check.Name)" -ForegroundColor Green
        } else {
            Write-Host "⚠️ $($check.Name) - NO ENCONTRADA" -ForegroundColor Yellow
        }
    }
} else {
    Write-Host "❌ No se pudo verificar el contenido HTML" -ForegroundColor Red
}

# Verificar diagramas en SVG
$svgPath = "$assetsRoot\images\diagrams.svg"
if (Test-Path $svgPath) {
    $svgContent = Get-Content $svgPath -Raw
    
    $diagramIds = @('methodology-diagram', 'tools-comparison', 'techniques-matrix', 'scanning-methodology')
    
    Write-Host "`n📊 VERIFICACIÓN DE DIAGRAMAS:" -ForegroundColor Yellow
    
    foreach ($diagramId in $diagramIds) {
        if ($svgContent -match "id=`"$diagramId`"") {
            Write-Host "✅ Diagrama: $diagramId" -ForegroundColor Green
        } else {
            Write-Host "❌ Diagrama: $diagramId - NO ENCONTRADO" -ForegroundColor Red
        }
    }
} else {
    Write-Host "❌ No se pudo verificar el archivo de diagramas SVG" -ForegroundColor Red
}

# Verificar JavaScript
$jsPath = "$moduleRoot\module.js"
if (Test-Path $jsPath) {
    $jsContent = Get-Content $jsPath -Raw
    
    Write-Host "`n🔧 VERIFICACIÓN DE JAVASCRIPT:" -ForegroundColor Yellow
    
    $jsChecks = @(
        @{Pattern = 'UNIVERSAL_DIAGRAM_SYSTEM'; Name = 'Sistema Universal de Diagramas'},
        @{Pattern = 'initializeModule'; Name = 'Función de Inicialización'},
        @{Pattern = 'initializeIconSystems'; Name = 'Inicialización de Sistemas de Iconos'},
        @{Pattern = 'applySystemFixes'; Name = 'Aplicación de Correcciones'},
        @{Pattern = 'methodology-diagram'; Name = 'Configuración de Diagramas'}
    )
    
    foreach ($check in $jsChecks) {
        if ($jsContent -match $check.Pattern) {
            Write-Host "✅ $($check.Name)" -ForegroundColor Green
        } else {
            Write-Host "❌ $($check.Name) - NO ENCONTRADO" -ForegroundColor Red
        }
    }
} else {
    Write-Host "❌ No se pudo verificar el archivo JavaScript" -ForegroundColor Red
}

# Resumen final
Write-Host "`n" + "=" * 70
Write-Host "📋 RESUMEN DE VERIFICACIÓN:" -ForegroundColor Cyan

Write-Host "✅ Archivos existentes: $($existingFiles.Count)" -ForegroundColor Green
if ($missingFiles.Count -gt 0) {
    Write-Host "❌ Archivos faltantes: $($missingFiles.Count)" -ForegroundColor Red
}

# Recomendaciones
Write-Host "`n💡 RECOMENDACIONES:" -ForegroundColor Yellow

if ($missingFiles.Count -eq 0) {
    Write-Host "✅ Todos los archivos están presentes. El sistema debería funcionar correctamente." -ForegroundColor Green
    Write-Host "🔧 Para probar el sistema, abra: $moduleRoot\test-sistema-iconos.html" -ForegroundColor Cyan
} else {
    Write-Host "⚠️ Algunos archivos faltan. Revise las dependencias." -ForegroundColor Yellow
    Write-Host "📝 Archivos faltantes:" -ForegroundColor Red
    foreach ($missing in $missingFiles) {
        Write-Host "   - $($missing.Name): $($missing.Path)" -ForegroundColor Red
    }
}

Write-Host "`n🚀 Para ejecutar el módulo, use la tarea de VS Code:" -ForegroundColor Cyan
Write-Host "   'Ejecutar Módulo Enumeración de Activos'" -ForegroundColor White

Write-Host "`n✅ Verificación completada." -ForegroundColor Green
