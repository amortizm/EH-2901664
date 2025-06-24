// Diagnóstico y reparación rápida para diagramas de Footprinting
console.log('🔧 === DIAGNÓSTICO RÁPIDO PARA TOPICS 3,4,5,6 ===');

// Función para forzar recarga completa del sistema
async function forceFullReload() {
    console.log('🔄 Limpiando caché y recargando sistema...');
    
    if (typeof UNIVERSAL_DIAGRAM_SYSTEM !== 'undefined') {
        // Limpiar completamente el sistema
        UNIVERSAL_DIAGRAM_SYSTEM.svgCache = null;
        UNIVERSAL_DIAGRAM_SYSTEM.fixAttempts = 0;
        UNIVERSAL_DIAGRAM_SYSTEM.isProcessing = false;
        UNIVERSAL_DIAGRAM_SYSTEM.isInitialized = false;
        
        console.log('🧹 Sistema limpiado, reinicializando...');
        
        // Reinicializar
        await UNIVERSAL_DIAGRAM_SYSTEM.init();
        
        console.log('✅ Sistema reinicializado');
        
        // Verificar diagramas específicos de topics 3-6
        const targetDiagrams = [
            'tools-comparison',      // Topic 3
            'google-dorks-map',      // Topic 4
            'techniques-matrix',     // Topic 5
            'osint-framework'        // Topic 6
        ];
        
        console.log('\n📊 Verificando diagramas específicos...');
        
        targetDiagrams.forEach((diagramId, index) => {
            const useElements = document.querySelectorAll(`use[href*="#${diagramId}"]`);
            const fixedElements = document.querySelectorAll(`svg[data-diagram-id="${diagramId}"]`);
            
            console.log(`Topic ${index + 3}: ${diagramId}`);
            console.log(`  - Elementos <use>: ${useElements.length}`);
            console.log(`  - Elementos corregidos: ${fixedElements.length}`);
            
            if (useElements.length > 0 && fixedElements.length === 0) {
                console.log(`  ⚠️ Necesita corrección`);
            } else if (fixedElements.length > 0) {
                console.log(`  ✅ Corregido`);
            } else {
                console.log(`  ❌ No encontrado en DOM`);
            }
        });
        
        return true;
    } else {
        console.error('❌ UNIVERSAL_DIAGRAM_SYSTEM no disponible');
        return false;
    }
}

// Función para verificar contenido de SVG actualizado
async function verifyUpdatedSVG() {
    console.log('\n🔍 Verificando contenido SVG actualizado...');
    
    try {
        const response = await fetch('../../assets/images/diagrams.svg', { cache: 'no-cache' });
        if (response.ok) {
            const svgContent = await response.text();
            
            // Verificar que los diagramas actualizados están presentes
            const checks = [
                { id: 'tools-comparison', check: 'Comparación de Herramientas' },
                { id: 'google-dorks-map', check: 'Google Dorks Map' },
                { id: 'techniques-matrix', check: 'Matriz de Técnicas' },
                { id: 'osint-framework', check: 'Framework OSINT' }
            ];
            
            checks.forEach(({ id, check }) => {
                const hasSymbol = svgContent.includes(`id="${id}"`);
                const hasContent = svgContent.includes(check);
                
                console.log(`${id}:`);
                console.log(`  - Símbolo presente: ${hasSymbol ? '✅' : '❌'}`);
                console.log(`  - Contenido actualizado: ${hasContent ? '✅' : '❌'}`);
            });
            
            return true;
        } else {
            console.error('❌ No se pudo cargar el SVG');
            return false;
        }
    } catch (error) {
        console.error('❌ Error verificando SVG:', error.message);
        return false;
    }
}

// Función para aplicar correcciones específicas a topics 3-6
async function fixTopics3to6() {
    console.log('\n🎯 Aplicando correcciones específicas a Topics 3-6...');
    
    if (typeof UNIVERSAL_DIAGRAM_SYSTEM !== 'undefined') {
        // Cargar SVG fresco
        const svgContent = await UNIVERSAL_DIAGRAM_SYSTEM.loadSVGContent();
        
        if (svgContent) {
            console.log('✅ SVG cargado exitosamente');
            
            // Procesar solo los diagramas de topics 3-6
            const targetDiagrams = [
                { id: 'tools-comparison', viewBox: '0 0 800 450', topic: 3 },
                { id: 'google-dorks-map', viewBox: '0 0 750 500', topic: 4 },
                { id: 'techniques-matrix', viewBox: '0 0 800 600', topic: 5 },
                { id: 'osint-framework', viewBox: '0 0 900 650', topic: 6 }
            ];
            
            let fixedCount = 0;
            
            targetDiagrams.forEach(diagram => {
                const useElements = document.querySelectorAll(`use[href*="#${diagram.id}"]`);
                
                useElements.forEach(useElement => {
                    const svg = useElement.closest('svg');
                    
                    if (svg && !svg.hasAttribute('data-universal-fixed')) {
                        const symbol = svgContent.querySelector(`#${diagram.id}`);
                        
                        if (symbol && symbol.innerHTML.trim()) {
                            svg.innerHTML = '';
                            svg.setAttribute('viewBox', diagram.viewBox);
                            svg.setAttribute('data-universal-fixed', 'true');
                            svg.setAttribute('data-diagram-id', diagram.id);
                            svg.setAttribute('data-topic', diagram.topic);
                            
                            // Copiar defs si existen
                            const defs = svgContent.querySelector('defs');
                            if (defs) {
                                svg.appendChild(defs.cloneNode(true));
                            }
                            
                            // Copiar contenido del símbolo
                            svg.innerHTML += symbol.innerHTML;
                            
                            fixedCount++;
                            console.log(`✅ ${diagram.id} (Topic ${diagram.topic}) corregido`);
                        } else {
                            console.log(`⚠️ ${diagram.id} - símbolo vacío o no encontrado`);
                        }
                    }
                });
            });
            
            console.log(`\n🎉 Correcciones completadas: ${fixedCount} diagramas procesados`);
            return fixedCount > 0;
        } else {
            console.error('❌ No se pudo cargar el contenido SVG');
            return false;
        }
    } else {
        console.error('❌ Sistema no disponible');
        return false;
    }
}

// Ejecutar diagnóstico completo
async function runFullDiagnostic() {
    console.log('🚀 === INICIANDO DIAGNÓSTICO COMPLETO ===\n');
    
    // 1. Verificar SVG actualizado
    await verifyUpdatedSVG();
    
    // 2. Forzar recarga completa
    await forceFullReload();
    
    // 3. Aplicar correcciones específicas
    await fixTopics3to6();
    
    // 4. Verificación final
    console.log('\n📊 === VERIFICACIÓN FINAL ===');
    const finalCheck = document.querySelectorAll('svg[data-universal-fixed="true"]');
    console.log(`Diagramas corregidos totales: ${finalCheck.length}`);
    
    const topics3to6Fixed = document.querySelectorAll('svg[data-topic="3"], svg[data-topic="4"], svg[data-topic="5"], svg[data-topic="6"]');
    console.log(`Diagramas Topics 3-6 corregidos: ${topics3to6Fixed.length}/4`);
    
    if (topics3to6Fixed.length === 4) {
        console.log('🎉 ¡ÉXITO! Todos los diagramas de Topics 3-6 están corregidos');
    } else {
        console.log('⚠️ Algunos diagramas aún necesitan corrección');
        
        // Activar respaldos para los que faltan
        if (typeof UNIVERSAL_DIAGRAM_SYSTEM !== 'undefined' && 
            typeof UNIVERSAL_DIAGRAM_SYSTEM.applyFallbacks === 'function') {
            console.log('🛠️ Activando respaldos para diagramas faltantes...');
            UNIVERSAL_DIAGRAM_SYSTEM.applyFallbacks();
        }
    }
    
    console.log('\n✅ Diagnóstico completado');
}

// Ejecutar automáticamente
runFullDiagnostic();
