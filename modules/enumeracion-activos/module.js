/* ========================================
   MODULE: ENUMERACIÓN DE ACTIVOS
   ======================================== */

// Global variables for module state
let currentTopicIndex = 0;
let moduleProgress = 0;
let startTime = null;

// Module data based on info.md
const moduleData = {
    id: 'enumeracion-activos',
    title: 'Enumeración de Activos',
    topics: [
        {
            id: 'conceptos-basicos',
            title: 'Conceptos Básicos',
            duration: 45,
            completed: false,
            subtopics: [
                'Definición de Enumeración',
                'Objetivos de la Enumeración',
                'Diferencias con el Escaneo',
                'Marco Legal y Ético',
                'Importancia en el Hacking Ético'
            ]
        },
        {
            id: 'tipos-informacion',
            title: 'Tipos de Información Enumerada',
            duration: 60,
            completed: false,
            subtopics: [
                'Recursos de Red y Compartidos',
                'Usuarios y Grupos',
                'Aplicaciones y Banners',
                'Configuración de Auditoría',
                'Servicios del Sistema'
            ]
        },
        {
            id: 'tecnicas-enumeracion',
            title: 'Técnicas y Tipos de Enumeración',
            duration: 75,
            completed: false,
            subtopics: [
                'Enumeración de NetBIOS',
                'Herramientas nmblookup',
                'Herramientas nbtscan',
                'Enumeración de Cuentas de Usuario',
                'Herramientas de Sysinternals'
            ]
        },
        {
            id: 'herramientas-enumeracion',
            title: 'Herramientas de Enumeración',
            duration: 90,
            completed: false,
            subtopics: [
                'Enum4linux',
                'JXplorer',
                'Symlabs LDAP Browser',
                'NetScanTools Pro',
                'Herramientas Personalizadas'
            ]        }
    ]
};

// ========================================
// SISTEMA UNIVERSAL DE DIAGRAMAS - MÓDULO 5
// ========================================

const UNIVERSAL_DIAGRAM_SYSTEM = {
    // Configuración de todos los diagramas del módulo - Usando diagramas disponibles
    diagrams: [
        { id: 'methodology-diagram', viewBox: '0 0 850 550', topic: 1, title: 'Metodología de Enumeración' },
        { id: 'tools-comparison', viewBox: '0 0 800 450', topic: 2, title: 'Comparación de Herramientas' },
        { id: 'techniques-matrix', viewBox: '0 0 800 600', topic: 3, title: 'Matriz de Técnicas' },
        { id: 'scanning-methodology', viewBox: '0 0 800 600', topic: 4, title: 'Metodología de Escaneo' }
    ],
    
    // Estado del sistema
    isInitialized: false,
    fixAttempts: 0,
    maxAttempts: 5,
    isProcessing: false,
    svgCache: null,
    moduleId: 'enumeracion-activos',

    // Inicializar sistema de diagramas
    async init() {
        if (this.isInitialized || this.isProcessing) {
            console.log('🎯 Universal Diagram System: Ya inicializado o en proceso');
            return;
        }
        
        this.isProcessing = true;
        console.log('🎯 Universal Diagram System: Inicializando para módulo 5...');
        
        // Initialize Icon Fix System if available - con timeout
        if (window.IconFixSystem) {
            try {
                await Promise.race([
                    window.IconFixSystem.init(),
                    new Promise((_, reject) => setTimeout(() => reject(new Error('Timeout')), 3000))
                ]);
                console.log('✅ Icon Fix System initialized from Universal Diagram System');
            } catch (error) {
                console.warn('⚠️ Icon Fix System failed to initialize:', error.message);
            }
        }
        
        // Pre-cargar SVG content
        try {
            this.svgCache = await this.loadSVGContent();
            if (this.svgCache) {
                console.log('✅ Universal Diagram System: SVG content cached');
            }
        } catch (error) {
            console.warn('⚠️ Error pre-cargando SVG:', error);
        }
        
        // Ejecutar correcciones con intervalos controlados
        this.applyFixes();
        setTimeout(() => this.applyFixes(), 1000);
        setTimeout(() => this.applyFixes(), 3000);
          this.isInitialized = true;
        this.isProcessing = false;
    },

    // Cargar diagrama específico - Implementación mejorada basada en escaneo-dispositivos
    async loadDiagram(containerId, diagramId) {
        const container = document.getElementById(containerId);
        if (!container) {
            console.warn(`🔍 Contenedor de diagrama no encontrado: ${containerId}`);
            return false;
        }

        const diagramConfig = this.diagrams.find(d => d.id === diagramId);
        if (!diagramConfig) {
            console.warn(`🔍 Configuración de diagrama no encontrada: ${diagramId}`);
            this.generateFallbackSVG(container, diagramId);
            return false;
        }

        try {
            // Intentar cargar desde el sistema de diagramas universal
            const svgContent = await this.fetchDiagramContent(diagramId);
            
            if (svgContent) {
                container.innerHTML = svgContent;
                this.applyDiagramStyles(container, diagramConfig);
                console.log(`✅ Diagrama cargado: ${diagramId}`);
                return true;
            } else {
                this.generateFallbackSVG(container, diagramId, diagramConfig);
                return false;
            }
        } catch (error) {
            console.warn(`⚠️ Error cargando diagrama ${diagramId}:`, error);
            this.generateFallbackSVG(container, diagramId, diagramConfig);
            return false;
        }
    },

    // Obtener contenido del diagrama
    async fetchDiagramContent(diagramId) {
        const possiblePaths = [
            `../../assets/images/diagrams.svg#${diagramId}`,
            `../../assets/images/diagrams/${this.moduleId}/${diagramId}.svg`,
            `../../assets/images/diagrams/${diagramId}.svg`
        ];

        for (const path of possiblePaths) {
            try {
                if (path.includes('#')) {
                    // SVG symbol from main file
                    const response = await fetch('../../assets/images/diagrams.svg');
                    if (response.ok) {
                        const svgText = await response.text();
                        return this.extractSymbol(svgText, diagramId);
                    }
                } else {
                    // Individual SVG file
                    const response = await fetch(path);
                    if (response.ok) {
                        return await response.text();
                    }
                }
            } catch (error) {
                console.log(`🔍 Intentando ruta: ${path} - No encontrado`);
            }
        }
        return null;
    },

    // Extraer símbolo SVG específico
    extractSymbol(svgContent, symbolId) {
        const parser = new DOMParser();
        const doc = parser.parseFromString(svgContent, 'image/svg+xml');
        const symbol = doc.querySelector(`#${symbolId}`);
        
        if (symbol) {
            return `<svg viewBox="${symbol.getAttribute('viewBox') || '0 0 800 600'}" class="diagram-svg">${symbol.innerHTML}</svg>`;
        }
        return null;
    },

    // Aplicar estilos al diagrama
    applyDiagramStyles(container, config) {
        const svg = container.querySelector('svg');
        if (svg) {
            svg.setAttribute('viewBox', config.viewBox);
            svg.classList.add('diagram-svg', 'responsive-diagram', 'enumeration-diagram');
            svg.setAttribute('data-diagram', config.id);
        }
    },

    // Generar SVG de respaldo específico para enumeración de activos
    generateFallbackSVG(container, diagramId, config = null) {
        const title = config?.title || `Diagrama: ${diagramId}`;
        const viewBox = config?.viewBox || '0 0 800 600';
        
        const fallbackSVG = `
            <svg viewBox="${viewBox}" class="diagram-svg fallback-diagram" data-diagram="${diagramId}">
                <defs>
                    <pattern id="grid-${diagramId}" width="20" height="20" patternUnits="userSpaceOnUse">
                        <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#e0e0e0" stroke-width="0.5"/>
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid-${diagramId})" opacity="0.3"/>                <rect x="10" y="10" width="calc(100% - 20)" height="calc(100% - 20)" 
                      fill="none" stroke="#39A900" stroke-width="3" stroke-dasharray="10,5" rx="15"/>
                <g transform="translate(50%, 50%)">
                    <circle r="40" fill="#39A900" opacity="0.1"/>
                    <text text-anchor="middle" dy="0" class="fallback-title" fill="#39A900" font-size="16" font-weight="600">
                        <tspan x="0" dy="-10">${title}</tspan>
                        <tspan x="0" dy="25" font-size="12" opacity="0.7">Módulo: Enumeración de Activos</tspan>
                    </text>
                </g>
            </svg>
        `;
        
        container.innerHTML = fallbackSVG;
        console.log(`📋 Fallback generado para: ${diagramId}`);
    },

    // Aplicar correcciones a todos los diagramas
    async applyFixes() {
        if (this.isProcessing) {
            console.log('🔧 Universal Diagram System: Corrección ya en proceso, saltando...');
            return;
        }
        
        this.fixAttempts++;
        this.isProcessing = true;
        
        console.log(`🔧 Universal Diagram System: Intento ${this.fixAttempts}/${this.maxAttempts}`);
        
        try {
            const svgElements = document.querySelectorAll('svg[data-diagram]');
            console.log(`🔍 Encontrados ${svgElements.length} diagramas SVG`);
            
            for (const svg of svgElements) {
                const diagramId = svg.getAttribute('data-diagram');
                const diagramConfig = this.diagrams.find(d => d.id === diagramId);
                
                if (diagramConfig && diagramConfig.viewBox) {
                    svg.setAttribute('viewBox', diagramConfig.viewBox);
                    console.log(`✅ ViewBox aplicado a ${diagramId}: ${diagramConfig.viewBox}`);
                }
                
                // Aplicar clases de estilo
                svg.classList.add('diagram-svg', 'responsive-diagram');
            }
            
        } catch (error) {
            console.error('❌ Error en corrección de diagramas:', error);
        } finally {
            this.isProcessing = false;
        }
    },

    // Cargar contenido SVG
    async loadSVGContent() {
        try {
            const response = await fetch('../../assets/images/diagrams.svg');
            if (response.ok) {
                return await response.text();
            }
        } catch (error) {
            console.warn('⚠️ No se pudo cargar diagrams.svg:', error);
        }
        return null;
    }
};

// ========================================
// CONTENT DATA - MÓDULO 5
// ========================================

const contentData = {    'conceptos-basicos': {
        title: 'Conceptos Básicos de Enumeración',
        icon: 'fas fa-lightbulb',
        content: `
            <div class="topic-header">
                <h2 class="text-center">
                    <svg class="topic-icon me-2" width="32" height="32" viewBox="0 0 100 100">
                        <use href="../../assets/images/icons.svg#icon-enumerate"></use>
                    </svg>
                    Conceptos Básicos de Enumeración
                </h2>
                <p class="topic-intro">
                    Comprende los fundamentos de la enumeración de activos y su papel crítico en el proceso de hacking ético.
                </p>
            </div>

            <div class="topic-content-body">
                <h3>Fundamentos de la Enumeración</h3>
                
                <!-- Diagrama de Proceso de Enumeración -->
                <div class="enumeration-flow-diagram mb-4">
                    <h4 class="text-center mb-3">Proceso Completo de Enumeración de Activos</h4>
                    <svg class="w-100" style="max-height: 520px;" viewBox="0 0 100 100">
                        <use href="../../assets/images/diagrams.svg#enumeration-concept-flow"></use>
                    </svg>
                    <p class="text-center text-muted mt-2">
                        <small>Flujo detallado del proceso de enumeración desde el escaneo hasta la explotación</small>
                    </p>
                </div>

                <div class="concept-card">
                    <h4>
                        <svg class="concept-icon me-2" width="24" height="24" viewBox="0 0 100 100">
                            <use href="../../assets/images/icons.svg#icon-definition"></use>
                        </svg>
                        ¿Qué es la Enumeración de Activos?
                    </h4>
                    <p>La enumeración es un proceso sistemático de extracción de información detallada sobre recursos, 
                    usuarios, aplicaciones y configuraciones de un sistema objetivo. Es la fase crítica que sigue al 
                    escaneo de puertos y precede a la explotación, proporcionando el contexto necesario para identificar 
                    vectores de ataque específicos.</p>
                    
                    <div class="info-highlight mt-3">
                        <h6>Objetivos Principales de la Enumeración:</h6>
                        <ul>
                            <li><strong>Identificar usuarios válidos:</strong> Descubrir cuentas de usuario existentes en el sistema</li>
                            <li><strong>Mapear recursos de red:</strong> Localizar recursos compartidos, servicios y aplicaciones</li>
                            <li><strong>Analizar configuraciones:</strong> Examinar políticas de seguridad y configuraciones del sistema</li>
                            <li><strong>Recopilar información organizacional:</strong> Obtener detalles sobre la estructura corporativa</li>
                            <li><strong>Identificar vulnerabilidades:</strong> Encontrar debilidades específicas en servicios y aplicaciones</li>
                        </ul>
                    </div>
                </div>

                <div class="concept-card">
                    <h4>
                        <svg class="concept-icon me-2" width="24" height="24" viewBox="0 0 100 100">
                            <use href="../../assets/images/icons.svg#icon-comparison"></use>
                        </svg>
                        Enumeración vs. Escaneo: Diferencias Clave
                    </h4>
                    
                    <div class="comparison-table mt-3">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="comparison-card scanning">
                                    <h6><i class="fas fa-radar-dish me-2"></i>Escaneo de Puertos</h6>
                                    <p>Identificación inicial de servicios y puertos abiertos.</p>
                                    <div class="comparison-details">
                                        <h6>Características:</h6>
                                        <ul class="small">
                                            <li>Detecta puertos TCP/UDP abiertos</li>
                                            <li>Identifica servicios en ejecución</li>
                                            <li>Obtiene información básica de banners</li>
                                            <li>Determina el estado del firewall</li>
                                            <li>Mapea la topología de red básica</li>
                                        </ul>
                                    </div>
                                    <div class="badge-container">
                                        <span class="badge bg-info">Fase 2</span>
                                        <span class="badge bg-success">Menos intrusivo</span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="comparison-card enumeration">
                                    <h6><i class="fas fa-search-plus me-2"></i>Enumeración</h6>
                                    <p>Extracción detallada de información específica del sistema.</p>
                                    <div class="comparison-details">
                                        <h6>Características:</h6>
                                        <ul class="small">
                                            <li>Extrae listas de usuarios y grupos</li>
                                            <li>Identifica recursos compartidos</li>
                                            <li>Analiza configuraciones de servicios</li>
                                            <li>Obtiene información de aplicaciones</li>
                                            <li>Descubre políticas de seguridad</li>
                                        </ul>
                                    </div>
                                    <div class="badge-container">
                                        <span class="badge bg-warning">Fase 3</span>
                                        <span class="badge bg-danger">Más intrusivo</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="concept-card">
                    <h4>
                        <svg class="concept-icon me-2" width="24" height="24" viewBox="0 0 100 100">
                            <use href="../../assets/images/icons.svg#icon-information"></use>
                        </svg>
                        Tipos de Información Objetivo
                    </h4>
                    
                    <div class="info-categories">
                        <div class="row">
                            <div class="col-md-6 mb-3">
                                <div class="category-card network">
                                    <h6><i class="fas fa-network-wired me-2"></i>Recursos de Red</h6>
                                    <ul class="small">
                                        <li>Carpetas y archivos compartidos</li>
                                        <li>Impresoras de red</li>
                                        <li>Servicios de archivos (SMB, NFS, FTP)</li>
                                        <li>Bases de datos accesibles</li>
                                        <li>Servicios web y APIs</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-md-6 mb-3">
                                <div class="category-card users">
                                    <h6><i class="fas fa-users me-2"></i>Usuarios y Grupos</h6>
                                    <ul class="small">
                                        <li>Cuentas de usuario válidas</li>
                                        <li>Grupos de seguridad y permisos</li>
                                        <li>Políticas de contraseñas</li>
                                        <li>Cuentas administrativas</li>
                                        <li>Cuentas de servicio</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-md-6 mb-3">
                                <div class="category-card applications">
                                    <h6><i class="fas fa-desktop me-2"></i>Aplicaciones y Servicios</h6>
                                    <ul class="small">
                                        <li>Versiones de aplicaciones</li>
                                        <li>Banners de servicios</li>
                                        <li>Configuraciones de software</li>
                                        <li>Módulos y plugins instalados</li>
                                        <li>Servicios del sistema operativo</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-md-6 mb-3">
                                <div class="category-card audit">
                                    <h6><i class="fas fa-clipboard-check me-2"></i>Configuración de Auditoría</h6>
                                    <ul class="small">
                                        <li>Políticas de auditoría activas</li>
                                        <li>Configuraciones de logging</li>
                                        <li>Sistemas de monitoreo</li>
                                        <li>Configuraciones de seguridad</li>
                                        <li>Controles de acceso</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="concept-card">
                    <h4>
                        <svg class="concept-icon me-2" width="24" height="24" viewBox="0 0 100 100">
                            <use href="../../assets/images/icons.svg#icon-phases"></use>
                        </svg>
                        La Enumeración en el Contexto del Hacking Ético
                    </h4>
                    
                    <div class="hacking-phases">
                        <div class="phases-timeline">
                            <div class="phase-item">
                                <div class="phase-number">1</div>
                                <div class="phase-content">
                                    <h6>Reconocimiento</h6>
                                    <p class="small">Recopilación pasiva de información</p>
                                </div>
                            </div>
                            <div class="phase-connector"></div>
                            <div class="phase-item">
                                <div class="phase-number">2</div>
                                <div class="phase-content">
                                    <h6>Escaneo</h6>
                                    <p class="small">Identificación de puertos y servicios</p>
                                </div>
                            </div>
                            <div class="phase-connector"></div>
                            <div class="phase-item current-phase">
                                <div class="phase-number">3</div>
                                <div class="phase-content">
                                    <h6>Enumeración</h6>
                                    <p class="small">Extracción detallada de información</p>
                                </div>
                            </div>
                            <div class="phase-connector"></div>
                            <div class="phase-item">
                                <div class="phase-number">4</div>
                                <div class="phase-content">
                                    <h6>Explotación</h6>
                                    <p class="small">Aprovechamiento de vulnerabilidades</p>
                                </div>
                            </div>
                        </div>
                        
                        <div class="phase-importance mt-3">
                            <div class="alert alert-info">
                                <h6><i class="fas fa-info-circle me-2"></i>Importancia Crítica</h6>
                                <p class="mb-0">La enumeración es la fase que transforma información general en inteligencia accionable. 
                                Sin una enumeración efectiva, las fases posteriores carecen de la precisión necesaria para ser exitosas.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="concept-card">
                    <h4>
                        <svg class="concept-icon me-2" width="24" height="24" viewBox="0 0 100 100">
                            <use href="../../assets/images/icons.svg#icon-ethics"></use>
                        </svg>
                        Marco Legal y Consideraciones Éticas
                    </h4>
                    
                    <div class="ethics-guidelines">
                        <div class="alert alert-danger">
                            <h6><i class="fas fa-exclamation-triangle me-2"></i>Advertencia Legal</h6>
                            <p class="mb-0">La enumeración de sistemas sin autorización explícita constituye una actividad ilegal 
                            en la mayoría de jurisdicciones. Siempre obtén autorización escrita antes de proceder.</p>
                        </div>
                        
                        <div class="legal-framework mt-3">
                            <h6>Requisitos Legales:</h6>
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="requirement-card">
                                        <h6><i class="fas fa-file-contract me-2"></i>Autorización</h6>
                                        <ul class="small">
                                            <li>Contrato formal de penetration testing</li>
                                            <li>Alcance claramente definido</li>
                                            <li>Límites temporales establecidos</li>
                                            <li>Sistemas específicos autorizados</li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="requirement-card">
                                        <h6><i class="fas fa-shield-alt me-2"></i>Responsabilidades</h6>
                                        <ul class="small">
                                            <li>Mantener confidencialidad</li>
                                            <li>Minimizar impacto en operaciones</li>
                                            <li>Documentar todas las actividades</li>
                                            <li>Reportar hallazgos responsablemente</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="best-practices mt-3">
                            <h6>Mejores Prácticas Éticas:</h6>
                            <div class="row">
                                <div class="col-md-6">
                                    <ul class="practice-list">
                                        <li><i class="fas fa-check text-success me-2"></i>Obtener autorización por escrito</li>
                                        <li><i class="fas fa-check text-success me-2"></i>Respetar el alcance definido</li>
                                        <li><i class="fas fa-check text-success me-2"></i>Usar técnicas no destructivas</li>
                                        <li><i class="fas fa-check text-success me-2"></i>Documentar exhaustivamente</li>
                                    </ul>
                                </div>
                                <div class="col-md-6">
                                    <ul class="practice-list">
                                        <li><i class="fas fa-times text-danger me-2"></i>No acceder a datos personales</li>
                                        <li><i class="fas fa-times text-danger me-2"></i>No interrumpir operaciones críticas</li>
                                        <li><i class="fas fa-times text-danger me-2"></i>No compartir información sensible</li>
                                        <li><i class="fas fa-times text-danger me-2"></i>No exceder los límites autorizados</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="topic-quiz mt-4">
                    <h4>
                        <svg class="quiz-icon me-2" width="24" height="24" viewBox="0 0 100 100">
                            <use href="../../assets/images/icons.svg#icon-quiz"></use>
                        </svg>
                        Verifica tu Comprensión
                    </h4>
                    <div class="quiz-question">
                        <p><strong>¿Cuál es la principal diferencia entre escaneo y enumeración?</strong></p>
                        <div class="quiz-options">
                            <label class="quiz-option">
                                <input type="radio" name="q1" value="a">
                                <span>El escaneo es más intrusivo que la enumeración</span>
                            </label>
                            <label class="quiz-option">
                                <input type="radio" name="q1" value="b">
                                <span>La enumeración extrae información más específica y detallada</span>
                            </label>
                            <label class="quiz-option">
                                <input type="radio" name="q1" value="c">
                                <span>No hay diferencias significativas entre ambos procesos</span>
                            </label>
                        </div>
                    </div>
                </div>

                <div class="case-study mt-4">
                    <h4 class="text-center">
                        <svg class="case-icon me-2" width="24" height="24" viewBox="0 0 100 100">
                            <use href="../../assets/images/icons.svg#icon-case-study"></use>
                        </svg>
                        Caso de Estudio: Enumeración en Entorno Corporativo
                    </h4>
                    <div class="case-content">
                        <div class="case-scenario">
                            <h6>📚 Escenario:</h6>
                            <p>Después de completar el escaneo de una red corporativa, has identificado varios servicios 
                            activos incluyendo SMB (puerto 445), LDAP (puerto 389), y HTTP (puerto 80). Ahora necesitas 
                            proceder con la enumeración para obtener información más específica.</p>
                        </div>
                        
                        <div class="case-question mt-3">
                            <h6>❓ Pregunta de Análisis:</h6>
                            <p><strong>¿Qué tipo de información prioritaria deberías buscar durante la enumeración de estos servicios?</strong></p>
                            <div class="case-options">
                                <button class="btn btn-outline-primary case-option" data-case="q1" data-value="a">
                                    A) Solo verificar si los servicios responden
                                </button>
                                <button class="btn btn-outline-primary case-option" data-case="q1" data-value="b">
                                    B) Usuarios válidos, recursos compartidos y configuraciones de aplicaciones web
                                </button>
                                <button class="btn btn-outline-primary case-option" data-case="q1" data-value="c">
                                    C) Únicamente las versiones de los servicios
                                </button>
                            </div>
                            <div class="case-feedback" id="case-q1-feedback" style="display: none;"></div>
                        </div>
                    </div>
                </div>

                <div class="topic-actions mt-4">
                    <button class="btn btn-sena-primary" onclick="completeTopic(0)">
                        <svg class="btn-icon me-2" width="16" height="16" viewBox="0 0 100 100">
                            <use href="../../assets/images/icons.svg#icon-check"></use>
                        </svg>
                        Marcar como Completado
                    </button>
                </div>
            </div>
        `
    },    'tipos-informacion': {
        title: 'Tipos de Información Enumerada por Intrusos',
        icon: 'fas fa-database',
        content: `
            <div class="topic-header">
                <h2 class="text-center">
                    <svg class="topic-icon me-2" width="32" height="32" viewBox="0 0 100 100">
                        <use href="../../assets/images/icons.svg#icon-database"></use>
                    </svg>
                    Tipos de Información Enumerada por Intrusos
                </h2>
                <p class="topic-intro">
                    Los atacantes buscan categorías específicas de información durante la enumeración para mapear la infraestructura objetivo, identificar vulnerabilidades y planificar ataques efectivos. Dominar estos conceptos es esencial tanto para atacar como para defenderse.
                </p>
            </div>

            <div class="topic-content-body">
                <h3>Arquitectura de Información Objetivo</h3>
                
                <!-- Diagrama de Tipos de Información -->
                <div class="information-types-diagram mb-4">
                    <h4 class="text-center mb-3">Taxonomía Completa de Información en Enumeración</h4>
                    <svg class="w-100" style="max-height: 600px;" viewBox="0 0 900 600">
                        <use href="../../assets/images/diagrams.svg#information-types-diagram"></use>
                    </svg>
                    <p class="text-center text-muted mt-2">
                        <small>Categorías estratégicas de información que los atacantes priorizan durante la fase de enumeración</small>
                    </p>
                </div>                <div class="concept-card">
                    <h4>
                        <svg class="concept-icon me-2" width="24" height="24" viewBox="0 0 100 100">
                            <use href="../../assets/images/icons.svg#icon-network-resources"></use>
                        </svg>
                        Recursos de Red y Recursos Compartidos
                    </h4>
                    <p>Los recursos de red compartidos constituyen uno de los objetivos más críticos para los atacantes, ya que proporcionan acceso directo a datos sensibles, sistemas críticos y rutas de escalamiento lateral.</p>
                    
                    <div class="resource-categories">
                        <h5>Taxonomía de Recursos de Red:</h5>
                        <div class="row">
                            <div class="col-md-6">
                                <div class="resource-type">
                                    <h6><i class="fas fa-folder-open me-2 text-primary"></i>Sistemas de Archivos Compartidos</h6>
                                    <div class="resource-details">
                                        <p><strong>Protocolos y Servicios:</strong></p>
                                        <ul class="small">
                                            <li><strong>SMB/CIFS (Windows):</strong> Protocolo nativo de Windows para compartir archivos</li>
                                            <li><strong>NFS (Unix/Linux):</strong> Network File System distribuido</li>
                                            <li><strong>AFP (Apple):</strong> Apple Filing Protocol para macOS</li>
                                            <li><strong>FTP/SFTP:</strong> Protocolos de transferencia de archivos</li>
                                            <li><strong>WebDAV:</strong> Extensión HTTP para gestión de archivos</li>
                                        </ul>
                                        
                                        <div class="resource-enumeration mt-3">
                                            <h6>Técnicas de Enumeración Avanzadas:</h6>
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <div class="enum-method">
                                                        <strong>SMB Null Sessions:</strong>
                                                        <pre class="command-block">smbclient -L //target-ip -N
enum4linux -S target-ip
smbmap -H target-ip -u null</pre>
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <div class="enum-method">
                                                        <strong>Authenticated SMB:</strong>
                                                        <pre class="command-block">smbclient -L //target-ip -U username
smbmap -H target-ip -u username -p password
crackmapexec smb target-ip -u username -p password --shares</pre>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row mt-3">
                                                <div class="col-md-6">
                                                    <div class="enum-method">
                                                        <strong>NFS Enumeration:</strong>
                                                        <pre class="command-block">showmount -e target-ip
nmap --script nfs-showmount target-ip
nmap --script nfs-statfs target-ip</pre>
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <div class="enum-method">
                                                        <strong>Advanced Nmap Scripts:</strong>
                                                        <pre class="command-block">nmap --script smb-enum-shares target-ip
nmap --script smb-enum-users target-ip
nmap --script smb-enum-domains target-ip</pre>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div class="vulnerability-notes mt-3">
                                            <div class="alert alert-danger">
                                                <i class="fas fa-exclamation-triangle me-2"></i>
                                                <strong>Vulnerabilidades Críticas:</strong>
                                                <ul class="small mb-0">
                                                    <li>Recursos compartidos con permisos Everyone</li>
                                                    <li>Archivos de configuración expuestos</li>
                                                    <li>Credenciales hardcodeadas en scripts</li>
                                                    <li>Backups accesibles públicamente</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="col-md-6">
                                <div class="resource-type">
                                    <h6><i class="fas fa-print me-2 text-success"></i>Dispositivos de Red Inteligentes</h6>
                                    <div class="resource-details">
                                        <p><strong>Categorías de Dispositivos:</strong></p>
                                        <ul class="small">
                                            <li><strong>Dispositivos Multifunción:</strong> Impresoras/escáner/fax empresariales</li>
                                            <li><strong>Sistemas de Videovigilancia:</strong> Cámaras IP, NVR, DVR</li>
                                            <li><strong>Dispositivos IoT:</strong> Sensores, actuadores, controladores</li>
                                            <li><strong>Equipos de Telecomunicaciones:</strong> Teléfonos IP, sistemas VoIP</li>
                                            <li><strong>Sistemas de Control Industrial:</strong> SCADA, PLC, HMI</li>
                                        </ul>
                                        
                                        <div class="device-enumeration mt-3">
                                            <h6>Técnicas de Descubrimiento:</h6>
                                            <div class="enum-techniques">
                                                <div class="technique-item">
                                                    <strong>SNMP Enumeration:</strong>
                                                    <pre class="mini-command">snmpwalk -c public -v1 target-ip
onesixtyone -c community.txt target-ip</pre>
                                                </div>
                                                <div class="technique-item">
                                                    <strong>Web Interface Discovery:</strong>
                                                    <pre class="mini-command">nmap -sS -O target-ip --script http-title
nmap --script http-enum target-ip</pre>
                                                </div>
                                                <div class="technique-item">
                                                    <strong>Protocol-Specific Scans:</strong>
                                                    <pre class="mini-command">nmap --script broadcast-dhcp-discover
nmap --script upnp-info target-ip</pre>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div class="security-concerns mt-3">
                                            <div class="alert alert-warning">
                                                <small><i class="fas fa-shield-alt me-2"></i>
                                                <strong>Riesgos de Seguridad:</strong> Credenciales por defecto (admin/admin), firmware desactualizado, protocolos no cifrados, configuraciones inseguras de fábrica.</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="row mt-4">
                            <div class="col-md-6">
                                <div class="resource-type">
                                    <h6><i class="fas fa-database me-2 text-info"></i>Servicios de Base de Datos Empresariales</h6>
                                    <div class="resource-details">
                                        <p><strong>Sistemas de Gestión de Bases de Datos:</strong></p>
                                        <ul class="small">
                                            <li><strong>Microsoft SQL Server:</strong> Puerto 1433/1434, autenticación Windows/SQL</li>
                                            <li><strong>MySQL/MariaDB:</strong> Puerto 3306, usuarios root y aplicación</li>
                                            <li><strong>PostgreSQL:</strong> Puerto 5432, roles y privilegios granulares</li>
                                            <li><strong>Oracle Database:</strong> Puerto 1521, SID y service names</li>
                                            <li><strong>MongoDB:</strong> Puerto 27017, autenticación opcional</li>
                                            <li><strong>Redis:</strong> Puerto 6379, sistemas de caché</li>
                                        </ul>
                                        
                                        <div class="database-enumeration mt-3">
                                            <h6>Técnicas de Enumeración de Bases de Datos:</h6>
                                            <div class="db-enum-grid">
                                                <div class="db-enum-item">
                                                    <strong>SQL Server:</strong>
                                                    <pre class="mini-command">nmap --script ms-sql-info -p 1433 target-ip
nmap --script ms-sql-empty-password target-ip</pre>
                                                </div>
                                                <div class="db-enum-item">
                                                    <strong>MySQL:</strong>
                                                    <pre class="mini-command">nmap --script mysql-info -p 3306 target-ip
nmap --script mysql-empty-password target-ip</pre>
                                                </div>
                                                <div class="db-enum-item">
                                                    <strong>PostgreSQL:</strong>
                                                    <pre class="mini-command">nmap --script pgsql-brute target-ip
psql -h target-ip -U postgres -d template1</pre>
                                                </div>
                                                <div class="db-enum-item">
                                                    <strong>MongoDB:</strong>
                                                    <pre class="mini-command">nmap --script mongodb-info target-ip
mongo target-ip:27017</pre>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div class="database-vulnerabilities mt-3">
                                            <div class="alert alert-danger">
                                                <small><i class="fas fa-bug me-2"></i>
                                                <strong>Vulnerabilidades Comunes:</strong> Credenciales por defecto, bases de datos sin autenticación, privilegios excesivos, inyección SQL, configuraciones inseguras.</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="col-md-6">
                                <div class="resource-type">
                                    <h6><i class="fas fa-cloud me-2 text-warning"></i>Servicios Web y APIs Modernas</h6>
                                    <div class="resource-details">
                                        <p><strong>Tecnologías Web Empresariales:</strong></p>
                                        <ul class="small">
                                            <li><strong>APIs REST:</strong> Endpoints de servicios web modernos</li>
                                            <li><strong>GraphQL:</strong> Lenguajes de consulta y manipulación de datos</li>
                                            <li><strong>SOAP Services:</strong> Protocolos de intercambio estructurado</li>
                                            <li><strong>Microservicios:</strong> Arquitecturas distribuidas</li>
                                            <li><strong>Contenedores:</strong> Docker, Kubernetes, container registries</li>
                                            <li><strong>Paneles Administrativos:</strong> Interfaces de gestión web</li>
                                        </ul>
                                        
                                        <div class="web-enumeration mt-3">
                                            <h6>Técnicas de Enumeración Web:</h6>
                                            <div class="web-enum-methods">
                                                <div class="enum-method-item">
                                                    <strong>Directory Enumeration:</strong>
                                                    <pre class="mini-command">dirb http://target-ip
gobuster dir -u http://target-ip -w wordlist.txt
feroxbuster -u http://target-ip</pre>
                                                </div>
                                                <div class="enum-method-item">
                                                    <strong>Subdomain Discovery:</strong>
                                                    <pre class="mini-command">gobuster dns -d target.com -w subdomains.txt
amass enum -d target.com</pre>
                                                </div>
                                                <div class="enum-method-item">
                                                    <strong>API Enumeration:</strong>
                                                    <pre class="mini-command">nmap --script http-methods target-ip
curl -X OPTIONS http://target-ip/api/</pre>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div class="api-security mt-3">
                                            <div class="alert alert-info">
                                                <small><i class="fas fa-code me-2"></i>
                                                <strong>Puntos de Interés:</strong> Documentación de API expuesta, endpoints sin autenticación, versionado de APIs, parámetros ocultos.</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>                <div class="concept-card">
                    <h4>
                        <svg class="concept-icon me-2" width="24" height="24" viewBox="0 0 100 100">
                            <use href="../../assets/images/icons.svg#icon-users"></use>
                        </svg>
                        Usuarios y Grupos del Sistema
                    </h4>
                    <p>La información sobre usuarios y grupos constituye el núcleo de la inteligencia organizacional, permitiendo mapear la estructura corporativa, identificar objetivos de alto valor y planificar estrategias de escalamiento de privilegios y movimiento lateral.</p>
                    
                    <div class="user-information-architecture">
                        <h5>Arquitectura de Información de Identidades:</h5>
                        
                        <div class="accordion" id="userInfoAdvancedAccordion">
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseAdvancedUserAccounts">
                                        <i class="fas fa-user-tie me-2"></i>Cuentas de Usuario y Perfiles Corporativos
                                    </button>
                                </h2>
                                <div id="collapseAdvancedUserAccounts" class="accordion-collapse collapse show" data-bs-parent="#userInfoAdvancedAccordion">
                                    <div class="accordion-body">
                                        <div class="user-account-categories">
                                            <h6>Categorías Estratégicas de Cuentas:</h6>
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <div class="account-category">
                                                        <h7><i class="fas fa-crown me-2 text-danger"></i>Cuentas de Alto Privilegio</h7>
                                                        <ul class="small">
                                                            <li><strong>Administradores de Dominio:</strong> Control total sobre Active Directory</li>
                                                            <li><strong>Enterprise Admins:</strong> Administradores de bosque completo</li>
                                                            <li><strong>Schema Admins:</strong> Modificación de esquema AD</li>
                                                            <li><strong>Administradores Locales:</strong> Control completo de sistemas individuales</li>
                                                            <li><strong>Root/Sudo Users:</strong> Privilegios máximos en sistemas Unix/Linux</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <div class="account-category">
                                                        <h7><i class="fas fa-cogs me-2 text-primary"></i>Cuentas de Servicio</h7>
                                                        <ul class="small">
                                                            <li><strong>Service Accounts:</strong> Cuentas para procesos automatizados</li>
                                                            <li><strong>MSA/gMSA:</strong> Managed Service Accounts de Windows</li>
                                                            <li><strong>Application Pool Identities:</strong> IIS y servicios web</li>
                                                            <li><strong>Database Service Accounts:</strong> SQL Server, Oracle, MySQL</li>
                                                            <li><strong>System Accounts:</strong> LocalSystem, NetworkService</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row mt-3">
                                                <div class="col-md-6">
                                                    <div class="account-category">
                                                        <h7><i class="fas fa-briefcase me-2 text-success"></i>Cuentas Corporativas</h7>
                                                        <ul class="small">
                                                            <li><strong>Executives/C-Level:</strong> CEO, CTO, CISO, CFO</li>
                                                            <li><strong>IT Management:</strong> IT Directors, System Administrators</li>
                                                            <li><strong>Security Team:</strong> Security Analysts, SOC Personnel</li>
                                                            <li><strong>Department Heads:</strong> Managers de área</li>
                                                            <li><strong>Contractors:</strong> Personal externo con acceso temporal</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <div class="account-category">
                                                        <h7><i class="fas fa-user-slash me-2 text-warning"></i>Cuentas Especiales</h7>
                                                        <ul class="small">
                                                            <li><strong>Disabled Accounts:</strong> Cuentas deshabilitadas pero existentes</li>
                                                            <li><strong>Stale Accounts:</strong> Sin actividad reciente</li>
                                                            <li><strong>Default Accounts:</strong> Guest, Administrator, krbtgt</li>
                                                            <li><strong>Test Accounts:</strong> Para desarrollo y pruebas</li>
                                                            <li><strong>Honeypot Accounts:</strong> Cuentas trampa para detección</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div class="enumeration-methodologies mt-4">
                                            <h6>Metodologías de Enumeración de Usuarios:</h6>
                                            <div class="methodology-tabs">
                                                <div class="row">
                                                    <div class="col-md-4">
                                                        <div class="method-card">
                                                            <h7><i class="fab fa-windows me-2"></i>Active Directory</h7>
                                                            <div class="command-examples">
                                                                <strong>LDAP Queries:</strong>
                                                                <pre class="command-block">ldapsearch -x -h target-ip -s sub -b "dc=domain,dc=com" "(objectClass=user)"
enum4linux -U target-ip
rpcclient -U "" -N target-ip</pre>
                                                                
                                                                <strong>SMB Enumeration:</strong>
                                                                <pre class="command-block">crackmapexec smb target-ip -u '' -p '' --users
smbclient -L //target-ip -N</pre>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-4">
                                                        <div class="method-card">
                                                            <h7><i class="fab fa-linux me-2"></i>Unix/Linux Systems</h7>
                                                            <div class="command-examples">
                                                                <strong>Local Enumeration:</strong>
                                                                <pre class="command-block">cat /etc/passwd
getent passwd
ypcat passwd</pre>
                                                                
                                                                <strong>Remote Enumeration:</strong>
                                                                <pre class="command-block">finger @target-ip
rwho target-ip
rusers target-ip</pre>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-4">
                                                        <div class="method-card">
                                                            <h7><i class="fas fa-network-wired me-2"></i>Network Services</h7>
                                                            <div class="command-examples">
                                                                <strong>SNMP User Info:</strong>
                                                                <pre class="command-block">snmpwalk -c public target-ip 1.3.6.1.4.1.77.1.2.25
onesixtyone -c community.txt target-ip</pre>
                                                                
                                                                <strong>Web Applications:</strong>
                                                                <pre class="command-block">wfuzz -c -w usernames.txt --sc 200 http://target-ip/user/FUZZ
ffuf -w wordlist.txt -u http://target-ip/users/FUZZ</pre>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseAdvancedGroups">
                                        <i class="fas fa-users-cog me-2"></i>Grupos de Seguridad y Estructura Organizacional
                                    </button>
                                </h2>
                                <div id="collapseAdvancedGroups" class="accordion-collapse collapse" data-bs-parent="#userInfoAdvancedAccordion">
                                    <div class="accordion-body">
                                        <div class="group-hierarchy">
                                            <h6>Jerarquía de Grupos Empresariales:</h6>
                                            <div class="group-matrix">
                                                <div class="row">
                                                    <div class="col-md-6">
                                                        <div class="group-tier">
                                                            <h7><i class="fas fa-shield-alt me-2 text-danger"></i>Grupos de Seguridad Críticos</h7>
                                                            <div class="critical-groups">
                                                                <div class="group-item">
                                                                    <strong>Domain Admins:</strong>
                                                                    <p class="small">Control completo sobre el dominio Active Directory</p>
                                                                    <pre class="mini-command">net group "Domain Admins" /domain</pre>
                                                                </div>
                                                                <div class="group-item">
                                                                    <strong>Enterprise Admins:</strong>
                                                                    <p class="small">Administradores de toda la infraestructura</p>
                                                                    <pre class="mini-command">net group "Enterprise Admins" /domain</pre>
                                                                </div>
                                                                <div class="group-item">
                                                                    <strong>Backup Operators:</strong>
                                                                    <p class="small">Privilegios de backup y restauración</p>
                                                                    <pre class="mini-command">net localgroup "Backup Operators"</pre>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <div class="group-tier">
                                                            <h7><i class="fas fa-building me-2 text-primary"></i>Grupos Departamentales</h7>
                                                            <div class="department-groups">
                                                                <ul class="small">
                                                                    <li><strong>IT-Support:</strong> Personal de soporte técnico</li>
                                                                    <li><strong>Finance-Team:</strong> Departamento financiero</li>
                                                                    <li><strong>HR-Department:</strong> Recursos humanos</li>
                                                                    <li><strong>Marketing-Group:</strong> Equipo de marketing</li>
                                                                    <li><strong>Development-Team:</strong> Desarrolladores</li>
                                                                    <li><strong>Security-Team:</strong> Equipo de seguridad</li>
                                                                </ul>
                                                                
                                                                <div class="enum-commands mt-2">
                                                                    <strong>Enumeración de Grupos:</strong>
                                                                    <pre class="mini-command">enum4linux -G target-ip
ldapsearch -x -h target-ip "(objectClass=group)"</pre>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                
                                                <div class="row mt-3">
                                                    <div class="col-md-6">
                                                        <div class="group-tier">
                                                            <h7><i class="fas fa-key me-2 text-warning"></i>Grupos de Acceso Especial</h7>
                                                            <div class="special-access-groups">
                                                                <ul class="small">
                                                                    <li><strong>VPN-Users:</strong> Acceso remoto VPN</li>
                                                                    <li><strong>RDP-Users:</strong> Acceso escritorio remoto</li>
                                                                    <li><strong>Database-Admins:</strong> Administradores de BD</li>
                                                                    <li><strong>Server-Operators:</strong> Operadores de servidor</li>
                                                                    <li><strong>Print-Operators:</strong> Gestión de impresión</li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <div class="group-tier">
                                                            <h7><i class="fas fa-project-diagram me-2 text-info"></i>Grupos de Proyectos</h7>
                                                            <div class="project-groups">
                                                                <ul class="small">
                                                                    <li><strong>Project-Alpha:</strong> Equipo de proyecto específico</li>
                                                                    <li><strong>Client-XYZ:</strong> Acceso a recursos de cliente</li>
                                                                    <li><strong>Contractors:</strong> Personal externo temporal</li>
                                                                    <li><strong>Interns:</strong> Estudiantes en prácticas</li>
                                                                    <li><strong>Temp-Staff:</strong> Personal temporal</li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div class="group-enumeration-advanced mt-4">
                                            <h6>Técnicas Avanzadas de Enumeración de Grupos:</h6>
                                            <div class="advanced-techniques">
                                                <div class="technique-card">
                                                    <h7>PowerShell Active Directory Module:</h7>
                                                    <pre class="command-block">Get-ADGroup -Filter * | Select-Object Name,GroupScope,GroupCategory
Get-ADGroupMember -Identity "Domain Admins"
Get-ADUser -Filter * -Properties MemberOf</pre>
                                                </div>
                                                <div class="technique-card">
                                                    <h7>BloodHound Data Collection:</h7>
                                                    <pre class="command-block">SharpHound.exe -c All
bloodhound-python -u username -p password -ns target-ip -d domain.com</pre>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseAdvancedPasswordPolicies">
                                        <i class="fas fa-lock me-2"></i>Políticas de Contraseñas y Configuraciones de Seguridad
                                    </button>
                                </h2>
                                <div id="collapseAdvancedPasswordPolicies" class="accordion-collapse collapse" data-bs-parent="#userInfoAdvancedAccordion">
                                    <div class="accordion-body">
                                        <div class="password-policy-analysis">
                                            <h6>Análisis Completo de Políticas de Seguridad:</h6>
                                            <div class="policy-categories">
                                                <div class="row">
                                                    <div class="col-md-6">
                                                        <div class="policy-section">
                                                            <h7><i class="fas fa-key me-2 text-success"></i>Configuraciones de Contraseña</h7>
                                                            <div class="policy-details">
                                                                <p><strong>Parámetros Críticos:</strong></p>
                                                                <ul class="small">
                                                                    <li><strong>Longitud mínima:</strong> Requisito de caracteres mínimos</li>
                                                                    <li><strong>Complejidad:</strong> Mayúsculas, minúsculas, números, símbolos</li>
                                                                    <li><strong>Edad máxima:</strong> Tiempo de vida de contraseñas</li>
                                                                    <li><strong>Edad mínima:</strong> Tiempo antes de cambio permitido</li>
                                                                    <li><strong>Historial:</strong> Número de contraseñas recordadas</li>
                                                                    <li><strong>Reversible encryption:</strong> Almacenamiento de contraseñas</li>
                                                                </ul>
                                                                
                                                                <div class="policy-enumeration">
                                                                    <strong>Enumeración de Políticas:</strong>
                                                                    <pre class="mini-command">enum4linux -P target-ip
rpcclient -U "" -N target-ip
srvinfo</pre>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <div class="policy-section">
                                                            <h7><i class="fas fa-user-lock me-2 text-info"></i>Políticas de Bloqueo de Cuenta</h7>
                                                            <div class="policy-details">
                                                                <p><strong>Configuraciones de Bloqueo:</strong></p>
                                                                <ul class="small">
                                                                    <li><strong>Threshold:</strong> Intentos fallidos antes del bloqueo</li>
                                                                    <li><strong>Duration:</strong> Tiempo de bloqueo de cuenta</li>
                                                                    <li><strong>Reset Counter:</strong> Tiempo de reseteo del contador</li>
                                                                    <li><strong>Administrator lockout:</strong> Bloqueo de cuentas admin</li>
                                                                    <li><strong>Bad password count:</strong> Contador actual de fallos</li>
                                                                </ul>
                                                                
                                                                <div class="attack-implications mt-2">
                                                                    <div class="alert alert-warning">
                                                                        <small><i class="fas fa-exclamation-triangle me-2"></i>
                                                                        <strong>Implicaciones para Ataques:</strong> Políticas débiles permiten ataques de fuerza bruta, políticas muy estrictas pueden causar DoS.</small>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                
                                                <div class="row mt-3">
                                                    <div class="col-md-12">
                                                        <div class="policy-section">
                                                            <h7><i class="fas fa-chart-line me-2 text-primary"></i>Análisis de Fortaleza de Políticas</h7>
                                                            <div class="policy-strength-matrix">
                                                                <table class="table table-sm">
                                                                    <thead>
                                                                        <tr>
                                                                            <th>Configuración</th>
                                                                            <th>Débil</th>
                                                                            <th>Moderada</th>
                                                                            <th>Fuerte</th>
                                                                            <th>Implicación para Atacante</th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                        <tr>
                                                                            <td>Longitud mínima</td>
                                                                            <td class="text-danger">&lt; 8 caracteres</td>
                                                                            <td class="text-warning">8-12 caracteres</td>
                                                                            <td class="text-success">&gt; 12 caracteres</td>
                                                                            <td>Tiempo de cracking variable</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>Umbral de bloqueo</td>
                                                                            <td class="text-danger">&gt; 10 intentos</td>
                                                                            <td class="text-warning">5-10 intentos</td>
                                                                            <td class="text-success">&lt; 5 intentos</td>
                                                                            <td>Ventana para ataques de fuerza bruta</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>Complejidad</td>
                                                                            <td class="text-danger">No requerida</td>
                                                                            <td class="text-warning">Básica</td>
                                                                            <td class="text-success">Completa</td>
                                                                            <td>Efectividad de ataques de diccionario</td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="concept-card">
                    <h4>
                        <svg class="concept-icon me-2" width="24" height="24" viewBox="0 0 100 100">
                            <use href="../../assets/images/icons.svg#icon-applications"></use>
                        </svg>
                        Aplicaciones y Banners
                    </h4>
                    <p>La información sobre aplicaciones, servicios y sus banners es crucial para identificar vulnerabilidades específicas y vectores de ataque dirigidos.</p>
                    
                    <div class="application-info-types">
                        <h5>Categorías de Información de Aplicaciones:</h5>
                        
                        <div class="row">
                            <div class="col-md-6 mb-4">
                                <div class="app-category">
                                    <h6><i class="fas fa-code-branch me-2 text-primary"></i>Versiones y Software</h6>
                                    <div class="app-details">
                                        <p><strong>Información Crítica:</strong></p>
                                        <ul class="small">
                                            <li><strong>Versiones exactas:</strong> Software y números de versión específicos</li>
                                            <li><strong>Builds y releases:</strong> Información detallada de compilación</li>
                                            <li><strong>Parches aplicados:</strong> Nivel de actualización del sistema</li>
                                            <li><strong>Módulos instalados:</strong> Extensiones y componentes adicionales</li>
                                            <li><strong>Dependencias:</strong> Librerías y frameworks utilizados</li>
                                        </ul>
                                        
                                        <div class="version-detection mt-3">
                                            <h7>Técnicas de Detección:</h7>
                                            <pre class="mini-command">nmap -sV target-ip
nmap --script banner target-ip</pre>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="col-md-6 mb-4">
                                <div class="app-category">
                                    <h6><i class="fas fa-flag me-2 text-success"></i>Banners de Servicios</h6>
                                    <div class="app-details">
                                        <p><strong>Tipos de Banners:</strong></p>
                                        <ul class="small">
                                            <li><strong>HTTP Headers:</strong> Información del servidor web</li>
                                            <li><strong>SSH Banners:</strong> Versión del servidor SSH</li>
                                            <li><strong>FTP Banners:</strong> Información del servidor FTP</li>
                                            <li><strong>SMTP Banners:</strong> Detalles del servidor de correo</li>
                                            <li><strong>Database Banners:</strong> Información de bases de datos</li>
                                        </ul>
                                        
                                        <div class="banner-examples mt-3">
                                            <h7>Ejemplos de Banner Grabbing:</h7>
                                            <pre class="mini-command">telnet target-ip 80
GET / HTTP/1.1

nc target-ip 22</pre>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="application-vulnerabilities mt-4">
                            <h5>Identificación de Vulnerabilidades por Aplicación:</h5>
                            <div class="vuln-matrix">
                                <div class="row">
                                    <div class="col-md-4">
                                        <div class="vuln-category">
                                            <h6><i class="fas fa-globe me-2 text-info"></i>Servidores Web</h6>
                                            <div class="service-vulns">
                                                <div class="service-item">
                                                    <strong>Apache HTTP Server</strong>
                                                    <ul class="small">
                                                        <li>CVE por versión específica</li>
                                                        <li>Módulos vulnerables</li>
                                                        <li>Configuraciones por defecto</li>
                                                    </ul>
                                                </div>
                                                <div class="service-item">
                                                    <strong>Microsoft IIS</strong>
                                                    <ul class="small">
                                                        <li>Vulnerabilidades de versión</li>
                                                        <li>Extensiones inseguras</li>
                                                        <li>Configuraciones erróneas</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div class="col-md-4">
                                        <div class="vuln-category">
                                            <h6><i class="fas fa-database me-2 text-warning"></i>Bases de Datos</h6>
                                            <div class="service-vulns">
                                                <div class="service-item">
                                                    <strong>MySQL/MariaDB</strong>
                                                    <ul class="small">
                                                        <li>Versiones con vulnerabilidades</li>
                                                        <li>Credenciales por defecto</li>
                                                        <li>Privilegios excesivos</li>
                                                    </ul>
                                                </div>
                                                <div class="service-item">
                                                    <strong>Microsoft SQL Server</strong>
                                                    <ul class="small">
                                                        <li>xp_cmdshell habilitado</li>
                                                        <li>Cuentas sa sin contraseña</li>
                                                        <li>Servicios con privilegios altos</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div class="col-md-4">
                                        <div class="vuln-category">
                                            <h6><i class="fas fa-envelope me-2 text-danger"></i>Servicios de Correo</h6>
                                            <div class="service-vulns">
                                                <div class="service-item">
                                                    <strong>Exchange Server</strong>
                                                    <ul class="small">
                                                        <li>Vulnerabilidades de RCE</li>
                                                        <li>Configuraciones de autenticación</li>
                                                        <li>APIs web expuestas</li>
                                                    </ul>
                                                </div>
                                                <div class="service-item">
                                                    <strong>Postfix/Sendmail</strong>
                                                    <ul class="small">
                                                        <li>Configuraciones de relay abierto</li>
                                                        <li>Vulnerabilidades de versión</li>
                                                        <li>Filtros de spam débiles</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="concept-card">
                    <h4>
                        <svg class="concept-icon me-2" width="24" height="24" viewBox="0 0 100 100">
                            <use href="../../assets/images/icons.svg#icon-audit"></use>
                        </svg>
                        Configuración de Auditoría
                    </h4>
                    <p>La información sobre configuraciones de auditoría y monitoreo es vital para entender las capacidades de detección del objetivo y planificar técnicas de evasión.</p>
                    
                    <div class="audit-configuration-types">
                        <h5>Aspectos de la Configuración de Auditoría:</h5>
                        
                        <div class="audit-categories">
                            <div class="row">
                                <div class="col-md-6 mb-4">
                                    <div class="audit-category">
                                        <h6><i class="fas fa-clipboard-list me-2 text-primary"></i>Políticas de Auditoría Activas</h6>
                                        <div class="audit-details">
                                            <p><strong>Eventos Monitoreados:</strong></p>
                                            <ul class="small">
                                                <li><strong>Inicios de sesión:</strong> Exitosos y fallidos</li>
                                                <li><strong>Acceso a objetos:</strong> Archivos y recursos</li>
                                                <li><strong>Cambios de privilegios:</strong> Elevación de permisos</li>
                                                <li><strong>Modificaciones del sistema:</strong> Cambios de configuración</li>
                                                <li><strong>Acceso a red:</strong> Conexiones entrantes y salientes</li>
                                            </ul>
                                            
                                            <div class="audit-enumeration mt-3">
                                                <h7>Técnicas de Enumeración:</h7>
                                                <pre class="mini-command">auditpol /get /category:*
cat /etc/audit/auditd.conf</pre>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="col-md-6 mb-4">
                                    <div class="audit-category">
                                        <h6><i class="fas fa-file-alt me-2 text-success"></i>Configuraciones de Logging</h6>
                                        <div class="audit-details">
                                            <p><strong>Sistemas de Registro:</strong></p>
                                            <ul class="small">
                                                <li><strong>Windows Event Logs:</strong> Security, System, Application</li>
                                                <li><strong>Syslog:</strong> Registros centralizados Unix/Linux</li>
                                                <li><strong>Application Logs:</strong> Registros específicos de aplicaciones</li>
                                                <li><strong>Web Server Logs:</strong> Access y error logs</li>
                                                <li><strong>Database Logs:</strong> Registros de transacciones</li>
                                            </ul>
                                            
                                            <div class="log-locations mt-3">
                                                <h7>Ubicaciones Comunes:</h7>
                                                <pre class="mini-command">C:\\Windows\\System32\\winevt\\Logs\\
/var/log/
/var/log/syslog</pre>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="row">
                                <div class="col-md-6 mb-4">
                                    <div class="audit-category">
                                        <h6><i class="fas fa-eye me-2 text-info"></i>Sistemas de Monitoreo</h6>
                                        <div class="audit-details">
                                            <p><strong>Herramientas de Vigilancia:</strong></p>
                                            <ul class="small">
                                                <li><strong>SIEM (Security Information and Event Management):</strong> Splunk, QRadar, ArcSight</li>
                                                <li><strong>IDS/IPS:</strong> Snort, Suricata, sistemas de detección</li>
                                                <li><strong>EDR (Endpoint Detection and Response):</strong> CrowdStrike, SentinelOne</li>
                                                <li><strong>Network Monitoring:</strong> Wireshark, ntopng, PRTG</li>
                                                <li><strong>File Integrity Monitoring:</strong> AIDE, Tripwire</li>
                                            </ul>
                                            
                                            <div class="detection-indicators mt-3">
                                                <div class="alert alert-warning">
                                                    <small><i class="fas fa-shield-alt me-2"></i>
                                                    <strong>Indicadores de Monitoreo Activo:</strong> Respuestas rápidas a conexiones, patrones de tráfico monitoreados, alerts automatizados.</small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="col-md-6 mb-4">
                                    <div class="audit-category">
                                        <h6><i class="fas fa-shield-alt me-2 text-warning"></i>Controles de Seguridad</h6>
                                        <div class="audit-details">
                                            <p><strong>Medidas de Protección:</strong></p>
                                            <ul class="small">
                                                <li><strong>Firewalls:</strong> Reglas y configuraciones de filtrado</li>
                                                <li><strong>Antivirus/Anti-malware:</strong> Soluciones de protección endpoint</li>
                                                <li><strong>DLP (Data Loss Prevention):</strong> Prevención de fuga de datos</li>
                                                <li><strong>Access Controls:</strong> Políticas de control de acceso</li>
                                                <li><strong>Encryption:</strong> Cifrado de datos en reposo y tránsito</li>
                                            </ul>
                                            
                                            <div class="security-assessment mt-3">
                                                <h7>Evaluación de Controles:</h7>
                                                <pre class="mini-command">nmap --script firewall-bypass target-ip
nmap --script ssl-enum-ciphers target-ip</pre>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="strategic-analysis mt-4">
                    <h4 class="text-center">
                        <svg class="strategy-icon me-2" width="24" height="24" viewBox="0 0 100 100">
                            <use href="../../assets/images/icons.svg#icon-strategy"></use>
                        </svg>
                        Análisis Estratégico para Atacantes
                    </h4>
                    
                    <div class="strategic-content">
                        <div class="strategy-matrix">
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="strategy-section">
                                        <h6><i class="fas fa-bullseye me-2 text-primary"></i>Priorización de Objetivos</h6>
                                        <div class="priority-order">
                                            <ol class="priority-list">
                                                <li><strong>Cuentas Privilegiadas:</strong> Administradores, cuentas de servicio con privilegios altos</li>
                                                <li><strong>Sistemas Críticos:</strong> Controladores de dominio, servidores de base de datos</li>
                                                <li><strong>Datos Sensibles:</strong> Información financiera, datos personales, propiedad intelectual</li>
                                                <li><strong>Puntos de Acceso:</strong> VPNs, accesos remotos, conexiones externas</li>
                                                <li><strong>Servicios Vulnerables:</strong> Aplicaciones sin parches, configuraciones por defecto</li>
                                            </ol>
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="col-md-6">
                                    <div class="strategy-section">
                                        <h6><i class="fas fa-route me-2 text-success"></i>Rutas de Ataque</h6>
                                        <div class="attack-paths">
                                            <div class="path-item">
                                                <strong>Escalamiento Horizontal:</strong>
                                                <p class="small">Moverse lateralmente entre sistemas con el mismo nivel de privilegios</p>
                                            </div>
                                            <div class="path-item">
                                                <strong>Escalamiento Vertical:</strong>
                                                <p class="small">Obtener privilegios más altos en el sistema actual</p>
                                            </div>
                                            <div class="path-item">
                                                <strong>Persistencia:</strong>
                                                <p class="small">Mantener acceso a largo plazo sin detección</p>
                                            </div>
                                            <div class="path-item">
                                                <strong>Exfiltración:</strong>
                                                <p class="small">Extraer datos valiosos del entorno comprometido</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="topic-quiz mt-4">
                    <h4>
                        <svg class="quiz-icon me-2" width="24" height="24" viewBox="0 0 100 100">
                            <use href="../../assets/images/icons.svg#icon-quiz"></use>
                        </svg>
                        Verifica tu Comprensión
                    </h4>
                    <div class="quiz-question">
                        <p><strong>¿Cuál de las siguientes categorías de información es más valiosa para un atacante en la fase inicial de enumeración?</strong></p>
                        <div class="quiz-options">
                            <label class="quiz-option">
                                <input type="radio" name="q1" value="a">
                                <span>Configuraciones de auditoría detalladas</span>
                            </label>
                            <label class="quiz-option">
                                <input type="radio" name="q1" value="b">
                                <span>Cuentas de usuario válidas y recursos de red compartidos</span>
                            </label>
                            <label class="quiz-option">
                                <input type="radio" name="q1" value="c">
                                <span>Únicamente banners de aplicaciones</span>
                            </label>
                        </div>
                    </div>
                </div>

                <div class="case-study mt-4">
                    <h4 class="text-center">
                        <svg class="case-icon me-2" width="24" height="24" viewBox="0 0 100 100">
                            <use href="../../assets/images/icons.svg#icon-case-study"></use>
                        </svg>
                        Caso de Estudio: Enumeración en Entorno Empresarial
                    </h4>
                    <div class="case-content">
                        <div class="case-scenario">
                            <h6>📚 Escenario:</h6>
                            <p>Durante una evaluación de seguridad, has identificado un servidor Windows Server 2019 con varios servicios activos: 
                            SMB (445), LDAP (389), RDP (3389), HTTP (80) y MSSQL (1433). Tu objetivo es obtener la máxima información posible 
                            sobre usuarios, recursos y configuraciones de seguridad.</p>
                        </div>
                        
                        <div class="case-question mt-3">
                            <h6>❓ Pregunta de Análisis:</h6>
                            <p><strong>¿Cuál sería la secuencia más efectiva para enumerar información de este servidor?</strong></p>
                            <div class="case-options">
                                <button class="btn btn-outline-primary case-option" data-case="q1" data-value="a">
                                    A) SMB shares → Usuarios LDAP → Base de datos → Políticas de seguridad
                                </button>
                                <button class="btn btn-outline-primary case-option" data-case="q1" data-value="b">
                                    B) Banners de servicios → Usuarios → Recursos compartidos → Configuraciones
                                </button>
                                <button class="btn btn-outline-primary case-option" data-case="q1" data-value="c">
                                    C) Ataque directo a la base de datos sin enumeración previa
                                </button>
                            </div>
                            <div class="case-feedback" id="case-q1-feedback" style="display: none;"></div>
                        </div>
                    </div>
                </div>

                <div class="topic-actions mt-4">
                    <button class="btn btn-sena-primary" onclick="completeTopic(1)">
                        <svg class="btn-icon me-2" width="16" height="16" viewBox="0 0 100 100">
                            <use href="../../assets/images/icons.svg#icon-check"></use>
                        </svg>
                        Marcar como Completado
                    </button>
                </div>
            </div>
        `
    },    'tecnicas-enumeracion': {
        title: 'Técnicas y Tipos de Enumeración',
        icon: 'fas fa-tools',
        content: `
            <div class="topic-header">
                <h2 class="text-center">
                    <svg class="topic-icon me-2" width="32" height="32" viewBox="0 0 100 100">
                        <use href="../../assets/images/icons.svg#icon-techniques"></use>
                    </svg>
                    Técnicas y Tipos de Enumeración
                </h2>
                <p class="topic-intro">
                    Las técnicas de enumeración han evolucionado para proporcionar métodos especializados de extracción de información crítica. Dominar estas técnicas es fundamental para realizar evaluaciones de seguridad efectivas y exhaustivas.
                </p>
            </div>

            <div class="topic-content-body">
                <h3>Técnicas Principales de Enumeración</h3>
                
                <!-- Diagrama de Flujo de Técnicas de Enumeración -->
                <div class="enumeration-techniques-diagram mb-4">
                    <h4 class="text-center mb-3">Flujo de Proceso de Técnicas de Enumeración</h4>
                    <svg class="w-100" style="max-height: 650px;" viewBox="0 0 900 650">
                        <use href="../../assets/images/diagrams.svg#techniques-workflow"></use>
                    </svg>
                    <p class="text-center text-muted mt-2">
                        <small>Metodología sistemática de aplicación de técnicas de enumeración especializadas</small>
                    </p>
                </div>

                <div class="concept-card">
                    <h4>
                        <svg class="concept-icon me-2" width="24" height="24" viewBox="0 0 100 100">
                            <use href="../../assets/images/icons.svg#icon-netbios"></use>
                        </svg>
                        Enumeración de NetBIOS
                    </h4>
                    <p>NetBIOS (Network Basic Input/Output System) es un protocolo fundamental en redes Windows que proporciona servicios de sesión, nombres y datagramas, ofreciendo múltiples vectores de información crítica.</p>
                    
                    <div class="netbios-overview">
                        <h5>Arquitectura NetBIOS y Objetivos de Enumeración:</h5>
                        <div class="row">
                            <div class="col-md-6">
                                <div class="netbios-component">
                                    <h6><i class="fas fa-network-wired me-2 text-primary"></i>Servicios NetBIOS Core</h6>
                                    <div class="service-details">
                                        <ul class="small">
                                            <li><strong>NetBIOS Name Service (NBT-NS):</strong> Puerto 137/UDP - Resolución de nombres</li>
                                            <li><strong>NetBIOS Datagram Service:</strong> Puerto 138/UDP - Comunicación sin conexión</li>
                                            <li><strong>NetBIOS Session Service:</strong> Puerto 139/TCP - Establecimiento de sesiones</li>
                                            <li><strong>SMB over NetBIOS:</strong> Compartición de archivos e impresoras</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="col-md-6">
                                <div class="netbios-component">
                                    <h6><i class="fas fa-database me-2 text-success"></i>Información Extraíble</h6>
                                    <div class="information-types">
                                        <ul class="small">
                                            <li><strong>Computer Names:</strong> Identificadores únicos de máquinas</li>
                                            <li><strong>Workgroup/Domain:</strong> Información de estructura organizacional</li>
                                            <li><strong>User Sessions:</strong> Usuarios activos y sesiones establecidas</li>
                                            <li><strong>Shared Resources:</strong> Carpetas y impresoras compartidas</li>
                                            <li><strong>Service Information:</strong> Servicios específicos en ejecución</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="netbios-tools mt-4">
                        <h5>Herramientas Especializadas de Enumeración NetBIOS:</h5>
                        
                        <div class="accordion" id="netbiosToolsAccordion">
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNmblookup">
                                        <i class="fas fa-search me-2"></i>nmblookup - Consultas NetBIOS Name Service
                                    </button>
                                </h2>
                                <div id="collapseNmblookup" class="accordion-collapse collapse show" data-bs-parent="#netbiosToolsAccordion">
                                    <div class="accordion-body">
                                        <div class="tool-comprehensive">
                                            <p>Herramienta fundamental para consultar el servicio de nombres NetBIOS y realizar reconocimiento de red.</p>
                                            
                                            <div class="command-categories">
                                                <div class="row">
                                                    <div class="col-md-6">
                                                        <div class="command-category">
                                                            <h6><i class="fas fa-broadcast-tower me-2"></i>Consultas Básicas</h6>
                                                            <div class="command-examples">
                                                                <div class="command-item">
                                                                    <strong>Consulta de nombre específico:</strong>
                                                                    <pre class="command-block">nmblookup COMPUTERNAME</pre>
                                                                    <small class="text-muted">Resuelve nombre NetBIOS a dirección IP</small>
                                                                </div>
                                                                <div class="command-item">
                                                                    <strong>Consulta inversa de IP:</strong>
                                                                    <pre class="command-block">nmblookup -A 192.168.1.100</pre>
                                                                    <small class="text-muted">Obtiene información NetBIOS de una IP</small>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    
                                                    <div class="col-md-6">
                                                        <div class="command-category">
                                                            <h6><i class="fas fa-globe me-2"></i>Consultas de Red</h6>
                                                            <div class="command-examples">
                                                                <div class="command-item">
                                                                    <strong>Master Browser discovery:</strong>
                                                                    <pre class="command-block">nmblookup -M WORKGROUP</pre>
                                                                    <small class="text-muted">Encuentra el navegador maestro</small>
                                                                </div>
                                                                <div class="command-item">
                                                                    <strong>Listar todos los nombres:</strong>
                                                                    <pre class="command-block">nmblookup '*'</pre>
                                                                    <small class="text-muted">Enumera todos los nombres en la red</small>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            <div class="output-interpretation mt-3">
                                                <h6>Interpretación de Resultados:</h6>
                                                <div class="output-example">
                                                    <pre class="output-block">querying SERVIDOR01 on 192.168.1.255
192.168.1.100 SERVIDOR01&lt;00&gt;
192.168.1.100 SERVIDOR01&lt;03&gt;
192.168.1.100 SERVIDOR01&lt;20&gt;
192.168.1.100 WORKGROUP&lt;00&gt;
192.168.1.100 WORKGROUP&lt;1e&gt;</pre>
                                                    <div class="interpretation-guide mt-2">
                                                        <small>
                                                            <strong>&lt;00&gt;:</strong> Estación de trabajo | 
                                                            <strong>&lt;03&gt;:</strong> Servicio de mensajería | 
                                                            <strong>&lt;20&gt;:</strong> Servidor de archivos | 
                                                            <strong>&lt;1e&gt;:</strong> Navegador principal
                                                        </small>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNbtscan">
                                        <i class="fas fa-radar-dish me-2"></i>nbtscan - Escáner NetBIOS Avanzado
                                    </button>
                                </h2>
                                <div id="collapseNbtscan" class="accordion-collapse collapse" data-bs-parent="#netbiosToolsAccordion">
                                    <div class="accordion-body">
                                        <div class="tool-comprehensive">
                                            <p>Escáner especializado para enumeración masiva de hosts NetBIOS con capacidades avanzadas de análisis.</p>
                                            
                                            <div class="nbtscan-features">
                                                <div class="row">
                                                    <div class="col-md-6">
                                                        <div class="feature-set">
                                                            <h6><i class="fas fa-tachometer-alt me-2 text-primary"></i>Capacidades de Escaneo</h6>
                                                            <div class="scanning-options">
                                                                <div class="scan-option">
                                                                    <strong>Escaneo de rango IP:</strong>
                                                                    <pre class="command-block">nbtscan 192.168.1.1-254</pre>
                                                                    <small>Escanea rango consecutivo de direcciones</small>
                                                                </div>
                                                                <div class="scan-option">
                                                                    <strong>Escaneo de subred CIDR:</strong>
                                                                    <pre class="command-block">nbtscan 192.168.1.0/24</pre>
                                                                    <small>Utiliza notación CIDR para subredes</small>
                                                                </div>
                                                                <div class="scan-option">
                                                                    <strong>Escaneo desde archivo:</strong>
                                                                    <pre class="command-block">nbtscan -f targets.txt</pre>
                                                                    <small>Lee objetivos desde archivo de texto</small>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    
                                                    <div class="col-md-6">
                                                        <div class="feature-set">
                                                            <h6><i class="fas fa-cogs me-2 text-success"></i>Opciones Avanzadas</h6>
                                                            <div class="advanced-options">
                                                                <div class="option-item">
                                                                    <strong>Modo verbose detallado:</strong>
                                                                    <pre class="command-block">nbtscan -v 192.168.1.0/24</pre>
                                                                    <small>Información extendida de cada host</small>
                                                                </div>
                                                                <div class="option-item">
                                                                    <strong>Timeout personalizado:</strong>
                                                                    <pre class="command-block">nbtscan -t 2000 192.168.1.0/24</pre>
                                                                    <small>Timeout de 2 segundos por host</small>
                                                                </div>
                                                                <div class="option-item">
                                                                    <strong>Salida estructurada:</strong>
                                                                    <pre class="command-block">nbtscan -r 192.168.1.0/24 > scan.txt</pre>
                                                                    <small>Formato separado por tabulaciones</small>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            <div class="practical-example mt-4">
                                                <h6>Ejemplo Práctico Completo:</h6>
                                                <div class="practical-scenario">
                                                    <div class="scenario-command">
                                                        <pre class="command-block">nbtscan -v -s : 192.168.1.0/24 | grep -v "Host not found"</pre>
                                                    </div>
                                                    <div class="expected-output">
                                                        <strong>Salida esperada:</strong>
                                                        <pre class="output-block">192.168.1.10:WORKSTATION01:CORP:00:U
192.168.1.15:SERVER01:CORP:20:G
192.168.1.20:DC01:CORP:1c:G
192.168.1.25:PRINTER01:CORP:03:U</pre>
                                                    </div>
                                                    <div class="output-explanation">
                                                        <small><strong>Leyenda:</strong> IP:Nombre:Grupo:Tipo:Flags (U=Único, G=Grupo)</small>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="concept-card">
                    <h4>
                        <svg class="concept-icon me-2" width="24" height="24" viewBox="0 0 100 100">
                            <use href="../../assets/images/icons.svg#icon-user-enum"></use>
                        </svg>
                        Enumeración de Cuentas de Usuario
                    </h4>
                    <p>La enumeración de usuarios es una técnica crítica para identificar cuentas válidas, políticas de seguridad y vectores de ataque potenciales en sistemas objetivo.</p>
                    
                    <div class="user-enumeration-overview">
                        <h5>Metodologías de Enumeración de Usuarios:</h5>
                        <div class="enumeration-methodologies">
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="methodology-category">
                                        <h6><i class="fas fa-search-plus me-2 text-primary"></i>Técnicas Pasivas</h6>
                                        <div class="passive-techniques">
                                            <ul class="technique-list">
                                                <li><strong>OSINT de empleados:</strong> LinkedIn, directorios corporativos</li>
                                                <li><strong>Análisis de metadatos:</strong> Documentos públicos con información de autor</li>
                                                <li><strong>Búsquedas en redes sociales:</strong> Perfiles de empleados</li>
                                                <li><strong>Listas de distribución:</strong> Grupos públicos y foros</li>
                                                <li><strong>Registros DNS:</strong> subdominios con patrones de usuarios</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="col-md-6">
                                    <div class="methodology-category">
                                        <h6><i class="fas fa-crosshairs me-2 text-warning"></i>Técnicas Activas</h6>
                                        <div class="active-techniques">
                                            <ul class="technique-list">
                                                <li><strong>Consultas LDAP:</strong> Enumeración de directorio activo</li>
                                                <li><strong>SMB enumeration:</strong> Consultas RPC y NetBIOS</li>
                                                <li><strong>SNMP community strings:</strong> Información de gestión</li>
                                                <li><strong>Web application enumeration:</strong> Formularios de login</li>
                                                <li><strong>Email validation:</strong> Verificación de buzones existentes</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="sysinternals-section mt-4">
                        <h5>Suite Sysinternals - Herramientas de Administración Avanzada:</h5>
                        <p>Las herramientas de Sysinternals, desarrolladas por Microsoft, proporcionan capacidades de enumeración profunda en entornos Windows.</p>
                        
                        <div class="sysinternals-tools">
                            <div class="row">
                                <div class="col-md-6 mb-4">
                                    <div class="tool-detailed">
                                        <h6><i class="fas fa-users me-2 text-primary"></i>PsLoggedOn</h6>
                                        <p class="tool-description">Identifica usuarios conectados localmente y remotamente, incluyendo sesiones activas de recursos compartidos.</p>
                                        
                                        <div class="tool-usage">
                                            <h7>Opciones de Uso:</h7>
                                            <div class="usage-examples">
                                                <div class="usage-item">
                                                    <strong>Usuarios locales conectados:</strong>
                                                    <pre class="command-block">psloggedon</pre>
                                                    <small>Muestra usuarios del sistema local</small>
                                                </div>
                                                <div class="usage-item">
                                                    <strong>Usuarios remotos específicos:</strong>
                                                    <pre class="command-block">psloggedon \\\\server01</pre>
                                                    <small>Enumera usuarios en sistema remoto</small>
                                                </div>
                                                <div class="usage-item">
                                                    <strong>Solo recursos compartidos:</strong>
                                                    <pre class="command-block">psloggedon -x \\\\server01</pre>
                                                    <small>Excluye usuarios locales, solo remotos</small>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div class="security-implications">
                                            <div class="alert alert-info">
                                                <small><i class="fas fa-info-circle me-2"></i>
                                                <strong>Valor de Seguridad:</strong> Identifica objetivos de alto valor y patrones de uso de recursos compartidos.</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="col-md-6 mb-4">
                                    <div class="tool-detailed">
                                        <h6><i class="fas fa-id-card me-2 text-success"></i>PsGetSid</h6>
                                        <p class="tool-description">Obtiene el Security Identifier (SID) de usuarios y equipos, crucial para entender la estructura de seguridad.</p>
                                        
                                        <div class="tool-usage">
                                            <h7>Aplicaciones Prácticas:</h7>
                                            <div class="usage-examples">
                                                <div class="usage-item">
                                                    <strong>SID de usuario específico:</strong>
                                                    <pre class="command-block">psgetsid \\\\server01 usuario</pre>
                                                    <small>Obtiene SID de usuario específico</small>
                                                </div>
                                                <div class="usage-item">
                                                    <strong>SID de equipo:</strong>
                                                    <pre class="command-block">psgetsid \\\\server01</pre>
                                                    <small>SID del equipo y dominio</small>
                                                </div>
                                                <div class="usage-item">
                                                    <strong>Traducción SID a nombre:</strong>
                                                    <pre class="command-block">psgetsid S-1-5-21-xxx-xxx-xxx-1001</pre>
                                                    <small>Resuelve SID a nombre de usuario</small>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div class="sid-interpretation">
                                            <h7>Interpretación de SIDs:</h7>
                                            <div class="sid-structure">
                                                <pre class="structure-example">S-1-5-21-domain-domain-domain-RID
S: Literal
1: Revision
5: Identifier Authority (NT Authority)
21: Subauthority (Domain)
RID: Relative Identifier (Usuario/Grupo)</pre>
                                                <small class="text-muted">Los RIDs estándar incluyen: 500 (Administrator), 501 (Guest), 512 (Domain Admins)</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="row">
                                <div class="col-md-6 mb-4">
                                    <div class="tool-detailed">
                                        <h6><i class="fas fa-folder-open me-2 text-info"></i>PsFile</h6>
                                        <p class="tool-description">Enumera archivos abiertos remotamente, revelando patrones de uso y archivos sensibles en uso.</p>
                                        
                                        <div class="tool-usage">
                                            <h7>Capacidades de Enumeración:</h7>
                                            <div class="usage-examples">
                                                <div class="usage-item">
                                                    <strong>Archivos abiertos remotamente:</strong>
                                                    <pre class="command-block">psfile \\\\fileserver</pre>
                                                    <small>Lista todos los archivos abiertos remotamente</small>
                                                </div>
                                                <div class="usage-item">
                                                    <strong>Archivos de usuario específico:</strong>
                                                    <pre class="command-block">psfile \\\\fileserver | findstr "usuario"</pre>
                                                    <small>Filtra archivos de usuario específico</small>
                                                </div>
                                                <div class="usage-item">
                                                    <strong>Cerrar archivo remoto:</strong>
                                                    <pre class="command-block">psfile \\\\fileserver -c 1234</pre>
                                                    <small>Cierra archivo por ID (requiere privilegios)</small>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div class="intelligence-value">
                                            <div class="alert alert-warning">
                                                <small><i class="fas fa-lightbulb me-2"></i>
                                                <strong>Inteligencia Obtenida:</strong> Patrones de uso, documentos sensibles activos, usuarios más activos.</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="col-md-6 mb-4">
                                    <div class="tool-detailed">
                                        <h6><i class="fas fa-tasks me-2 text-warning"></i>PsList</h6>
                                        <p class="tool-description">Proporciona información detallada de procesos locales y remotos, incluyendo líneas de comando y usuarios propietarios.</p>
                                        
                                        <div class="tool-usage">
                                            <h7>Opciones de Análisis:</h7>
                                            <div class="usage-examples">
                                                <div class="usage-item">
                                                    <strong>Procesos con detalles:</strong>
                                                    <pre class="command-block">pslist -x \\\\server01</pre>
                                                    <small>Información extendida de procesos</small>
                                                </div>
                                                <div class="usage-item">
                                                    <strong>Procesos por usuario:</strong>
                                                    <pre class="command-block">pslist \\\\server01 | findstr "administrator"</pre>
                                                    <small>Procesos ejecutados por administrador</small>
                                                </div>
                                                <div class="usage-item">
                                                    <strong>Árbol de procesos:</strong>
                                                    <pre class="command-block">pslist -t \\\\server01</pre>
                                                    <small>Vista jerárquica de procesos</small>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div class="process-analysis">
                                            <h7>Análisis de Procesos Críticos:</h7>
                                            <div class="critical-processes">
                                                <ul class="small">
                                                    <li><strong>lsass.exe:</strong> Proceso de autenticación local</li>
                                                    <li><strong>winlogon.exe:</strong> Proceso de inicio de sesión</li>
                                                    <li><strong>services.exe:</strong> Controlador de servicios</li>
                                                    <li><strong>explorer.exe:</strong> Shell de usuario activo</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="topic-quiz mt-4">
                    <h4>
                        <svg class="quiz-icon me-2" width="24" height="24" viewBox="0 0 100 100">
                            <use href="../../assets/images/icons.svg#icon-quiz"></use>
                        </svg>
                        Verifica tu Comprensión
                    </h4>
                    <div class="quiz-question">
                        <p><strong>¿Cuál es la principal diferencia entre nmblookup y nbtscan?</strong></p>
                        <div class="quiz-options">
                            <label class="quiz-option">
                                <input type="radio" name="q8" value="a">
                                <span>nmblookup es más rápido que nbtscan</span>
                            </label>
                            <label class="quiz-option">
                                <input type="radio" name="q8" value="b">
                                <span>nbtscan puede escanear múltiples hosts simultáneamente</span>
                            </label>
                            <label class="quiz-option">
                                <input type="radio" name="q8" value="c">
                                <span>nmblookup solo funciona en Linux</span>
                            </label>
                        </div>
                    </div>
                    
                    <div class="quiz-question mt-3">
                        <p><strong>¿Qué herramienta de Sysinternals es más útil para identificar usuarios activos en recursos compartidos?</strong></p>
                        <div class="quiz-options">
                            <label class="quiz-option">
                                <input type="radio" name="q9" value="a">
                                <span>PsGetSid</span>
                            </label>
                            <label class="quiz-option">
                                <input type="radio" name="q9" value="b">
                                <span>PsLoggedOn</span>
                            </label>
                            <label class="quiz-option">
                                <input type="radio" name="q9" value="c">
                                <span>PsList</span>
                            </label>
                        </div>
                    </div>
                </div>

                <div class="case-study mt-4">
                    <h4 class="text-center">
                        <svg class="case-icon me-2" width="24" height="24" viewBox="0 0 100 100">
                            <use href="../../assets/images/icons.svg#icon-case-study"></use>
                        </svg>
                        Caso de Estudio: Enumeración de Dominio Windows
                    </h4>
                    <div class="case-content">
                        <div class="case-scenario">
                            <h6>📚 Escenario:</h6>
                            <p>Has identificado un servidor Windows (192.168.10.50) que parece ser un controlador de dominio. Necesitas enumerar usuarios, grupos y recursos compartidos para tu evaluación de seguridad.</p>
                        </div>
                        
                        <div class="case-question mt-3">
                            <h6>❓ Pregunta de Análisis:</h6>
                            <p><strong>¿Cuál sería la secuencia más efectiva de comandos para enumerar información completa?</strong></p>
                            <div class="case-options">
                                <button class="btn btn-outline-primary case-option" data-case="q5" data-value="a">
                                    A) nbtscan → enum4linux → rpcclient → smbclient
                                </button>
                                <button class="btn btn-outline-primary case-option" data-case="q5" data-value="b">
                                    B) nmap port scan → ldapsearch → psloggedon
                                </button>
                                <button class="btn btn-outline-primary case-option" data-case="q5" data-value="c">
                                    C) nmblookup → snmpwalk → smtp-user-enum
                                </button>
                            </div>
                            <div class="case-feedback" id="case-q5-feedback" style="display: none;"></div>
                        </div>
                    </div>
                </div>

                <div class="topic-actions mt-4">
                    <button class="btn btn-sena-primary" onclick="completeTopic(2)">
                        <svg class="btn-icon me-2" width="16" height="16" viewBox="0 0 100 100">
                            <use href="../../assets/images/icons.svg#icon-check"></use>
                        </svg>
                        Marcar como Completado
                    </button>
                </div>
            </div>
        `
    },    'herramientas-enumeracion': {
        title: 'Herramientas de Enumeración',
        icon: 'fas fa-toolbox',
        content: `
            <div class="topic-header">
                <h2 class="text-center">
                    <svg class="topic-icon me-2" width="32" height="32" viewBox="0 0 100 100">
                        <use href="../../assets/images/icons.svg#icon-tools"></use>
                    </svg>
                    Herramientas de Enumeración
                </h2>
                <p class="topic-intro">
                    Las herramientas de enumeración han evolucionado para proporcionar capacidades especializadas en la extracción de información detallada de sistemas, servicios y redes. Dominar estas herramientas es fundamental para realizar evaluaciones de seguridad exhaustivas y precisas.
                </p>
            </div>

            <div class="topic-content-body">
                <h3>Herramientas Principales de Enumeración</h3>
                
                <!-- Diagrama de Flujo de Herramientas de Enumeración -->
                <div class="enumeration-tools-diagram mb-4">
                    <h4 class="text-center mb-3">Flujo de Proceso de Herramientas de Enumeración</h4>
                    <svg class="w-100" style="max-height: 400px;" viewBox="0 0 800 400">
                        <use href="../../assets/images/diagrams.svg#enumeration-tools-flow"></use>
                    </svg>
                    <p class="text-center text-muted mt-2">
                        <small>Proceso sistemático de enumeración usando herramientas especializadas</small>
                    </p>
                </div>

                <div class="concept-card">
                    <h4>
                        <svg class="concept-icon me-2" width="24" height="24" viewBox="0 0 100 100">
                            <use href="../../assets/images/icons.svg#icon-enum4linux"></use>
                        </svg>
                        Enum4linux
                    </h4>
                    <p>Enum4linux es una herramienta de enumeración para sistemas Linux/Unix que extrae información de sistemas Windows y Samba a través de conexiones null, proporcionando un enfoque sistemático para la recopilación de datos.</p>
                    
                    <div class="enum4linux-features">
                        <h5>Capacidades Principales de Enum4linux:</h5>
                        <div class="row">
                            <div class="col-md-6">
                                <div class="feature-section">
                                    <h6><i class="fas fa-users me-2 text-primary"></i>Enumeración de Usuarios y Grupos</h6>
                                    <div class="command-examples">
                                        <div class="command-item">
                                            <code>enum4linux -U 192.168.1.100</code>
                                            <small>Enumerar solo usuarios</small>
                                        </div>
                                        <div class="command-item">
                                            <code>enum4linux -G 192.168.1.100</code>
                                            <small>Enumerar solo grupos</small>
                                        </div>
                                        <div class="command-item">
                                            <code>enum4linux -r 192.168.1.100</code>
                                            <small>Enumerar usuarios por RID cycling</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="col-md-6">
                                <div class="feature-section">
                                    <h6><i class="fas fa-folder-open me-2 text-success"></i>Recursos Compartidos</h6>
                                    <div class="command-examples">
                                        <div class="command-item">
                                            <code>enum4linux -S 192.168.1.100</code>
                                            <small>Enumerar shares</small>
                                        </div>
                                        <div class="command-item">
                                            <code>enum4linux -s /usr/share/enum4linux/share-list.txt 192.168.1.100</code>
                                            <small>Brute force shares</small>
                                        </div>
                                        <div class="command-item">
                                            <code>enum4linux -S -u "guest" 192.168.1.100</code>
                                            <small>Con usuario guest</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="row mt-3">
                            <div class="col-md-6">
                                <div class="feature-section">
                                    <h6><i class="fas fa-shield-alt me-2 text-warning"></i>Políticas de Contraseñas</h6>
                                    <div class="command-examples">
                                        <div class="command-item">
                                            <code>enum4linux -P 192.168.1.100</code>
                                            <small>Obtener política de contraseñas</small>
                                        </div>
                                        <div class="command-item">
                                            <code>enum4linux -a 192.168.1.100</code>
                                            <small>Enumeración completa (incluye políticas)</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="col-md-6">
                                <div class="feature-section">
                                    <h6><i class="fas fa-print me-2 text-info"></i>Información del Sistema</h6>
                                    <div class="command-examples">
                                        <div class="command-item">
                                            <code>enum4linux -o 192.168.1.100</code>
                                            <small>Información del OS</small>
                                        </div>
                                        <div class="command-item">
                                            <code>enum4linux -i 192.168.1.100</code>
                                            <small>Obtener información de impresoras</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="enum4linux-advanced mt-4">
                        <h5>Técnicas Avanzadas con Enum4linux:</h5>
                        <div class="advanced-techniques">
                            <div class="technique-item">
                                <h6><i class="fas fa-key me-2"></i>Enumeración con Credenciales</h6>
                                <pre class="command-block">enum4linux -u administrator -p password123 -a 192.168.1.100</pre>
                                <p>Utiliza credenciales válidas para obtener información más detallada.</p>
                            </div>
                            
                            <div class="technique-item">
                                <h6><i class="fas fa-list-ol me-2"></i>RID Cycling Avanzado</h6>
                                <pre class="command-block">enum4linux -r -u "guest" -p "" 192.168.1.100</pre>
                                <p>Enumera usuarios mediante RID cycling con conexión null.</p>
                            </div>
                            
                            <div class="technique-item">
                                <h6><i class="fas fa-file-export me-2"></i>Output Detallado</h6>
                                <pre class="command-block">enum4linux -v -a 192.168.1.100 | tee enum4linux-output.txt</pre>
                                <p>Genera salida verbose y guarda resultados para análisis posterior.</p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="alert alert-info mt-3">
                        <h6><i class="fas fa-lightbulb me-2"></i>Consejos de Uso:</h6>
                        <ul class="mb-0">
                            <li>Siempre comenzar con enumeración básica (-a) para obtener una visión general</li>
                            <li>Usar credenciales cuando estén disponibles para mayor profundidad</li>
                            <li>Combinar con otras herramientas para verificar y ampliar resultados</li>
                            <li>Documentar todos los hallazgos para análisis posterior</li>
                        </ul>
                    </div>
                </div>

                <div class="concept-card">
                    <h4>
                        <svg class="concept-icon me-2" width="24" height="24" viewBox="0 0 100 100">
                            <use href="../../assets/images/icons.svg#icon-jxplorer"></use>
                        </svg>
                        JXplorer
                    </h4>
                    <p>JXplorer es un navegador LDAP multiplataforma con interfaz gráfica que permite explorar directorios LDAP de forma intuitiva, ofreciendo capacidades avanzadas de búsqueda y navegación.</p>
                    
                    <div class="jxplorer-capabilities">
                        <h5>Capacidades de JXplorer:</h5>
                        <div class="row">
                            <div class="col-md-12">
                                <div class="capability-grid">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="capability-item">
                                                <h6><i class="fas fa-window-maximize me-2 text-primary"></i>Interfaz Gráfica Avanzada</h6>
                                                <ul class="capability-list">
                                                    <li>Vista en árbol jerárquica del directorio</li>
                                                    <li>Panel de detalles de atributos</li>
                                                    <li>Editor de consultas LDAP integrado</li>
                                                    <li>Visualizador de esquemas</li>
                                                </ul>
                                            </div>
                                        </div>
                                        
                                        <div class="col-md-6">
                                            <div class="capability-item">
                                                <h6><i class="fas fa-search me-2 text-success"></i>Búsqueda Avanzada</h6>
                                                <ul class="capability-list">
                                                    <li>Filtros LDAP personalizados</li>
                                                    <li>Búsquedas de texto completo</li>
                                                    <li>Consultas guardadas</li>
                                                    <li>Exportación de resultados</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div class="row mt-3">
                                        <div class="col-md-6">
                                            <div class="capability-item">
                                                <h6><i class="fas fa-plug me-2 text-warning"></i>Conectividad</h6>
                                                <ul class="capability-list">
                                                    <li>Soporte LDAP/LDAPS</li>
                                                    <li>Autenticación Simple y SASL</li>
                                                    <li>Conexiones SSL/TLS</li>
                                                    <li>Múltiples servidores simultáneos</li>
                                                </ul>
                                            </div>
                                        </div>
                                        
                                        <div class="col-md-6">
                                            <div class="capability-item">
                                                <h6><i class="fas fa-edit me-2 text-info"></i>Gestión de Datos</h6>
                                                <ul class="capability-list">
                                                    <li>Edición de entradas LDAP</li>
                                                    <li>Importación/Exportación LDIF</li>
                                                    <li>Copia y pegado de entradas</li>
                                                    <li>Operaciones por lotes</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="jxplorer-usage mt-4">
                        <h5>Proceso de Enumeración con JXplorer:</h5>
                        <div class="usage-steps">
                            <div class="step-item">
                                <div class="step-number">1</div>
                                <div class="step-content">
                                    <h6>Configuración de Conexión</h6>
                                    <div class="connection-params">
                                        <div class="param-group">
                                            <strong>Servidor:</strong> ldap://target.domain.com:389<br>
                                            <strong>Base DN:</strong> dc=domain,dc=com<br>
                                            <strong>Autenticación:</strong> Anonymous/Simple/SASL
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="step-item">
                                <div class="step-number">2</div>
                                <div class="step-content">
                                    <h6>Exploración Inicial</h6>
                                    <p>Navegar por la estructura del directorio para identificar unidades organizacionales, usuarios y grupos.</p>
                                </div>
                            </div>
                            
                            <div class="step-item">
                                <div class="step-number">3</div>
                                <div class="step-content">
                                    <h6>Búsquedas Dirigidas</h6>
                                    <div class="search-examples">
                                        <div class="search-item">
                                            <strong>Buscar todos los usuarios:</strong>
                                            <code>(objectClass=person)</code>
                                        </div>
                                        <div class="search-item">
                                            <strong>Buscar grupos:</strong>
                                            <code>(objectClass=group)</code>
                                        </div>
                                        <div class="search-item">
                                            <strong>Buscar por nombre:</strong>
                                            <code>(&(objectClass=person)(cn=*admin*))</code>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="alert alert-success mt-3">
                        <h6><i class="fas fa-star me-2"></i>Ventajas de JXplorer:</h6>
                        <ul class="mb-0">
                            <li>Interfaz intuitiva ideal para principiantes</li>
                            <li>Multiplataforma (Java-based)</li>
                            <li>Capacidades tanto de lectura como escritura</li>
                            <li>Excelente para exploración interactiva de directorios</li>
                        </ul>
                    </div>
                </div>

                <div class="concept-card">
                    <h4>
                        <svg class="concept-icon me-2" width="24" height="24" viewBox="0 0 100 100">
                            <use href="../../assets/images/icons.svg#icon-symlabs"></use>
                        </svg>
                        Symlabs LDAP Browser
                    </h4>
                    <p>Symlabs LDAP Browser es una herramienta profesional para la exploración y administración de directorios LDAP, ofreciendo capacidades empresariales avanzadas y soporte especializado para Active Directory.</p>
                    
                    <div class="symlabs-features">
                        <h5>Características Profesionales de Symlabs:</h5>
                        <div class="professional-features">
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="feature-category">
                                        <h6><i class="fas fa-shield-alt me-2 text-primary"></i>Seguridad Avanzada</h6>
                                        <div class="feature-list">
                                            <div class="feature-item">
                                                <strong>SSL/TLS Completo:</strong>
                                                <p>Soporte para conexiones encriptadas con validación de certificados.</p>
                                            </div>
                                            <div class="feature-item">
                                                <strong>Autenticación SASL:</strong>
                                                <p>Múltiples mecanismos SASL incluyendo Kerberos y NTLM.</p>
                                            </div>
                                            <div class="feature-item">
                                                <strong>Firma Digital:</strong>
                                                <p>Validación de integridad de datos mediante firmas.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="col-md-6">
                                    <div class="feature-category">
                                        <h6><i class="fas fa-microsoft me-2 text-success"></i>Integración Active Directory</h6>
                                        <div class="feature-list">
                                            <div class="feature-item">
                                                <strong>Schema Awareness:</strong>
                                                <p>Reconocimiento automático de esquemas AD.</p>
                                            </div>
                                            <div class="feature-item">
                                                <strong>Exchange Integration:</strong>
                                                <p>Soporte específico para atributos de Exchange.</p>
                                            </div>
                                            <div class="feature-item">
                                                <strong>GPO Navigation:</strong>
                                                <p>Navegación de Group Policy Objects.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="row mt-3">
                                <div class="col-md-6">
                                    <div class="feature-category">
                                        <h6><i class="fas fa-database me-2 text-warning"></i>Gestión de Datos</h6>
                                        <div class="feature-list">
                                            <div class="feature-item">
                                                <strong>LDIF Import/Export:</strong>
                                                <p>Importación y exportación masiva de datos.</p>
                                            </div>
                                            <div class="feature-item">
                                                <strong>Bulk Operations:</strong>
                                                <p>Operaciones masivas con validación.</p>
                                            </div>
                                            <div class="feature-item">
                                                <strong>Schema Management:</strong>
                                                <p>Gestión completa de esquemas LDAP.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="col-md-6">
                                    <div class="feature-category">
                                        <h6><i class="fas fa-search me-2 text-info"></i>Búsqueda Avanzada</h6>
                                        <div class="feature-list">
                                            <div class="feature-item">
                                                <strong>Query Builder:</strong>
                                                <p>Constructor visual de consultas LDAP.</p>
                                            </div>
                                            <div class="feature-item">
                                                <strong>Saved Searches:</strong>
                                                <p>Plantillas de búsqueda reutilizables.</p>
                                            </div>
                                            <div class="feature-item">
                                                <strong>Result Analysis:</strong>
                                                <p>Herramientas de análisis de resultados.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="symlabs-workflow mt-4">
                        <h5>Flujo de Trabajo de Enumeración con Symlabs:</h5>
                        <div class="workflow-diagram">
                            <div class="workflow-step">
                                <div class="step-icon"><i class="fas fa-plug"></i></div>
                                <div class="step-info">
                                    <h6>Conexión Segura</h6>
                                    <p>Establecer conexión SSL/TLS con autenticación apropiada</p>
                                </div>
                                <div class="step-details">
                                    <code>ldaps://dc.domain.com:636</code><br>
                                    <small>Con validación de certificado</small>
                                </div>
                            </div>
                            
                            <div class="workflow-arrow">→</div>
                            
                            <div class="workflow-step">
                                <div class="step-icon"><i class="fas fa-eye"></i></div>
                                <div class="step-info">
                                    <h6>Reconocimiento Schema</h6>
                                    <p>Análisis automático del esquema del directorio</p>
                                </div>
                                <div class="step-details">
                                    <small>Identificación de clases y atributos</small>
                                </div>
                            </div>
                            
                            <div class="workflow-arrow">→</div>
                            
                            <div class="workflow-step">
                                <div class="step-icon"><i class="fas fa-search"></i></div>
                                <div class="step-info">
                                    <h6>Enumeración Dirigida</h6>
                                    <p>Búsquedas especializadas basadas en objetivos</p>
                                </div>
                                <div class="step-details">
                                    <small>Usuarios, grupos, políticas, etc.</small>
                                </div>
                            </div>
                            
                            <div class="workflow-arrow">→</div>
                            
                            <div class="workflow-step">
                                <div class="step-icon"><i class="fas fa-download"></i></div>
                                <div class="step-info">
                                    <h6>Exportación Datos</h6>
                                    <p>Exportación estructurada de información</p>
                                </div>
                                <div class="step-details">
                                    <small>Formato LDIF o CSV</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="alert alert-warning mt-3">
                        <h6><i class="fas fa-exclamation-triangle me-2"></i>Consideraciones de Licencia:</h6>
                        <p class="mb-0">Symlabs LDAP Browser es una herramienta comercial. Verificar requisitos de licencia antes del uso en evaluaciones de penetración.</p>
                    </div>
                </div>

                <div class="concept-card">
                    <h4>
                        <svg class="concept-icon me-2" width="24" height="24" viewBox="0 0 100 100">
                            <use href="../../assets/images/icons.svg#icon-netscantools"></use>
                        </svg>
                        NetScanTools Pro
                    </h4>
                    <p>NetScanTools Pro es una suite comercial integral de herramientas de red que incluye más de 40 utilidades especializadas, proporcionando capacidades avanzadas de enumeración y análisis de red.</p>
                    
                    <div class="netscantools-modules">
                        <h5>Módulos Principales para Enumeración:</h5>
                        <div class="modules-grid">
                            <div class="row">
                                <div class="col-md-4">
                                    <div class="module-card">
                                        <div class="module-header">
                                            <i class="fas fa-door-open fa-2x text-primary mb-2"></i>
                                            <h6>Port Scanner</h6>
                                        </div>
                                        <div class="module-content">
                                            <p>Escáner de puertos con detección de servicios y banner grabbing.</p>
                                            <ul class="feature-list small">
                                                <li>TCP/UDP scanning</li>
                                                <li>Service detection</li>
                                                <li>Custom port ranges</li>
                                                <li>Threading support</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="col-md-4">
                                    <div class="module-card">
                                        <div class="module-header">
                                            <i class="fas fa-network-wired fa-2x text-success mb-2"></i>
                                            <h6>SNMP Tools</h6>
                                        </div>
                                        <div class="module-content">
                                            <p>Suite completa de herramientas SNMP para enumeración de dispositivos.</p>
                                            <ul class="feature-list small">
                                                <li>SNMP Walker</li>
                                                <li>MIB browser</li>
                                                <li>Bulk operations</li>
                                                <li>Custom OIDs</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="col-md-4">
                                    <div class="module-card">
                                        <div class="module-header">
                                            <i class="fas fa-folder-open fa-2x text-warning mb-2"></i>
                                            <h6>SMB Scanner</h6>
                                        </div>
                                        <div class="module-content">
                                            <p>Enumeración de recursos compartidos SMB/CIFS y análisis de permisos.</p>
                                            <ul class="feature-list small">
                                                <li>Share enumeration</li>
                                                <li>Permission analysis</li>
                                                <li>NetBIOS information</li>
                                                <li>Null session testing</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="row mt-3">
                                <div class="col-md-4">
                                    <div class="module-card">
                                        <div class="module-header">
                                            <i class="fas fa-globe fa-2x text-info mb-2"></i>
                                            <h6>DNS Tools</h6>
                                        </div>
                                        <div class="module-content">
                                            <p>Herramientas completas de DNS para enumeración de dominios.</p>
                                            <ul class="feature-list small">
                                                <li>Zone transfers</li>
                                                <li>Record enumeration</li>
                                                <li>Reverse lookups</li>
                                                <li>Cache analysis</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="col-md-4">
                                    <div class="module-card">
                                        <div class="module-header">
                                            <i class="fas fa-search fa-2x text-danger mb-2"></i>
                                            <h6>WHOIS Tools</h6>
                                        </div>
                                        <div class="module-content">
                                            <p>Herramientas WHOIS avanzadas para investigación de dominios.</p>
                                            <ul class="feature-list small">
                                                <li>Domain investigation</li>
                                                <li>IP range analysis</li>
                                                <li>Registrar information</li>
                                                <li>Historical data</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="col-md-4">
                                    <div class="module-card">
                                        <div class="module-header">
                                            <i class="fas fa-chart-line fa-2x text-secondary mb-2"></i>
                                            <h6>Packet Analysis</h6>
                                        </div>
                                        <div class="module-content">
                                            <p>Análisis de tráfico de red y captura de paquetes.</p>
                                            <ul class="feature-list small">
                                                <li>Packet capture</li>
                                                <li>Protocol analysis</li>
                                                <li>Traffic monitoring</li>
                                                <li>Filter creation</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="netscantools-workflow mt-4">
                        <h5>Flujo de Trabajo Integrado:</h5>
                        <div class="integrated-workflow">
                            <div class="workflow-phase">
                                <h6><i class="fas fa-search me-2"></i>Fase 1: Descubrimiento</h6>
                                <div class="phase-tools">
                                    <span class="badge bg-primary me-1">Ping Scanner</span>
                                    <span class="badge bg-primary me-1">ARP Scanner</span>
                                    <span class="badge bg-primary">Port Scanner</span>
                                </div>
                                <p>Identificación de hosts activos y servicios disponibles.</p>
                            </div>
                            
                            <div class="workflow-phase">
                                <h6><i class="fas fa-list me-2"></i>Fase 2: Enumeración</h6>
                                <div class="phase-tools">
                                    <span class="badge bg-success me-1">SNMP Tools</span>
                                    <span class="badge bg-success me-1">SMB Scanner</span>
                                    <span class="badge bg-success">DNS Tools</span>
                                </div>
                                <p>Extracción detallada de información de servicios identificados.</p>
                            </div>
                            
                            <div class="workflow-phase">
                                <h6><i class="fas fa-chart-bar me-2"></i>Fase 3: Análisis</h6>
                                <div class="phase-tools">
                                    <span class="badge bg-warning me-1">Packet Analysis</span>
                                    <span class="badge bg-warning me-1">WHOIS Tools</span>
                                    <span class="badge bg-warning">Report Generator</span>
                                </div>
                                <p>Análisis profundo y generación de reportes consolidados.</p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="pricing-info mt-4">
                        <div class="alert alert-info">
                            <h6><i class="fas fa-dollar-sign me-2"></i>Información Comercial:</h6>
                            <div class="row">
                                <div class="col-md-6">
                                    <ul>
                                        <li>Licencia comercial requerida</li>
                                        <li>Versión de prueba disponible</li>
                                        <li>Soporte técnico incluido</li>
                                    </ul>
                                </div>
                                <div class="col-md-6">
                                    <ul>
                                        <li>Actualizaciones regulares</li>
                                        <li>Documentación completa</li>
                                        <li>Entrenamiento disponible</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="concept-card">
                    <h4>
                        <svg class="concept-icon me-2" width="24" height="24" viewBox="0 0 100 100">
                            <use href="../../assets/images/icons.svg#icon-comparison"></use>
                        </svg>
                        Comparativa de Herramientas
                    </h4>
                    <p>Análisis comparativo de las herramientas de enumeración para facilitar la selección apropiada según el contexto y objetivos específicos.</p>
                    
                    <div class="tools-comparison">
                        <h5>Matriz de Comparación:</h5>
                        <div class="comparison-table">
                            <table class="table table-striped table-hover">
                                <thead class="table-dark">
                                    <tr>
                                        <th>Herramienta</th>
                                        <th>Tipo</th>
                                        <th>Plataforma</th>
                                        <th>Especialización</th>
                                        <th>Facilidad de Uso</th>
                                        <th>Costo</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><strong>Enum4linux</strong></td>
                                        <td><span class="badge bg-primary">CLI</span></td>
                                        <td>Linux/Unix</td>
                                        <td>SMB/NetBIOS</td>
                                        <td><span class="rating">★★★☆☆</span></td>
                                        <td><span class="badge bg-success">Gratis</span></td>
                                    </tr>
                                    <tr>
                                        <td><strong>JXplorer</strong></td>
                                        <td><span class="badge bg-info">GUI</span></td>
                                        <td>Multiplataforma</td>
                                        <td>LDAP</td>
                                        <td><span class="rating">★★★★★</span></td>
                                        <td><span class="badge bg-success">Gratis</span></td>
                                    </tr>
                                    <tr>
                                        <td><strong>Symlabs LDAP</strong></td>
                                        <td><span class="badge bg-info">GUI</span></td>
                                        <td>Windows</td>
                                        <td>LDAP/AD</td>
                                        <td><span class="rating">★★★★☆</span></td>
                                        <td><span class="badge bg-warning">Comercial</span></td>
                                    </tr>
                                    <tr>
                                        <td><strong>NetScanTools Pro</strong></td>
                                        <td><span class="badge bg-info">GUI</span></td>
                                        <td>Windows</td>
                                        <td>Red General</td>
                                        <td><span class="rating">★★★★★</span></td>
                                        <td><span class="badge bg-danger">Premium</span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    
                    <div class="selection-matrix mt-4">
                        <h5>Criterios de Selección Detallados:</h5>
                        <div class="criteria-grid">
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="criteria-category">
                                        <h6><i class="fas fa-target me-2 text-primary"></i>Por Objetivo</h6>
                                        <div class="objective-mapping">
                                            <div class="mapping-item">
                                                <strong>Enumeración Windows/SMB:</strong>
                                                <div class="recommended-tools">
                                                    <span class="badge bg-primary me-1">Enum4linux</span>
                                                    <span class="badge bg-secondary">NetScanTools Pro</span>
                                                </div>
                                            </div>
                                            <div class="mapping-item">
                                                <strong>Exploración LDAP/AD:</strong>
                                                <div class="recommended-tools">
                                                    <span class="badge bg-primary me-1">JXplorer</span>
                                                    <span class="badge bg-secondary">Symlabs LDAP</span>
                                                </div>
                                            </div>
                                            <div class="mapping-item">
                                                <strong>Análisis de Red Integral:</strong>
                                                <div class="recommended-tools">
                                                    <span class="badge bg-primary">NetScanTools Pro</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="col-md-6">
                                    <div class="criteria-category">
                                        <h6><i class="fas fa-cogs me-2 text-success"></i>Por Contexto</h6>
                                        <div class="context-mapping">
                                            <div class="mapping-item">
                                                <strong>Evaluación Rápida:</strong>
                                                <div class="recommended-tools">
                                                    <span class="badge bg-primary me-1">Enum4linux</span>
                                                    <span class="badge bg-secondary">JXplorer</span>
                                                </div>
                                            </div>
                                            <div class="mapping-item">
                                                <strong>Análisis Profundo:</strong>
                                                <div class="recommended-tools">
                                                    <span class="badge bg-primary me-1">Symlabs LDAP</span>
                                                    <span class="badge bg-secondary">NetScanTools Pro</span>
                                                </div>
                                            </div>
                                            <div class="mapping-item">
                                                <strong>Entorno Corporativo:</strong>
                                                <div class="recommended-tools">
                                                    <span class="badge bg-primary">NetScanTools Pro</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="best-practices mt-4">
                        <h5>Mejores Prácticas de Selección:</h5>
                        <div class="practices-grid">
                            <div class="row">
                                <div class="col-md-4">
                                    <div class="practice-card">
                                        <i class="fas fa-layers fa-2x text-primary mb-2"></i>
                                        <h6>Enfoque Multicapa</h6>
                                        <p>Combinar múltiples herramientas para cobertura completa y validación cruzada de resultados.</p>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="practice-card">
                                        <i class="fas fa-balance-scale fa-2x text-success mb-2"></i>
                                        <h6>Análisis Costo-Beneficio</h6>
                                        <p>Evaluar el ROI de herramientas comerciales vs. gratuitas según el contexto del proyecto.</p>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="practice-card">
                                        <i class="fas fa-graduation-cap fa-2x text-warning mb-2"></i>
                                        <h6>Curva de Aprendizaje</h6>
                                        <p>Considerar el tiempo de entrenamiento necesario para maximizar la efectividad de la herramienta.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="topic-quiz mt-4">
                    <h4>
                        <svg class="quiz-icon me-2" width="24" height="24" viewBox="0 0 100 100">
                            <use href="../../assets/images/icons.svg#icon-quiz"></use>
                        </svg>
                        Verifica tu Comprensión
                    </h4>
                    <div class="quiz-question">
                        <p><strong>¿Cuál es la principal ventaja de Enum4linux para la enumeración de sistemas Windows?</strong></p>
                        <div class="quiz-options">
                            <label class="quiz-option">
                                <input type="radio" name="q1" value="a">
                                <span>Su interfaz gráfica intuitiva</span>
                            </label>
                            <label class="quiz-option">
                                <input type="radio" name="q1" value="b">
                                <span>Su capacidad de usar conexiones null para extraer información</span>
                            </label>
                            <label class="quiz-option">
                                <input type="radio" name="q1" value="c">
                                <span>Su soporte nativo para LDAPS</span>
                            </label>
                        </div>
                    </div>
                    
                    <div class="quiz-question mt-3">
                        <p><strong>¿Qué herramienta sería más apropiada para un usuario principiante que necesita explorar un directorio LDAP?</strong></p>
                        <div class="quiz-options">
                            <label class="quiz-option">
                                <input type="radio" name="q2" value="a">
                                <span>Enum4linux</span>
                            </label>
                            <label class="quiz-option">
                                <input type="radio" name="q2" value="b">
                                <span>JXplorer</span>
                            </label>
                            <label class="quiz-option">
                                <input type="radio" name="q2" value="c">
                                <span>NetScanTools Pro</span>
                            </label>
                        </div>
                    </div>
                </div>

                <div class="case-study mt-4">
                    <h4 class="text-center">
                        <svg class="case-icon me-2" width="24" height="24" viewBox="0 0 100 100">
                            <use href="../../assets/images/icons.svg#icon-case-study"></use>
                        </svg>
                        Caso de Estudio: Selección de Herramientas de Enumeración
                    </h4>
                    <div class="case-content">
                        <div class="case-scenario">
                            <h6>📚 Escenario:</h6>
                            <p>Una empresa te ha contratado para realizar una evaluación de seguridad de su infraestructura híbrida que incluye servidores Windows con Active Directory, servidores Linux con Samba, y dispositivos de red SNMP-enabled. El presupuesto es limitado y necesitas maximizar la eficiencia.</p>
                        </div>
                        
                        <div class="case-question mt-3">
                            <h6>❓ Pregunta de Análisis:</h6>
                            <p><strong>¿Cuál sería la combinación más efectiva de herramientas para este escenario?</strong></p>
                            <div class="case-options">
                                <button class="btn btn-outline-primary case-option" data-case="q1" data-value="a">
                                    A) Solo NetScanTools Pro para cubrir todas las necesidades
                                </button>
                                <button class="btn btn-outline-primary case-option" data-case="q1" data-value="b">
                                    B) Enum4linux + JXplorer + herramientas SNMP gratuitas
                                </button>
                                <button class="btn btn-outline-primary case-option" data-case="q1" data-value="c">
                                    C) Solo herramientas con interfaz gráfica para mayor facilidad
                                </button>
                            </div>
                            <div class="case-feedback" id="case-q1-feedback" style="display: none;"></div>
                        </div>
                    </div>
                </div>

                <div class="topic-actions mt-4">
                    <button class="btn btn-sena-primary" onclick="completeTopic(3)">
                        <svg class="btn-icon me-2" width="16" height="16" viewBox="0 0 100 100">
                            <use href="../../assets/images/icons.svg#icon-check"></use>
                        </svg>
                        Marcar como Completado
                    </button>
                </div>
            </div>
        `
    }
};

// ========================================
// NAVIGATION AND PROGRESS SYSTEM
// ========================================

function loadModule() {
    console.log('📚 Cargando módulo: Enumeración de Activos');
    
    // Initialize Universal Diagram System
    if (typeof UNIVERSAL_DIAGRAM_SYSTEM !== 'undefined') {
        UNIVERSAL_DIAGRAM_SYSTEM.init().catch(error => {
            console.error('❌ Error inicializando sistema de diagramas:', error);
        });
    }
    
    generateNavigation();
    updateProgress();
    
    // Load first topic if none selected
    if (currentTopicIndex === 0 && !document.querySelector('.topic-content .content-section')) {
        loadFirstTopic();
    }
}

// Load module navigation with improved structure
function loadModuleNavigation() {
    const nav = document.getElementById('module-nav');
    if (!nav) return;
    
    nav.innerHTML = '';
    
    moduleData.topics.forEach((topic, index) => {
        const navItem = document.createElement('a');
        navItem.className = `nav-item ${topic.completed ? 'completed' : ''} ${index === currentTopicIndex ? 'active' : ''}`;
        navItem.href = '#';
        navItem.dataset.topicIndex = index;
        
        navItem.innerHTML = `
            <div class="nav-item-content">
                <div class="nav-item-icon">
                    <i class="fas fa-${topic.completed ? 'check-circle text-success' : 'circle text-muted'}"></i>
                </div>
                <div class="nav-item-info">
                    <h6 class="nav-item-title">${topic.title}</h6>
                    <small class="nav-item-duration">${topic.duration} min</small>
                </div>
            </div>
        `;
        
        navItem.addEventListener('click', function(e) {
            e.preventDefault();
            loadTopic(index);
        });
        
        nav.appendChild(navItem);
    });
}

// Legacy function for backward compatibility
function generateNavigation() {
    loadModuleNavigation();
}

// Load specific topic with enhanced functionality
function loadTopic(index) {
    console.log(`[DEBUG] loadTopic called with index ${index}`);
    
    if (index < 0 || index >= moduleData.topics.length) {
        console.log(`[DEBUG] Invalid topic index ${index}, valid range: 0-${moduleData.topics.length - 1}`);
        return;
    }
    
    currentTopicIndex = index;
    const topic = moduleData.topics[index];
    
    console.log(`[DEBUG] Loading topic: ${topic.id} - ${topic.title}`);
    
    updateNavigationState();
    loadTopicContent(topic);
    updateProgressDisplay();
    
    console.log(`[DEBUG] Topic loaded successfully: currentTopicIndex = ${currentTopicIndex}`);
}

// Load topic content with proper structure
function loadTopicContent(topic) {
    console.log(`[DEBUG] loadTopicContent called for topic: ${topic.id}`);
    
    const contentContainer = document.getElementById('topic-content');
    if (!contentContainer) {
        console.log(`[DEBUG] ERROR: topic-content container not found`);
        return;
    }
    
    const content = contentData[topic.id];
    
    if (!content) {
        console.error(`❌ Contenido no encontrado para el tema: ${topic.id}`);
        contentContainer.innerHTML = createDefaultContent(topic);
        return;
    }
    
    contentContainer.innerHTML = content.content;
    
    setupTopicInteractions();
      // Fix icons immediately after content load
    if (window.IconFixSystem) {
        setTimeout(() => {
            window.IconFixSystem.fixAllIcons();
        }, 50);
    }
    
    // Apply Universal Diagram System to newly loaded content
    setTimeout(() => {
        UNIVERSAL_DIAGRAM_SYSTEM.applyFixes();
    }, 100);
      // Additional icon fix after diagram fixes
    setTimeout(() => {
        if (window.IconFixSystem) {
            window.IconFixSystem.fixAllIcons();
        }
    }, 200);
    
    contentContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
    
    console.log(`[DEBUG] Topic content loaded successfully for ${topic.id}`);
    
    // Mark as completed after viewing
    setTimeout(() => {
        markTopicCompleted(index);
    }, 5000); // 5 seconds viewing time
}

// Create default content for missing topics
function createDefaultContent(topic) {
    return `
        <div class="topic-header">
            <h2 class="text-center">
                <svg class="topic-icon me-2" width="32" height="32" viewBox="0 0 100 100">
                    <use href="../../assets/images/icons.svg#icon-enum"></use>
                </svg>
                ${topic.title}
            </h2>
            <div class="topic-meta text-center">
                <span class="badge bg-primary me-2">
                    <i class="fas fa-clock me-1"></i>${topic.duration} minutos
                </span>
                <span class="badge bg-info">
                    <i class="fas fa-list me-1"></i>${topic.subtopics ? topic.subtopics.length : 0} subtemas
                </span>
            </div>
        </div>
        
        <div class="alert alert-warning mt-4">
            <i class="fas fa-construction me-2"></i>
            <strong>Contenido en desarrollo</strong><br>
            Este tema está siendo preparado. Por favor, revisa más tarde.
        </div>
        
        ${topic.subtopics ? `
        <div class="subtopics-preview mt-4">
            <h5>Subtemas incluidos:</h5>
            <ul class="list-group">
                ${topic.subtopics.map(subtopic => `
                    <li class="list-group-item">
                        <i class="fas fa-check-circle text-muted me-2"></i>
                        ${subtopic}
                    </li>
                `).join('')}
            </ul>
        </div>
        ` : ''}
    `;
}

// Start module with proper initialization
function startModule() {
    startTime = Date.now();
    updateProgress(moduleData.id, 'started');
    loadFirstTopic();
}

// Load first topic with proper reset
function loadFirstTopic() {
    console.log(`[DEBUG] loadFirstTopic called - resetting to index 0`);
    currentTopicIndex = -1;
    loadTopic(0);
}

function markTopicCompleted(index) {
    if (index >= 0 && index < moduleData.topics.length && !moduleData.topics[index].completed) {
        moduleData.topics[index].completed = true;
        updateNavigation();
        updateProgress();
        
        // Save progress to localStorage
        saveProgress();
        
        // Show completion notification
        showNotification(`✅ Tema completado: ${moduleData.topics[index].title}`, 'success');
    }
}

function updateNavigation() {
    updateNavigationState();
}

// Update navigation state to match current topic
function updateNavigationState() {
    // Update sidebar navigation
    document.querySelectorAll('.nav-item').forEach((item, index) => {
        item.classList.remove('active');
        if (index === currentTopicIndex) {
            item.classList.add('active');
        }
        
        // Update completed state
        const topic = moduleData.topics[index];
        item.classList.toggle('completed', topic.completed);
        
        // Update icon
        const icon = item.querySelector('.nav-item-icon i');
        if (icon) {
            icon.className = `fas fa-${topic.completed ? 'check-circle text-success' : 'circle text-muted'}`;
        }
    });
}

// Update module progress calculation
function updateModuleProgress() {
    const completedTopics = moduleData.topics.filter(t => t.completed).length;
    moduleProgress = Math.round((completedTopics / moduleData.topics.length) * 100);
}

// Update progress display elements
function updateProgressDisplay() {
    updateModuleProgress();
    
    // Update header progress bar
    const headerProgress = document.getElementById('module-progress-bar');
    const headerText = document.getElementById('module-progress-text');
    
    if (headerProgress) headerProgress.style.width = `${moduleProgress}%`;
    if (headerText) headerText.textContent = `${moduleProgress}%`;
    
    // Update sidebar progress
    const sidebarProgress = document.getElementById('sidebar-progress');
    const sidebarProgressText = document.getElementById('sidebar-progress-text');
    const completedCount = moduleData.topics.filter(t => t.completed).length;
    
    if (sidebarProgress) {
        sidebarProgress.style.width = `${moduleProgress}%`;
    }
    
    if (sidebarProgressText) {
        sidebarProgressText.textContent = `${completedCount} de ${moduleData.topics.length} temas completados`;
    }
}

// Navigation and progress control functions
function previousTopic() {
    if (currentTopicIndex > 0) {
        loadTopic(currentTopicIndex - 1);
    }
}

function nextTopic() {
    if (currentTopicIndex < moduleData.topics.length - 1) {
        loadTopic(currentTopicIndex + 1);
    }
}

// Legacy function for backward compatibility
function updateProgress() {
    updateProgressDisplay();
}

// ========================================
// UTILITY FUNCTIONS
// ========================================

function saveProgress() {
    const progressData = {
        moduleId: moduleData.id,
        topics: moduleData.topics.map(topic => ({
            id: topic.id,
            completed: topic.completed
        })),
        currentTopicIndex: currentTopicIndex,
        moduleProgress: moduleProgress,
        lastAccessed: new Date().toISOString()
    };
    
    localStorage.setItem(`module_${moduleData.id}`, JSON.stringify(progressData));
}

function loadProgress() {
    const savedData = localStorage.getItem(`module_${moduleData.id}`);
    if (savedData) {
        try {
            const progressData = JSON.parse(savedData);
            
            // Restore completion status
            progressData.topics.forEach(savedTopic => {
                const topic = moduleData.topics.find(t => t.id === savedTopic.id);
                if (topic) {
                    topic.completed = savedTopic.completed;
                }
            });
            
            currentTopicIndex = progressData.currentTopicIndex || 0;
            moduleProgress = progressData.moduleProgress || 0;
            
            console.log('✅ Progreso cargado correctamente');
        } catch (error) {
            console.error('❌ Error cargando progreso:', error);
        }
    }
}

function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `alert alert-${type} notification-toast position-fixed`;
    notification.style.cssText = `
        top: 100px;
        right: 20px;
        z-index: 9999;
        min-width: 300px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        border: none;
        opacity: 0;
        transform: translateX(100%);
        transition: all 0.3s ease;
    `;
    notification.innerHTML = `
        <div class="d-flex align-items-center">
            <span class="me-2">${message}</span>
            <button type="button" class="btn-close ms-auto" onclick="this.parentElement.parentElement.remove()"></button>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.opacity = '1';
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentElement) {
            notification.style.opacity = '0';
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
}

// ========================================
// MODULE NAVIGATION FUNCTIONS
// ========================================

function startModule() {
    if (!startTime) {
        startTime = new Date();
    }
    loadFirstTopic();
}

function previousModule() {
    // Navigate to previous module (Escaneo de Dispositivos)
    window.location.href = '../escaneo-dispositivos/index.html';
}

function nextModule() {
    // Navigate to next module (Escalamiento de Privilegios) 
    window.location.href = '../escalamiento-privilegios/index.html';
}

function goHome() {
    window.location.href = '../../index.html';
}

// ========================================
// INITIALIZATION
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Inicializando módulo: Enumeración de Activos');
    
    // Load saved progress
    loadProgress();
    
    // Initialize module
    loadModule();
    
    // Set up periodic progress saving
    setInterval(saveProgress, 30000); // Save every 30 seconds
    
    // Initialize global functions for HTML access
    window.startModule = startModule;
    window.loadFirstTopic = loadFirstTopic;
    window.loadTopic = loadTopic;
    window.previousModule = previousModule;
    window.nextModule = nextModule;
    
    console.log('✅ Módulo Enumeración de Activos inicializado');
});

// Export for global access
window.moduleEnumeracionActivos = {
    loadTopic,
    loadFirstTopic,
    startModule,
    previousModule,
    nextModule,
    goHome,
    moduleData,
    updateProgress,
    UNIVERSAL_DIAGRAM_SYSTEM
};

// ========================================
// SETUP AND INTERACTION FUNCTIONS
// ========================================

// Setup topic interactions and event handlers
function setupTopicInteractions() {
    // Add click handlers for interactive elements
    document.querySelectorAll('.interactive-element').forEach(element => {
        element.addEventListener('click', function() {
            this.classList.toggle('active');
        });
    });
    
    // Add hover effects for cards
    document.querySelectorAll('.info-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // Setup code highlight
    if (typeof Prism !== 'undefined') {
        Prism.highlightAll();
    }
}

// Load module progress from localStorage
function loadModuleProgress() {
    const savedProgress = localStorage.getItem('sena-hacking-progress');
    if (savedProgress) {
        try {
            const progressData = JSON.parse(savedProgress);
            const moduleProgressData = progressData[moduleData.id];
            
            if (moduleProgressData) {
                moduleProgress = moduleProgressData.progress || 0;
                
                if (moduleProgressData.completedTopics) {
                    moduleProgressData.completedTopics.forEach(topicId => {
                        const topic = moduleData.topics.find(t => t.id === topicId);
                        if (topic) topic.completed = true;
                    });
                }
                
                updateProgressDisplay();
            }
        } catch (error) {
            console.error('Error loading module progress:', error);
        }
    }
}

// Save topic progress to global system
function saveTopicProgress() {
    const completedTopics = moduleData.topics.filter(t => t.completed).map(t => t.id);
    const timeSpent = startTime ? Math.floor((Date.now() - startTime) / 1000) : 0;
    
    updateProgress(moduleData.id, 'progress', {
        completed: completedTopics,
        progress: moduleProgress,
        timeSpent: timeSpent,
        currentTopic: currentTopicIndex
    });
}

// Load complete module with all systems
function loadModule() {
    console.log('📚 Cargando módulo Enumeración de Activos...');
    
    // Load navigation
    loadModuleNavigation();
    
    // Load progress
    loadModuleProgress();
    
    // Update displays
    updateProgressDisplay();
    
    // Apply fixes
    setTimeout(() => {
        if (typeof UNIVERSAL_DIAGRAM_SYSTEM !== 'undefined') {
            UNIVERSAL_DIAGRAM_SYSTEM.applyFixes();
        }
        
        if (window.IconFixSystem) {
            window.IconFixSystem.fixAllIcons();
        }
    }, 500);
    
    console.log('✅ Módulo cargado correctamente');
}

// ========================================
// SISTEMA DE INICIALIZACIÓN MEJORADO
// ========================================

// Inicialización completa del módulo
async function initializeModule() {
    console.log('🚀 Inicializando módulo Enumeración de Activos...');
    
    try {
        // 1. Inicializar sistemas de iconos y SVG
        await initializeIconSystems();
        
        // 2. Inicializar sistema de diagramas
        await initializeDiagramSystem();
        
        // 3. Cargar módulo
        loadModule();
        
        // 4. Verificar y aplicar correcciones
        setTimeout(() => applySystemFixes(), 1000);
        setTimeout(() => applySystemFixes(), 3000);
        
        console.log('✅ Módulo inicializado completamente');
        
    } catch (error) {
        console.error('❌ Error inicializando módulo:', error);
        applyFallbackSystems();
    }
}

// Inicializar sistemas de iconos
async function initializeIconSystems() {
    const systems = [
        { name: 'IconFixSystem', system: window.IconFixSystem },
        { name: 'SvgInlineInjector', system: window.SvgInlineInjector },
        { name: 'SimpleIconLoader', system: window.SimpleIconLoader },
        { name: 'IconDiagnostics', system: window.IconDiagnostics }
    ];
    
    for (const { name, system } of systems) {
        try {
            if (system && typeof system.init === 'function') {
                await system.init();
                console.log(`✅ ${name} inicializado`);
            } else {
                console.warn(`⚠️ ${name} no disponible`);
            }
        } catch (error) {
            console.warn(`⚠️ Error inicializando ${name}:`, error);
        }
    }
}

// Inicializar sistema de diagramas
async function initializeDiagramSystem() {
    try {
        if (typeof UNIVERSAL_DIAGRAM_SYSTEM !== 'undefined') {
            await UNIVERSAL_DIAGRAM_SYSTEM.init();
            console.log('✅ Sistema de diagramas inicializado');
        } else {
            console.warn('⚠️ Sistema de diagramas no disponible');
        }
    } catch (error) {
        console.warn('⚠️ Error inicializando sistema de diagramas:', error);
    }
}

// Aplicar correcciones del sistema
function applySystemFixes() {
    console.log('🔧 Aplicando correcciones del sistema...');
    
    // Verificar y corregir iconos faltantes
    fixMissingIcons();
    
    // Verificar y corregir diagramas
    fixMissingDiagrams();
    
    // Aplicar correcciones de estilo
    applyStyleFixes();
}

// Corregir iconos faltantes
function fixMissingIcons() {
    const brokenIcons = document.querySelectorAll('svg:empty, .fa:empty');
    
    brokenIcons.forEach(icon => {
        if (icon.tagName === 'svg') {
            // Reemplazar SVG vacío con FontAwesome
            const fallbackIcon = document.createElement('i');
            fallbackIcon.className = 'fas fa-circle-question text-muted';
            fallbackIcon.title = 'Icono no disponible';
            icon.parentNode.replaceChild(fallbackIcon, icon);
        }
    });
    
    if (brokenIcons.length > 0) {
        console.log(`🔧 ${brokenIcons.length} iconos corregidos`);
    }
}

// Corregir diagramas faltantes
function fixMissingDiagrams() {
    const emptyDiagrams = document.querySelectorAll('svg[data-diagram]:empty');
    
    emptyDiagrams.forEach(svg => {
        const diagramId = svg.getAttribute('data-diagram');
        generateFallbackDiagram(svg, diagramId);
    });
    
    if (emptyDiagrams.length > 0) {
        console.log(`🔧 ${emptyDiagrams.length} diagramas de respaldo generados`);
    }
}

// Generar diagrama de respaldo
function generateFallbackDiagram(container, diagramId) {
    const fallbackSVG = `
        <svg viewBox="0 0 400 200" style="width: 100%; height: auto;">
            <rect width="400" height="200" fill="#f8f9fa" stroke="#dee2e6" stroke-width="2" rx="10"/>
            <text x="200" y="100" text-anchor="middle" font-size="16" fill="#6c757d" font-family="Arial, sans-serif">
                Diagrama: ${diagramId}
            </text>
            <text x="200" y="130" text-anchor="middle" font-size="12" fill="#adb5bd" font-family="Arial, sans-serif">
                (Contenido no disponible)
            </text>
        </svg>
    `;
    
    container.innerHTML = fallbackSVG;
    container.setAttribute('data-fallback', 'true');
}

// Aplicar correcciones de estilo
function applyStyleFixes() {
    // Asegurar que los iconos FontAwesome tengan estilos correctos
    const style = document.createElement('style');
    style.textContent = `
        .fa, .fas, .far, .fab, .fal, .fad {
            display: inline-block !important;
            font-style: normal !important;
            font-variant: normal !important;
            text-rendering: auto !important;
            line-height: 1 !important;
        }
        svg[data-fallback] {
            border: 1px dashed #dee2e6;
            background: #f8f9fa;
        }
    `;
    document.head.appendChild(style);
}

// Aplicar sistemas de respaldo
function applyFallbackSystems() {
    console.log('🛠️ Aplicando sistemas de respaldo...');
    
    // Reemplazar todos los iconos problemáticos con FontAwesome
    const allIcons = document.querySelectorAll('svg, .icon');
    allIcons.forEach(icon => {
        if (icon.tagName === 'svg' && !icon.innerHTML.trim()) {
            const fallback = document.createElement('i');
            fallback.className = 'fas fa-circle text-secondary';
            icon.parentNode.replaceChild(fallback, icon);
        }
    });
    
    console.log('✅ Sistemas de respaldo aplicados');
}

// Auto-inicializar cuando el DOM esté listo
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeModule);
} else {
    initializeModule();
}

// Exportar funciones principales para uso global
window.EnumeracionActivosModule = {
    init: initializeModule,
    loadTopic: loadTopic,
    nextTopic: nextTopic,
    previousTopic: previousTopic,
    loadDiagram: (containerId, diagramId) => {
        if (typeof UNIVERSAL_DIAGRAM_SYSTEM !== 'undefined') {
            return UNIVERSAL_DIAGRAM_SYSTEM.loadDiagram(containerId, diagramId);
        }
        return false;
    }
};
