/* ========================================
   RESOURCES PAGE JAVASCRIPT
   ======================================== */

// Resources data
const resourcesData = {
    tools: [
        {
            id: 'nmap',
            title: 'Nmap',
            description: 'Scanner de red para descubrimiento de hosts y servicios',
            category: 'tools',
            icon: 'fas fa-network-wired',
            iconClass: 'sena-bg-primary',
            tags: ['reconocimiento', 'escaneo', 'red'],
            difficulty: 'Intermedio',
            url: 'https://nmap.org/',
            downloadUrl: 'https://nmap.org/download.html',
            documentation: 'https://nmap.org/docs.html'
        },
        {
            id: 'metasploit',
            title: 'Metasploit Framework',
            description: 'Plataforma para desarrollo y ejecución de exploits',
            category: 'tools',
            icon: 'fas fa-bug',
            iconClass: 'sena-bg-secondary',
            tags: ['explotación', 'pentesting', 'framework'],
            difficulty: 'Avanzado',
            url: 'https://www.metasploit.com/',
            downloadUrl: 'https://www.metasploit.com/download',
            documentation: 'https://docs.metasploit.com/'
        },
        {
            id: 'wireshark',
            title: 'Wireshark',
            description: 'Analizador de protocolos de red',
            category: 'tools',
            icon: 'fas fa-wifi',
            iconClass: 'sena-bg-accent',
            tags: ['análisis', 'red', 'captura'],
            difficulty: 'Intermedio',
            url: 'https://www.wireshark.org/',
            downloadUrl: 'https://www.wireshark.org/download.html',
            documentation: 'https://www.wireshark.org/docs/'
        },
        {
            id: 'burp-suite',
            title: 'Burp Suite',
            description: 'Plataforma para testing de seguridad en aplicaciones web',
            category: 'tools',
            icon: 'fas fa-globe',
            iconClass: 'sena-bg-gradient',
            tags: ['web', 'proxy', 'aplicaciones'],
            difficulty: 'Intermedio',
            url: 'https://portswigger.net/burp',
            downloadUrl: 'https://portswigger.net/burp/communitydownload',
            documentation: 'https://portswigger.net/burp/documentation'
        }
    ],
    documentation: [
        {
            id: 'owasp-top10',
            title: 'OWASP Top 10',
            description: 'Las 10 vulnerabilidades más críticas en aplicaciones web',
            category: 'documentation',
            icon: 'fas fa-shield-alt',
            iconClass: 'sena-bg-primary',
            tags: ['web', 'vulnerabilidades', 'estándar'],
            difficulty: 'Básico',
            url: 'https://owasp.org/Top10/',
            type: 'Guía'
        },
        {
            id: 'nist-framework',
            title: 'NIST Cybersecurity Framework',
            description: 'Marco de trabajo para gestión de riesgos de ciberseguridad',
            category: 'documentation',
            icon: 'fas fa-book',
            iconClass: 'sena-bg-secondary',
            tags: ['marco', 'gestión', 'riesgos'],
            difficulty: 'Intermedio',
            url: 'https://www.nist.gov/cyberframework',
            type: 'Marco de Trabajo'
        },
        {
            id: 'ptes-standard',
            title: 'PTES - Penetration Testing Execution Standard',
            description: 'Estándar para ejecución de pruebas de penetración',
            category: 'documentation',
            icon: 'fas fa-clipboard-list',
            iconClass: 'sena-bg-accent',
            tags: ['pentesting', 'metodología', 'estándar'],
            difficulty: 'Avanzado',
            url: 'http://www.pentest-standard.org/',
            type: 'Metodología'
        },
        {
            id: 'ceh-guide',
            title: 'CEH Official Guide',
            description: 'Guía oficial para Certified Ethical Hacker',
            category: 'documentation',
            icon: 'fas fa-graduation-cap',
            iconClass: 'sena-bg-gradient',
            tags: ['certificación', 'hacking', 'ético'],
            difficulty: 'Intermedio',
            url: '#',
            type: 'Certificación'
        }
    ],
    labs: [
        {
            id: 'hack-the-box',
            title: 'Hack The Box',
            description: 'Plataforma de laboratorios virtuales para pentesting',
            category: 'labs',
            icon: 'fas fa-cube',
            iconClass: 'sena-bg-primary',
            tags: ['laboratorio', 'práctica', 'ctf'],
            difficulty: 'Intermedio',
            url: 'https://www.hackthebox.eu/',
            type: 'Plataforma Online',
            free: false
        },
        {
            id: 'tryhackme',
            title: 'TryHackMe',
            description: 'Laboratorios guiados para aprender ciberseguridad',
            category: 'labs',
            icon: 'fas fa-play-circle',
            iconClass: 'sena-bg-secondary',
            tags: ['tutorial', 'práctica', 'guiado'],
            difficulty: 'Básico',
            url: 'https://tryhackme.com/',
            type: 'Plataforma Online',
            free: true
        },
        {
            id: 'dvwa',
            title: 'DVWA',
            description: 'Damn Vulnerable Web Application para práctica',
            category: 'labs',
            icon: 'fas fa-code',
            iconClass: 'sena-bg-accent',
            tags: ['web', 'vulnerabilidades', 'local'],
            difficulty: 'Básico',
            url: 'https://dvwa.co.uk/',
            type: 'Aplicación Local',
            free: true
        },
        {
            id: 'metasploitable',
            title: 'Metasploitable',
            description: 'Máquina virtual vulnerable para práctica',
            category: 'labs',
            icon: 'fas fa-server',
            iconClass: 'sena-bg-gradient',
            tags: ['vm', 'vulnerable', 'práctica'],
            difficulty: 'Intermedio',
            url: 'https://sourceforge.net/projects/metasploitable/',
            type: 'Máquina Virtual',
            free: true
        }
    ]
};

// Resources page initialization
document.addEventListener('DOMContentLoaded', function() {
    initializeResourcesPage();
    loadAllResources();
    setupResourcesEventListeners();
    setupSearch();
});

// Initialize resources page
function initializeResourcesPage() {
    console.log('🛠️ Inicializando página de recursos...');
    updateResourceCounts();
}

// Setup event listeners
function setupResourcesEventListeners() {
    // Category filter buttons
    const categoryCards = document.querySelectorAll('.category-card');
    categoryCards.forEach(card => {
        card.addEventListener('click', function() {
            const category = this.dataset.category;
            selectCategory(category);
            filterResources(category);
        });
    });
    
    // Resource cards interactions
    document.addEventListener('click', function(e) {
        const resourceCard = e.target.closest('.resource-card');
        if (resourceCard && !e.target.closest('.resource-actions')) {
            const resourceId = resourceCard.dataset.resourceId;
            showResourceDetails(resourceId);
        }
    });
}

// Setup search functionality
function setupSearch() {
    const searchInput = document.getElementById('resource-search');
    if (!searchInput) return;
    
    searchInput.addEventListener('input', debounce(function() {
        const query = this.value.toLowerCase().trim();
        searchResources(query);
    }, 300));
    
    // Search button
    const searchButton = searchInput.nextElementSibling;
    if (searchButton) {
        searchButton.addEventListener('click', function() {
            const query = searchInput.value.toLowerCase().trim();
            searchResources(query);
        });
    }
}

// Load all resources
function loadAllResources() {
    loadResourcesByCategory('tools');
    loadResourcesByCategory('documentation');
    loadResourcesByCategory('labs');
}

// Load resources by category
function loadResourcesByCategory(category) {
    const container = document.getElementById(`${category}-container`);
    if (!container) return;
    
    const resources = resourcesData[category] || [];
    container.innerHTML = '';
    
    resources.forEach((resource, index) => {
        const resourceCard = createResourceCard(resource, index);
        container.appendChild(resourceCard);
    });
}

// Create resource card
function createResourceCard(resource, index) {
    const col = document.createElement('div');
    col.className = 'col-lg-6 col-xl-4 mb-4';
    
    col.innerHTML = `
        <div class="resource-card animate-on-scroll" 
             data-resource-id="${resource.id}" 
             data-category="${resource.category}"
             style="animation-delay: ${index * 0.1}s">
            <div class="resource-header">
                <div class="resource-icon ${resource.iconClass}">
                    <i class="${resource.icon}"></i>
                </div>
                <div class="resource-info">
                    <h5 class="resource-title">${resource.title}</h5>
                    <small class="resource-category">${getCategoryDisplayName(resource.category)}</small>
                </div>
            </div>
            
            <p class="resource-description">${resource.description}</p>
            
            <div class="resource-tags">
                ${resource.tags.map(tag => `
                    <span class="resource-tag">${tag}</span>
                `).join('')}
            </div>
            
            <div class="resource-meta mb-3">
                <div class="row">
                    <div class="col-6">
                        <small class="text-muted d-block">Dificultad</small>
                        <span class="badge badge-${getDifficultyColor(resource.difficulty)}">${resource.difficulty}</span>
                    </div>
                    <div class="col-6">
                        <small class="text-muted d-block">Tipo</small>
                        <small class="fw-medium">${resource.type || 'Herramienta'}</small>
                    </div>
                </div>
                ${resource.free !== undefined ? `
                    <div class="mt-2">
                        <span class="badge ${resource.free ? 'bg-success' : 'bg-warning text-dark'}">
                            <i class="fas fa-${resource.free ? 'check' : 'dollar-sign'} me-1"></i>
                            ${resource.free ? 'Gratuito' : 'Premium'}
                        </span>
                    </div>
                ` : ''}
            </div>
            
            <div class="resource-actions">
                ${resource.url ? `
                    <a href="${resource.url}" target="_blank" class="btn btn-sena-primary btn-sm flex-fill">
                        <i class="fas fa-external-link-alt me-1"></i>Visitar
                    </a>
                ` : ''}
                ${resource.downloadUrl ? `
                    <a href="${resource.downloadUrl}" target="_blank" class="btn btn-sena-secondary btn-sm flex-fill">
                        <i class="fas fa-download me-1"></i>Descargar
                    </a>
                ` : ''}
                ${resource.documentation ? `
                    <a href="${resource.documentation}" target="_blank" class="btn btn-sena-outline btn-sm">
                        <i class="fas fa-book me-1"></i>Docs
                    </a>
                ` : ''}
            </div>
        </div>
    `;
    
    return col;
}

// Select category
function selectCategory(category) {
    // Update category cards
    document.querySelectorAll('.category-card').forEach(card => {
        card.classList.remove('active');
    });
    
    const selectedCard = document.querySelector(`[data-category="${category}"]`);
    if (selectedCard) {
        selectedCard.classList.add('active');
    }
}

// Filter resources by category
function filterResources(category) {
    const allSections = document.querySelectorAll('[id$="-section"]');
    
    if (category === 'all') {
        // Show all sections
        allSections.forEach(section => {
            section.style.display = 'block';
        });
    } else {
        // Hide all sections first
        allSections.forEach(section => {
            section.style.display = 'none';
        });
        
        // Show selected category section
        const targetSection = document.getElementById(`${category}-section`);
        if (targetSection) {
            targetSection.style.display = 'block';
            targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }
}

// Search resources
function searchResources(query) {
    if (!query) {
        // Reset to show all
        selectCategory('all');
        filterResources('all');
        return;
    }
    
    // Search in all resources
    const allResources = [...resourcesData.tools, ...resourcesData.documentation, ...resourcesData.labs];
    const matchingResources = allResources.filter(resource => {
        const searchText = `${resource.title} ${resource.description} ${resource.tags.join(' ')}`.toLowerCase();
        return searchText.includes(query);
    });
    
    // Display search results
    displaySearchResults(matchingResources, query);
}

// Display search results
function displaySearchResults(resources, query) {
    // Hide all sections
    const allSections = document.querySelectorAll('[id$="-section"]');
    allSections.forEach(section => {
        section.style.display = 'none';
    });
    
    // Create or update search results section
    let searchSection = document.getElementById('search-results-section');
    if (!searchSection) {
        searchSection = document.createElement('section');
        searchSection.id = 'search-results-section';
        searchSection.className = 'py-5 bg-light';
        searchSection.innerHTML = `
            <div class="container">
                <h2 class="fw-bold sena-text-primary mb-4 text-center" id="search-results-title"></h2>
                <div class="row" id="search-results-container"></div>
            </div>
        `;
        
        // Insert after the categories section
        const categoriesSection = document.querySelector('.py-5');
        categoriesSection.insertAdjacentElement('afterend', searchSection);
    }
    
    // Update search results
    const title = document.getElementById('search-results-title');
    const container = document.getElementById('search-results-container');
    
    title.textContent = `Resultados de búsqueda para "${query}" (${resources.length})`;
    container.innerHTML = '';
    
    if (resources.length === 0) {
        container.innerHTML = `
            <div class="col-12 text-center py-5">
                <i class="fas fa-search fa-3x text-muted mb-3"></i>
                <h5 class="text-muted">No se encontraron recursos</h5>
                <p class="text-muted">Intenta con otros términos de búsqueda</p>
            </div>
        `;
    } else {
        resources.forEach((resource, index) => {
            const resourceCard = createResourceCard(resource, index);
            container.appendChild(resourceCard);
        });
    }
    
    searchSection.style.display = 'block';
    searchSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// Show resource details (modal or expanded view)
function showResourceDetails(resourceId) {
    const allResources = [...resourcesData.tools, ...resourcesData.documentation, ...resourcesData.labs];
    const resource = allResources.find(r => r.id === resourceId);
    
    if (!resource) return;
    
    // Create modal for resource details
    const modal = createResourceModal(resource);
    document.body.appendChild(modal);
    
    // Show modal
    const bootstrapModal = new bootstrap.Modal(modal);
    bootstrapModal.show();
    
    // Remove modal when hidden
    modal.addEventListener('hidden.bs.modal', function() {
        modal.remove();
    });
}

// Create resource modal
function createResourceModal(resource) {
    const modal = document.createElement('div');
    modal.className = 'modal fade';
    modal.tabIndex = -1;
    
    modal.innerHTML = `
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header sena-bg-gradient">
                    <h5 class="modal-title text-white">
                        <i class="${resource.icon} me-2"></i>${resource.title}
                    </h5>
                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-md-8">
                            <h6>Descripción</h6>
                            <p>${resource.description}</p>
                            
                            <h6>Categorías</h6>
                            <div class="mb-3">
                                ${resource.tags.map(tag => `
                                    <span class="badge bg-light text-dark me-1">${tag}</span>
                                `).join('')}
                            </div>
                            
                            <h6>Enlaces útiles</h6>
                            <div class="d-grid gap-2">
                                ${resource.url ? `
                                    <a href="${resource.url}" target="_blank" class="btn btn-sena-primary">
                                        <i class="fas fa-external-link-alt me-2"></i>Sitio web oficial
                                    </a>
                                ` : ''}
                                ${resource.downloadUrl ? `
                                    <a href="${resource.downloadUrl}" target="_blank" class="btn btn-sena-secondary">
                                        <i class="fas fa-download me-2"></i>Página de descarga
                                    </a>
                                ` : ''}
                                ${resource.documentation ? `
                                    <a href="${resource.documentation}" target="_blank" class="btn btn-sena-outline">
                                        <i class="fas fa-book me-2"></i>Documentación
                                    </a>
                                ` : ''}
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="resource-meta-card p-3 rounded bg-light">
                                <h6>Información</h6>
                                <div class="mb-2">
                                    <small class="text-muted">Categoría:</small><br>
                                    <strong>${getCategoryDisplayName(resource.category)}</strong>
                                </div>
                                <div class="mb-2">
                                    <small class="text-muted">Dificultad:</small><br>
                                    <span class="badge badge-${getDifficultyColor(resource.difficulty)}">${resource.difficulty}</span>
                                </div>
                                ${resource.type ? `
                                    <div class="mb-2">
                                        <small class="text-muted">Tipo:</small><br>
                                        <strong>${resource.type}</strong>
                                    </div>
                                ` : ''}
                                ${resource.free !== undefined ? `
                                    <div class="mb-2">
                                        <small class="text-muted">Precio:</small><br>
                                        <span class="badge ${resource.free ? 'bg-success' : 'bg-warning text-dark'}">
                                            ${resource.free ? 'Gratuito' : 'Premium'}
                                        </span>
                                    </div>
                                ` : ''}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                </div>
            </div>
        </div>
    `;
    
    return modal;
}

// Update resource counts
function updateResourceCounts() {
    const counts = {
        all: Object.values(resourcesData).flat().length,
        tools: resourcesData.tools.length,
        documentation: resourcesData.documentation.length,
        labs: resourcesData.labs.length
    };
    
    Object.keys(counts).forEach(category => {
        const countElement = document.querySelector(`[data-category="${category}"] .resource-count`);
        if (countElement) {
            countElement.textContent = counts[category];
        }
    });
}

// Utility functions
function getCategoryDisplayName(category) {
    const names = {
        'tools': 'Herramientas',
        'documentation': 'Documentación',
        'labs': 'Laboratorios'
    };
    return names[category] || category;
}

// Export functions
window.filterResources = filterResources;
window.searchResources = searchResources;
