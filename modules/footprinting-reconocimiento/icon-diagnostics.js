/**
 * Icon Diagnostics for Footprinting y Reconocimiento Module
 * Provides diagnostic tools for icon and SVG troubleshooting
 */

class IconDiagnostics {
    constructor() {
        this.debug = true;
        this.diagnosticData = {
            icons: [],
            svgs: [],
            errors: [],
            warnings: []
        };
        this.initialized = false;
    }

    /**
     * Initialize icon diagnostics
     */
    init() {
        if (this.initialized) return;
        
        this.log('🔧 Initializing Icon Diagnostics...');
        this.setupDiagnostics();
        this.initialized = true;
        this.log('✅ Icon Diagnostics initialized');
    }

    /**
     * Setup diagnostic tools
     */
    setupDiagnostics() {
        // Add diagnostic methods to window for console access
        window.iconDiagnostics = {
            runFullDiagnostic: () => this.runFullDiagnostic(),
            checkIcons: () => this.checkIcons(),
            checkSVGs: () => this.checkSVGs(),
            checkFontAwesome: () => this.checkFontAwesome(),
            getReport: () => this.getReport(),
            fixCommonIssues: () => this.fixCommonIssues()
        };

        // Run initial diagnostic
        setTimeout(() => this.runFullDiagnostic(), 2000);
    }    /**
     * Run full diagnostic check
     */    runFullDiagnostic() {
        this.log('🔍 Running full diagnostic...');
        
        this.diagnosticData = {
            icons: [],
            svgs: [],
            errors: [],
            warnings: [],
            svgInlineInjector: null
        };

        try {
            this.checkFontAwesome();
            this.checkIcons();
            this.checkSVGs();
            this.diagnosticData.svgInlineInjector = this.checkSVGInlineInjector();
            this.checkForCommonIssues();
            
            this.log('📊 Diagnostic complete');
            this.printReport();
        } catch (error) {
            this.log('❌ Error during diagnostic:', error);
            this.diagnosticData.errors.push(`Diagnostic error: ${error.message}`);
        }
        
        return this.diagnosticData;
    }

    /**
     * Check Font Awesome loading
     */
    checkFontAwesome() {
        const faLink = document.querySelector('link[href*="font-awesome"]');
        const faElements = document.querySelectorAll('.fa, .fas, .far, .fab');
        
        if (!faLink) {
            this.diagnosticData.errors.push('Font Awesome CSS not loaded');
        } else {
            this.log('✅ Font Awesome CSS found');
        }

        if (faElements.length === 0) {
            this.diagnosticData.warnings.push('No Font Awesome icons found in document');
        } else {
            this.log(`✅ Found ${faElements.length} Font Awesome icons`);
        }        // Check if fonts are actually loaded
        if (document.fonts) {
            try {
                const isLoaded = document.fonts.check('1em "Font Awesome 6 Free"');
                if (!isLoaded) {
                    this.diagnosticData.warnings.push('Font Awesome fonts may not be loaded');
                }
            } catch (error) {
                // Fallback check using document.fonts.ready
                document.fonts.ready.then(() => {
                    const isLoaded = document.fonts.check('1em "Font Awesome 6 Free"');
                    if (!isLoaded) {
                        this.diagnosticData.warnings.push('Font Awesome fonts may not be loaded');
                    }
                }).catch(() => {
                    this.diagnosticData.warnings.push('Unable to verify Font Awesome fonts loading');
                });
            }
        }
    }

    /**
     * Check all icons in the document
     */
    checkIcons() {
        const icons = document.querySelectorAll('.fa, .fas, .far, .fab, .fal, .fad');
        
        icons.forEach((icon, index) => {
            const iconData = {
                index,
                element: icon,
                classes: Array.from(icon.classList),
                visible: this.isElementVisible(icon),
                hasContent: icon.textContent.trim().length > 0,
                computed: window.getComputedStyle(icon)
            };

            // Check for potential issues
            if (!iconData.visible) {
                this.diagnosticData.warnings.push(`Icon ${index} not visible: ${iconData.classes.join(' ')}`);
            }

            if (iconData.hasContent) {
                this.diagnosticData.warnings.push(`Icon ${index} has text content: "${icon.textContent.trim()}"`);
            }

            if (iconData.computed.fontSize === '0px') {
                this.diagnosticData.errors.push(`Icon ${index} has font-size: 0px`);
            }

            this.diagnosticData.icons.push(iconData);
        });

        this.log(`🔍 Checked ${icons.length} icons`);
    }

    /**
     * Check all SVGs in the document
     */
    checkSVGs() {
        const svgs = document.querySelectorAll('svg');
        
        svgs.forEach((svg, index) => {
            const svgData = {
                index,
                element: svg,
                hasViewBox: svg.hasAttribute('viewBox'),
                hasWidth: svg.hasAttribute('width'),
                hasHeight: svg.hasAttribute('height'),
                visible: this.isElementVisible(svg),
                childCount: svg.children.length
            };

            // Check for potential issues
            if (!svgData.hasViewBox) {
                this.diagnosticData.warnings.push(`SVG ${index} missing viewBox attribute`);
            }

            if (!svgData.visible) {
                this.diagnosticData.warnings.push(`SVG ${index} not visible`);
            }

            if (svgData.childCount === 0) {
                this.diagnosticData.warnings.push(`SVG ${index} has no child elements`);
            }

            this.diagnosticData.svgs.push(svgData);
        });

        this.log(`🔍 Checked ${svgs.length} SVGs`);
    }

    /**
     * Check for common issues
     */
    checkForCommonIssues() {
        // Check for missing data-svg-id elements
        const svgContainers = document.querySelectorAll('[data-svg-id]');
        svgContainers.forEach((container, index) => {
            if (!container.querySelector('svg')) {
                this.diagnosticData.errors.push(`SVG container ${index} with data-svg-id="${container.getAttribute('data-svg-id')}" has no SVG content`);
            }
        });

        // Check for broken icon references
        const iconContainers = document.querySelectorAll('[data-icon]');
        iconContainers.forEach((container, index) => {
            const iconKey = container.getAttribute('data-icon');
            if (!container.querySelector('i')) {
                this.diagnosticData.errors.push(`Icon container ${index} with data-icon="${iconKey}" has no icon element`);
            }
        });
    }

    /**
     * Check if element is visible
     */
    isElementVisible(element) {
        const rect = element.getBoundingClientRect();
        const style = window.getComputedStyle(element);
        
        return (
            rect.width > 0 &&
            rect.height > 0 &&
            style.display !== 'none' &&
            style.visibility !== 'hidden' &&
            style.opacity !== '0'
        );
    }

    /**
     * Fix common issues automatically
     */
    fixCommonIssues() {
        this.log('🔧 Attempting to fix common issues...');
        let fixCount = 0;

        // Fix invisible icons
        const icons = document.querySelectorAll('.fa, .fas, .far, .fab');
        icons.forEach(icon => {
            if (!this.isElementVisible(icon)) {
                icon.style.display = 'inline-block';
                icon.style.visibility = 'visible';
                icon.style.opacity = '1';
                fixCount++;
            }
        });

        // Fix SVGs without viewBox
        const svgs = document.querySelectorAll('svg:not([viewBox])');
        svgs.forEach(svg => {
            if (svg.hasAttribute('width') && svg.hasAttribute('height')) {
                const width = svg.getAttribute('width');
                const height = svg.getAttribute('height');
                svg.setAttribute('viewBox', `0 0 ${width} ${height}`);
                fixCount++;
            }
        });

        this.log(`🔧 Fixed ${fixCount} issues`);
        return fixCount;
    }

    /**
     * Get diagnostic report
     */
    getReport() {
        return {
            summary: {
                totalIcons: this.diagnosticData.icons.length,
                totalSVGs: this.diagnosticData.svgs.length,
                totalErrors: this.diagnosticData.errors.length,
                totalWarnings: this.diagnosticData.warnings.length
            },
            details: this.diagnosticData
        };
    }

    /**
     * Print diagnostic report to console
     */
    printReport() {
        const report = this.getReport();
        
        console.group('🔍 Icon Diagnostics Report');
        console.log('📊 Summary:', report.summary);
        
        if (report.details.errors.length > 0) {
            console.group('❌ Errors');
            report.details.errors.forEach(error => console.error(error));
            console.groupEnd();
        }
        
        if (report.details.warnings.length > 0) {
            console.group('⚠️ Warnings');
            report.details.warnings.forEach(warning => console.warn(warning));
            console.groupEnd();
        }
        
        console.log('💡 Tip: Use iconDiagnostics.fixCommonIssues() to automatically fix some issues');
        console.groupEnd();
    }

    /**
     * Monitor icons continuously
     */
    startMonitoring(interval = 30000) {
        this.log(`🔄 Starting icon monitoring (${interval}ms interval)`);
        
        this.monitoringInterval = setInterval(() => {
            this.runFullDiagnostic();
        }, interval);
        
        return this.monitoringInterval;
    }

    /**
     * Stop monitoring
     */
    stopMonitoring() {
        if (this.monitoringInterval) {
            clearInterval(this.monitoringInterval);
            this.monitoringInterval = null;
            this.log('⏹️ Icon monitoring stopped');
        }
    }

    /**
     * Debug logging
     */
    log(message, ...args) {
        if (this.debug) {
            console.log(`[IconDiagnostics] ${message}`, ...args);
        }
    }

    /**
     * Check SVGInlineInjector availability and status
     */
    checkSVGInlineInjector() {
        this.log('🔍 Checking SVGInlineInjector...');
        
        const result = {
            available: false,
            initialized: false,
            instance: null,
            errors: []
        };
        
        try {
            if (typeof SVGInlineInjector !== 'undefined') {
                result.available = true;
                this.log('✅ SVGInlineInjector class is available');
                
                if (window.svgInjector) {
                    result.instance = window.svgInjector;
                    result.initialized = window.svgInjector.initialized || false;
                    this.log(`✅ SVGInlineInjector instance exists (initialized: ${result.initialized})`);
                } else {
                    result.errors.push('SVGInlineInjector instance not found in window.svgInjector');
                    this.log('⚠️ SVGInlineInjector instance not found');
                }
            } else {
                result.errors.push('SVGInlineInjector class not available');
                this.log('❌ SVGInlineInjector class not available');
            }
        } catch (error) {
            result.errors.push(`Error checking SVGInlineInjector: ${error.message}`);
            this.log('❌ Error checking SVGInlineInjector:', error);
        }
        
        return result;
    }
}

// Create global instance
window.iconDiagnosticsInstance = new IconDiagnostics();

// Auto-initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        window.iconDiagnosticsInstance.init();
    });
} else {
    window.iconDiagnosticsInstance.init();
}

// Export for modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = IconDiagnostics;
}
