/**
 * Simple Icon Loader for Footprinting y Reconocimiento Module
 * Lightweight icon loading and management system
 */

class SimpleIconLoader {
    constructor() {
        this.debug = true;
        this.iconRegistry = new Map();
        this.initialized = false;
    }

    /**
     * Initialize the simple icon loader
     */
    init() {
        if (this.initialized) return;
        
        this.log('🔧 Initializing Simple Icon Loader...');
        this.registerCommonIcons();
        this.processExistingIcons();
        this.initialized = true;
        this.log('✅ Simple Icon Loader initialized');
    }

    /**
     * Register common icons used in the module
     */
    registerCommonIcons() {
        const commonIcons = {
            // Navigation icons
            'home': 'fas fa-home',
            'search': 'fas fa-search',
            'tools': 'fas fa-tools',
            'book': 'fas fa-book',
            'chart': 'fas fa-chart-line',
            'shield': 'fas fa-shield-alt',
            
            // Action icons
            'play': 'fas fa-play',
            'pause': 'fas fa-pause',
            'stop': 'fas fa-stop',
            'reset': 'fas fa-redo',
            'check': 'fas fa-check',
            'times': 'fas fa-times',
            
            // Arrow icons
            'arrow-left': 'fas fa-arrow-left',
            'arrow-right': 'fas fa-arrow-right',
            'arrow-up': 'fas fa-arrow-up',
            'arrow-down': 'fas fa-arrow-down',
            'chevron-left': 'fas fa-chevron-left',
            'chevron-right': 'fas fa-chevron-right',
            
            // Status icons
            'success': 'fas fa-check-circle',
            'error': 'fas fa-exclamation-circle',
            'warning': 'fas fa-exclamation-triangle',
            'info': 'fas fa-info-circle',
            'loading': 'fas fa-spinner fa-spin',
            
            // Footprinting specific icons
            'reconnaissance': 'fas fa-binoculars',
            'footprint': 'fas fa-shoe-prints',
            'network': 'fas fa-network-wired',
            'target': 'fas fa-bullseye',
            'scan': 'fas fa-search-plus',
            'information': 'fas fa-info',
            'google': 'fab fa-google',
            'osint': 'fas fa-eye',
            'methodology': 'fas fa-list-ol',
            'passive': 'fas fa-eye-slash',
            'active': 'fas fa-crosshairs'
        };

        Object.entries(commonIcons).forEach(([key, value]) => {
            this.iconRegistry.set(key, value);
        });

        this.log(`📝 Registered ${Object.keys(commonIcons).length} common icons`);
    }

    /**
     * Process existing icons in the document
     */
    processExistingIcons() {
        // Find elements with data-icon attribute
        const iconElements = document.querySelectorAll('[data-icon]');
        iconElements.forEach(element => {
            const iconKey = element.getAttribute('data-icon');
            this.loadIcon(element, iconKey);
        });

        this.log(`🔄 Processed ${iconElements.length} existing icon elements`);
    }

    /**
     * Load icon into an element
     */
    loadIcon(element, iconKey) {
        const iconClass = this.iconRegistry.get(iconKey);
        
        if (iconClass) {
            // Clear existing content
            element.innerHTML = '';
            
            // Create icon element
            const icon = document.createElement('i');
            icon.className = iconClass;
            element.appendChild(icon);
            
            // Mark as loaded
            element.setAttribute('data-icon-loaded', 'true');
            
            this.log(`✅ Loaded icon: ${iconKey} (${iconClass})`);
        } else {
            this.log(`❌ Icon not found: ${iconKey}`);
            this.showIconFallback(element, iconKey);
        }
    }

    /**
     * Show fallback for missing icons
     */
    showIconFallback(element, iconKey) {
        element.innerHTML = `<i class="fas fa-question-circle" title="Icon not found: ${iconKey}"></i>`;
        element.setAttribute('data-icon-error', 'true');
    }

    /**
     * Register a new icon
     */
    registerIcon(key, iconClass) {
        this.iconRegistry.set(key, iconClass);
        this.log(`📝 Registered icon: ${key} => ${iconClass}`);
    }

    /**
     * Get icon class by key
     */
    getIcon(iconKey) {
        return this.iconRegistry.get(iconKey);
    }

    /**
     * Create icon element
     */
    createIcon(iconKey, additionalClasses = '') {
        const iconClass = this.iconRegistry.get(iconKey);
        
        if (iconClass) {
            const icon = document.createElement('i');
            icon.className = `${iconClass} ${additionalClasses}`.trim();
            return icon;
        } else {
            const fallbackIcon = document.createElement('i');
            fallbackIcon.className = `fas fa-question-circle ${additionalClasses}`.trim();
            fallbackIcon.title = `Icon not found: ${iconKey}`;
            return fallbackIcon;
        }
    }

    /**
     * Replace element content with icon
     */
    replaceWithIcon(element, iconKey) {
        if (!element) return false;
        
        element.innerHTML = '';
        const icon = this.createIcon(iconKey);
        element.appendChild(icon);
        return true;
    }

    /**
     * Add icon before element content
     */
    prependIcon(element, iconKey) {
        if (!element) return false;
        
        const icon = this.createIcon(iconKey);
        element.insertBefore(icon, element.firstChild);
        
        // Add space after icon if there's text content
        if (element.textContent.trim()) {
            const space = document.createTextNode(' ');
            element.insertBefore(space, icon.nextSibling);
        }
        
        return true;
    }

    /**
     * Add icon after element content
     */
    appendIcon(element, iconKey) {
        if (!element) return false;
        
        // Add space before icon if there's text content
        if (element.textContent.trim()) {
            const space = document.createTextNode(' ');
            element.appendChild(space);
        }
        
        const icon = this.createIcon(iconKey);
        element.appendChild(icon);
        return true;
    }

    /**
     * Get all registered icons
     */
    getAllIcons() {
        return Array.from(this.iconRegistry.entries());
    }

    /**
     * Clear icon registry
     */
    clearRegistry() {
        this.iconRegistry.clear();
        this.log('🗑️ Icon registry cleared');
    }

    /**
     * Debug logging
     */
    log(message, ...args) {
        if (this.debug) {
            console.log(`[SimpleIconLoader] ${message}`, ...args);
        }
    }
}

// Create global instance
window.simpleIconLoader = new SimpleIconLoader();

// Auto-initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        window.simpleIconLoader.init();
    });
} else {
    window.simpleIconLoader.init();
}

// Export for modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = SimpleIconLoader;
}
