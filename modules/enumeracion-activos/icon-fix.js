/* ========================================
   ICON FIX SYSTEM - ENUMERACIÓN DE ACTIVOS
   ======================================== */

// Sistema de corrección de iconos específico para el módulo de enumeración
window.IconFixSystem = {
    isInitialized: false,
    fixAttempts: 0,
    maxAttempts: 3,
    
    init() {
        if (this.isInitialized) return Promise.resolve();
        
        console.log('🔧 Icon Fix System: Inicializando para módulo de enumeración...');
        
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
                    try {
                        const bbox = svg.getBBox?.();
                        if (!bbox || (bbox.width === 0 && bbox.height === 0)) {
                            this.reloadSvgUse(use, svg);
                            fixedCount++;
                        }
                    } catch (error) {
                        // getBBox puede fallar, intentar corregir de todos modos
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
    
    reloadSvgUse(useElement, svgContainer) {
        const href = useElement.getAttribute('href') || useElement.getAttribute('xlink:href');
        if (!href) return;
        
        // Remover y recrear el elemento use
        const parent = useElement.parentNode;
        const newUse = document.createElementNS('http://www.w3.org/2000/svg', 'use');
        
        // Copiar atributos
        Array.from(useElement.attributes).forEach(attr => {
            newUse.setAttribute(attr.name, attr.value);
        });
        
        // Reemplazar elemento
        parent.removeChild(useElement);
        parent.appendChild(newUse);
        
        // Forzar re-renderizado
        svgContainer.style.display = 'none';
        svgContainer.offsetHeight; // trigger reflow
        svgContainer.style.display = '';
    },
    
    checkAndRetry() {
        // Verificar si aún hay iconos problemáticos
        const problematicIcons = document.querySelectorAll('svg use, [class*="fa-"]:not(.fa-fixed)');
        
        if (problematicIcons.length > 0) {
            console.log(`🔄 Icon Fix: ${problematicIcons.length} iconos pendientes, reintentando...`);
            this.fixAllIcons();
        }
    },
    
    setupMutationObserver() {
        const observer = new MutationObserver((mutations) => {
            let shouldFix = false;
            
            mutations.forEach((mutation) => {
                mutation.addedNodes.forEach((node) => {
                    if (node.nodeType === Node.ELEMENT_NODE) {
                        const hasIcons = node.querySelectorAll('svg, [class*="fa-"]').length > 0;
                        const isIcon = node.matches && node.matches('svg, [class*="fa-"]');
                        
                        if (hasIcons || isIcon) {
                            shouldFix = true;
                        }
                    }
                });
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
    
    // Método para aplicar estilos de tema específicos
    applyThemeStyles() {
        const style = document.createElement('style');
        style.textContent = `
            .enumeration-icon { color: #e74c3c; }
            .database-icon { color: #3498db; }
            .user-icon { color: #2ecc71; }
            .tool-icon { color: #f39c12; }
            
            .icon-loading {
                animation: iconPulse 1.5s infinite ease-in-out;
            }
            
            @keyframes iconPulse {
                0%, 100% { opacity: 0.5; }
                50% { opacity: 0.8; }
            }
        `;
        document.head.appendChild(style);
    }
};

// Auto-inicializar cuando el DOM esté listo
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        setTimeout(() => window.IconFixSystem.init(), 100);
    });
} else {
    setTimeout(() => window.IconFixSystem.init(), 100);
}
