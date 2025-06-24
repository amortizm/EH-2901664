/* ========================================
   ICON FIX SYSTEM - ESCANEO DE DISPOSITIVOS
   ======================================== */

// Sistema de corrección de iconos específico para el módulo
window.IconFixSystem = {
    isInitialized: false,
    fixAttempts: 0,
    maxAttempts: 3,
    
    init() {
        if (this.isInitialized) return Promise.resolve();
        
        console.log('🔧 Icon Fix System: Inicializando para módulo de escaneo...');
        
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
        const faIcons = document.querySelectorAll('[class*="fa-"]:not(.fa-fixed)');
        let fixedCount = 0;
        
        faIcons.forEach(icon => {
            // Verificar si el icono se está renderizando correctamente
            const computedStyle = window.getComputedStyle(icon);
            const content = computedStyle.getPropertyValue('content');
            
            if (!content || content === 'none' || content === '""') {
                // Intentar recargar el icono
                this.reloadFontAwesomeIcon(icon);
                fixedCount++;
            }
            
            icon.classList.add('fa-fixed');
        });
        
        if (fixedCount > 0) {
            console.log(`🔧 Icon Fix: ${fixedCount} iconos FontAwesome corregidos`);
        }
    },
    
    reloadFontAwesomeIcon(icon) {
        const classes = Array.from(icon.classList);
        const faClasses = classes.filter(cls => cls.startsWith('fa'));
        
        // Remover y re-añadir clases FA
        faClasses.forEach(cls => icon.classList.remove(cls));
        
        setTimeout(() => {
            faClasses.forEach(cls => icon.classList.add(cls));
            icon.style.fontFamily = '"Font Awesome 6 Free", "Font Awesome 6 Pro"';
            icon.style.fontWeight = '900';
        }, 10);
    },
    
    fixSvgIcons() {
        const svgElements = document.querySelectorAll('svg:not(.svg-fixed)');
        let fixedCount = 0;
        
        svgElements.forEach(svg => {
            const useElements = svg.querySelectorAll('use');
            
            useElements.forEach(use => {
                const href = use.getAttribute('href') || use.getAttribute('xlink:href');
                if (href && href.includes('#')) {
                    // Verificar si el símbolo se está renderizando
                    const bbox = svg.getBBox?.();
                    if (!bbox || (bbox.width === 0 && bbox.height === 0)) {
                        this.reloadSvgUse(use, svg);
                        fixedCount++;
                    }
                }
            });
            
            svg.classList.add('svg-fixed');
        });
        
        if (fixedCount > 0) {
            console.log(`🔧 Icon Fix: ${fixedCount} iconos SVG corregidos`);
        }
    },
    
    reloadSvgUse(useElement, svg) {
        const href = useElement.getAttribute('href') || useElement.getAttribute('xlink:href');
        
        // Forzar recarga del elemento use
        useElement.style.display = 'none';
        setTimeout(() => {
            useElement.style.display = '';
            useElement.setAttribute('href', href);
        }, 10);
    },
    
    checkAndRetry() {
        // Verificar si hay iconos que aún necesitan corrección
        const brokenFaIcons = document.querySelectorAll('[class*="fa-"]:not(.fa-fixed)');
        const brokenSvgIcons = document.querySelectorAll('svg:not(.svg-fixed)');
        
        if (brokenFaIcons.length > 0 || brokenSvgIcons.length > 0) {
            console.log(`🔧 Icon Fix: Encontrados ${brokenFaIcons.length + brokenSvgIcons.length} iconos pendientes`);
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
                            const hasIcons = node.querySelector && (
                                node.querySelector('[class*="fa-"]') ||
                                node.querySelector('svg use')
                            );
                            
                            if (hasIcons) {
                                shouldFix = true;
                            }
                        }
                    });
                }
            });
            
            if (shouldFix) {
                setTimeout(() => this.fixAllIcons(), 100);
            }
        });
        
        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    },
      // Método público para corregir iconos específicos
    fixSpecific(selector) {
        const elements = document.querySelectorAll(selector);
        elements.forEach(element => {
            if (element.classList.contains('fa')) {
                this.reloadFontAwesomeIcon(element);
            } else if (element.tagName === 'svg') {
                const useElements = element.querySelectorAll('use');
                useElements.forEach(use => this.reloadSvgUse(use, element));
            }
        });
    },

    // Alias para compatibilidad con otros módulos
    fixAll() {
        return this.fixAllIcons();
    }
};

// Auto-inicializar
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        window.IconFixSystem.init();
    });
} else {
    window.IconFixSystem.init();
}
