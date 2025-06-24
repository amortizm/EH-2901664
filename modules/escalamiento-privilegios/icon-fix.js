/* ========================================
   ICON FIX SYSTEM - ESCALAMIENTO DE PRIVILEGIOS
   ======================================== */

// Sistema de corrección de iconos específico para el módulo
window.IconFixSystem = {
    isInitialized: false,
    fixAttempts: 0,
    maxAttempts: 3,
    
    init() {
        if (this.isInitialized) return Promise.resolve();
        
        console.log('🔧 Icon Fix System: Inicializando para módulo de escalamiento...');
        
        return new Promise((resolve) => {
            this.fixAllIcons();
            this.isInitialized = true;
            
            // Configurar observador para nuevos iconos
            this.setupMutationObserver();
            
            console.log('✅ Icon Fix System: Inicializado');
            resolve();
        });
    },
    
    fixAllIcons() {
        this.fixAttempts++;
        
        if (this.fixAttempts > this.maxAttempts) {
            console.log('⚠️ Icon Fix System: Máximo de intentos alcanzado');
            return;
        }
        
        console.log(`🔧 Icon Fix System: Intento ${this.fixAttempts}/${this.maxAttempts}`);
        
        // Corregir iconos FontAwesome que no cargan
        this.fixFontAwesomeIcons();
        
        // Corregir iconos SVG
        this.fixSvgIcons();
        
        // Programar siguiente intento si es necesario
        if (this.fixAttempts < this.maxAttempts) {
            setTimeout(() => this.checkAndRetry(), 2000);
        }
    },
    
    fixFontAwesomeIcons() {
        const brokenIcons = document.querySelectorAll('i[class*="fa"]:empty');
        let fixedCount = 0;
        
        brokenIcons.forEach(icon => {
            // Verificar si el icono es visible
            const computedStyle = window.getComputedStyle(icon);
            const hasContent = computedStyle.getPropertyValue('content') !== 'none';
            
            if (!hasContent) {
                // Aplicar fix específico
                icon.style.fontFamily = 'Font Awesome 6 Free, Font Awesome 6 Brands';
                icon.style.fontWeight = '900';
                fixedCount++;
            }
        });
        
        if (fixedCount > 0) {
            console.log(`✅ FontAwesome Fix: ${fixedCount} iconos corregidos`);
        }
    },
    
    fixSvgIcons() {
        const svgElements = document.querySelectorAll('svg use');
        let fixedCount = 0;
        
        svgElements.forEach(useElement => {
            const href = useElement.getAttribute('href') || useElement.getAttribute('xlink:href');
            if (href && href.includes('#')) {
                const svgParent = useElement.closest('svg');
                if (svgParent) {
                    // Aplicar viewBox si no existe
                    if (!svgParent.getAttribute('viewBox')) {
                        svgParent.setAttribute('viewBox', '0 0 100 100');
                    }
                    
                    // Asegurar que tenga dimensiones
                    if (!svgParent.getAttribute('width')) {
                        svgParent.setAttribute('width', '24');
                    }
                    if (!svgParent.getAttribute('height')) {
                        svgParent.setAttribute('height', '24');
                    }
                    
                    fixedCount++;
                }
            }
        });
        
        if (fixedCount > 0) {
            console.log(`✅ SVG Fix: ${fixedCount} iconos SVG corregidos`);
        }
    },
    
    checkAndRetry() {
        // Verificar si aún hay iconos rotos
        const brokenFAIcons = document.querySelectorAll('i[class*="fa"]:empty').length;
        const brokenSVGIcons = document.querySelectorAll('svg use[href*="#"]:not([viewBox])').length;
        
        if (brokenFAIcons > 0 || brokenSVGIcons > 0) {
            console.log(`🔄 Icon Fix: Reintentando corrección (FA: ${brokenFAIcons}, SVG: ${brokenSVGIcons})`);
            this.fixAllIcons();
        }
    },
    
    setupMutationObserver() {
        const observer = new MutationObserver((mutations) => {
            let shouldFix = false;
            
            mutations.forEach((mutation) => {
                if (mutation.type === 'childList') {
                    mutation.addedNodes.forEach((node) => {
                        if (node.nodeType === 1) { // Element node
                            const hasIcons = node.querySelectorAll && (
                                node.querySelectorAll('i[class*="fa"]').length > 0 ||
                                node.querySelectorAll('svg use').length > 0
                            );
                            
                            if (hasIcons) {
                                shouldFix = true;
                            }
                        }
                    });
                }
            });
            
            if (shouldFix) {
                setTimeout(() => {
                    this.fixFontAwesomeIcons();
                    this.fixSvgIcons();
                }, 100);
            }
        });
        
        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
        
        console.log('🔍 Icon Fix: Observador de mutaciones configurado');    },
    
    // Método público para forzar corrección
    fixAll() {
        this.fixFontAwesomeIcons();
        this.fixSvgIcons();
    }
};

// Auto-inicializar cuando el DOM esté listo
if (document.readyState === 'loading') {    document.addEventListener('DOMContentLoaded', () => {
        setTimeout(() => window.IconFixSystem.init(), 500);
    });
} else {
    setTimeout(() => window.IconFixSystem.init(), 500);
}
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        setTimeout(() => window.IconFixSystem.init(), 500);
    });
} else {
    setTimeout(() => window.IconFixSystem.init(), 500);
}
