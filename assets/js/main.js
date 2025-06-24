/* ========================================
   MAIN PAGE JAVASCRIPT - HOME
   ======================================== */

// Main page specific functionality
document.addEventListener('DOMContentLoaded', function() {
    // Wait for modules to be loaded before initializing main page
    setTimeout(() => {
        initializeMainPage();
        setupHeroAnimations();
        setupScrollEffects();
        loadStatistics();
    }, 100);
});

// Initialize main page
function initializeMainPage() {
    console.log('🏠 Inicializando página principal...');
    
    // Add animation classes to elements
    addAnimationClasses();
    
    // Setup hero interactions
    setupHeroInteractions();
    
    // Load progress overview
    loadProgressOverview();
}

// Add animation classes to elements
function addAnimationClasses() {
    // Add animation classes to sections
    const sections = document.querySelectorAll('.modules-overview, .learning-path, .features-section');
    sections.forEach(section => {
        section.classList.add('animate-on-scroll');
    });
    
    // Add animation to feature cards
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach((card, index) => {
        card.classList.add('animate-on-scroll');
        card.style.animationDelay = `${index * 0.2}s`;
    });
}

// Setup hero animations
function setupHeroAnimations() {
    const floatingElements = document.querySelectorAll('.floating-item');
    
    // Add hover effects to floating elements
    floatingElements.forEach((element, index) => {
        element.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.2)';
            this.style.background = 'rgba(255, 255, 255, 0.2)';
        });
        
        element.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
            this.style.background = '';
        });
        
        // Add random delay to animations
        element.style.animationDelay = `${index * 2}s`;
    });
    
    // Main shield interaction
    const mainShield = document.querySelector('.main-shield');
    if (mainShield) {
        mainShield.addEventListener('click', function() {
            this.style.animation = 'none';
            setTimeout(() => {
                this.style.animation = '';
            }, 100);
            
            // Trigger pulse animation
            this.classList.add('pulse');
            setTimeout(() => {
                this.classList.remove('pulse');
            }, 1000);
            
            showNotification('¡Bienvenido al mundo del Hacking Ético!', 'success');
        });
    }
}

// Setup hero interactions
function setupHeroInteractions() {
    // Parallax effect for hero background
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const parallax = document.querySelector('.hero-section');
        if (parallax) {
            const speed = 0.5;
            parallax.style.transform = `translateY(${scrolled * speed}px)`;
        }
    });
    
    // Dynamic text animation
    const heroTitle = document.querySelector('.hero-content h1');
    if (heroTitle) {
        animateText(heroTitle);
    }
}

// Animate text typing effect
function animateText(element) {
    const text = element.innerHTML;
    element.innerHTML = '';
    
    let index = 0;
    function typeCharacter() {
        if (index < text.length) {
            element.innerHTML += text.charAt(index);
            index++;
            setTimeout(typeCharacter, 50);
        }
    }
    
    // Start animation after a delay
    setTimeout(typeCharacter, 1000);
}

// Setup scroll effects
function setupScrollEffects() {
    let ticking = false;
    
    function updateOnScroll() {
        const scrolled = window.pageYOffset;
        
        // Update navbar transparency
        const navbar = document.querySelector('.sena-navbar');
        if (navbar) {
            if (scrolled > 100) {
                navbar.style.background = 'rgba(57, 169, 0, 0.95)';
                navbar.style.backdropFilter = 'blur(10px)';
            } else {
                navbar.style.background = '';
                navbar.style.backdropFilter = '';
            }
        }
        
        // Animate progress indicators
        animateProgressBars();
        
        ticking = false;
    }
    
    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(updateOnScroll);
            ticking = true;
        }
    }
    
    window.addEventListener('scroll', requestTick);
}

// Animate progress bars when visible
function animateProgressBars() {
    const progressBars = document.querySelectorAll('.progress-bar');
    
    progressBars.forEach(bar => {
        const rect = bar.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            const targetWidth = bar.getAttribute('aria-valuenow') + '%';
            bar.style.width = targetWidth;
        }
    });
}

// Load statistics
function loadStatistics() {
    const stats = calculateStatistics();
    displayStatistics(stats);
}

// Calculate learning statistics
function calculateStatistics() {
    // Ensure modules is an array
    const modulesList = window.modules || [];
    const totalModules = modulesList.length;
    
    // Ensure progressData exists
    const currentProgressData = window.progressData || {};
    
    const completedModules = Object.values(currentProgressData).filter(p => p.status === 'completed').length;
    const inProgressModules = Object.values(currentProgressData).filter(p => p.status === 'in-progress').length;
    const totalTime = Object.values(currentProgressData).reduce((sum, p) => sum + (p.timeSpent || 0), 0);
    
    // Calculate overall progress
    let overallProgress = 0;
    if (modulesList.length > 0) {
        const totalProgress = modulesList.reduce((sum, module) => {
            const moduleProgress = currentProgressData[module.id];
            return sum + (moduleProgress ? moduleProgress.progress : 0);
        }, 0);
        overallProgress = Math.round(totalProgress / modulesList.length);
    }
    
    return {
        totalModules,
        completedModules,
        inProgressModules,
        totalTime,
        overallProgress,
        completionRate: totalModules > 0 ? Math.round((completedModules / totalModules) * 100) : 0
    };
}

// Display statistics in the UI
function displayStatistics(stats) {
    // Update stats in hero section if elements exist
    const statsContainer = document.querySelector('.hero-stats');
    if (statsContainer) {
        statsContainer.innerHTML = `
            <div class="row text-center">
                <div class="col-md-3">
                    <div class="stat-item">
                        <h3 class="text-white">${stats.totalModules}</h3>
                        <p class="text-white-50">Módulos</p>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="stat-item">
                        <h3 class="text-white">${stats.completedModules}</h3>
                        <p class="text-white-50">Completados</p>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="stat-item">
                        <h3 class="text-white">${stats.overallProgress}%</h3>
                        <p class="text-white-50">Progreso</p>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="stat-item">
                        <h3 class="text-white">${formatTime(stats.totalTime)}</h3>
                        <p class="text-white-50">Tiempo</p>
                    </div>
                </div>
            </div>
        `;
    }
    
    // Update progress indicator
    updateGlobalProgress(stats.overallProgress);
}

// Load progress overview
function loadProgressOverview() {
    // Check if user has started learning
    const currentProgressData = window.progressData || {};
    const hasStarted = Object.keys(currentProgressData).length > 0;
    
    if (hasStarted) {
        showProgressSummary();
    } else {
        showWelcomeMessage();
    }
}

// Show progress summary for returning users
function showProgressSummary() {
    const stats = calculateStatistics();
    
    // Create progress summary element
    const summaryContainer = document.createElement('div');
    summaryContainer.className = 'progress-summary mt-4 p-4 rounded-custom sena-bg-light';
    summaryContainer.innerHTML = `
        <div class="row align-items-center">
            <div class="col-md-8">
                <h5 class="mb-2">Tu Progreso de Aprendizaje</h5>
                <p class="mb-2">Has completado ${stats.completedModules} de ${stats.totalModules} módulos</p>
                <div class="progress mb-2" style="height: 10px;">
                    <div class="progress-bar progress-bar-custom" 
                         style="width: ${stats.overallProgress}%" 
                         role="progressbar">
                    </div>
                </div>
                <small class="text-muted">Progreso general: ${stats.overallProgress}%</small>
            </div>
            <div class="col-md-4 text-end">
                <button class="btn btn-sena-secondary" onclick="showProgressDetails()">
                    <i class="fas fa-chart-line me-2"></i>Ver Detalles
                </button>
            </div>
        </div>
    `;
    
    // Insert after hero content
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.appendChild(summaryContainer);
    }
}

// Show welcome message for new users
function showWelcomeMessage() {
    const welcomeContainer = document.createElement('div');
    welcomeContainer.className = 'welcome-message mt-4 p-4 rounded-custom bg-white shadow-custom';
    welcomeContainer.innerHTML = `
        <div class="row align-items-center">
            <div class="col-md-8">
                <h5 class="sena-text-primary mb-2">
                    <i class="fas fa-graduation-cap me-2"></i>¡Bienvenido al Programa!
                </h5>
                <p class="mb-0">Estás a punto de comenzar un emocionante viaje en el mundo del hacking ético. 
                Nuestro programa te guiará paso a paso desde los conceptos básicos hasta técnicas avanzadas.</p>
            </div>
            <div class="col-md-4 text-end">
                <button class="btn btn-sena-primary" onclick="startLearning()">
                    <i class="fas fa-rocket me-2"></i>¡Empezar Ahora!
                </button>
            </div>
        </div>
    `;
    
    // Insert in modules overview section
    const modulesOverview = document.querySelector('.modules-overview .container');
    if (modulesOverview) {
        modulesOverview.insertBefore(welcomeContainer, modulesOverview.firstChild);
    }
}

// Update global progress indicator
function updateGlobalProgress(progress) {
    // Create or update floating progress indicator
    let progressIndicator = document.getElementById('global-progress-indicator');
    
    if (!progressIndicator && progress > 0) {
        progressIndicator = document.createElement('div');
        progressIndicator.id = 'global-progress-indicator';
        progressIndicator.className = 'global-progress-indicator';
        progressIndicator.innerHTML = `
            <div class="progress-circle">
                <svg width="60" height="60">
                    <circle cx="30" cy="30" r="25" fill="none" stroke="#e9ecef" stroke-width="4"/>
                    <circle cx="30" cy="30" r="25" fill="none" stroke="var(--sena-primary)" 
                            stroke-width="4" stroke-linecap="round"
                            stroke-dasharray="157" stroke-dashoffset="${157 - (157 * progress / 100)}"
                            style="transition: stroke-dashoffset 0.5s ease;"/>
                </svg>
                <div class="progress-text">${progress}%</div>
            </div>
        `;
        
        // Style the indicator
        progressIndicator.style.cssText = `
            position: fixed;
            bottom: 30px;
            right: 30px;
            z-index: 1000;
            background: white;
            border-radius: 50%;
            box-shadow: 0 4px 20px rgba(0,0,0,0.15);
            padding: 10px;
            cursor: pointer;
            transition: all 0.3s ease;
        `;
        
        progressIndicator.addEventListener('click', () => {
            document.querySelector('.modules-overview').scrollIntoView({ behavior: 'smooth' });
        });
        
        progressIndicator.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1)';
        });
        
        progressIndicator.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
        
        document.body.appendChild(progressIndicator);
    } else if (progressIndicator && progress > 0) {
        // Update existing indicator
        const circle = progressIndicator.querySelector('circle[stroke="var(--sena-primary)"]');
        const text = progressIndicator.querySelector('.progress-text');
        
        if (circle) {
            circle.style.strokeDashoffset = 157 - (157 * progress / 100);
        }
        if (text) {
            text.textContent = `${progress}%`;
        }
    }
}

// Show progress details
function showProgressDetails() {
    window.location.href = 'pages/progreso.html';
}

// Interactive elements setup
function setupInteractiveElements() {
    // Add hover effects to module cards
    const moduleCards = document.querySelectorAll('.module-card');
    moduleCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Add click effect to buttons
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Create ripple effect
            const ripple = document.createElement('span');
            ripple.classList.add('ripple');
            this.appendChild(ripple);
            
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
}

// Initialize interactive elements after page load
window.addEventListener('load', setupInteractiveElements);

// Export functions
window.showProgressDetails = showProgressDetails;
