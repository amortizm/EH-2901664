/* ========================================
   GLOBAL JAVASCRIPT - SENA INTERACTIVE GUIDE
   ======================================== */

// Global variables
let currentUser = null;
let progressData = {};
let modules = [];

// Initialize application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
    loadModules();
    setupEventListeners();
    loadUserProgress();
});

// Load modules information
function loadModules() {
    modules = [
        {
            id: 'introduccion-hacking',
            title: 'Introducción al Hacking',
            description: 'Fundamentos y conceptos básicos del hacking ético',
            moduleNumber: 1,
            difficulty: 'Básico',
            duration: '4 horas',
            topics: 5,
            available: true
        },
        {
            id: 'metodologias-estandares',
            title: 'Metodologías y Estándares para Hacking',
            description: 'OSSTMM, OWASP y otras metodologías estándar',
            moduleNumber: 2,
            difficulty: 'Básico',
            duration: '3 horas',
            topics: 4,
            available: true
        },
        {
            id: 'footprinting-reconocimiento',
            title: 'Footprinting y Reconocimiento',
            description: 'Técnicas de reconocimiento e información pasiva',
            moduleNumber: 3,
            difficulty: 'Intermedio',
            duration: '5 horas',
            topics: 6,
            available: true
        },
        {
            id: 'escaneo-dispositivos',
            title: 'Escaneo de Dispositivos',
            description: 'Técnicas y herramientas de escaneo de redes',
            moduleNumber: 4,
            difficulty: 'Intermedio',
            duration: '6 horas',
            topics: 7,
            available: true
        },
        {
            id: 'enumeracion-activos',
            title: 'Enumeración de Activos',
            description: 'Técnicas de enumeración y análisis de activos',
            moduleNumber: 5,
            difficulty: 'Intermedio',
            duration: '4 horas',
            topics: 4,
            available: true
        },
        {
            id: 'escalamiento-privilegios',
            title: 'Escalamiento de Privilegios',
            description: 'Técnicas de escalamiento y mantenimiento de acceso',
            moduleNumber: 6,
            difficulty: 'Avanzado',
            duration: '5 horas',
            topics: 5,
            available: true
        }
    ];
    
    console.log(`📚 Módulos cargados: ${modules.length} módulos disponibles`);
}

// Application initialization
function initializeApp() {
    console.log('🚀 SENA Interactive Guide - Inicializando...');
    
    // Set current year in footer
    const currentYear = new Date().getFullYear();
    const footerYear = document.querySelector('footer .text-white-50');
    if (footerYear) {
        footerYear.textContent = `© ${currentYear} - Guía Interactiva`;
    }
    
    // Initialize tooltips
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
    
    // Initialize animations
    initializeAnimations();
}

// Setup event listeners
function setupEventListeners() {
    // Navigation active state
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Module cards click handler
    document.addEventListener('click', function(e) {
        if (e.target.closest('.module-card')) {
            const moduleCard = e.target.closest('.module-card');
            const moduleId = moduleCard.dataset.moduleId;
            if (moduleId) {
                navigateToModule(moduleId);
            }
        }
    });
}

// Animation initialization
function initializeAnimations() {
    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements with animation class
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease-out';
        observer.observe(el);
    });
}

// Navigation functions
function startLearning() {
    const firstModule = modules[0];
    if (firstModule) {
        navigateToModule(firstModule.id);
    } else {
        showNotification('Los módulos se están cargando...', 'info');
    }
}

function showModules() {
    const modulesSection = document.querySelector('.modules-overview');
    if (modulesSection) {
        modulesSection.scrollIntoView({ behavior: 'smooth' });
    }
}

function navigateToModule(moduleId) {
    const moduleData = modules.find(m => m.id === moduleId);
    if (moduleData) {
        // Save current progress
        updateProgress(moduleId, 'started');
        
        // Navigate to module page
        window.location.href = `modules/${moduleId}/index.html`;
    } else {
        showNotification('Módulo no encontrado', 'error');
    }
}

// Progress management
function loadUserProgress() {
    const savedProgress = localStorage.getItem('sena-hacking-progress');
    if (savedProgress) {
        try {
            progressData = JSON.parse(savedProgress);
            updateProgressDisplay();
        } catch (error) {
            console.error('Error loading progress:', error);
            progressData = {};
        }
    }
}

function updateProgress(moduleId, status, data = {}) {
    if (!progressData[moduleId]) {
        progressData[moduleId] = {
            status: 'not-started',
            progress: 0,
            startedAt: null,
            completedAt: null,
            timeSpent: 0
        };
    }
    
    const moduleProgress = progressData[moduleId];
    
    switch (status) {
        case 'started':
            if (moduleProgress.status === 'not-started') {
                moduleProgress.status = 'in-progress';
                moduleProgress.startedAt = new Date().toISOString();
            }
            break;
        case 'completed':
            moduleProgress.status = 'completed';
            moduleProgress.progress = 100;
            moduleProgress.completedAt = new Date().toISOString();
            break;
        case 'progress':
            moduleProgress.progress = data.progress || 0;
            moduleProgress.status = 'in-progress';
            break;
    }
    
    // Merge additional data
    Object.assign(moduleProgress, data);
    
    // Save to localStorage
    localStorage.setItem('sena-hacking-progress', JSON.stringify(progressData));
    
    // Update display
    updateProgressDisplay();
    
    // Dispatch custom event
    window.dispatchEvent(new CustomEvent('progressUpdated', {
        detail: { moduleId, status, progress: moduleProgress }
    }));
}

function updateProgressDisplay() {
    // Update progress bars in module cards
    Object.keys(progressData).forEach(moduleId => {
        const progressBar = document.querySelector(`[data-module-id="${moduleId}"] .progress-bar`);
        if (progressBar) {
            const progress = progressData[moduleId].progress || 0;
            progressBar.style.width = `${progress}%`;
            progressBar.setAttribute('aria-valuenow', progress);
        }
        
        // Update status badges
        const statusBadge = document.querySelector(`[data-module-id="${moduleId}"] .status-badge`);
        if (statusBadge) {
            const status = progressData[moduleId].status;
            statusBadge.className = `badge status-badge status-${status}`;
            statusBadge.textContent = getStatusText(status);
        }
    });
}

function getStatusText(status) {
    const statusTexts = {
        'not-started': 'No iniciado',
        'in-progress': 'En progreso',
        'completed': 'Completado'
    };
    return statusTexts[status] || 'No iniciado';
}

function getOverallProgress() {
    if (modules.length === 0) return 0;
    
    const totalProgress = modules.reduce((sum, module) => {
        const moduleProgress = progressData[module.id];
        return sum + (moduleProgress ? moduleProgress.progress : 0);
    }, 0);
    
    return Math.round(totalProgress / modules.length);
}

// Notification system
function showNotification(message, type = 'info', duration = 3000) {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification-toast');
    existingNotifications.forEach(notification => notification.remove());
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification-toast alert alert-${type === 'error' ? 'danger' : type} alert-dismissible fade show`;
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        z-index: 9999;
        min-width: 300px;
        box-shadow: 0 4px 20px rgba(0,0,0,0.15);
        border-radius: 10px;
    `;
    
    notification.innerHTML = `
        <div class="d-flex align-items-center">
            <i class="fas fa-${getNotificationIcon(type)} me-2"></i>
            <span>${message}</span>
            <button type="button" class="btn-close ms-auto" data-bs-dismiss="alert"></button>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    // Auto-remove after duration
    if (duration > 0) {
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, duration);
    }
}

function getNotificationIcon(type) {
    const icons = {
        'success': 'check-circle',
        'error': 'exclamation-circle',
        'warning': 'exclamation-triangle',
        'info': 'info-circle'
    };
    return icons[type] || 'info-circle';
}

// Utility functions
function formatTime(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;
    
    if (hours > 0) {
        return `${hours}h ${minutes}m`;
    } else if (minutes > 0) {
        return `${minutes}m ${remainingSeconds}s`;
    } else {
        return `${remainingSeconds}s`;
    }
}

function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('es-ES', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Theme management
function toggleTheme() {
    const currentTheme = document.body.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.body.setAttribute('data-theme', newTheme);
    localStorage.setItem('sena-theme', newTheme);
    
    showNotification(`Tema cambiado a ${newTheme === 'dark' ? 'oscuro' : 'claro'}`, 'success', 2000);
}

function initializeTheme() {
    const savedTheme = localStorage.getItem('sena-theme');
    if (savedTheme) {
        document.body.setAttribute('data-theme', savedTheme);
    }
}

// Export functions for global use
window.startLearning = startLearning;
window.showModules = showModules;
window.navigateToModule = navigateToModule;
window.updateProgress = updateProgress;
window.showNotification = showNotification;
window.toggleTheme = toggleTheme;
window.getOverallProgress = getOverallProgress;
window.progressData = progressData;
window.modules = modules;

// Initialize theme on load
initializeTheme();
