/* ========================================
   SIMPLE ICON LOADER - ESCALAMIENTO DE PRIVILEGIOS
   ======================================== */

// Cargador simple de iconos como respaldo
window.SimpleIconLoader = {
    iconMappings: {
        'icon-privilege': 'fas fa-user-shield',
        'icon-escalation': 'fas fa-arrow-up',
        'icon-horizontal': 'fas fa-arrows-alt-h',
        'icon-vertical': 'fas fa-arrow-up',
        'icon-tools': 'fas fa-toolbox',
        'icon-windows': 'fab fa-windows',
        'icon-linux': 'fab fa-linux',
        'icon-injection': 'fas fa-syringe',
        'icon-password': 'fas fa-key',
        'icon-exploit': 'fas fa-bomb',
        'icon-vulnerability': 'fas fa-bug',
        'icon-admin': 'fas fa-crown',
        'icon-user': 'fas fa-user',
        'icon-system': 'fas fa-server',
        'icon-network': 'fas fa-network-wired',
        'icon-lateral': 'fas fa-route',
        'icon-sysinternals': 'fas fa-wrench',
        'icon-john': 'fas fa-hammer',
        'icon-cain': 'fas fa-key',
        'icon-sticky': 'fas fa-sticky-note',
        'icon-process': 'fas fa-cogs',
        'icon-security': 'fas fa-shield-alt',
        'icon-check': 'fas fa-check-circle',
        'icon-quiz': 'fas fa-question-circle',
        'icon-case-study': 'fas fa-briefcase'
    },
    
    init() {
        console.log('🔧 Simple Icon Loader: Inicializando respaldos...');
        this.replaceFailedIcons();
        this.setupFallbackSystem();
    },
    
    replaceFailedIcons() {
        // Buscar elementos SVG que no se cargaron correctamente
        const failedSvgs = document.querySelectorAll('svg use');
        
        failedSvgs.forEach(use => {
            const href = use.getAttribute('href') || use.getAttribute('xlink:href');
            if (href && href.includes('#')) {
                const iconId = href.split('#')[1];
                const fallbackClass = this.iconMappings[iconId];
                
                if (fallbackClass) {
                    const svg = use.closest('svg');
                    if (svg && this.isSvgEmpty(svg)) {
                        this.replaceSvgWithFontAwesome(svg, fallbackClass);
                    }
                }
            }
        });
    },
    
    isSvgEmpty(svg) {
        try {
            const bbox = svg.getBBox();
            return bbox.width === 0 && bbox.height === 0;
        } catch (e) {
            return true; // Si no se puede obtener bbox, asumir que está vacío
        }
    },
    
    replaceSvgWithFontAwesome(svg, faClass) {
        const i = document.createElement('i');
        i.className = faClass;
        
        // Copiar atributos relevantes
        if (svg.style.width) i.style.width = svg.style.width;
        if (svg.style.height) i.style.height = svg.style.height;
        if (svg.style.color) i.style.color = svg.style.color;
        
        // Copiar clases CSS del contenedor
        const classes = Array.from(svg.classList);
        classes.forEach(cls => {
            if (!cls.startsWith('svg-') && cls !== 'icon-loading') {
                i.classList.add(cls);
            }
        });
        
        svg.parentNode.replaceChild(i, svg);
        console.log(`🔄 Icon replaced: ${faClass}`);
    },
    
    setupFallbackSystem() {
        // Interceptar errores de carga de iconos
        document.addEventListener('error', (e) => {
            if (e.target.tagName === 'svg' || e.target.querySelector('use')) {
                console.log('🔄 SVG error detected, applying fallback');
                setTimeout(() => this.replaceFailedIcons(), 100);
            }
        }, true);
    },
    
    // Método para aplicar iconos específicos de escalamiento
    applyPrivilegeEscalationIcons() {
        const privilegeElements = document.querySelectorAll('.privilege-icon, .escalation-icon, .tool-icon');
        
        privilegeElements.forEach(element => {
            if (!element.innerHTML.trim()) {
                const classes = Array.from(element.classList);
                const iconType = classes.find(cls => cls.endsWith('-icon'));
                
                if (iconType) {
                    const baseType = iconType.replace('-icon', '');
                    const fallbackClass = this.iconMappings[`icon-${baseType}`];
                    
                    if (fallbackClass) {
                        element.innerHTML = `<i class="${fallbackClass}"></i>`;
                    }
                }
            }
        });
    }
};

// Auto-inicializar después de que otros sistemas se carguen
setTimeout(() => {
    window.SimpleIconLoader.init();
}, 1000);
