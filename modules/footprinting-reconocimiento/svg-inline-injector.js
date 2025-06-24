/**
 * SVG Inline Injector for Footprinting y Reconocimiento Module
 * Handles loading and injection of SVG diagrams
 */

class SVGInlineInjector {
    constructor() {
        this.svgCache = new Map();
        this.initialized = false;
        this.debug = true; // Enable debug logging
    }

    /**
     * Initialize the SVG injector
     */
    init() {
        if (this.initialized) return;
        
        this.log('🔧 Initializing SVG Inline Injector...');
        this.preloadSVGs();
        this.setupDOMObserver();
        this.initialized = true;
        this.log('✅ SVG Inline Injector initialized');
    }

    /**
     * Preload commonly used SVGs
     */
    async preloadSVGs() {
        const commonSVGs = [
            '../../assets/images/icons.svg',
            '../../assets/images/diagrams.svg'
        ];

        for (const svgPath of commonSVGs) {
            try {
                await this.loadSVG(svgPath);
                this.log(`📦 Preloaded: ${svgPath}`);
            } catch (error) {
                this.log(`❌ Failed to preload: ${svgPath}`, error);
            }
        }
    }    /**
     * Load SVG content from URL
     */
    async loadSVG(url) {
        if (this.svgCache.has(url)) {
            return this.svgCache.get(url);
        }

        try {
            // Check if we're running from file:// protocol
            if (window.location.protocol === 'file:') {
                this.log(`⚠️ File protocol detected, using fallback SVGs for: ${url}`);
                const fallbackSVG = this.createFallbackSVG(url);
                this.svgCache.set(url, fallbackSVG);
                return fallbackSVG;
            }

            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`HTTP ${response.status}: ${response.statusText}`);
            }

            const svgText = await response.text();
            this.svgCache.set(url, svgText);
            return svgText;
        } catch (error) {
            this.log(`❌ Error loading SVG from ${url}:`, error);
            // Create fallback SVG
            const fallbackSVG = this.createFallbackSVG(url);
            this.svgCache.set(url, fallbackSVG);
            return fallbackSVG;
        }
    }

    /**
     * Inject SVG content into target element
     */
    async injectSVG(targetElement, svgId, svgPath = '../../assets/images/diagrams.svg') {
        try {
            const svgContent = await this.loadSVG(svgPath);
            const parser = new DOMParser();
            const svgDoc = parser.parseFromString(svgContent, 'image/svg+xml');
            const targetSVG = svgDoc.getElementById(svgId);

            if (!targetSVG) {
                throw new Error(`SVG with ID '${svgId}' not found in ${svgPath}`);
            }

            // Clear existing content
            targetElement.innerHTML = '';
            
            // Clone and inject the SVG
            const clonedSVG = targetSVG.cloneNode(true);
            targetElement.appendChild(clonedSVG);

            // Add responsive attributes
            clonedSVG.setAttribute('width', '100%');
            clonedSVG.setAttribute('height', 'auto');
            clonedSVG.style.maxWidth = '100%';
            clonedSVG.style.height = 'auto';

            this.log(`✅ Injected SVG: ${svgId} into`, targetElement);
            return true;
        } catch (error) {
            this.log(`❌ Failed to inject SVG: ${svgId}`, error);
            this.showErrorFallback(targetElement, svgId);
            return false;
        }
    }

    /**
     * Show error fallback content
     */
    showErrorFallback(targetElement, svgId) {
        targetElement.innerHTML = `
            <div class="diagram-error text-center p-4 border rounded bg-light">
                <i class="fas fa-exclamation-triangle text-warning fa-2x mb-2"></i>
                <p class="mb-0 text-muted">Diagrama no disponible: ${svgId}</p>
            </div>
        `;
    }

    /**
     * Setup DOM observer to auto-inject SVGs
     */
    setupDOMObserver() {
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                mutation.addedNodes.forEach((node) => {
                    if (node.nodeType === Node.ELEMENT_NODE) {
                        this.processSVGElements(node);
                    }
                });
            });
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });

        // Process existing elements
        this.processSVGElements(document.body);
    }

    /**
     * Process SVG elements in a container
     */
    processSVGElements(container) {
        const svgContainers = container.querySelectorAll('[data-svg-id]');
        svgContainers.forEach(async (element) => {
            const svgId = element.getAttribute('data-svg-id');
            const svgPath = element.getAttribute('data-svg-path') || '../../assets/images/diagrams.svg';
            
            if (svgId && !element.hasAttribute('data-svg-loaded')) {
                element.setAttribute('data-svg-loaded', 'true');
                await this.injectSVG(element, svgId, svgPath);
            }
        });
    }

    /**
     * Get SVG element by ID
     */
    async getSVGElement(svgId, svgPath = '../../assets/images/diagrams.svg') {
        try {
            const svgContent = await this.loadSVG(svgPath);
            const parser = new DOMParser();
            const svgDoc = parser.parseFromString(svgContent, 'image/svg+xml');
            return svgDoc.getElementById(svgId);
        } catch (error) {
            this.log(`❌ Error getting SVG element: ${svgId}`, error);
            return null;
        }
    }    /**
     * Create fallback SVG when original cannot be loaded
     */
    createFallbackSVG(url) {
        const isIconsFile = url.includes('icons.svg');
        const isDiagramsFile = url.includes('diagrams.svg');
        
        if (isIconsFile) {
            return this.createFallbackIcons();
        } else if (isDiagramsFile) {
            return this.createFallbackDiagrams();
        }
        
        return '<svg><text x="50%" y="50%" text-anchor="middle">SVG not available</text></svg>';
    }

    /**
     * Create fallback icons SVG
     */
    createFallbackIcons() {
        return `
        <svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
            <defs>
                <!-- Basic Icons -->
                <symbol id="icon-search" viewBox="0 0 100 100">
                    <circle cx="35" cy="35" r="20" fill="none" stroke="currentColor" stroke-width="4"/>
                    <path d="m59 59 20 20" stroke="currentColor" stroke-width="4"/>
                </symbol>
                
                <symbol id="icon-security" viewBox="0 0 100 100">
                    <path d="M50 10 L20 25 L20 55 Q20 75 50 85 Q80 75 80 55 L80 25 Z" fill="currentColor"/>
                </symbol>
                
                <symbol id="icon-methodology" viewBox="0 0 100 100">
                    <rect x="20" y="30" width="60" height="8" fill="currentColor"/>
                    <rect x="20" y="46" width="60" height="8" fill="currentColor"/>
                    <rect x="20" y="62" width="60" height="8" fill="currentColor"/>
                    <circle cx="15" cy="34" r="3" fill="currentColor"/>
                    <circle cx="15" cy="50" r="3" fill="currentColor"/>
                    <circle cx="15" cy="66" r="3" fill="currentColor"/>
                </symbol>
                
                <symbol id="icon-footprint" viewBox="0 0 100 100">
                    <ellipse cx="35" cy="30" rx="8" ry="12" fill="currentColor"/>
                    <ellipse cx="50" cy="20" rx="6" ry="8" fill="currentColor"/>
                    <ellipse cx="65" cy="30" rx="8" ry="12" fill="currentColor"/>
                    <ellipse cx="50" cy="50" rx="15" ry="20" fill="currentColor"/>
                </symbol>
                
                <symbol id="icon-reconnaissance" viewBox="0 0 100 100">
                    <circle cx="30" cy="40" r="12" fill="none" stroke="currentColor" stroke-width="3"/>
                    <circle cx="70" cy="40" r="12" fill="none" stroke="currentColor" stroke-width="3"/>
                    <path d="M18 40 L82 40" stroke="currentColor" stroke-width="3"/>
                    <path d="M30 28 L30 15 L70 15 L70 28" stroke="currentColor" stroke-width="3" fill="none"/>
                </symbol>
                
                <symbol id="icon-target" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" stroke-width="3"/>
                    <circle cx="50" cy="50" r="25" fill="none" stroke="currentColor" stroke-width="2"/>
                    <circle cx="50" cy="50" r="15" fill="none" stroke="currentColor" stroke-width="2"/>
                    <circle cx="50" cy="50" r="5" fill="currentColor"/>
                </symbol>
                
                <symbol id="icon-tools" viewBox="0 0 100 100">
                    <path d="M20 30 L35 15 L40 20 L25 35 Z" fill="currentColor"/>
                    <path d="M60 60 L75 45 L80 50 L65 65 Z" fill="currentColor"/>
                    <circle cx="45" cy="45" r="8" fill="none" stroke="currentColor" stroke-width="3"/>
                </symbol>
                
                <symbol id="icon-google" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" stroke-width="4"/>
                    <text x="50" y="55" text-anchor="middle" font-size="20" fill="currentColor">G</text>
                </symbol>
                
                <symbol id="icon-osint" viewBox="0 0 100 100">
                    <circle cx="50" cy="35" r="15" fill="none" stroke="currentColor" stroke-width="3"/>
                    <path d="M50 50 L50 80 M35 65 L50 80 L65 65" stroke="currentColor" stroke-width="3" fill="none"/>
                </symbol>
                
                <symbol id="icon-check" viewBox="0 0 100 100">
                    <path d="M20 50 L40 70 L80 30" stroke="currentColor" stroke-width="6" fill="none"/>
                </symbol>
                
                <symbol id="icon-quiz" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" stroke-width="4"/>
                    <text x="50" y="60" text-anchor="middle" font-size="30" fill="currentColor">?</text>
                </symbol>
                
                <symbol id="icon-case-study" viewBox="0 0 100 100">
                    <rect x="25" y="20" width="50" height="60" fill="none" stroke="currentColor" stroke-width="3"/>
                    <path d="M35 35 L65 35 M35 45 L65 45 M35 55 L55 55" stroke="currentColor" stroke-width="2"/>
                </symbol>
            </defs>
        </svg>`;
    }

    /**
     * Create fallback diagrams SVG
     */
    createFallbackDiagrams() {
        return `
        <svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
            <defs>
                <!-- Footprinting Diagrams -->
                <symbol id="footprinting-process-flow" viewBox="0 0 900 620">
                    <rect x="50" y="50" width="800" height="520" fill="none" stroke="#ddd" stroke-width="2" rx="10"/>
                    <text x="450" y="100" text-anchor="middle" font-size="24" fill="#333">Proceso de Footprinting</text>
                    
                    <!-- Step boxes -->
                    <rect x="100" y="150" width="150" height="80" fill="#e3f2fd" stroke="#1976d2" stroke-width="2" rx="5"/>
                    <text x="175" y="175" text-anchor="middle" font-size="12" fill="#1976d2">1. Reconocimiento</text>
                    <text x="175" y="195" text-anchor="middle" font-size="12" fill="#1976d2">Pasivo</text>
                    
                    <rect x="300" y="150" width="150" height="80" fill="#f3e5f5" stroke="#7b1fa2" stroke-width="2" rx="5"/>
                    <text x="375" y="175" text-anchor="middle" font-size="12" fill="#7b1fa2">2. Análisis de</text>
                    <text x="375" y="195" text-anchor="middle" font-size="12" fill="#7b1fa2">Información</text>
                    
                    <rect x="500" y="150" width="150" height="80" fill="#e8f5e8" stroke="#388e3c" stroke-width="2" rx="5"/>
                    <text x="575" y="175" text-anchor="middle" font-size="12" fill="#388e3c">3. Reconocimiento</text>
                    <text x="575" y="195" text-anchor="middle" font-size="12" fill="#388e3c">Activo</text>
                    
                    <rect x="700" y="150" width="150" height="80" fill="#fff3e0" stroke="#f57c00" stroke-width="2" rx="5"/>
                    <text x="775" y="175" text-anchor="middle" font-size="12" fill="#f57c00">4. Documentación</text>
                    <text x="775" y="195" text-anchor="middle" font-size="12" fill="#f57c00">y Reporte</text>
                    
                    <!-- Arrows -->
                    <path d="M250 190 L300 190" stroke="#666" stroke-width="2" marker-end="url(#arrowhead)"/>
                    <path d="M450 190 L500 190" stroke="#666" stroke-width="2" marker-end="url(#arrowhead)"/>
                    <path d="M650 190 L700 190" stroke="#666" stroke-width="2" marker-end="url(#arrowhead)"/>
                    
                    <!-- Arrow marker -->
                    <defs>
                        <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                            <polygon points="0 0, 10 3.5, 0 7" fill="#666"/>
                        </marker>
                    </defs>                </symbol>
                
                <symbol id="tools-comparison" viewBox="0 0 800 450">
                    <rect x="25" y="25" width="750" height="400" fill="none" stroke="#ddd" stroke-width="2" rx="10"/>
                    <text x="400" y="60" text-anchor="middle" font-size="20" fill="#333">Herramientas de Footprinting</text>
                    
                    <!-- Tool boxes -->
                    <rect x="80" y="100" width="120" height="60" fill="#e3f2fd" stroke="#1976d2" stroke-width="2" rx="5"/>
                    <text x="140" y="135" text-anchor="middle" font-size="14" fill="#1976d2">WHOIS</text>
                    
                    <rect x="240" y="100" width="120" height="60" fill="#f3e5f5" stroke="#7b1fa2" stroke-width="2" rx="5"/>
                    <text x="300" y="135" text-anchor="middle" font-size="14" fill="#7b1fa2">Netcraft</text>
                    
                    <rect x="400" y="100" width="120" height="60" fill="#e8f5e8" stroke="#388e3c" stroke-width="2" rx="5"/>
                    <text x="460" y="135" text-anchor="middle" font-size="14" fill="#388e3c">theHarvester</text>
                    
                    <rect x="560" y="100" width="120" height="60" fill="#fff3e0" stroke="#f57c00" stroke-width="2" rx="5"/>
                    <text x="620" y="135" text-anchor="middle" font-size="14" fill="#f57c00">CTFR</text>
                </symbol>
                
                <symbol id="google-dorks-map" viewBox="0 0 750 500">
                    <rect x="25" y="25" width="700" height="450" fill="none" stroke="#ddd" stroke-width="2" rx="10"/>
                    <text x="375" y="60" text-anchor="middle" font-size="20" fill="#333">Google Dorks</text>
                    
                    <circle cx="375" cy="250" r="60" fill="#f5f5f5" stroke="#333" stroke-width="2"/>
                    <text x="375" y="255" text-anchor="middle" font-size="12" fill="#333">Google Hacking</text>
                </symbol>
                
                <symbol id="techniques-matrix" viewBox="0 0 800 600">
                    <rect x="25" y="25" width="750" height="550" fill="none" stroke="#ddd" stroke-width="2" rx="10"/>
                    <text x="400" y="60" text-anchor="middle" font-size="20" fill="#333">Técnicas de Footprinting</text>
                    
                    <rect x="100" y="100" width="250" height="200" fill="#e3f2fd" stroke="#1976d2" stroke-width="2" rx="5"/>
                    <text x="225" y="130" text-anchor="middle" font-size="16" fill="#1976d2">Técnicas Pasivas</text>
                    
                    <rect x="450" y="100" width="250" height="200" fill="#f3e5f5" stroke="#7b1fa2" stroke-width="2" rx="5"/>
                    <text x="575" y="130" text-anchor="middle" font-size="16" fill="#7b1fa2">Técnicas Activas</text>
                </symbol>
                
                <symbol id="osint-framework" viewBox="0 0 900 650">
                    <rect x="25" y="25" width="850" height="600" fill="none" stroke="#ddd" stroke-width="2" rx="10"/>
                    <text x="450" y="60" text-anchor="middle" font-size="20" fill="#333">Framework OSINT</text>
                    
                    <circle cx="450" cy="325" r="100" fill="#f5f5f5" stroke="#333" stroke-width="3"/>
                    <text x="450" y="330" text-anchor="middle" font-size="16" fill="#333">OSINT</text>
                </symbol>
            </defs>
        </svg>`;
    }

    /**
     * Clear SVG cache
     */
    clearCache() {
        this.svgCache.clear();
        this.log('🗑️ SVG cache cleared');
    }

    /**
     * Debug logging
     */
    log(message, ...args) {
        if (this.debug) {
            console.log(`[SVGInjector] ${message}`, ...args);
        }
    }
}

// Create global instance
window.svgInjector = new SVGInlineInjector();

// Auto-initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        window.svgInjector.init();
    });
} else {
    window.svgInjector.init();
}

// Export for modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = SVGInlineInjector;
}
