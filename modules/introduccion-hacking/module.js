/* ========================================
   MODULE: INTRODUCCIÓN AL HACKING
   ======================================== */

// Module data based on info.md
const moduleData = {
    id: 'introduccion-hacking',
    title: 'Introducción al Hacking',
    topics: [
        {
            id: 'conceptos-hacking',
            title: 'Conceptos de Hacking',
            duration: 45,
            completed: false,
            subtopics: [
                'Valor de Hacking',
                'Objetivo de la Evaluación',
                'Ataques y Exploits',
                'Ataques de Día Cero',
                'Cadena de Margaritas'
            ]
        },
        {
            id: 'tipos-hacking',
            title: 'Tipos de Hacking',
            duration: 30,
            completed: false,
            subtopics: [
                'White Hat Hacking',
                'Black Hat Hacking',
                'Gray Hat Hacking',
                'Suicide Hacking'
            ]
        },
        {
            id: 'habilidades-hacker',
            title: 'Habilidades de un Hacker Ético',
            duration: 60,
            completed: false,
            subtopics: [
                'Conocimiento de Plataformas',
                'Conocimiento en Redes',
                'Experto en Computadoras',
                'Conocimientos en Seguridad',
                'Conocimientos Técnicos'
            ]
        },
        {
            id: 'fases-hacking',
            title: 'Fases del Hacking',
            duration: 90,
            completed: false,
            subtopics: [
                'Reconocimiento',
                'Escaneo',
                'Enumeración',
                'Explotación',
                'Mantenimiento del Acceso',
                'Borrado de Huellas'
            ]
        },
        {
            id: 'defensa-profundidad',
            title: 'Defensa en Profundidad',
            duration: 75,
            completed: false,
            subtopics: [
                'Objetivos de la Defensa',
                'Estrategias de Seguridad',
                'Capas de Protección'
            ]
        }
    ]
};

let currentTopicIndex = 0;
let moduleProgress = 0;
let startTime = null;

// ========================================
// SISTEMA UNIVERSAL DE DIAGRAMAS - MÓDULO 1
// ========================================

const UNIVERSAL_DIAGRAM_SYSTEM = {    // Configuración de todos los diagramas del módulo - DEPURADO SEGÚN DISTRIBUCIÓN FINAL
    diagrams: [
        { id: 'hacking-concepts-flow', viewBox: '0 0 900 520', topic: 1 },
        { id: 'hacker-types', viewBox: '0 0 800 320', topic: 2 },
        { id: 'skills-wheel', viewBox: '0 0 400 400', topic: 3 },
        { id: 'attack-lifecycle', viewBox: '0 0 800 620', topic: 4 },
        { id: 'security-pyramid', viewBox: '0 0 800 600', topic: 5 }
    ],
    
    // Estado del sistema - MEJORADO
    isInitialized: false,
    fixAttempts: 0,
    maxAttempts: 5,
    isProcessing: false,
    svgCache: null,    // Inicializar sistema de diagramas - CORREGIDO
    async init() {
        if (this.isInitialized || this.isProcessing) {
            console.log('🎯 Universal Diagram System: Ya inicializado o en proceso');
            return;
        }
        
        this.isProcessing = true;
        console.log('🎯 Universal Diagram System: Inicializando para módulo 1...');
        
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
      // Aplicar correcciones a todos los diagramas - MEJORADO
    async applyFixes() {
        if (this.isProcessing) {
            console.log('🔧 Universal Diagram System: Corrección ya en proceso, saltando...');
            return;
        }
        
        this.fixAttempts++;
        this.isProcessing = true;
        
        console.log(`🔧 Universal Diagram System: Intento ${this.fixAttempts}/${this.maxAttempts}`);
        
        if (this.fixAttempts > this.maxAttempts) {
            console.log('⚠️ Universal Diagram System: Máximo de intentos alcanzado, aplicando respaldos...');
            this.applyFallbacks();
            this.isProcessing = false;
            return;
        }
        
        try {
            // Usar SVG cacheado o cargar nuevo
            const svgContent = this.svgCache || await this.loadSVGContent();
            
            if (svgContent) {
                const processedCount = this.processDiagrams(svgContent);
                if (processedCount > 0) {
                    console.log(`✅ Universal Diagram System: ${processedCount} diagramas procesados exitosamente`);
                } else {
                    // Si no se procesó ninguno, intentar más tarde
                    setTimeout(() => {
                        this.isProcessing = false;
                        this.applyFixes();
                    }, 2000);
                    return;
                }
            } else {
                throw new Error('No se pudo cargar el contenido SVG');
            }
            
        } catch (error) {
            console.warn('⚠️ Universal Diagram System: Error en carga principal:', error);
            
            // Solo intentar de nuevo si no hemos alcanzado el máximo
            if (this.fixAttempts < this.maxAttempts) {
                setTimeout(() => {
                    this.isProcessing = false;
                    this.applyFixes();
                }, 2000);
                return;
            }
        }
        
        this.isProcessing = false;
    },
      // Cargar contenido del archivo SVG - MEJORADO
    async loadSVGContent() {
        try {
            // Si ya tenemos el contenido cacheado, usarlo
            if (this.svgCache) {
                return this.svgCache;
            }
            
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), 5000);
            
            const response = await fetch('../../assets/images/diagrams.svg', {
                signal: controller.signal
            });
            
            clearTimeout(timeoutId);
            
            if (!response.ok) throw new Error(`HTTP ${response.status}: ${response.statusText}`);
            
            const svgText = await response.text();
            const parser = new DOMParser();
            const svgDoc = parser.parseFromString(svgText, 'image/svg+xml');
            
            // Verificar que el SVG se parseó correctamente
            if (svgDoc.documentElement.nodeName === 'parsererror') {
                throw new Error('Error parseando SVG');
            }
            
            // Cachear el resultado
            this.svgCache = svgDoc;
            return svgDoc;
            
        } catch (error) {
            console.warn('⚠️ Universal Diagram System: Error cargando SVG:', error);
            return null;
        }
    },
      // Procesar todos los diagramas - MEJORADO
    processDiagrams(svgDoc) {
        let fixedCount = 0;
        
        this.diagrams.forEach(diagram => {
            try {
                const useElements = document.querySelectorAll(`use[href*="#${diagram.id}"]`);
                
                // Skip si no hay elementos para este diagrama
                if (useElements.length === 0) {
                    return;
                }
                
                useElements.forEach((useElement, index) => {
                    const svg = useElement.closest('svg');
                    
                    if (svg && !svg.hasAttribute('data-universal-fixed')) {
                        try {
                            // Extraer símbolo del SVG
                            const symbol = svgDoc.querySelector(`#${diagram.id}`);
                            
                            if (symbol) {
                                // Verificar que el símbolo tiene contenido
                                if (!symbol.innerHTML.trim()) {
                                    console.warn(`⚠️ Símbolo ${diagram.id} está vacío`);
                                    return;
                                }
                                
                                // Crear nuevo SVG con contenido inline
                                svg.innerHTML = '';
                                svg.setAttribute('viewBox', diagram.viewBox);
                                svg.setAttribute('data-universal-fixed', 'true');
                                svg.setAttribute('data-diagram-id', diagram.id);
                                svg.setAttribute('data-topic', diagram.topic);
                                
                                // Copiar contenido del símbolo incluyendo defs si existen
                                const defs = svgDoc.querySelector('defs');
                                if (defs) {
                                    svg.appendChild(defs.cloneNode(true));
                                }
                                
                                // Copiar contenido del símbolo
                                svg.innerHTML += symbol.innerHTML;
                                
                                fixedCount++;
                                console.log(`✅ Universal Diagram System: ${diagram.id} (Topic ${diagram.topic}) corregido`);
                            } else {
                                console.warn(`⚠️ Símbolo ${diagram.id} no encontrado en SVG`);
                            }
                            
                        } catch (elementError) {
                            console.warn(`⚠️ Universal Diagram System: Error procesando elemento ${diagram.id}:`, elementError);
                        }
                    }
                });
                
            } catch (diagramError) {
                console.warn(`⚠️ Universal Diagram System: Error procesando diagrama ${diagram.id}:`, diagramError);
            }
        });
        
        if (fixedCount > 0) {
            console.log(`🎉 Universal Diagram System: ${fixedCount} diagramas procesados exitosamente`);
        }
        
        return fixedCount;
    },
      // Aplicar respaldos si falla la carga principal - MEJORADO
    applyFallbacks() {
        console.log('🛠️ Universal Diagram System: Aplicando respaldos...');
        
        let fallbackCount = 0;
        
        this.diagrams.forEach(diagram => {
            try {
                const useElements = document.querySelectorAll(`use[href*="#${diagram.id}"]`);
                
                useElements.forEach((useElement, index) => {
                    const svg = useElement.closest('svg');
                    
                    if (svg && !svg.hasAttribute('data-fallback-applied') && !svg.hasAttribute('data-universal-fixed')) {
                        try {
                            // Aplicar respaldo específico según el diagrama
                            const fallbackContent = this.generateFallbackContent(diagram);
                            
                            if (fallbackContent) {
                                svg.innerHTML = '';
                                svg.setAttribute('viewBox', diagram.viewBox);
                                svg.setAttribute('data-fallback-applied', 'true');
                                svg.setAttribute('data-diagram-id', diagram.id);
                                svg.setAttribute('data-topic', diagram.topic);
                                
                                svg.innerHTML = fallbackContent;
                                fallbackCount++;
                                
                                console.log(`🎨 Universal Diagram System: Respaldo aplicado a ${diagram.id} (Topic ${diagram.topic})`);
                            }
                            
                        } catch (fallbackError) {
                            console.warn(`⚠️ Error aplicando fallback a ${diagram.id}:`, fallbackError);
                        }
                    }
                });
                
            } catch (diagramError) {
                console.warn(`⚠️ Error procesando fallback para ${diagram.id}:`, diagramError);
            }
        });
        
        console.log(`🎨 Universal Diagram System: ${fallbackCount} respaldos aplicados`);
    },
    
    // Generar contenido de respaldo para cada diagrama
    generateFallbackContent(diagram) {
        const fallbacks = {
            'hacking-concepts-flow': this.generateConceptsFallback(),
            'hacker-types': this.generateTypesFallback(),
            'skills-wheel': this.generateSkillsFallback(),
            'attack-lifecycle': this.generateLifecycleFallback(),
            'security-pyramid': this.generatePyramidFallback()
        };
        
        return fallbacks[diagram.id] || this.generateGenericFallback(diagram.id);
    },
    
    // Respaldo para conceptos del hacking
    generateConceptsFallback() {
        return `
            <defs>
                <linearGradient id="conceptsGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#FF6600;stop-opacity:1" />
                    <stop offset="50%" style="stop-color:#dc3545;stop-opacity:1" />
                    <stop offset="100%" style="stop-color:#0066CC;stop-opacity:1" />
                </linearGradient>
                <filter id="conceptsShadow">
                    <feDropShadow dx="3" dy="3" stdDeviation="3" flood-opacity="0.3"/>
                </filter>
            </defs>
            
            <rect width="900" height="520" fill="#f8f9fa" stroke="#dee2e6" stroke-width="3" rx="15"/>
            
            <!-- Conceptos centrales -->
            <rect x="350" y="220" width="200" height="80" rx="15" fill="#39A900" opacity="0.9" stroke="#2d7a00" stroke-width="3" filter="url(#conceptsShadow)"/>
            <text x="450" y="255" text-anchor="middle" font-size="16" font-weight="bold" fill="white" font-family="Arial, sans-serif">HACKING</text>
            <text x="450" y="275" text-anchor="middle" font-size="16" font-weight="bold" fill="white" font-family="Arial, sans-serif">ÉTICO</text>
            
            <!-- Valor del hacking -->
            <rect x="130" y="90" width="160" height="90" rx="15" fill="#dc3545" opacity="0.9" stroke="#b02a37" stroke-width="3" filter="url(#conceptsShadow)"/>
            <text x="210" y="125" text-anchor="middle" font-size="14" font-weight="bold" fill="white" font-family="Arial, sans-serif">VALOR</text>
            <text x="210" y="145" text-anchor="middle" font-size="14" font-weight="bold" fill="white" font-family="Arial, sans-serif">HACKING</text>
            
            <!-- Objetivo evaluación -->
            <rect x="610" y="90" width="160" height="90" rx="15" fill="#FF6600" opacity="0.9" stroke="#e55a00" stroke-width="3" filter="url(#conceptsShadow)"/>
            <text x="690" y="125" text-anchor="middle" font-size="14" font-weight="bold" fill="white" font-family="Arial, sans-serif">OBJETIVO</text>
            <text x="690" y="145" text-anchor="middle" font-size="14" font-weight="bold" fill="white" font-family="Arial, sans-serif">EVALUACIÓN</text>
            
            <!-- Ataques -->
            <rect x="130" y="340" width="160" height="90" rx="15" fill="#0066CC" opacity="0.9" stroke="#0056b3" stroke-width="3" filter="url(#conceptsShadow)"/>
            <text x="210" y="375" text-anchor="middle" font-size="14" font-weight="bold" fill="white" font-family="Arial, sans-serif">ATAQUES</text>
            <text x="210" y="395" text-anchor="middle" font-size="14" font-weight="bold" fill="white" font-family="Arial, sans-serif">EXPLOITS</text>
            
            <!-- Zero Day -->
            <rect x="610" y="340" width="160" height="90" rx="15" fill="#6f42c1" opacity="0.9" stroke="#5a2d91" stroke-width="3" filter="url(#conceptsShadow)"/>
            <text x="690" y="375" text-anchor="middle" font-size="14" font-weight="bold" fill="white" font-family="Arial, sans-serif">ZERO DAY</text>
            <text x="690" y="395" text-anchor="middle" font-size="14" font-weight="bold" fill="white" font-family="Arial, sans-serif">ATTACKS</text>
            
            <!-- Cadena margaritas -->
            <rect x="370" y="90" width="160" height="90" rx="15" fill="#28a745" opacity="0.9" stroke="#1e7e34" stroke-width="3" filter="url(#conceptsShadow)"/>
            <text x="450" y="125" text-anchor="middle" font-size="13" font-weight="bold" fill="white" font-family="Arial, sans-serif">CADENA</text>
            <text x="450" y="145" text-anchor="middle" font-size="13" font-weight="bold" fill="white" font-family="Arial, sans-serif">MARGARITAS</text>
            
            <!-- Conexiones -->
            <g stroke="#495057" stroke-width="2" fill="none" opacity="0.7">
                <line x1="290" y1="135" x2="370" y2="135" stroke-dasharray="5,3"/>
                <line x1="530" y1="135" x2="610" y2="135" stroke-dasharray="5,3"/>
                <line x1="290" y1="385" x2="370" y2="300" stroke-dasharray="5,3"/>
                <line x1="530" y1="300" x2="610" y2="385" stroke-dasharray="5,3"/>
                <line x1="450" y1="180" x2="450" y2="220" stroke-dasharray="5,3"/>
            </g>
            
            <!-- Título -->
            <text x="450" y="40" text-anchor="middle" font-size="24" font-weight="bold" fill="#2c3e50" font-family="Arial, sans-serif">Conceptos Fundamentales del Hacking</text>
            <line x1="200" y1="50" x2="700" y2="50" stroke="#39A900" stroke-width="3"/>
        `;
    },
    
    // Respaldo para tipos de hackers
    generateTypesFallback() {
        return `
            <defs>
                <filter id="typesShadow">
                    <feDropShadow dx="2" dy="2" stdDeviation="2" flood-opacity="0.3"/>
                </filter>
            </defs>
            
            <rect width="800" height="320" fill="#f8f9fa" stroke="#dee2e6" stroke-width="2" rx="10"/>
            
            <!-- White Hat -->
            <rect x="50" y="80" width="150" height="160" rx="10" fill="#28a745" opacity="0.9" stroke="#1e7e34" stroke-width="2" filter="url(#typesShadow)"/>
            <text x="125" y="110" text-anchor="middle" font-size="16" font-weight="bold" fill="white">WHITE HAT</text>
            <text x="125" y="140" text-anchor="middle" font-size="12" fill="white">Hacker Ético</text>
            <text x="125" y="160" text-anchor="middle" font-size="10" fill="white">• Autorizado</text>
            <text x="125" y="180" text-anchor="middle" font-size="10" fill="white">• Mejorar seguridad</text>
            <text x="125" y="200" text-anchor="middle" font-size="10" fill="white">• Reporta responsable</text>
            
            <!-- Black Hat -->
            <rect x="220" y="80" width="150" height="160" rx="10" fill="#dc3545" opacity="0.9" stroke="#c82333" stroke-width="2" filter="url(#typesShadow)"/>
            <text x="295" y="110" text-anchor="middle" font-size="16" font-weight="bold" fill="white">BLACK HAT</text>
            <text x="295" y="140" text-anchor="middle" font-size="12" fill="white">Hacker Malicioso</text>
            <text x="295" y="160" text-anchor="middle" font-size="10" fill="white">• No autorizado</text>
            <text x="295" y="180" text-anchor="middle" font-size="10" fill="white">• Fines criminales</text>
            <text x="295" y="200" text-anchor="middle" font-size="10" fill="white">• Causa daño</text>
            
            <!-- Gray Hat -->
            <rect x="390" y="80" width="150" height="160" rx="10" fill="#6c757d" opacity="0.9" stroke="#5a6268" stroke-width="2" filter="url(#typesShadow)"/>
            <text x="465" y="110" text-anchor="middle" font-size="16" font-weight="bold" fill="white">GRAY HAT</text>
            <text x="465" y="140" text-anchor="middle" font-size="12" fill="white">Zona Intermedia</text>
            <text x="465" y="160" text-anchor="middle" font-size="10" fill="white">• Sin autorización</text>
            <text x="465" y="180" text-anchor="middle" font-size="10" fill="white">• Sin intención maliciosa</text>
            <text x="465" y="200" text-anchor="middle" font-size="10" fill="white">• Busca reconocimiento</text>
            
            <!-- Suicide Hat -->
            <rect x="560" y="80" width="150" height="160" rx="10" fill="#6f42c1" opacity="0.9" stroke="#5a2d91" stroke-width="2" filter="url(#typesShadow)"/>
            <text x="635" y="110" text-anchor="middle" font-size="16" font-weight="bold" fill="white">SUICIDE HAT</text>
            <text x="635" y="140" text-anchor="middle" font-size="12" fill="white">Extremo</text>
            <text x="635" y="160" text-anchor="middle" font-size="10" fill="white">• Infraestructura crítica</text>
            <text x="635" y="180" text-anchor="middle" font-size="10" fill="white">• Sin importar consecuencias</text>
            <text x="635" y="200" text-anchor="middle" font-size="10" fill="white">• Daño catastrófico</text>
              <!-- Título -->
            <text x="400" y="35" text-anchor="middle" font-size="20" font-weight="bold" fill="#2c3e50">Clasificación Ética de Hackers</text>
            <line x1="100" y1="45" x2="700" y2="45" stroke="#39A900" stroke-width="2"/>
        `;
    },
    
    // Respaldo para rueda de habilidades (estilo amigable y educativo)
    generateSkillsFallback() {
        return `
            <defs>
                <!-- Enhanced CSS for fallback system -->
                <style>
                    .fallback-title { 
                        font-family: 'Segoe UI', 'Roboto', 'Helvetica Neue', Arial, sans-serif; 
                        font-weight: 700; 
                        font-size: 16px;
                        text-rendering: optimizeLegibility;
                        -webkit-font-smoothing: antialiased;
                    }
                    .fallback-subtitle { 
                        font-family: 'Segoe UI', 'Roboto', 'Helvetica Neue', Arial, sans-serif; 
                        font-weight: 600; 
                        font-size: 12px;
                        text-rendering: optimizeLegibility;
                        -webkit-font-smoothing: antialiased;
                    }
                    .fallback-center { 
                        font-family: 'Segoe UI', 'Roboto', 'Helvetica Neue', Arial, sans-serif; 
                        font-weight: 700; 
                        font-size: 11px;
                        text-rendering: optimizeLegibility;
                        -webkit-font-smoothing: antialiased;
                    }
                    .fallback-label { 
                        font-family: 'Segoe UI', 'Roboto', 'Helvetica Neue', Arial, sans-serif; 
                        font-weight: 700; 
                        font-size: 11px;
                        text-rendering: optimizeLegibility;
                        -webkit-font-smoothing: antialiased;
                    }
                    .fallback-motivational { 
                        font-family: 'Segoe UI', 'Roboto', 'Helvetica Neue', Arial, sans-serif; 
                        font-weight: 600; 
                        font-size: 9px;
                        text-rendering: optimizeLegibility;
                        -webkit-font-smoothing: antialiased;
                    }
                    .fallback-legend { 
                        font-family: 'Segoe UI', 'Roboto', 'Helvetica Neue', Arial, sans-serif; 
                        font-weight: 600; 
                        font-size: 11px;
                        text-rendering: optimizeLegibility;
                        -webkit-font-smoothing: antialiased;
                    }
                    .fallback-legend-small { 
                        font-family: 'Segoe UI', 'Roboto', 'Helvetica Neue', Arial, sans-serif; 
                        font-weight: 400; 
                        font-size: 8px;
                        text-rendering: optimizeLegibility;
                        -webkit-font-smoothing: antialiased;
                    }
                </style>
                
                <radialGradient id="fallbackCenterGradient" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" style="stop-color:#FFC107;stop-opacity:1" />
                    <stop offset="100%" style="stop-color:#FFD54F;stop-opacity:1" />
                </radialGradient>
                
                <!-- Enhanced text shadow filter -->
                <filter id="enhancedFallbackTextShadow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur in="SourceAlpha" stdDeviation="1.5"/>
                    <feOffset dx="1" dy="1" result="offset"/>
                    <feComponentTransfer>
                        <feFuncA type="linear" slope="0.8"/>
                    </feComponentTransfer>
                    <feMerge> 
                        <feMergeNode/>
                        <feMergeNode in="SourceGraphic"/> 
                    </feMerge>
                </filter>
                
                <filter id="friendlyFallbackShadow">
                    <feDropShadow dx="2" dy="2" stdDeviation="3" flood-opacity="0.3"/>
                </filter>
            </defs>
            
            <!-- Fondo amigable -->
            <rect width="420" height="420" fill="#f8f9fa" stroke="#E1F5FE" stroke-width="2" rx="20"/>
            
            <!-- Elementos decorativos -->
            <circle cx="30" cy="30" r="6" fill="#FFE082" opacity="0.6"/>
            <circle cx="390" cy="30" r="4" fill="#FFAB91" opacity="0.6"/>
            <circle cx="30" cy="390" r="4" fill="#C5E1A5" opacity="0.6"/>
            <circle cx="390" cy="390" r="6" fill="#B39DDB" opacity="0.6"/>
            
            <!-- Título amigable con fuentes mejoradas -->
            <text x="210" y="25" text-anchor="middle" class="fallback-title" fill="#1976D2" filter="url(#enhancedFallbackTextShadow)">🎯 Rueda de Superpoderes</text>
            <text x="210" y="42" text-anchor="middle" class="fallback-subtitle" fill="#FF6F00" filter="url(#enhancedFallbackTextShadow)">del Hacker Ético</text>
            
            <!-- Centro de la rueda -->
            <circle cx="210" cy="220" r="40" fill="url(#fallbackCenterGradient)" stroke="#FFF" stroke-width="3" filter="url(#friendlyFallbackShadow)"/>
            <text x="210" y="215" text-anchor="middle" class="fallback-center" fill="#1565C0" filter="url(#enhancedFallbackTextShadow)">🛡️ HACKER</text>
            <text x="210" y="230" text-anchor="middle" class="fallback-center" fill="#1565C0" filter="url(#enhancedFallbackTextShadow)">ÉTICO</text>
            
            <!-- Segmento Programación -->
            <path d="M 210 80 A 140 140 0 0 1 340 150 L 250 180 A 40 40 0 0 0 210 120 Z" fill="#4CAF50" opacity="0.9" stroke="#FFF" stroke-width="2" filter="url(#friendlyFallbackShadow)"/>
            <text x="280" y="120" class="fallback-label" fill="white" filter="url(#enhancedFallbackTextShadow)">💻 Programación</text>
            <text x="275" y="135" class="fallback-motivational" fill="#E8F5E8">¡Código creativo!</text>
            
            <!-- Segmento Redes -->
            <path d="M 340 150 A 140 140 0 0 1 340 290 L 250 260 A 40 40 0 0 0 250 180 Z" fill="#2196F3" opacity="0.9" stroke="#FFF" stroke-width="2" filter="url(#friendlyFallbackShadow)"/>
            <text x="300" y="220" class="fallback-label" fill="white" filter="url(#enhancedFallbackTextShadow)">🌐 Redes</text>
            <text x="290" y="235" class="fallback-motivational" fill="#E3F2FD">¡Conecta todo!</text>
            
            <!-- Segmento Sistemas -->
            <path d="M 340 290 A 140 140 0 0 1 210 360 L 210 320 A 40 40 0 0 0 250 260 Z" fill="#FF9800" opacity="0.9" stroke="#FFF" stroke-width="2" filter="url(#friendlyFallbackShadow)"/>
            <text x="275" y="325" class="fallback-label" fill="white" filter="url(#enhancedFallbackTextShadow)">⚙️ Sistemas</text>
            <text x="260" y="340" class="fallback-motivational" fill="#FFF3E0">¡Domina las máquinas!</text>
            
            <!-- Segmento Herramientas -->
            <path d="M 210 360 A 140 140 0 0 1 80 290 L 170 260 A 40 40 0 0 0 210 320 Z" fill="#F44336" opacity="0.9" stroke="#FFF" stroke-width="2" filter="url(#friendlyFallbackShadow)"/>
            <text x="135" y="325" class="fallback-label" fill="white" filter="url(#enhancedFallbackTextShadow)">🔧 Herramientas</text>
            <text x="115" y="340" class="fallback-motivational" fill="#FFEBEE">¡Tu caja de trucos!</text>
            
            <!-- Segmento Web -->
            <path d="M 80 290 A 140 140 0 0 1 80 150 L 170 180 A 40 40 0 0 0 170 260 Z" fill="#9C27B0" opacity="0.9" stroke="#FFF" stroke-width="2" filter="url(#friendlyFallbackShadow)"/>
            <text x="115" y="220" class="fallback-label" fill="white" filter="url(#enhancedFallbackTextShadow)">🌍 Web</text>
            <text x="100" y="235" class="fallback-motivational" fill="#F3E5F5">¡El mundo digital!</text>
            
            <!-- Segmento Criptografía -->
            <path d="M 80 150 A 140 140 0 0 1 210 80 L 210 120 A 40 40 0 0 0 170 180 Z" fill="#00BCD4" opacity="0.9" stroke="#FFF" stroke-width="2" filter="url(#friendlyFallbackShadow)"/>
            <text x="135" y="120" class="fallback-label" fill="white" filter="url(#enhancedFallbackTextShadow)">🔐 Criptografía</text>
            <text x="115" y="135" class="fallback-motivational" fill="#E0F2F1">¡Secretos seguros!</text>
            
            <!-- Leyenda educativa con fuentes mejoradas -->
            <rect x="40" y="380" width="340" height="30" fill="white" stroke="#E1F5FE" stroke-width="2" rx="15" opacity="0.95" filter="url(#friendlyFallbackShadow)"/>
            <text x="210" y="395" text-anchor="middle" class="fallback-legend" fill="#1976D2" filter="url(#enhancedFallbackTextShadow)">🎓 ¡Estas son tus superpoderes para proteger el mundo digital!</text>
            <text x="210" y="405" text-anchor="middle" class="fallback-legend-small" fill="#424242">Cada habilidad te hace más fuerte como guardián de la ciberseguridad 🚀</text>
              <!-- Estrellas decorativas -->
            <text x="50" y="80" font-size="12" fill="#FFD700">⭐</text>
            <text x="370" y="90" font-size="10" fill="#FF6B6B">✨</text>
            <text x="380" y="300" font-size="12" fill="#4ECDC4">💫</text>
            <text x="40" y="320" font-size="10" fill="#95E1D3">🌟</text>
        `;
    },
    
    // Respaldo para ciclo de vida del ataque
    generateLifecycleFallback() {
        return `
            <defs>
                <filter id="lifecycleShadow">
                    <feDropShadow dx="3" dy="3" stdDeviation="3" flood-opacity="0.3"/>
                </filter>
                <marker id="arrow" markerWidth="12" markerHeight="10" refX="11" refY="5" orient="auto">
                    <polygon points="0,0 0,10 12,5" fill="#495057" />
                </marker>
            </defs>
            
            <rect width="800" height="620" fill="#f8f9fa" stroke="#dee2e6" stroke-width="3" rx="15"/>
            
            <!-- Fases del ataque en círculo -->
            <!-- 1. Reconocimiento -->
            <circle cx="400" cy="120" r="50" fill="#dc3545" opacity="0.9" stroke="#c82333" stroke-width="3" filter="url(#lifecycleShadow)"/>
            <text x="400" y="115" text-anchor="middle" font-size="12" font-weight="bold" fill="white">RECON</text>
            <text x="400" y="130" text-anchor="middle" font-size="10" fill="white">Fase 1</text>
            
            <!-- 2. Escaneo -->
            <circle cx="600" cy="220" r="50" fill="#FF6600" opacity="0.9" stroke="#e55a00" stroke-width="3" filter="url(#lifecycleShadow)"/>
            <text x="600" y="215" text-anchor="middle" font-size="12" font-weight="bold" fill="white">SCAN</text>
            <text x="600" y="230" text-anchor="middle" font-size="10" fill="white">Fase 2</text>
            
            <!-- 3. Enumeración -->
            <circle cx="600" cy="400" r="50" fill="#0066CC" opacity="0.9" stroke="#0056b3" stroke-width="3" filter="url(#lifecycleShadow)"/>
            <text x="600" y="395" text-anchor="middle" font-size="12" font-weight="bold" fill="white">ENUM</text>
            <text x="600" y="410" text-anchor="middle" font-size="10" fill="white">Fase 3</text>
            
            <!-- 4. Explotación -->
            <circle cx="400" cy="500" r="50" fill="#6f42c1" opacity="0.9" stroke="#5a2d91" stroke-width="3" filter="url(#lifecycleShadow)"/>
            <text x="400" y="495" text-anchor="middle" font-size="12" font-weight="bold" fill="white">EXPLOIT</text>
            <text x="400" y="510" text-anchor="middle" font-size="10" fill="white">Fase 4</text>
            
            <!-- 5. Mantenimiento -->
            <circle cx="200" cy="400" r="50" fill="#28a745" opacity="0.9" stroke="#1e7e34" stroke-width="3" filter="url(#lifecycleShadow)"/>
            <text x="200" y="395" text-anchor="middle" font-size="12" font-weight="bold" fill="white">MAINTAIN</text>
            <text x="200" y="410" text-anchor="middle" font-size="10" fill="white">Fase 5</text>
            
            <!-- 6. Borrado -->
            <circle cx="200" cy="220" r="50" fill="#17a2b8" opacity="0.9" stroke="#138496" stroke-width="3" filter="url(#lifecycleShadow)"/>
            <text x="200" y="215" text-anchor="middle" font-size="12" font-weight="bold" fill="white">CLEAR</text>
            <text x="200" y="230" text-anchor="middle" font-size="10" fill="white">Fase 6</text>
            
            <!-- Flechas del ciclo -->
            <g fill="none" stroke="#495057" stroke-width="3" marker-end="url(#arrow)">
                <path d="M 440 160 Q 520 180 560 200"/>
                <path d="M 600 270 Q 600 310 600 350"/>
                <path d="M 560 440 Q 520 460 440 480"/>
                <path d="M 360 500 Q 280 480 240 440"/>
                <path d="M 200 350 Q 200 310 200 270"/>
                <path d="M 240 180 Q 280 160 360 140"/>
            </g>
            
            <!-- Título -->
            <text x="400" y="40" text-anchor="middle" font-size="24" font-weight="bold" fill="#2c3e50">Ciclo de Vida del Ataque</text>
            <line x1="150" y1="55" x2="650" y2="55" stroke="#39A900" stroke-width="3"/>
            
            <!-- Centro del ciclo -->
            <circle cx="400" cy="310" r="30" fill="#39A900" opacity="0.9" stroke="#2d7a00" stroke-width="2"/>
            <text x="400" y="315" text-anchor="middle" font-size="10" font-weight="bold" fill="white">CICLO</text>
        `;
    },
    
    // Respaldo para pirámide de seguridad
    generatePyramidFallback() {
        return `
            <defs>
                <filter id="pyramidShadow">
                    <feDropShadow dx="3" dy="3" stdDeviation="3" flood-opacity="0.3"/>
                </filter>
            </defs>
            
            <rect width="800" height="600" fill="#f8f9fa" stroke="#dee2e6" stroke-width="3" rx="15"/>
            
            <!-- Círculos concéntricos de defensa -->
            <!-- Capa 7: Políticas (exterior) -->
            <circle cx="400" cy="300" r="280" fill="none" stroke="#dc3545" stroke-width="3" opacity="0.6"/>
            <text x="400" y="50" text-anchor="middle" font-size="16" font-weight="bold" fill="#dc3545">POLÍTICAS Y PROCEDIMIENTOS</text>
            
            <!-- Capa 6: Seguridad Física -->
            <circle cx="400" cy="300" r="240" fill="none" stroke="#FF6600" stroke-width="3" opacity="0.7"/>
            <text x="400" y="90" text-anchor="middle" font-size="14" font-weight="bold" fill="#FF6600">SEGURIDAD FÍSICA</text>
            
            <!-- Capa 5: Perímetro de Red -->
            <circle cx="400" cy="300" r="200" fill="none" stroke="#ffc107" stroke-width="3" opacity="0.7"/>
            <text x="400" y="130" text-anchor="middle" font-size="14" font-weight="bold" fill="#ffc107">PERÍMETRO DE RED</text>
            
            <!-- Capa 4: Red Interna -->
            <circle cx="400" cy="300" r="160" fill="none" stroke="#28a745" stroke-width="3" opacity="0.8"/>
            <text x="400" y="170" text-anchor="middle" font-size="14" font-weight="bold" fill="#28a745">RED INTERNA</text>
            
            <!-- Capa 3: Hosts -->
            <circle cx="400" cy="300" r="120" fill="none" stroke="#17a2b8" stroke-width="3" opacity="0.8"/>
            <text x="400" y="210" text-anchor="middle" font-size="14" font-weight="bold" fill="#17a2b8">HOSTS</text>
            
            <!-- Capa 2: Aplicaciones -->
            <circle cx="400" cy="300" r="80" fill="none" stroke="#6f42c1" stroke-width="3" opacity="0.9"/>
            <text x="400" y="250" text-anchor="middle" font-size="14" font-weight="bold" fill="#6f42c1">APLICACIONES</text>
            
            <!-- Capa 1: Datos (centro) -->
            <circle cx="400" cy="300" r="40" fill="#0066CC" opacity="0.9" stroke="#0056b3" stroke-width="3" filter="url(#pyramidShadow)"/>
            <text x="400" y="295" text-anchor="middle" font-size="12" font-weight="bold" fill="white">DATOS</text>
            <text x="400" y="310" text-anchor="middle" font-size="10" fill="white">CRÍTICOS</text>
            
            <!-- Etiquetas laterales -->
            <text x="120" y="300" text-anchor="middle" font-size="12" fill="#2c3e50" transform="rotate(-90 120 300)">DEFENSA EN PROFUNDIDAD</text>
            <text x="680" y="300" text-anchor="middle" font-size="12" fill="#2c3e50" transform="rotate(90 680 300)">CAPAS DE PROTECCIÓN</text>
              <!-- Título -->
            <text x="400" y="570" text-anchor="middle" font-size="20" font-weight="bold" fill="#2c3e50">Modelo de Defensa en Profundidad</text>
            <line x1="150" y1="555" x2="650" y2="555" stroke="#39A900" stroke-width="3"/>
        `;
    },
    
    // Respaldo genérico para cualquier diagrama
    generateGenericFallback(diagramId) {
        return `
            <rect width="100%" height="100%" fill="#f8f9fa" stroke="#dee2e6" stroke-width="2" rx="10"/>
            <text x="50%" y="40%" text-anchor="middle" font-size="20" font-weight="bold" fill="#6c757d">Diagrama: ${diagramId}</text>
            <text x="50%" y="55%" text-anchor="middle" font-size="14" fill="#6c757d">Contenido de respaldo activo</text>
            <rect x="25%" y="30%" width="50%" height="40%" fill="none" stroke="#39A900" stroke-width="2" stroke-dasharray="5,5"/>
        `;
    }
};

// Initialize module
document.addEventListener('DOMContentLoaded', function() {
    initializeModule();
    loadModuleNavigation();
    loadModuleProgress();
    setupModuleEventListeners();
    
    // Initialize Universal Diagram System for all topics
    UNIVERSAL_DIAGRAM_SYSTEM.init();
    
    // Notify coordination system that module is ready
    if (window.SVGCoordination) {
        window.SVGCoordination.setModuleReady();
    }
});

// Initialize module
function initializeModule() {
    console.log(`📚 Inicializando módulo: ${moduleData.title}`);
    
    // Load existing progress
    loadExistingProgress();
    
    // Update progress display
    updateProgressDisplay();
    
    // Check if module should auto-start
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('start') === 'true') {
        startModule();
    }
}

// Load existing progress
function loadExistingProgress() {
    // Try to get progress from global data first, then from localStorage
    let savedProgress = null;
    
    // First attempt: from global progressData
    if (window.progressData && window.progressData[moduleData.id]) {
        savedProgress = window.progressData[moduleData.id];
    } else {
        // Second attempt: from localStorage
        try {
            const localStorageProgress = localStorage.getItem('sena-hacking-progress');
            if (localStorageProgress) {
                const progressData = JSON.parse(localStorageProgress);
                savedProgress = progressData[moduleData.id];
                
                // Update global progressData if available
                if (window.progressData) {
                    window.progressData[moduleData.id] = savedProgress;
                }
            }
        } catch (error) {
            console.error('Error loading progress from localStorage:', error);
        }
    }
    
    if (savedProgress) {
        moduleProgress = savedProgress.progress || 0;
        
        // Update topic completion status
        if (savedProgress.completedTopics) {
            savedProgress.completedTopics.forEach(topicId => {
                const topic = moduleData.topics.find(t => t.id === topicId);
                if (topic) topic.completed = true;
            });
        }
        
        // Set current topic index - ENHANCED: More robust logic with validation
        const completedCount = moduleData.topics.filter(t => t.completed).length;
        
        // If no topics completed, start at topic 0
        // If some topics completed, continue from the next incomplete topic
        if (completedCount === 0) {
            currentTopicIndex = 0;
        } else if (completedCount < moduleData.topics.length) {
            // Find the first incomplete topic
            const firstIncompleteIndex = moduleData.topics.findIndex(t => !t.completed);
            currentTopicIndex = firstIncompleteIndex >= 0 ? firstIncompleteIndex : 0;
        } else {
            // All topics completed
            currentTopicIndex = moduleData.topics.length - 1;
        }
        
        // ENHANCED: Validate currentTopicIndex is within bounds
        if (currentTopicIndex < 0 || currentTopicIndex >= moduleData.topics.length) {
            console.log(`[DEBUG] Invalid currentTopicIndex ${currentTopicIndex}, resetting to 0`);
            currentTopicIndex = 0;
        }
        
        console.log(`[DEBUG] Progress loaded: ${completedCount} completed, currentTopicIndex: ${currentTopicIndex}`);
        console.log(`[DEBUG] Current topic will be: ${moduleData.topics[currentTopicIndex].id} - ${moduleData.topics[currentTopicIndex].title}`);
    } else {
        // No saved progress, start fresh
        moduleProgress = 0;
        currentTopicIndex = 0;
        // Ensure all topics are marked as not completed
        moduleData.topics.forEach(topic => topic.completed = false);
        console.log(`[DEBUG] No saved progress, starting fresh at topic 0`);    }
}

// Load module navigation
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

// Load module progress
function loadModuleProgress() {
    // Load existing progress from localStorage
    const savedProgress = localStorage.getItem('sena-hacking-progress');
    if (savedProgress) {
        try {
            const progressData = JSON.parse(savedProgress);
            const moduleProgressData = progressData[moduleData.id];
            
            if (moduleProgressData) {
                // Update module progress
                moduleProgress = moduleProgressData.progress || 0;
                  // Update completed topics
                if (moduleProgressData.completedTopics) {
                    moduleProgressData.completedTopics.forEach(topicId => {
                        const topic = moduleData.topics.find(t => t.id === topicId);
                        if (topic) topic.completed = true;
                    });
                }
                
                // Update progress display
                updateProgressDisplay();
            }
        } catch (error) {
            console.error('Error loading module progress:', error);
        }
    }
}

// Start module
function startModule() {
    startTime = Date.now();
    updateProgress(moduleData.id, 'started');
    loadFirstTopic();
}

// Load first topic
function loadFirstTopic() {
    console.log(`[DEBUG] loadFirstTopic called - resetting to index 0`);
    
    // Force reset to topic 0 to ensure we start correctly
    currentTopicIndex = -1; // Set to -1 first to force a change
    loadTopic(0);
}

// Load specific topic
function loadTopic(index) {
    console.log(`[DEBUG] loadTopic called with index ${index}`);
    
    if (index < 0 || index >= moduleData.topics.length) {
        console.log(`[DEBUG] Invalid topic index ${index}, valid range: 0-${moduleData.topics.length - 1}`);
        return;
    }
    
    currentTopicIndex = index;
    const topic = moduleData.topics[index];
    
    console.log(`[DEBUG] Loading topic: ${topic.id} - ${topic.title}`);
    
    // Update navigation
    updateNavigationState();
      // Load topic content
    loadTopicContent(topic);
    
    // Navigation buttons removed - topic navigation no longer displayed
    
    // Update progress
    updateProgressDisplay();
    
    console.log(`[DEBUG] Topic loaded successfully: currentTopicIndex = ${currentTopicIndex}`);
}

// Load topic content
function loadTopicContent(topic) {
    console.log(`[DEBUG] loadTopicContent called for topic: ${topic.id}`);
    
    const contentContainer = document.getElementById('topic-content');
    if (!contentContainer) {
        console.log(`[DEBUG] ERROR: topic-content container not found`);
        return;
    }
    
    // Create topic content based on topic ID
    let content = '';
    
    switch (topic.id) {
        case 'conceptos-hacking':
            console.log(`[DEBUG] Creating content for conceptos-hacking`);
            content = createConceptosContent(topic);
            break;
        case 'tipos-hacking':
            console.log(`[DEBUG] Creating content for tipos-hacking`);
            content = createTiposContent(topic);
            break;
        case 'habilidades-hacker':
            console.log(`[DEBUG] Creating content for habilidades-hacker`);
            content = createHabilidadesContent(topic);
            break;
        case 'fases-hacking':
            console.log(`[DEBUG] Creating content for fases-hacking`);
            content = createFasesContent(topic);
            break;
        case 'defensa-profundidad':
            console.log(`[DEBUG] Creating content for defensa-profundidad`);
            content = createDefensaContent(topic);
            break;
        default:
            console.log(`[DEBUG] Creating default content for ${topic.id}`);
            content = createDefaultContent(topic);
    }
      console.log(`[DEBUG] Content created, length: ${content.length} characters`);
    contentContainer.innerHTML = content;
    
    // Setup topic interactions
    setupTopicInteractions();
    
    // Fix icons immediately after content load
    if (window.IconFixSystem) {
        setTimeout(() => {
            window.IconFixSystem.fixAll();
            console.log('🔧 Icons fixed after content load');
        }, 50);
    }
    
    // Apply Universal Diagram System to newly loaded content
    setTimeout(() => {
        UNIVERSAL_DIAGRAM_SYSTEM.applyFixes();
    }, 100);
    
    // Additional icon fix after diagram fixes
    setTimeout(() => {
        if (window.IconFixSystem) {
            window.IconFixSystem.fixAll();
        }
    }, 200);
    
    // Scroll to top
    contentContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
    
    console.log(`[DEBUG] Topic content loaded successfully for ${topic.id}`);
}

// Create content for "Conceptos de Hacking"
function createConceptosContent(topic) {
    return `        <div class="topic-header">
            <h2 class="text-center">
                <svg class="topic-icon me-2" width="32" height="32" viewBox="0 0 100 100">
                    <use href="../../assets/images/icons.svg#icon-security"></use>
                </svg>
                ${topic.title}
            </h2>
            <p class="topic-intro">
                Comprende los conceptos fundamentales del hacking ético y la terminología esencial.
            </p>
        </div>
          <div class="topic-content-body">
            <h3>Conceptos Fundamentales</h3>              <!-- Diagrama de Conceptos Fundamentales --><div class="concepts-flow-diagram mb-4">
                <h4 class="text-center mb-3">Relación entre Conceptos del Hacking</h4>
                <svg class="w-100" style="max-height: 520px;" viewBox="0 0 900 520">
                    <use href="../../assets/images/diagrams.svg#hacking-concepts-flow"></use>
                </svg>
                <p class="text-center text-muted mt-2">
                    <small>Explora cómo se relacionan los conceptos fundamentales del hacking ético</small>
                </p>
            </div>            <div class="concept-card">
                <h4>
                    <svg class="concept-icon me-2" width="24" height="24" viewBox="0 0 100 100">
                        <use href="../../assets/images/icons.svg#icon-hacking-value"></use>
                    </svg>
                    Valor de Hacking
                </h4>
                <p>La idea para un hacker de que algo valga la pena de hacerlo, o que sea interesante.
                Este concepto se basa en la curiosidad, el desafío técnico y el potencial de aprendizaje.</p>
            </div>
              <div class="concept-card">
                <h4>
                    <svg class="concept-icon me-2" width="24" height="24" viewBox="0 0 100 100">
                        <use href="../../assets/images/icons.svg#icon-target-assessment"></use>
                    </svg>
                    Objetivo de la Evaluación
                </h4>
                <p>Un sistema, producto o componente que se identifica es sometido a una evaluación
                de la seguridad requerida. Define claramente qué se va a evaluar y los límites del testing.</p>
            </div>              <div class="concept-card">
                <h4>
                    <svg class="concept-icon me-2" width="24" height="24" viewBox="0 0 100 100">
                        <use href="../../assets/images/icons.svg#icon-attack"></use>
                    </svg>
                    Ataque
                </h4>
                <p>Un asalto a la seguridad de un sistema derivado de una amenaza inteligente.
                Un ataque es cualquier acción de violación a la seguridad del sistema objetivo.</p>
            </div>
              <div class="concept-card">
                <h4>
                    <svg class="concept-icon me-2" width="24" height="24" viewBox="0 0 100 100">
                        <use href="../../assets/images/icons.svg#icon-exploit"></use>
                    </svg>
                    Exploit
                </h4>
                <p>Es una forma definida para romper la seguridad de un sistema a través de una vulnerabilidad.
                Los exploits aprovechan debilidades específicas para obtener acceso no autorizado.</p>
            </div>
              <div class="concept-card">
                <h4>
                    <svg class="concept-icon me-2" width="24" height="24" viewBox="0 0 100 100">
                        <use href="../../assets/images/icons.svg#icon-zero-day"></use>
                    </svg>
                    Ataque de Día Cero
                </h4>
                <p>Es una amenaza informática que afecta vulnerabilidades de aplicaciones informáticas
                que son desconocidas para los demás. Representa el mayor riesgo por su naturaleza desconocida.</p>
            </div>
              <div class="concept-card">
                <h4>
                    <svg class="concept-icon me-2" width="24" height="24" viewBox="0 0 100 100">
                        <use href="../../assets/images/icons.svg#icon-daisy-chain"></use>
                    </svg>
                    Cadena de Margaritas (Daisy Chains)
                </h4>
                <p>Los hackers que consiguen terminar con el robo de base de datos o información,
                por lo general terminan su tarea. Proceden dar marcha atrás para cubrir sus pistas 
                destruyendo registros y evidencias.</p>
            </div>            <div class="topic-quiz mt-4">
                <h4>
                    <svg class="quiz-icon me-2" width="24" height="24" viewBox="0 0 100 100">
                        <use href="../../assets/images/icons.svg#icon-quiz"></use>
                    </svg>
                    Verifica tu Comprensión
                </h4>
                <div class="quiz-question">
                    <p><strong>¿Cuál es la diferencia principal entre un ataque y un exploit?</strong></p>
                    <div class="quiz-options">
                        <label class="quiz-option">
                            <input type="radio" name="q1" value="a">
                            <span>Un ataque es más peligroso que un exploit</span>
                        </label>
                        <label class="quiz-option">
                            <input type="radio" name="q1" value="b">
                            <span>Un exploit es la herramienta específica, un ataque es la acción general</span>
                        </label>
                        <label class="quiz-option">
                            <input type="radio" name="q1" value="c">
                            <span>Son términos sinónimos</span>
                        </label>
                    </div>
                </div>
            </div>              <div class="case-study mt-4">
                <h4 class="text-center">
                    <svg class="case-icon me-2" width="24" height="24" viewBox="0 0 100 100">
                        <use href="../../assets/images/icons.svg#icon-case-study"></use>
                    </svg>
                    Caso de Estudio: Descubrimiento de Vulnerabilidad Zero-Day
                </h4>
                <div class="case-content">
                    <div class="case-scenario">
                        <h6>📚 Escenario:</h6>
                        <p>Una empresa de desarrollo de software contacta a tu equipo de hacking ético para evaluar la seguridad de su nueva aplicación web antes del lanzamiento público. Durante las pruebas, descubres una vulnerabilidad que permite la ejecución remota de código.</p>
                    </div>
                    
                    <div class="case-question mt-3">
                        <h6>❓ Pregunta de Análisis:</h6>
                        <p><strong>¿Cuál debería ser tu próximo paso como hacker ético?</strong></p>
                        <div class="case-options">
                            <button class="btn btn-outline-primary case-option" data-case="q1" data-value="a">
                                A) Documentar y reportar inmediatamente la vulnerabilidad al cliente
                            </button>
                            <button class="btn btn-outline-primary case-option" data-case="q1" data-value="b">
                                B) Explotar completamente la vulnerabilidad para demostrar su impacto
                            </button>
                            <button class="btn btn-outline-primary case-option" data-case="q1" data-value="c">
                                C) Publicar la vulnerabilidad en foros de seguridad para obtener reconocimiento
                            </button>
                        </div>
                        <div class="case-feedback" id="case-q1-feedback" style="display: none;"></div>
                    </div>                </div>
            </div>
            <div class="topic-actions mt-4">
                <button class="btn btn-sena-primary" onclick="completeTopic(0)">
                    <svg class="btn-icon me-2" width="16" height="16" viewBox="0 0 100 100">
                        <use href="../../assets/images/icons.svg#icon-check"></use>
                    </svg>
                    Marcar como Completado
                </button>
            </div>        </div>
    `;
}

// Create default topic content template
function createDefaultContent(topic) {    return `
        <div class="topic-header">
            <h2 class="text-center">${topic.title}</h2>
            <p class="topic-intro">
                Este tema cubre aspectos importantes del hacking ético. Duración estimada: ${topic.duration} minutos.
            </p>
        </div>
        
        <div class="topic-content-body">
            <h3>Contenido del Tema</h3>
              <div class="subtopics-list">
                <h4>Temas a cubrir:</h4>
                <ul class="list-group list-group-flush">
                    ${topic.subtopics.map(subtopic => `
                        <li class="list-group-item d-flex align-items-center">
                            <i class="fas fa-check-circle text-success me-2"></i>
                            ${subtopic}
                        </li>
                    `).join('')}
                </ul>
            </div>
            
            <div class="alert alert-info mt-4">
                <i class="fas fa-info-circle me-2"></i>
                <strong>Nota:</strong> Este es un ejemplo de estructura de contenido. 
                En la implementación completa, aquí iría el contenido educativo detallado.
            </div>              <div class="topic-actions mt-4">
                <button class="btn btn-sena-primary" onclick="completeTopic(${currentTopicIndex})">
                    <i class="fas fa-check me-2"></i>Marcar como Completado
                </button>
            </div>
        </div>
    `;
}

// Create otros contenidos similares...
function createTiposContent(topic) {
    return `        <div class="topic-header">
            <h2 class="text-center">
                <svg class="topic-icon me-2" width="32" height="32" viewBox="0 0 100 100">
                    <use href="../../assets/images/icons.svg#icon-hacker-types"></use>
                </svg>
                ${topic.title}
            </h2>
            <p class="topic-intro">
                Conoce los diferentes tipos de hackers y sus motivaciones según el código ético que siguen.
            </p>
        </div>
        
        <div class="topic-content-body">
            <h3>Clasificación de Hackers por Ética</h3>
              <!-- Diagrama de Comparación de Tipos de Hackers -->            <div class="hacker-types-diagram mb-4">                <svg class="w-100" style="max-height: 320px;" viewBox="0 0 800 320">
                    <use href="../../assets/images/diagrams.svg#hacker-types"></use>
                </svg>
                <p class="text-center text-muted mt-2">
                    <small>Comparación visual de los diferentes tipos de hackers según su ética</small>
                </p>
            </div>
              <div class="concept-card border-success">
                <h4>
                    <svg class="concept-icon me-2" width="24" height="24" viewBox="0 0 100 100">
                        <use href="../../assets/images/icons.svg#icon-white-hat"></use>
                    </svg>
                    White Hat Hacking (Sombrero Blanco)
                </h4>
                <p><strong>Hackers Éticos:</strong> Profesionales de seguridad que utilizan sus habilidades para mejorar la seguridad.</p>
                <ul class="mt-2">
                    <li>Realizan pruebas de penetración autorizadas</li>
                    <li>Siguen códigos de ética estrictos</li>
                    <li>Reportan vulnerabilidades de forma responsable</li>
                    <li>Trabajan para proteger organizaciones</li>
                </ul>
                <div class="alert alert-success mt-3">
                    <strong>Objetivo:</strong> Mejorar la seguridad y proteger sistemas
                </div>
            </div>
              <div class="concept-card border-danger">
                <h4>
                    <svg class="concept-icon me-2" width="24" height="24" viewBox="0 0 100 100">
                        <use href="../../assets/images/icons.svg#icon-black-hat"></use>
                    </svg>
                    Black Hat Hacking (Sombrero Negro)
                </h4>
                <p><strong>Hackers Maliciosos:</strong> Individuos que violan sistemas con intenciones criminales.</p>
                <ul class="mt-2">
                    <li>Realizan ataques sin autorización</li>
                    <li>Motivados por ganancia personal o daño</li>
                    <li>Roban información confidencial</li>
                    <li>Pueden pertenecer a organizaciones criminales</li>
                </ul>
                <div class="alert alert-danger mt-3">
                    <strong>Objetivo:</strong> Ganancia personal, espionaje o destrucción
                </div>
            </div>
              <div class="concept-card border-warning">
                <h4>
                    <svg class="concept-icon me-2" width="24" height="24" viewBox="0 0 100 100">
                        <use href="../../assets/images/icons.svg#icon-gray-hat"></use>
                    </svg>
                    Gray Hat Hacking (Sombrero Gris)
                </h4>
                <p><strong>Zona Intermedia:</strong> Hackers que operan entre lo ético y lo no ético.</p>
                <ul class="mt-2">
                    <li>Pueden violar sistemas sin autorización</li>
                    <li>Generalmente no tienen intenciones maliciosa</li>
                    <li>Pueden revelar vulnerabilidades públicamente</li>
                    <li>Buscan reconocimiento o notoriedad</li>
                </ul>
                <div class="alert alert-warning mt-3">
                    <strong>Objetivo:</strong> Demostrar habilidades o mejorar seguridad sin autorización
                </div>
            </div>
              <div class="concept-card border-dark">
                <h4>
                    <svg class="concept-icon me-2" width="24" height="24" viewBox="0 0 100 100">
                        <use href="../../assets/images/icons.svg#icon-suicide-hat"></use>
                    </svg>
                    Suicide Hacking
                </h4>
                <p><strong>Hackers Extremos:</strong> Individuos que atacan infraestructura crítica sin importar las consecuencias.</p>
                <ul class="mt-2">
                    <li>Atacan sistemas críticos (energía, agua, transporte)</li>
                    <li>No les importan las consecuencias legales</li>
                    <li>Pueden causar daño físico real</li>
                    <li>Motivados por ideología extrema</li>
                </ul>
                <div class="alert alert-dark mt-3">
                    <strong>Peligro:</strong> Pueden causar daños catastróficos a la sociedad
                </div>
            </div>
              <div class="topic-quiz mt-4">
                <h4>
                    <svg class="quiz-icon me-2" width="24" height="24" viewBox="0 0 100 100">
                        <use href="../../assets/images/icons.svg#icon-quiz"></use>
                    </svg>
                    Evaluación de Conocimientos
                </h4>
                <div class="quiz-question mb-3">
                    <p><strong>¿Qué característica define principalmente a un White Hat Hacker?</strong></p>
                    <div class="quiz-options">
                        <label class="quiz-option">
                            <input type="radio" name="q2_1" value="a">
                            <span>Trabaja siempre de forma gratuita</span>
                        </label>
                        <label class="quiz-option">
                            <input type="radio" name="q2_1" value="b">
                            <span>Obtiene autorización antes de realizar pruebas</span>
                        </label>
                        <label class="quiz-option">
                            <input type="radio" name="q2_1" value="c">
                            <span>Nunca revela las vulnerabilidades encontradas</span>
                        </label>
                    </div>
                </div>
                
                <div class="quiz-question">
                    <p><strong>¿Cuál es el mayor riesgo del Gray Hat Hacking?</strong></p>
                    <div class="quiz-options">
                        <label class="quiz-option">
                            <input type="radio" name="q2_2" value="a">
                            <span>La revelación pública de vulnerabilidades sin dar tiempo para parchear</span>
                        </label>
                        <label class="quiz-option">
                            <input type="radio" name="q2_2" value="b">
                            <span>Siempre causa daño a los sistemas</span>
                        </label>
                        <label class="quiz-option">
                            <input type="radio" name="q2_2" value="c">
                            <span>Es más peligroso que el Black Hat</span>
                        </label>
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
    `;
}

function createHabilidadesContent(topic) {
    return `
        <div class="topic-header">
            <h2 class="text-center">
                <svg class="topic-icon me-2" width="32" height="32" viewBox="0 0 100 100">
                    <use href="../../assets/images/icons.svg#icon-skills"></use>
                </svg>
                ${topic.title}
            </h2>
            <p class="topic-intro">
                Descubre las competencias técnicas y soft skills que debe dominar un hacker ético profesional.
            </p>
        </div>
        
        <div class="topic-content-body">
            <h3>Perfil de Competencias del Hacker Ético</h3>
            
            <!-- Rueda de Habilidades Interactiva -->
            <div class="skills-wheel-container mb-4">
                <h4 class="text-center mb-3">Rueda de Habilidades del Hacker Ético</h4>
                <svg class="skills-wheel w-100" style="max-height: 450px;" viewBox="0 0 420 420">
                    <use href="../../assets/images/diagrams.svg#skills-wheel"></use>
                </svg>
                <p class="text-center text-muted mt-2">
                    <small>Haz clic en cada habilidad para obtener más información</small>
                </p>
            </div>
            
            <div class="skills-container">
                <!-- Primera fila de habilidades -->
                <div class="row mb-4">
                    <div class="col-lg-6 mb-3">
                        <div class="skill-category h-100 border-primary">
                            <h4>
                                <svg class="skill-icon me-2" width="24" height="24" viewBox="0 0 100 100">
                                    <use href="../../assets/images/icons.svg#icon-platform-knowledge"></use>
                                </svg>
                                Conocimiento de Plataformas
                            </h4>
                            <div class="skill-items">
                                <div class="skill-item">
                                    <h5>
                                        <svg class="me-1" width="16" height="16" viewBox="0 0 100 100">
                                            <use href="../../assets/images/icons.svg#icon-operating-system"></use>
                                        </svg>
                                        Sistemas Operativos
                                    </h5>
                                    <ul class="mt-2">
                                        <li><strong>Windows:</strong> Active Directory, Registry, PowerShell</li>
                                        <li><strong>Linux/Unix:</strong> Shell scripting, permisos, servicios</li>
                                        <li><strong>macOS:</strong> Terminal, Keychain, LaunchDaemons</li>
                                        <li><strong>Móviles:</strong> Android (ADB), iOS (Jailbreak)</li>
                                    </ul>
                                </div>
                                <div class="skill-item">
                                    <h5>Virtualización y Contenedores</h5>
                                    <ul class="mt-2">
                                        <li>VMware, VirtualBox, Hyper-V</li>
                                        <li>Docker, Kubernetes</li>
                                        <li>Escape de sandbox</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 mb-3">
                        <div class="skill-category h-100 border-info">
                            <h4>
                                <svg class="skill-icon me-2" width="24" height="24" viewBox="0 0 100 100">
                                    <use href="../../assets/images/icons.svg#icon-network"></use>
                                </svg>
                                Conocimiento en Redes
                            </h4>
                            <div class="skill-items">
                                <div class="skill-item">
                                    <h5>Protocolos y Arquitectura</h5>
                                    <ul class="mt-2">
                                        <li><strong>TCP/IP:</strong> Encabezados, fragmentación, routing</li>
                                        <li><strong>DNS:</strong> Resolución, cache poisoning, tunneling</li>
                                        <li><strong>HTTP/HTTPS:</strong> Headers, cookies, certificados</li>
                                        <li><strong>Wireless:</strong> WPA/WEP, Bluetooth, NFC</li>
                                    </ul>
                                </div>
                                <div class="skill-item">
                                    <h5>Análisis de Tráfico</h5>
                                    <ul class="mt-2">
                                        <li>Wireshark, tcpdump</li>
                                        <li>Network mapping</li>
                                        <li>Detección de anomalías</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Segunda fila de habilidades -->
                <div class="row mb-4">
                    <div class="col-lg-6 mb-3">
                        <div class="skill-category h-100 border-success">
                            <h4>
                                <svg class="skill-icon me-2" width="24" height="24" viewBox="0 0 100 100">
                                    <use href="../../assets/images/icons.svg#icon-computer-knowledge"></use>
                                </svg>
                                Experto en Computadoras
                            </h4>
                            <div class="skill-items">
                                <div class="skill-item">
                                    <h5>Hardware y Arquitectura</h5>
                                    <ul class="mt-2">
                                        <li>Arquitectura de procesadores (x86, ARM)</li>
                                        <li>Memoria y almacenamiento</li>
                                        <li>Firmware y BIOS/UEFI</li>
                                        <li>Hardware security modules (HSM)</li>
                                    </ul>
                                </div>
                                <div class="skill-item">
                                    <h5>Análisis Forense</h5>
                                    <ul class="mt-2">
                                        <li>Recuperación de datos</li>
                                        <li>Análisis de memoria RAM</li>
                                        <li>Timeline analysis</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 mb-3">
                        <div class="skill-category h-100 border-warning">
                            <h4>
                                <svg class="skill-icon me-2" width="24" height="24" viewBox="0 0 100 100">
                                    <use href="../../assets/images/icons.svg#icon-security-knowledge"></use>
                                </svg>
                                Conocimientos en Seguridad
                            </h4>
                            <div class="skill-items">
                                <div class="skill-item">
                                    <h5>Criptografía</h5>
                                    <ul class="mt-2">
                                        <li>Algoritmos simétricos y asimétricos</li>
                                        <li>Hashing y salting</li>
                                        <li>PKI y gestión de certificados</li>
                                        <li>Criptoanálisis básico</li>
                                    </ul>
                                </div>
                                <div class="skill-item">
                                    <h5>Frameworks de Seguridad</h5>
                                    <ul class="mt-2">
                                        <li>OWASP Top 10</li>
                                        <li>NIST Cybersecurity Framework</li>
                                        <li>ISO 27001/27002</li>
                                        <li>SANS Critical Controls</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Tercera fila - Conocimientos Técnicos (ancho completo) -->
                <div class="row mb-4">
                    <div class="col-12">
                        <div class="skill-category border-danger">
                            <h4>
                                <svg class="skill-icon me-2" width="24" height="24" viewBox="0 0 100 100">
                                    <use href="../../assets/images/icons.svg#icon-programming"></use>
                                </svg>
                                Conocimientos Técnicos
                            </h4>
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="skill-item">
                                        <h5>Programación</h5>
                                        <ul class="mt-2">
                                            <li><strong>Python:</strong> Scripting, automation, exploits</li>
                                            <li><strong>JavaScript:</strong> XSS, DOM manipulation</li>
                                            <li><strong>C/C++:</strong> Exploits de bajo nivel, buffer overflow</li>
                                            <li><strong>SQL:</strong> Injection attacks, database analysis</li>
                                            <li><strong>PowerShell/Bash:</strong> System administration</li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="skill-item">
                                        <h5>Herramientas Especializadas</h5>
                                        <ul class="mt-2">
                                            <li><strong>Metasploit:</strong> Exploitation framework</li>
                                            <li><strong>Burp Suite:</strong> Web application testing</li>
                                            <li><strong>Nmap:</strong> Network discovery</li>
                                            <li><strong>John the Ripper:</strong> Password cracking</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
              <div class="soft-skills mt-4">
                <h3 class="text-center mb-4">Habilidades Complementarias</h3>
                <div class="row">
                    <div class="col-md-6 mb-3">
                        <div class="concept-card border-info h-100">
                            <h4>
                                <svg class="concept-icon me-2" width="24" height="24" viewBox="0 0 100 100">
                                    <use href="../../assets/images/icons.svg#icon-technical-skills"></use>
                                </svg>
                                Habilidades Analíticas
                            </h4>
                            <ul class="mt-2">
                                <li><strong>Pensamiento crítico:</strong> Análisis objetivo de información</li>
                                <li><strong>Resolución de problemas:</strong> Abordaje sistemático de desafíos complejos</li>
                                <li><strong>Atención al detalle:</strong> Detección de anomalías sutiles</li>
                                <li><strong>Capacidad de investigación:</strong> Búsqueda eficiente de información</li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-md-6 mb-3">
                        <div class="concept-card border-success h-100">
                            <h4>
                                <svg class="concept-icon me-2" width="24" height="24" viewBox="0 0 100 100">
                                    <use href="../../assets/images/icons.svg#icon-skills-wheel"></use>
                                </svg>
                                Habilidades Sociales
                            </h4>
                            <ul class="mt-2">
                                <li><strong>Comunicación técnica:</strong> Explicar conceptos complejos claramente</li>
                                <li><strong>Trabajo en equipo:</strong> Colaboración efectiva multidisciplinaria</li>
                                <li><strong>Ética profesional:</strong> Integridad en todas las actividades</li>
                                <li><strong>Actualización continua:</strong> Aprendizaje permanente de nuevas técnicas</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="topic-quiz mt-4">
                <h4>
                    <svg class="quiz-icon me-2" width="24" height="24" viewBox="0 0 100 100">
                        <use href="../../assets/images/icons.svg#icon-quiz"></use>
                    </svg>
                    Autoevaluación de Habilidades
                </h4>
                <div class="quiz-question">
                    <p><strong>¿Cuál es la habilidad más crítica para un hacker ético?</strong></p>
                    <div class="quiz-options">
                        <label class="quiz-option">
                            <input type="radio" name="q3" value="a">
                            <span>Conocer todos los lenguajes de programación</span>
                        </label>
                        <label class="quiz-option">
                            <input type="radio" name="q3" value="b">
                            <span>Capacidad de análisis y pensamiento crítico</span>
                        </label>
                        <label class="quiz-option">
                            <input type="radio" name="q3" value="c">
                            <span>Trabajar más rápido que los hackers maliciosos</span>
                        </label>
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
    `;
}function createFasesContent(topic) {
    return `        <div class="topic-header">
            <h2 class="text-center">
                <svg class="topic-icon me-2" width="32" height="32" viewBox="0 0 100 100">
                    <use href="../../assets/images/icons.svg#icon-process"></use>
                </svg>
                ${topic.title}
            </h2>
            <p class="topic-intro">
                Comprende la metodología estructurada que siguen los hackers éticos en sus evaluaciones de seguridad.
            </p>
        </div>
        
        <div class="topic-content-body">
            <h3>Las 6 Fases del Hacking Ético</h3>
              <!-- Diagrama del Proceso de Hacking -->            <div class="hacking-process-diagram mb-4">
                <h4 class="text-center mb-3">Proceso Metodológico del Hacking Ético</h4>                <svg class="w-100" style="max-height: 620px;" viewBox="0 0 800 620">
                    <use href="../../assets/images/diagrams.svg#attack-lifecycle"></use>
                </svg>
                <p class="text-center text-muted mt-2">
                    <small>Ciclo iterativo del proceso de hacking ético - Haz clic en cada fase para más detalles</small>
                </p>
            </div>
            
            <div class="phases-timeline">                <div class="phase-item" data-phase="1">
                    <div class="phase-number">1</div>
                    <div class="phase-content">
                        <h4>
                            <svg class="phase-icon me-2" width="24" height="24" viewBox="0 0 100 100">
                                <use href="../../assets/images/icons.svg#icon-reconnaissance"></use>
                            </svg>
                            Reconocimiento (Reconnaissance)
                        </h4>
                        <p><strong>Objetivo:</strong> Recopilar información sobre el objetivo sin interactuar directamente.</p>                        <div class="phase-details">
                            <h6>Tipos de Reconocimiento:</h6>
                            <ul>
                                <li><strong>Pasivo:</strong> OSINT, redes sociales, registros públicos</li>
                                <li><strong>Activo:</strong> Interacción directa con el objetivo</li>                            </ul>
                            <h6>Herramientas:</h6>
                            <span class="badge bg-secondary me-1">Google Dorking</span>
                            <span class="badge bg-secondary me-1">Shodan</span>
                            <span class="badge bg-secondary me-1">TheHarvester</span>
                            <span class="badge bg-secondary me-1">Maltego</span>
                        </div>
                    </div>
                </div>
                  <div class="phase-item" data-phase="2">
                    <div class="phase-number">2</div>
                    <div class="phase-content">
                        <h4>
                            <svg class="phase-icon me-2" width="24" height="24" viewBox="0 0 100 100">
                                <use href="../../assets/images/icons.svg#icon-scanning"></use>
                            </svg>
                            Escaneo (Scanning)
                        </h4>
                        <p><strong>Objetivo:</strong> Identificar sistemas activos, puertos abiertos y servicios disponibles.</p>                        <div class="phase-details">
                            <h6>Tipos de Escaneo:</h6>
                            <ul>
                                <li><strong>Network Scan:</strong> Descubrir hosts activos</li>
                                <li><strong>Port Scan:</strong> Identificar puertos abiertos</li>
                                <li><strong>Vulnerability Scan:</strong> Detectar vulnerabilidades conocidas</li>                            </ul>
                            <h6>Herramientas:</h6>
                            <span class="badge bg-secondary me-1">Nmap</span>
                            <span class="badge bg-secondary me-1">Masscan</span>
                            <span class="badge bg-secondary me-1">Zmap</span>
                            <span class="badge bg-secondary me-1">Nessus</span>
                        </div>
                    </div>
                </div>
                  <div class="phase-item" data-phase="3">
                    <div class="phase-number">3</div>
                    <div class="phase-content">
                        <h4>
                            <svg class="phase-icon me-2" width="24" height="24" viewBox="0 0 100 100">
                                <use href="../../assets/images/icons.svg#icon-enumeration"></use>
                            </svg>
                            Enumeración (Enumeration)
                        </h4>
                        <p><strong>Objetivo:</strong> Extraer información detallada de servicios y obtener datos específicos.</p>                        <div class="phase-details">
                            <h6>Información a Enumerar:</h6>
                            <ul>
                                <li>Usuarios y grupos del sistema</li>
                                <li>Recursos compartidos y permisos</li>
                                <li>Configuraciones de servicios</li>
                                <li>Versiones de software y patches</li>                            </ul>
                            <h6>Herramientas:</h6>
                            <span class="badge bg-secondary me-1">Enum4linux</span>
                            <span class="badge bg-secondary me-1">SMBclient</span>
                            <span class="badge bg-secondary me-1">Dirb</span>
                            <span class="badge bg-secondary me-1">Gobuster</span>
                        </div>
                    </div>
                </div>
                  <div class="phase-item" data-phase="4">
                    <div class="phase-number">4</div>
                    <div class="phase-content">
                        <h4>
                            <svg class="phase-icon me-2" width="24" height="24" viewBox="0 0 100 100">
                                <use href="../../assets/images/icons.svg#icon-exploitation"></use>
                            </svg>
                            Explotación (Exploitation)
                        </h4>
                        <p><strong>Objetivo:</strong> Aprovechar vulnerabilidades para obtener acceso no autorizado.</p>                        <div class="phase-details">
                            <h6>Tipos de Explotación:</h6>
                            <ul>
                                <li><strong>Local:</strong> Escalamiento de privilegios en sistema comprometido</li>
                                <li><strong>Remota:</strong> Explotación de servicios de red</li>
                                <li><strong>Client-side:</strong> Ataques contra aplicaciones cliente</li>                            </ul>
                            <h6>Herramientas:</h6>
                            <span class="badge bg-secondary me-1">Metasploit</span>
                            <span class="badge bg-secondary me-1">SQLmap</span>
                            <span class="badge bg-secondary me-1">Burp Suite</span>
                            <span class="badge bg-secondary me-1">ExploitDB</span>
                        </div>
                    </div>
                </div>
                  <div class="phase-item" data-phase="5">
                    <div class="phase-number">5</div>
                    <div class="phase-content">
                        <h4>
                            <svg class="phase-icon me-2" width="24" height="24" viewBox="0 0 100 100">
                                <use href="../../assets/images/icons.svg#icon-access"></use>
                            </svg>
                            Mantenimiento del Acceso
                        </h4>
                        <p><strong>Objetivo:</strong> Mantener el acceso obtenido para evaluaciones futuras (solo en contexto ético).</p>                        <div class="phase-details">
                            <h6>Técnicas:</h6>
                            <ul>
                                <li>Instalación de backdoors</li>
                                <li>Creación de cuentas de usuario</li>
                                <li>Modificación de servicios</li>
                                <li>Rootkits y persistencia</li>                            </ul>
                            <h6>Consideraciones Éticas:</h6>
                            <ul>
                                <li>Solo con autorización explícita</li>
                                <li>Documentar todos los cambios</li>
                                <li>Remover accesos al finalizar</li>
                            </ul>
                        </div>
                    </div>
                </div>
                
                <div class="phase-item" data-phase="6">
                    <div class="phase-number">6</div>                    <div class="phase-content">                        <h4>
                            <svg class="phase-icon me-2" width="24" height="24" viewBox="0 0 100 100">
                                <use href="../../assets/images/icons.svg#icon-covering"></use>
                            </svg>
                            Borrado de Huellas
                        </h4>
                        <p><strong>Objetivo:</strong> Eliminar evidencias de la actividad realizada durante la evaluación.</p>                        <div class="phase-details">
                            <h6>Actividades:</h6>
                            <ul>
                                <li>Limpiar logs del sistema</li>
                                <li>Eliminar archivos temporales</li>
                                <li>Restaurar configuraciones originales</li>
                                <li>Remover herramientas instaladas</li>                            </ul>
                            <h6>En Contexto Ético:</h6>
                            <ul>
                                <li>Documentar actividades para el reporte</li>
                                <li>Coordinar con el cliente</li>
                                <li>Mantener evidencias para auditoría</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="alert alert-warning mt-4">
                <h5>
                    <svg class="me-2" width="20" height="20" viewBox="0 0 100 100">
                        <use href="../../assets/images/icons.svg#icon-warning"></use>
                    </svg>
                    Consideraciones Legales y Éticas
                </h5>
                <p>Todas estas fases deben realizarse únicamente con:</p>
                <ul>
                    <li><strong>Autorización escrita</strong> del propietario del sistema</li>
                    <li><strong>Alcance claramente definido</strong> de las pruebas</li>
                    <li><strong>Documentación completa</strong> de todas las actividades</li>
                    <li><strong>Reporte responsable</strong> de vulnerabilidades encontradas</li>
                </ul>
            </div>
            
            <div class="topic-quiz mt-4">
                <h4>
                    <svg class="quiz-icon me-2" width="24" height="24" viewBox="0 0 100 100">
                        <use href="../../assets/images/icons.svg#icon-quiz"></use>
                    </svg>
                    Evaluación de Fases
                </h4>
                <div class="quiz-question">
                    <p><strong>¿En qué fase se debe obtener la mayor cantidad de información sin ser detectado?</strong></p>
                    <div class="quiz-options">
                        <label class="quiz-option">
                            <input type="radio" name="q4" value="a">
                            <span>Reconocimiento</span>
                        </label>
                        <label class="quiz-option">
                            <input type="radio" name="q4" value="b">
                            <span>Escaneo</span>
                        </label>                        <label class="quiz-option">
                            <input type="radio" name="q4" value="c">
                            <span>Enumeración</span>
                        </label>
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
    `;
}

function createDefensaContent(topic) {
    return `        <div class="topic-header">
            <h2 class="text-center">
                <svg class="topic-icon me-2" width="32" height="32" viewBox="0 0 100 100">
                    <use href="../../assets/images/icons.svg#icon-defense"></use>
                </svg>
                ${topic.title}
            </h2>
            <p class="topic-intro">
                Comprende la estrategia de defensa en profundidad y sus múltiples capas de protección para sistemas de información.
            </p>
        </div>
        
        <div class="topic-content-body">
            <h3>¿Qué es la Defensa en Profundidad?</h3>
            
            <div class="concept-card">
                <h4>
                    <svg class="concept-icon me-2" width="24" height="24" viewBox="0 0 100 100">
                        <use href="../../assets/images/icons.svg#icon-shield"></use>
                    </svg>
                    Definición y Objetivo
                </h4>
                <p><strong>Defensa en profundidad</strong> es una estrategia de seguridad en la que varias capas de protección se colocan a lo largo de un sistema de información.</p>
                <p><strong>Objetivo:</strong> Ayuda a prevenir los ataques directos contra un sistema de información y datos, ya que una ruptura en una sola capa lleva al atacante a la siguiente capa.</p>
            </div>

            <div class="concept-card">
                <h4>
                    <svg class="concept-icon me-2" width="24" height="24" viewBox="0 0 100 100">
                        <use href="../../assets/images/icons.svg#icon-strategy"></use>
                    </svg>
                    Estrategia de Protección Múltiple
                </h4>
                <p>La estrategia consiste en no depender de una sola medida de seguridad, sino implementar múltiples controles que trabajen en conjunto para proteger los activos de información.</p>
            </div>

            <!-- Diagrama de Defensa en Profundidad -->            <div class="defense-diagram mb-4">
                <h4 class="text-center mb-3">Modelo de Defensa en Profundidad</h4>
                <svg class="w-100" style="max-height: 600px;" viewBox="0 0 800 600">
                    <use href="../../assets/images/diagrams.svg#security-pyramid"></use>
                </svg>
                <p class="text-center text-muted mt-2">
                    <small>Capas concéntricas de seguridad - De afuera hacia adentro</small>
                </p>
            </div>
                <div class="defense-layers">
                <h3>Las 7 Capas de Protección</h3>
                <p class="mb-4">Según el modelo de defensa en profundidad, las capas se organizan de afuera hacia adentro:</p>
                
                <!-- Capas organizadas en cards con distribución de 2 columnas -->
                <div class="row">
                    <div class="col-lg-6 mb-4">
                        <div class="concept-card border-primary h-100">
                            <h5>
                                <svg class="layer-icon me-2" width="20" height="20" viewBox="0 0 100 100">
                                    <use href="../../assets/images/icons.svg#icon-policy"></use>
                                </svg>
                                1. Políticas de Seguridad
                            </h5>
                            <p><strong>Capa externa:</strong> Marco normativo y directrices organizacionales</p>
                            <ul>
                                <li>Políticas de seguridad de la información</li>
                                <li>Procedimientos de seguridad</li>
                                <li>Normativas y estándares</li>
                                <li>Capacitación del personal</li>
                            </ul>
                        </div>
                    </div>
                    
                    <div class="col-lg-6 mb-4">
                        <div class="concept-card border-secondary h-100">
                            <h5>
                                <svg class="layer-icon me-2" width="20" height="20" viewBox="0 0 100 100">
                                    <use href="../../assets/images/icons.svg#icon-security"></use>
                                </svg>
                                2. Seguridad Física
                            </h5>
                            <p><strong>Protección:</strong> Acceso físico a instalaciones y equipos</p>
                            <ul>
                                <li>Control de acceso a instalaciones</li>
                                <li>Sistemas de videovigilancia</li>
                                <li>Protección de centros de datos</li>
                                <li>Seguridad de dispositivos</li>
                            </ul>
                        </div>
                    </div>
                </div>
                
                <div class="row">
                    <div class="col-lg-6 mb-4">
                        <div class="concept-card border-success h-100">
                            <h5>
                                <svg class="layer-icon me-2" width="20" height="20" viewBox="0 0 100 100">
                                    <use href="../../assets/images/icons.svg#icon-network"></use>
                                </svg>
                                3. Seguridad Perimetral
                            </h5>
                            <p><strong>Primera línea:</strong> Defensa en la red</p>
                            <ul>
                                <li>Firewalls perimetrales</li>
                                <li>Sistemas de detección de intrusiones (IDS)</li>
                                <li>Sistemas de prevención de intrusiones (IPS)</li>
                                <li>Filtrado de contenido</li>
                            </ul>
                        </div>
                    </div>
                    
                    <div class="col-lg-6 mb-4">
                        <div class="concept-card border-warning h-100">
                            <h5>
                                <svg class="layer-icon me-2" width="20" height="20" viewBox="0 0 100 100">
                                    <use href="../../assets/images/icons.svg#icon-internal-network"></use>
                                </svg>
                                4. Seguridad Interna
                            </h5>
                            <p><strong>Protección:</strong> Tráfico interno de la red</p>
                            <ul>
                                <li>Segmentación de red (VLANs)</li>
                                <li>Control de acceso a la red (NAC)</li>
                                <li>Monitoreo de tráfico interno</li>
                                <li>Micro-segmentación</li>
                            </ul>
                        </div>
                    </div>
                </div>
                
                <div class="row">
                    <div class="col-lg-6 mb-4">
                        <div class="concept-card border-danger h-100">
                            <h5>
                                <svg class="layer-icon me-2" width="20" height="20" viewBox="0 0 100 100">
                                    <use href="../../assets/images/icons.svg#icon-computer-knowledge"></use>
                                </svg>
                                5. Seguridad en Host
                            </h5>
                            <p><strong>Protección:</strong> Sistema operativo y dispositivo</p>
                            <ul>
                                <li>Antivirus y anti-malware</li>
                                <li>Hardening de sistemas operativos</li>
                                <li>Gestión de parches y actualizaciones</li>
                                <li>Control de acceso local</li>
                            </ul>
                        </div>
                    </div>
                    
                    <div class="col-lg-6 mb-4">
                        <div class="concept-card border-info h-100">
                            <h5>
                                <svg class="layer-icon me-2" width="20" height="20" viewBox="0 0 100 100">
                                    <use href="../../assets/images/icons.svg#icon-programming"></use>
                                </svg>
                                6. Seguridad en Aplicaciones
                            </h5>
                            <p><strong>Protección:</strong> Software y aplicaciones</p>
                            <ul>
                                <li>Desarrollo seguro de aplicaciones</li>
                                <li>Pruebas de seguridad en aplicaciones</li>
                                <li>Web Application Firewall (WAF)</li>
                                <li>Gestión de vulnerabilidades</li>
                            </ul>
                        </div>
                    </div>
                </div>
                
                <div class="row">
                    <div class="col-12 mb-4">
                        <div class="concept-card border-dark">
                            <h5>
                                <svg class="layer-icon me-2" width="20" height="20" viewBox="0 0 100 100">
                                    <use href="../../assets/images/icons.svg#icon-database"></use>
                                </svg>
                                7. Seguridad de Datos
                            </h5>
                            <p><strong>Capa interna:</strong> Protección de la información crítica</p>
                            <div class="row">
                                <div class="col-md-6">
                                    <ul>
                                        <li>Cifrado de datos en reposo y tránsito</li>
                                        <li>Prevención de pérdida de datos (DLP)</li>
                                    </ul>
                                </div>
                                <div class="col-md-6">
                                    <ul>
                                        <li>Clasificación de información</li>
                                        <li>Respaldo y recuperación</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="key-concepts mt-4">
                <h3>Conceptos Clave</h3>
                
                <div class="row">
                    <div class="col-md-6">
                        <div class="concept-highlight">
                            <h5>
                                <svg class="me-2" width="16" height="16" viewBox="0 0 100 100">
                                    <use href="../../assets/images/icons.svg#icon-target"></use>
                                </svg>
                                Objetivo Principal
                            </h5>
                            <p>Prevenir ataques directos contra sistemas de información y datos. Una ruptura en una capa lleva al atacante a la siguiente capa de protección.</p>
                        </div>
                    </div>
                    
                    <div class="col-md-6">
                        <div class="concept-highlight">
                            <h5>
                                <svg class="me-2" width="16" height="16" viewBox="0 0 100 100">
                                    <use href="../../assets/images/icons.svg#icon-layers"></use>
                                </svg>
                                Estructura en Capas
                            </h5>
                            <p>Las capas se organizan en elipse de afuera hacia adentro, desde políticas generales hasta la protección específica de datos.</p>
                        </div>
                    </div>
                </div>
                
                <div class="alert alert-info mt-3">
                    <h6>
                        <svg class="me-2" width="16" height="16" viewBox="0 0 100 100">
                            <use href="../../assets/images/icons.svg#icon-lightbulb"></use>
                        </svg>
                        Principio Fundamental:
                    </h6>
                    <p class="mb-0">La defensa en profundidad asegura que <strong>no se dependa de una sola medida de seguridad</strong>. Cada capa proporciona una línea de defensa independiente que funciona en conjunto con las demás.</p>
                </div>
            </div>
            
            <div class="topic-quiz mt-4">
                <h4>
                    <svg class="quiz-icon me-2" width="24" height="24" viewBox="0 0 100 100">
                        <use href="../../assets/images/icons.svg#icon-quiz"></use>
                    </svg>
                    Evaluación Final
                </h4>
                <div class="quiz-question">
                    <p><strong>¿Cuál es el objetivo principal de la defensa en profundidad?</strong></p>
                    <div class="quiz-options">
                        <label class="quiz-option">
                            <input type="radio" name="q5" value="a">
                            <span>Concentrar todas las medidas de seguridad en una sola capa</span>
                        </label>
                        <label class="quiz-option">
                            <input type="radio" name="q5" value="b">
                            <span>Prevenir ataques directos usando múltiples capas, donde una ruptura lleva al atacante a la siguiente capa</span>
                        </label>
                        <label class="quiz-option">
                            <input type="radio" name="q5" value="c">
                            <span>Eliminar completamente todos los riesgos de seguridad</span>
                        </label>
                    </div>                </div>
            </div>
            
            <div class="topic-actions mt-4">
                <button class="btn btn-sena-primary" onclick="completeTopic(4)">
                    <svg class="btn-icon me-2" width="16" height="16" viewBox="0 0 100 100">
                        <use href="../../assets/images/icons.svg#icon-check"></use>
                    </svg>
                    Marcar como Completado
                </button>
            </div>
        </div>
    `;
}

// Setup topic interactions
function setupTopicInteractions() {
    // Quiz interactions
    const quizOptions = document.querySelectorAll('.quiz-option input');
    quizOptions.forEach(option => {
        option.addEventListener('change', function() {
            // Handle quiz answer
            handleQuizAnswer(this);
        });
    });
    
    // Interactive diagram elements - Updated for new diagrams
    const diagramElements = document.querySelectorAll('svg[viewBox] use');
    diagramElements.forEach(element => {
        const svg = element.closest('svg');
        if (svg) {
            svg.style.cursor = 'pointer';
            svg.addEventListener('click', function(e) {
                e.stopPropagation();
                const diagramId = element.getAttribute('href');
                if (diagramId) {
                    showDiagramInfo(diagramId);
                }
            });
            
            // Add hover effects for better UX
            svg.addEventListener('mouseenter', function() {
                this.style.transform = 'scale(1.02)';
                this.style.transition = 'transform 0.3s ease';
            });
            
            svg.addEventListener('mouseleave', function() {
                this.style.transform = 'scale(1)';
            });
        }
    });
    
    // Interactive elements
    const interactiveElements = document.querySelectorAll('[data-interactive]');
    interactiveElements.forEach(element => {
        element.addEventListener('click', function() {
            this.classList.toggle('active');
            this.classList.add('pulse');
            setTimeout(() => this.classList.remove('pulse'), 600);
        });
    });
    
    // Concept cards hover effects and click interactions - Enhanced
    const conceptCards = document.querySelectorAll('.concept-card');
    conceptCards.forEach((card, index) => {
        card.style.cursor = 'pointer';
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 8px 25px rgba(0,0,0,0.15)';
            this.style.transition = 'all 0.3s ease';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '';
        });
        
        card.addEventListener('click', function() {
            this.classList.add('concept-clicked');
            
            // Add visual feedback with icon animation
            const icon = this.querySelector('.concept-icon');
            if (icon) {
                icon.style.transform = 'scale(1.2) rotate(10deg)';
                setTimeout(() => {
                    icon.style.transform = 'scale(1) rotate(0deg)';
                }, 300);
            }
            
            setTimeout(() => this.classList.remove('concept-clicked'), 300);
        });
    });
    
    // Phase timeline interactions
    const phaseItems = document.querySelectorAll('.phase-item');
    phaseItems.forEach((item, index) => {
        item.style.cursor = 'pointer';
        item.addEventListener('click', function() {
            // Remove active state from other phases
            phaseItems.forEach(pi => pi.classList.remove('phase-active'));
            
            // Add visual feedback
            this.classList.add('phase-active');
            
            // Show detailed info
            showPhaseDetails(index + 1);
        });
    });
    
    // Skills category interactions
    const skillCategories = document.querySelectorAll('.skill-category');
    skillCategories.forEach((category, index) => {
        const header = category.querySelector('h4');
        if (header) {
            header.style.cursor = 'pointer';
            header.addEventListener('click', function() {
                category.classList.toggle('skill-expanded');
                const items = category.querySelector('.skill-items');
                if (items) {
                    items.style.display = items.style.display === 'none' ? 'block' : 'none';
                }
            });
        }
    });
    
    // Defense layer interactions
    const defenseLayers = document.querySelectorAll('.layer');
    defenseLayers.forEach((layer, index) => {
        layer.style.cursor = 'pointer';
        layer.addEventListener('click', function() {
            defenseLayers.forEach(l => l.classList.remove('layer-active'));
            this.classList.add('layer-active');
            showLayerDetails(index + 1);
        });
    });
      // Skills progress simulation
    initializeSkillsProgress();
    
    // Case study interactions
    initializeCaseStudies();
}

// Handle quiz answers
function handleQuizAnswer(inputElement) {
    const questionContainer = inputElement.closest('.quiz-question');
    const questionName = inputElement.name;
    const selectedValue = inputElement.value;
    
    // Remove previous feedback
    const existingFeedback = questionContainer.querySelector('.quiz-feedback');
    if (existingFeedback) {
        existingFeedback.remove();
    }
    
    // Define correct answers with explanations
    const correctAnswers = {
        'q1': {
            correct: 'b',
            explanation: 'Un exploit es la herramienta específica que aprovecha una vulnerabilidad, mientras que un ataque es la acción general de compromenter la seguridad.'
        },
        'q2_1': {
            correct: 'b',
            explanation: 'Los White Hat Hackers siempre obtienen autorización escrita antes de realizar cualquier prueba de penetración.'
        },
        'q2_2': {
            correct: 'a',
            explanation: 'El Gray Hat puede revelar vulnerabilidades públicamente sin dar tiempo a las organizaciones para aplicar parches.'
        },
        'q3': {
            correct: 'b',
            explanation: 'La capacidad de análisis y pensamiento crítico es fundamental para identificar y explotar vulnerabilidades de manera ética.'
        },
        'q4': {
            correct: 'a',
            explanation: 'El reconocimiento es principalmente pasivo y permite obtener la mayor cantidad de información sin ser detectado.'
        },
        'q5': {
            correct: 'b',
            explanation: 'La defensa en profundidad busca crear múltiples capas de protección para que si una falla, otras continúen funcionando.'
        }
    };    
    // Create feedback element
    const feedback = document.createElement('div');
    feedback.className = 'quiz-feedback mt-3';
    
    const answerInfo = correctAnswers[questionName];
    if (answerInfo && answerInfo.correct === selectedValue) {
        feedback.innerHTML = `
            <div class="alert alert-success">
                <i class="fas fa-check-circle me-2"></i>
                <strong>¡Correcto!</strong> ${answerInfo.explanation}
            </div>
        `;
        // Update progress
        updateQuizProgress(questionName, true);
    } else if (answerInfo) {
        feedback.innerHTML = `
            <div class="alert alert-warning">
                <i class="fas fa-info-circle me-2"></i>
                <strong>Respuesta incorrecta.</strong> ${answerInfo.explanation}
            </div>
        `;
        updateQuizProgress(questionName, false);
    }
    
    questionContainer.appendChild(feedback);
    
    // Check if all quizzes in topic are completed
    checkTopicQuizCompletion();
}

// Update quiz progress
function updateQuizProgress(questionName, isCorrect) {
    const currentTopic = moduleData.topics[currentTopicIndex];
    if (!currentTopic.quizProgress) {
        currentTopic.quizProgress = {};
    }
    
    currentTopic.quizProgress[questionName] = isCorrect;
    
    // Save progress
    saveTopicProgress();
}

// Check if all quizzes in current topic are completed correctly
function checkTopicQuizCompletion() {
    const currentTopic = moduleData.topics[currentTopicIndex];
    if (!currentTopic.quizProgress) return false;
    
    const topicQuizzes = document.querySelectorAll('.quiz-question input[type="radio"]:checked');
    const totalQuestions = new Set();
    
    topicQuizzes.forEach(input => {
        totalQuestions.add(input.name);
    });
    
    const correctAnswers = Object.values(currentTopic.quizProgress).filter(answer => answer === true);
    
    if (correctAnswers.length >= totalQuestions.size && totalQuestions.size > 0) {
        showTopicCompletionBadge();
        return true;
    }
    
    return false;
}

// Show topic completion badge
function showTopicCompletionBadge() {
    const existingBadge = document.querySelector('.topic-completion-badge');
    if (existingBadge) return;
    
    const badge = document.createElement('div');
    badge.className = 'topic-completion-badge';
    badge.innerHTML = `
        <div class="alert alert-success border-success">
            <div class="d-flex align-items-center">
                <i class="fas fa-trophy fa-2x text-warning me-3"></i>
                <div>
                    <h6 class="mb-1">¡Excelente trabajo!</h6>
                    <p class="mb-0">Has completado todos los ejercicios de este tema correctamente.</p>
                </div>
            </div>
        </div>
    `;
    
    const topicContent = document.getElementById('topic-content');
    if (topicContent) {
        topicContent.appendChild(badge);
    }
    
    // Auto-mark topic as completed
    setTimeout(() => {
        const completeButton = document.querySelector('.topic-actions .btn-sena-primary');
        if (completeButton && !moduleData.topics[currentTopicIndex].completed) {
            completeButton.click();
        }
    }, 2000);
}

// Show diagram information
function showDiagramInfo(diagramId) {
    const diagramInfos = {
        '../../assets/images/diagrams.svg#hacker-types': {
            title: 'Comparación de Tipos de Hackers',
            description: 'Este diagrama muestra las diferencias entre los distintos tipos de hackers según su código ético y motivaciones.',
            details: [
                'White Hat: Hackers éticos que mejoran la seguridad con autorización',
                'Black Hat: Hackers maliciosos con intenciones criminales',
                'Gray Hat: Operan en zona intermedia sin autorización clara',
                'Suicide Hat: Atacan infraestructura crítica sin importar consecuencias'
            ]
        },
        '../../assets/images/diagrams.svg#skills-wheel': {
            title: 'Rueda de Habilidades del Hacker Ético',
            description: 'Representa las competencias técnicas fundamentales que debe dominar un profesional en seguridad.',
            details: [
                'Programación: Conocimiento de lenguajes y desarrollo seguro',
                'Redes: Protocolos, análisis de tráfico y arquitectura',
                'Sistemas Operativos: Windows, Linux, macOS y móviles',
                'Seguridad: Criptografía y frameworks de seguridad',
                'Hardware: Arquitectura de computadoras y análisis forense',
                'Bases de Datos: SQL, NoSQL y técnicas de inyección'
            ]
        },
        '../../assets/images/diagrams.svg#attack-lifecycle': {
            title: 'Ciclo de Vida de un Ataque',
            description: 'Metodología estructurada de las 6 fases del hacking ético profesional.',
            details: [
                'Reconocimiento: Recopilación de información pasiva y activa',
                'Escaneo: Identificación de sistemas y servicios activos',
                'Enumeración: Extracción de información detallada de servicios',
                'Explotación: Aprovechamiento de vulnerabilidades encontradas',
                'Mantenimiento: Persistencia en el sistema (solo en contexto ético)',
                'Borrado: Eliminación de evidencias de actividad realizada'
            ]
        },        '../../assets/images/diagrams.svg#security-pyramid': {
            title: 'Modelo de Defensa en Profundidad',
            description: 'Estrategia de seguridad multicapa con círculos concéntricos que representan las capas de protección progresiva.',
            details: [
                'Políticas y Procedimientos: Capa externa de gobierno corporativo y marcos normativos',
                'Concienciación: Capacitación del personal y cultura de seguridad organizacional',
                'Seguridad Física: Control de acceso físico a instalaciones y videovigilancia',
                'Perímetro de Red: Firewalls, IDS/IPS y sistemas de frontera de red',
                'Red Interna: Segmentación de redes, VLANs y control de acceso interno',
                'Hosts: Antivirus, gestión de parches y protección a nivel de sistema',
                'Datos: Cifrado, clasificación y protección de la información crítica (centro)'
            ]
        },
        '../../assets/images/diagrams.svg#hacking-concepts-flow': {
            title: 'Flujo de Conceptos del Hacking',
            description: 'Relación e interconexión entre los conceptos fundamentales del hacking ético.',
            details: [
                'Valor del Hacking: Motivación y evaluación de objetivos',
                'Objetivo de Evaluación: Definición clara del alcance',
                'Ataques: Acciones para comprometer la seguridad',
                'Exploits: Herramientas específicas de explotación',
                'Zero Day: Vulnerabilidades desconocidas de alto riesgo',
                'Cadena de Margaritas: Secuencia de ataques interconectados'
            ]
        }
    };
    
    const info = diagramInfos[diagramId];
    if (!info) return;
    
    const modal = document.createElement('div');
    modal.className = 'modal fade';
    modal.innerHTML = `
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header sena-bg-gradient text-white">
                    <h5 class="modal-title">
                        <i class="fas fa-chart-line me-2"></i>${info.title}
                    </h5>
                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
                </div>
                <div class="modal-body">
                    <p class="lead">${info.description}</p>
                    <h6><i class="fas fa-info-circle me-2 text-primary"></i>Elementos del Diagrama:</h6>
                    <ul class="list-group list-group-flush">
                        ${info.details.map(detail => `
                            <li class="list-group-item border-0 px-0">
                                <i class="fas fa-chevron-right me-2 text-success"></i>${detail}
                            </li>
                        `).join('')}
                    </ul>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    const bootstrapModal = new bootstrap.Modal(modal);
    bootstrapModal.show();
    
    modal.addEventListener('hidden.bs.modal', function() {
        modal.remove();
    });
}

// Show layer details for defense in depth
function showLayerDetails(layerNumber) {
    const layerDetails = {
        1: {
            title: 'Políticas y Procedimientos',
            description: 'Base fundamental de la seguridad organizacional',
            importance: 'Sin políticas claras, no hay marco de referencia para las decisiones de seguridad.',
            examples: [
                'Política de contraseñas seguras',
                'Procedimientos de respuesta a incidentes',
                'Capacitación de concientización',
                'Acuerdos de confidencialidad'
            ]
        },
        2: {
            title: 'Seguridad Física',
            description: 'Protección del acceso físico a recursos críticos',
            importance: 'El acceso físico puede anular muchas protecciones lógicas.',
            examples: [
                'Tarjetas de acceso y biometría',
                'Cámaras de videovigilancia',
                'Gabinetes cerrados para servidores',
                'Políticas de escritorio limpio'
            ]
        },
        3: {
            title: 'Perímetro de Red',
            description: 'Primera línea de defensa contra amenazas externas',
            importance: 'Filtra el tráfico malicioso antes de que ingrese a la red interna.',
            examples: [
                'Firewalls de próxima generación',
                'Sistemas de detección de intrusiones',
                'Filtrado de correo y web',
                'VPN para acceso remoto'
            ]
        },
        4: {
            title: 'Seguridad de Red Interna',
            description: 'Protección del tráfico y comunicaciones internas',
            importance: 'Previene el movimiento lateral de atacantes dentro de la red.',
            examples: [
                'Segmentación con VLANs',
                'Control de acceso a la red (NAC)',
                'Monitoreo de tráfico interno',
                'Micro-segmentación'
            ]
        },
        5: {
            title: 'Seguridad de Host',
            description: 'Protección a nivel de sistemas individuales',
            importance: 'Cada sistema debe protegerse como si fuera el último bastión.',
            examples: [
                'Antivirus y anti-malware',
                'Hardening del sistema operativo',
                'Gestión de parches automática',
                'Sistemas de prevención en host (HIPS)'
            ]
        },
        6: {
            title: 'Seguridad de Aplicaciones',
            description: 'Protección del software y aplicaciones empresariales',
            importance: 'Las aplicaciones son el objetivo principal de muchos ataques.',
            examples: [
                'Desarrollo seguro (SSDLC)',
                'Pruebas de seguridad automatizadas',
                'Web Application Firewall (WAF)',
                'Gestión de vulnerabilidades'
            ]
        },
        7: {
            title: 'Seguridad de Datos',
            description: 'Protección de la información más valiosa',
            importance: 'Los datos son el activo más importante de cualquier organización.',
            examples: [
                'Cifrado de datos en reposo y tránsito',
                'Data Loss Prevention (DLP)',
                'Clasificación y etiquetado',
                'Respaldo y recuperación'
            ]
        }
    };
    
    const layer = layerDetails[layerNumber];
    if (!layer) return;
    
    // Show layer information in a tooltip or modal
    showNotification(`Capa ${layerNumber}: ${layer.title} - ${layer.description}`, 'info', 5000);
}
function showPhaseDetails(phaseNumber) {
    const phaseInfo = {
        1: {
            title: "Reconocimiento",
            description: "Fase de recopilación de información pasiva y activa",
            tools: ["Google Dorking", "Shodan", "TheHarvester", "Maltego", "Recon-ng"],
            techniques: ["OSINT", "Social Engineering", "DNS Enumeration", "Whois Lookup"]
        },
        2: {
            title: "Escaneo",
            description: "Identificación de sistemas activos y servicios disponibles",
            tools: ["Nmap", "Masscan", "Zmap", "Unicornscan", "Hping3"],
            techniques: ["Port Scanning", "Service Detection", "OS Fingerprinting", "Vulnerability Scanning"]
        },
        3: {
            title: "Enumeración",
            description: "Extracción de información detallada de servicios identificados",
            tools: ["Enum4linux", "SMBclient", "Dirb", "Gobuster", "Nikto"],
            techniques: ["User Enumeration", "Share Enumeration", "Service Enumeration", "Directory Brute Force"]
        },
        4: {
            title: "Explotación",
            description: "Aprovechamiento de vulnerabilidades para obtener acceso",
            tools: ["Metasploit", "SQLmap", "Burp Suite", "OWASP ZAP", "ExploitDB"],
            techniques: ["Buffer Overflow", "SQL Injection", "XSS", "CSRF", "Command Injection"]
        },
        5: {
            title: "Mantenimiento del Acceso",
            description: "Persistencia en el sistema comprometido (solo en contexto ético)",
            tools: ["Meterpreter", "Empire", "Cobalt Strike", "Netcat", "Custom Backdoors"],
            techniques: ["Backdoor Installation", "Privilege Escalation", "Lateral Movement", "Data Exfiltration"]
        },
        6: {
            title: "Borrado de Huellas",
            description: "Eliminación de evidencias de la actividad realizada",
            tools: ["CCleaner", "BleachBit", "Log Cleaners", "Custom Scripts"],
            techniques: ["Log Clearing", "File Deletion", "Registry Cleaning", "Network Traffic Masking"]
        }
    };
    
    const phase = phaseInfo[phaseNumber];
    if (!phase) return;
    
    const modal = document.createElement('div');
    modal.className = 'modal fade';
    modal.innerHTML = `
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header sena-bg-gradient text-white">
                    <h5 class="modal-title">
                        <i class="fas fa-info-circle me-2"></i>Fase ${phaseNumber}: ${phase.title}
                    </h5>
                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
                </div>
                <div class="modal-body">
                    <p class="lead">${phase.description}</p>
                    
                    <div class="row">
                        <div class="col-md-6">
                            <h6><i class="fas fa-tools me-2 text-primary"></i>Herramientas Principales:</h6>
                            <ul class="list-group list-group-flush">
                                ${phase.tools.map(tool => `
                                    <li class="list-group-item border-0 px-0 py-1">
                                        <i class="fas fa-chevron-right me-2 text-success"></i>${tool}
                                    </li>
                                `).join('')}
                            </ul>
                        </div>
                        <div class="col-md-6">
                            <h6><i class="fas fa-cogs me-2 text-warning"></i>Técnicas Comunes:</h6>
                            <ul class="list-group list-group-flush">
                                ${phase.techniques.map(technique => `
                                    <li class="list-group-item border-0 px-0 py-1">
                                        <i class="fas fa-chevron-right me-2 text-info"></i>${technique}
                                    </li>
                                `).join('')}
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    const bootstrapModal = new bootstrap.Modal(modal);
    bootstrapModal.show();
    
    modal.addEventListener('hidden.bs.modal', function() {
        modal.remove();
    });
}

// Initialize skills progress simulation
function initializeSkillsProgress() {
    const skillItems = document.querySelectorAll('.skill-item');
    skillItems.forEach((item, index) => {
        item.addEventListener('click', function() {
            this.classList.add('skill-selected');
            
            // Show skill details tooltip
            showSkillTooltip(this, index);
        });
    });
}

// Initialize case studies
function initializeCaseStudies() {
    const caseOptions = document.querySelectorAll('.case-option');
    caseOptions.forEach(option => {
        option.addEventListener('click', function() {
            const caseId = this.dataset.case;
            const selectedValue = this.dataset.value;
            handleCaseStudyAnswer(caseId, selectedValue, this);
        });
    });
}

// Handle case study answers
function handleCaseStudyAnswer(caseId, selectedValue, buttonElement) {
    const feedbackElement = document.getElementById(`case-${caseId}-feedback`);
    const allOptions = buttonElement.parentNode.querySelectorAll('.case-option');
    
    // Remove previous selection styles
    allOptions.forEach(opt => {
        opt.classList.remove('btn-success', 'btn-danger', 'btn-warning');
        opt.classList.add('btn-outline-primary');
    });
    
    // Define case study answers and explanations
    const caseAnswers = {
        'q1': {
            correct: 'a',
            explanations: {
                'a': {
                    type: 'success',
                    text: '✅ Correcto. Como hacker ético, tu responsabilidad principal es informar inmediatamente al cliente sobre la vulnerabilidad encontrada, proporcionando documentación detallada y recomendaciones para su corrección. Esto permite que la empresa aplique un parche antes del lanzamiento.'
                },
                'b': {
                    type: 'warning',
                    text: '⚠️ Parcialmente correcto. Aunque demostrar el impacto puede ser útil, solo debes hacerlo con autorización explícita y de manera controlada. Lo más importante es documentar y reportar primero.'
                },
                'c': {
                    type: 'danger',
                    text: '❌ Incorrecto. Publicar vulnerabilidades sin autorización viola los principios del hacking ético y puede exponer a la empresa a ataques maliciosos. Esto sería Gray Hat o incluso comportamiento irresponsable.'
                }
            }
        }
    };
    
    const caseInfo = caseAnswers[caseId];
    if (caseInfo && caseInfo.explanations[selectedValue]) {
        const explanation = caseInfo.explanations[selectedValue];
        
        // Update button style
        buttonElement.classList.remove('btn-outline-primary');
        if (explanation.type === 'success') {
            buttonElement.classList.add('btn-success');
        } else if (explanation.type === 'warning') {
            buttonElement.classList.add('btn-warning');
        } else {
            buttonElement.classList.add('btn-danger');
        }
        
        // Show feedback
        feedbackElement.innerHTML = `
            <div class="alert alert-${explanation.type === 'success' ? 'success' : explanation.type === 'warning' ? 'warning' : 'danger'} mt-3">
                ${explanation.text}
            </div>
        `;
        feedbackElement.style.display = 'block';
        
        // Update progress if correct
        if (selectedValue === caseInfo.correct) {
            updateCaseStudyProgress(caseId, true);
        }
    }
}

// Update case study progress
function updateCaseStudyProgress(caseId, isCorrect) {
    const currentTopic = moduleData.topics[currentTopicIndex];
    if (!currentTopic.caseStudyProgress) {
        currentTopic.caseStudyProgress = {};
    }
    
    currentTopic.caseStudyProgress[caseId] = isCorrect;
    saveTopicProgress();
}
function showSkillTooltip(element, skillIndex) {
    const existingTooltip = document.querySelector('.skill-tooltip');
    if (existingTooltip) {
        existingTooltip.remove();
    }
    
    const skillTips = [
        "💡 Dominar múltiples SO te permite adaptarte a cualquier entorno de prueba",
        "🌐 El conocimiento de redes es fundamental para entender cómo se propagan los ataques",
        "🔧 La arquitectura de hardware determina las vulnerabilidades de bajo nivel",
        "🛡️ La criptografía es esencial para evaluar la fortaleza de las protecciones",
        "💻 La programación te permite crear herramientas personalizadas y exploits"
    ];
    
    const tooltip = document.createElement('div');
    tooltip.className = 'skill-tooltip';
    tooltip.innerHTML = `
        <div class="toast show" style="position: absolute; z-index: 1000;">
            <div class="toast-header">
                <i class="fas fa-lightbulb text-warning me-2"></i>
                <strong class="me-auto">Tip del Experto</strong>
            </div>
            <div class="toast-body">
                ${skillTips[skillIndex % skillTips.length]}
            </div>
        </div>
    `;
    
    element.appendChild(tooltip);
    
    setTimeout(() => {
        tooltip.remove();
        element.classList.remove('skill-selected');
    }, 3000);
}

// Navigation functions
function previousTopic() {
    console.log(`[DEBUG] previousTopic called: currentIndex ${currentTopicIndex}`);
    if (currentTopicIndex > 0) {
        loadTopic(currentTopicIndex - 1);
    }
}

function nextTopic() {
    console.log(`[DEBUG] nextTopic called: currentIndex ${currentTopicIndex}, total topics ${moduleData.topics.length}`);
    
    // ENHANCED: Additional validation before navigation
    if (currentTopicIndex < 0 || currentTopicIndex >= moduleData.topics.length) {
        console.log(`[DEBUG] ERROR: Invalid currentTopicIndex ${currentTopicIndex}, forcing reset to 0`);
        currentTopicIndex = 0;
        loadTopic(0);
        return;
    }
    
    if (currentTopicIndex < moduleData.topics.length - 1) {
        const nextIndex = currentTopicIndex + 1;
        const nextTopic = moduleData.topics[nextIndex];
        
        console.log(`[DEBUG] Navigating to next topic:`);
        console.log(`[DEBUG]   From: ${currentTopicIndex} (${moduleData.topics[currentTopicIndex].id})`);
        console.log(`[DEBUG]   To: ${nextIndex} (${nextTopic.id} - ${nextTopic.title})`);
        
        loadTopic(nextIndex);
        
        // Verify navigation was successful
        setTimeout(() => {
            if (currentTopicIndex === nextIndex) {
                console.log(`[DEBUG] ✅ Navigation successful: Now at ${currentTopicIndex} (${moduleData.topics[currentTopicIndex].id})`);
            } else {
                console.log(`[DEBUG] ❌ Navigation failed: Expected ${nextIndex}, but at ${currentTopicIndex}`);
            }
        }, 100);
    } else {
        // Module completed
        console.log(`[DEBUG] Module completed`);
        completeModule();
    }
}

function completeTopic(topicIndex) {
    console.log(`🎯 completeTopic called with index: ${topicIndex}`);
    
    try {
        // Validate topicIndex
        if (topicIndex < 0 || topicIndex >= moduleData.topics.length) {
            console.error(`❌ Invalid topicIndex: ${topicIndex}. Valid range: 0-${moduleData.topics.length - 1}`);
            showNotification('Error: Índice de tema inválido', 'error');
            return;
        }
        
        const topic = moduleData.topics[topicIndex];
        console.log(`📖 Topic to complete: ${topic.title} (completed: ${topic.completed})`);
        
        if (!topic.completed) {
            topic.completed = true;
            console.log(`✅ Topic marked as completed: ${topic.title}`);
            
            // Update progress
            try {
                updateModuleProgress();
                console.log(`📊 Module progress updated`);
            } catch (error) {
                console.error(`❌ Error updating module progress:`, error);
            }
            
            // Update navigation
            try {
                loadModuleNavigation();
                console.log(`🧭 Navigation updated`);
            } catch (error) {
                console.error(`❌ Error updating navigation:`, error);
            }
            
            // Update progress display
            try {
                updateProgressDisplay();
                console.log(`📈 Progress display updated`);
            } catch (error) {
                console.error(`❌ Error updating progress display:`, error);
            }
            
            // Save progress
            try {
                saveTopicProgress();
                console.log(`💾 Progress saved`);
            } catch (error) {
                console.error(`❌ Error saving progress:`, error);
            }
            
            // Show completion notification
            try {
                showNotification(`¡Tema "${topic.title}" completado!`, 'success');
                console.log(`🎉 Completion notification shown`);
            } catch (error) {
                console.error(`❌ Error showing notification:`, error);
            }
              // Auto-advance to next topic
            setTimeout(() => {
                try {
                    const completedCount = moduleData.topics.filter(t => t.completed).length;
                    
                    if (currentTopicIndex < moduleData.topics.length - 1) {
                        console.log(`➡️ Auto-advancing to next topic`);
                        nextTopic();                    } else if (completedCount === moduleData.topics.length) {
                        console.log(`🏁 All topics completed! Module finished!`);
                        
                        // Mark module as completed in global progress
                        const timeSpent = startTime ? Math.floor((Date.now() - startTime) / 1000) : 0;
                        updateProgress(moduleData.id, 'completed', {
                            progress: 100,
                            timeSpent: timeSpent,
                            completedTopics: moduleData.topics.map(t => t.id)
                        });
                        
                        // Show module completion with redirect option
                        showModuleCompletionWithRedirect();
                    } else {
                        console.log(`🏁 Last topic reached but not all completed`);
                        showNotification('¡Último tema alcanzado!', 'success');
                    }
                } catch (error) {
                    console.error(`❌ Error in auto-advance:`, error);
                }
            }, 1500);
            
        } else {
            console.log(`ℹ️ Topic already completed: ${topic.title}`);
            showNotification(`El tema "${topic.title}" ya está completado`, 'info');
        }
        
    } catch (error) {
        console.error(`❌ Error in completeTopic:`, error);
        showNotification('Error al completar el tema', 'error');
    }
}

function completeModule() {
    // Calculate time spent
    const timeSpent = startTime ? Math.floor((Date.now() - startTime) / 1000) : 0;
    
    // Update progress
    updateProgress(moduleData.id, 'completed', {
        timeSpent: timeSpent,
        completedTopics: moduleData.topics.filter(t => t.completed).map(t => t.id)
    });
    
    // Show completion modal
    showModuleCompletionModal();
}

function showModuleCompletionModal() {
    const modal = document.createElement('div');
    modal.className = 'modal fade';
    modal.innerHTML = `
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header sena-bg-gradient text-white">
                    <h4 class="modal-title">
                        <i class="fas fa-trophy me-2"></i>¡Módulo Completado!
                    </h4>
                </div>
                <div class="modal-body text-center py-5">
                    <i class="fas fa-medal fa-4x text-warning mb-4"></i>
                    <h3>¡Felicitaciones!</h3>
                    <p class="lead">Has completado exitosamente el módulo "${moduleData.title}"</p>
                    <div class="completion-stats mt-4">
                        <div class="row">
                            <div class="col-md-4">
                                <h5>${moduleData.topics.length}</h5>
                                <small class="text-muted">Temas Completados</small>
                            </div>
                            <div class="col-md-4">
                                <h5>100%</h5>
                                <small class="text-muted">Progreso</small>
                            </div>
                            <div class="col-md-4">
                                <h5>${formatTime(startTime ? Math.floor((Date.now() - startTime) / 1000) : 0)}</h5>
                                <small class="text-muted">Tiempo Total</small>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">                    <button type="button" class="btn btn-secondary" onclick="goToHome()">Ir al Inicio</button>
                    <button type="button" class="btn btn-sena-primary" onclick="goToNextModule()">Siguiente Módulo</button>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    const bootstrapModal = new bootstrap.Modal(modal);
    bootstrapModal.show();
    
    modal.addEventListener('hidden.bs.modal', function() {
        modal.remove();
    });
}

// Show module completion with auto-redirect option
function showModuleCompletionWithRedirect() {
    const modal = document.createElement('div');
    modal.className = 'modal fade';
    modal.id = 'moduleCompletionModal';
    modal.innerHTML = `
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header sena-bg-gradient text-white">
                    <h4 class="modal-title">
                        <i class="fas fa-trophy me-2"></i>¡Módulo Completado!
                    </h4>
                </div>
                <div class="modal-body text-center">
                    <div class="completion-icon mb-4">
                        <i class="fas fa-check-circle" style="font-size: 5rem; color: var(--sena-primary);"></i>
                    </div>
                    <h3>¡Felicitaciones!</h3>
                    <p class="lead">Has completado todos los temas del módulo</p>
                    
                    <div class="alert alert-info">
                        <i class="fas fa-info-circle me-2"></i>
                        Serás redirigido a la página principal en <span id="countdown">10</span> segundos
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" onclick="cancelRedirect()">Quedarse Aquí</button>
                    <button type="button" class="btn btn-sena-primary" onclick="redirectToHome()">Ir al Inicio Ahora</button>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    const bootstrapModal = new bootstrap.Modal(modal, { backdrop: 'static', keyboard: false });
    bootstrapModal.show();
    
    // Start countdown
    let countdownSeconds = 10;
    const countdownElement = document.getElementById('countdown');
    
    const countdownInterval = setInterval(() => {
        countdownSeconds--;
        if (countdownElement) {
            countdownElement.textContent = countdownSeconds;
        }
        
        if (countdownSeconds <= 0) {
            clearInterval(countdownInterval);
            redirectToHome();
        }
    }, 1000);
    
    window.redirectCountdownInterval = countdownInterval;
    
    modal.addEventListener('hidden.bs.modal', function() {
        if (window.redirectCountdownInterval) {
            clearInterval(window.redirectCountdownInterval);
        }
        modal.remove();
    });
}

function cancelRedirect() {
    if (window.redirectCountdownInterval) {
        clearInterval(window.redirectCountdownInterval);
    }
    
    const modal = document.getElementById('moduleCompletionModal');
    if (modal) {
        const bootstrapModal = bootstrap.Modal.getInstance(modal);
        if (bootstrapModal) {
            bootstrapModal.hide();
        }
    }
    
    showNotification('Te has quedado en el módulo. ¡Puedes revisar los temas cuando quieras!', 'info');
}

function redirectToHome() {
    if (window.redirectCountdownInterval) {
        clearInterval(window.redirectCountdownInterval);
    }
    
    showNotification('Redirigiendo a la página principal...', 'success');
    setTimeout(() => {
        window.location.href = '../../index.html';
    }, 1000);
}

// Update functions
function updateNavigationState() {
    // Update sidebar navigation
    document.querySelectorAll('.nav-item').forEach((item, index) => {
        item.classList.remove('active');
        if (index === currentTopicIndex) {
            item.classList.add('active');
        }
    });
    
    // Topic navigation buttons removed - no longer updating navigation buttons
}

function updateModuleProgress() {
    const completedTopics = moduleData.topics.filter(t => t.completed).length;
    moduleProgress = Math.round((completedTopics / moduleData.topics.length) * 100);
}

function updateProgressDisplay() {
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
    
    // Check if all topics are completed and redirect to main page
    if (completedCount === moduleData.topics.length) {
        console.log('🎉 Todos los temas completados! Redirigiendo a la página principal...');
        
        // Show completion notification
        showNotification('¡Felicitaciones! Has completado todos los temas del módulo', 'success');
        
        // Redirect to main page after a short delay
        setTimeout(() => {
            window.location.href = '../../index.html';
        }, 2000);
    }
}

function saveTopicProgress() {
    const completedTopics = moduleData.topics.filter(t => t.completed).map(t => t.id);
    const timeSpent = startTime ? Math.floor((Date.now() - startTime) / 1000) : 0;
    
    updateProgress(moduleData.id, 'progress', {
        progress: moduleProgress,
        completedTopics: completedTopics,
        timeSpent: timeSpent
    });
}

// Module navigation functions
function previousModule() {
    // Navigate to previous module in the course
    const modules = [
        'introduccion-hacking',
        'footprinting-reconocimiento', 
        'escaneo-dispositivos',
        'enumeracion-activos',
        'escalamiento-privilegios',
        'metodologias-estandares'
    ];
    
    const currentIndex = modules.indexOf(moduleData.id);
    if (currentIndex > 0) {
        const prevModuleId = modules[currentIndex - 1];
        window.location.href = `../${prevModuleId}/index.html`;
    } else {
        // Go to main course page
        window.location.href = '../../index.html';
    }
}

function nextModule() {
    // Navigate to next module in the course
    const modules = [
        'introduccion-hacking',
        'footprinting-reconocimiento', 
        'escaneo-dispositivos',
        'enumeracion-activos',
        'escalamiento-privilegios',
        'metodologias-estandares'
    ];
    
    const currentIndex = modules.indexOf(moduleData.id);
    if (currentIndex < modules.length - 1) {
        const nextModuleId = modules[currentIndex + 1];
        window.location.href = `../${nextModuleId}/index.html`;
    } else {
        // Course completed, go to completion page
        window.location.href = '../../pages/progreso.html';
    }
}

function goToHome() {
    window.location.href = '../../index.html';
}

function goToNextModule() {
    nextModule();
}

// Utility function for notifications
function showNotification(message, type = 'info', duration = 3000) {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.module-notification');
    existingNotifications.forEach(notification => notification.remove());
    
    const notification = document.createElement('div');
    notification.className = `alert alert-${type} alert-dismissible fade show module-notification`;
    notification.style.cssText = `
        position: fixed;
        top: 80px;
        right: 20px;
        z-index: 1050;
        min-width: 300px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    `;
    
    const iconMap = {
        'success': 'fas fa-check-circle',
        'warning': 'fas fa-exclamation-triangle', 
        'danger': 'fas fa-times-circle',
        'info': 'fas fa-info-circle'
    };
    
    notification.innerHTML = `
        <i class="${iconMap[type] || iconMap.info} me-2"></i>
        ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    `;
    
    document.body.appendChild(notification);
    
    // Auto-remove after duration
    setTimeout(() => {
        if (notification.parentNode) {
            notification.remove();
        }
    }, duration);
}

// Format time utility
function formatTime(seconds) {
    if (seconds < 60) return `${seconds}s`;
    if (seconds < 3600) return `${Math.floor(seconds / 60)}m ${seconds % 60}s`;
    return `${Math.floor(seconds / 3600)}h ${Math.floor((seconds % 3600) / 60)}m`;
}
function setupModuleEventListeners() {
    // Topic navigation buttons removed - no longer setting up event listeners
    
    // Module navigation buttons in header
    const moduleNavButtons = document.querySelectorAll('.module-nav-buttons button');
    moduleNavButtons.forEach(button => {
        const text = button.textContent.toLowerCase();
        if (text.includes('anterior')) {
            button.addEventListener('click', previousModule);
        } else if (text.includes('siguiente')) {
            button.addEventListener('click', nextModule);
        }
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        // Only handle navigation if not typing in input fields
        if (e.target.tagName.toLowerCase() === 'input' || e.target.tagName.toLowerCase() === 'textarea') {
            return;
        }
        
        if (e.key === 'ArrowLeft' && !e.ctrlKey) {
            e.preventDefault();
            previousTopic();
        } else if (e.key === 'ArrowRight' && !e.ctrlKey) {
            e.preventDefault();
            nextTopic();
        } else if (e.key === 'Home' && e.ctrlKey) {
            e.preventDefault();
            goToHome();
        }
    });
    
    // Window resize handler for responsive updates
    window.addEventListener('resize', function() {
        // Update responsive elements if needed
        updateResponsiveElements();
    });
}

// Update responsive elements
function updateResponsiveElements() {
    const diagrams = document.querySelectorAll('svg[viewBox]');
    diagrams.forEach(diagram => {
        // Ensure diagrams remain responsive
        diagram.style.maxWidth = '100%';
        diagram.style.height = 'auto';
    });
}

// Progress update function
function updateProgress(moduleId, status, data = {}) {
    try {
        // Use global updateProgress function if available
        if (window.updateProgress && typeof window.updateProgress === 'function') {
            window.updateProgress(moduleId, status, data);
            return;
        }
        
        // Fallback implementation if global function not available
        // Get existing progress data
        let progressData = {};
        const savedProgress = localStorage.getItem('sena-hacking-progress');
        if (savedProgress) {
            progressData = JSON.parse(savedProgress);
        }
        
        // Update module progress
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
        moduleProgress.lastUpdate = new Date().toISOString();
        
        // Save to localStorage
        localStorage.setItem('sena-hacking-progress', JSON.stringify(progressData));
        
        // Also save to global progress if available
        if (window.progressData) {
            window.progressData[moduleId] = moduleProgress;
        }
        
        console.log(`Progress updated for ${moduleId}:`, moduleProgress);
        
    } catch (error) {
        console.error('Error updating progress:', error);
    }
}

// Export functions
window.startModule = startModule;
window.loadFirstTopic = loadFirstTopic;
window.previousTopic = previousTopic;
window.nextTopic = nextTopic;
window.completeTopic = completeTopic;
window.previousModule = previousModule;
window.nextModule = nextModule;
window.goToHome = goToHome;
window.goToNextModule = goToNextModule;
window.debugProgressCounter = debugProgressCounter;
window.cancelRedirect = cancelRedirect;
window.redirectToHome = redirectToHome;

// Debug function to test progress counter
function debugProgressCounter() {
    console.log('=== DEBUG PROGRESS COUNTER ===');
    console.log('Module Data:', moduleData);
    console.log('Topics:', moduleData.topics.map(t => ({ id: t.id, title: t.title, completed: t.completed })));
    console.log('Module Progress:', moduleProgress);
    
    const completedCount = moduleData.topics.filter(t => t.completed).length;
    console.log('Completed Topics Count:', completedCount);
    
    const sidebarProgress = document.getElementById('sidebar-progress');
    const sidebarProgressText = document.getElementById('sidebar-progress-text');
    
    console.log('Sidebar Progress Element:', sidebarProgress);
    console.log('Sidebar Progress Text Element:', sidebarProgressText);
    
    if (sidebarProgressText) {
        console.log('Current Text:', sidebarProgressText.textContent);
        console.log('Expected Text:', `${completedCount} de ${moduleData.topics.length} temas completados`);
    }
    
    console.log('=== END DEBUG ===');
    
    // Force update
    updateProgressDisplay();
}

// Export Universal Diagram System for external access
window.UNIVERSAL_DIAGRAM_SYSTEM = UNIVERSAL_DIAGRAM_SYSTEM;

// DEBUG FUNCTIONS - Temporary for navigation debugging
window.debugNavigation = function() {
    console.log('=== NAVIGATION DEBUG INFO ===');
    console.log(`currentTopicIndex: ${currentTopicIndex}`);
    console.log(`Total topics: ${moduleData.topics.length}`);
    console.log('Topics array:');
    moduleData.topics.forEach((topic, index) => {
        console.log(`  ${index}: ${topic.id} - ${topic.title} (completed: ${topic.completed})`);
    });
    
    const currentTopic = moduleData.topics[currentTopicIndex];
    if (currentTopic) {
        console.log(`Current topic: ${currentTopic.id} - ${currentTopic.title}`);
    } else {
        console.log(`ERROR: Invalid currentTopicIndex ${currentTopicIndex}`);
    }
    
    // Check what content is loaded
    const contentContainer = document.getElementById('topic-content');
    if (contentContainer) {
        const hasContent = contentContainer.innerHTML.trim().length > 0;
        console.log(`Content loaded: ${hasContent}`);
        
        if (hasContent) {
            // Try to detect which topic content is actually shown
            const content = contentContainer.innerHTML;
            if (content.includes('Conceptos de Hacking')) {
                console.log('Detected content: Topic 1 (Conceptos)');
            } else if (content.includes('Tipos de Hacking')) {
                console.log('Detected content: Topic 2 (Tipos)');
            } else if (content.includes('Habilidades de un Hacker')) {
                console.log('Detected content: Topic 3 (Habilidades)');
            } else if (content.includes('Fases del Hacking')) {
                console.log('Detected content: Topic 4 (Fases)');
            } else if (content.includes('Defensa en Profundidad')) {
                console.log('Detected content: Topic 5 (Defensa)');
            } else {
                console.log('Content type: Unknown/Generic');
            }
        }
    }
    
    return {
        currentTopicIndex,
        totalTopics: moduleData.topics.length,
        currentTopic: moduleData.topics[currentTopicIndex],
        topics: moduleData.topics
    };
};

window.forceResetNavigation = function() {
    console.log('🔄 Forcing navigation reset...');
    currentTopicIndex = -1;
    loadTopic(0);
    console.log('✅ Navigation reset to Topic 1');
};

// ENHANCED: Add specific function to fix navigation issues
window.debugCompleteButton = function() {
    console.log('=== COMPLETE BUTTON DEBUG INFO ===');
    
    // Check if completeTopic function exists
    console.log(`completeTopic function available: ${typeof window.completeTopic === 'function'}`);
    
    // Check for complete buttons in DOM
    const completeButtons = document.querySelectorAll('button[onclick*="completeTopic"]');
    console.log(`Complete buttons found: ${completeButtons.length}`);
    
    completeButtons.forEach((btn, index) => {
        console.log(`Button ${index + 1}:`);
        console.log(`  Text: ${btn.textContent.trim()}`);
        console.log(`  Onclick: ${btn.getAttribute('onclick')}`);
        console.log(`  Disabled: ${btn.disabled}`);
        console.log(`  Visible: ${btn.offsetWidth > 0 && btn.offsetHeight > 0}`);
    });
    
    // Check current topic completion status
    if (currentTopicIndex >= 0 && currentTopicIndex < moduleData.topics.length) {
        const topic = moduleData.topics[currentTopicIndex];
        console.log(`Current topic (${currentTopicIndex}): ${topic.title}`);
        console.log(`Completed: ${topic.completed}`);
    }
    
    // Check for any JavaScript errors
    console.log('Checking for JavaScript errors...');
    
    return {
        completeTopic: typeof window.completeTopic === 'function',
        buttonsFound: completeButtons.length,
        currentTopicCompleted: moduleData.topics[currentTopicIndex]?.completed || false
    };
};

window.debugModuleState = function() {
    console.log('=== MODULE STATE DEBUG INFO ===');
    console.log(`Module ID: ${moduleData.id}`);
    console.log(`Module Title: ${moduleData.title}`);
    console.log(`Start Time: ${startTime}`);
    console.log(`Module Progress: ${moduleProgress}%`);
    
    // Check localStorage
    const savedProgress = localStorage.getItem('introduccion-hacking-progress');
    console.log(`Saved Progress: ${savedProgress ? 'Available' : 'None'}`);
    
    if (savedProgress) {
        try {
            const parsed = JSON.parse(savedProgress);
            console.log('Parsed saved progress:', parsed);
        } catch (error) {
            console.log(`Error parsing saved progress: ${error.message}`);
        }
    }
    
    // Check global progress
    const globalProgress = localStorage.getItem('sena-hacking-progress');
    console.log(`Global Progress: ${globalProgress ? 'Available' : 'None'}`);
    
    if (globalProgress) {
        try {
            const parsed = JSON.parse(globalProgress);
            console.log('Global progress:', parsed);
        } catch (error) {
            console.log(`Error parsing global progress: ${error.message}`);
        }
    }
    
    return {
        moduleData,
        currentTopicIndex,
        moduleProgress,
        savedProgress,
        globalProgress
    };
};

// Function to test completeTopic directly
window.testCompleteTopic = function(topicIndex = null) {
    const index = topicIndex !== null ? topicIndex : currentTopicIndex;
    console.log(`🧪 Testing completeTopic(${index})...`);
    
    try {
        completeTopic(index);
        console.log('✅ completeTopic executed successfully');
        return true;
    } catch (error) {
        console.error(`❌ Error in completeTopic: ${error.message}`);
        return false;
    }
};

// ENHANCED: Add function to test navigation sequence
window.testNavigationSequence = function() {
    console.log('🧪 Testing navigation sequence...');
    
    // Start at topic 1
    loadTopic(0);
    
    setTimeout(() => {
        console.log(`Step 1: At topic ${currentTopicIndex} (${moduleData.topics[currentTopicIndex].id})`);
        
        // Navigate to topic 2
        nextTopic();
        
        setTimeout(() => {
            const currentTopic = moduleData.topics[currentTopicIndex];
            console.log(`Step 2: At topic ${currentTopicIndex} (${currentTopic.id})`);
            
            if (currentTopicIndex === 1 && currentTopic.id === 'tipos-hacking') {
                console.log('✅ SUCCESS: Navigation 1→2 works correctly!');
                return { success: true, message: 'Navigation working correctly' };
            } else {
                console.log('❌ FAIL: Navigation skip detected');
                return { success: false, message: `Expected topic 2, got ${currentTopicIndex + 1}` };
            }
        }, 500);
    }, 500);
};

// Convenience functions for diagram troubleshooting - MEJORADAS
window.forceFixDiagrams = function() {
    console.log('🔧 Forzando corrección de diagramas...');
    if (UNIVERSAL_DIAGRAM_SYSTEM) {
        UNIVERSAL_DIAGRAM_SYSTEM.fixAttempts = 0; // Reset attempts
        UNIVERSAL_DIAGRAM_SYSTEM.isProcessing = false; // Reset processing flag
        UNIVERSAL_DIAGRAM_SYSTEM.applyFixes();
    } else {
        console.warn('⚠️ Universal Diagram System no disponible');
    }
};

window.applyDiagramFallbacks = function() {
    console.log('🎨 Aplicando respaldos de diagramas...');
    if (UNIVERSAL_DIAGRAM_SYSTEM) {
        UNIVERSAL_DIAGRAM_SYSTEM.applyFallbacks();
    } else {
        console.warn('⚠️ Universal Diagram System no disponible');
    }
};

window.getDiagramStatus = function() {
    if (!UNIVERSAL_DIAGRAM_SYSTEM) {
        console.warn('⚠️ Universal Diagram System no disponible');
        return null;
    }
    
    const status = {
        initialized: UNIVERSAL_DIAGRAM_SYSTEM.isInitialized,
        attempts: UNIVERSAL_DIAGRAM_SYSTEM.fixAttempts,
        maxAttempts: UNIVERSAL_DIAGRAM_SYSTEM.maxAttempts,
        isProcessing: UNIVERSAL_DIAGRAM_SYSTEM.isProcessing,
        diagrams: UNIVERSAL_DIAGRAM_SYSTEM.diagrams.length,
        hasCache: !!UNIVERSAL_DIAGRAM_SYSTEM.svgCache
    };
    
    // Check which diagrams are fixed
    const fixedDiagrams = [];
    const failedDiagrams = [];
    
    UNIVERSAL_DIAGRAM_SYSTEM.diagrams.forEach(diagram => {
        const elements = document.querySelectorAll(`use[href*="#${diagram.id}"], svg[data-diagram-id="${diagram.id}"]`);
        const fixed = Array.from(elements).some(el => {
            const svg = el.tagName === 'svg' ? el : el.closest('svg');
            return svg && (svg.hasAttribute('data-universal-fixed') || svg.hasAttribute('data-fallback-applied'));
        });
        
        if (fixed) {
            fixedDiagrams.push(diagram.id);
        } else {
            failedDiagrams.push(diagram.id);
        }
    });
    
    status.fixedDiagrams = fixedDiagrams;
    status.failedDiagrams = failedDiagrams;
    status.successRate = `${fixedDiagrams.length}/${UNIVERSAL_DIAGRAM_SYSTEM.diagrams.length}`;
    
    console.log('📊 Estado del sistema de diagramas:', status);
    return status;
};

window.resetDiagramSystem = function() {
    console.log('🔄 Reiniciando sistema de diagramas...');
    if (UNIVERSAL_DIAGRAM_SYSTEM) {
        UNIVERSAL_DIAGRAM_SYSTEM.isInitialized = false;
        UNIVERSAL_DIAGRAM_SYSTEM.fixAttempts = 0;
        UNIVERSAL_DIAGRAM_SYSTEM.isProcessing = false;
        UNIVERSAL_DIAGRAM_SYSTEM.svgCache = null;
        
        // Remove all fixed attributes
        const allSvgs = document.querySelectorAll('svg[data-universal-fixed], svg[data-fallback-applied]');
        allSvgs.forEach(svg => {
            svg.removeAttribute('data-universal-fixed');
            svg.removeAttribute('data-fallback-applied');
            svg.removeAttribute('data-diagram-id');
            svg.removeAttribute('data-topic');
        });
        
        // Re-initialize
        setTimeout(() => {
            UNIVERSAL_DIAGRAM_SYSTEM.init();
        }, 500);
        
        console.log('✅ Sistema reiniciado');
    }
};
