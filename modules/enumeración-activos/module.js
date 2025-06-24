// ========================================
// SISTEMA DE INICIALIZACIÓN MEJORADO
// ========================================

// Inicialización completa del módulo
async function initializeModule() {
    console.log('🚀 Inicializando módulo Enumeración de Activos...');
    
    try {
        // 1. Inicializar sistemas de iconos y SVG
        await initializeIconSystems();
        
        // 2. Inicializar sistema de diagramas
        await initializeDiagramSystem();
        
        // 3. Cargar módulo
        loadModule();
        
        // 4. Verificar y aplicar correcciones
        setTimeout(() => applySystemFixes(), 1000);
        setTimeout(() => applySystemFixes(), 3000);
        
        console.log('✅ Módulo inicializado completamente');
        
    } catch (error) {
        console.error('❌ Error inicializando módulo:', error);
        applyFallbackSystems();
    }
}

// Inicializar sistemas de iconos
async function initializeIconSystems() {
    const systems = [
        { name: 'IconFixSystem', system: window.IconFixSystem },
        { name: 'SvgInlineInjector', system: window.SvgInlineInjector },
        { name: 'SimpleIconLoader', system: window.SimpleIconLoader },
        { name: 'IconDiagnostics', system: window.IconDiagnostics }
    ];
    
    for (const { name, system } of systems) {
        try {
            if (system && typeof system.init === 'function') {
                await system.init();
                console.log(`✅ ${name} inicializado`);
            } else {
                console.warn(`⚠️ ${name} no disponible`);
            }
        } catch (error) {
            console.warn(`⚠️ Error inicializando ${name}:`, error);
        }
    }
}

// Inicializar sistema de diagramas
async function initializeDiagramSystem() {
    try {
        if (typeof UNIVERSAL_DIAGRAM_SYSTEM !== 'undefined') {
            await UNIVERSAL_DIAGRAM_SYSTEM.init();
            console.log('✅ Sistema de diagramas inicializado');
        } else {
            console.warn('⚠️ Sistema de diagramas no disponible');
        }
    } catch (error) {
        console.warn('⚠️ Error inicializando sistema de diagramas:', error);
    }
}

// Aplicar correcciones del sistema
function applySystemFixes() {
    console.log('🔧 Aplicando correcciones del sistema...');
    
    // Verificar y corregir iconos faltantes
    fixMissingIcons();
    
    // Verificar y corregir diagramas
    fixMissingDiagrams();
    
    // Aplicar correcciones de estilo
    applyStyleFixes();
}

// Corregir iconos faltantes
function fixMissingIcons() {
    const brokenIcons = document.querySelectorAll('svg:empty, .fa:empty');
    
    brokenIcons.forEach(icon => {
        if (icon.tagName === 'svg') {
            // Reemplazar SVG vacío con FontAwesome
            const fallbackIcon = document.createElement('i');
            fallbackIcon.className = 'fas fa-circle-question text-muted';
            fallbackIcon.title = 'Icono no disponible';
            icon.parentNode.replaceChild(fallbackIcon, icon);
        }
    });
    
    if (brokenIcons.length > 0) {
        console.log(`🔧 ${brokenIcons.length} iconos corregidos`);
    }
}

// Corregir diagramas faltantes
function fixMissingDiagrams() {
    const emptyDiagrams = document.querySelectorAll('svg[data-diagram]:empty');
    
    emptyDiagrams.forEach(svg => {
        const diagramId = svg.getAttribute('data-diagram');
        generateFallbackDiagram(svg, diagramId);
    });
    
    if (emptyDiagrams.length > 0) {
        console.log(`🔧 ${emptyDiagrams.length} diagramas de respaldo generados`);
    }
}

// Generar diagrama de respaldo
function generateFallbackDiagram(container, diagramId) {
    const fallbackSVG = `
        <svg viewBox="0 0 400 200" style="width: 100%; height: auto;">
            <rect width="400" height="200" fill="#f8f9fa" stroke="#dee2e6" stroke-width="2" rx="10"/>
            <text x="200" y="100" text-anchor="middle" font-size="16" fill="#6c757d" font-family="Arial, sans-serif">
                Diagrama: ${diagramId}
            </text>
            <text x="200" y="130" text-anchor="middle" font-size="12" fill="#adb5bd" font-family="Arial, sans-serif">
                (Contenido no disponible)
            </text>
        </svg>
    `;
    
    container.innerHTML = fallbackSVG;
    container.setAttribute('data-fallback', 'true');
}

// Aplicar correcciones de estilo
function applyStyleFixes() {
    // Asegurar que los iconos FontAwesome tengan estilos correctos
    const style = document.createElement('style');
    style.textContent = `
        .fa, .fas, .far, .fab, .fal, .fad {
            display: inline-block !important;
            font-style: normal !important;
            font-variant: normal !important;
            text-rendering: auto !important;
            line-height: 1 !important;
        }
        svg[data-fallback] {
            border: 1px dashed #dee2e6;
            background: #f8f9fa;
        }
    `;
    document.head.appendChild(style);
}

// Aplicar sistemas de respaldo
function applyFallbackSystems() {
    console.log('🛠️ Aplicando sistemas de respaldo...');
    
    // Reemplazar todos los iconos problemáticos con FontAwesome
    const allIcons = document.querySelectorAll('svg, .icon');
    allIcons.forEach(icon => {
        if (icon.tagName === 'svg' && !icon.innerHTML.trim()) {
            const fallback = document.createElement('i');
            fallback.className = 'fas fa-circle text-secondary';
            icon.parentNode.replaceChild(fallback, icon);
        }
    });
    
    console.log('✅ Sistemas de respaldo aplicados');
}

// Auto-inicializar cuando el DOM esté listo
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeModule);
} else {
    initializeModule();
}

// Exportar funciones principales para uso global
window.EnumeracionActivosModule = {
    init: initializeModule,
    loadTopic: loadTopic,
    nextTopic: nextTopic,
    previousTopic: previousTopic,
    loadDiagram: (containerId, diagramId) => {
        if (typeof UNIVERSAL_DIAGRAM_SYSTEM !== 'undefined') {
            return UNIVERSAL_DIAGRAM_SYSTEM.loadDiagram(containerId, diagramId);
        }
        return false;
    }
};