/* ========================================
   MODULES MANAGEMENT - HACKING ÉTICO
   ======================================== */

// Modules data based on info.md
const modulesData = [
    {
        id: 'introduccion-hacking',
        title: 'Introducción al Hacking',
        description: 'Fundamentos y conceptos básicos del hacking ético',
        icon: 'fas fa-shield-alt',
        iconClass: 'icon-intro',
        order: 1,
        estimatedTime: '4 horas',
        difficulty: 'Básico',
        topics: [
            'Conceptos de Hacking',
            'Tipos de Hacking (White, Black, Gray Hat)',
            'Habilidades de un Hacker Ético',
            'Fases del Hacking',
            'Defensa en Profundidad'
        ],
        subtopics: {
            'conceptos': [
                'Valor de Hacking',
                'Objetivo de la Evaluación',
                'Ataques y Exploits',
                'Ataques de Día Cero',
                'Cadena de Margaritas'
            ],
            'fases': [
                'Reconocimiento',
                'Escaneo',
                'Enumeración',
                'Explotación',
                'Mantenimiento del Acceso',
                'Borrado de Huellas'
            ]
        }
    },
    {
        id: 'metodologias-estandares',
        title: 'Metodologías y Estándares',
        description: 'Marcos de trabajo y estándares para hacking ético',
        icon: 'fas fa-clipboard-list',
        iconClass: 'icon-methodology',
        order: 2,
        estimatedTime: '3 horas',
        difficulty: 'Intermedio',
        topics: [
            'OSSTMM (Open Source Security Testing Methodology Manual)',
            'OWASP (Open Web Application Security Project)',
            'CEH (Certified Ethical Hacker)'
        ],
        prerequisites: ['introduccion-hacking']
    },
    {
        id: 'footprinting-reconocimiento',
        title: 'Footprinting y Reconocimiento',
        description: 'Técnicas de recopilación de información y reconocimiento',
        icon: 'fas fa-search',
        iconClass: 'icon-footprint',
        order: 3,
        estimatedTime: '6 horas',
        difficulty: 'Intermedio',
        topics: [
            'Conceptos Básicos de Footprinting',
            'Herramientas de Reconocimiento',
            'Google Hacking (GHDB)',
            'Técnicas de Footprinting',
            'OSINT (Open Source Intelligence)'
        ],
        prerequisites: ['introduccion-hacking', 'metodologias-estandares']
    },
    {
        id: 'escaneo-dispositivos',
        title: 'Escaneo de Dispositivos',
        description: 'Exploración y mapeo de redes y sistemas',
        icon: 'fas fa-network-wired',
        iconClass: 'icon-scan',
        order: 4,
        estimatedTime: '5 horas',
        difficulty: 'Intermedio',
        topics: [
            'Definición y Tipos de Escaneo',
            'Metodología de Exploración CEH',
            'Técnicas y Herramientas de Escaneo',
            'Banner Fingerprinting y OS Detection',
            'Proxies y Anonimizadores'
        ],
        prerequisites: ['footprinting-reconocimiento']
    },
    {
        id: 'enumeracion-activos',
        title: 'Enumeración de Activos',
        description: 'Identificación detallada de servicios y recursos',
        icon: 'fas fa-list-ul',
        iconClass: 'icon-enum',
        order: 5,
        estimatedTime: '4 horas',
        difficulty: 'Avanzado',
        topics: [
            'Conceptos Básicos de Enumeración',
            'Técnicas de Enumeración',
            'Tipos de Enumeración por Servicio',
            'Herramientas Especializadas'
        ],
        prerequisites: ['escaneo-dispositivos']
    },
    {
        id: 'escalamiento-privilegios',
        title: 'Escalamiento de Privilegios',
        description: 'Técnicas para obtener mayores privilegios en sistemas',
        icon: 'fas fa-user-shield',
        iconClass: 'icon-privilege',
        order: 6,
        estimatedTime: '6 horas',
        difficulty: 'Avanzado',
        topics: [
            'Escalamiento Horizontal',
            'Escalamiento Vertical',
            'Técnicas en Windows',
            'Técnicas en Linux',
            'Herramientas y Exploits'
        ],
        prerequisites: ['enumeracion-activos']
    }
];

// Load modules into the page
function loadModules() {
    modules = modulesData.sort((a, b) => a.order - b.order);
    
    // Load modules in navigation dropdown
    loadModulesNavigation();
    
    // Load modules overview section
    loadModulesOverview();
    
    // Load learning path
    loadLearningPath();
    
    console.log('📚 Módulos cargados:', modules.length);
}

// Load modules in navigation dropdown
function loadModulesNavigation() {
    const modulesDropdown = document.getElementById('modules-dropdown');
    if (!modulesDropdown) return;
    
    modulesDropdown.innerHTML = '';
    
    modules.forEach(module => {
        const dropdownItem = document.createElement('li');
        dropdownItem.innerHTML = `
            <a class="dropdown-item d-flex align-items-center" href="modules/${module.id}/index.html">
                <i class="${module.icon} me-2 text-${getIconColor(module.iconClass)}"></i>
                <div>
                    <div class="fw-medium">${module.title}</div>
                    <small class="text-muted">${module.difficulty} • ${module.estimatedTime}</small>
                </div>
            </a>
        `;
        modulesDropdown.appendChild(dropdownItem);
    });
}

// Load modules overview section
function loadModulesOverview() {
    const modulesContainer = document.getElementById('modules-container');
    if (!modulesContainer) return;
    
    modulesContainer.innerHTML = '';
    
    modules.forEach((module, index) => {
        const moduleCard = createModuleCard(module, index);
        modulesContainer.appendChild(moduleCard);
    });
}

// Create module card element
function createModuleCard(module, index) {
    const col = document.createElement('div');
    col.className = 'col-lg-6 col-xl-4 mb-4';
    
    // Get current progress for this module
    const progress = progressData[module.id] || { progress: 0, status: 'not-started' };
    
    col.innerHTML = `
        <div class="module-card animate-on-scroll h-100" data-module-id="${module.id}" style="animation-delay: ${index * 0.1}s">
            <div class="text-center">
                <div class="module-icon ${module.iconClass}">
                    <i class="${module.icon}"></i>
                </div>
                
                <h4 class="module-title">${module.title}</h4>
                <p class="module-description">${module.description}</p>
                
                <div class="module-meta mb-3">
                    <div class="row text-center">
                        <div class="col-4">
                            <small class="text-muted d-block">Dificultad</small>
                            <span class="badge badge-${getDifficultyColor(module.difficulty)}">${module.difficulty}</span>
                        </div>
                        <div class="col-4">
                            <small class="text-muted d-block">Duración</small>
                            <strong class="text-primary">${module.estimatedTime}</strong>
                        </div>
                        <div class="col-4">
                            <small class="text-muted d-block">Temas</small>
                            <strong class="text-secondary">${module.topics.length}</strong>
                        </div>
                    </div>
                </div>
                
                <div class="module-topics">
                    <h6 class="text-primary mb-2">Contenido:</h6>
                    <ul class="list-unstyled">
                        ${module.topics.slice(0, 3).map(topic => `
                            <li><i class="fas fa-check-circle text-success me-2"></i>${topic}</li>
                        `).join('')}
                        ${module.topics.length > 3 ? `
                            <li class="text-muted"><i class="fas fa-plus-circle me-2"></i>+${module.topics.length - 3} temas más</li>
                        ` : ''}
                    </ul>
                </div>
                
                <div class="module-progress mb-3">
                    <div class="d-flex justify-content-between align-items-center mb-2">
                        <small class="text-muted">Progreso</small>
                        <span class="badge status-badge status-${progress.status}">${getStatusText(progress.status)}</span>
                    </div>
                    <div class="progress" style="height: 8px;">
                        <div class="progress-bar progress-bar-custom" 
                             style="width: ${progress.progress}%" 
                             role="progressbar" 
                             aria-valuenow="${progress.progress}" 
                             aria-valuemin="0" 
                             aria-valuemax="100">
                        </div>
                    </div>
                </div>
                
                ${module.prerequisites ? `
                    <div class="prerequisites mb-3">
                        <small class="text-muted d-block mb-1">Prerrequisitos:</small>
                        <div class="d-flex flex-wrap gap-1">
                            ${module.prerequisites.map(prereq => {
                                const prereqModule = modules.find(m => m.id === prereq);
                                const prereqProgress = progressData[prereq] || { status: 'not-started' };
                                const isCompleted = prereqProgress.status === 'completed';
                                return `
                                    <span class="badge ${isCompleted ? 'bg-success' : 'bg-warning'} text-dark">
                                        <i class="fas fa-${isCompleted ? 'check' : 'clock'} me-1"></i>
                                        ${prereqModule ? prereqModule.title : prereq}
                                    </span>
                                `;
                            }).join('')}
                        </div>
                    </div>
                ` : ''}
                
                <div class="module-actions">
                    <button class="btn btn-sena-primary w-100" onclick="navigateToModule('${module.id}')">
                        <i class="fas fa-${getActionIcon(progress.status)} me-2"></i>
                        ${getActionText(progress.status)}
                    </button>
                </div>
            </div>
        </div>
    `;
    
    return col;
}

// Load learning path
function loadLearningPath() {
    const learningPath = document.getElementById('learning-path');
    if (!learningPath) return;
    
    learningPath.innerHTML = '';
    
    modules.forEach((module, index) => {
        const pathStep = document.createElement('div');
        pathStep.className = 'path-step animate-on-scroll';
        pathStep.style.animationDelay = `${index * 0.2}s`;
        
        const progress = progressData[module.id] || { status: 'not-started' };
        
        pathStep.innerHTML = `
            <div class="path-step-number">${module.order}</div>
            <h6 class="path-step-title">${module.title}</h6>
            <p class="path-step-desc">${module.description}</p>
            <div class="path-step-status">
                <span class="badge status-${progress.status}">${getStatusText(progress.status)}</span>
            </div>
        `;
        
        pathStep.addEventListener('click', () => navigateToModule(module.id));
        
        learningPath.appendChild(pathStep);
    });
}

// Helper functions
function getIconColor(iconClass) {
    const colors = {
        'icon-intro': 'primary',
        'icon-methodology': 'warning',
        'icon-footprint': 'info',
        'icon-scan': 'purple',
        'icon-enum': 'danger',
        'icon-privilege': 'success'
    };
    return colors[iconClass] || 'primary';
}

function getDifficultyColor(difficulty) {
    const colors = {
        'Básico': 'success',
        'Intermedio': 'warning',
        'Avanzado': 'danger'
    };
    return colors[difficulty] || 'secondary';
}

function getActionIcon(status) {
    const icons = {
        'not-started': 'play',
        'in-progress': 'arrow-right',
        'completed': 'redo'
    };
    return icons[status] || 'play';
}

function getActionText(status) {
    const texts = {
        'not-started': 'Comenzar',
        'in-progress': 'Continuar',
        'completed': 'Revisar'
    };
    return texts[status] || 'Comenzar';
}

// Module validation
function validatePrerequisites(moduleId) {
    const module = modules.find(m => m.id === moduleId);
    if (!module || !module.prerequisites) return true;
    
    return module.prerequisites.every(prereqId => {
        const prereqProgress = progressData[prereqId];
        return prereqProgress && prereqProgress.status === 'completed';
    });
}

function getNextModule(currentModuleId) {
    const currentIndex = modules.findIndex(m => m.id === currentModuleId);
    if (currentIndex >= 0 && currentIndex < modules.length - 1) {
        return modules[currentIndex + 1];
    }
    return null;
}

function getPreviousModule(currentModuleId) {
    const currentIndex = modules.findIndex(m => m.id === currentModuleId);
    if (currentIndex > 0) {
        return modules[currentIndex - 1];
    }
    return null;
}

// Export modules data
window.modulesData = modulesData;
window.modules = modules;
window.loadModules = loadModules;
window.validatePrerequisites = validatePrerequisites;
window.getNextModule = getNextModule;
window.getPreviousModule = getPreviousModule;
