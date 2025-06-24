/* ========================================
   SVG INLINE INJECTOR - ENUMERACIÓN DE ACTIVOS
   ======================================== */

// Sistema de inyección de SVG inline para iconos
window.SvgInlineInjector = {
    cache: new Map(),
    isInitialized: false,
    
    async init() {
        if (this.isInitialized) return;
        
        console.log('🔧 SVG Inline Injector: Inicializando...');
        
        try {
            // Precargar iconos principales
            await this.preloadSvgFiles([
                '../../assets/images/icons.svg',
                '../../assets/images/diagrams.svg'
            ]);
            
            this.isInitialized = true;
            console.log('✅ SVG Inline Injector: Inicializado correctamente');
        } catch (error) {
            console.warn('⚠️ SVG Inline Injector: Error en inicialización:', error);
        }
    },
    
    async preloadSvgFiles(urls) {
        const promises = urls.map(url => this.loadSvgFile(url));
        await Promise.allSettled(promises);
    },
    
    async loadSvgFile(url) {
        if (this.cache.has(url)) {
            return this.cache.get(url);
        }
        
        try {
            const response = await fetch(url);
            if (!response.ok) throw new Error(`HTTP ${response.status}`);
            
            const svgText = await response.text();
            const parser = new DOMParser();
            const svgDoc = parser.parseFromString(svgText, 'image/svg+xml');
            
            this.cache.set(url, svgDoc);
            console.log(`✅ SVG cargado: ${url}`);
            return svgDoc;
        } catch (error) {
            console.warn(`⚠️ Error cargando SVG ${url}:`, error);
            return null;
        }
    },
    
    async injectSvgUse(useElement) {
        const href = useElement.getAttribute('href') || useElement.getAttribute('xlink:href');
        if (!href) return false;
        
        const [url, symbolId] = href.split('#');
        const fullUrl = url || '../../assets/images/icons.svg';
        
        try {
            const svgDoc = await this.loadSvgFile(fullUrl);
            if (!svgDoc) return false;
            
            const symbol = svgDoc.querySelector(`#${symbolId}`);
            if (!symbol) return false;
            
            const svg = useElement.closest('svg');
            if (!svg) return false;
            
            // Reemplazar contenido
            svg.innerHTML = symbol.innerHTML;
            svg.setAttribute('data-injected', 'true');
            
            return true;
        } catch (error) {
            console.warn('⚠️ Error inyectando SVG:', error);
            return false;
        }
    },
    
    async processAllUseElements() {
        const useElements = document.querySelectorAll('use[href], use[xlink\\:href]');
        const promises = Array.from(useElements).map(use => this.injectSvgUse(use));
        await Promise.allSettled(promises);
    }
};

// Auto-inicializar cuando el DOM esté listo
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        window.SvgInlineInjector.init();
    });
} else {
    window.SvgInlineInjector.init();
}
