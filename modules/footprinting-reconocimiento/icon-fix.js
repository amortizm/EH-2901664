/**
 * Icon Fix Script for Footprinting y Reconocimiento Module
 * Ensures proper icon display and functionality
 */

class IconFixer {
    constructor() {
        this.debug = true;
        this.fixedElements = new Set();
        this.initialized = false;
    }

    /**
     * Initialize the icon fixer
     */
    init() {
        if (this.initialized) return;
        
        this.log('🔧 Initializing Icon Fixer...');
        this.fixExistingIcons();
        this.setupIconObserver();
        this.ensureFontAwesome();
        this.initialized = true;
        this.log('✅ Icon Fixer initialized');
    }

    /**
     * Fix existing icons in the document
     */
    fixExistingIcons() {
        const icons = document.querySelectorAll('.fa, .fas, .far, .fab, .fal, .fad');
        icons.forEach(icon => this.fixIcon(icon));
        this.log(`🔧 Fixed ${icons.length} existing icons`);
    }

    /**
     * Fix individual icon element
     */
    fixIcon(iconElement) {
        if (this.fixedElements.has(iconElement)) return;

        // Ensure proper display
        iconElement.style.display = 'inline-block';
        iconElement.style.opacity = '1';
        iconElement.style.visibility = 'visible';

        // Add proper classes if missing
        if (!iconElement.classList.contains('fa') && 
            !iconElement.classList.contains('fas') && 
            !iconElement.classList.contains('far') && 
            !iconElement.classList.contains('fab')) {
            iconElement.classList.add('fas');
        }

        // Mark as fixed
        this.fixedElements.add(iconElement);
        iconElement.setAttribute('data-icon-fixed', 'true');
    }

    /**
     * Setup observer for dynamically added icons
     */
    setupIconObserver() {
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                mutation.addedNodes.forEach((node) => {
                    if (node.nodeType === Node.ELEMENT_NODE) {
                        this.processIconElements(node);
                    }
                });
            });
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true,
            attributes: true,
            attributeFilter: ['class']
        });
    }

    /**
     * Process icon elements in a container
     */
    processIconElements(container) {
        // Find all icon elements
        const icons = container.querySelectorAll('.fa, .fas, .far, .fab, .fal, .fad');
        icons.forEach(icon => {
            if (!icon.hasAttribute('data-icon-fixed')) {
                this.fixIcon(icon);
            }
        });

        // Also check if the container itself is an icon
        if (container.classList && 
            (container.classList.contains('fa') || 
             container.classList.contains('fas') || 
             container.classList.contains('far') || 
             container.classList.contains('fab'))) {
            this.fixIcon(container);
        }
    }

    /**
     * Ensure Font Awesome is loaded
     */
    ensureFontAwesome() {
        // Check if Font Awesome is already loaded
        const faLink = document.querySelector('link[href*="font-awesome"]');
        if (!faLink) {
            this.log('⚠️ Font Awesome not detected, loading...');
            this.loadFontAwesome();
        }

        // Wait for fonts to load
        this.waitForFonts();
    }

    /**
     * Load Font Awesome if not present
     */
    loadFontAwesome() {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css';
        link.onload = () => {
            this.log('✅ Font Awesome loaded');
            this.fixExistingIcons();
        };
        document.head.appendChild(link);
    }

    /**
     * Wait for fonts to load and then fix icons
     */
    waitForFonts() {
        if (document.fonts && document.fonts.ready) {
            document.fonts.ready.then(() => {
                this.log('✅ Fonts ready');
                setTimeout(() => this.fixExistingIcons(), 100);
            });
        } else {
            // Fallback for older browsers
            setTimeout(() => {
                this.log('⏰ Fonts timeout fallback');
                this.fixExistingIcons();
            }, 2000);
        }
    }

    /**
     * Create icon element programmatically
     */
    createIcon(iconClass, additionalClasses = '') {
        const icon = document.createElement('i');
        icon.className = `${iconClass} ${additionalClasses}`.trim();
        this.fixIcon(icon);
        return icon;
    }

    /**
     * Replace text with icon
     */
    replaceTextWithIcon(element, iconClass) {
        if (!element) return;
        
        element.innerHTML = '';
        const icon = this.createIcon(iconClass);
        element.appendChild(icon);
    }

    /**
     * Add icon before text
     */
    addIconBeforeText(element, iconClass) {
        if (!element) return;
        
        const icon = this.createIcon(iconClass);
        element.insertBefore(icon, element.firstChild);
        
        // Add space after icon
        const space = document.createTextNode(' ');
        element.insertBefore(space, icon.nextSibling);
    }

    /**
     * Refresh all icons (useful after content updates)
     */
    refreshIcons() {
        this.fixedElements.clear();
        this.fixExistingIcons();
        this.log('🔄 Icons refreshed');
    }

    /**
     * Debug logging
     */
    log(message, ...args) {
        if (this.debug) {
            console.log(`[IconFixer] ${message}`, ...args);
        }
    }
}

// Create global instance
window.iconFixer = new IconFixer();

// Auto-initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        window.iconFixer.init();
    });
} else {
    window.iconFixer.init();
}

// Additional initialization for dynamic content
document.addEventListener('contentLoaded', () => {
    if (window.iconFixer) {
        window.iconFixer.refreshIcons();
    }
});

// Export for modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = IconFixer;
}
