/* ========================================
   PROGRESS PAGE JAVASCRIPT
   ======================================== */

// Progress page initialization
document.addEventListener('DOMContentLoaded', function() {
    initializeProgressPage();
    loadProgressData();
    setupProgressAnimations();
});

// Initialize progress page
function initializeProgressPage() {
    console.log('📊 Inicializando página de progreso...');
    
    // Load modules first - use global function if available
    if (window.loadModules && typeof window.loadModules === 'function') {
        window.loadModules();
    }
    
    // Setup update listener
    window.addEventListener('progressUpdated', handleProgressUpdate);
}

// Load and display progress data
function loadProgressData() {
    // Calculate overall statistics
    const stats = calculateDetailedStatistics();
    
    // Update overall progress display
    updateOverallProgress(stats);
    
    // Update statistics cards
    updateStatisticsCards(stats);
    
    // Load modules progress
    loadModulesProgress();
    
    // Load learning timeline
    loadLearningTimeline();
    
    // Load achievements
    loadAchievements();
}

// Calculate detailed statistics
function calculateDetailedStatistics() {
    const modulesList = window.modules || [];
    const currentProgressData = window.progressData || {};
    
    const totalModules = modulesList.length;
    const moduleProgresses = Object.values(currentProgressData);
    
    const completedModules = moduleProgresses.filter(p => p.status === 'completed').length;
    const inProgressModules = moduleProgresses.filter(p => p.status === 'in-progress').length;
    const notStartedModules = totalModules - completedModules - inProgressModules;
    
    const totalTime = moduleProgresses.reduce((sum, p) => sum + (p.timeSpent || 0), 0);
    const overallProgress = totalModules > 0 ? Math.round((completedModules / totalModules) * 100) : 0;
    
    // Calculate achievements
    const achievements = calculateAchievements(moduleProgresses, completedModules, totalTime);
    
    // Calculate completion rate
    const startedModules = completedModules + inProgressModules;
    const completionRate = startedModules > 0 ? Math.round((completedModules / startedModules) * 100) : 0;
    
    return {
        totalModules,
        completedModules,
        inProgressModules,
        notStartedModules,
        totalTime,
        overallProgress,
        achievements: achievements.length,
        completionRate,
        averageProgress: moduleProgresses.length > 0 ? 
            Math.round(moduleProgresses.reduce((sum, p) => sum + (p.progress || 0), 0) / moduleProgresses.length) : 0,
        studyStreak: calculateStudyStreak(),
        timeThisWeek: calculateTimeThisWeek()
    };
}

// Update overall progress display
function updateOverallProgress(stats) {
    const progressCircle = document.getElementById('overall-progress-circle');
    const progressPercentage = document.getElementById('overall-percentage');
    
    if (progressCircle && progressPercentage) {
        // Animate progress circle
        const progressAngle = (stats.overallProgress / 100) * 360;
        progressCircle.style.setProperty('--progress-angle', `${progressAngle}deg`);
        
        // Animate percentage counter
        animateCounter(progressPercentage, 0, stats.overallProgress, 2000, '%');
    }
}

// Update statistics cards
function updateStatisticsCards(stats) {
    // Completed modules
    const completedElement = document.getElementById('completed-modules');
    if (completedElement) {
        animateCounter(completedElement, 0, stats.completedModules, 1500);
    }
    
    // Total time
    const timeElement = document.getElementById('total-time');
    if (timeElement) {
        animateTimeCounter(timeElement, stats.totalTime);
    }
    
    // Achievements
    const achievementsElement = document.getElementById('achievements');
    if (achievementsElement) {
        animateCounter(achievementsElement, 0, stats.achievements, 1800);
    }
    
    // Completion rate
    const completionElement = document.getElementById('completion-rate');
    if (completionElement) {
        animateCounter(completionElement, 0, stats.completionRate, 2200, '%');
    }
}

// Load modules progress
function loadModulesProgress() {
    const container = document.getElementById('modules-progress-container');
    if (!container) return;
    
    const modulesList = window.modules || [];
    const currentProgressData = window.progressData || {};
    
    container.innerHTML = '';
    
    modulesList.forEach((module, index) => {
        const moduleProgress = currentProgressData[module.id] || { 
            status: 'not-started', 
            progress: 0, 
            timeSpent: 0 
        };
        
        const progressCard = createModuleProgressCard(module, moduleProgress, index);
        container.appendChild(progressCard);
    });
}

// Create module progress card
function createModuleProgressCard(module, progress, index) {
    const col = document.createElement('div');
    col.className = 'col-lg-6 mb-4';
    
    const startedDate = progress.startedAt ? new Date(progress.startedAt).toLocaleDateString('es-ES') : '-';
    const completedDate = progress.completedAt ? new Date(progress.completedAt).toLocaleDateString('es-ES') : '-';
    
    col.innerHTML = `
        <div class="module-progress-card animate-on-scroll" style="animation-delay: ${index * 0.1}s">
            <div class="module-progress-header">
                <div class="module-progress-icon ${module.iconClass}">
                    <i class="${module.icon}"></i>
                </div>
                <div class="module-progress-info">
                    <h5>${module.title}</h5>
                    <small>Estado: <span class="badge status-${progress.status}">${getStatusText(progress.status)}</span></small>
                </div>
            </div>
            
            <div class="progress mb-3" style="height: 10px;">
                <div class="progress-bar progress-bar-custom progress-bar-animated" 
                     style="width: 0%; transition: width 2s ease-in-out;" 
                     data-target-width="${progress.progress}%"
                     role="progressbar" 
                     aria-valuenow="${progress.progress}" 
                     aria-valuemin="0" 
                     aria-valuemax="100">
                </div>
            </div>
            
            <div class="row text-center">
                <div class="col-4">
                    <small class="text-muted d-block">Progreso</small>
                    <strong class="text-primary">${progress.progress}%</strong>
                </div>
                <div class="col-4">
                    <small class="text-muted d-block">Tiempo</small>
                    <strong class="text-secondary">${formatTime(progress.timeSpent || 0)}</strong>
                </div>
                <div class="col-4">
                    <small class="text-muted d-block">Dificultad</small>
                    <span class="badge badge-${getDifficultyColor(module.difficulty)}">${module.difficulty}</span>
                </div>
            </div>
            
            ${progress.status !== 'not-started' ? `
                <hr>
                <div class="row text-center">
                    <div class="col-6">
                        <small class="text-muted d-block">Iniciado</small>
                        <small>${startedDate}</small>
                    </div>
                    <div class="col-6">
                        <small class="text-muted d-block">Completado</small>
                        <small>${completedDate}</small>
                    </div>
                </div>
            ` : ''}
            
            <div class="mt-3">
                <a href="../modules/${module.id}/index.html" class="btn btn-sena-outline btn-sm w-100">
                    <i class="fas fa-${getActionIcon(progress.status)} me-2"></i>
                    ${getActionText(progress.status)}
                </a>
            </div>
        </div>
    `;
    
    return col;
}

// Load learning timeline
function loadLearningTimeline() {
    const timeline = document.getElementById('learning-timeline');
    if (!timeline) return;
    
    // Get timeline events from progress data
    const timelineEvents = generateTimelineEvents();
    
    timeline.innerHTML = '';
    
    if (timelineEvents.length === 0) {
        timeline.innerHTML = `
            <div class="text-center py-5">
                <i class="fas fa-clock fa-3x text-muted mb-3"></i>
                <h5 class="text-muted">No hay actividad aún</h5>
                <p class="text-muted">Comienza tu primer módulo para ver tu historial de aprendizaje</p>
            </div>
        `;
        return;
    }
    
    timelineEvents.forEach((event, index) => {
        const timelineItem = createTimelineItem(event, index);
        timeline.appendChild(timelineItem);
    });
}

// Generate timeline events
function generateTimelineEvents() {
    const events = [];
    
    Object.keys(progressData).forEach(moduleId => {
        const progress = progressData[moduleId];
        const module = modules.find(m => m.id === moduleId);
        
        if (!module) return;
        
        if (progress.startedAt) {
            events.push({
                date: progress.startedAt,
                type: 'started',
                moduleTitle: module.title,
                description: `Iniciaste el módulo de ${module.title}`
            });
        }
        
        if (progress.completedAt) {
            events.push({
                date: progress.completedAt,
                type: 'completed',
                moduleTitle: module.title,
                description: `Completaste el módulo de ${module.title}`,
                timeSpent: progress.timeSpent
            });
        }
    });
    
    // Sort by date (newest first)
    return events.sort((a, b) => new Date(b.date) - new Date(a.date));
}

// Create timeline item
function createTimelineItem(event, index) {
    const timelineItem = document.createElement('div');
    timelineItem.className = 'timeline-item animate-on-scroll';
    timelineItem.style.animationDelay = `${index * 0.2}s`;
    
    const eventDate = new Date(event.date);
    const formattedDate = eventDate.toLocaleDateString('es-ES', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    
    const eventTime = eventDate.toLocaleTimeString('es-ES', {
        hour: '2-digit',
        minute: '2-digit'
    });
    
    timelineItem.innerHTML = `
        <div class="timeline-marker"></div>
        <div class="timeline-content">
            <div class="timeline-date">${formattedDate} - ${eventTime}</div>
            <h6 class="timeline-title">
                <i class="fas fa-${event.type === 'completed' ? 'check-circle text-success' : 'play-circle text-primary'} me-2"></i>
                ${event.moduleTitle}
            </h6>
            <p class="timeline-description">
                ${event.description}
                ${event.timeSpent ? ` en ${formatTime(event.timeSpent)}` : ''}
            </p>
        </div>
    `;
    
    return timelineItem;
}

// Load achievements
function loadAchievements() {
    const container = document.getElementById('achievements-container');
    if (!container) return;
    
    const achievements = getAllAchievements();
    container.innerHTML = '';
    
    achievements.forEach((achievement, index) => {
        const achievementBadge = createAchievementBadge(achievement, index);
        container.appendChild(achievementBadge);
    });
}

// Get all available achievements
function getAllAchievements() {
    const stats = calculateDetailedStatistics();
    
    return [
        {
            id: 'first-module',
            title: 'Primer Paso',
            description: 'Completa tu primer módulo',
            icon: 'fas fa-baby',
            earned: stats.completedModules >= 1,
            progress: Math.min(stats.completedModules, 1)
        },
        {
            id: 'half-way',
            title: 'A Medio Camino',
            description: 'Completa la mitad de los módulos',
            icon: 'fas fa-road',
            earned: stats.completedModules >= Math.ceil(stats.totalModules / 2),
            progress: stats.completedModules / Math.ceil(stats.totalModules / 2)
        },
        {
            id: 'completion',
            title: 'Maestro Hacker',
            description: 'Completa todos los módulos',
            icon: 'fas fa-crown',
            earned: stats.completedModules === stats.totalModules && stats.totalModules > 0,
            progress: stats.totalModules > 0 ? stats.completedModules / stats.totalModules : 0
        },
        {
            id: 'time-master',
            title: 'Dedicación Total',
            description: 'Acumula 20 horas de estudio',
            icon: 'fas fa-clock',
            earned: stats.totalTime >= 20 * 3600,
            progress: Math.min(stats.totalTime / (20 * 3600), 1)
        },
        {
            id: 'fast-learner',
            title: 'Aprendiz Rápido',
            description: 'Completa un módulo en menos de 2 horas',
            icon: 'fas fa-bolt',
            earned: checkFastLearnerAchievement(),
            progress: checkFastLearnerAchievement() ? 1 : 0
        },
        {
            id: 'consistent',
            title: 'Constancia',
            description: 'Estudia 5 días consecutivos',
            icon: 'fas fa-calendar-check',
            earned: stats.studyStreak >= 5,
            progress: Math.min(stats.studyStreak / 5, 1)
        }
    ];
}

// Create achievement badge
function createAchievementBadge(achievement, index) {
    const col = document.createElement('div');
    col.className = 'col-md-4 col-lg-3 mb-4';
    
    col.innerHTML = `
        <div class="achievement-badge ${achievement.earned ? 'earned' : ''} animate-on-scroll" 
             style="animation-delay: ${index * 0.1}s">
            <div class="achievement-icon">
                <i class="${achievement.icon}"></i>
            </div>
            <h6 class="achievement-title">${achievement.title}</h6>
            <p class="achievement-description">${achievement.description}</p>
            
            ${!achievement.earned ? `
                <div class="progress mt-2" style="height: 6px;">
                    <div class="progress-bar bg-secondary" 
                         style="width: ${achievement.progress * 100}%" 
                         role="progressbar">
                    </div>
                </div>
                <small class="text-muted">${Math.round(achievement.progress * 100)}% completado</small>
            ` : `
                <div class="mt-2">
                    <i class="fas fa-check-circle text-success"></i>
                    <small class="text-success ms-1">¡Logro desbloqueado!</small>
                </div>
            `}
        </div>
    `;
    
    return col;
}

// Setup progress animations
function setupProgressAnimations() {
    // Animate progress bars when they come into view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBar = entry.target;
                const targetWidth = progressBar.dataset.targetWidth;
                
                setTimeout(() => {
                    progressBar.style.width = targetWidth;
                }, 500);
                
                observer.unobserve(progressBar);
            }
        });
    }, { threshold: 0.5 });
    
    // Observe all progress bars
    setTimeout(() => {
        document.querySelectorAll('.progress-bar[data-target-width]').forEach(bar => {
            observer.observe(bar);
        });
    }, 1000);
}

// Utility functions
function animateCounter(element, start, end, duration, suffix = '') {
    const range = end - start;
    const increment = range / (duration / 16);
    let current = start;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= end) {
            current = end;
            clearInterval(timer);
        }
        element.textContent = Math.round(current) + suffix;
    }, 16);
}

function animateTimeCounter(element, totalSeconds) {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    
    let displayHours = 0;
    let displayMinutes = 0;
    
    const duration = 2000;
    const steps = 60;
    const hoursIncrement = hours / steps;
    const minutesIncrement = minutes / steps;
    
    const timer = setInterval(() => {
        displayHours += hoursIncrement;
        displayMinutes += minutesIncrement;
        
        if (displayHours >= hours && displayMinutes >= minutes) {
            displayHours = hours;
            displayMinutes = minutes;
            clearInterval(timer);
        }
        
        const formattedTime = `${Math.round(displayHours)}h ${Math.round(displayMinutes)}m`;
        element.textContent = formattedTime;
    }, duration / steps);
}

function calculateAchievements(moduleProgresses, completedModules, totalTime) {
    const achievements = [];
    
    if (completedModules >= 1) achievements.push('first-module');
    if (completedModules >= Math.ceil(modules.length / 2)) achievements.push('half-way');
    if (completedModules === modules.length && modules.length > 0) achievements.push('completion');
    if (totalTime >= 20 * 3600) achievements.push('time-master');
    if (checkFastLearnerAchievement()) achievements.push('fast-learner');
    
    return achievements;
}

function checkFastLearnerAchievement() {
    return Object.values(progressData).some(progress => {
        return progress.status === 'completed' && (progress.timeSpent || 0) < 2 * 3600;
    });
}

function calculateStudyStreak() {
    // This would calculate consecutive study days
    // For now, return a placeholder value
    return 3;
}

function calculateTimeThisWeek() {
    const oneWeekAgo = new Date();
    oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
    
    return Object.values(progressData).reduce((total, progress) => {
        if (progress.startedAt && new Date(progress.startedAt) >= oneWeekAgo) {
            return total + (progress.timeSpent || 0);
        }
        return total;
    }, 0);
}

function handleProgressUpdate(event) {
    // Reload progress data when updated
    loadProgressData();
}

// Export functions
window.loadProgressData = loadProgressData;
