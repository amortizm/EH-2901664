/* ========================================
   ICON DIAGNOSTICS - ENUMERACIÓN DE ACTIVOS
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
        console.group('🔍 Diagnóstico de Iconos - Enumeración de Activos');
        
        this.checkFontAwesome();
        this.checkSvgElements();
        this.checkIconLoadingStates();
        this.checkEnumerationSpecificIcons();
        
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
                    console.warn('⚠️ SVG vacío encontrado:', svg);
                }
            } catch (e) {
                emptyCount++;
                console.warn('⚠️ SVG con error:', svg, e);
            }
        });
        
        console.log(`📊 SVG: ${totalCount - emptyCount}/${totalCount} elementos válidos`);
    },
    
    checkIconLoadingStates() {
        const loadingIcons = document.querySelectorAll('.icon-loading');
        if (loadingIcons.length > 0) {
            console.warn(`⚠️ ${loadingIcons.length} iconos aún en estado de carga`);
            loadingIcons.forEach(icon => console.log('Loading:', icon));
        }
    },
    
    checkEnumerationSpecificIcons() {
        const enumIcons = [
            '.enum-icon',
            '.asset-icon', 
            '.tool-icon',
            '.network-icon',
            '.user-icon'
        ];
        
        enumIcons.forEach(selector => {
            const elements = document.querySelectorAll(selector);
            console.log(`📊 ${selector}: ${elements.length} elementos encontrados`);
        });
    },
    
    setupPeriodicCheck() {
        setInterval(() => {
            this.runDiagnostics();
        }, 10000); // Check every 10 seconds
    },
    
    // Método para generar reporte detallado
    generateReport() {
        const report = {
            timestamp: new Date().toISOString(),
            fontAwesome: this.getFontAwesomeReport(),
            svg: this.getSvgReport(),
            enumeration: this.getEnumerationIconsReport()
        };
        
        console.log('📋 Icon Diagnostics Report:', report);
        return report;
    },
    
    getFontAwesomeReport() {
        const faElements = document.querySelectorAll('[class*="fa-"]');
        const loaded = Array.from(faElements).filter(el => {
            const style = window.getComputedStyle(el);
            return style.getPropertyValue('content') !== 'none';
        });
        
        return {
            total: faElements.length,
            loaded: loaded.length,
            failed: faElements.length - loaded.length
        };
    },
    
    getSvgReport() {
        const svgElements = document.querySelectorAll('svg');
        let valid = 0;
        let empty = 0;
        let errors = 0;
        
        svgElements.forEach(svg => {
            try {
                const bbox = svg.getBBox();
                if (bbox.width === 0 && bbox.height === 0) {
                    empty++;
                } else {
                    valid++;
                }
            } catch (e) {
                errors++;
            }
        });
        
        return {
            total: svgElements.length,
            valid: valid,
            empty: empty,
            errors: errors
        };
    },
    
    getEnumerationIconsReport() {
        const enumSelectors = [
            '.enum-icon',
            '.asset-icon',
            '.tool-icon',
            '.network-icon',
            '.user-icon'
        ];
        
        const report = {};
        enumSelectors.forEach(selector => {
            const elements = document.querySelectorAll(selector);
            report[selector] = elements.length;
        });
        
        return report;
    }
};

// Auto-inicializar si está habilitado
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        window.IconDiagnostics.init();
    });
} else {
    window.IconDiagnostics.init();
}
