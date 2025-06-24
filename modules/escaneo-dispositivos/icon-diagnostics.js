/* ========================================
   ICON DIAGNOSTICS - ESCANEO DE DISPOSITIVOS
   ======================================== */

// Sistema de diagnóstico de iconos
window.IconDiagnostics = {
    isEnabled: false, // Cambiar a true para activar diagnósticos
    
    init() {
        if (!this.isEnabled) return;
        
        console.log('🔍 Icon Diagnostics: Activado');
        this.runDiagnostics();
        this.setupPeriodicCheck();
    },
    
    runDiagnostics() {
        console.group('🔍 Diagnóstico de Iconos');
        
        this.checkFontAwesome();
        this.checkSvgElements();
        this.checkIconLoadingStates();
        
        console.groupEnd();
    },
    
    checkFontAwesome() {
        const faElements = document.querySelectorAll('[class*="fa-"]');
        const loadedCount = Array.from(faElements).filter(el => {
            const style = window.getComputedStyle(el);
            return style.getPropertyValue('content') !== 'none';
        }).length;
        
        console.log(`📊 FontAwesome: ${loadedCount}/${faElements.length} iconos cargados`);
        
        if (loadedCount < faElements.length) {
            console.warn('⚠️ Algunos iconos FontAwesome no se cargaron correctamente');
        }
    },
    
    checkSvgElements() {
        const svgElements = document.querySelectorAll('svg');
        let emptyCount = 0;
        let totalCount = svgElements.length;
        
        svgElements.forEach(svg => {
            try {
                const bbox = svg.getBBox();
                if (bbox.width === 0 && bbox.height === 0) {
                    emptyCount++;
                }
            } catch (e) {
                emptyCount++;
            }
        });
        
        console.log(`📊 SVG: ${totalCount - emptyCount}/${totalCount} elementos renderizados`);
        
        if (emptyCount > 0) {
            console.warn(`⚠️ ${emptyCount} elementos SVG vacíos detectados`);
        }
    },
    
    checkIconLoadingStates() {
        const loadingIcons = document.querySelectorAll('.icon-loading');
        const errorIcons = document.querySelectorAll('.icon-error');
        
        if (loadingIcons.length > 0) {
            console.log(`⏳ ${loadingIcons.length} iconos en estado de carga`);
        }
        
        if (errorIcons.length > 0) {
            console.warn(`❌ ${errorIcons.length} iconos en estado de error`);
        }
    },
    
    setupPeriodicCheck() {
        if (!this.isEnabled) return;
        
        setInterval(() => {
            this.runDiagnostics();
        }, 10000); // Cada 10 segundos
    },
    
    // Método para activar diagnósticos desde consola
    enable() {
        this.isEnabled = true;
        this.init();
        console.log('✅ Diagnósticos de iconos activados');
    },
    
    // Método para generar reporte completo
    generateReport() {
        const report = {
            timestamp: new Date().toISOString(),
            fontAwesome: this.getFontAwesomeReport(),
            svg: this.getSvgReport(),
            overall: this.getOverallReport()
        };
        
        console.table(report);
        return report;
    },
    
    getFontAwesomeReport() {
        const elements = document.querySelectorAll('[class*="fa-"]');
        const loaded = Array.from(elements).filter(el => {
            const style = window.getComputedStyle(el);
            return style.getPropertyValue('content') !== 'none';
        });
        
        return {
            total: elements.length,
            loaded: loaded.length,
            failed: elements.length - loaded.length,
            percentage: Math.round((loaded.length / elements.length) * 100) || 0
        };
    },
    
    getSvgReport() {
        const elements = document.querySelectorAll('svg');
        let rendered = 0;
        
        elements.forEach(svg => {
            try {
                const bbox = svg.getBBox();
                if (bbox.width > 0 || bbox.height > 0) {
                    rendered++;
                }
            } catch (e) {
                // Elemento no renderizado
            }
        });
        
        return {
            total: elements.length,
            rendered: rendered,
            empty: elements.length - rendered,
            percentage: Math.round((rendered / elements.length) * 100) || 0
        };
    },
    
    getOverallReport() {
        const fa = this.getFontAwesomeReport();
        const svg = this.getSvgReport();
        const total = fa.total + svg.total;
        const success = fa.loaded + svg.rendered;
        
        return {
            totalIcons: total,
            successfullyLoaded: success,
            failed: total - success,
            overallPercentage: Math.round((success / total) * 100) || 0
        };
    }
};

// Auto-inicializar solo si está habilitado
if (window.IconDiagnostics.isEnabled) {
    document.addEventListener('DOMContentLoaded', () => {
        window.IconDiagnostics.init();
    });
}

// Hacer disponible en consola para debugging
window.iconDiagnostics = window.IconDiagnostics;
