/* ========================================
   MODULE: FOOTPRINTING Y RECONOCIMIENTO
   ======================================== */

// Module data based on info.md - Footprinting section
const footprintingModuleData = {
    id: 'footprinting-reconocimiento',
    title: 'Footprinting y Reconocimiento',
    topics: [
        {
            id: 'conceptos-basicos',
            title: 'Conceptos Básicos',
            duration: 60,
            completed: false,
            subtopics: [
                'Definición de Footprinting',
                'Tipos de Reconocimiento',
                'Reconocimiento Pasivo vs Activo',
                'Objetivos del Footprinting',
                'Consideraciones Éticas'
            ]
        },
        {
            id: 'metodologia-footprint',
            title: 'Metodología del Footprinting',
            duration: 90,
            completed: false,
            subtopics: [
                'Huella en Internet',
                'Inteligencia Competitiva',
                'WHOIS Footprinting',
                'DNS Footprinting',
                'Footprinting de Red',
                'Footprinting de Página Web',
                'Footprinting de Correo'
            ]
        },
        {
            id: 'herramientas-footprint',
            title: 'Herramientas de Footprinting',
            duration: 75,
            completed: false,
            subtopics: [
                'WHOIS',
                'Netcraft',
                'theHarvester',
                'CTFR',
                'Fierce',
                'Herramientas Complementarias'
            ]
        },
        {
            id: 'google-hacking',
            title: 'Google Hacking',
            duration: 80,
            completed: false,
            subtopics: [
                'Google Dorks Básicos',
                'Operadores Avanzados',
                'Búsqueda de Información Sensible',
                'Google Hacking Database',
                'Técnicas de Evasión'
            ]
        },
        {
            id: 'tecnicas-footprint',
            title: 'Técnicas de Footprinting',
            duration: 85,
            completed: false,
            subtopics: [
                'Técnicas Pasivas',
                'Técnicas Activas',
                'Análisis de Metadatos',
                'Ingeniería Social',
                'Footprinting de Redes Sociales'
            ]
        },
        {
            id: 'osint',
            title: 'OSINT (Open Source Intelligence)',
            duration: 70,
            completed: false,
            subtopics: [
                'Fundamentos de OSINT',
                'Fuentes de Información Abierta',
                'Herramientas OSINT',
                'Marco de Trabajo OSINT',
                'Análisis y Correlación de Datos'
            ]
        }
    ]
};

let currentTopicIndex = 0;
let moduleProgress = 0;
let startTime = null;

// ========================================
// SISTEMA UNIVERSAL DE DIAGRAMAS - FOOTPRINTING
// ========================================

const UNIVERSAL_DIAGRAM_SYSTEM = {
    // Configuración de todos los diagramas del módulo
    diagrams: [
        { id: 'footprinting-process-flow', viewBox: '0 0 900 620', topic: 1 },
        { id: 'methodology-diagram', viewBox: '0 0 850 550', topic: 2 },
        { id: 'tools-comparison', viewBox: '0 0 800 450', topic: 3 },
        { id: 'google-dorks-map', viewBox: '0 0 750 500', topic: 4 },
        { id: 'techniques-matrix', viewBox: '0 0 800 600', topic: 5 },
        { id: 'osint-framework', viewBox: '0 0 900 650', topic: 6 }
    ],
    
    // Estado del sistema
    isInitialized: false,
    fixAttempts: 0,
    maxAttempts: 5,
    isProcessing: false,
    svgCache: null,    // Inicializar sistema de diagramas - CORREGIDO
    async init() {
        if (this.isInitialized || this.isProcessing) {
            console.log('🎯 Universal Diagram System (Footprinting): Ya inicializado o en proceso');
            return;
        }
        
        this.isProcessing = true;
        console.log('🎯 Universal Diagram System (Footprinting): Inicializando para módulo 3...');
        
        // Initialize Icon Fix System if available - con timeout
        if (window.IconFixSystem) {
            try {
                await Promise.race([
                    window.IconFixSystem.init(),
                    new Promise((_, reject) => setTimeout(() => reject(new Error('Timeout')), 3000))
                ]);
                console.log('✅ Icon Fix System initialized from Universal Diagram System (Footprinting)');
            } catch (error) {
                console.warn('⚠️ Icon Fix System failed to initialize:', error.message);
            }
        }
        
        // Pre-cargar SVG content
        try {
            this.svgCache = await this.loadSVGContent();
            if (this.svgCache) {
                console.log('✅ Universal Diagram System (Footprinting): SVG content cached');
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
            console.log('🔧 Universal Diagram System (Footprinting): Corrección ya en proceso, saltando...');
            return;
        }
        
        this.fixAttempts++;
        this.isProcessing = true;
        
        console.log(`🔧 Universal Diagram System (Footprinting): Intento ${this.fixAttempts}/${this.maxAttempts}`);
        
        if (this.fixAttempts > this.maxAttempts) {
            console.log('⚠️ Universal Diagram System (Footprinting): Máximo de intentos alcanzado, aplicando respaldos...');
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
                    console.log(`✅ Universal Diagram System (Footprinting): ${processedCount} diagramas procesados exitosamente`);
                } else {
                    // Si no se procesó ninguno, intentar más tarde solo si no hemos probado muchas veces
                    if (this.fixAttempts <= 2) {
                        setTimeout(() => {
                            this.isProcessing = false;
                            this.applyFixes();
                        }, 2000);
                        return;
                    } else {
                        // Después de 2 intentos, activar respaldos
                        console.log('⚠️ Universal Diagram System (Footprinting): SVG cargado pero sin procesamiento, activando respaldos...');
                        this.applyFallbacks();
                    }
                }
            } else {
                // Si no se pudo cargar el SVG, activar respaldos inmediatamente después de algunos intentos
                if (this.fixAttempts >= 2) {
                    console.log('⚠️ Universal Diagram System (Footprinting): No se pudo cargar SVG, activando respaldos...');
                    this.applyFallbacks();
                } else {
                    throw new Error('No se pudo cargar el contenido SVG');
                }
            }
            
        } catch (error) {
            console.warn('⚠️ Universal Diagram System (Footprinting): Error en carga principal:', error);
            
            // Activar respaldos más rápidamente si hay problemas de carga
            if (this.fixAttempts >= 2 || error.message.includes('SVG')) {
                console.log('⚠️ Universal Diagram System (Footprinting): Activando respaldos debido a errores de SVG...');
                this.applyFallbacks();
                this.isProcessing = false;
                return;
            }
            
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
    
    // Cargar contenido del archivo SVG - MEJORADO CON MÚLTIPLES RUTAS
    async loadSVGContent() {
        try {
            // Si ya tenemos el contenido cacheado, usarlo
            if (this.svgCache) {
                return this.svgCache;
            }
            
            // Intentar múltiples rutas posibles - La correcta debería ser ../../assets/images/diagrams.svg
            const possiblePaths = [
                '../../assets/images/diagrams.svg',           // Más probable para HTTP server
                '/assets/images/diagrams.svg',               // Ruta absoluta del servidor
                'http://localhost:8000/assets/images/diagrams.svg', // URL completa como fallback
                '../assets/images/diagrams.svg',             // Un nivel menos
                './assets/images/diagrams.svg',              // Mismo directorio (poco probable)
                'assets/images/diagrams.svg'                 // Sin ./
            ];
            
            console.log('🔍 Universal Diagram System (Footprinting): Intentando cargar SVG...');
            
            for (const path of possiblePaths) {
                try {
                    console.log(`🔗 Intentando ruta: ${path}`);
                    
                    const controller = new AbortController();
                    const timeoutId = setTimeout(() => controller.abort(), 3000);
                    
                    const response = await fetch(path, {
                        signal: controller.signal,
                        cache: 'no-cache' // Evitar problemas de caché
                    });
                    
                    clearTimeout(timeoutId);
                    
                    if (response.ok) {
                        const svgText = await response.text();
                        
                        // Verificar que el contenido no esté vacío
                        if (!svgText || svgText.trim().length === 0) {
                            console.warn(`⚠️ Archivo SVG vacío en: ${path}`);
                            continue;
                        }
                        
                        const parser = new DOMParser();
                        const svgDoc = parser.parseFromString(svgText, 'image/svg+xml');
                        
                        // Verificar que el SVG se parseó correctamente
                        if (svgDoc.documentElement.nodeName === 'parsererror') {
                            console.warn(`⚠️ Error parseando SVG en: ${path}`);
                            continue;
                        }
                        
                        // Verificar que contiene los símbolos esperados
                        const expectedSymbols = this.diagrams.map(d => d.id);
                        let foundSymbols = 0;
                        
                        expectedSymbols.forEach(symbolId => {
                            if (svgDoc.querySelector(`#${symbolId}`)) {
                                foundSymbols++;
                            }
                        });
                        
                        console.log(`✅ SVG cargado desde: ${path} (${foundSymbols}/${expectedSymbols.length} símbolos encontrados)`);
                        
                        // Cachear el resultado exitoso
                        this.svgCache = svgDoc;
                        return svgDoc;
                    } else {
                        console.warn(`⚠️ HTTP ${response.status} para: ${path}`);
                    }
                    
                } catch (pathError) {
                    console.warn(`⚠️ Error con ruta ${path}:`, pathError.message);
                    continue;
                }
            }
            
            // Si llegamos aquí, ninguna ruta funcionó
            throw new Error('No se pudo cargar el SVG desde ninguna ruta');
            
        } catch (error) {
            console.warn('⚠️ Universal Diagram System (Footprinting): Error cargando SVG:', error);
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
                                console.log(`✅ Universal Diagram System (Footprinting): ${diagram.id} (Topic ${diagram.topic}) corregido`);
                            } else {
                                console.warn(`⚠️ Símbolo ${diagram.id} no encontrado en SVG`);
                            }
                            
                        } catch (elementError) {
                            console.warn(`⚠️ Universal Diagram System (Footprinting): Error procesando elemento ${diagram.id}:`, elementError);
                        }
                    }
                });
                
            } catch (diagramError) {
                console.warn(`⚠️ Universal Diagram System (Footprinting): Error procesando diagrama ${diagram.id}:`, diagramError);
            }
        });
        
        if (fixedCount > 0) {
            console.log(`🎉 Universal Diagram System (Footprinting): ${fixedCount} diagramas procesados exitosamente`);
        }
          return fixedCount;
    },

    // Aplicar respaldos cuando el sistema principal falla
    applyFallbacks() {
        console.log('🛠️ Universal Diagram System (Footprinting): Aplicando respaldos...');
        
        this.diagrams.forEach(diagram => {
            const useElements = document.querySelectorAll(`use[href*="#${diagram.id}"]`);
            
            useElements.forEach(useElement => {
                const svg = useElement.closest('svg');
                
                if (svg && !svg.hasAttribute('data-fallback-applied')) {
                    // Generar respaldo específico para cada tipo de diagrama
                    let fallbackContent = '';
                    
                    switch (diagram.id) {
                        case 'footprinting-process-flow':
                            fallbackContent = this.generateProcessFlowFallback();
                            break;
                        case 'methodology-diagram':
                            fallbackContent = this.generateMethodologyFallback();
                            break;
                        case 'tools-comparison':
                            fallbackContent = this.generateToolsComparisonFallback();
                            break;
                        case 'google-dorks-map':
                            fallbackContent = this.generateGoogleDorksFallback();
                            break;
                        case 'techniques-matrix':
                            fallbackContent = this.generateTechniquesMatrixFallback();
                            break;
                        case 'osint-framework':
                            fallbackContent = this.generateOSINTFrameworkFallback();
                            break;
                        default:
                            fallbackContent = this.generateGenericFallback(diagram.id);
                    }
                    
                    svg.innerHTML = fallbackContent;
                    svg.setAttribute('viewBox', diagram.viewBox);
                    svg.setAttribute('data-fallback-applied', 'true');
                    svg.setAttribute('data-diagram-id', diagram.id);
                    
                    console.log(`🔧 Respaldo aplicado para ${diagram.id}`);
                }
            });
        });
    },

    // Funciones de respaldo para cada tipo de diagrama
    generateProcessFlowFallback() {
        return `
            <rect x="50" y="50" width="800" height="520" fill="#f8f9fa" stroke="#6c757d" stroke-width="2" rx="10"/>
            <text x="450" y="80" text-anchor="middle" font-size="20" font-weight="bold" fill="#495057">Proceso de Footprinting</text>
            
            <rect x="100" y="120" width="150" height="60" fill="#007bff" stroke="#0056b3" stroke-width="2" rx="5"/>
            <text x="175" y="155" text-anchor="middle" font-size="14" font-weight="bold" fill="white">Reconocimiento</text>
            <text x="175" y="170" text-anchor="middle" font-size="12" fill="white">Pasivo</text>
            
            <rect x="300" y="120" width="150" height="60" fill="#28a745" stroke="#1e7e34" stroke-width="2" rx="5"/>
            <text x="375" y="155" text-anchor="middle" font-size="14" font-weight="bold" fill="white">Recolección</text>
            <text x="375" y="170" text-anchor="middle" font-size="12" fill="white">de Información</text>
            
            <rect x="500" y="120" width="150" height="60" fill="#ffc107" stroke="#e0a800" stroke-width="2" rx="5"/>
            <text x="575" y="155" text-anchor="middle" font-size="14" font-weight="bold" fill="#495057">Análisis</text>
            <text x="575" y="170" text-anchor="middle" font-size="12" fill="#495057">de Datos</text>
            
            <rect x="700" y="120" width="150" height="60" fill="#dc3545" stroke="#c82333" stroke-width="2" rx="5"/>
            <text x="775" y="155" text-anchor="middle" font-size="14" font-weight="bold" fill="white">Documentación</text>
            <text x="775" y="170" text-anchor="middle" font-size="12" fill="white">de Resultados</text>
            
            <!-- Flechas -->
            <path d="M 250 150 L 300 150" stroke="#495057" stroke-width="2" marker-end="url(#arrowhead)"/>
            <path d="M 450 150 L 500 150" stroke="#495057" stroke-width="2" marker-end="url(#arrowhead)"/>
            <path d="M 650 150 L 700 150" stroke="#495057" stroke-width="2" marker-end="url(#arrowhead)"/>
            
            <defs>
                <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                    <polygon points="0 0, 10 3.5, 0 7" fill="#495057"/>
                </marker>
            </defs>
            
            <!-- Detalles adicionales -->
            <rect x="100" y="250" width="700" height="300" fill="#e9ecef" stroke="#6c757d" stroke-width="1" rx="5"/>
            <text x="450" y="280" text-anchor="middle" font-size="16" font-weight="bold" fill="#495057">Técnicas y Herramientas</text>
            
            <text x="120" y="310" font-size="14" font-weight="bold" fill="#007bff">WHOIS Lookup</text>
            <text x="120" y="330" font-size="12" fill="#495057">• Información de dominio</text>
            <text x="120" y="345" font-size="12" fill="#495057">• Datos de contacto</text>
            
            <text x="320" y="310" font-size="14" font-weight="bold" fill="#28a745">DNS Enumeration</text>
            <text x="320" y="330" font-size="12" fill="#495057">• Registros DNS</text>
            <text x="320" y="345" font-size="12" fill="#495057">• Subdominios</text>
            
            <text x="520" y="310" font-size="14" font-weight="bold" fill="#ffc107">Google Dorking</text>
            <text x="520" y="330" font-size="12" fill="#495057">• Búsquedas avanzadas</text>
            <text x="520" y="345" font-size="12" fill="#495057">• Información expuesta</text>
            
            <text x="120" y="390" font-size="14" font-weight="bold" fill="#dc3545">Social Media</text>
            <text x="120" y="410" font-size="12" fill="#495057">• Perfiles corporativos</text>
            <text x="120" y="425" font-size="12" fill="#495057">• Información de empleados</text>
            
            <text x="320" y="390" font-size="14" font-weight="bold" fill="#6f42c1">Wayback Machine</text>
            <text x="320" y="410" font-size="12" fill="#495057">• Versiones históricas</text>
            <text x="320" y="425" font-size="12" fill="#495057">• Archivos eliminados</text>
            
            <text x="520" y="390" font-size="14" font-weight="bold" fill="#20c997">Shodan</text>
            <text x="520" y="410" font-size="12" fill="#495057">• Dispositivos conectados</text>
            <text x="520" y="425" font-size="12" fill="#495057">• Servicios expuestos</text>
        `;
    },

    generateMethodologyFallback() {
        return `
            <rect x="50" y="50" width="750" height="450" fill="#f8f9fa" stroke="#6c757d" stroke-width="2" rx="10"/>
            <text x="425" y="80" text-anchor="middle" font-size="20" font-weight="bold" fill="#495057">Metodología de Footprinting</text>
            
            <!-- Fase 1 -->
            <circle cx="150" cy="150" r="40" fill="#007bff" stroke="#0056b3" stroke-width="3"/>
            <text x="150" y="155" text-anchor="middle" font-size="14" font-weight="bold" fill="white">Fase 1</text>
            <text x="150" y="200" text-anchor="middle" font-size="12" font-weight="bold" fill="#495057">Reconocimiento</text>
            <text x="150" y="215" text-anchor="middle" font-size="10" fill="#6c757d">Pasivo</text>
            
            <!-- Fase 2 -->
            <circle cx="350" cy="150" r="40" fill="#28a745" stroke="#1e7e34" stroke-width="3"/>
            <text x="350" y="155" text-anchor="middle" font-size="14" font-weight="bold" fill="white">Fase 2</text>
            <text x="350" y="200" text-anchor="middle" font-size="12" font-weight="bold" fill="#495057">Enumeración</text>
            <text x="350" y="215" text-anchor="middle" font-size="10" fill="#6c757d">Semi-activa</text>
            
            <!-- Fase 3 -->
            <circle cx="550" cy="150" r="40" fill="#ffc107" stroke="#e0a800" stroke-width="3"/>
            <text x="550" y="155" text-anchor="middle" font-size="14" font-weight="bold" fill="#495057">Fase 3</text>
            <text x="550" y="200" text-anchor="middle" font-size="12" font-weight="bold" fill="#495057">Escaneo</text>
            <text x="550" y="215" text-anchor="middle" font-size="10" fill="#6c757d">Activo</text>
            
            <!-- Fase 4 -->
            <circle cx="750" cy="150" r="40" fill="#dc3545" stroke="#c82333" stroke-width="3"/>
            <text x="750" y="155" text-anchor="middle" font-size="14" font-weight="bold" fill="white">Fase 4</text>
            <text x="750" y="200" text-anchor="middle" font-size="12" font-weight="bold" fill="#495057">Análisis</text>
            <text x="750" y="215" text-anchor="middle" font-size="10" fill="#6c757d">Documentación</text>
            
            <!-- Conexiones -->
            <path d="M 190 150 L 310 150" stroke="#495057" stroke-width="2" marker-end="url(#arrowhead)"/>
            <path d="M 390 150 L 510 150" stroke="#495057" stroke-width="2" marker-end="url(#arrowhead)"/>
            <path d="M 590 150 L 710 150" stroke="#495057" stroke-width="2" marker-end="url(#arrowhead)"/>
            
            <defs>
                <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                    <polygon points="0 0, 10 3.5, 0 7" fill="#495057"/>
                </marker>
            </defs>
            
            <!-- Detalles de cada fase -->
            <rect x="75" y="280" width="650" height="180" fill="#e9ecef" stroke="#6c757d" stroke-width="1" rx="5"/>
            <text x="400" y="305" text-anchor="middle" font-size="16" font-weight="bold" fill="#495057">Actividades por Fase</text>
            
            <text x="100" y="330" font-size="12" font-weight="bold" fill="#007bff">Reconocimiento:</text>
            <text x="100" y="345" font-size="10" fill="#495057">• Google Dorking</text>
            <text x="100" y="358" font-size="10" fill="#495057">• Redes Sociales</text>
            
            <text x="250" y="330" font-size="12" font-weight="bold" fill="#28a745">Enumeración:</text>
            <text x="250" y="345" font-size="10" fill="#495057">• WHOIS Lookup</text>
            <text x="250" y="358" font-size="10" fill="#495057">• DNS Records</text>
            
            <text x="400" y="330" font-size="12" font-weight="bold" fill="#ffc107">Escaneo:</text>
            <text x="400" y="345" font-size="10" fill="#495057">• Port Scanning</text>
            <text x="400" y="358" font-size="10" fill="#495057">• Service Detection</text>
            
            <text x="550" y="330" font-size="12" font-weight="bold" fill="#dc3545">Análisis:</text>
            <text x="550" y="345" font-size="10" fill="#495057">• Vulnerabilities</text>
            <text x="550" y="358" font-size="10" fill="#495057">• Risk Assessment</text>
        `;
    },

    generateToolsComparisonFallback() {
        return `
            <rect x="50" y="50" width="700" height="350" fill="#f8f9fa" stroke="#6c757d" stroke-width="2" rx="10"/>
            <text x="400" y="80" text-anchor="middle" font-size="20" font-weight="bold" fill="#495057">Comparación de Herramientas</text>
            
            <!-- Encabezados -->
            <rect x="75" y="100" width="120" height="40" fill="#007bff" stroke="#0056b3" stroke-width="2" rx="3"/>
            <text x="135" y="125" text-anchor="middle" font-size="14" font-weight="bold" fill="white">Herramienta</text>
            
            <rect x="200" y="100" width="100" height="40" fill="#28a745" stroke="#1e7e34" stroke-width="2" rx="3"/>
            <text x="250" y="125" text-anchor="middle" font-size="14" font-weight="bold" fill="white">Tipo</text>
            
            <rect x="305" y="100" width="120" height="40" fill="#ffc107" stroke="#e0a800" stroke-width="2" rx="3"/>
            <text x="365" y="125" text-anchor="middle" font-size="14" font-weight="bold" fill="#495057">Función</text>
            
            <rect x="430" y="100" width="100" height="40" fill="#dc3545" stroke="#c82333" stroke-width="2" rx="3"/>
            <text x="480" y="125" text-anchor="middle" font-size="14" font-weight="bold" fill="white">Dificultad</text>
            
            <rect x="535" y="100" width="140" height="40" fill="#6f42c1" stroke="#59359a" stroke-width="2" rx="3"/>
            <text x="605" y="125" text-anchor="middle" font-size="14" font-weight="bold" fill="white">Plataforma</text>
            
            <!-- Filas de datos -->
            <rect x="75" y="145" width="600" height="30" fill="#ffffff" stroke="#dee2e6" stroke-width="1"/>
            <text x="135" y="165" text-anchor="middle" font-size="12" font-weight="bold" fill="#495057">WHOIS</text>
            <text x="250" y="165" text-anchor="middle" font-size="12" fill="#495057">Consulta</text>
            <text x="365" y="165" text-anchor="middle" font-size="12" fill="#495057">Info dominio</text>
            <text x="480" y="165" text-anchor="middle" font-size="12" fill="#28a745">Fácil</text>
            <text x="605" y="165" text-anchor="middle" font-size="12" fill="#495057">Web/CLI</text>
            
            <rect x="75" y="180" width="600" height="30" fill="#f8f9fa" stroke="#dee2e6" stroke-width="1"/>
            <text x="135" y="200" text-anchor="middle" font-size="12" font-weight="bold" fill="#495057">theHarvester</text>
            <text x="250" y="200" text-anchor="middle" font-size="12" fill="#495057">OSINT</text>
            <text x="365" y="200" text-anchor="middle" font-size="12" fill="#495057">Email/Sub</text>
            <text x="480" y="200" text-anchor="middle" font-size="12" fill="#ffc107">Media</text>
            <text x="605" y="200" text-anchor="middle" font-size="12" fill="#495057">CLI</text>
            
            <rect x="75" y="215" width="600" height="30" fill="#ffffff" stroke="#dee2e6" stroke-width="1"/>
            <text x="135" y="235" text-anchor="middle" font-size="12" font-weight="bold" fill="#495057">Shodan</text>
            <text x="250" y="235" text-anchor="middle" font-size="12" fill="#495057">Motor</text>
            <text x="365" y="235" text-anchor="middle" font-size="12" fill="#495057">IoT/Servicios</text>
            <text x="480" y="235" text-anchor="middle" font-size="12" fill="#28a745">Fácil</text>
            <text x="605" y="235" text-anchor="middle" font-size="12" fill="#495057">Web/API</text>
            
            <rect x="75" y="250" width="600" height="30" fill="#f8f9fa" stroke="#dee2e6" stroke-width="1"/>
            <text x="135" y="270" text-anchor="middle" font-size="12" font-weight="bold" fill="#495057">Maltego</text>
            <text x="250" y="270" text-anchor="middle" font-size="12" fill="#495057">OSINT</text>
            <text x="365" y="270" text-anchor="middle" font-size="12" fill="#495057">Relaciones</text>
            <text x="480" y="270" text-anchor="middle" font-size="12" fill="#dc3545">Difícil</text>
            <text x="605" y="270" text-anchor="middle" font-size="12" fill="#495057">Desktop</text>
            
            <rect x="75" y="285" width="600" height="30" fill="#ffffff" stroke="#dee2e6" stroke-width="1"/>
            <text x="135" y="305" text-anchor="middle" font-size="12" font-weight="bold" fill="#495057">Fierce</text>
            <text x="250" y="305" text-anchor="middle" font-size="12" fill="#495057">DNS</text>
            <text x="365" y="305" text-anchor="middle" font-size="12" fill="#495057">Subdominios</text>
            <text x="480" y="305" text-anchor="middle" font-size="12" fill="#ffc107">Media</text>
            <text x="605" y="305" text-anchor="middle" font-size="12" fill="#495057">CLI</text>
            
            <rect x="75" y="320" width="600" height="30" fill="#f8f9fa" stroke="#dee2e6" stroke-width="1"/>
            <text x="135" y="340" text-anchor="middle" font-size="12" font-weight="bold" fill="#495057">Netcraft</text>
            <text x="250" y="340" text-anchor="middle" font-size="12" fill="#495057">Web</text>
            <text x="365" y="340" text-anchor="middle" font-size="12" fill="#495057">Tecnologías</text>
            <text x="480" y="340" text-anchor="middle" font-size="12" fill="#28a745">Fácil</text>
            <text x="605" y="340" text-anchor="middle" font-size="12" fill="#495057">Web</text>
        `;
    },

    generateGoogleDorksFallback() {
        return `
            <rect x="50" y="50" width="650" height="400" fill="#f8f9fa" stroke="#6c757d" stroke-width="2" rx="10"/>
            <text x="375" y="80" text-anchor="middle" font-size="20" font-weight="bold" fill="#495057">Google Dorks Map</text>
            
            <!-- Categorías principales -->
            <rect x="100" y="120" width="150" height="80" fill="#007bff" stroke="#0056b3" stroke-width="2" rx="5"/>
            <text x="175" y="150" text-anchor="middle" font-size="14" font-weight="bold" fill="white">Información</text>
            <text x="175" y="165" text-anchor="middle" font-size="14" font-weight="bold" fill="white">Básica</text>
            <text x="175" y="185" text-anchor="middle" font-size="10" fill="#cce7ff">site:</text>
            <text x="175" y="195" text-anchor="middle" font-size="10" fill="#cce7ff">filetype:</text>
            
            <rect x="300" y="120" width="150" height="80" fill="#28a745" stroke="#1e7e34" stroke-width="2" rx="5"/>
            <text x="375" y="150" text-anchor="middle" font-size="14" font-weight="bold" fill="white">Archivos</text>
            <text x="375" y="165" text-anchor="middle" font-size="14" font-weight="bold" fill="white">Sensibles</text>
            <text x="375" y="185" text-anchor="middle" font-size="10" fill="#d4e7d4">intitle:</text>
            <text x="375" y="195" text-anchor="middle" font-size="10" fill="#d4e7d4">inurl:</text>
            
            <rect x="500" y="120" width="150" height="80" fill="#ffc107" stroke="#e0a800" stroke-width="2" rx="5"/>
            <text x="575" y="150" text-anchor="middle" font-size="14" font-weight="bold" fill="#495057">Vulnerabilidades</text>
            <text x="575" y="165" text-anchor="middle" font-size="14" font-weight="bold" fill="#495057">Web</text>
            <text x="575" y="185" text-anchor="middle" font-size="10" fill="#6c6c00">intext:</text>
            <text x="575" y="195" text-anchor="middle" font-size="10" fill="#6c6c00">cache:</text>
            
            <!-- Ejemplos específicos -->
            <rect x="100" y="230" width="550" height="200" fill="#e9ecef" stroke="#6c757d" stroke-width="1" rx="5"/>
            <text x="375" y="255" text-anchor="middle" font-size="16" font-weight="bold" fill="#495057">Ejemplos de Google Dorks</text>
            
            <text x="120" y="280" font-size="12" font-weight="bold" fill="#007bff">Información de dominio:</text>
            <text x="120" y="295" font-size="10" font-family="monospace" fill="#495057">site:example.com</text>
            <text x="120" y="308" font-size="10" font-family="monospace" fill="#495057">site:example.com filetype:pdf</text>
            
            <text x="120" y="330" font-size="12" font-weight="bold" fill="#28a745">Archivos expuestos:</text>
            <text x="120" y="345" font-size="10" font-family="monospace" fill="#495057">filetype:xls "password"</text>
            <text x="120" y="358" font-size="10" font-family="monospace" fill="#495057">intitle:"index of" "config.php"</text>
            
            <text x="120" y="380" font-size="12" font-weight="bold" fill="#ffc107">Páginas vulnerables:</text>
            <text x="120" y="395" font-size="10" font-family="monospace" fill="#495057">inurl:admin.php</text>
            <text x="120" y="408" font-size="10" font-family="monospace" fill="#495057">intitle:"phpMyAdmin" "Welcome to phpMyAdmin"</text>
            
            <!-- Advertencia -->
            <rect x="400" y="280" width="220" height="120" fill="#fff3cd" stroke="#ffeaa7" stroke-width="2" rx="5"/>
            <text x="510" y="300" text-anchor="middle" font-size="12" font-weight="bold" fill="#856404">⚠️ ADVERTENCIA</text>
            <text x="510" y="320" text-anchor="middle" font-size="10" fill="#856404">Usar Google Dorks</text>
            <text x="510" y="335" text-anchor="middle" font-size="10" fill="#856404">con fines educativos</text>
            <text x="510" y="350" text-anchor="middle" font-size="10" fill="#856404">y éticos únicamente.</text>
            <text x="510" y="370" text-anchor="middle" font-size="10" fill="#856404">Respetar la privacidad</text>
            <text x="510" y="385" text-anchor="middle" font-size="10" fill="#856404">y términos de servicio.</text>
        `;
    },

    generateTechniquesMatrixFallback() {
        return `
            <rect x="50" y="50" width="700" height="500" fill="#f8f9fa" stroke="#6c757d" stroke-width="2" rx="10"/>
            <text x="400" y="80" text-anchor="middle" font-size="20" font-weight="bold" fill="#495057">Matriz de Técnicas de Footprinting</text>
            
            <!-- Ejes -->
            <text x="30" y="300" text-anchor="middle" font-size="14" font-weight="bold" fill="#495057" transform="rotate(-90 30 300)">Nivel de Detección</text>
            <text x="400" y="530" text-anchor="middle" font-size="14" font-weight="bold" fill="#495057">Complejidad Técnica</text>
            
            <!-- Líneas de referencia -->
            <line x1="100" y1="120" x2="700" y2="120" stroke="#dee2e6" stroke-width="1"/>
            <line x1="100" y1="200" x2="700" y2="200" stroke="#dee2e6" stroke-width="1"/>
            <line x1="100" y1="280" x2="700" y2="280" stroke="#dee2e6" stroke-width="1"/>
            <line x1="100" y1="360" x2="700" y2="360" stroke="#dee2e6" stroke-width="1"/>
            <line x1="100" y1="440" x2="700" y2="440" stroke="#dee2e6" stroke-width="1"/>
            
            <line x1="100" y1="120" x2="100" y2="440" stroke="#dee2e6" stroke-width="1"/>
            <line x1="200" y1="120" x2="200" y2="440" stroke="#dee2e6" stroke-width="1"/>
            <line x1="300" y1="120" x2="300" y2="440" stroke="#dee2e6" stroke-width="1"/>
            <line x1="400" y1="120" x2="400" y2="440" stroke="#dee2e6" stroke-width="1"/>
            <line x1="500" y1="120" x2="500" y2="440" stroke="#dee2e6" stroke-width="1"/>
            <line x1="600" y1="120" x2="600" y2="440" stroke="#dee2e6" stroke-width="1"/>
            <line x1="700" y1="120" x2="700" y2="440" stroke="#dee2e6" stroke-width="1"/>
            
            <!-- Etiquetas de ejes -->
            <text x="80" y="125" text-anchor="middle" font-size="10" fill="#6c757d">Alto</text>
            <text x="80" y="205" text-anchor="middle" font-size="10" fill="#6c757d">Medio-Alto</text>
            <text x="80" y="285" text-anchor="middle" font-size="10" fill="#6c757d">Medio</text>
            <text x="80" y="365" text-anchor="middle" font-size="10" fill="#6c757d">Medio-Bajo</text>
            <text x="80" y="445" text-anchor="middle" font-size="10" fill="#6c757d">Bajo</text>
            
            <text x="150" y="460" text-anchor="middle" font-size="10" fill="#6c757d">Básica</text>
            <text x="250" y="460" text-anchor="middle" font-size="10" fill="#6c757d">Intermedia</text>
            <text x="450" y="460" text-anchor="middle" font-size="10" fill="#6c757d">Avanzada</text>
            <text x="650" y="460" text-anchor="middle" font-size="10" fill="#6c757d">Experta</text>
            
            <!-- Técnicas posicionadas en la matriz -->
            <!-- Reconocimiento Pasivo (Bajo riesgo, Básico) -->
            <circle cx="150" cy="400" r="15" fill="#28a745" stroke="#1e7e34" stroke-width="2"/>
            <text x="150" y="405" text-anchor="middle" font-size="8" font-weight="bold" fill="white">OSINT</text>
            <text x="150" y="425" text-anchor="middle" font-size="8" fill="#495057">Google</text>
            
            <!-- WHOIS (Bajo riesgo, Básico) -->
            <circle cx="180" cy="380" r="15" fill="#007bff" stroke="#0056b3" stroke-width="2"/>
            <text x="180" y="385" text-anchor="middle" font-size="8" font-weight="bold" fill="white">WHOIS</text>
            
            <!-- DNS Lookup (Medio-Bajo riesgo, Intermedio) -->
            <circle cx="250" cy="320" r="15" fill="#17a2b8" stroke="#138496" stroke-width="2"/>
            <text x="250" y="325" text-anchor="middle" font-size="8" font-weight="bold" fill="white">DNS</text>
            
            <!-- Port Scanning (Medio-Alto riesgo, Avanzado) -->
            <circle cx="450" cy="180" r="15" fill="#ffc107" stroke="#e0a800" stroke-width="2"/>
            <text x="450" y="185" text-anchor="middle" font-size="8" font-weight="bold" fill="#495057">Ports</text>
            
            <!-- Vulnerability Scanning (Alto riesgo, Experto) -->
            <circle cx="600" cy="140" r="15" fill="#dc3545" stroke="#c82333" stroke-width="2"/>
            <text x="600" y="145" text-anchor="middle" font-size="8" font-weight="bold" fill="white">Vuln</text>
            
            <!-- Social Engineering (Medio riesgo, Intermedio) -->
            <circle cx="280" cy="280" r="15" fill="#6f42c1" stroke="#59359a" stroke-width="2"/>
            <text x="280" y="285" text-anchor="middle" font-size="8" font-weight="bold" fill="white">Social</text>
            
            <!-- Shodan (Medio-Bajo riesgo, Intermedio) -->
            <circle cx="300" cy="340" r="15" fill="#fd7e14" stroke="#e55a00" stroke-width="2"/>
            <text x="300" y="345" text-anchor="middle" font-size="8" font-weight="bold" fill="white">Shodan</text>
            
            <!-- Leyenda -->
            <rect x="520" y="480" width="200" height="60" fill="#ffffff" stroke="#6c757d" stroke-width="1" rx="3"/>
            <text x="620" y="500" text-anchor="middle" font-size="12" font-weight="bold" fill="#495057">Leyenda</text>
            <circle cx="540" cy="515" r="5" fill="#28a745"/>
            <text x="555" y="520" font-size="10" fill="#495057">Bajo Riesgo</text>
            <circle cx="540" cy="530" r="5" fill="#ffc107"/>
            <text x="555" y="535" font-size="10" fill="#495057">Medio Riesgo</text>
            <circle cx="640" cy="515" r="5" fill="#dc3545"/>
            <text x="655" y="520" font-size="10" fill="#495057">Alto Riesgo</text>
        `;
    },

    generateOSINTFrameworkFallback() {
        return `
            <rect x="50" y="50" width="800" height="550" fill="#f8f9fa" stroke="#6c757d" stroke-width="2" rx="10"/>
            <text x="450" y="80" text-anchor="middle" font-size="20" font-weight="bold" fill="#495057">Framework OSINT</text>
            
            <!-- Centro: OSINT -->
            <circle cx="450" cy="320" r="50" fill="#007bff" stroke="#0056b3" stroke-width="3"/>
            <text x="450" y="325" text-anchor="middle" font-size="16" font-weight="bold" fill="white">OSINT</text>
            
            <!-- Categorías principales -->
            <!-- Dominios y DNS -->
            <rect x="120" y="150" width="120" height="60" fill="#28a745" stroke="#1e7e34" stroke-width="2" rx="5"/>
            <text x="180" y="175" text-anchor="middle" font-size="12" font-weight="bold" fill="white">Dominios</text>
            <text x="180" y="190" text-anchor="middle" font-size="12" font-weight="bold" fill="white">& DNS</text>
            <text x="180" y="205" text-anchor="middle" font-size="9" fill="#d4e7d4">WHOIS, DNS</text>
            
            <!-- Redes Sociales -->
            <rect x="280" y="120" width="120" height="60" fill="#6f42c1" stroke="#59359a" stroke-width="2" rx="5"/>
            <text x="340" y="145" text-anchor="middle" font-size="12" font-weight="bold" fill="white">Redes</text>
            <text x="340" y="160" text-anchor="middle" font-size="12" font-weight="bold" fill="white">Sociales</text>
            <text x="340" y="175" text-anchor="middle" font-size="9" fill="#e6d7ff">LinkedIn, Twitter</text>
            
            <!-- Motores de Búsqueda -->
            <rect x="480" y="120" width="120" height="60" fill="#17a2b8" stroke="#138496" stroke-width="2" rx="5"/>
            <text x="540" y="145" text-anchor="middle" font-size="12" font-weight="bold" fill="white">Motores</text>
            <text x="540" y="160" text-anchor="middle" font-size="12" font-weight="bold" fill="white">Búsqueda</text>
            <text x="540" y="175" text-anchor="middle" font-size="9" fill="#d1ecf1">Google, Bing</text>
            
            <!-- Dispositivos IoT -->
            <rect x="640" y="150" width="120" height="60" fill="#fd7e14" stroke="#e55a00" stroke-width="2" rx="5"/>
            <text x="700" y="175" text-anchor="middle" font-size="12" font-weight="bold" fill="white">Dispositivos</text>
            <text x="700" y="190" text-anchor="middle" font-size="12" font-weight="bold" fill="white">IoT</text>
            <text x="700" y="205" text-anchor="middle" font-size="9" fill="#fff2e6">Shodan, Censys</text>
            
            <!-- Archivos y Documentos -->
            <rect x="120" y="450" width="120" height="60" fill="#dc3545" stroke="#c82333" stroke-width="2" rx="5"/>
            <text x="180" y="475" text-anchor="middle" font-size="12" font-weight="bold" fill="white">Archivos</text>
            <text x="180" y="490" text-anchor="middle" font-size="12" font-weight="bold" fill="white">Documentos</text>
            <text x="180" y="505" text-anchor="middle" font-size="9" fill="#f5c6cb">PDFs, Office</text>
            
            <!-- Bases de Datos -->
            <rect x="280" y="480" width="120" height="60" fill="#20c997" stroke="#1aa37a" stroke-width="2" rx="5"/>
            <text x="340" y="505" text-anchor="middle" font-size="12" font-weight="bold" fill="white">Bases de</text>
            <text x="340" y="520" text-anchor="middle" font-size="12" font-weight="bold" fill="white">Datos</text>
            <text x="340" y="535" text-anchor="middle" font-size="9" fill="#d1f2eb">Leaks, Breaches</text>
            
            <!-- Tecnologías Web -->
            <rect x="480" y="480" width="120" height="60" fill="#ffc107" stroke="#e0a800" stroke-width="2" rx="5"/>
            <text x="540" y="505" text-anchor="middle" font-size="12" font-weight="bold" fill="#495057">Tecnologías</text>
            <text x="540" y="520" text-anchor="middle" font-size="12" font-weight="bold" fill="#495057">Web</text>
            <text x="540" y="535" text-anchor="middle" font-size="9" fill="#6c6c00">Wappalyzer</text>
            
            <!-- Archivos Históricos -->
            <rect x="640" y="450" width="120" height="60" fill="#6c757d" stroke="#545b62" stroke-width="2" rx="5"/>
            <text x="700" y="475" text-anchor="middle" font-size="12" font-weight="bold" fill="white">Archivos</text>
            <text x="700" y="490" text-anchor="middle" font-size="12" font-weight="bold" fill="white">Históricos</text>
            <text x="700" y="505" text-anchor="middle" font-size="9" fill="#d6d8db">Wayback Machine</text>
            
            <!-- Conexiones desde el centro -->
            <line x1="420" y1="290" x2="220" y2="200" stroke="#495057" stroke-width="2"/>
            <line x1="440" y1="280" x2="350" y2="180" stroke="#495057" stroke-width="2"/>
            <line x1="460" y1="280" x2="530" y2="180" stroke="#495057" stroke-width="2"/>
            <line x1="480" y1="290" x2="680" y2="200" stroke="#495057" stroke-width="2"/>
            
            <line x1="420" y1="350" x2="220" y2="460" stroke="#495057" stroke-width="2"/>
            <line x1="440" y1="360" x2="350" y2="480" stroke="#495057" stroke-width="2"/>
            <line x1="460" y1="360" x2="530" y2="480" stroke="#495057" stroke-width="2"/>
            <line x1="480" y1="350" x2="680" y2="460" stroke="#495057" stroke-width="2"/>
            
            <!-- Información adicional -->
            <rect x="320" y="250" width="260" height="100" fill="#e9ecef" stroke="#6c757d" stroke-width="1" rx="5"/>
            <text x="450" y="270" text-anchor="middle" font-size="14" font-weight="bold" fill="#495057">Open Source Intelligence</text>
            <text x="450" y="290" text-anchor="middle" font-size="10" fill="#495057">Recopilación de información</text>
            <text x="450" y="302" text-anchor="middle" font-size="10" fill="#495057">de fuentes públicas</text>
            <text x="450" y="320" text-anchor="middle" font-size="10" fill="#495057">Legal y ético</text>
            <text x="450" y="332" text-anchor="middle" font-size="10" fill="#495057">No intrusivo</text>
        `;
    },

    generateGenericFallback(diagramId) {
        return `
            <rect x="50" y="50" width="600" height="300" fill="#f8f9fa" stroke="#6c757d" stroke-width="2" rx="10"/>
            <text x="350" y="100" text-anchor="middle" font-size="18" font-weight="bold" fill="#495057">Diagrama: ${diagramId}</text>
            <text x="350" y="130" text-anchor="middle" font-size="14" fill="#6c757d">Sistema de respaldo activado</text>
            
            <rect x="100" y="160" width="500" height="150" fill="#e9ecef" stroke="#6c757d" stroke-width="1" rx="5"/>
            <text x="350" y="185" text-anchor="middle" font-size="12" fill="#495057">Este diagrama no se pudo cargar correctamente.</text>
            <text x="350" y="205" text-anchor="middle" font-size="12" fill="#495057">Se ha activado el sistema de respaldo para mantener</text>
            <text x="350" y="225" text-anchor="middle" font-size="12" fill="#495057">la funcionalidad del módulo educativo.</text>
            
            <text x="350" y="255" text-anchor="middle" font-size="10" fill="#6c757d">ID del diagrama: ${diagramId}</text>
            <text x="350" y="270" text-anchor="middle" font-size="10" fill="#6c757d">Módulo: Footprinting y Reconocimiento</text>
            <text x="350" y="285" text-anchor="middle" font-size="10" fill="#6c757d">Estado: Respaldo activo</text>
        `;
    }

};

// ========================================
// FUNCIONES AUXILIARES PARA MANEJO DE SVG
// ========================================

/**
 * Inicializa el sistema SVG con manejo robusto de errores
 */
function initializeSVGSystem() {
    return new Promise((resolve, reject) => {
        console.log('🔧 Intentando inicializar sistema SVG...');
        
        if (typeof SVGInlineInjector !== 'undefined') {
            try {
                window.svgInjector = new SVGInlineInjector();
                window.svgInjector.init();
                console.log('✅ SVGInlineInjector inicializado exitosamente');
                resolve(true);
            } catch (error) {
                console.error('❌ Error inicializando SVGInlineInjector:', error);
                resolve(false);
            }
        } else {
            console.log('⚠️ SVGInlineInjector no está disponible, usando sistema de respaldo');
            resolve(false);
        }
    });
}

/**
 * Sistema de respaldo para cuando SVGInlineInjector no está disponible
 */
function fallbackSVGSystem() {
    console.log('🛠️ Activando sistema de respaldo para SVG');
    
    // Implementar lógica básica para manejar SVGs sin el injector
    const svgElements = document.querySelectorAll('svg use');
    svgElements.forEach(useElement => {
        const href = useElement.getAttribute('href');
        if (href && href.includes('#')) {
            console.log(`📍 SVG encontrado: ${href}`);
            // El sistema de respaldo puede ser implementado aquí si es necesario
        }
    });
}

// ========================================
// INICIALIZACIÓN DEL MÓDULO
// ========================================

async function initializeModule() {
    console.log('🎯 Inicializando Módulo Footprinting y Reconocimiento');
    
    startTime = Date.now();
    loadNavigation();
    updateProgress();
    
    // Inicializar sistema SVG con manejo robusto
    try {
        const svgInitialized = await initializeSVGSystem();
        if (!svgInitialized) {
            fallbackSVGSystem();
        }
    } catch (error) {
        console.error('❌ Error crítico en inicialización SVG:', error);
        fallbackSVGSystem();
    }
    
    // Inicializar sistema de diagramas
    setTimeout(() => {
        if (typeof UNIVERSAL_DIAGRAM_SYSTEM !== 'undefined') {
            UNIVERSAL_DIAGRAM_SYSTEM.init();
        } else {
            console.log('⚠️ UNIVERSAL_DIAGRAM_SYSTEM no disponible');
        }
    }, 1000);
    
    console.log('✅ Módulo Footprinting inicializado correctamente');
}

function loadNavigation() {
    const navContainer = document.getElementById('module-nav');
    if (!navContainer) return;

    let navHTML = '';
    footprintingModuleData.topics.forEach((topic, index) => {
        const completedClass = topic.completed ? 'completed' : '';
        const activeClass = index === currentTopicIndex ? 'active' : '';
        
        navHTML += `
            <div class="nav-item ${completedClass} ${activeClass}" onclick="loadTopic(${index})">
                <div class="nav-item-content">
                    <div class="nav-item-header">
                        <span class="nav-item-number">${index + 1}</span>
                        <span class="nav-item-title">${topic.title}</span>
                    </div>
                    <div class="nav-item-meta">
                        <span class="nav-item-duration">
                            <i class="fas fa-clock"></i> ${topic.duration} min
                        </span>
                        <span class="nav-item-status">
                            <i class="fas ${topic.completed ? 'fa-check-circle' : 'fa-circle'}"></i>
                        </span>
                    </div>
                </div>
            </div>
        `;
    });

    navContainer.innerHTML = navHTML;
}

function loadTopic(index) {
    if (index < 0 || index >= footprintingModuleData.topics.length) return;
    
    currentTopicIndex = index;
    const topic = footprintingModuleData.topics[index];
    
    console.log(`📖 Cargando tema: ${topic.title}`);
    
    // Actualizar navegación
    updateNavigationState();
    
    // Cargar contenido del tema
    loadTopicContent(topic);
    
    // Actualizar progreso
    updateProgress();
}

function loadTopicContent(topic) {
    const contentContainer = document.getElementById('topic-content');
    if (!contentContainer) return;

    let content = '';
    
    switch(topic.id) {
        case 'conceptos-basicos':
            content = createConceptosBasicosContent(topic);
            break;
        case 'metodologia-footprint':
            content = createMetodologiaFootprintContent(topic);
            break;
        case 'herramientas-footprint':
            content = createHerramientasFootprintContent(topic);
            break;
        case 'google-hacking':
            content = createGoogleHackingContent(topic);
            break;
        case 'tecnicas-footprint':
            content = createTecnicasFootprintContent(topic);
            break;
        case 'osint':
            content = createOSINTContent(topic);
            break;
        default:
            content = createDefaultContent(topic);
    }

    contentContainer.innerHTML = content;
      // Inicializar funcionalidades del tema
    initializeTopicFeatures();
    
    // Procesar diagramas después de cargar contenido
    setTimeout(() => {
        if (typeof UNIVERSAL_DIAGRAM_SYSTEM !== 'undefined') {
            UNIVERSAL_DIAGRAM_SYSTEM.applyFixes();
        }
    }, 500);
}

// ========================================
// FUNCIONES DE CONTENIDO POR TEMA
// ========================================

function createConceptosBasicosContent(topic) {
    return `
        <div class="topic-header">
            <h2 class="text-center">
                <svg class="topic-icon me-2" width="32" height="32" viewBox="0 0 100 100">
                    <use href="../../assets/images/icons.svg#icon-search"></use>
                </svg>
                ${topic.title}
            </h2>
            <p class="topic-intro">
                Comprende los fundamentos del footprinting y las técnicas de reconocimiento esencial para el hacking ético.
            </p>
        </div>

        <div class="topic-content-body">
            <h3>Fundamentos del Footprinting</h3>            <!-- Diagrama de Proceso de Footprinting -->
            <div class="footprinting-flow-diagram mb-4">
                <h4 class="text-center mb-3">Proceso Completo de Footprinting</h4>
                <svg class="w-100" style="max-height: 520px;" viewBox="0 0 100 100">
                    <use href="../../assets/images/diagrams.svg#footprinting-process-flow"></use>
                </svg>
                <p class="text-center text-muted mt-2">
                    <small>Flujo completo del proceso de reconocimiento y recopilación de información</small>
                </p>
            </div>

            <div class="concept-card">
                <h4>
                    <svg class="concept-icon me-2" width="24" height="24" viewBox="0 0 100 100">
                        <use href="../../assets/images/icons.svg#icon-footprint"></use>
                    </svg>
                    ¿Qué es el Footprinting?
                </h4>
                <p>El footprinting es el proceso de recopilación de información sobre un sistema o red objetivo 
                de manera pasiva y activa. Es la primera fase crítica en cualquier evaluación de seguridad, 
                proporcionando la base para todas las actividades posteriores de testing.</p>
                
                <div class="info-highlight mt-3">
                    <h6>Objetivos Principales:</h6>
                    <ul>
                        <li>Identificar la superficie de ataque del objetivo</li>
                        <li>Descubrir información técnica y organizacional</li>
                        <li>Mapear la infraestructura de red</li>
                        <li>Encontrar posibles vectores de ataque</li>
                    </ul>
                </div>
            </div>

            <div class="concept-card">
                <h4>
                    <svg class="concept-icon me-2" width="24" height="24" viewBox="0 0 100 100">
                        <use href="../../assets/images/icons.svg#icon-reconnaissance"></use>
                    </svg>
                    Tipos de Reconocimiento
                </h4>
                
                <div class="comparison-table mt-3">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="comparison-card passive">
                                <h6><i class="fas fa-eye-slash me-2"></i>Reconocimiento Pasivo</h6>
                                <p>Recopilación de información sin interactuar directamente con el objetivo.</p>
                                <ul class="small">
                                    <li>Búsquedas en motores</li>
                                    <li>Consultas WHOIS</li>
                                    <li>Análisis de redes sociales</li>
                                    <li>Revisión de sitios web públicos</li>
                                </ul>
                                <div class="badge-container">
                                    <span class="badge bg-success">Indetectable</span>
                                    <span class="badge bg-info">Sin riesgo legal</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="comparison-card active">
                                <h6><i class="fas fa-crosshairs me-2"></i>Reconocimiento Activo</h6>
                                <p>Interacción directa con los sistemas del objetivo para obtener información.</p>
                                <ul class="small">
                                    <li>Escaneo de puertos</li>
                                    <li>Consultas DNS directas</li>
                                    <li>Ping y traceroute</li>
                                    <li>Banner grabbing</li>
                                </ul>
                                <div class="badge-container">
                                    <span class="badge bg-warning">Detectable</span>
                                    <span class="badge bg-danger">Requiere autorización</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="concept-card">
                <h4>
                    <svg class="concept-icon me-2" width="24" height="24" viewBox="0 0 100 100">
                        <use href="../../assets/images/icons.svg#icon-target"></use>
                    </svg>
                    Información Objetivo del Footprinting
                </h4>
                
                <div class="info-categories">
                    <div class="row">
                        <div class="col-md-4">
                            <div class="category-card">
                                <h6><i class="fas fa-building me-2"></i>Organizacional</h6>
                                <ul class="small">
                                    <li>Estructura corporativa</li>
                                    <li>Empleados clave</li>
                                    <li>Contactos públicos</li>
                                    <li>Ubicaciones físicas</li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="category-card">
                                <h6><i class="fas fa-network-wired me-2"></i>Técnica</h6>
                                <ul class="small">
                                    <li>Dominios y subdominios</li>
                                    <li>Direcciones IP</li>
                                    <li>Servicios expuestos</li>
                                    <li>Tecnologías utilizadas</li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="category-card">
                                <h6><i class="fas fa-shield-alt me-2"></i>Seguridad</h6>
                                <ul class="small">
                                    <li>Medidas de protección</li>
                                    <li>Políticas de seguridad</li>
                                    <li>Sistemas de monitoreo</li>
                                    <li>Configuraciones</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="concept-card">
                <h4>
                    <svg class="concept-icon me-2" width="24" height="24" viewBox="0 0 100 100">
                        <use href="../../assets/images/icons.svg#icon-ethics"></use>
                    </svg>
                    Consideraciones Éticas y Legales
                </h4>
                
                <div class="ethics-guidelines">
                    <div class="alert alert-warning">
                        <h6><i class="fas fa-exclamation-triangle me-2"></i>Principios Fundamentales</h6>
                        <ul class="mb-0">
                            <li><strong>Autorización:</strong> Siempre obtén autorización escrita antes de realizar footprinting activo</li>
                            <li><strong>Alcance:</strong> Respeta estrictamente los límites definidos en el acuerdo</li>
                            <li><strong>Confidencialidad:</strong> Protege toda la información obtenida durante el proceso</li>
                            <li><strong>Responsabilidad:</strong> Reporta vulnerabilidades de manera responsable</li>
                        </ul>
                    </div>
                    
                    <div class="best-practices mt-3">
                        <h6>Mejores Prácticas:</h6>
                        <div class="row">
                            <div class="col-md-6">
                                <ul class="practice-list">
                                    <li><i class="fas fa-check text-success me-2"></i>Documenta todas las actividades</li>
                                    <li><i class="fas fa-check text-success me-2"></i>Usa herramientas legítimas</li>
                                    <li><i class="fas fa-check text-success me-2"></i>Respeta la privacidad</li>
                                </ul>
                            </div>
                            <div class="col-md-6">
                                <ul class="practice-list">
                                    <li><i class="fas fa-times text-danger me-2"></i>No accedas a datos privados</li>
                                    <li><i class="fas fa-times text-danger me-2"></i>No causes interrupciones</li>
                                    <li><i class="fas fa-times text-danger me-2"></i>No compartas información sensible</li>
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
                    <p><strong>¿Cuál es la principal diferencia entre reconocimiento pasivo y activo?</strong></p>
                    <div class="quiz-options">
                        <label class="quiz-option">
                            <input type="radio" name="q1" value="a">
                            <span>El reconocimiento pasivo es más efectivo</span>
                        </label>
                        <label class="quiz-option">
                            <input type="radio" name="q1" value="b">
                            <span>El reconocimiento activo interactúa directamente con el objetivo</span>
                        </label>
                        <label class="quiz-option">
                            <input type="radio" name="q1" value="c">
                            <span>No hay diferencias significativas</span>
                        </label>
                    </div>
                </div>
            </div>

            <div class="case-study mt-4">
                <h4 class="text-center">
                    <svg class="case-icon me-2" width="24" height="24" viewBox="0 0 100 100">
                        <use href="../../assets/images/icons.svg#icon-case-study"></use>
                    </svg>
                    Caso de Estudio: Evaluación de Seguridad Corporativa
                </h4>
                <div class="case-content">
                    <div class="case-scenario">
                        <h6>📚 Escenario:</h6>
                        <p>Una empresa de servicios financieros te contrata para realizar una evaluación de seguridad. 
                        Antes de comenzar cualquier prueba técnica, necesitas realizar un footprinting completo 
                        para entender la superficie de ataque.</p>
                    </div>
                    
                    <div class="case-question mt-3">
                        <h6>❓ Pregunta de Análisis:</h6>
                        <p><strong>¿Por dónde deberías comenzar tu proceso de footprinting?</strong></p>
                        <div class="case-options">
                            <button class="btn btn-outline-primary case-option" data-case="q1" data-value="a">
                                A) Realizar escaneo de puertos inmediatamente
                            </button>
                            <button class="btn btn-outline-primary case-option" data-case="q1" data-value="b">
                                B) Comenzar con reconocimiento pasivo usando fuentes abiertas
                            </button>
                            <button class="btn btn-outline-primary case-option" data-case="q1" data-value="c">
                                C) Contactar directamente a los empleados
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
    `;
}

function createMetodologiaFootprintContent(topic) {
    return `
        <div class="topic-header">
            <h2 class="text-center">
                <svg class="topic-icon me-2" width="32" height="32" viewBox="0 0 100 100">
                    <use href="../../assets/images/icons.svg#icon-methodology"></use>
                </svg>
                ${topic.title}
            </h2>
            <p class="topic-intro">
                Aprende las metodologías sistemáticas para realizar footprinting efectivo y completo.
            </p>
        </div>

        <div class="topic-content-body">
            <h3>Metodologías de Footprinting</h3>
              <!-- Diagrama de Metodología -->
            <div class="methodology-diagram mb-4">                <h4 class="text-center mb-3">Marco de Trabajo de Footprinting</h4>
                <svg class="w-100" style="max-height: 450px;" viewBox="0 0 100 100">
                    <use href="../../assets/images/diagrams.svg#methodology-diagram"></use>
                </svg>
                <p class="text-center text-muted mt-2">
                    <small>Metodología estructurada para reconocimiento completo</small>
                </p>
            </div>

            <div class="methodology-section">
                <h4>
                    <svg class="method-icon me-2" width="24" height="24" viewBox="0 0 100 100">
                        <use href="../../assets/images/icons.svg#icon-web"></use>
                    </svg>
                    1. Huella en Internet
                </h4>
                
                <div class="method-content">
                    <p>La huella en internet es el rastro de información que una organización deja en la web.</p>
                    
                    <div class="method-steps">
                        <h6>Pasos a seguir:</h6>
                        <div class="step-list">
                            <div class="step-item">
                                <span class="step-number">1</span>
                                <div class="step-content">
                                    <h6>Búsqueda en motores</h6>
                                    <p>Utilizar Google, Bing, DuckDuckGo para encontrar información pública</p>
                                </div>
                            </div>
                            <div class="step-item">
                                <span class="step-number">2</span>
                                <div class="step-content">
                                    <h6>Análisis de sitios web</h6>
                                    <p>Examinar el contenido, estructura y metadatos de sitios corporativos</p>
                                </div>
                            </div>
                            <div class="step-item">
                                <span class="step-number">3</span>
                                <div class="step-content">
                                    <h6>Redes sociales</h6>
                                    <p>Investigar perfiles corporativos y de empleados</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="methodology-section">
                <h4>
                    <svg class="method-icon me-2" width="24" height="24" viewBox="0 0 100 100">
                        <use href="../../assets/images/icons.svg#icon-intelligence"></use>
                    </svg>
                    2. Inteligencia Competitiva
                </h4>
                
                <div class="method-content">
                    <p>Recopilación de información sobre competidores, socios y terceros relacionados.</p>
                    
                    <div class="intelligence-sources">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="source-card">
                                    <h6><i class="fas fa-newspaper me-2"></i>Fuentes Públicas</h6>
                                    <ul>
                                        <li>Informes anuales</li>
                                        <li>Comunicados de prensa</li>
                                        <li>Noticias del sector</li>
                                        <li>Presentaciones públicas</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="source-card">
                                    <h6><i class="fas fa-users me-2"></i>Fuentes Profesionales</h6>
                                    <ul>
                                        <li>LinkedIn corporativo</li>
                                        <li>Perfiles de ejecutivos</li>
                                        <li>Conferencias y eventos</li>
                                        <li>Publicaciones técnicas</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="methodology-section">
                <h4>
                    <svg class="method-icon me-2" width="24" height="24" viewBox="0 0 100 100">
                        <use href="../../assets/images/icons.svg#icon-whois"></use>
                    </svg>
                    3. WHOIS Footprinting
                </h4>
                
                <div class="method-content">
                    <p>Consulta de bases de datos WHOIS para obtener información de dominios y redes.</p>
                    
                    <div class="whois-info">
                        <h6>Información típica de WHOIS:</h6>
                        <div class="row">
                            <div class="col-md-4">
                                <div class="info-category">
                                    <h6>Dominio</h6>
                                    <ul class="small">
                                        <li>Propietario registrado</li>
                                        <li>Fecha de registro</li>
                                        <li>Fecha de expiración</li>
                                        <li>Registrador</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="info-category">
                                    <h6>Contactos</h6>
                                    <ul class="small">
                                        <li>Administrativo</li>
                                        <li>Técnico</li>
                                        <li>Facturación</li>
                                        <li>Registrante</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="info-category">
                                    <h6>Servidores</h6>
                                    <ul class="small">
                                        <li>Servidores DNS</li>
                                        <li>Servidores de correo</li>
                                        <li>Direcciones IP</li>
                                        <li>Rangos de red</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="practical-example mt-3">
                        <h6>Comando práctico:</h6>
                        <div class="code-example">
                            <code>whois ejemplo.com</code>
                            <button class="btn btn-sm btn-outline-secondary ms-2" onclick="copyToClipboard('whois ejemplo.com')">
                                <i class="fas fa-copy"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="methodology-section">
                <h4>
                    <svg class="method-icon me-2" width="24" height="24" viewBox="0 0 100 100">
                        <use href="../../assets/images/icons.svg#icon-dns"></use>
                    </svg>
                    4. DNS Footprinting
                </h4>
                
                <div class="method-content">
                    <p>Análisis del sistema de nombres de dominio para mapear la infraestructura.</p>
                    
                    <div class="dns-types">
                        <h6>Tipos de registros DNS importantes:</h6>
                        <div class="record-grid">
                            <div class="record-item">
                                <span class="record-type">A</span>
                                <span class="record-desc">Dirección IPv4</span>
                            </div>
                            <div class="record-item">
                                <span class="record-type">AAAA</span>
                                <span class="record-desc">Dirección IPv6</span>
                            </div>
                            <div class="record-item">
                                <span class="record-type">MX</span>
                                <span class="record-desc">Servidor de correo</span>
                            </div>
                            <div class="record-item">
                                <span class="record-type">NS</span>
                                <span class="record-desc">Servidor de nombres</span>
                            </div>
                            <div class="record-item">
                                <span class="record-type">TXT</span>
                                <span class="record-desc">Texto (SPF, DKIM)</span>
                            </div>
                            <div class="record-item">
                                <span class="record-type">CNAME</span>
                                <span class="record-desc">Alias canónico</span>
                            </div>
                        </div>
                    </div>

                    <div class="dns-techniques mt-3">
                        <h6>Técnicas avanzadas:</h6>
                        <ul>
                            <li><strong>Zone Transfer:</strong> Intento de transferencia de zona DNS</li>
                            <li><strong>Subdomain Enumeration:</strong> Descubrimiento de subdominios</li>
                            <li><strong>Reverse DNS:</strong> Resolución inversa de direcciones IP</li>
                            <li><strong>DNS Cache Snooping:</strong> Análisis de caché DNS</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="methodology-section">
                <h4>
                    <svg class="method-icon me-2" width="24" height="24" viewBox="0 0 100 100">
                        <use href="../../assets/images/icons.svg#icon-network"></use>
                    </svg>
                    5. Footprinting de Red
                </h4>
                
                <div class="method-content">
                    <p>Mapeo de la infraestructura de red para identificar rangos IP y topología.</p>
                    
                    <div class="network-mapping">
                        <h6>Técnicas de mapeo:</h6>
                        <div class="technique-cards">
                            <div class="technique-card">
                                <h6><i class="fas fa-route me-2"></i>Traceroute</h6>
                                <p>Mapear la ruta hacia el objetivo</p>
                                <code>traceroute objetivo.com</code>
                            </div>
                            <div class="technique-card">
                                <h6><i class="fas fa-search-plus me-2"></i>ASN Lookup</h6>
                                <p>Identificar números de sistema autónomo</p>
                                <code>whois -h whois.radb.net objetivo.com</code>
                            </div>
                            <div class="technique-card">
                                <h6><i class="fas fa-map me-2"></i>BGP Routing</h6>
                                <p>Análisis de tablas de enrutamiento BGP</p>
                                <small>Hurricane Electric BGP Toolkit</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="methodology-section">
                <h4>
                    <svg class="method-icon me-2" width="24" height="24" viewBox="0 0 100 100">
                        <use href="../../assets/images/icons.svg#icon-webpage"></use>
                    </svg>
                    6. Footprinting de Página Web
                </h4>
                
                <div class="method-content">
                    <p>Análisis profundo de sitios web para extraer información técnica y organizacional.</p>
                    
                    <div class="web-analysis">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="analysis-card">
                                    <h6><i class="fas fa-code me-2"></i>Análisis Técnico</h6>
                                    <ul>
                                        <li>Tecnologías utilizadas</li>
                                        <li>Versiones de software</li>
                                        <li>Frameworks y CMS</li>
                                        <li>Archivos de configuración</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="analysis-card">
                                    <h6><i class="fas fa-file-alt me-2"></i>Análisis de Contenido</h6>
                                    <ul>
                                        <li>Comentarios HTML</li>
                                        <li>Metadatos</li>
                                        <li>Información de empleados</li>
                                        <li>Documentos y archivos</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="methodology-section">
                <h4>
                    <svg class="method-icon me-2" width="24" height="24" viewBox="0 0 100 100">
                        <use href="../../assets/images/icons.svg#icon-email"></use>
                    </svg>
                    7. Footprinting de Correo
                </h4>
                
                <div class="method-content">
                    <p>Análisis de sistemas de correo electrónico para obtener información sobre usuarios y configuraciones.</p>
                    
                    <div class="email-footprinting">
                        <h6>Información objetivo:</h6>
                        <div class="email-targets">
                            <div class="target-item">
                                <i class="fas fa-server me-2"></i>
                                <span><strong>Servidores de correo:</strong> MX records, configuraciones SMTP</span>
                            </div>
                            <div class="target-item">
                                <i class="fas fa-users me-2"></i>
                                <span><strong>Usuarios:</strong> Direcciones de correo válidas</span>
                            </div>
                            <div class="target-item">
                                <i class="fas fa-shield-alt me-2"></i>
                                <span><strong>Seguridad:</strong> SPF, DKIM, DMARC</span>
                            </div>
                            <div class="target-item">
                                <i class="fas fa-cogs me-2"></i>
                                <span><strong>Configuración:</strong> Políticas de seguridad de correo</span>
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
                    <p><strong>¿Cuál es el orden lógico para realizar footprinting metodológico?</strong></p>
                    <div class="quiz-options">
                        <label class="quiz-option">
                            <input type="radio" name="q2" value="a">
                            <span>DNS → WHOIS → Redes Sociales → Sitio Web</span>
                        </label>
                        <label class="quiz-option">
                            <input type="radio" name="q2" value="b">
                            <span>Sitio Web → WHOIS → DNS → Inteligencia Competitiva</span>
                        </label>
                        <label class="quiz-option">
                            <input type="radio" name="q2" value="c">
                            <span>Huella Internet → WHOIS → DNS → Análisis específico</span>
                        </label>
                    </div>
                </div>
            </div>

            <div class="practical-lab mt-4">
                <h4 class="text-center">
                    <svg class="lab-icon me-2" width="18" height="18" viewBox="0 0 100 100">
                        <use href="../../assets/images/icons.svg#icon-lab"></use>
                    </svg>
                    Laboratorio Práctico: Metodología Completa
                </h4>
                <div class="lab-content">
                    <div class="lab-scenario">
                        <h6>🎯 Objetivo:</h6>
                        <p>Aplicar la metodología completa de footprinting en un dominio de prueba autorizado.</p>
                    </div>
                    
                    <div class="lab-steps">
                        <h6>📋 Pasos del laboratorio:</h6>
                        <div class="step-checklist">
                            <div class="checklist-item">
                                <input type="checkbox" id="step1">
                                <label for="step1">Realizar búsqueda inicial en motores</label>
                            </div>
                            <div class="checklist-item">
                                <input type="checkbox" id="step2">
                                <label for="step2">Consulta WHOIS del dominio</label>
                            </div>
                            <div class="checklist-item">
                                <input type="checkbox" id="step3">
                                <label for="step3">Enumerar registros DNS</label>
                            </div>
                            <div class="checklist-item">
                                <input type="checkbox" id="step4">
                                <label for="step4">Analizar el sitio web</label>
                            </div>
                            <div class="checklist-item">
                                <input type="checkbox" id="step5">
                                <label for="step5">Mapear infraestructura de red</label>
                            </div>
                            <div class="checklist-item">
                                <input type="checkbox" id="step6">
                                <label for="step6">Documentar hallazgos</label>
                            </div>
                        </div>
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

function createDefaultContent(topic) {
    return `
        <div class="topic-header">
            <h2 class="text-center">
                <svg class="topic-icon me-2" width="32" height="32" viewBox="0 0 100 100">
                    <use href="../../assets/images/icons.svg#icon-default"></use>
                </svg>
                ${topic.title}
            </h2>
            <p class="topic-intro">
                Contenido en desarrollo para el tema: ${topic.title}
            </p>
        </div>

        <div class="topic-content-body">
            <div class="alert alert-info">
                <h4><i class="fas fa-info-circle me-2"></i>Tema en Desarrollo</h4>
                <p>Este contenido está siendo desarrollado y estará disponible próximamente.</p>
                <p><strong>Subtemas incluidos:</strong></p>
                <ul>
                    ${topic.subtopics.map(subtopic => `<li>${subtopic}</li>`).join('')}
                </ul>
            </div>

            <div class="topic-actions mt-4">
                <button class="btn btn-sena-primary" onclick="completeTopic(${currentTopicIndex})">
                    <svg class="btn-icon me-2" width="16" height="16" viewBox="0 0 100 100">
                        <use href="../../assets/images/icons.svg#icon-check"></use>
                    </svg>
                    Marcar como Completado
                </button>
            </div>
        </div>
    `;
}

// Continuaré con las demás funciones de contenido...
function createHerramientasFootprintContent(topic) {
    return `
        <div class="topic-header">
            <h2 class="text-center">
                <svg class="topic-icon me-2" width="32" height="32" viewBox="0 0 100 100">
                    <use href="../../assets/images/icons.svg#icon-tools"></use>
                </svg>
                ${topic.title}
            </h2>
            <p class="topic-intro">
                Las herramientas de footprinting permiten recopilar información valiosa sobre el objetivo de manera sistemática y eficiente. Dominar estas herramientas es fundamental para realizar un reconocimiento completo y efectivo.
            </p>
        </div>

        <div class="topic-content-body">
            <h3>Herramientas Principales de Footprinting</h3>            <!-- Diagrama de Comparación de Herramientas -->
            <div class="tools-comparison-diagram mb-4">
                <h4 class="text-center mb-3">Comparación de Herramientas de Footprinting</h4>
                <svg class="w-100" style="max-height: 450px;" viewBox="0 0 100 100">
                    <use href="../../assets/images/diagrams.svg#tools-comparison"></use>
                </svg>
                <p class="text-center text-muted mt-2">
                    <small>Comparativa detallada de herramientas por tipo, función y dificultad</small>
                </p>
            </div>

            <div class="concept-card">
                <h4>
                    <svg class="concept-icon me-2" width="24" height="24" viewBox="0 0 100 100">
                        <use href="../../assets/images/icons.svg#icon-whois"></use>
                    </svg>
                    WHOIS
                </h4>
                <p>WHOIS es el protocolo fundamental para obtener información de registro de dominios, direcciones IP y sistemas autónomos, proporcionando datos críticos sobre la propiedad y configuración de activos de red.</p>
                
                <div class="whois-features">
                    <h5>Información Obtenible con WHOIS:</h5>
                    <div class="row">
                        <div class="col-md-6">
                            <div class="info-category">
                                <h6><i class="fas fa-globe me-2 text-primary"></i>Información de Dominio</h6>
                                <ul class="info-list">
                                    <li>Registrante y organización</li>
                                    <li>Fecha de registro y expiración</li>
                                    <li>Registrar y estado del dominio</li>
                                    <li>Servidores de nombres (DNS)</li>
                                    <li>Información de contacto</li>
                                </ul>
                            </div>
                        </div>
                        
                        <div class="col-md-6">
                            <div class="info-category">
                                <h6><i class="fas fa-network-wired me-2 text-success"></i>Información de IP</h6>
                                <ul class="info-list">
                                    <li>Organización propietaria</li>
                                    <li>Rango de direcciones asignadas</li>
                                    <li>País y ubicación geográfica</li>
                                    <li>ISP o proveedor de hosting</li>
                                    <li>Información de contacto técnico</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                    <div class="whois-examples mt-4">
                        <h5>Comandos WHOIS Esenciales:</h5>
                        <div class="command-grid">
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="command-example">
                                        <h6>Consulta de Dominio</h6>
                                        <pre class="command-block">whois example.com</pre>
                                        <small>Información completa del dominio</small>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="command-example">
                                        <h6>Consulta de IP</h6>
                                        <pre class="command-block">whois 8.8.8.8</pre>
                                        <small>Información del propietario de la IP</small>
                                    </div>
                                </div>
                            </div>
                            <div class="row mt-3">
                                <div class="col-md-6">
                                    <div class="command-example">
                                        <h6>Servidor WHOIS Específico</h6>
                                        <pre class="command-block">whois -h whois.arin.net 192.168.1.1</pre>
                                        <small>Consulta a servidor específico</small>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="command-example">
                                        <h6>Búsqueda Inversa</h6>
                                        <pre class="command-block">whois -i origin AS15169</pre>
                                        <small>Información por número AS</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="whois-output-example mt-4">
                            <h6>Ejemplo de Salida WHOIS:</h6>
                            <pre class="output-example">Domain Name: EXAMPLE.COM
Registry Domain ID: 2336799_DOMAIN_COM-VRSN
Registrar WHOIS Server: whois.iana.org
Registrar URL: http://res-dom.iana.org
Updated Date: 2023-08-14T07:01:31Z
Creation Date: 1995-08-14T04:00:00Z
Registry Expiry Date: 2024-08-13T04:00:00Z
Registrar: RESERVED-Internet Assigned Numbers Authority
Domain Status: clientDeleteProhibited
Domain Status: clientTransferProhibited
Domain Status: clientUpdateProhibited
Name Server: A.IANA-SERVERS.NET
Name Server: B.IANA-SERVERS.NET</pre>
                        </div>
                    </div>
                </div>
            </div>

            <div class="concept-card">
                <h4>
                    <svg class="concept-icon me-2" width="24" height="24" viewBox="0 0 100 100">
                        <use href="../../assets/images/icons.svg#icon-netcraft"></use>
                    </svg>
                    Netcraft
                </h4>
                <p>Netcraft es una plataforma web que proporciona información detallada sobre tecnologías web, hosting, certificados SSL y historial de sitios web, siendo invaluable para el análisis de infraestructura web.</p>
                
                <div class="netcraft-capabilities">
                    <h5>Capacidades de Netcraft:</h5>
                    <div class="row">
                        <div class="col-md-6">
                            <div class="capability-section">
                                <h6><i class="fas fa-server me-2 text-primary"></i>Análisis de Servidor Web</h6>
                                <ul class="capability-list">
                                    <li>Identificación de servidor web y versión</li>
                                    <li>Sistema operativo del servidor</li>
                                    <li>Tecnologías backend utilizadas</li>
                                    <li>Configuración de seguridad</li>
                                </ul>
                            </div>
                        </div>
                        
                        <div class="col-md-6">
                            <div class="capability-section">
                                <h6><i class="fas fa-history me-2 text-success"></i>Historial del Sitio</h6>
                                <ul class="capability-list">
                                    <li>Cambios en tecnologías a lo largo del tiempo</li>
                                    <li>Historial de uptime/downtime</li>
                                    <li>Cambios en hosting providers</li>
                                    <li>Evolución de certificados SSL</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                    <div class="row mt-3">
                        <div class="col-md-6">
                            <div class="capability-section">
                                <h6><i class="fas fa-shield-alt me-2 text-warning"></i>Análisis de Seguridad</h6>
                                <ul class="capability-list">
                                    <li>Estado de certificados SSL/TLS</li>
                                    <li>Configuración de headers de seguridad</li>
                                    <li>Vulnerabilidades conocidas</li>
                                    <li>Ranking de seguridad</li>
                                </ul>
                            </div>
                        </div>
                        
                        <div class="col-md-6">
                            <div class="capability-section">
                                <h6><i class="fas fa-search me-2 text-info"></i>Búsqueda Avanzada</h6>
                                <ul class="capability-list">
                                    <li>Sitios por tecnología específica</li>
                                    <li>Sitios por país o organización</li>
                                    <li>Subdominios descubiertos</li>
                                    <li>Análisis de competencia</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="netcraft-usage mt-4">
                    <h5>Uso de Netcraft:</h5>
                    <div class="usage-steps">
                        <div class="step-item">
                            <span class="step-number">1</span>
                            <div class="step-content">
                                <strong>Acceso Web:</strong>
                                <p>Visitar <code>https://sitereport.netcraft.com</code></p>
                            </div>
                        </div>
                        <div class="step-item">
                            <span class="step-number">2</span>
                            <div class="step-content">
                                <strong>Ingreso de Objetivo:</strong>
                                <p>Introducir dominio o dirección IP objetivo</p>
                            </div>
                        </div>
                        <div class="step-item">
                            <span class="step-number">3</span>
                            <div class="step-content">
                                <strong>Análisis de Resultados:</strong>
                                <p>Revisar información técnica, historial y configuración</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="concept-card">
                <h4>
                    <svg class="concept-icon me-2" width="24" height="24" viewBox="0 0 100 100">
                        <use href="../../assets/images/icons.svg#icon-harvester"></use>
                    </svg>
                    theHarvester
                </h4>
                <p>theHarvester es una herramienta poderosa para recopilar información de múltiples fuentes públicas, especializada en encontrar emails, subdominios, hosts, nombres de empleados, puertos abiertos y banners.</p>
                
                <div class="harvester-features">
                    <h5>Fuentes de Datos de theHarvester:</h5>
                    <div class="data-sources-grid">
                        <div class="row">
                            <div class="col-md-3">
                                <div class="source-category">
                                    <h6><i class="fas fa-search me-2 text-primary"></i>Motores de Búsqueda</h6>
                                    <ul class="source-list">
                                        <li>Google</li>
                                        <li>Bing</li>
                                        <li>Yahoo</li>
                                        <li>Baidu</li>
                                        <li>DuckDuckGo</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="source-category">
                                    <h6><i class="fas fa-users me-2 text-success"></i>Redes Sociales</h6>
                                    <ul class="source-list">
                                        <li>LinkedIn</li>
                                        <li>Twitter</li>
                                        <li>Instagram</li>
                                        <li>Facebook</li>
                                        <li>YouTube</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="source-category">
                                    <h6><i class="fas fa-shield-alt me-2 text-warning"></i>Seguridad</h6>
                                    <ul class="source-list">
                                        <li>Shodan</li>
                                        <li>SecurityTrails</li>
                                        <li>VirusTotal</li>
                                        <li>ThreatCrowd</li>
                                        <li>PassiveTotal</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="source-category">
                                    <h6><i class="fas fa-database me-2 text-info"></i>Bases de Datos</h6>
                                    <ul class="source-list">
                                        <li>DNS Dumpster</li>
                                        <li>PGP Servers</li>
                                        <li>Whois databases</li>
                                        <li>Certificate logs</li>
                                        <li>Pastebin</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="harvester-commands mt-4">
                        <h5>Comandos Principales de theHarvester:</h5>
                        <div class="command-examples">
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="command-item">
                                        <h6>Búsqueda Básica</h6>
                                        <pre class="command-block">theharvester -d example.com -b google</pre>
                                        <small>Busca en Google información sobre example.com</small>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="command-item">
                                        <h6>Múltiples Fuentes</h6>
                                        <pre class="command-block">theharvester -d example.com -b google,bing,yahoo</pre>
                                        <small>Busca en múltiples motores</small>
                                    </div>
                                </div>
                            </div>
                            <div class="row mt-3">
                                <div class="col-md-6">
                                    <div class="command-item">
                                        <h6>Limitar Resultados</h6>
                                        <pre class="command-block">theharvester -d example.com -l 500 -b google</pre>
                                        <small>Limita a 500 resultados</small>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="command-item">
                                        <h6>Guardar Resultados</h6>
                                        <pre class="command-block">theharvester -d example.com -b all -f results.html</pre>
                                        <small>Guarda resultados en HTML</small>
                                    </div>
                                </div>
                            </div>
                            <div class="row mt-3">
                                <div class="col-md-6">
                                    <div class="command-item">
                                        <h6>Shodan Integration</h6>
                                        <pre class="command-block">theharvester -d example.com -b shodan</pre>
                                        <small>Busca información en Shodan</small>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="command-item">
                                        <h6>Búsqueda Completa</h6>
                                        <pre class="command-block">theharvester -d example.com -b all</pre>
                                        <small>Utiliza todas las fuentes disponibles</small>
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
                        <use href="../../assets/images/icons.svg#icon-ctfr"></use>
                    </svg>
                    CTFR (Certificate Transparency Finder)
                </h4>
                <p>CTFR es una herramienta especializada que utiliza los Certificate Transparency logs para descubrir subdominios de manera pasiva, aprovechando los certificados SSL/TLS públicamente registrados.</p>
                
                <div class="ctfr-explanation">
                    <h5>¿Qué es Certificate Transparency?</h5>
                    <div class="ct-info">
                        <p>Certificate Transparency es un framework que requiere que todas las autoridades certificadoras publiquen logs de certificados emitidos, creando un registro público y auditable de todos los certificados SSL/TLS.</p>
                        
                        <div class="ct-benefits mt-3">
                            <h6>Beneficios para Footprinting:</h6>
                            <ul>
                                <li><strong>Descubrimiento Pasivo:</strong> No genera tráfico hacia el objetivo</li>
                                <li><strong>Información Histórica:</strong> Incluye certificados ya expirados</li>
                                <li><strong>Cobertura Completa:</strong> Captura subdominios internos y de staging</li>
                                <li><strong>Información Reciente:</strong> Logs actualizados constantemente</li>
                            </ul>
                        </div>
                    </div>
                </div>
                
                <div class="ctfr-usage mt-4">
                    <h5>Uso de CTFR:</h5>
                    <div class="ctfr-commands">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="command-section">
                                    <h6>Instalación</h6>
                                    <pre class="command-block">git clone https://github.com/UnaPibaGeek/ctfr.git
cd ctfr
pip install -r requirements.txt</pre>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="command-section">
                                    <h6>Búsqueda Básica</h6>
                                    <pre class="command-block">python ctfr.py -d example.com</pre>
                                    <small>Encuentra subdominios de example.com</small>
                                </div>
                            </div>
                        </div>
                        <div class="row mt-3">
                            <div class="col-md-6">
                                <div class="command-section">
                                    <h6>Guardar Resultados</h6>
                                    <pre class="command-block">python ctfr.py -d example.com -o output.txt</pre>
                                    <small>Guarda resultados en archivo</small>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="command-section">
                                    <h6>Sin Duplicados</h6>
                                    <pre class="command-block">python ctfr.py -d example.com | sort -u</pre>
                                    <small>Elimina subdominios duplicados</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="ctfr-example-output mt-4">
                        <h6>Ejemplo de Salida:</h6>
                        <pre class="output-example">
    ______________________ __________ 
   / ____/_  __/ ____/ __ \\_  __/ __ \\
  / /     / / / /_  / /_/ / / / / /_/ /
 / /___  / / / __/ / _, _/ / / / _, _/ 
 \\____/ /_/ /_/   /_/ |_| /_/ /_/ |_|  

      Version 1.2 - Hey don't miss AXFR ;)

[!] ---- TARGET: example.com ---- [!] 

blog.example.com
mail.example.com
www.example.com
api.example.com
staging.example.com
dev.example.com</pre>
                    </div>
                </div>
            </div>

            <div class="concept-card">
                <h4>
                    <svg class="concept-icon me-2" width="24" height="24" viewBox="0 0 100 100">
                        <use href="../../assets/images/icons.svg#icon-fierce"></use>
                    </svg>
                    Fierce
                </h4>
                <p>Fierce es una herramienta de reconocimiento DNS que utiliza técnicas de brute force y transferencia de zona para descubrir hosts y subdominios no contiguos, siendo especialmente efectiva contra configuraciones DNS mal configuradas.</p>
                
                <div class="fierce-capabilities">
                    <h5>Capacidades de Fierce:</h5>
                    <div class="row">
                        <div class="col-md-6">
                            <div class="capability-item">
                                <h6><i class="fas fa-hammer me-2 text-primary"></i>DNS Brute Force</h6>
                                <p>Realiza ataques de fuerza bruta contra servidores DNS utilizando listas de palabras comunes para descubrir subdominios.</p>
                                <ul class="feature-details">
                                    <li>Diccionario interno de 2000+ nombres comunes</li>
                                    <li>Soporte para listas de palabras personalizadas</li>
                                    <li>Detección de wildcards DNS</li>
                                    <li>Threading para mayor velocidad</li>
                                </ul>
                            </div>
                        </div>
                        
                        <div class="col-md-6">
                            <div class="capability-item">
                                <h6><i class="fas fa-exchange-alt me-2 text-success"></i>Zone Transfer</h6>
                                <p>Intenta realizar transferencias de zona DNS cuando los servidores están mal configurados.</p>
                                <ul class="feature-details">
                                    <li>Detección automática de servidores DNS</li>
                                    <li>Intento de AXFR (transferencia completa)</li>
                                    <li>Identificación de servidores vulnerables</li>
                                    <li>Extracción completa de registros DNS</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                    <div class="row mt-3">
                        <div class="col-md-6">
                            <div class="capability-item">
                                <h6><i class="fas fa-map me-2 text-warning"></i>Network Range Discovery</h6>
                                <p>Descubre rangos de red adyacentes para mapear la infraestructura completa.</p>
                                <ul class="feature-details">
                                    <li>Análisis de rangos IP contiguos</li>
                                    <li>Identificación de subredes</li>
                                    <li>Mapeo de infraestructura de red</li>
                                    <li>Detección de hosts ocultos</li>
                                </ul>
                            </div>
                        </div>
                        
                        <div class="col-md-6">
                            <div class="capability-item">
                                <h6><i class="fas fa-shield-alt me-2 text-info"></i>Evasion Techniques</h6>
                                <p>Incluye técnicas para evitar detección por sistemas de seguridad.</p>
                                <ul class="feature-details">
                                    <li>Randomización de consultas</li>
                                    <li>Control de timing entre requests</li>
                                    <li>Uso de múltiples servidores DNS</li>
                                    <li>Técnicas anti-fingerprinting</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="fierce-usage mt-4">
                    <h5>Comandos de Fierce:</h5>
                    <div class="fierce-commands">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="command-example">
                                    <h6>Escaneo Básico</h6>
                                    <pre class="command-block">fierce -dns example.com</pre>
                                    <small>Escaneo básico con diccionario interno</small>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="command-example">
                                    <h6>Wordlist Personalizada</h6>
                                    <pre class="command-block">fierce -dns example.com -wordlist mylist.txt</pre>
                                    <small>Usa lista de palabras personalizada</small>
                                </div>
                            </div>
                        </div>
                        <div class="row mt-3">
                            <div class="col-md-6">
                                <div class="command-example">
                                    <h6>Rango Específico</h6>
                                    <pre class="command-block">fierce -range 192.168.1.1-192.168.1.254</pre>
                                    <small>Escanea rango de IPs específico</small>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="command-example">
                                    <h6>Threading</h6>
                                    <pre class="command-block">fierce -dns example.com -threads 20</pre>
                                    <small>Usa 20 threads para mayor velocidad</small>
                                </div>
                            </div>
                        </div>
                        <div class="row mt-3">
                            <div class="col-md-6">
                                <div class="command-example">
                                    <h6>Delay entre Consultas</h6>
                                    <pre class="command-block">fierce -dns example.com -delay 2</pre>
                                    <small>2 segundos de delay para evasión</small>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="command-example">
                                    <h6>DNS Server Específico</h6>
                                    <pre class="command-block">fierce -dns example.com -dnsserver 8.8.8.8</pre>
                                    <small>Usa servidor DNS específico</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="concept-card">
                <h4>
                    <svg class="concept-icon me-2" width="24" height="24" viewBox="0 0 100 100">
                        <use href="../../assets/images/icons.svg#icon-complementary-tools"></use>
                    </svg>
                    Herramientas Complementarias
                </h4>
                <p>Además de las herramientas principales, existen múltiples herramientas especializadas que complementan el arsenal de footprinting para casos específicos y técnicas avanzadas.</p>
                
                <div class="complementary-tools">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="tool-category">
                                <h6><i class="fas fa-sitemap me-2 text-primary"></i>Enumeración de Subdominios</h6>
                                <div class="tools-list">
                                    <div class="tool-item">
                                        <strong>Sublist3r</strong>
                                        <pre class="mini-command">sublist3r -d example.com</pre>
                                        <small>Múltiples fuentes de subdominios</small>
                                    </div>
                                    <div class="tool-item">
                                        <strong>Amass</strong>
                                        <pre class="mini-command">amass enum -d example.com</pre>
                                        <small>Framework avanzado de OSINT</small>
                                    </div>
                                    <div class="tool-item">
                                        <strong>Subfinder</strong>
                                        <pre class="mini-command">subfinder -d example.com</pre>
                                        <small>Rápido y eficiente</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="col-md-6">
                            <div class="tool-category">
                                <h6><i class="fas fa-envelope me-2 text-success"></i>Recolección de Emails</h6>
                                <div class="tools-list">
                                    <div class="tool-item">
                                        <strong>Maltego</strong>
                                        <pre class="mini-command">GUI-based OSINT</pre>
                                        <small>Análisis visual de relaciones</small>
                                    </div>
                                    <div class="tool-item">
                                        <strong>EmailHarvester</strong>
                                        <pre class="mini-command">emailharvester -d example.com</pre>
                                        <small>Especializado en emails</small>
                                    </div>
                                    <div class="tool-item">
                                        <strong>Hunter.io</strong>
                                        <pre class="mini-command">API-based service</pre>
                                        <small>Base de datos de emails profesionales</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="row mt-3">
                        <div class="col-md-6">
                            <div class="tool-category">
                                <h6><i class="fas fa-search me-2 text-warning"></i>OSINT Avanzado</h6>
                                <div class="tools-list">
                                    <div class="tool-item">
                                        <strong>Recon-ng</strong>
                                        <pre class="mini-command">recon-ng</pre>
                                        <small>Framework modular de reconocimiento</small>
                                    </div>
                                    <div class="tool-item">
                                        <strong>SpiderFoot</strong>
                                        <pre class="mini-command">sf_cli.py -s example.com</pre>
                                        <small>Automatización completa de OSINT</small>
                                    </div>
                                    <div class="tool-item">
                                        <strong>Shodan CLI</strong>
                                        <pre class="mini-command">shodan search hostname:example.com</pre>
                                        <small>Motor de búsqueda IoT</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="col-md-6">
                            <div class="tool-category">
                                <h6><i class="fas fa-globe me-2 text-info"></i>Análisis Web</h6>
                                <div class="tools-list">
                                    <div class="tool-item">
                                        <strong>Wayback Machine</strong>
                                        <pre class="mini-command">waybackurls example.com</pre>
                                        <small>Historial de sitios web</small>
                                    </div>
                                    <div class="tool-item">
                                        <strong>BuiltWith</strong>
                                        <pre class="mini-command">Web-based analysis</pre>
                                        <small>Tecnologías utilizadas</small>
                                    </div>
                                    <div class="tool-item">
                                        <strong>Wappalyzer</strong>
                                        <pre class="mini-command">wappalyzer example.com</pre>
                                        <small>Stack tecnológico</small>
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
                    <p><strong>¿Cuál es la principal ventaja de CTFR sobre otras herramientas de enumeración de subdominios?</strong></p>
                    <div class="quiz-options">
                        <label class="quiz-option">
                            <input type="radio" name="q8" value="a">
                            <span>Es más rápido que las demás herramientas</span>
                        </label>
                        <label class="quiz-option">
                            <input type="radio" name="q8" value="b">
                            <span>Realiza reconocimiento completamente pasivo</span>
                        </label>
                        <label class="quiz-option">
                            <input type="radio" name="q8" value="c">
                            <span>Encuentra más subdominios que otras herramientas</span>
                        </label>
                    </div>
                </div>
                
                <div class="quiz-question mt-3">
                    <p><strong>¿Qué comando de theHarvester buscaría información en todas las fuentes disponibles?</strong></p>
                    <div class="quiz-options">
                        <label class="quiz-option">
                            <input type="radio" name="q9" value="a">
                            <span>theharvester -d example.com -b google,bing,yahoo</span>
                        </label>
                        <label class="quiz-option">
                            <input type="radio" name="q9" value="b">
                            <span>theharvester -d example.com -b all</span>
                        </label>
                        <label class="quiz-option">
                            <input type="radio" name="q9" value="c">
                            <span>theharvester -d example.com -b complete</span>
                        </label>
                    </div>
                </div>
            </div>            <div class="practical-exercise mt-4">
                <h4 class="text-center">
                     <svg class="case-icon me-2" width="24" height="24" viewBox="0 0 100 100">
                        <use href="../../assets/images/icons.svg#icon-case-study"></use>
                    </svg>
                    Ejercicio Práctico: Footprinting Completo
                </h4>
                <div class="exercise-content">
                    <div class="exercise-scenario">
                        <h6>📋 Escenario:</h6>
                        <p>Como consultor de seguridad, has sido contratado para realizar un footprinting completo de la organización "TechCorp" (ejemplo.com). Debes recopilar la máxima información posible utilizando solo técnicas pasivas.</p>
                    </div>
                    
                    <div class="exercise-tasks mt-3">
                        <h6>🎯 Tareas a Realizar:</h6>
                        <div class="task-checklist">
                            <div class="task-item">
                                <input type="checkbox" id="task1" class="task-checkbox">
                                <label for="task1">
                                    <strong>Análisis WHOIS:</strong> Obtener información de registro del dominio principal
                                </label>
                            </div>
                            <div class="task-item">
                                <input type="checkbox" id="task2" class="task-checkbox">
                                <label for="task2">
                                    <strong>Netcraft Analysis:</strong> Analizar tecnologías web y historial del sitio
                                </label>
                            </div>
                            <div class="task-item">
                                <input type="checkbox" id="task3" class="task-checkbox">
                                <label for="task3">
                                    <strong>theHarvester:</strong> Recopilar emails y subdominios de múltiples fuentes
                                </label>
                            </div>
                            <div class="task-item">
                                <input type="checkbox" id="task4" class="task-checkbox">
                                <label for="task4">
                                    <strong>CTFR:</strong> Descubrir subdominios mediante Certificate Transparency
                                </label>
                            </div>
                            <div class="task-item">
                                <input type="checkbox" id="task5" class="task-checkbox">
                                <label for="task5">
                                    <strong>Documentación:</strong> Crear informe consolidado con toda la información
                                </label>
                            </div>
                        </div>
                    </div>
                    
                    <div class="exercise-deliverables mt-3">
                        <h6>📊 Entregables Esperados:</h6>
                        <ul class="deliverables-list">
                            <li>Lista de subdominios encontrados (mínimo 15)</li>
                            <li>Direcciones de email corporativo (mínimo 5)</li>
                            <li>Información de infraestructura (servidores, tecnologías)</li>
                            <li>Datos de contacto y organización</li>
                            <li>Timeline de cambios tecnológicos</li>
                        </ul>
                    </div>
                    
                    <div class="exercise-commands mt-3">
                        <h6>💻 Comandos de Ejemplo:</h6>
                        <div class="command-sequence">
                            <pre class="command-block"># Paso 1: WHOIS Analysis
whois ejemplo.com

# Paso 2: theHarvester
theharvester -d ejemplo.com -b all -f harvester_results.html

# Paso 3: CTFR
python ctfr.py -d ejemplo.com -o ctfr_subdomains.txt

# Paso 4: Análisis adicional con herramientas complementarias
subfinder -d ejemplo.com
amass enum -d ejemplo.com</pre>
                        </div>
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
}

function createGoogleHackingContent(topic) {
    return `
        <div class="topic-header">
            <h2 class="text-center">
                <svg class="topic-icon me-2" width="32" height="32" viewBox="0 0 100 100">
                    <use href="../../assets/images/icons.svg#icon-search"></use>
                </svg>
                ${topic.title}
            </h2>
            <p class="topic-intro">
                Google Hacking, también conocido como Google Dorking, es una técnica avanzada que utiliza operadores de búsqueda especializados para descubrir información sensible y vulnerabilidades en sitios web mediante consultas específicas en motores de búsqueda.
            </p>
        </div>

        <div class="topic-content-body">
            <h3>Fundamentos de Google Hacking</h3>            <!-- Diagrama de Google Dorks Map -->
            <div class="google-dorks-diagram mb-4">
                <h4 class="text-center mb-3">Mapa de Google Dorks</h4>
                <svg class="w-100" style="max-height: 500px;" viewBox="0 0 100 100">
                    <use href="../../assets/images/diagrams.svg#google-dorks-map"></use>
                </svg>
                <p class="text-center text-muted mt-2">
                    <small>Categorización de Google Dorks por tipo de información y ejemplos prácticos</small>
                </p>
            </div>

            <div class="concept-card">
                <h4>
                    <svg class="concept-icon me-2" width="24" height="24" viewBox="0 0 100 100">
                        <use href="../../assets/images/icons.svg#icon-google-dorks"></use>
                    </svg>
                    Google Dorks Básicos
                </h4>
                <p>Los Google Dorks son consultas especializadas que utilizan operadores avanzados para filtrar y encontrar información específica que normalmente no es visible en búsquedas convencionales.</p>
                
                <div class="basic-dorks">
                    <h5>Operadores Fundamentales:</h5>
                    <div class="dorks-grid">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="dork-category">
                                    <h6><i class="fas fa-globe me-2 text-primary"></i>Sitio Específico</h6>
                                    <div class="dork-examples">
                                        <div class="dork-item">
                                            <code>site:example.com</code>
                                            <small>Busca solo en example.com</small>
                                        </div>
                                        <div class="dork-item">
                                            <code>site:example.com login</code>
                                            <small>Páginas de login en example.com</small>
                                        </div>
                                        <div class="dork-item">
                                            <code>site:example.com filetype:pdf</code>
                                            <small>PDFs en example.com</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="col-md-6">
                                <div class="dork-category">
                                    <h6><i class="fas fa-file me-2 text-success"></i>Tipo de Archivo</h6>
                                    <div class="dork-examples">
                                        <div class="dork-item">
                                            <code>filetype:pdf</code>
                                            <small>Solo archivos PDF</small>
                                        </div>
                                        <div class="dork-item">
                                            <code>filetype:doc confidential</code>
                                            <small>Documentos Word con "confidential"</small>
                                        </div>
                                        <div class="dork-item">
                                            <code>filetype:xls OR filetype:xlsx</code>
                                            <small>Archivos Excel</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="row mt-3">
                            <div class="col-md-6">
                                <div class="dork-category">
                                    <h6><i class="fas fa-link me-2 text-warning"></i>URL Específica</h6>
                                    <div class="dork-examples">
                                        <div class="dork-item">
                                            <code>inurl:admin</code>
                                            <small>URLs que contienen "admin"</small>
                                        </div>
                                        <div class="dork-item">
                                            <code>inurl:login.php</code>
                                            <small>Páginas de login PHP</small>
                                        </div>
                                        <div class="dork-item">
                                            <code>inurl:config</code>
                                            <small>Archivos de configuración</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="col-md-6">
                                <div class="dork-category">
                                    <h6><i class="fas fa-heading me-2 text-info"></i>Título de Página</h6>
                                    <div class="dork-examples">
                                        <div class="dork-item">
                                            <code>intitle:"Index of"</code>
                                            <small>Páginas de directorio</small>
                                        </div>
                                        <div class="dork-item">
                                            <code>intitle:"Admin Panel"</code>
                                            <small>Paneles de administración</small>
                                        </div>
                                        <div class="dork-item">
                                            <code>allintitle:login password</code>
                                            <small>Títulos con "login" Y "password"</small>
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
                        <use href="../../assets/images/icons.svg#icon-advanced-search"></use>
                    </svg>
                    Operadores Avanzados
                </h4>
                <p>Los operadores avanzados permiten crear consultas más específicas y complejas para descubrir información altamente sensible y vulnerabilidades específicas.</p>
                
                <div class="advanced-operators">
                    <h5>Operadores de Combinación:</h5>
                    <div class="operators-section">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="operator-group">
                                    <h6><i class="fas fa-plus me-2 text-success"></i>Operadores Lógicos</h6>
                                    <div class="operator-examples">
                                        <div class="operator-item">
                                            <strong>AND (implícito):</strong>
                                            <code>password admin</code>
                                            <small>Páginas con ambas palabras</small>
                                        </div>
                                        <div class="operator-item">
                                            <strong>OR:</strong>
                                            <code>admin OR administrator</code>
                                            <small>Páginas con cualquiera de las palabras</small>
                                        </div>
                                        <div class="operator-item">
                                            <strong>NOT (-):</strong>
                                            <code>admin -site:example.com</code>
                                            <small>Admin pero no en example.com</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="col-md-6">
                                <div class="operator-group">
                                    <h6><i class="fas fa-quote-left me-2 text-primary"></i>Operadores de Texto</h6>
                                    <div class="operator-examples">
                                        <div class="operator-item">
                                            <strong>Frase exacta:</strong>
                                            <code>"password reset"</code>
                                            <small>Frase exacta en el contenido</small>
                                        </div>
                                        <div class="operator-item">
                                            <strong>Comodín:</strong>
                                            <code>"admin * panel"</code>
                                            <small>Palabras con cualquier término en medio</small>
                                        </div>
                                        <div class="operator-item">
                                            <strong>Allintext:</strong>
                                            <code>allintext:username password</code>
                                            <small>Ambas palabras en el texto</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <h5 class="mt-4">Operadores de Ubicación:</h5>
                    <div class="location-operators">
                        <div class="row">
                            <div class="col-md-4">
                                <div class="location-group">
                                    <h6><i class="fas fa-anchor me-2 text-warning"></i>Anchor Text</h6>
                                    <div class="location-examples">
                                        <div class="location-item">
                                            <code>inanchor:"click here"</code>
                                            <small>Enlaces con texto específico</small>
                                        </div>
                                        <div class="location-item">
                                            <code>allinanchor:login admin</code>
                                            <small>Anchor text con ambas palabras</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="col-md-4">
                                <div class="location-group">
                                    <h6><i class="fas fa-code me-2 text-info"></i>En el Texto</h6>
                                    <div class="location-examples">
                                        <div class="location-item">
                                            <code>intext:"mysql_connect"</code>
                                            <small>Código específico en el texto</small>
                                        </div>
                                        <div class="location-item">
                                            <code>allintext:password username</code>
                                            <small>Ambas palabras en el texto</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="col-md-4">
                                <div class="location-group">
                                    <h6><i class="fas fa-map-marker-alt me-2 text-danger"></i>Relacionado</h6>
                                    <div class="location-examples">
                                        <div class="location-item">
                                            <code>related:example.com</code>
                                            <small>Sitios relacionados</small>
                                        </div>
                                        <div class="location-item">
                                            <code>cache:example.com</code>
                                            <small>Versión en caché</small>
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
                        <use href="../../assets/images/icons.svg#icon-sensitive-info"></use>
                    </svg>
                    Búsqueda de Información Sensible
                </h4>
                <p>Google Hacking puede revelar información altamente sensible que debería estar protegida, desde credenciales hasta documentos confidenciales y configuraciones de sistema.</p>
                
                <div class="sensitive-info-search">
                    <h5>Categorías de Información Sensible:</h5>
                    
                    <div class="accordion" id="sensitiveInfoAccordion">
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseCredentials">
                                    <i class="fas fa-key me-2 text-danger"></i>Credenciales y Autenticación
                                </button>
                            </h2>
                            <div id="collapseCredentials" class="accordion-collapse collapse show" data-bs-parent="#sensitiveInfoAccordion">
                                <div class="accordion-body">
                                    <div class="sensitive-examples">
                                        <div class="example-item">
                                            <strong>Páginas de login expuestas:</strong>
                                            <pre class="dork-block">intitle:"login" | intitle:"sign in" | intitle:"admin"</pre>
                                        </div>
                                        <div class="example-item">
                                            <strong>Archivos de configuración:</strong>
                                            <pre class="dork-block">filetype:env "DB_PASSWORD" | "API_KEY"</pre>
                                        </div>
                                        <div class="example-item">
                                            <strong>Archivos de backup:</strong>
                                            <pre class="dork-block">filetype:sql "password" | "username"</pre>
                                        </div>
                                        <div class="example-item">
                                            <strong>Scripts de configuración:</strong>
                                            <pre class="dork-block">filetype:php "mysql_connect" "password"</pre>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseDirectories">
                                    <i class="fas fa-folder-open me-2 text-warning"></i>Directorios Expuestos
                                </button>
                            </h2>
                            <div id="collapseDirectories" class="accordion-collapse collapse" data-bs-parent="#sensitiveInfoAccordion">
                                <div class="accordion-body">
                                    <div class="sensitive-examples">
                                        <div class="example-item">
                                            <strong>Listado de directorios:</strong>
                                            <pre class="dork-block">intitle:"Index of /" | "Index of" inurl:admin</pre>
                                        </div>
                                        <div class="example-item">
                                            <strong>Directorios de backup:</strong>
                                            <pre class="dork-block">intitle:"Index of" backup | old | archive</pre>
                                        </div>
                                        <div class="example-item">
                                            <strong>Directorios de desarrollo:</strong>
                                            <pre class="dork-block">intitle:"Index of" dev | test | staging</pre>
                                        </div>
                                        <div class="example-item">
                                            <strong>Archivos de configuración:</strong>
                                            <pre class="dork-block">intitle:"Index of" config | settings</pre>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseDocuments">
                                    <i class="fas fa-file-alt me-2 text-success"></i>Documentos Confidenciales
                                </button>
                            </h2>
                            <div id="collapseDocuments" class="accordion-collapse collapse" data-bs-parent="#sensitiveInfoAccordion">
                                <div class="accordion-body">
                                    <div class="sensitive-examples">
                                        <div class="example-item">
                                            <strong>Documentos corporativos:</strong>
                                            <pre class="dork-block">filetype:pdf "confidential" | "internal use only"</pre>
                                        </div>
                                        <div class="example-item">
                                            <strong>Hojas de cálculo con datos:</strong>
                                            <pre class="dork-block">filetype:xls | filetype:xlsx "password" | "user"</pre>
                                        </div>
                                        <div class="example-item">
                                            <strong>Presentaciones internas:</strong>
                                            <pre class="dork-block">filetype:ppt | filetype:pptx "internal" | "confidential"</pre>
                                        </div>
                                        <div class="example-item">
                                            <strong>Documentos de texto:</strong>
                                            <pre class="dork-block">filetype:doc | filetype:docx "not for distribution"</pre>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseVulnerabilities">
                                    <i class="fas fa-bug me-2 text-info"></i>Vulnerabilidades Técnicas
                                </button>
                            </h2>
                            <div id="collapseVulnerabilities" class="accordion-collapse collapse" data-bs-parent="#sensitiveInfoAccordion">
                                <div class="accordion-body">
                                    <div class="sensitive-examples">
                                        <div class="example-item">
                                            <strong>Errores de aplicación:</strong>
                                            <pre class="dork-block">intext:"mysql error" | "sql syntax" | "warning:"</pre>
                                        </div>
                                        <div class="example-item">
                                            <strong>Páginas de información del sistema:</strong>
                                            <pre class="dork-block">intitle:"phpinfo()" | "server information"</pre>
                                        </div>
                                        <div class="example-item">
                                            <strong>Archivos de log:</strong>
                                            <pre class="dork-block">filetype:log | filetype:logs "error" | "failed"</pre>
                                        </div>
                                        <div class="example-item">
                                            <strong>Paneles de administración:</strong>
                                            <pre class="dork-block">inurl:admin | inurl:administrator intext:"admin panel"</pre>
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
                        <use href="../../assets/images/icons.svg#icon-database"></use>
                    </svg>
                    Google Hacking Database (GHDB)
                </h4>
                <p>La Google Hacking Database es una colección mantenida por la comunidad de seguridad que contiene miles de dorks probados y categorizados para diferentes tipos de vulnerabilidades y información sensible.</p>
                
                <div class="ghdb-info">
                    <h5>Categorías de GHDB:</h5>
                    <div class="ghdb-categories">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="category-list">
                                    <h6><i class="fas fa-shield-alt me-2 text-primary"></i>Vulnerabilidades</h6>
                                    <ul class="ghdb-list">
                                        <li>SQL Injection</li>
                                        <li>Cross-Site Scripting (XSS)</li>
                                        <li>Remote File Inclusion</li>
                                        <li>Directory Traversal</li>
                                        <li>Command Injection</li>
                                    </ul>
                                </div>
                            </div>
                            
                            <div class="col-md-6">
                                <div class="category-list">
                                    <h6><i class="fas fa-file-alt me-2 text-success"></i>Archivos Sensibles</h6>
                                    <ul class="ghdb-list">
                                        <li>Archivos de configuración</li>
                                        <li>Bases de datos</li>
                                        <li>Archivos de log</li>
                                        <li>Documentos confidenciales</li>
                                        <li>Código fuente</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        
                        <div class="row mt-3">
                            <div class="col-md-6">
                                <div class="category-list">
                                    <h6><i class="fas fa-server me-2 text-warning"></i>Información de Servidores</h6>
                                    <ul class="ghdb-list">
                                        <li>Páginas de información del sistema</li>
                                        <li>Paneles de administración</li>
                                        <li>Directorios expuestos</li>
                                        <li>Servicios web</li>
                                        <li>Configuraciones de red</li>
                                    </ul>
                                </div>
                            </div>
                            
                            <div class="col-md-6">
                                <div class="category-list">
                                    <h6><i class="fas fa-users me-2 text-info"></i>Información Personal</h6>
                                    <ul class="ghdb-list">
                                        <li>Información de contacto</li>
                                        <li>Credenciales de usuario</li>
                                        <li>Datos corporativos</li>
                                        <li>Información financiera</li>
                                        <li>Datos de empleados</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="ghdb-popular-dorks mt-4">
                        <h5>Dorks Populares de GHDB:</h5>
                        <div class="popular-dorks">
                            <div class="dork-popular">
                                <strong>SQL Errors:</strong>
                                <pre class="dork-block">intext:"sql syntax near" | intext:"syntax error has occurred" | intext:"incorrect syntax near"</pre>
                                <small>Encuentra páginas con errores SQL expuestos</small>
                            </div>
                            <div class="dork-popular">
                                <strong>Login Portals:</strong>
                                <pre class="dork-block">intitle:"login" | intitle:"admin" | intitle:"administrator" login</pre>
                                <small>Identifica portales de login</small>
                            </div>
                            <div class="dork-popular">
                                <strong>Directory Listings:</strong>
                                <pre class="dork-block">intitle:"index of" "parent directory" | "name" | "last modified" | "size"</pre>
                                <small>Encuentra directorios con listado automático</small>
                            </div>
                            <div class="dork-popular">
                                <strong>Configuration Files:</strong>
                                <pre class="dork-block">filetype:env "DB_PASSWORD" | filetype:conf "password" | filetype:ini "pwd"</pre>
                                <small>Busca archivos de configuración con credenciales</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="concept-card">
                <h4>
                    <svg class="concept-icon me-2" width="24" height="24" viewBox="0 0 100 100">
                        <use href="../../assets/images/icons.svg#icon-stealth"></use>
                    </svg>
                    Técnicas de Evasión
                </h4>
                <p>Para evitar ser detectado durante las sesiones de Google Hacking, es importante utilizar técnicas que minimicen la huella digital y reduzcan la posibilidad de activar sistemas de detección.</p>
                
                <div class="evasion-techniques">
                    <h5>Estrategias de Evasión:</h5>
                    <div class="evasion-methods">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="evasion-category">
                                    <h6><i class="fas fa-clock me-2 text-primary"></i>Control de Tiempo</h6>
                                    <ul class="evasion-list">
                                        <li><strong>Intervalos aleatorios:</strong> Varía el tiempo entre búsquedas</li>
                                        <li><strong>Sesiones cortas:</strong> Limita las consultas por sesión</li>
                                        <li><strong>Distribución temporal:</strong> Realiza búsquedas en diferentes momentos</li>
                                        <li><strong>Pausas naturales:</strong> Simula comportamiento humano normal</li>
                                    </ul>
                                </div>
                            </div>
                            
                            <div class="col-md-6">
                                <div class="evasion-category">
                                    <h6><i class="fas fa-mask me-2 text-success"></i>Anonimización</h6>
                                    <ul class="evasion-list">
                                        <li><strong>VPN/Proxy:</strong> Oculta tu dirección IP real</li>
                                        <li><strong>Tor Browser:</strong> Máximo anonimato para búsquedas</li>
                                        <li><strong>User-Agent rotation:</strong> Cambia el navegador aparente</li>
                                        <li><strong>Cookies clearing:</strong> Elimina rastros de sesión</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        
                        <div class="row mt-3">
                            <div class="col-md-6">
                                <div class="evasion-category">
                                    <h6><i class="fas fa-search me-2 text-warning"></i>Diversificación de Consultas</h6>
                                    <ul class="evasion-list">
                                        <li><strong>Múltiples motores:</strong> Usa Google, Bing, DuckDuckGo</li>
                                        <li><strong>Sintaxis variada:</strong> Alterna operadores y formatos</li>
                                        <li><strong>Búsquedas mixtas:</strong> Combina dorks con búsquedas normales</li>
                                        <li><strong>Términos sinónimos:</strong> Usa palabras equivalentes</li>
                                    </ul>
                                </div>
                            </div>
                            
                            <div class="col-md-6">
                                <div class="evasion-category">
                                    <h6><i class="fas fa-shield-alt me-2 text-info"></i>Automatización Cuidadosa</h6>
                                    <ul class="evasion-list">
                                        <li><strong>Rate limiting:</strong> Controla la velocidad de consultas</li>
                                        <li><strong>Human simulation:</strong> Simula patrones humanos</li>
                                        <li><strong>Error handling:</strong> Maneja captchas y bloqueos</li>
                                        <li><strong>Distributed approach:</strong> Usa múltiples fuentes IP</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="evasion-tools mt-4">
                        <h5>Herramientas para Evasión:</h5>
                        <div class="tools-grid">
                            <div class="row">
                                <div class="col-md-4">
                                    <div class="tool-card">
                                        <h6><i class="fas fa-tools me-2"></i>SearchDiggity</h6>
                                        <p>Automatiza búsquedas con control de timing y rotación de consultas.</p>
                                        <small>Disponible en Windows con GUI</small>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="tool-card">
                                        <h6><i class="fas fa-code me-2"></i>Pagodo</h6>
                                        <p>Framework Python para Google Hacking automatizado con evasión.</p>
                                        <small>Soporte para proxies y delays</small>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="tool-card">
                                        <h6><i class="fas fa-robot me-2"></i>GooFuzz</h6>
                                        <p>Herramienta CLI para fuzzing con Google Dorks de manera controlada.</p>
                                        <small>Control granular de consultas</small>
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
                        <use href="../../assets/images/icons.svg#icon-automation"></use>
                    </svg>
                    Herramientas de Automatización
                </h4>
                <p>Para hacer más eficiente el proceso de Google Hacking, existen herramientas especializadas que automatizan la búsqueda, filtrado y análisis de resultados.</p>
                
                <div class="automation-tools">
                    <div class="tool-detailed">
                        <h5><i class="fas fa-cog me-2 text-primary"></i>SearchDiggity 3.1</h5>
                        <p>Herramienta GUI para Windows que automatiza búsquedas usando la Google Hacking Database.</p>
                        <div class="tool-features">
                            <div class="row">
                                <div class="col-md-6">
                                    <h6>Características:</h6>
                                    <ul>
                                        <li>Interfaz gráfica intuitiva</li>
                                        <li>Base de datos GHDB integrada</li>
                                        <li>Filtros por categoría</li>
                                        <li>Exportación de resultados</li>
                                        <li>Control de timing</li>
                                    </ul>
                                </div>
                                <div class="col-md-6">
                                    <h6>Uso Básico:</h6>
                                    <ol>
                                        <li>Seleccionar categoría de dorks</li>
                                        <li>Especificar dominio objetivo</li>
                                        <li>Configurar delays</li>
                                        <li>Ejecutar búsquedas</li>
                                        <li>Analizar resultados</li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="tool-detailed mt-4">
                        <h5><i class="fas fa-terminal me-2 text-success"></i>Google Hack 1.6</h5>
                        <p>Herramienta de línea de comandos para Google Hacking automatizado con soporte para proxies.</p>
                        <div class="tool-usage">
                            <div class="command-examples">
                                <div class="example-item">
                                    <strong>Búsqueda básica:</strong>
                                    <pre class="command-block">google-hack.py -t example.com -d ghdb.xml</pre>
                                </div>
                                <div class="example-item">
                                    <strong>Con proxy:</strong>
                                    <pre class="command-block">google-hack.py -t example.com -p proxy.txt --delay 5</pre>
                                </div>
                                <div class="example-item">
                                    <strong>Categoría específica:</strong>
                                    <pre class="command-block">google-hack.py -t example.com -c "sensitive directories"</pre>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="tool-detailed mt-4">
                        <h5><i class="fas fa-search me-2 text-warning"></i>Pagodo</h5>
                        <p>Framework Python moderno para Google Hacking con capacidades avanzadas de evasión.</p>
                        <div class="pagodo-features">
                            <div class="installation-setup">
                                <h6>Instalación y Configuración:</h6>
                                <pre class="command-block">git clone https://github.com/opsdisk/pagodo.git
cd pagodo
pip install -r requirements.txt
python pagodo.py --help</pre>
                            </div>
                            
                            <div class="pagodo-usage mt-3">
                                <h6>Ejemplos de Uso:</h6>
                                <div class="usage-examples">
                                    <div class="example-item">
                                        <strong>Dorks específicos:</strong>
                                        <pre class="command-block">python pagodo.py -d example.com -g dorks.txt -l 50</pre>
                                    </div>
                                    <div class="example-item">
                                        <strong>Con delay y proxy:</strong>
                                        <pre class="command-block">python pagodo.py -d example.com -g dorks.txt --delay 10 --proxy proxy_list.txt</pre>
                                    </div>
                                    <div class="example-item">
                                        <strong>Output estructurado:</strong>
                                        <pre class="command-block">python pagodo.py -d example.com -g dorks.txt -s results.json</pre>
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
                    <p><strong>¿Cuál es la diferencia entre "intitle:" y "allintitle:" en Google Hacking?</strong></p>
                    <div class="quiz-options">
                        <label class="quiz-option">
                            <input type="radio" name="q10" value="a">
                            <span>intitle busca en el título, allintitle busca en todo el contenido</span>
                        </label>
                        <label class="quiz-option">
                            <input type="radio" name="q10" value="b">
                            <span>intitle busca una palabra en el título, allintitle busca todas las palabras en el título</span>
                        </label>
                        <label class="quiz-option">
                            <input type="radio" name="q10" value="c">
                            <span>No hay diferencia, son sinónimos</span>
                        </label>
                    </div>
                </div>
                
                <div class="quiz-question mt-3">
                    <p><strong>¿Qué Google Dork sería más efectivo para encontrar archivos de configuración con credenciales?</strong></p>
                    <div class="quiz-options">
                        <label class="quiz-option">
                            <input type="radio" name="q11" value="a">
                            <span>site:example.com "password"</span>
                        </label>
                        <label class="quiz-option">
                            <input type="radio" name="q11" value="b">
                            <span>filetype:env "DB_PASSWORD" OR filetype:conf "password"</span>
                        </label>
                        <label class="quiz-option">
                            <input type="radio" name="q11" value="c">
                            <span>inurl:config password</span>
                        </label>
                    </div>
                </div>
            </div>            <div class="practical-exercise mt-4">
                <h4 class="text-center">
                     <svg class="case-icon me-2" width="24" height="24" viewBox="0 0 100 100">
                        <use href="../../assets/images/icons.svg#icon-case-study"></use>
                    </svg>
                    Ejercicio Práctico: Google Hacking Avanzado
                </h4>
                <div class="exercise-content">
                    <div class="exercise-scenario">
                        <h6>🎯 Objetivo:</h6>
                        <p>Realizar una sesión de Google Hacking ético para identificar posibles vulnerabilidades y información sensible en un dominio de prueba autorizado.</p>
                    </div>
                    
                    <div class="exercise-steps mt-3">
                        <h6>📋 Pasos del Ejercicio:</h6>
                        <div class="steps-list">
                            <div class="step-item">
                                <span class="step-number">1</span>
                                <div class="step-content">
                                    <strong>Reconocimiento Inicial:</strong>
                                    <p>Usar operadores básicos para mapear la presencia web del objetivo</p>
                                    <code>site:testphp.vulnweb.com</code>
                                </div>
                            </div>
                            <div class="step-item">
                                <span class="step-number">2</span>
                                <div class="step-content">
                                    <strong>Búsqueda de Directorios:</strong>
                                    <p>Identificar directorios expuestos y páginas sensibles</p>
                                    <code>site:testphp.vulnweb.com intitle:"index of"</code>
                                </div>
                            </div>
                            <div class="step-item">
                                <span class="step-number">3</span>
                                <div class="step-content">
                                    <strong>Archivos de Configuración:</strong>
                                    <p>Buscar archivos que puedan contener información sensible</p>
                                    <code>site:testphp.vulnweb.com filetype:txt OR filetype:log</code>
                                </div>
                            </div>
                            <div class="step-item">
                                <span class="step-number">4</span>
                                <div class="step-content">
                                    <strong>Páginas de Login:</strong>
                                    <p>Identificar portales de autenticación</p>
                                    <code>site:testphp.vulnweb.com inurl:login OR inurl:admin</code>
                                </div>
                            </div>
                            <div class="step-item">
                                <span class="step-number">5</span>
                                <div class="step-content">
                                    <strong>Errores de Aplicación:</strong>
                                    <p>Buscar páginas con errores que revelen información técnica</p>
                                    <code>site:testphp.vulnweb.com "mysql error" OR "warning:"</code>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="exercise-deliverables mt-3">
                        <h6>📊 Documentar:</h6>
                        <div class="deliverables-checklist">
                            <div class="deliverable-item">
                                <input type="checkbox" id="deliverable1" class="deliverable-checkbox">
                                <label for="deliverable1">Lista de todas las páginas/directorios encontrados</label>
                            </div>
                            <div class="deliverable-item">
                                <input type="checkbox" id="deliverable2" class="deliverable-checkbox">
                                <label for="deliverable2">Capturas de pantalla de hallazgos importantes</label>
                            </div>
                            <div class="deliverable-item">
                                <input type="checkbox" id="deliverable3" class="deliverable-checkbox">
                                <label for="deliverable3">Categorización de información encontrada</label>
                            </div>
                            <div class="deliverable-item">
                                <input type="checkbox" id="deliverable4" class="deliverable-checkbox">
                                <label for="deliverable4">Recomendaciones de seguridad</label>
                            </div>
                        </div>
                    </div>
                    
                    <div class="exercise-warning mt-3">
                        <div class="alert alert-warning">
                            <i class="fas fa-exclamation-triangle me-2"></i>
                            <strong>Importante:</strong> Solo realiza Google Hacking en dominios autorizados o de prueba. El ejemplo usado (testphp.vulnweb.com) es un sitio web de pruebas especialmente diseñado para testing de seguridad.
                        </div>
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

function createTecnicasFootprintContent(topic) {
    return `
        <div class="topic-header">
            <h2 class="text-center">
                <svg class="topic-icon me-2" width="32" height="32" viewBox="0 0 100 100">
                    <use href="../../assets/images/icons.svg#icon-techniques"></use>
                </svg>
                ${topic.title}
            </h2>
            <p class="topic-intro">
                Las técnicas de footprinting abarcan desde métodos pasivos que no generan tráfico hacia el objetivo, hasta técnicas activas de interacción directa. Dominar la aplicación correcta de cada técnica es fundamental para realizar reconocimientos efectivos y seguros.
            </p>
        </div>

        <div class="topic-content-body">
            <h3>Clasificación de Técnicas de Footprinting</h3>            <!-- Diagrama de Matriz de Técnicas -->
            <div class="techniques-matrix-diagram mb-4">
                <h4 class="text-center mb-3">Matriz de Técnicas de Footprinting</h4>
                <svg class="w-100" style="max-height: 600px;" viewBox="0 0 100 100">
                    <use href="../../assets/images/diagrams.svg#techniques-matrix"></use>
                </svg>
                <p class="text-center text-muted mt-2">
                    <small>Posicionamiento de técnicas por nivel de detección y complejidad técnica</small>
                </p>
            </div>

            <div class="concept-card">
                <h4>
                    <svg class="concept-icon me-2" width="24" height="24" viewBox="0 0 100 100">
                        <use href="../../assets/images/icons.svg#icon-passive"></use>
                    </svg>
                    Técnicas Pasivas
                </h4>
                <p>Las técnicas pasivas permiten recopilar información sin interactuar directamente con los sistemas del objetivo, manteniéndose completamente indetectables y operando dentro de los límites legales.</p>
                
                <div class="passive-techniques">
                    <h5>Principales Técnicas Pasivas:</h5>
                    <div class="techniques-grid">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="technique-category">
                                    <h6><i class="fas fa-search me-2 text-primary"></i>Búsquedas en Motores</h6>
                                    <div class="technique-details">
                                        <p><strong>Objetivo:</strong> Encontrar información pública indexada sobre el objetivo.</p>
                                        <div class="technique-examples">
                                            <div class="example-item">
                                                <strong>Google Dorking:</strong>
                                                <pre class="command-block">site:target.com filetype:pdf</pre>
                                                <small>Buscar documentos PDF del sitio</small>
                                            </div>
                                            <div class="example-item">
                                                <strong>Bing Search:</strong>
                                                <pre class="command-block">ip:192.168.1.1</pre>
                                                <small>Buscar contenido en IP específica</small>
                                            </div>
                                            <div class="example-item">
                                                <strong>Shodan Queries:</strong>
                                                <pre class="command-block">hostname:target.com</pre>
                                                <small>Buscar servicios expuestos</small>
                                            </div>
                                        </div>
                                        
                                        <div class="advantages-box mt-3">
                                            <h6>✅ Ventajas:</h6>
                                            <ul class="small">
                                                <li>Completamente indetectable</li>
                                                <li>Sin riesgo legal</li>
                                                <li>Gran cantidad de información disponible</li>
                                                <li>No requiere herramientas especializadas</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="col-md-6">
                                <div class="technique-category">
                                    <h6><i class="fas fa-database me-2 text-success"></i>Consultas a Bases de Datos Públicas</h6>
                                    <div class="technique-details">
                                        <p><strong>Objetivo:</strong> Extraer información de registros públicos y bases de datos abiertas.</p>
                                        <div class="technique-examples">
                                            <div class="example-item">
                                                <strong>WHOIS Databases:</strong>
                                                <pre class="command-block">whois target.com</pre>
                                                <small>Información de registro de dominio</small>
                                            </div>
                                            <div class="example-item">
                                                <strong>Certificate Transparency:</strong>
                                                <pre class="command-block">crt.sh - SSL certificate logs</pre>
                                                <small>Subdominios desde certificados SSL</small>
                                            </div>
                                            <div class="example-item">
                                                <strong>DNS Lookup Services:</strong>
                                                <pre class="command-block">DNSdumpster.com</pre>
                                                <small>Mapeo DNS sin consultas directas</small>
                                            </div>
                                        </div>
                                        
                                        <div class="databases-list mt-3">
                                            <h6>📚 Bases de Datos Útiles:</h6>
                                            <div class="row">
                                                <div class="col-6">
                                                    <ul class="small">
                                                        <li>ARIN (Américas)</li>
                                                        <li>RIPE (Europa)</li>
                                                        <li>APNIC (Asia-Pacífico)</li>
                                                    </ul>
                                                </div>
                                                <div class="col-6">
                                                    <ul class="small">
                                                        <li>BGP routing tables</li>
                                                        <li>Archive.org</li>
                                                        <li>SecurityTrails</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="row mt-4">
                            <div class="col-md-6">
                                <div class="technique-category">
                                    <h6><i class="fas fa-users me-2 text-warning"></i>Análisis de Redes Sociales</h6>
                                    <div class="technique-details">
                                        <p><strong>Objetivo:</strong> Recopilar información sobre empleados, cultura organizacional y posibles vectores de ingeniería social.</p>
                                        <div class="social-networks">
                                            <div class="network-item">
                                                <strong><i class="fab fa-linkedin me-2"></i>LinkedIn:</strong>
                                                <ul class="small">
                                                    <li>Estructura organizacional</li>
                                                    <li>Empleados y sus roles</li>
                                                    <li>Tecnologías utilizadas</li>
                                                    <li>Contactos corporativos</li>
                                                </ul>
                                            </div>
                                            <div class="network-item">
                                                <strong><i class="fab fa-twitter me-2"></i>Twitter/X:</strong>
                                                <ul class="small">
                                                    <li>Comunicaciones oficiales</li>
                                                    <li>Eventos y conferencias</li>
                                                    <li>Quejas de clientes</li>
                                                    <li>Información informal</li>
                                                </ul>
                                            </div>
                                        </div>
                                        
                                        <div class="osint-tools mt-3">
                                            <h6>🔍 Herramientas Especializadas:</h6>
                                            <ul class="small">
                                                <li><strong>Maltego:</strong> Análisis visual de relaciones</li>
                                                <li><strong>theHarvester:</strong> Recolección automatizada</li>
                                                <li><strong>Recon-ng:</strong> Framework modular</li>
                                                <li><strong>SpiderFoot:</strong> Automatización completa</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="col-md-6">
                                <div class="technique-category">
                                    <h6><i class="fas fa-file-alt me-2 text-info"></i>Análisis de Metadatos</h6>
                                    <div class="technique-details">
                                        <p><strong>Objetivo:</strong> Extraer información oculta de documentos y archivos públicamente disponibles.</p>
                                        <div class="metadata-types">
                                            <div class="metadata-item">
                                                <strong>Documentos Office:</strong>
                                                <ul class="small">
                                                    <li>Autor y última modificación</li>
                                                    <li>Ruta de archivos internos</li>
                                                    <li>Versiones de software</li>
                                                    <li>Comentarios ocultos</li>
                                                </ul>
                                            </div>
                                            <div class="metadata-item">
                                                <strong>Imágenes:</strong>
                                                <ul class="small">
                                                    <li>Información EXIF</li>
                                                    <li>Geolocalización GPS</li>
                                                    <li>Cámara y configuración</li>
                                                    <li>Timestamp de creación</li>
                                                </ul>
                                            </div>
                                        </div>
                                        
                                        <div class="metadata-tools mt-3">
                                            <h6>🛠️ Herramientas de Análisis:</h6>
                                            <div class="tool-examples">
                                                <div class="example-item">
                                                    <strong>ExifTool:</strong>
                                                    <pre class="mini-command">exiftool document.pdf</pre>
                                                </div>
                                                <div class="example-item">
                                                    <strong>FOCA:</strong>
                                                    <pre class="mini-command">GUI-based metadata analysis</pre>
                                                </div>
                                                <div class="example-item">
                                                    <strong>Metagoofil:</strong>
                                                    <pre class="mini-command">metagoofil -d target.com -t pdf</pre>
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
                        <use href="../../assets/images/icons.svg#icon-active"></use>
                    </svg>
                    Técnicas Activas
                </h4>
                <p>Las técnicas activas implican interacción directa con los sistemas del objetivo, proporcionando información más detallada pero con mayor riesgo de detección y consideraciones legales.</p>
                
                <div class="active-techniques">
                    <h5>Principales Técnicas Activas:</h5>
                    <div class="techniques-accordion" id="activeTechniquesAccordion">
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseDirectDNS">
                                    <i class="fas fa-server me-2 text-primary"></i>
                                    Consultas DNS Directas
                                </button>
                            </h2>
                            <div id="collapseDirectDNS" class="accordion-collapse collapse show" data-bs-parent="#activeTechniquesAccordion">
                                <div class="accordion-body">
                                    <p><strong>Descripción:</strong> Consultas directas a servidores DNS del objetivo para obtener información detallada sobre la infraestructura.</p>
                                    
                                    <div class="dns-techniques">
                                        <div class="row">
                                            <div class="col-md-6">
                                                <h6>Tipos de Consultas DNS:</h6>
                                                <div class="dns-queries">
                                                    <div class="query-item">
                                                        <strong>A Records:</strong>
                                                        <pre class="command-block">nslookup target.com</pre>
                                                        <small>Direcciones IPv4</small>
                                                    </div>
                                                    <div class="query-item">
                                                        <strong>MX Records:</strong>
                                                        <pre class="command-block">nslookup -type=mx target.com</pre>
                                                        <small>Servidores de correo</small>
                                                    </div>
                                                    <div class="query-item">
                                                        <strong>NS Records:</strong>
                                                        <pre class="command-block">nslookup -type=ns target.com</pre>
                                                        <small>Servidores de nombres</small>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            <div class="col-md-6">
                                                <h6>Técnicas Avanzadas:</h6>
                                                <div class="advanced-dns">
                                                    <div class="technique-item">
                                                        <strong>Zone Transfer:</strong>
                                                        <pre class="command-block">dig @ns1.target.com target.com AXFR</pre>
                                                        <small>⚠️ Obtener toda la zona DNS</small>
                                                    </div>
                                                    <div class="technique-item">
                                                        <strong>Reverse DNS:</strong>
                                                        <pre class="command-block">nslookup 192.168.1.1</pre>
                                                        <small>Resolución inversa de IP</small>
                                                    </div>
                                                    <div class="technique-item">
                                                        <strong>DNS Brute Force:</strong>
                                                        <pre class="command-block">fierce -dns target.com</pre>
                                                        <small>Descubrimiento de subdominios</small>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div class="alert alert-warning mt-3">
                                        <i class="fas fa-exclamation-triangle me-2"></i>
                                        <strong>Consideración:</strong> Las consultas DNS directas pueden ser registradas por el objetivo.
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsePortScanning">
                                    <i class="fas fa-door-open me-2 text-success"></i>
                                    Escaneo de Puertos
                                </button>
                            </h2>
                            <div id="collapsePortScanning" class="accordion-collapse collapse" data-bs-parent="#activeTechniquesAccordion">
                                <div class="accordion-body">
                                    <p><strong>Descripción:</strong> Identificación de servicios activos y puertos abiertos en los sistemas del objetivo.</p>
                                    
                                    <div class="port-scanning-types">
                                        <h6>Tipos de Escaneo de Puertos:</h6>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div class="scan-type">
                                                    <h6>TCP Scans:</h6>
                                                    <ul class="scan-methods">
                                                        <li>
                                                            <strong>SYN Scan:</strong>
                                                            <pre class="mini-command">nmap -sS target.com</pre>
                                                            <small>Stealth, no completa conexión</small>
                                                        </li>
                                                        <li>
                                                            <strong>Connect Scan:</strong>
                                                            <pre class="mini-command">nmap -sT target.com</pre>
                                                            <small>Conexión completa TCP</small>
                                                        </li>
                                                        <li>
                                                            <strong>FIN Scan:</strong>
                                                            <pre class="mini-command">nmap -sF target.com</pre>
                                                            <small>Envía paquetes FIN</small>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            
                                            <div class="col-md-6">
                                                <div class="scan-type">
                                                    <h6>Specialized Scans:</h6>
                                                    <ul class="scan-methods">
                                                        <li>
                                                            <strong>UDP Scan:</strong>
                                                            <pre class="mini-command">nmap -sU target.com</pre>
                                                            <small>Servicios UDP</small>
                                                        </li>
                                                        <li>
                                                            <strong>ACK Scan:</strong>
                                                            <pre class="mini-command">nmap -sA target.com</pre>
                                                            <small>Detección de firewall</small>
                                                        </li>
                                                        <li>
                                                            <strong>Xmas Scan:</strong>
                                                            <pre class="mini-command">nmap -sX target.com</pre>
                                                            <small>FIN, PSH y URG activos</small>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div class="stealth-considerations mt-4">
                                        <h6>Consideraciones de Sigilo:</h6>
                                        <div class="stealth-grid">
                                            <div class="row">
                                                <div class="col-md-4">
                                                    <div class="stealth-factor">
                                                        <span class="stealth-level high">🟢 Alto</span>
                                                        <small>SYN, FIN, Xmas</small>
                                                    </div>
                                                </div>
                                                <div class="col-md-4">
                                                    <div class="stealth-factor">
                                                        <span class="stealth-level medium">🟡 Medio</span>
                                                        <small>UDP, ACK</small>
                                                    </div>
                                                </div>
                                                <div class="col-md-4">
                                                    <div class="stealth-factor">
                                                        <span class="stealth-level low">🔴 Bajo</span>
                                                        <small>Connect, Ping</small>
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
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseBannerGrabbing">
                                    <i class="fas fa-flag me-2 text-warning"></i>
                                    Banner Grabbing y Service Detection
                                </button>
                            </h2>
                            <div id="collapseBannerGrabbing" class="accordion-collapse collapse" data-bs-parent="#activeTechniquesAccordion">
                                <div class="accordion-body">
                                    <p><strong>Descripción:</strong> Identificación de servicios específicos, versiones y configuraciones a través de la captura de banners y análisis de respuestas.</p>
                                    
                                    <div class="banner-techniques">
                                        <h6>Métodos de Banner Grabbing:</h6>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div class="banner-method">
                                                    <h6>Manual Banner Grabbing:</h6>
                                                    <div class="manual-examples">
                                                        <div class="example-item">
                                                            <strong>Telnet HTTP:</strong>
                                                            <pre class="command-block">telnet target.com 80
GET / HTTP/1.1
Host: target.com</pre>
                                                            <small>Banner de servidor web</small>
                                                        </div>
                                                        <div class="example-item">
                                                            <strong>Netcat:</strong>
                                                            <pre class="command-block">nc target.com 25</pre>
                                                            <small>Banner de servidor SMTP</small>
                                                        </div>
                                                        <div class="example-item">
                                                            <strong>SSH Banner:</strong>
                                                            <pre class="command-block">ssh target.com</pre>
                                                            <small>Versión del servidor SSH</small>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            <div class="col-md-6">
                                                <div class="banner-method">
                                                    <h6>Automated Detection:</h6>
                                                    <div class="auto-examples">
                                                        <div class="example-item">
                                                            <strong>Nmap Service Detection:</strong>
                                                            <pre class="command-block">nmap -sV target.com</pre>
                                                            <small>Detección automática de servicios</small>
                                                        </div>
                                                        <div class="example-item">
                                                            <strong>Amap:</strong>
                                                            <pre class="command-block">amap target.com 80</pre>
                                                            <small>Application mapping</small>
                                                        </div>
                                                        <div class="example-item">
                                                            <strong>Ncat:</strong>
                                                            <pre class="command-block">ncat target.com 21</pre>
                                                            <small>Improved netcat</small>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div class="service-fingerprinting mt-4">
                                        <h6>Service Fingerprinting Avanzado:</h6>
                                        <div class="fingerprint-techniques">
                                            <ul>
                                                <li><strong>HTTP Headers Analysis:</strong> Server, X-Powered-By, Set-Cookie</li>
                                                <li><strong>TLS/SSL Fingerprinting:</strong> Cipher suites, certificate details</li>
                                                <li><strong>Protocol Behavior Analysis:</strong> Response timing, error messages</li>
                                                <li><strong>Application-specific Probes:</strong> CMS detection, framework identification</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNetworkMapping">
                                    <i class="fas fa-map me-2 text-info"></i>
                                    Network Mapping y Traceroute
                                </button>
                            </h2>
                            <div id="collapseNetworkMapping" class="accordion-collapse collapse" data-bs-parent="#activeTechniquesAccordion">
                                <div class="accordion-body">
                                    <p><strong>Descripción:</strong> Mapeo de la topología de red y identificación de dispositivos intermedios en la ruta hacia el objetivo.</p>
                                    
                                    <div class="network-mapping-tools">
                                        <h6>Herramientas de Mapeo de Red:</h6>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div class="mapping-category">
                                                    <h6>Traceroute Variants:</h6>
                                                    <div class="traceroute-tools">
                                                        <div class="tool-item">
                                                            <strong>Traceroute (Linux):</strong>
                                                            <pre class="command-block">traceroute target.com</pre>
                                                            <small>UDP-based tracing</small>
                                                        </div>
                                                        <div class="tool-item">
                                                            <strong>Tracert (Windows):</strong>
                                                            <pre class="command-block">tracert target.com</pre>
                                                            <small>ICMP-based tracing</small>
                                                        </div>
                                                        <div class="tool-item">
                                                            <strong>TCPTraceroute:</strong>
                                                            <pre class="command-block">tcptraceroute target.com 80</pre>
                                                            <small>TCP-based tracing</small>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            <div class="col-md-6">
                                                <div class="mapping-category">
                                                    <h6>Advanced Mapping:</h6>
                                                    <div class="advanced-tools">
                                                        <div class="tool-item">
                                                            <strong>Nmap Topology:</strong>
                                                            <pre class="command-block">nmap --traceroute target.com</pre>
                                                            <small>Integrated tracing</small>
                                                        </div>
                                                        <div class="tool-item">
                                                            <strong>MTR:</strong>
                                                            <pre class="command-block">mtr target.com</pre>
                                                            <small>Continuous traceroute</small>
                                                        </div>
                                                        <div class="tool-item">
                                                            <strong>Paris Traceroute:</strong>
                                                            <pre class="command-block">paris-traceroute target.com</pre>
                                                            <small>Load balancer aware</small>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div class="network-information mt-4">
                                        <h6>Información Obtenible:</h6>
                                        <div class="info-categories">
                                            <div class="row">
                                                <div class="col-md-3">
                                                    <ul class="info-list">
                                                        <li>Rutas de red</li>
                                                        <li>ISPs involucrados</li>
                                                    </ul>
                                                </div>
                                                <div class="col-md-3">
                                                    <ul class="info-list">
                                                        <li>Firewalls detectados</li>
                                                        <li>Load balancers</li>
                                                    </ul>
                                                </div>
                                                <div class="col-md-3">
                                                    <ul class="info-list">
                                                        <li>Geographic locations</li>
                                                        <li>Network latency</li>
                                                    </ul>
                                                </div>
                                                <div class="col-md-3">
                                                    <ul class="info-list">
                                                        <li>Network architecture</li>
                                                        <li>Redundancy paths</li>
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
            </div>

            <div class="concept-card">
                <h4>
                    <svg class="concept-icon me-2" width="24" height="24" viewBox="0 0 100 100">
                        <use href="../../assets/images/icons.svg#icon-social-engineering"></use>
                    </svg>
                    Ingeniería Social en Footprinting
                </h4>
                <p>La ingeniería social aplicada al footprinting utiliza técnicas de manipulación psicológica para obtener información de fuentes humanas, complementando los métodos técnicos tradicionales.</p>
                
                <div class="social-engineering-techniques">
                    <h5>Técnicas de Ingeniería Social para Reconocimiento:</h5>
                    <div class="se-categories">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="se-category">
                                    <h6><i class="fas fa-phone me-2 text-primary"></i>Técnicas Telefónicas (Vishing)</h6>
                                    <div class="se-details">
                                        <p>Uso del teléfono para obtener información haciéndose pasar por personal autorizado.</p>
                                        <div class="vishing-scenarios">
                                            <div class="scenario-item">
                                                <strong>IT Support Impersonation:</strong>
                                                <ul class="small">
                                                    <li>Solicitar información de sistemas</li>
                                                    <li>Verificar configuraciones de red</li>
                                                    <li>Obtener detalles de infraestructura</li>
                                                </ul>
                                            </div>
                                            <div class="scenario-item">
                                                <strong>Vendor/Partner Calls:</strong>
                                                <ul class="small">
                                                    <li>Verificar información de contacto</li>
                                                    <li>Confirmar relaciones comerciales</li>
                                                    <li>Obtener organigramas</li>
                                                </ul>
                                            </div>
                                        </div>
                                        
                                        <div class="alert alert-danger mt-3">
                                            <i class="fas fa-exclamation-triangle me-2"></i>
                                            <strong>Importante:</strong> Solo debe realizarse en evaluaciones autorizadas con consentimiento explícito.
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="col-md-6">
                                <div class="se-category">
                                    <h6><i class="fas fa-envelope me-2 text-success"></i>Técnicas de Email (Phishing de Reconocimiento)</h6>
                                    <div class="se-details">
                                        <p>Emails diseñados para obtener información sin comprometer sistemas directamente.</p>
                                        <div class="email-techniques">
                                            <div class="technique-item">
                                                <strong>Information Gathering Emails:</strong>
                                                <ul class="small">
                                                    <li>Encuestas falsas de la industria</li>
                                                    <li>Solicitudes de información técnica</li>
                                                    <li>Verificación de datos corporativos</li>
                                                </ul>
                                            </div>
                                            <div class="technique-item">
                                                <strong>Pretexting via Email:</strong>
                                                <ul class="small">
                                                    <li>Haciéndose pasar por periodistas</li>
                                                    <li>Estudiantes realizando investigación</li>
                                                    <li>Potenciales socios comerciales</li>
                                                </ul>
                                            </div>
                                        </div>
                                        
                                        <div class="email-indicators mt-3">
                                            <h6>🎯 Información Target:</h6>
                                            <ul class="small">
                                                <li>Estructura organizacional</li>
                                                <li>Tecnologías y proveedores</li>
                                                <li>Procesos de seguridad</li>
                                                <li>Horarios y políticas</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="row mt-4">
                            <div class="col-md-6">
                                <div class="se-category">
                                    <h6><i class="fas fa-user-friends me-2 text-warning"></i>Técnicas Presenciales (Human Intelligence)</h6>
                                    <div class="se-details">
                                        <p>Interacciones cara a cara para obtener información en entornos controlados.</p>
                                        <div class="humint-methods">
                                            <div class="method-item">
                                                <strong>Conference Networking:</strong>
                                                <ul class="small">
                                                    <li>Eventos de la industria</li>
                                                    <li>Conferencias técnicas</li>
                                                    <li>Meetups profesionales</li>
                                                    <li>Ferias comerciales</li>
                                                </ul>
                                            </div>
                                            <div class="method-item">
                                                <strong>Casual Encounters:</strong>
                                                <ul class="small">
                                                    <li>Espacios de coworking</li>
                                                    <li>Cafeterías cercanas a oficinas</li>
                                                    <li>Transporte público</li>
                                                    <li>Eventos sociales</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="col-md-6">
                                <div class="se-category">
                                    <h6><i class="fas fa-trash me-2 text-info"></i>Dumpster Diving y OSINT Físico</h6>
                                    <div class="se-details">
                                        <p>Búsqueda de información en desechos físicos y observación del entorno objetivo.</p>
                                        <div class="physical-osint">
                                            <div class="osint-source">
                                                <strong>Documentos Descartados:</strong>
                                                <ul class="small">
                                                    <li>Organigramas impresos</li>
                                                    <li>Directorios internos</li>
                                                    <li>Notas de reuniones</li>
                                                    <li>Configuraciones impresas</li>
                                                </ul>
                                            </div>
                                            <div class="osint-source">
                                                <strong>Observación del Entorno:</strong>
                                                <ul class="small">
                                                    <li>Badges y sistemas de acceso</li>
                                                    <li>Equipos y tecnologías visibles</li>
                                                    <li>Horarios de personal</li>
                                                    <li>Proveedores y visitantes</li>
                                                </ul>
                                            </div>
                                        </div>
                                        
                                        <div class="alert alert-warning mt-3">
                                            <i class="fas fa-exclamation-triangle me-2"></i>
                                            <strong>Legal:</strong> Verificar legalidad local del dumpster diving y respetar propiedad privada.
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
                        <use href="../../assets/images/icons.svg#icon-comparison"></use>
                    </svg>
                    Comparación: Técnicas Pasivas vs Activas
                </h4>
                <p>Una comprensión clara de las diferencias, ventajas y limitaciones entre técnicas pasivas y activas es crucial para elegir la estrategia correcta según el contexto de la evaluación.</p>
                
                <div class="comparison-analysis">
                    <div class="comparison-table-container">
                        <table class="table table-bordered comparison-table">
                            <thead class="table-dark">
                                <tr>
                                    <th>Aspecto</th>
                                    <th class="text-center">Técnicas Pasivas</th>
                                    <th class="text-center">Técnicas Activas</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><strong>Detectabilidad</strong></td>
                                    <td class="text-center">
                                        <span class="badge bg-success">Indetectable</span>
                                        <small class="d-block">No genera tráfico hacia el objetivo</small>
                                    </td>
                                    <td class="text-center">
                                        <span class="badge bg-warning">Detectable</span>
                                        <small class="d-block">Logs y alertas en sistemas objetivo</small>
                                    </td>
                                </tr>
                                <tr>
                                    <td><strong>Información Obtenible</strong></td>
                                    <td class="text-center">
                                        <span class="badge bg-info">Amplia</span>
                                        <small class="d-block">Información pública abundante</small>
                                    </td>
                                    <td class="text-center">
                                        <span class="badge bg-primary">Específica</span>
                                        <small class="d-block">Detalles técnicos precisos</small>
                                    </td>
                                </tr>
                                <tr>
                                    <td><strong>Consideraciones Legales</strong></td>
                                    <td class="text-center">
                                        <span class="badge bg-success">Mínimas</span>
                                        <small class="d-block">Información pública</small>
                                    </td>
                                    <td class="text-center">
                                        <span class="badge bg-danger">Altas</span>
                                        <small class="d-block">Requiere autorización explícita</small>
                                    </td>
                                </tr>
                                <tr>
                                    <td><strong>Velocidad de Ejecución</strong></td>
                                    <td class="text-center">
                                        <span class="badge bg-warning">Variable</span>
                                        <small class="d-block">Depende de fuentes disponibles</small>
                                    </td>
                                    <td class="text-center">
                                        <span class="badge bg-success">Rápida</span>
                                        <small class="d-block">Resultados inmediatos</small>
                                    </td>
                                </tr>
                                <tr>
                                    <td><strong>Costo de Ejecución</strong></td>
                                    <td class="text-center">
                                        <span class="badge bg-success">Bajo</span>
                                        <small class="d-block">Herramientas gratuitas</small>
                                    </td>
                                    <td class="text-center">
                                        <span class="badge bg-warning">Medio-Alto</span>
                                        <small class="d-block">Herramientas especializadas</small>
                                    </td>
                                </tr>
                                <tr>
                                    <td><strong>Precisión de Datos</strong></td>
                                    <td class="text-center">
                                        <span class="badge bg-warning">Variable</span>
                                        <small class="d-block">Puede ser desactualizada</small>
                                    </td>
                                    <td class="text-center">
                                        <span class="badge bg-success">Alta</span>
                                        <small class="d-block">Información en tiempo real</small>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    
                    <div class="strategic-recommendations mt-4">
                        <h5>Recomendaciones Estratégicas:</h5>
                        <div class="row">
                            <div class="col-md-6">
                                <div class="recommendation-card">
                                    <h6><i class="fas fa-lightbulb me-2 text-primary"></i>Fase Inicial</h6>
                                    <p><strong>Usar técnicas pasivas</strong> para establecer una base de conocimiento amplia sin alertar al objetivo.</p>
                                    <ul class="small">
                                        <li>Mapeo inicial de la organización</li>
                                        <li>Identificación de tecnologías</li>
                                        <li>Recopilación de información pública</li>
                                    </ul>
                                </div>
                            </div>
                            
                            <div class="col-md-6">
                                <div class="recommendation-card">
                                    <h6><i class="fas fa-target me-2 text-success"></i>Fase de Confirmación</h6>
                                    <p><strong>Complementar con técnicas activas</strong> para verificar y profundizar información específica.</p>
                                    <ul class="small">
                                        <li>Confirmación de servicios activos</li>
                                        <li>Validación de vulnerabilidades</li>
                                        <li>Obtención de detalles técnicos</li>
                                    </ul>
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
                    <p><strong>¿Cuál es la principal ventaja de las técnicas pasivas de footprinting?</strong></p>
                    <div class="quiz-options">
                        <label class="quiz-option">
                            <input type="radio" name="q10" value="a">
                            <span>Proporcionan información más detallada</span>
                        </label>
                        <label class="quiz-option">
                            <input type="radio" name="q10" value="b">
                            <span>Son completamente indetectables por el objetivo</span>
                        </label>
                        <label class="quiz-option">
                            <input type="radio" name="q10" value="c">
                            <span>Obtienen resultados más rápidamente</span>
                        </label>
                    </div>
                </div>
                
                <div class="quiz-question mt-3">
                    <p><strong>¿Qué técnica de escaneo de puertos es considerada más sigilosa?</strong></p>
                    <div class="quiz-options">
                        <label class="quiz-option">
                            <input type="radio" name="q11" value="a">
                            <span>TCP Connect Scan (-sT)</span>
                        </label>
                        <label class="quiz-option">
                            <input type="radio" name="q11" value="b">
                            <span>SYN Scan (-sS)</span>
                        </label>
                        <label class="quiz-option">
                            <input type="radio" name="q11" value="c">
                            <span>UDP Scan (-sU)</span>
                        </label>
                    </div>
                </div>
                
                <div class="quiz-question mt-3">
                    <p><strong>¿Cuál de las siguientes NO es una técnica de ingeniería social para footprinting?</strong></p>
                    <div class="quiz-options">
                        <label class="quiz-option">
                            <input type="radio" name="q12" value="a">
                            <span>Vishing (llamadas telefónicas)</span>
                        </label>
                        <label class="quiz-option">
                            <input type="radio" name="q12" value="b">
                            <span>Análisis de metadatos de documentos</span>
                        </label>
                        <label class="quiz-option">
                            <input type="radio" name="q12" value="c">
                            <span>Pretexting via email</span>
                        </label>
                    </div>
                </div>
            </div>

            <div class="practical-exercise mt-4">
                <h4 class="text-center">
                    <svg class="case-icon me-2" width="24" height="24" viewBox="0 0 100 100">
                        <use href="../../assets/images/icons.svg#icon-case-study"></use>
                    </svg>
                    Ejercicio Práctico: Aplicación de Técnicas de Footprinting
                </h4>
                <div class="exercise-content">
                    <div class="exercise-scenario">
                        <h6>🎯 Escenario Completo:</h6>
                        <p>Como pentester, debes realizar una evaluación completa de footprinting para "SecureBank Corp" utilizando un enfoque híbrido que combine técnicas pasivas y activas de manera estratégica y legal.</p>
                    </div>
                    
                    <div class="exercise-phases mt-3">
                        <h6>📋 Fases del Ejercicio:</h6>
                        
                        <div class="phase-section">
                            <h6><i class="fas fa-search me-2 text-primary"></i>Fase 1: Reconocimiento Pasivo (45 min)</h6>
                            <div class="task-checklist">
                                <div class="task-item">
                                    <input type="checkbox" id="passive1" class="task-checkbox">
                                    <label for="passive1">
                                        <strong>OSINT Básico:</strong> Búsquedas en motores, redes sociales, bases de datos públicas
                                    </label>
                                </div>
                                <div class="task-item">
                                    <input type="checkbox" id="passive2" class="task-checkbox">
                                    <label for="passive2">
                                        <strong>Análisis de Metadatos:</strong> Documentos PDF, imágenes y archivos públicos
                                    </label>
                                </div>
                                <div class="task-item">
                                    <input type="checkbox" id="passive3" class="task-checkbox">
                                    <label for="passive3">
                                        <strong>Certificate Transparency:</strong> Subdominios desde logs de certificados
                                    </label>
                                </div>
                                <div class="task-item">
                                    <input type="checkbox" id="passive4" class="task-checkbox">
                                    <label for="passive4">
                                        <strong>Análisis de Empleados:</strong> LinkedIn, contactos corporativos
                                    </label>
                                </div>
                            </div>
                        </div>
                        
                        <div class="phase-section">
                            <h6><i class="fas fa-crosshairs me-2 text-success"></i>Fase 2: Reconocimiento Activo (30 min)</h6>
                            <div class="task-checklist">
                                <div class="task-item">
                                    <input type="checkbox" id="active1" class="task-checkbox">
                                    <label for="active1">
                                        <strong>DNS Enumeration:</strong> Consultas directas, zone transfers, brute force
                                    </label>
                                </div>
                                <div class="task-item">
                                    <input type="checkbox" id="active2" class="task-checkbox">
                                    <label for="active2">
                                        <strong>Port Scanning:</strong> SYN scan sigiloso en servicios principales
                                    </label>
                                </div>
                                <div class="task-item">
                                    <input type="checkbox" id="active3" class="task-checkbox">
                                    <label for="active3">
                                        <strong>Service Detection:</strong> Banner grabbing y fingerprinting
                                    </label>
                                </div>
                                <div class="task-item">
                                    <input type="checkbox" id="active4" class="task-checkbox">
                                    <label for="active4">
                                        <strong>Network Mapping:</strong> Traceroute y análisis de topología
                                    </label>
                                </div>
                            </div>
                        </div>
                        
                        <div class="phase-section">
                            <h6><i class="fas fa-users me-2 text-warning"></i>Fase 3: HUMINT (15 min - Simulación)</h6>
                            <div class="task-checklist">
                                <div class="task-item">
                                    <input type="checkbox" id="humint1" class="task-checkbox">
                                    <label for="humint1">
                                        <strong>Escenario de Llamada:</strong> Diseñar pretext para obtener información técnica
                                    </label>
                                </div>
                                <div class="task-item">
                                    <input type="checkbox" id="humint2" class="task-checkbox">
                                    <label for="humint2">
                                        <strong>Email de Reconocimiento:</strong> Plantilla de investigación académica
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="exercise-deliverables mt-3">
                        <h6>📊 Entregables Esperados:</h6>
                        <div class="deliverables-grid">
                            <div class="row">
                                <div class="col-md-6">
                                    <ul class="deliverables-list">
                                        <li><strong>Inventario de Activos:</strong> Dominios, subdominios, IPs</li>
                                        <li><strong>Perfil Tecnológico:</strong> Servicios, versiones, frameworks</li>
                                        <li><strong>Mapa de Red:</strong> Topología e infraestructura</li>
                                    </ul>
                                </div>
                                <div class="col-md-6">
                                    <ul class="deliverables-list">
                                        <li><strong>Perfil Organizacional:</strong> Empleados, estructura, contactos</li>
                                        <li><strong>Vectores de Ataque:</strong> Posibles puntos de entrada</li>
                                        <li><strong>Reporte Ejecutivo:</strong> Resumen y recomendaciones</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="exercise-tools mt-3">
                        <h6>🛠️ Herramientas Recomendadas:</h6>
                        <div class="tools-grid">
                            <div class="row">
                                <div class="col-md-4">
                                    <div class="tool-category">
                                        <h6>Pasivas:</h6>
                                        <ul class="small">
                                            <li>theHarvester</li>
                                            <li>CTFR</li>
                                            <li>Maltego</li>
                                            <li>Recon-ng</li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="tool-category">
                                        <h6>Activas:</h6>
                                        <ul class="small">
                                            <li>Nmap</li>
                                            <li>Fierce</li>
                                            <li>Dig/Nslookup</li>
                                            <li>Traceroute</li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="tool-category">
                                        <h6>Análisis:</h6>
                                        <ul class="small">
                                            <li>ExifTool</li>
                                            <li>Metagoofil</li>
                                            <li>SpiderFoot</li>
                                            <li>FOCA</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="exercise-commands mt-3">
                        <h6>💻 Comandos de Ejemplo:</h6>
                        <div class="command-sequence">
                            <pre class="command-block"># Fase Pasiva
theharvester -d securebankcorp.com -b all -f passive_results.html
python ctfr.py -d securebankcorp.com -o subdomains.txt
exiftool *.pdf *.jpg -r | grep -E "(Author|Creator|GPS)"

# Fase Activa
nmap -sS -T3 -p 21,22,25,53,80,110,143,443,993,995 securebankcorp.com
fierce -dns securebankcorp.com -wordlist /usr/share/wordlists/dirb/common.txt
dig @ns1.securebankcorp.com securebankcorp.com AXFR

# Network Mapping
traceroute securebankcorp.com
mtr --report --report-cycles 10 securebankcorp.com</pre>
                        </div>
                    </div>
                    
                    <div class="alert alert-info mt-3">
                        <i class="fas fa-info-circle me-2"></i>
                        <strong>Nota Ética:</strong> Este ejercicio debe realizarse únicamente en entornos de laboratorio o con autorización explícita del objetivo. Nunca realizar estas técnicas contra sistemas reales sin permiso.
                    </div>
                </div>
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

function createOSINTContent(topic) {
    return `
        <div class="topic-header">
            <h2 class="text-center">
                <svg class="topic-icon me-2" width="32" height="32" viewBox="0 0 100 100">
                    <use href="../../assets/images/icons.svg#icon-search-data"></use>
                </svg>
                ${topic.title}
            </h2>
            <p class="topic-intro">
                OSINT (Open Source Intelligence) es la práctica de recopilar información de fuentes públicamente disponibles para ser utilizada en un contexto de inteligencia. Es una disciplina fundamental en ciberseguridad y análisis de amenazas.
            </p>
        </div>

        <div class="topic-content-body">
            <h3>Marco Conceptual de OSINT</h3>
              <!-- Diagrama del Framework OSINT -->
            <div class="osint-framework-diagram mb-4">
                <h4 class="text-center mb-3">Framework OSINT</h4>
                <svg class="w-100" style="max-height: 650px;" viewBox="0 0 100 100">
                    <use href="../../assets/images/diagrams.svg#osint-framework"></use>
                </svg>
                <p class="text-center text-muted mt-2">
                    <small>Framework completo de herramientas y fuentes OSINT por categorías</small>
                </p>
            </div>

            <div class="concept-card">
                <h4>
                    <svg class="concept-icon me-2" width="24" height="24" viewBox="0 0 100 100">
                        <use href="../../assets/images/icons.svg#icon-foundation"></use>
                    </svg>
                    Fundamentos de OSINT
                </h4>
                <p>OSINT se basa en la recopilación sistemática y análisis de información disponible públicamente. Su efectividad radica en la metodología y las herramientas utilizadas.</p>
                
                <div class="osint-fundamentals">
                    <h5>Principios Fundamentales:</h5>
                    <div class="row">
                        <div class="col-md-6">
                            <div class="fundamental-section">
                                <h6><i class="fas fa-eye me-2 text-primary"></i>Tipos de Inteligencia</h6>
                                <div class="intelligence-types">
                                    <div class="type-item">
                                        <strong>HUMINT</strong> - Human Intelligence
                                        <small>Información obtenida de fuentes humanas</small>
                                    </div>
                                    <div class="type-item">
                                        <strong>SIGINT</strong> - Signals Intelligence
                                        <small>Inteligencia de señales y comunicaciones</small>
                                    </div>
                                    <div class="type-item highlight">
                                        <strong>OSINT</strong> - Open Source Intelligence
                                        <small>Información de fuentes abiertas y públicas</small>
                                    </div>
                                    <div class="type-item">
                                        <strong>GEOINT</strong> - Geospatial Intelligence
                                        <small>Inteligencia geoespacial y de imágenes</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="col-md-6">
                            <div class="fundamental-section">
                                <h6><i class="fas fa-shield-alt me-2 text-success"></i>Aspectos Legales y Éticos</h6>
                                <div class="ethical-guidelines">
                                    <div class="guideline-item">
                                        <i class="fas fa-check text-success me-2"></i>
                                        <span>Solo información públicamente disponible</span>
                                    </div>
                                    <div class="guideline-item">
                                        <i class="fas fa-check text-success me-2"></i>
                                        <span>Respeto a términos de servicio</span>
                                    </div>
                                    <div class="guideline-item">
                                        <i class="fas fa-check text-success me-2"></i>
                                        <span>No violación de privacidad</span>
                                    </div>
                                    <div class="guideline-item">
                                        <i class="fas fa-times text-danger me-2"></i>
                                        <span>Evitar técnicas intrusivas</span>
                                    </div>
                                    <div class="guideline-item">
                                        <i class="fas fa-times text-danger me-2"></i>
                                        <span>No acceso no autorizado</span>
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
                        <use href="../../assets/images/icons.svg#icon-database"></use>
                    </svg>
                    Fuentes de Información Abierta
                </h4>
                <p>La efectividad de OSINT depende del conocimiento y acceso a fuentes de información diversas y confiables.</p>
                
                <div class="osint-sources">
                    <div class="accordion" id="sourcesAccordion">
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWebSources">
                                    <i class="fas fa-globe me-2"></i>Fuentes Web y Medios Digitales
                                </button>
                            </h2>
                            <div id="collapseWebSources" class="accordion-collapse collapse show" data-bs-parent="#sourcesAccordion">
                                <div class="accordion-body">
                                    <div class="source-categories">
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div class="source-group">
                                                    <h6>Redes Sociales</h6>
                                                    <ul class="source-list">
                                                        <li>Facebook, Twitter, LinkedIn</li>
                                                        <li>Instagram, TikTok, YouTube</li>
                                                        <li>Reddit, Discord, Telegram</li>
                                                        <li>Plataformas profesionales</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="source-group">
                                                    <h6>Sitios Web y Blogs</h6>
                                                    <ul class="source-list">
                                                        <li>Sitios corporativos</li>
                                                        <li>Blogs y foros especializados</li>
                                                        <li>Wikis y documentación</li>
                                                        <li>Portales de noticias</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTechnicalSources">
                                    <i class="fas fa-server me-2"></i>Fuentes Técnicas y de Infraestructura
                                </button>
                            </h2>
                            <div id="collapseTechnicalSources" class="accordion-collapse collapse" data-bs-parent="#sourcesAccordion">
                                <div class="accordion-body">
                                    <div class="source-categories">
                                        <div class="row">
                                            <div class="col-md-4">
                                                <div class="source-group">
                                                    <h6>DNS y Dominios</h6>
                                                    <ul class="source-list">
                                                        <li>WHOIS databases</li>
                                                        <li>DNS records</li>
                                                        <li>Certificate transparency</li>
                                                        <li>Subdomain enumeration</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div class="col-md-4">
                                                <div class="source-group">
                                                    <h6>Código y Repositorios</h6>
                                                    <ul class="source-list">
                                                        <li>GitHub, GitLab, Bitbucket</li>
                                                        <li>Code leaks</li>
                                                        <li>API documentation</li>
                                                        <li>Configuration files</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div class="col-md-4">
                                                <div class="source-group">
                                                    <h6>Metadatos</h6>
                                                    <ul class="source-list">
                                                        <li>Archivos de documentos</li>
                                                        <li>Imágenes y multimedia</li>
                                                        <li>Email headers</li>
                                                        <li>Web page metadata</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsePublicRecords">
                                    <i class="fas fa-file-alt me-2"></i>Registros Públicos y Documentos
                                </button>
                            </h2>
                            <div id="collapsePublicRecords" class="accordion-collapse collapse" data-bs-parent="#sourcesAccordion">
                                <div class="accordion-body">
                                    <div class="source-categories">
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div class="source-group">
                                                    <h6>Documentos Legales</h6>
                                                    <ul class="source-list">
                                                        <li>Registros corporativos</li>
                                                        <li>Patentes y marcas</li>
                                                        <li>Documentos judiciales</li>
                                                        <li>Regulaciones gubernamentales</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="source-group">
                                                    <h6>Bases de Datos Públicas</h6>
                                                    <ul class="source-list">
                                                        <li>Shodan, Censys</li>
                                                        <li>Have I Been Pwned</li>
                                                        <li>Internet Archive</li>
                                                        <li>Academic databases</li>
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
            </div>

            <div class="concept-card">
                <h4>
                    <svg class="concept-icon me-2" width="24" height="24" viewBox="0 0 100 100">
                        <use href="../../assets/images/icons.svg#icon-tools"></use>
                    </svg>
                    Herramientas OSINT
                </h4>
                <p>Una colección comprensiva de herramientas especializadas para diferentes aspectos de la recopilación de inteligencia de fuentes abiertas.</p>
                
                <div class="osint-tools-grid">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="tool-category">
                                <h5><i class="fas fa-search me-2 text-primary"></i>Motores de Búsqueda Especializados</h5>
                                <div class="tools-grid">
                                    <div class="tool-item">
                                        <h6>Google Dorking</h6>
                                        <p>Técnicas avanzadas de búsqueda usando operadores especiales</p>
                                        <div class="tool-examples">
                                            <code>site:example.com filetype:pdf</code><br>
                                            <code>intitle:"index of" password</code><br>
                                            <code>inurl:admin site:target.com</code>
                                        </div>
                                    </div>
                                    <div class="tool-item">
                                        <h6>Shodan</h6>
                                        <p>Motor de búsqueda para dispositivos conectados a Internet</p>
                                        <div class="tool-examples">
                                            <code>apache city:"Madrid"</code><br>
                                            <code>port:22 country:"ES"</code><br>
                                            <code>ssl:"example.com"</code>
                                        </div>
                                    </div>
                                    <div class="tool-item">
                                        <h6>Censys</h6>
                                        <p>Plataforma de descubrimiento y análisis de activos de Internet</p>
                                        <div class="tool-examples">
                                            <code>443.https.tls.certificate.parsed.names</code><br>
                                            <code>services.service_name: HTTP</code>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="col-md-6">
                            <div class="tool-category">
                                <h5><i class="fas fa-users me-2 text-success"></i>Análisis de Redes Sociales</h5>
                                <div class="tools-grid">
                                    <div class="tool-item">
                                        <h6>Maltego</h6>
                                        <p>Plataforma de análisis de vínculos y minería de datos</p>
                                        <div class="tool-features">
                                            <span class="badge bg-primary">Mapeo de relaciones</span>
                                            <span class="badge bg-success">Visualización gráfica</span>
                                            <span class="badge bg-info">Transformaciones automáticas</span>
                                        </div>
                                    </div>
                                    <div class="tool-item">
                                        <h6>theHarvester</h6>
                                        <p>Herramienta para recopilar emails, dominios y hostnames</p>
                                        <div class="tool-examples">
                                            <code>theHarvester -d example.com -b google</code><br>
                                            <code>theHarvester -d example.com -b all</code>
                                        </div>
                                    </div>
                                    <div class="tool-item">
                                        <h6>Social Searcher</h6>
                                        <p>Monitoreo y búsqueda en redes sociales en tiempo real</p>
                                        <div class="tool-features">
                                            <span class="badge bg-warning">Alertas en tiempo real</span>
                                            <span class="badge bg-info">Análisis de sentimientos</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="row mt-4">
                        <div class="col-md-6">
                            <div class="tool-category">
                                <h5><i class="fas fa-globe me-2 text-warning"></i>Análisis de Dominios y DNS</h5>
                                <div class="tools-grid">
                                    <div class="tool-item">
                                        <h6>WHOIS Lookup</h6>
                                        <p>Información de registro de dominios</p>
                                        <div class="tool-examples">
                                            <code>whois example.com</code><br>
                                            <code>whois -h whois.arin.net 8.8.8.8</code>
                                        </div>
                                    </div>
                                    <div class="tool-item">
                                        <h6>DNSdumpster</h6>
                                        <p>Descubrimiento de subdominios y mapeo DNS</p>
                                        <div class="tool-features">
                                            <span class="badge bg-primary">Subdomain enumeration</span>
                                            <span class="badge bg-success">DNS mapping</span>
                                        </div>
                                    </div>
                                    <div class="tool-item">
                                        <h6>Certificate Transparency</h6>
                                        <p>Análisis de certificados SSL/TLS públicos</p>
                                        <div class="tool-examples">
                                            <small>crt.sh, Certspotter, Facebook CT</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="col-md-6">
                            <div class="tool-category">
                                <h5><i class="fas fa-image me-2 text-info"></i>Análisis de Imágenes y Geolocalización</h5>
                                <div class="tools-grid">
                                    <div class="tool-item">
                                        <h6>Google Images</h6>
                                        <p>Búsqueda inversa de imágenes</p>
                                        <div class="tool-features">
                                            <span class="badge bg-primary">Reverse image search</span>
                                            <span class="badge bg-success">Similar images</span>
                                        </div>
                                    </div>
                                    <div class="tool-item">
                                        <h6>Exiftool</h6>
                                        <p>Extracción de metadatos de archivos</p>
                                        <div class="tool-examples">
                                            <code>exiftool image.jpg</code><br>
                                            <code>exiftool -gps* image.jpg</code>
                                        </div>
                                    </div>
                                    <div class="tool-item">
                                        <h6>Google Earth</h6>
                                        <p>Análisis geoespacial y de ubicaciones</p>
                                        <div class="tool-features">
                                            <span class="badge bg-warning">Historical imagery</span>
                                            <span class="badge bg-info">3D visualization</span>
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
                        <use href="../../assets/images/icons.svg#icon-methodology"></use>
                    </svg>
                    Marco de Trabajo OSINT
                </h4>
                <p>Una metodología estructurada es esencial para la recopilación efectiva y análisis de inteligencia de fuentes abiertas.</p>
                
                <div class="osint-framework">
                    <div class="framework-phases">
                        <div class="row">
                            <div class="col-md-4">
                                <div class="phase-card">
                                    <div class="phase-header">
                                        <h5><i class="fas fa-bullseye me-2 text-primary"></i>1. Definición de Objetivos</h5>
                                    </div>
                                    <div class="phase-content">
                                        <ul class="phase-steps">
                                            <li>Identificar requirements específicos</li>
                                            <li>Definir alcance de la investigación</li>
                                            <li>Establecer limitaciones legales/éticas</li>
                                            <li>Determinar timeline y recursos</li>
                                        </ul>
                                        <div class="phase-deliverable">
                                            <strong>Entregable:</strong> Intelligence Requirements (IRs)
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="col-md-4">
                                <div class="phase-card">
                                    <div class="phase-header">
                                        <h5><i class="fas fa-database me-2 text-success"></i>2. Recopilación de Datos</h5>
                                    </div>
                                    <div class="phase-content">
                                        <ul class="phase-steps">
                                            <li>Seleccionar fuentes apropiadas</li>
                                            <li>Implementar herramientas de recolección</li>
                                            <li>Ejecutar búsquedas sistemáticas</li>
                                            <li>Documentar fuentes y métodos</li>
                                        </ul>
                                        <div class="phase-deliverable">
                                            <strong>Entregable:</strong> Raw Data Collection
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="col-md-4">
                                <div class="phase-card">
                                    <div class="phase-header">
                                        <h5><i class="fas fa-cogs me-2 text-warning"></i>3. Procesamiento</h5>
                                    </div>
                                    <div class="phase-content">
                                        <ul class="phase-steps">
                                            <li>Filtrar y limpiar datos</li>
                                            <li>Validar autenticidad de fuentes</li>
                                            <li>Normalizar formatos</li>
                                            <li>Organizar información</li>
                                        </ul>
                                        <div class="phase-deliverable">
                                            <strong>Entregable:</strong> Processed Intelligence
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="row mt-3">
                            <div class="col-md-6">
                                <div class="phase-card">
                                    <div class="phase-header">
                                        <h5><i class="fas fa-chart-line me-2 text-info"></i>4. Análisis y Correlación</h5>
                                    </div>
                                    <div class="phase-content">
                                        <ul class="phase-steps">
                                            <li>Identificar patrones y conexiones</li>
                                            <li>Realizar análisis de vínculos</li>
                                            <li>Evaluar credibilidad de información</li>
                                            <li>Generar hipótesis e insights</li>
                                            <li>Aplicar técnicas analíticas avanzadas</li>
                                        </ul>
                                        <div class="phase-deliverable">
                                            <strong>Entregable:</strong> Intelligence Analysis
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="col-md-6">
                                <div class="phase-card">
                                    <div class="phase-header">
                                        <h5><i class="fas fa-share-alt me-2 text-danger"></i>5. Diseminación</h5>
                                    </div>
                                    <div class="phase-content">
                                        <ul class="phase-steps">
                                            <li>Crear reportes estructurados</li>
                                            <li>Adaptar contenido a audiencia</li>
                                            <li>Incluir visualizaciones</li>
                                            <li>Distribuir según clasificación</li>
                                            <li>Recibir feedback para mejoras</li>
                                        </ul>
                                        <div class="phase-deliverable">
                                            <strong>Entregable:</strong> Intelligence Report
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
                        <use href="../../assets/images/icons.svg#icon-analysis"></use>
                    </svg>
                    Análisis y Correlación de Datos
                </h4>
                <p>El análisis efectivo transforma datos brutos en inteligencia accionable mediante técnicas sistemáticas de correlación y evaluación.</p>
                
                <div class="analysis-techniques">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="analysis-methods">
                                <h5>Técnicas de Análisis OSINT</h5>
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="analysis-method">
                                            <h6><i class="fas fa-project-diagram me-2 text-primary"></i>Análisis de Vínculos</h6>
                                            <p>Identificación y mapeo de relaciones entre entidades, personas, organizaciones y eventos.</p>
                                            <div class="method-tools">
                                                <span class="tool-badge">Maltego</span>
                                                <span class="tool-badge">Gephi</span>
                                                <span class="tool-badge">i2 Analyst Notebook</span>
                                            </div>
                                        </div>
                                        
                                        <div class="analysis-method">
                                            <h6><i class="fas fa-clock me-2 text-success"></i>Análisis Temporal</h6>
                                            <p>Estudio de patrones y secuencias de eventos a lo largo del tiempo.</p>
                                            <div class="method-examples">
                                                <small>• Timeline de actividades sospechosas</small><br>
                                                <small>• Patrones de comportamiento temporal</small><br>
                                                <small>• Correlación de eventos temporales</small>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div class="col-md-6">
                                        <div class="analysis-method">
                                            <h6><i class="fas fa-map-marked-alt me-2 text-warning"></i>Análisis Geoespacial</h6>
                                            <p>Correlación de información basada en ubicación geográfica y patrones espaciales.</p>
                                            <div class="method-tools">
                                                <span class="tool-badge">Google Earth</span>
                                                <span class="tool-badge">QGIS</span>
                                                <span class="tool-badge">ArcGIS</span>
                                            </div>
                                        </div>
                                        
                                        <div class="analysis-method">
                                            <h6><i class="fas fa-balance-scale me-2 text-info"></i>Evaluación de Credibilidad</h6>
                                            <p>Valoración de confiabilidad y precisión de fuentes e información.</p>
                                            <div class="method-examples">
                                                <small>• Verificación cruzada de fuentes</small><br>
                                                <small>• Análisis de bias y motivaciones</small><br>
                                                <small>• Scoring de confiabilidad</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="correlation-matrix mt-4">
                        <h5>Matriz de Correlación de Datos</h5>
                        <div class="table-responsive">
                            <table class="table table-bordered">
                                <thead>
                                    <tr>
                                        <th>Tipo de Dato</th>
                                        <th>Fuentes Primarias</th>
                                        <th>Métodos de Correlación</th>
                                        <th>Indicadores Clave</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><strong>Identidades Digitales</strong></td>
                                        <td>Redes sociales, registros públicos</td>
                                        <td>Cross-referencing, pattern matching</td>
                                        <td>Usernames, emails, phone numbers</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Infraestructura Técnica</strong></td>
                                        <td>DNS, WHOIS, certificados</td>
                                        <td>Network analysis, timeline correlation</td>
                                        <td>IPs, dominios, ASN, registrars</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Información Financiera</strong></td>
                                        <td>Registros corporativos, SEC filings</td>
                                        <td>Entity resolution, financial analysis</td>
                                        <td>Company names, executives, addresses</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Datos Geoespaciales</strong></td>
                                        <td>Imágenes, metadatos, check-ins</td>
                                        <td>Geolocation analysis, movement patterns</td>
                                        <td>Coordinates, locations, timestamps</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            <div class="topic-quiz mt-4">
                <h4>
                    <svg class="quiz-icon me-2" width="24" height="24" viewBox="0 0 100 100">
                        <use href="../../assets/images/icons.svg#icon-quiz"></use>
                    </svg>
                    Evaluación de Conocimientos
                </h4>
                <div class="quiz-question">
                    <p><strong>¿Cuál es la principal diferencia entre OSINT y otras disciplinas de inteligencia?</strong></p>
                    <div class="quiz-options">
                        <label class="quiz-option">
                            <input type="radio" name="q1" value="a">
                            <span>OSINT requiere herramientas más avanzadas</span>
                        </label>
                        <label class="quiz-option">
                            <input type="radio" name="q1" value="b">
                            <span>OSINT utiliza únicamente información disponible públicamente</span>
                        </label>
                        <label class="quiz-option">
                            <input type="radio" name="q1" value="c">
                            <span>OSINT es más preciso que otras disciplinas</span>
                        </label>
                    </div>
                </div>
                
                <div class="quiz-question mt-3">
                    <p><strong>En el marco de trabajo OSINT, ¿cuál es el primer paso crítico?</strong></p>
                    <div class="quiz-options">
                        <label class="quiz-option">
                            <input type="radio" name="q2" value="a">
                            <span>Seleccionar las herramientas apropiadas</span>
                        </label>
                        <label class="quiz-option">
                            <input type="radio" name="q2" value="b">
                            <span>Definir claramente los objetivos y requirements</span>
                        </label>
                        <label class="quiz-option">
                            <input type="radio" name="q2" value="c">
                            <span>Comenzar la recopilación de datos inmediatamente</span>
                        </label>
                    </div>
                </div>
                
                <div class="quiz-question mt-3">
                    <p><strong>¿Qué herramienta es más efectiva para el análisis de vínculos y relaciones?</strong></p>
                    <div class="quiz-options">
                        <label class="quiz-option">
                            <input type="radio" name="q3" value="a">
                            <span>Shodan</span>
                        </label>
                        <label class="quiz-option">
                            <input type="radio" name="q3" value="b">
                            <span>Maltego</span>
                        </label>
                        <label class="quiz-option">
                            <input type="radio" name="q3" value="c">
                            <span>theHarvester</span>
                        </label>
                    </div>
                </div>
            </div>

            <div class="case-study mt-4">
                <h4 class="text-center">
                    <svg class="case-icon me-2" width="24" height="24" viewBox="0 0 100 100">
                        <use href="../../assets/images/icons.svg#icon-case-study"></use>
                    </svg>
                    Ejercicio Práctico: Investigación OSINT
                </h4>
                <div class="case-content">
                    <div class="case-scenario">
                        <h6>🎯 Objetivo:</h6>
                        <p>Una empresa ha reportado posibles amenazas dirigidas y necesita un perfil de inteligencia sobre un dominio sospechoso: <code>suspicious-corp.example</code></p>
                    </div>
                    
                    <div class="case-requirements mt-3">
                        <h6>📋 Requerimientos de Inteligencia:</h6>
                        <ol>
                            <li>Información de registro del dominio y contactos asociados</li>
                            <li>Infraestructura técnica (subdominios, certificados, hosting)</li>
                            <li>Presencia en redes sociales y contenido relacionado</li>
                            <li>Conexiones con otras entidades o dominios</li>
                        </ol>
                    </div>
                    
                    <div class="case-methodology mt-3">
                        <h6>🛠️ Metodología Sugerida:</h6>
                        <div class="methodology-steps">
                            <div class="step-card">
                                <div class="step-number">1</div>
                                <div class="step-content">
                                    <strong>Reconnaissance Básico</strong>
                                    <pre class="command-block">whois suspicious-corp.example
nslookup suspicious-corp.example
dig suspicious-corp.example ANY</pre>
                                </div>
                            </div>
                            
                            <div class="step-card">
                                <div class="step-number">2</div>
                                <div class="step-content">
                                    <strong>Análisis de Subdominios</strong>
                                    <pre class="command-block">theHarvester -d suspicious-corp.example -b all
# Usar DNSdumpster.com para mapeo visual
# Verificar Certificate Transparency logs</pre>
                                </div>
                            </div>
                            
                            <div class="step-card">
                                <div class="step-number">3</div>
                                <div class="step-content">
                                    <strong>Búsqueda en Motores</strong>
                                    <pre class="command-block">site:suspicious-corp.example
"suspicious-corp.example" -site:suspicious-corp.example
related:suspicious-corp.example</pre>
                                </div>
                            </div>
                            
                            <div class="step-card">
                                <div class="step-number">4</div>
                                <div class="step-content">
                                    <strong>Análisis con Shodan</strong>
                                    <pre class="command-block">ssl:"suspicious-corp.example"
hostname:"suspicious-corp.example"</pre>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="case-deliverable mt-3">
                        <h6>📊 Entregable Esperado:</h6>
                        <p>Reporte de inteligencia estructurado con:</p>
                        <ul>
                            <li>Executive summary de hallazgos</li>
                            <li>Timeline de actividades observadas</li>
                            <li>Mapa de vínculos y relaciones</li>
                            <li>Evaluación de amenaza y recomendaciones</li>
                        </ul>
                    </div>
                </div>
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

// ========================================
// FUNCIONES DE NAVEGACIÓN Y CONTROL
// ========================================

function updateNavigationState() {
    // Actualizar elementos activos en la navegación
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach((item, index) => {
        item.classList.toggle('active', index === currentTopicIndex);
    });
}

function updateProgress() {
    const completedTopics = footprintingModuleData.topics.filter(topic => topic.completed).length;
    const totalTopics = footprintingModuleData.topics.length;
    const progressPercentage = Math.round((completedTopics / totalTopics) * 100);
    
    // Actualizar barras de progreso
    const progressBars = document.querySelectorAll('#module-progress-bar, #sidebar-progress');
    progressBars.forEach(bar => {
        bar.style.width = `${progressPercentage}%`;
    });
    
    // Actualizar texto de progreso
    const progressTexts = document.querySelectorAll('#module-progress-text, #sidebar-progress-text');
    progressTexts.forEach(text => {
        text.textContent = `${completedTopics} de ${totalTopics} temas completados`;
    });
    
    // Actualizar progreso en header
    const headerProgress = document.getElementById('module-progress-text');
    if (headerProgress) {
        headerProgress.textContent = `${progressPercentage}%`;
    }
}

function completeTopic(topicIndex) {
    if (topicIndex >= 0 && topicIndex < footprintingModuleData.topics.length) {
        footprintingModuleData.topics[topicIndex].completed = true;
        updateProgress();
        loadNavigation();
        
        // Mostrar mensaje de éxito
        showSuccessMessage(`¡Tema "${footprintingModuleData.topics[topicIndex].title}" completado!`);
        
        // Auto-avanzar al siguiente tema si existe
        if (topicIndex + 1 < footprintingModuleData.topics.length) {
            setTimeout(() => {
                loadTopic(topicIndex + 1);
            }, 2000);
        }
    }
}

function startModule() {
    loadTopic(0);
}

function loadFirstTopic() {
    loadTopic(0);
}

function previousModule() {
    // Navegación a módulo anterior
    window.location.href = '../enumeracion-activos/index.html';
}

function nextModule() {
    // Navegación a módulo siguiente
    window.location.href = '../escaneo-dispositivos/index.html';
}

// ========================================
// FUNCIONES AUXILIARES PARA MANEJO DE SVG
// ========================================

/**
 * Inicializa el sistema SVG con manejo robusto de errores
 */
function initializeSVGSystem() {
    return new Promise((resolve, reject) => {
        console.log('🔧 Intentando inicializar sistema SVG...');
        
        if (typeof SVGInlineInjector !== 'undefined') {
            try {
                window.svgInjector = new SVGInlineInjector();
                window.svgInjector.init();
                console.log('✅ SVGInlineInjector inicializado exitosamente');
                resolve(true);
            } catch (error) {
                console.error('❌ Error inicializando SVGInlineInjector:', error);
                resolve(false);
            }
        } else {
            console.log('⚠️ SVGInlineInjector no está disponible, usando sistema de respaldo');
            resolve(false);
        }
    });
}

/**
 * Sistema de respaldo para cuando SVGInlineInjector no está disponible
 */
function fallbackSVGSystem() {
    console.log('🛠️ Activando sistema de respaldo para SVG');
    
    // Implementar lógica básica para manejar SVGs sin el injector
    const svgElements = document.querySelectorAll('svg use');
    svgElements.forEach(useElement => {
        const href = useElement.getAttribute('href');
        if (href && href.includes('#')) {
            console.log(`📍 SVG encontrado: ${href}`);
            // El sistema de respaldo puede ser implementado aquí si es necesario
        }
    });
}

// ========================================
// FUNCIONES DE UTILIDAD
// ========================================

function initializeTopicFeatures() {
    // Inicializar funcionalidades específicas del tema
    initializeQuizzes();
    initializeCaseStudies();
    initializeInteractiveElements();
}

function initializeQuizzes() {
    // Manejar respuestas de quiz
    document.querySelectorAll('.quiz-option input').forEach(input => {
        input.addEventListener('change', function() {
            const questionName = this.name;
            const selectedValue = this.value;
            const allOptions = document.querySelectorAll(`input[name="${questionName}"]`);
            
            allOptions.forEach(option => {
                option.parentElement.classList.remove('correct', 'incorrect');
            });
            
            // Marcar respuesta correcta (simplificado - en producción usar lógica más compleja)
            if (selectedValue === 'b') {
                this.parentElement.classList.add('correct');
                showFeedback(questionName, true);
            } else {
                this.parentElement.classList.add('incorrect');
                showFeedback(questionName, false);
            }
        });
    });
}

function initializeCaseStudies() {
    // Manejar estudios de caso
    document.querySelectorAll('.case-option').forEach(button => {
        button.addEventListener('click', function() {
            const caseId = this.dataset.case;
            const value = this.dataset.value;
            const feedbackElement = document.getElementById(`case-${caseId}-feedback`);
            
            // Remover estados anteriores
            this.parentElement.querySelectorAll('.case-option').forEach(btn => {
                btn.classList.remove('btn-success', 'btn-danger');
                btn.classList.add('btn-outline-primary');
            });
            
            // Mostrar feedback
            if (value === 'b') {
                this.classList.remove('btn-outline-primary');
                this.classList.add('btn-success');
                feedbackElement.innerHTML = `
                    <div class="alert alert-success mt-2">
                        <i class="fas fa-check-circle me-2"></i>
                        <strong>¡Correcto!</strong> El reconocimiento pasivo es siempre el primer paso recomendado 
                        ya que no deja rastros en los sistemas del objetivo y es completamente legal.
                    </div>
                `;
            } else {
                this.classList.remove('btn-outline-primary');
                this.classList.add('btn-danger');
                feedbackElement.innerHTML = `
                    <div class="alert alert-danger mt-2">
                        <i class="fas fa-times-circle me-2"></i>
                        <strong>Incorrecto.</strong> Siempre debes comenzar con reconocimiento pasivo para 
                        evitar detectar tu actividad y cumplir con las mejores prácticas éticas.
                    </div>
                `;
            }
            
            feedbackElement.style.display = 'block';
        });
    });
}

function initializeInteractiveElements() {
    // Inicializar elementos interactivos
    initializeCodeCopy();
    initializeChecklists();
}

function initializeCodeCopy() {
    // Funcionalidad de copiar código
    window.copyToClipboard = function(text) {
        navigator.clipboard.writeText(text).then(() => {
            showSuccessMessage('Comando copiado al portapapeles');
        }).catch(err => {
            console.error('Error copiando al portapapeles:', err);
        });
    };
}

function initializeChecklists() {
    // Manejar listas de verificación
    document.querySelectorAll('.checklist-item input').forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            const checkedItems = document.querySelectorAll('.checklist-item input:checked').length;
            const totalItems = document.querySelectorAll('.checklist-item input').length;
            
            if (checkedItems === totalItems) {
                showSuccessMessage('¡Laboratorio completado! Has terminado todos los pasos.');
            }
        });
    });
}

function showFeedback(questionName, isCorrect) {
    const message = isCorrect ? '¡Respuesta correcta!' : 'Respuesta incorrecta. Inténtalo de nuevo.';
    const alertClass = isCorrect ? 'alert-success' : 'alert-danger';
    
    // Crear o actualizar elemento de feedback
    let feedbackElement = document.querySelector(`[data-feedback="${questionName}"]`);
    if (!feedbackElement) {
        feedbackElement = document.createElement('div');
        feedbackElement.setAttribute('data-feedback', questionName);
        feedbackElement.className = `alert ${alertClass} mt-2`;
        
        const questionElement = document.querySelector(`input[name="${questionName}"]`).closest('.quiz-question');
        questionElement.appendChild(feedbackElement);
    }
    
    feedbackElement.innerHTML = `
        <i class="fas ${isCorrect ? 'fa-check-circle' : 'fa-times-circle'} me-2"></i>
        ${message}
    `;
}

function showSuccessMessage(message) {
    // Crear toast de éxito
    const toast = document.createElement('div');
    toast.className = 'toast-message success';
    toast.innerHTML = `
        <i class="fas fa-check-circle me-2"></i>
        ${message}
    `;
    
    document.body.appendChild(toast);
    
    // Mostrar y ocultar después de 3 segundos
    setTimeout(() => toast.classList.add('show'), 100);
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => document.body.removeChild(toast), 300);    }, 3000);
}

// ========================================
// FUNCIONES DE DIAGNÓSTICO GLOBAL
// ========================================

/**
 * Fuerza la corrección de todos los diagramas
 * Disponible globalmente para debugging manual
 */
window.forceFixDiagrams = function() {
    console.log('🔧 Forzando corrección de diagramas...');
    if (typeof UNIVERSAL_DIAGRAM_SYSTEM !== 'undefined') {
        UNIVERSAL_DIAGRAM_SYSTEM.fixAttempts = 0; // Reset attempts
        UNIVERSAL_DIAGRAM_SYSTEM.isProcessing = false; // Reset processing flag
        UNIVERSAL_DIAGRAM_SYSTEM.applyFixes();
        return 'Corrección de diagramas iniciada';
    } else {
        return 'Sistema de diagramas no disponible';
    }
};

/**
 * Obtiene el estado actual del sistema de diagramas
 */
window.getDiagramStatus = function() {
    if (typeof UNIVERSAL_DIAGRAM_SYSTEM !== 'undefined') {
        const status = {
            initialized: UNIVERSAL_DIAGRAM_SYSTEM.isInitialized,
            processing: UNIVERSAL_DIAGRAM_SYSTEM.isProcessing,
            attempts: UNIVERSAL_DIAGRAM_SYSTEM.fixAttempts,
            maxAttempts: UNIVERSAL_DIAGRAM_SYSTEM.maxAttempts,
            diagrams: UNIVERSAL_DIAGRAM_SYSTEM.diagrams.length,
            svgCached: !!UNIVERSAL_DIAGRAM_SYSTEM.svgCache
        };
        
        // Verificar diagramas en el DOM
        const fixedElements = document.querySelectorAll('svg[data-universal-fixed]').length;
        const fallbackElements = document.querySelectorAll('svg[data-fallback-applied]').length;
        const totalUseElements = document.querySelectorAll('use[href*="#"]').length;
        
        status.fixedInDOM = fixedElements;
        status.fallbacksInDOM = fallbackElements;
        status.totalUseElements = totalUseElements;
        
        console.table(status);
        return status;
    } else {
        console.log('Sistema de diagramas no disponible');
        return null;
    }
};

/**
 * Prueba específica para verificar la carga de SVG - MEJORADA
 */
window.testSVGLoad = async function() {
    console.log('🔍 === DIAGNÓSTICO COMPLETO DE CARGA DE SVG ===');
    
    const paths = [
        '../../assets/images/diagrams.svg',           // Más probable para HTTP server
        '/assets/images/diagrams.svg',               // Ruta absoluta del servidor
        'http://localhost:8000/assets/images/diagrams.svg', // URL completa como fallback
        '../assets/images/diagrams.svg',             // Un nivel menos
        './assets/images/diagrams.svg',              // Mismo directorio (poco probable)
        'assets/images/diagrams.svg'                 // Sin ./
    ];
    
    const results = [];
    
    for (const path of paths) {
        try {
            console.log(`\n🔗 Probando: ${path}`);
            
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), 5000);
            
            const response = await fetch(path, {
                signal: controller.signal,
                cache: 'no-cache'
            });
            
            clearTimeout(timeoutId);
            
            const result = {
                path: path,
                status: response.status,
                ok: response.ok,
                contentType: response.headers.get('content-type'),
                size: 0,
                hasContent: false,
                symbolsFound: 0,
                totalExpected: 0
            };
            
            if (response.ok) {
                const text = await response.text();
                result.size = text.length;
                result.hasContent = text.includes('<svg') && text.includes('</svg>');
                
                console.log(`✅ ÉXITO: ${path}`);
                console.log(`   - Status: ${response.status}`);
                console.log(`   - Tamaño: ${text.length} caracteres`);
                console.log(`   - Content-Type: ${result.contentType}`);
                console.log(`   - SVG válido: ${result.hasContent ? 'Sí' : 'No'}`);
                
                if (result.hasContent) {
                    // Verificar si contiene los símbolos esperados
                    const parser = new DOMParser();
                    const svgDoc = parser.parseFromString(text, 'image/svg+xml');
                    const expectedSymbols = ['footprinting-process-flow', 'methodology-diagram', 'tools-comparison'];
                    result.symbolsFound = expectedSymbols.filter(id => svgDoc.querySelector(`#${id}`)).length;
                    result.totalExpected = expectedSymbols.length;
                    
                    console.log(`   - Símbolos encontrados: ${result.symbolsFound}/${result.totalExpected}`);
                    console.log(`   - Preview: ${text.substring(0, 100)}...`);
                }
            } else {
                console.log(`❌ ERROR HTTP: ${path} - Status: ${response.status}`);
            }
            
            results.push(result);
            
        } catch (error) {
            console.log(`❌ ERROR FETCH: ${path} - ${error.message}`);
            results.push({
                path: path,
                error: error.message,
                ok: false
            });
        }    }
    
    console.log('\n📊 === RESUMEN DE RESULTADOS ===');
    const successful = results.filter(r => r.ok && r.hasContent);
    const httpErrors = results.filter(r => !r.ok && !r.error);
    const fetchErrors = results.filter(r => r.error);
    
    console.log(`✅ Rutas exitosas: ${successful.length}/${results.length}`);
    console.log(`❌ Errores HTTP: ${httpErrors.length}/${results.length}`);
    console.log(`❌ Errores de conexión: ${fetchErrors.length}/${results.length}`);
    
    if (successful.length > 0) {
        console.log('\n🎯 RUTAS QUE FUNCIONAN:');
        successful.forEach(result => {
            console.log(`   ✓ ${result.path}`);
            console.log(`     - HTTP ${result.status}, ${result.size} chars`);
            console.log(`     - Símbolos: ${result.symbolsFound}/${result.totalExpected}`);
        });
        
        console.log('\n💡 RECOMENDACIÓN: El SVG está disponible. Si los diagramas no cargan, puede ser:');
        console.log('   - Problema de timing en la inicialización');
        console.log('   - Problemas con SVGInlineInjector');
        console.log('   - Los elementos <use> no están en el DOM aún');
    } else {
        console.log('\n❌ PROBLEMA: Ninguna ruta funciona');
        console.log('💡 SOLUCIONES:');
        console.log('   1. Verificar que el servidor HTTP esté corriendo');
        console.log('   2. Verificar que el archivo diagrams.svg existe');
        console.log('   3. Revisar permisos de archivo');
        console.log('   4. Verificar la estructura de directorios');
    }
    
    console.table(results);
    return results;
};

/**
 * Ejecuta una prueba completa de todos los diagramas
 */
window.testDiagrams = function() {
    console.log('🧪 Ejecutando prueba completa de diagramas...');
    
    const results = {
        timestamp: new Date().toISOString(),
        tests: []
    };
    
    if (typeof UNIVERSAL_DIAGRAM_SYSTEM !== 'undefined') {
        UNIVERSAL_DIAGRAM_SYSTEM.diagrams.forEach(diagram => {
            const useElements = document.querySelectorAll(`use[href*="#${diagram.id}"]`);
            const svgElements = [];
            
            useElements.forEach(use => {
                const svg = use.closest('svg');
                if (svg) svgElements.push(svg);
            });
            
            const test = {
                diagramId: diagram.id,
                expectedTopic: diagram.topic,
                viewBox: diagram.viewBox,
                useElementsFound: useElements.length,
                svgElementsFound: svgElements.length,
                fixed: svgElements.filter(svg => svg.hasAttribute('data-universal-fixed')).length,
                fallback: svgElements.filter(svg => svg.hasAttribute('data-fallback-applied')).length,
                status: 'unknown'
            };
            
            // Determinar estado
            if (test.fixed > 0) {
                test.status = 'fixed';
            } else if (test.fallback > 0) {
                test.status = 'fallback';
            } else if (test.useElementsFound > 0) {
                test.status = 'pending';
            } else {
                test.status = 'not-found';
            }
            
            results.tests.push(test);
        });
        
        console.table(results.tests);
        
        // Resumen
        const summary = {
            total: results.tests.length,
            fixed: results.tests.filter(t => t.status === 'fixed').length,
            fallback: results.tests.filter(t => t.status === 'fallback').length,
            pending: results.tests.filter(t => t.status === 'pending').length,
            notFound: results.tests.filter(t => t.status === 'not-found').length
        };
        
        console.log('📊 Resumen de pruebas:', summary);
        results.summary = summary;
        
        return results;
    } else {
        console.log('Sistema de diagramas no disponible');
        return null;
    }
};

/**
 * Aplica respaldos manualmente a todos los diagramas
 */
window.forceApplyFallbacks = function() {
    console.log('🛠️ Forzando aplicación de respaldos...');
    if (typeof UNIVERSAL_DIAGRAM_SYSTEM !== 'undefined') {
        UNIVERSAL_DIAGRAM_SYSTEM.applyFallbacks();
        return 'Respaldos aplicados';
    } else {
        return 'Sistema de diagramas no disponible';
    }
};

/**
 * Reinicia completamente el sistema de diagramas
 */
window.resetDiagramSystem = function() {
    console.log('🔄 Reiniciando sistema de diagramas...');
    if (typeof UNIVERSAL_DIAGRAM_SYSTEM !== 'undefined') {
        UNIVERSAL_DIAGRAM_SYSTEM.isInitialized = false;
        UNIVERSAL_DIAGRAM_SYSTEM.isProcessing = false;
        UNIVERSAL_DIAGRAM_SYSTEM.fixAttempts = 0;
        UNIVERSAL_DIAGRAM_SYSTEM.svgCache = null;
        
        // Limpiar atributos de elementos existentes
        document.querySelectorAll('svg[data-universal-fixed]').forEach(svg => {
            svg.removeAttribute('data-universal-fixed');
        });
        document.querySelectorAll('svg[data-fallback-applied]').forEach(svg => {
            svg.removeAttribute('data-fallback-applied');
        });
        
        // Reinicializar
        setTimeout(() => UNIVERSAL_DIAGRAM_SYSTEM.init(), 500);
        
        return 'Sistema reiniciado';
    } else {
        return 'Sistema de diagramas no disponible';
    }
};

console.log('✅ Funciones de diagnóstico cargadas:');
console.log('  - forceFixDiagrams(): Fuerza corrección de diagramas');
console.log('  - getDiagramStatus(): Obtiene estado del sistema');
console.log('  - testDiagrams(): Ejecuta prueba completa');
console.log('  - testSVGLoad(): Prueba la carga de archivos SVG');
console.log('  - forceApplyFallbacks(): Aplica respaldos manualmente');
console.log('  - resetDiagramSystem(): Reinicia el sistema completo');

// ========================================
// INICIALIZACIÓN AUTOMÁTICA
// ========================================

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    console.log('🎯 DOM cargado - Inicializando módulo Footprinting');
    initializeModule();
});

// Exportar datos del módulo para uso global
window.footprintingModuleData = footprintingModuleData;
