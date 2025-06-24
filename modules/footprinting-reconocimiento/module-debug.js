// Debugging utilities for Footprinting module
console.log('🔍 MÓDULO FOOTPRINTING - DIAGNÓSTICO COMPLETO');
console.log('================================================');

// Check if module is loaded
function checkModuleStatus() {
    const checks = {
        'footprintingModuleData': typeof footprintingModuleData !== 'undefined',
        'UNIVERSAL_DIAGRAM_SYSTEM': typeof UNIVERSAL_DIAGRAM_SYSTEM !== 'undefined',
        'initializeModule': typeof initializeModule === 'function',
        'loadTopic': typeof loadTopic === 'function',
        'loadNavigation': typeof loadNavigation === 'function',
        'createConceptosBasicosContent': typeof createConceptosBasicosContent === 'function',
        'createMetodologiaFootprintContent': typeof createMetodologiaFootprintContent === 'function',
        'createHerramientasFootprintContent': typeof createHerramientasFootprintContent === 'function',
        'createGoogleHackingContent': typeof createGoogleHackingContent === 'function',
        'createTecnicasFootprintContent': typeof createTecnicasFootprintContent === 'function',
        'createOSINTContent': typeof createOSINTContent === 'function'
    };
    
    console.log('\n📋 ESTADO DE COMPONENTES:');
    Object.entries(checks).forEach(([component, status]) => {
        console.log(`${status ? '✅' : '❌'} ${component}: ${status ? 'OK' : 'NOT FOUND'}`);
    });
    
    return checks;
}

// Check DOM elements
function checkDOMElements() {
    const elements = {
        'module-nav': document.getElementById('module-nav'),
        'topic-content': document.getElementById('topic-content'),
        'sidebar-progress': document.getElementById('sidebar-progress'),
        'sidebar-progress-text': document.getElementById('sidebar-progress-text')
    };
    
    console.log('\n🏗️ ESTADO DE ELEMENTOS DOM:');
    Object.entries(elements).forEach(([element, dom]) => {
        console.log(`${dom ? '✅' : '❌'} ${element}: ${dom ? 'FOUND' : 'NOT FOUND'}`);
    });
    
    return elements;
}

// Test module initialization
function testModuleInit() {
    console.log('\n🚀 PROBANDO INICIALIZACIÓN DEL MÓDULO:');
    
    try {
        if (typeof initializeModule === 'function') {
            console.log('🔧 Ejecutando initializeModule()...');
            initializeModule();
            console.log('✅ initializeModule() ejecutado sin errores');
        } else {
            console.error('❌ initializeModule no está disponible');
        }
    } catch (error) {
        console.error('❌ Error ejecutando initializeModule:', error);
    }
}

// Test topic loading
function testTopicLoading() {
    console.log('\n📖 PROBANDO CARGA DE TEMAS:');
    
    if (typeof footprintingModuleData !== 'undefined' && footprintingModuleData.topics) {
        footprintingModuleData.topics.forEach((topic, index) => {
            console.log(`📄 Tema ${index}: ${topic.title} (ID: ${topic.id})`);
        });
        
        // Test loading first topic
        try {
            if (typeof loadTopic === 'function') {
                console.log('🔧 Probando carga del primer tema...');
                loadTopic(0);
                console.log('✅ Primer tema cargado sin errores');
            }
        } catch (error) {
            console.error('❌ Error cargando primer tema:', error);
        }
    } else {
        console.error('❌ footprintingModuleData no disponible');
    }
}

// Test diagram system
function testDiagramSystem() {
    console.log('\n🎨 PROBANDO SISTEMA DE DIAGRAMAS:');
    
    if (typeof UNIVERSAL_DIAGRAM_SYSTEM !== 'undefined') {
        console.log('✅ UNIVERSAL_DIAGRAM_SYSTEM disponible');
        console.log('📊 Diagramas configurados:', UNIVERSAL_DIAGRAM_SYSTEM.diagrams.length);
        
        UNIVERSAL_DIAGRAM_SYSTEM.diagrams.forEach((diagram, index) => {
            console.log(`   ${index + 1}. ${diagram.id} (Topic ${diagram.topic})`);
        });
        
        // Test initialization
        try {
            console.log('🔧 Probando inicialización del sistema de diagramas...');
            UNIVERSAL_DIAGRAM_SYSTEM.init();
            console.log('✅ Sistema de diagramas inicializado');
        } catch (error) {
            console.error('❌ Error inicializando sistema de diagramas:', error);
        }
    } else {
        console.error('❌ UNIVERSAL_DIAGRAM_SYSTEM no disponible');
    }
}

// Force load first topic
function forceLoadFirstTopic() {
    console.log('\n🎯 FORZANDO CARGA DEL PRIMER TEMA:');
    
    try {
        if (typeof loadTopic === 'function') {
            loadTopic(0);
            console.log('✅ Primer tema cargado');
        } else if (typeof loadFirstTopic === 'function') {
            loadFirstTopic();
            console.log('✅ loadFirstTopic ejecutado');
        } else {
            console.error('❌ No hay funciones de carga disponibles');
        }
    } catch (error) {
        console.error('❌ Error forzando carga:', error);
    }
}

// Main diagnostic function
function runFullDiagnostic() {
    console.log('\n🔬 EJECUTANDO DIAGNÓSTICO COMPLETO...\n');
    
    const moduleStatus = checkModuleStatus();
    const domStatus = checkDOMElements();
    
    // Only proceed if basic components are available
    if (moduleStatus.footprintingModuleData && moduleStatus.initializeModule) {
        testModuleInit();
        testTopicLoading();
    } else {
        console.error('❌ Componentes básicos faltantes - no se puede continuar');
    }
    
    if (moduleStatus.UNIVERSAL_DIAGRAM_SYSTEM) {
        testDiagramSystem();
    }
    
    console.log('\n🎯 DIAGNÓSTICO COMPLETO FINALIZADO');
    console.log('========================================');
}

// Export functions globally
window.checkModuleStatus = checkModuleStatus;
window.checkDOMElements = checkDOMElements;
window.testModuleInit = testModuleInit;
window.testTopicLoading = testTopicLoading;
window.testDiagramSystem = testDiagramSystem;
window.forceLoadFirstTopic = forceLoadFirstTopic;
window.runFullDiagnostic = runFullDiagnostic;

// Auto-run diagnostic when loaded
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(() => {
        runFullDiagnostic();
        
        // Try to force initialization if module is loaded but not working
        setTimeout(() => {
            const content = document.getElementById('topic-content');
            if (content && content.innerHTML.includes('Selecciona un tema')) {
                console.log('🎯 Contenido por defecto detectado, forzando carga...');
                forceLoadFirstTopic();
            }
        }, 2000);
        
    }, 1000);
});

console.log('🎯 Diagnóstico del módulo cargado - usa runFullDiagnostic() para ejecutar');
