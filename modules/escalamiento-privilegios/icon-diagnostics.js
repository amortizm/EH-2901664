/* ========================================
   ICON DIAGNOSTICS - ESCALAMIENTO DE PRIVILEGIOS
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
        console.group('🔍 Diagnóstico de Iconos - Escalamiento de Privilegios');
        
        this.checkFontAwesome();
        this.checkSvgElements();
        this.checkIconLoadingStates();
        this.checkPrivilegeSpecificIcons();
        
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
    
    checkPrivilegeSpecificIcons() {
        const privilegeIcons = [
            '.privilege-icon',
            '.escalation-icon', 
            '.tool-icon',
            '.privilege-card i',
            '.technique-card i',
            '.tool-item i'
        ];
        
        privilegeIcons.forEach(selector => {
            const elements = document.querySelectorAll(selector);
            console.log(`📊 ${selector}: ${elements.length} elementos encontrados`);
        });
        
        // Verificar iconos específicos del módulo
        const moduleSpecificIcons = [
            'fa-user-shield',
            'fa-arrow-up',
            'fa-arrows-alt-h',
            'fa-toolbox',
            'fa-windows',
            'fa-linux',
            'fa-syringe',
            'fa-key'
        ];
        
        moduleSpecificIcons.forEach(iconClass => {
            const count = document.querySelectorAll(`.${iconClass}`).length;
            console.log(`📊 .${iconClass}: ${count} elementos`);
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
            privilege: this.getPrivilegeIconsReport()
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
    
    getPrivilegeIconsReport() {
        const privilegeSelectors = [
            '.privilege-icon',
            '.escalation-icon',
            '.tool-icon',
            '.privilege-card',
            '.technique-card',
            '.tool-item'
        ];
        
        const report = {};
        privilegeSelectors.forEach(selector => {
            const elements = document.querySelectorAll(selector);
            report[selector] = elements.length;
        });
        
        return report;
    },
    
    // Método para verificar problemas comunes
    checkCommonIssues() {
        const issues = [];
        
        // Issue 1: SVGs sin viewBox
        const svgsWithoutViewBox = document.querySelectorAll('svg[data-diagram]:not([viewBox])');
        if (svgsWithoutViewBox.length > 0) {
            issues.push(`${svgsWithoutViewBox.length} diagramas SVG sin viewBox`);
        }
        
        // Issue 2: Iconos con clases incorrectas
        const incorrectIcons = document.querySelectorAll('.fa-');
        if (incorrectIcons.length > 0) {
            issues.push(`${incorrectIcons.length} elementos con clases fa- incompletas`);
        }
        
        // Issue 3: Elementos vacíos que deberían tener iconos
        const emptyIconElements = document.querySelectorAll('.privilege-icon:empty, .escalation-icon:empty, .tool-icon:empty');
        if (emptyIconElements.length > 0) {
            issues.push(`${emptyIconElements.length} elementos de icono vacíos`);
        }
        
        if (issues.length > 0) {
            console.warn('⚠️ Problemas detectados:', issues);
        } else {
            console.log('✅ No se detectaron problemas comunes');
        }
        
        return issues;
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
