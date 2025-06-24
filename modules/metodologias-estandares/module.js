/* ========================================
   MODULE: METODOLOGÍAS Y ESTÁNDARES PARA HACKING
   ======================================== */

// Module data based on info.md - Metodologías section
const moduleData = {
    id: 'metodologias-estandares',
    title: 'Metodologías y Estándares para Hacking',
    topics: [
        {
            id: 'osstmm',
            title: 'OSSTMM',
            duration: 90,
            completed: false,
            subtopics: [
                'Generalidades OSSTMM',
                'Alcance y Canales',
                'Índices y Vectores',
                'Búsqueda de Vulnerabilidades',
                'Escaneo de Seguridad',
                'Test de Intrusión',
                'Evaluación de Riesgo',
                'Auditoría de Seguridad',
                'Hacking Ético'
            ]
        },
        {
            id: 'owasp',
            title: 'OWASP',
            duration: 75,
            completed: false,
            subtopics: [
                'Generalidades OWASP',
                'Alcance del Testeo',
                'Principios del Testeo',
                'Técnicas de Testeo',
                'Framework de Testeo OWASP',
                'Top 10 Vulnerabilidades Web 2025'
            ]
        },
        {
            id: 'ceh',
            title: 'Certified Ethical Hacker (CEH)',
            duration: 60,
            completed: false,
            subtopics: [
                'Generalidades CEH',
                'Obtención de Información',
                'Obtención de Acceso',
                'Enumeración',
                'Escalamiento de Privilegios',
                'Reporte de Hallazgos'
            ]
        }
    ]
};

let currentTopicIndex = 0;
let moduleProgress = 0;
let startTime = null;

// ========================================
// SISTEMA UNIVERSAL DE DIAGRAMAS - METODOLOGÍAS
// ========================================

const UNIVERSAL_DIAGRAM_SYSTEM = {
    // Configuración de todos los diagramas del módulo - DEPURADO SEGÚN DISTRIBUCIÓN FINAL
    diagrams: [
        { id: 'osstmm-framework', viewBox: '0 0 900 600', topic: 1 },
        { id: 'owasp-methodology', viewBox: '0 0 850 550', topic: 2 },
        { id: 'ceh-process-flow', viewBox: '0 0 800 620', topic: 3 }
    ],
    
    // Estado del sistema
    isInitialized: false,
    fixAttempts: 0,
    maxAttempts: 5,
    isProcessing: false,
    svgCache: null,    // Inicializar sistema de diagramas - IMPLEMENTACIÓN COMPLETA BASADA EN REFERENCIA
    async init() {
        if (this.isInitialized || this.isProcessing) {
            console.log('🎯 Universal Diagram System (Metodologías): Ya inicializado o en proceso');
            return;
        }
        
        this.isProcessing = true;
        console.log('🎯 Universal Diagram System (Metodologías): Inicializando para módulo 2...');
        
        // Initialize Icon Fix System if available - con timeout
        if (window.IconFixSystem) {
            try {
                await Promise.race([
                    window.IconFixSystem.init(),
                    new Promise((_, reject) => setTimeout(() => reject(new Error('Timeout')), 3000))
                ]);
                console.log('✅ Icon Fix System inicializado desde Universal Diagram System (Metodologías)');
            } catch (error) {
                console.warn('⚠️ Icon Fix System falló:', error.message);
            }
        }
        
        // Verificar disponibilidad de archivos SVG
        await this.checkSVGAvailability();
        
        // Pre-cargar SVG content
        try {
            this.svgCache = await this.loadSVGContent();
            if (this.svgCache) {
                console.log('✅ Universal Diagram System (Metodologías): SVG content cached');
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

    // Aplicar correcciones a todos los diagramas
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
    },    // Cargar contenido del archivo SVG - IMPLEMENTACIÓN COMPLETA BASADA EN MÓDULO 1
    async loadSVGContent() {
        try {
            // Si ya tenemos el contenido cacheado, usarlo
            if (this.svgCache) {
                return this.svgCache;
            }
            
            // Múltiples rutas de búsqueda como en el módulo 1
            const svgPaths = [
                '../../assets/images/diagrams.svg',
                '../assets/images/diagrams.svg',
                './assets/images/diagrams.svg',
                'diagrams.svg'
            ];
            
            for (const path of svgPaths) {
                try {
                    const controller = new AbortController();
                    const timeoutId = setTimeout(() => controller.abort(), 10000);
                    
                    const response = await fetch(path, { signal: controller.signal });
                    clearTimeout(timeoutId);
                    
                    if (!response.ok) continue;
                    
                    const svgText = await response.text();
                    const parser = new DOMParser();
                    const svgDoc = parser.parseFromString(svgText, 'image/svg+xml');
                    
                    // Verificar que el SVG se parseó correctamente
                    if (svgDoc.documentElement.nodeName === 'parsererror') {
                        throw new Error('Error parseando SVG');
                    }
                    
                    // Cachear el resultado
                    this.svgCache = svgDoc;
                    console.log(`✅ SVG cargado desde: ${path}`);
                    return svgDoc;
                    
                } catch (error) {
                    console.warn(`⚠️ Error cargando SVG desde ${path}:`, error);
                    continue;
                }
            }
            
            console.warn('⚠️ No se pudo cargar SVG desde ninguna ruta');
            return null;
            
        } catch (error) {
            console.warn('⚠️ Universal Diagram System: Error crítico cargando SVG:', error);
            return null;
        }
    },

    // Procesar todos los diagramas
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

    // Aplicar respaldos si falla la carga principal
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
            'osstmm-framework': this.generateOsstmmFallback(),
            'owasp-methodology': this.generateOwaspFallback(),
            'ceh-process-flow': this.generateCehFallback()
        };
        
        return fallbacks[diagram.id] || this.generateGenericFallback(diagram.id);
    },
    
    // Respaldo para OSSTMM Framework - IMPLEMENTACIÓN COMPLETA
    generateOsstmmFallback() {
        return `
            <defs>
                <linearGradient id="osstmmGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#28a745;stop-opacity:1" />
                    <stop offset="50%" style="stop-color:#20c997;stop-opacity:1" />
                    <stop offset="100%" style="stop-color:#17a2b8;stop-opacity:1" />
                </linearGradient>
                <filter id="osstmmShadow">
                    <feDropShadow dx="3" dy="3" stdDeviation="3" flood-opacity="0.3"/>
                </filter>
            </defs>
            
            <rect width="900" height="650" fill="#f8f9fa" stroke="#dee2e6" stroke-width="3" rx="15"/>
            
            <!-- Título Principal -->
            <text x="450" y="40" text-anchor="middle" font-size="28" font-weight="bold" fill="#28a745" font-family="Arial, sans-serif">Framework OSSTMM v3</text>
            <text x="450" y="65" text-anchor="middle" font-size="16" fill="#6c757d" font-family="Arial, sans-serif">Open Source Security Testing Methodology Manual</text>
            <line x1="150" y1="75" x2="750" y2="75" stroke="#28a745" stroke-width="3"/>
            
            <!-- Componentes Principales -->
            <rect x="50" y="100" width="180" height="120" rx="15" fill="#28a745" opacity="0.9" stroke="#1e7e34" stroke-width="3" filter="url(#osstmmShadow)"/>
            <text x="140" y="130" text-anchor="middle" font-size="16" font-weight="bold" fill="white" font-family="Arial, sans-serif">ALCANCE</text>
            <text x="60" y="155" font-size="12" fill="white" font-family="Arial, sans-serif">• Definir objetivos</text>
            <text x="60" y="175" font-size="12" fill="white" font-family="Arial, sans-serif">• Recolección datos</text>
            <text x="60" y="195" font-size="12" fill="white" font-family="Arial, sans-serif">• Mapeo de activos</text>
            <text x="60" y="215" font-size="12" fill="white" font-family="Arial, sans-serif">• Identificar límites</text>
            
            <rect x="260" y="100" width="180" height="120" rx="15" fill="#17a2b8" opacity="0.9" stroke="#138496" stroke-width="3" filter="url(#osstmmShadow)"/>
            <text x="350" y="130" text-anchor="middle" font-size="16" font-weight="bold" fill="white" font-family="Arial, sans-serif">CANAL</text>
            <text x="270" y="155" font-size="12" fill="white" font-family="Arial, sans-serif">• Humano</text>
            <text x="270" y="175" font-size="12" fill="white" font-family="Arial, sans-serif">• Físico</text>
            <text x="270" y="195" font-size="12" fill="white" font-family="Arial, sans-serif">• Inalámbrico</text>
            <text x="270" y="215" font-size="12" fill="white" font-family="Arial, sans-serif">• Telecomunicaciones</text>
            
            <rect x="470" y="100" width="180" height="120" rx="15" fill="#ffc107" opacity="0.9" stroke="#e0a800" stroke-width="3" filter="url(#osstmmShadow)"/>
            <text x="560" y="130" text-anchor="middle" font-size="16" font-weight="bold" fill="white" font-family="Arial, sans-serif">ÍNDICE</text>
            <text x="480" y="155" font-size="12" fill="white" font-family="Arial, sans-serif">• Clasificar bienes</text>
            <text x="480" y="175" font-size="12" fill="white" font-family="Arial, sans-serif">• Valorar criticidad</text>
            <text x="480" y="195" font-size="12" fill="white" font-family="Arial, sans-serif">• Dependencias</text>
            <text x="480" y="215" font-size="12" fill="white" font-family="Arial, sans-serif">• Interacciones</text>
            
            <rect x="680" y="100" width="180" height="120" rx="15" fill="#dc3545" opacity="0.9" stroke="#c82333" stroke-width="3" filter="url(#osstmmShadow)"/>
            <text x="770" y="130" text-anchor="middle" font-size="16" font-weight="bold" fill="white" font-family="Arial, sans-serif">VECTOR</text>
            <text x="690" y="155" font-size="12" fill="white" font-family="Arial, sans-serif">• Dirección ataque</text>
            <text x="690" y="175" font-size="12" fill="white" font-family="Arial, sans-serif">• Punto de entrada</text>
            <text x="690" y="195" font-size="12" fill="white" font-family="Arial, sans-serif">• Superficie</text>
            <text x="690" y="215" font-size="12" fill="white" font-family="Arial, sans-serif">• Vulnerabilidades</text>
            
            <!-- Metodología de Testing -->
            <rect x="50" y="250" width="800" height="180" rx="15" fill="#6f42c1" opacity="0.9" stroke="#5a2d91" stroke-width="3" filter="url(#osstmmShadow)"/>
            <text x="450" y="280" text-anchor="middle" font-size="20" font-weight="bold" fill="white" font-family="Arial, sans-serif">METODOLOGÍA DE TESTING OSSTMM</text>
            
            <!-- Fases del Framework -->
            <g fill="white" font-family="Arial, sans-serif" font-size="12">
                <text x="70" y="310" font-weight="bold">1. REGULACIÓN:</text>
                <text x="85" y="330">• Políticas de seguridad</text>
                <text x="85" y="345">• Cumplimiento normativo</text>
                <text x="85" y="360">• Controles legales</text>
                
                <text x="250" y="310" font-weight="bold">2. DEFINICIÓN:</text>
                <text x="265" y="330">• Alcance del testing</text>
                <text x="265" y="345">• Objetivos específicos</text>
                <text x="265" y="360">• Recursos necesarios</text>
                
                <text x="430" y="310" font-weight="bold">3. INFORMACIÓN:</text>
                <text x="445" y="330">• Reconocimiento pasivo</text>
                <text x="445" y="345">• Footprinting</text>
                <text x="445" y="360">• Análisis de datos</text>
                
                <text x="610" y="310" font-weight="bold">4. INTERACCIÓN:</text>
                <text x="625" y="330">• Testing activo</text>
                <text x="625" y="345">• Verificación controles</text>
                <text x="625" y="360">• Validación seguridad</text>
                
                <text x="250" y="390" font-weight="bold">5. INTERVENCIÓN:</text>
                <text x="265" y="410">• Pruebas de penetración controladas</text>
                <text x="265" y="425">• Evaluación de respuesta ante incidentes</text>
            </g>
            
            <!-- Métricas de Seguridad -->
            <rect x="50" y="450" width="800" height="150" rx="15" fill="#fd7e14" opacity="0.9" stroke="#e8590c" stroke-width="3" filter="url(#osstmmShadow)"/>
            <text x="450" y="480" text-anchor="middle" font-size="18" font-weight="bold" fill="white" font-family="Arial, sans-serif">MÉTRICAS Y MEDICIÓN DE SEGURIDAD</text>
            
            <g fill="white" font-family="Arial, sans-serif" font-size="12">
                <text x="70" y="510" font-weight="bold">RAV (Risk Assessment Values):</text>
                <text x="85" y="530">• Porosity - Porosidad del sistema</text>
                <text x="85" y="545">• Luminosity - Visibilidad de activos</text>
                <text x="85" y="560">• Limitation - Limitaciones de acceso</text>
                <text x="85" y="575">• Controls - Controles implementados</text>
                
                <text x="450" y="510" font-weight="bold">Factores de Medición:</text>
                <text x="465" y="530">• Superficie de ataque expuesta</text>
                <text x="465" y="545">• Nivel de interacción necesario</text>
                <text x="465" y="560">• Efectividad de controles</text>
                <text x="465" y="575">• Tiempo de respuesta ante amenazas</text>
            </g>
            
            <!-- Conexiones visuales -->
            <g stroke="#ffffff" stroke-width="2" fill="none" opacity="0.4">
                <line x1="140" y1="220" x2="450" y2="250" stroke-dasharray="5,3"/>
                <line x1="350" y1="220" x2="450" y2="250" stroke-dasharray="5,3"/>
                <line x1="560" y1="220" x2="450" y2="250" stroke-dasharray="5,3"/>
                <line x1="770" y1="220" x2="450" y2="250" stroke-dasharray="5,3"/>
                <line x1="450" y1="430" x2="450" y2="450" stroke-dasharray="5,3"/>
            </g>        `;
    },
    
    // Respaldo para OWASP Methodology - IMPLEMENTACIÓN COMPLETA
    generateOwaspFallback() {
        return `
            <defs>
                <linearGradient id="owaspGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#FF6600;stop-opacity:1" />
                    <stop offset="50%" style="stop-color:#e55a00;stop-opacity:1" />
                    <stop offset="100%" style="stop-color:#cc4f00;stop-opacity:1" />
                </linearGradient>
                <filter id="owaspShadow">
                    <feDropShadow dx="3" dy="3" stdDeviation="3" flood-opacity="0.3"/>
                </filter>
            </defs>
            
            <rect width="850" height="550" fill="#f8f9fa" stroke="#dee2e6" stroke-width="3" rx="15"/>
            
            <!-- Título -->
            <text x="425" y="40" text-anchor="middle" font-size="28" font-weight="bold" fill="#FF6600" font-family="Arial, sans-serif">OWASP Testing Framework</text>
            <text x="425" y="65" text-anchor="middle" font-size="16" fill="#6c757d" font-family="Arial, sans-serif">Open Web Application Security Project</text>
            <line x1="125" y1="75" x2="725" y2="75" stroke="#FF6600" stroke-width="3"/>
            
            <!-- Generalidades -->
            <rect x="60" y="100" width="170" height="150" rx="10" fill="#FF6600" opacity="0.9" stroke="#e55a00" stroke-width="3" filter="url(#owaspShadow)"/>
            <text x="145" y="130" text-anchor="middle" font-size="16" font-weight="bold" fill="white" font-family="Arial, sans-serif">GENERALIDADES</text>
            <text x="75" y="155" font-size="11" fill="white" font-family="Arial, sans-serif">• Alcance del testeo</text>
            <text x="75" y="175" font-size="11" fill="white" font-family="Arial, sans-serif">• Principios fundamentales</text>
            <text x="75" y="195" font-size="11" fill="white" font-family="Arial, sans-serif">• Técnicas de testeo</text>
            <text x="75" y="215" font-size="11" fill="white" font-family="Arial, sans-serif">• Framework estructurado</text>
            <text x="75" y="235" font-size="11" fill="white" font-family="Arial, sans-serif">• Metodología repetible</text>
            
            <!-- Top 10 -->
            <rect x="260" y="100" width="170" height="150" rx="10" fill="#dc3545" opacity="0.9" stroke="#c82333" stroke-width="3" filter="url(#owaspShadow)"/>
            <text x="345" y="130" text-anchor="middle" font-size="16" font-weight="bold" fill="white" font-family="Arial, sans-serif">TOP 10 - 2025</text>
            <text x="275" y="155" font-size="11" fill="white" font-family="Arial, sans-serif">• Broken Access Control</text>
            <text x="275" y="175" font-size="11" fill="white" font-family="Arial, sans-serif">• Cryptographic Failures</text>
            <text x="275" y="195" font-size="11" fill="white" font-family="Arial, sans-serif">• Injection</text>
            <text x="275" y="215" font-size="11" fill="white" font-family="Arial, sans-serif">• Insecure Design</text>
            <text x="275" y="235" font-size="11" fill="white" font-family="Arial, sans-serif">• Security Misconfiguration</text>
            
            <!-- Framework -->
            <rect x="460" y="100" width="170" height="150" rx="10" fill="#28a745" opacity="0.9" stroke="#1e7e34" stroke-width="3" filter="url(#owaspShadow)"/>
            <text x="545" y="130" text-anchor="middle" font-size="16" font-weight="bold" fill="white" font-family="Arial, sans-serif">FRAMEWORK</text>
            <text x="475" y="155" font-size="11" fill="white" font-family="Arial, sans-serif">• Fase de Información</text>
            <text x="475" y="175" font-size="11" fill="white" font-family="Arial, sans-serif">• Configuración y Deploy</text>
            <text x="475" y="195" font-size="11" fill="white" font-family="Arial, sans-serif">• Gestión de Identidad</text>
            <text x="475" y="215" font-size="11" fill="white" font-family="Arial, sans-serif">• Autenticación</text>
            <text x="475" y="235" font-size="11" fill="white" font-family="Arial, sans-serif">• Autorización</text>
            
            <!-- Testing Categories -->
            <rect x="660" y="100" width="170" height="150" rx="10" fill="#6f42c1" opacity="0.9" stroke="#5a2d91" stroke-width="3" filter="url(#owaspShadow)"/>
            <text x="745" y="130" text-anchor="middle" font-size="16" font-weight="bold" fill="white" font-family="Arial, sans-serif">CATEGORÍAS</text>
            <text x="675" y="155" font-size="11" fill="white" font-family="Arial, sans-serif">• Gestión de Sesiones</text>
            <text x="675" y="175" font-size="11" fill="white" font-family="Arial, sans-serif">• Validación de Entrada</text>
            <text x="675" y="195" font-size="11" fill="white" font-family="Arial, sans-serif">• Manejo de Errores</text>
            <text x="675" y="215" font-size="11" fill="white" font-family="Arial, sans-serif">• Criptografía</text>
            <text x="675" y="235" font-size="11" fill="white" font-family="Arial, sans-serif">• Lógica de Negocio</text>
            
            <!-- Proceso de Testing -->
            <rect x="60" y="280" width="770" height="200" rx="10" fill="#007bff" opacity="0.9" stroke="#0056b3" stroke-width="3" filter="url(#owaspShadow)"/>
            <text x="445" y="310" text-anchor="middle" font-size="20" font-weight="bold" fill="white" font-family="Arial, sans-serif">PROCESO DE TESTING OWASP</text>
            
            <!-- Fases del testing -->
            <g fill="white" font-family="Arial, sans-serif" font-size="12">
                <text x="80" y="340">1. RECONOCIMIENTO:</text>
                <text x="100" y="360">• Recolección de información</text>
                <text x="100" y="375">• Fingerprinting de aplicación</text>
                <text x="100" y="390">• Mapeo de arquitectura</text>
                
                <text x="280" y="340">2. CONFIGURACIÓN:</text>
                <text x="300" y="360">• Análisis de infraestructura</text>
                <text x="300" y="375">• Revisión de configuraciones</text>
                <text x="300" y="390">• Gestión de aplicaciones</text>
                
                <text x="480" y="340">3. TESTING:</text>
                <text x="500" y="360">• Pruebas de autenticación</text>
                <text x="500" y="375">• Validación de entrada</text>
                <text x="500" y="390">• Gestión de sesiones</text>
                
                <text x="680" y="340">4. REPORTE:</text>
                <text x="700" y="360">• Clasificación de riesgos</text>
                <text x="700" y="375">• Evidencias técnicas</text>
                <text x="700" y="390">• Recomendaciones</text>
                
                <text x="280" y="430">5. VALIDACIÓN:</text>
                <text x="300" y="450">• Verificar correcciones aplicadas</text>
                <text x="300" y="465">• Re-testing de vulnerabilidades críticas</text>
            </g>
            
            <!-- Conexiones -->
            <g stroke="#ffffff" stroke-width="2" fill="none" opacity="0.6">
                <line x1="230" y1="175" x2="260" y2="175" stroke-dasharray="5,3"/>
                <line x1="430" y1="175" x2="460" y2="175" stroke-dasharray="5,3"/>
                <line x1="630" y1="175" x2="660" y2="175" stroke-dasharray="5,3"/>
                <line x1="145" y1="250" x2="445" y2="280" stroke-dasharray="5,3"/>
                <line x1="345" y1="250" x2="445" y2="280" stroke-dasharray="5,3"/>
                <line x1="545" y1="250" x2="445" y2="280" stroke-dasharray="5,3"/>
                <line x1="745" y1="250" x2="445" y2="280" stroke-dasharray="5,3"/>
            </g>        `;
    },
    
    // Respaldo para CEH Process Flow - IMPLEMENTACIÓN COMPLETA
    generateCehFallback() {
        return `
            <defs>
                <linearGradient id="cehGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#28a745;stop-opacity:1" />
                    <stop offset="50%" style="stop-color:#1e7e34;stop-opacity:1" />
                    <stop offset="100%" style="stop-color:#155724;stop-opacity:1" />
                </linearGradient>
                <filter id="cehShadow">
                    <feDropShadow dx="3" dy="3" stdDeviation="3" flood-opacity="0.3"/>
                </filter>
            </defs>
            
            <rect width="800" height="620" fill="#f8f9fa" stroke="#dee2e6" stroke-width="3" rx="15"/>
            
            <!-- Título -->
            <text x="400" y="40" text-anchor="middle" font-size="28" font-weight="bold" fill="#28a745" font-family="Arial, sans-serif">CEH Process Flow</text>
            <text x="400" y="65" text-anchor="middle" font-size="16" fill="#6c757d" font-family="Arial, sans-serif">Certified Ethical Hacker Methodology</text>
            <line x1="100" y1="75" x2="700" y2="75" stroke="#28a745" stroke-width="3"/>
            
            <!-- Fase 1: Obtención de Información -->
            <rect x="50" y="100" width="340" height="100" rx="10" fill="#28a745" opacity="0.9" stroke="#1e7e34" stroke-width="3" filter="url(#cehShadow)"/>
            <text x="220" y="130" text-anchor="middle" font-size="18" font-weight="bold" fill="white" font-family="Arial, sans-serif">1. OBTENCIÓN DE INFORMACIÓN</text>
            <text x="70" y="155" font-size="12" fill="white" font-family="Arial, sans-serif">• Reconocimiento pasivo y activo</text>
            <text x="70" y="175" font-size="12" fill="white" font-family="Arial, sans-serif">• Footprinting y fingerprinting</text>
            <text x="70" y="190" font-size="12" fill="white" font-family="Arial, sans-serif">• Recolección de información pública</text>
            
            <!-- Fase 2: Obtención de Acceso -->
            <rect x="410" y="100" width="340" height="100" rx="10" fill="#007bff" opacity="0.9" stroke="#0056b3" stroke-width="3" filter="url(#cehShadow)"/>
            <text x="580" y="130" text-anchor="middle" font-size="18" font-weight="bold" fill="white" font-family="Arial, sans-serif">2. OBTENCIÓN DE ACCESO</text>
            <text x="430" y="155" font-size="12" fill="white" font-family="Arial, sans-serif">• Explotación de vulnerabilidades</text>
            <text x="430" y="175" font-size="12" fill="white" font-family="Arial, sans-serif">• Técnicas de penetración</text>
            <text x="430" y="190" font-size="12" fill="white" font-family="Arial, sans-serif">• Bypass de controles de seguridad</text>
            
            <!-- Fase 3: Enumeración -->
            <rect x="50" y="230" width="340" height="100" rx="10" fill="#FF6600" opacity="0.9" stroke="#e55a00" stroke-width="3" filter="url(#cehShadow)"/>
            <text x="220" y="260" text-anchor="middle" font-size="18" font-weight="bold" fill="white" font-family="Arial, sans-serif">3. ENUMERACIÓN</text>
            <text x="70" y="285" font-size="12" fill="white" font-family="Arial, sans-serif">• Extracción de información del sistema</text>
            <text x="70" y="305" font-size="12" fill="white" font-family="Arial, sans-serif">• Identificación de usuarios y recursos</text>
            <text x="70" y="320" font-size="12" fill="white" font-family="Arial, sans-serif">• Análisis de servicios y aplicaciones</text>
            
            <!-- Fase 4: Escalamiento de Privilegios -->
            <rect x="410" y="230" width="340" height="100" rx="10" fill="#dc3545" opacity="0.9" stroke="#c82333" stroke-width="3" filter="url(#cehShadow)"/>
            <text x="580" y="260" text-anchor="middle" font-size="18" font-weight="bold" fill="white" font-family="Arial, sans-serif">4. ESCALAMIENTO PRIVILEGIOS</text>
            <text x="430" y="285" font-size="12" fill="white" font-family="Arial, sans-serif">• Elevación de permisos</text>
            <text x="430" y="305" font-size="12" fill="white" font-family="Arial, sans-serif">• Explotación de configuraciones débiles</text>
            <text x="430" y="320" font-size="12" fill="white" font-family="Arial, sans-serif">• Aprovechamiento de vulnerabilidades locales</text>
            
            <!-- Fase 5: Reporte -->
            <rect x="230" y="360" width="340" height="120" rx="10" fill="#6f42c1" opacity="0.9" stroke="#5a2d91" stroke-width="3" filter="url(#cehShadow)"/>
            <text x="400" y="390" text-anchor="middle" font-size="18" font-weight="bold" fill="white" font-family="Arial, sans-serif">5. REPORTE</text>
            <text x="250" y="415" font-size="12" fill="white" font-family="Arial, sans-serif">• Documentación de hallazgos</text>
            <text x="250" y="435" font-size="12" fill="white" font-family="Arial, sans-serif">• Clasificación de riesgos y vulnerabilidades</text>
            <text x="250" y="455" font-size="12" fill="white" font-family="Arial, sans-serif">• Recomendaciones de remediación</text>
            <text x="250" y="470" font-size="12" fill="white" font-family="Arial, sans-serif">• Plan de implementación de controles</text>
            
            <!-- Flujo del proceso -->
            <g stroke="#2c3e50" stroke-width="3" fill="none" marker-end="url(#arrowhead)">
                <defs>
                    <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                        <polygon points="0 0, 10 3.5, 0 7" fill="#2c3e50" />
                    </marker>
                </defs>
                
                <!-- Conexiones entre fases -->
                <line x1="390" y1="150" x2="410" y2="150"/>
                <line x1="220" y1="200" x2="220" y2="230"/>
                <line x1="580" y1="200" x2="580" y2="230"/>
                <line x1="390" y1="280" x2="410" y2="280"/>
                <line x1="220" y1="330" x2="230" y2="360"/>
                <line x1="580" y1="330" x2="570" y2="360"/>
            </g>
            
            <!-- Metodología CEH -->
            <rect x="50" y="510" width="700" height="80" rx="10" fill="#17a2b8" opacity="0.9" stroke="#138496" stroke-width="3" filter="url(#cehShadow)"/>
            <text x="400" y="535" text-anchor="middle" font-size="16" font-weight="bold" fill="white" font-family="Arial, sans-serif">PRINCIPIOS FUNDAMENTALES CEH</text>
            <text x="70" y="555" font-size="12" fill="white" font-family="Arial, sans-serif">✓ Metodología estructurada y repetible</text>
            <text x="70" y="575" font-size="12" fill="white" font-family="Arial, sans-serif">✓ Enfoque ético y legal en todas las actividades</text>
            <text x="400" y="555" font-size="12" fill="white" font-family="Arial, sans-serif">✓ Documentación exhaustiva del proceso</text>
            <text x="400" y="575" font-size="12" fill="white" font-family="Arial, sans-serif">✓ Validación continua de hallazgos</text>
        `;
    },
    
    // Respaldo genérico
    generateGenericFallback(diagramId) {
        return `
            <rect width="100%" height="100%" fill="#f8f9fa" stroke="#dee2e6" stroke-width="2" rx="10"/>
            <text x="50%" y="45%" dominant-baseline="middle" text-anchor="middle" font-size="18" fill="#dc3545" font-family="Arial, sans-serif">
                Error al cargar diagrama
            </text>
            <text x="50%" y="55%" dominant-baseline="middle" text-anchor="middle" font-size="14" fill="#6c757d" font-family="Arial, sans-serif">
                ${diagramId}
            </text>
        `;
    },

    // Función específica para forzar la carga de diagramas del módulo de metodologías
    async forceDiagramLoad() {
        console.log('🔄 Forzando carga de diagramas de metodologías...');
        
        try {
            // Buscar todos los diagramas en la página
            const diagramContainers = document.querySelectorAll('svg[viewBox]');
            console.log(`📊 Encontrados ${diagramContainers.length} contenedores de diagramas`);
            
            diagramContainers.forEach((svg, index) => {
                const useElement = svg.querySelector('use[href*="diagrams.svg"]');
                if (useElement) {
                    const href = useElement.getAttribute('href');
                    console.log(`🔧 Procesando diagrama ${index + 1}: ${href}`);
                    
                    // Forzar recarga del diagrama
                    useElement.setAttribute('href', href + '?v=' + Date.now());
                    
                    // Aplicar estilos de respaldo si es necesario
                    if (!svg.getAttribute('data-diagram-fixed')) {
                        svg.style.width = '100%';
                        svg.style.height = 'auto';
                        svg.style.maxHeight = '600px';
                        svg.setAttribute('data-diagram-fixed', 'true');
                    }
                }
            });
            
            // Verificar si los diagramas se cargaron
            setTimeout(() => {
                this.verifyDiagramsLoaded();
            }, 1000);
            
        } catch (error) {
            console.error('❌ Error forzando carga de diagramas:', error);
        }
    },

    // Verificar que los diagramas se hayan cargado correctamente
    verifyDiagramsLoaded() {
        console.log('🔍 Verificando carga de diagramas...');
        
        const diagramContainers = document.querySelectorAll('svg[viewBox] use[href*="diagrams.svg"]');
        let loadedCount = 0;
        let failedCount = 0;
        
        diagramContainers.forEach((useElement, index) => {
            const svg = useElement.closest('svg');
            const href = useElement.getAttribute('href');
            
            // Verificar si el contenido está presente
            if (svg && svg.getBBox) {
                try {
                    const bbox = svg.getBBox();
                    if (bbox.width > 0 && bbox.height > 0) {
                        loadedCount++;
                        console.log(`✅ Diagrama ${index + 1} cargado correctamente: ${href}`);
                    } else {
                        failedCount++;
                        console.warn(`⚠️ Diagrama ${index + 1} sin contenido: ${href}`);
                        this.applyFallbackDiagram(svg, href);
                    }
                } catch (error) {
                    failedCount++;
                    console.warn(`❌ Error verificando diagrama ${index + 1}: ${href}`, error);
                    this.applyFallbackDiagram(svg, href);
                }
            }
        });
        
        console.log(`📊 Resumen: ${loadedCount} diagramas cargados, ${failedCount} con problemas`);
        
        if (failedCount > 0) {
            setTimeout(() => {
                console.log('🔄 Reintentando carga de diagramas fallidos...');
                this.forceDiagramLoad();
            }, 2000);
        }
    },

    // Aplicar diagrama de respaldo
    applyFallbackDiagram(svg, originalHref) {
        console.log('🆘 Aplicando diagrama de respaldo para:', originalHref);
        
        // Crear contenido de respaldo visual
        const width = svg.getAttribute('width') || '100%';
        const height = svg.getAttribute('height') || 'auto';
        const viewBox = svg.getAttribute('viewBox') || '0 0 800 400';
        
        const fallbackContent = `
            <rect width="100%" height="100%" fill="#f8f9fa" stroke="#dee2e6" stroke-width="2" rx="10"/>
            <text x="50%" y="40%" text-anchor="middle" font-size="18" font-weight="bold" fill="#6c757d">
                Diagrama de Metodología
            </text>
            <text x="50%" y="50%" text-anchor="middle" font-size="14" fill="#adb5bd">
                ${originalHref.includes('osstmm') ? 'OSSTMM Framework' : 
                  originalHref.includes('owasp') ? 'OWASP Methodology' :
                  originalHref.includes('ceh') ? 'CEH Process Flow' : 'Methodology Diagram'}
            </text>
            <text x="50%" y="60%" text-anchor="middle" font-size="12" fill="#adb5bd">
                Cargando contenido del diagrama...
            </text>
            <circle cx="50%" cy="70%" r="8" fill="#007bff">
                <animate attributeName="opacity" values="1;0;1" dur="1.5s" repeatCount="indefinite"/>
            </circle>
        `;
        
        svg.innerHTML = fallbackContent;
        svg.setAttribute('data-fallback-applied', 'true');
    },

    // Verificar disponibilidad de archivos SVG - BASADO EN REFERENCIA
    async checkSVGAvailability() {
        const svgPaths = [
            '../../assets/images/diagrams.svg',
            '../assets/images/diagrams.svg',
            './assets/images/diagrams.svg',
            'diagrams.svg'
        ];
        
        for (const path of svgPaths) {
            try {
                const response = await fetch(path, { method: 'HEAD' });
                if (response.ok) {
                    console.log(`✅ SVG encontrado en: ${path}`);
                    this.svgPath = path;
                    return;
                }
            } catch (error) {
                console.log(`❌ SVG no encontrado en: ${path}`);
            }
        }
        console.warn('⚠️ No se encontró archivo diagrams.svg en ninguna ruta, usando fallbacks');
        this.svgPath = null;
    },
};


// ========================================
// INITIALIZATION AND PROGRESS
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    initializeModule();
    UNIVERSAL_DIAGRAM_SYSTEM.init();
});

function initializeModule() {
    startTime = new Date();
    loadProgress();
    populateSidebar();
    updateProgressUI();
    
    // Initialize first topic button
    const firstTopicButton = document.querySelector('.welcome-content .btn-sena-primary');
    if (firstTopicButton) {
        firstTopicButton.onclick = () => loadTopic(0);
    }
    
    console.log('🎯 Módulo Metodologías y Estándares inicializado');
}

function loadFirstTopic() {
    loadTopic(0);
}

function loadProgress() {
    try {
        const savedProgress = localStorage.getItem(`module-progress-${moduleData.id}`);
        if (savedProgress) {
            const progress = JSON.parse(savedProgress);
            // Update topic completion status
            moduleData.topics.forEach(topic => {
                if (progress[topic.id]) {
                    topic.completed = true;
                }
            });
            console.log('📊 Progreso cargado:', progress);
        }
    } catch (error) {
        console.warn('⚠️ Error cargando progreso:', error);
    }
}

function calculateProgress() {
    const completedCount = moduleData.topics.filter(t => t.completed).length;
    const totalTopics = moduleData.topics.length;
    return totalTopics > 0 ? (completedCount / totalTopics) * 100 : 0;
}

function updateProgressDisplay() {
    const progressPercentage = calculateProgress();
    const completedCount = moduleData.topics.filter(t => t.completed).length;
    const totalTopics = moduleData.topics.length;

    // Update progress bars
    const elements = {
        progressBar: document.getElementById('module-progress-bar'),
        progressText: document.getElementById('module-progress-text'),
        sidebarProgress: document.getElementById('sidebar-progress'),
        sidebarProgressText: document.getElementById('sidebar-progress-text')
    };

    if (elements.progressBar) elements.progressBar.style.width = `${progressPercentage}%`;
    if (elements.progressText) elements.progressText.textContent = `${Math.round(progressPercentage)}%`;
    if (elements.sidebarProgress) elements.sidebarProgress.style.width = `${progressPercentage}%`;
    if (elements.sidebarProgressText) {
        elements.sidebarProgressText.textContent = `${completedCount} de ${totalTopics} temas completados`;
    }
}

// Update Progress UI (wrapper function for better consistency)
function updateProgressUI() {
    console.log('📊 Actualizando UI de progreso...');
    
    // Call the existing function
    updateProgressDisplay();
    
    // Additional UI updates
    const completionPercentage = getModuleCompletionPercentage();
    const progress = getProgress();
    
    // Update progress bar if it exists
    const progressBar = document.getElementById('module-progress-bar');
    if (progressBar) {
        progressBar.style.width = `${completionPercentage}%`;
        progressBar.setAttribute('aria-valuenow', completionPercentage);
    }
    
    // Update progress text if it exists
    const progressText = document.getElementById('module-progress-text');
    if (progressText) {
        progressText.textContent = `${completionPercentage}%`;
    }
    
    // Update sidebar navigation states
    populateSidebar();
    
    // Update topic completion states in navigation
    const topicItems = document.querySelectorAll('.nav-item, .topic-item');
    topicItems.forEach((item, index) => {
        const topicData = moduleData.topics[index];
        if (topicData) {
            const isCompleted = progress[topicData.id];
            const isActive = index === currentTopicIndex;
            
            item.classList.toggle('completed', isCompleted);
            item.classList.toggle('active', isActive);
            
            // Update icon
            const icon = item.querySelector('i');
            if (icon) {
                icon.className = isCompleted ? 'fas fa-check-circle text-success' : 
                                isActive ? 'fas fa-play-circle text-primary' : 
                                'far fa-circle text-muted';
            }
        }
    });
    
    console.log(`✅ UI de progreso actualizada: ${completionPercentage}%`);
}

function startModule() {
    loadTopicById(moduleData.topics[0].id);
}

function populateSidebar() {
    const navContainer = document.getElementById('module-nav');
    if (!navContainer) return;

    let navHTML = '';
    moduleData.topics.forEach((topic) => {
        const progress = getProgress();
        const isCompleted = progress[topic.id];
        const isActive = topic.id === (moduleData.topics[currentTopicIndex] ? moduleData.topics[currentTopicIndex].id : '');
        
        navHTML += `
            <a href="#" class="nav-item ${isActive ? 'active' : ''} ${isCompleted ? 'completed' : ''}" onclick="event.preventDefault(); loadTopicById('${topic.id}')">
                <div class="nav-item-title-container">
                    <i class="fas fa-chevron-right nav-item-icon"></i>
                    <span class="nav-item-title">${topic.title}</span>
                </div>
                <div class="progress-indicator">
                    <i class="fas ${isCompleted ? 'fa-check-circle' : 'fa-circle'}"></i>
                </div>
            </a>
        `;
    });
    navContainer.innerHTML = navHTML;
}

function getProgress() {
    try {
        const progress = localStorage.getItem(`module-progress-${moduleData.id}`);
        return progress ? JSON.parse(progress) : {};
    } catch (e) {
        console.error('Error reading progress from localStorage', e);
        return {};
    }
}

function saveProgress(progress) {
    try {
        localStorage.setItem(`module-progress-${moduleData.id}`, JSON.stringify(progress));
    } catch (e) {
        console.error('Error saving progress to localStorage', e);
    }
}

function markTopicComplete(topicIdOrIndex) {
    console.log('🎯 Marcando tema como completado:', topicIdOrIndex);
    
    let topicId;
    let topic;
    
    // Determinar si es un índice numérico o un ID string
    if (typeof topicIdOrIndex === 'number') {
        // Es un índice numérico
        if (topicIdOrIndex >= 0 && topicIdOrIndex < moduleData.topics.length) {
            topic = moduleData.topics[topicIdOrIndex];
            topicId = topic.id;
        } else {
            console.error('❌ Índice de tema inválido:', topicIdOrIndex);
            showNotification('Error: Índice de tema inválido', 'error');
            return;
        }
    } else {
        // Es un ID string
        topicId = topicIdOrIndex;
        topic = moduleData.topics.find(t => t.id === topicId);
        if (!topic) {
            console.error('❌ ID de tema inválido:', topicId);
            showNotification('Error: ID de tema inválido', 'error');
            return;
        }
    }
    
    const progress = getProgress();
    if (!progress[topicId]) {
        progress[topicId] = true;        saveProgress(progress);
        updateProgressUI();
        populateSidebar();
        
        // Mostrar notificación de éxito
        showNotification(`¡Has completado el tema "${topic.title}"! 🎉`, 'success');
        
        // Actualizar el botón visualmente
        updateTopicCompletionButton(topicId);
        
        // Auto-navegar al siguiente tema si está disponible
        const currentIndex = moduleData.topics.findIndex(t => t.id === topicId);
        if (currentIndex < moduleData.topics.length - 1) {
            setTimeout(() => {
                loadTopicById(moduleData.topics[currentIndex + 1].id);
            }, 1500);
        } else {
            showNotification('¡Felicitaciones! Has completado todo el módulo 🏆', 'success');
        }
        
        console.log('✅ Tema completado exitosamente');
    } else {
        console.log('ℹ️ El tema ya estaba completado');
        showNotification('Este tema ya está completado', 'info');
    }
}

// Función para actualizar el estado visual del botón de completado
function updateTopicCompletionButton(topicId) {
    console.log('🔄 Actualizando botón de completado para:', topicId);
    
    // Buscar el botón que corresponde a este tema
    const topicButtons = document.querySelectorAll('button[onclick*="markTopicComplete"]');
    
    topicButtons.forEach(button => {
        const onclick = button.getAttribute('onclick');
        
        // Verificar si este botón corresponde al tema completado
        let isThisTopicButton = false;
        
        if (onclick.includes(`markTopicComplete(0)`) && topicId === 'osstmm') {
            isThisTopicButton = true;
        } else if (onclick.includes(`markTopicComplete(1)`) && topicId === 'owasp') {
            isThisTopicButton = true;
        } else if (onclick.includes(`markTopicComplete(2)`) && topicId === 'ceh') {
            isThisTopicButton = true;
        } else if (onclick.includes(`'${topicId}'`) || onclick.includes(`"${topicId}"`)) {
            isThisTopicButton = true;
        }
        
        if (isThisTopicButton) {
            // Actualizar el botón a estado completado
            button.innerHTML = `
                <svg class="btn-icon me-2" width="16" height="16" viewBox="0 0 100 100">
                    <use href="../../assets/images/icons.svg#icon-check"></use>
                </svg>
                ✅ Completado
            `;
            button.classList.remove('btn-sena-primary');
            button.classList.add('btn-success');
            button.disabled = true;
            
            console.log('✅ Botón actualizado a estado completado');
        }
    });
}

// Función para mostrar notificaciones
function showNotification(message, type = 'info') {
    console.log(`📢 Notificación (${type}):`, message);
    
    // Crear elemento de notificación
    const notification = document.createElement('div');
    notification.className = `alert alert-${type === 'error' ? 'danger' : type} alert-dismissible fade show position-fixed`;
    notification.style.cssText = 'top: 80px; right: 20px; z-index: 1050; max-width: 350px; box-shadow: 0 4px 12px rgba(0,0,0,0.3);';
    
    const icon = type === 'success' ? 'fas fa-check-circle' : 
                 type === 'error' ? 'fas fa-exclamation-circle' : 
                 'fas fa-info-circle';
    
    notification.innerHTML = `
        <div class="d-flex align-items-center">
            <i class="${icon} me-2"></i>
            <div>${message}</div>
        </div>
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    `;
    
    document.body.appendChild(notification);
    
    // Auto-remover después de 5 segundos
    setTimeout(() => {
        if (notification.parentNode) {
            notification.remove();
        }
    }, 5000);
}

// ========================================
// TOPIC LOADING AND CONTENT GENERATION
// ========================================

function loadTopic(topicIndex) {
    if (topicIndex < 0 || topicIndex >= moduleData.topics.length) {
        console.warn('⚠️ Índice de tema inválido:', topicIndex);
        return;
    }

    currentTopicIndex = topicIndex;
    const topic = moduleData.topics[topicIndex];
    const contentContainer = document.getElementById('topic-content');
    
    if (!contentContainer) {
        console.error('❌ Contenedor de contenido no encontrado');
        return;
    }

    console.log(`📖 Cargando tema: ${topic.title}`);

    let content = '';
    switch (topic.id) {
        case 'osstmm':
            content = createOsstmmContent(topic);
            break;
        case 'owasp':
            content = createOwaspContent(topic);
            break;
        case 'ceh':
            content = createCehContent(topic);
            break;
        default:
            content = createDefaultContent(topic);
    }

    contentContainer.innerHTML = content;
    populateSidebar();
      // Apply diagrams fixes after content load
    setTimeout(() => {
        UNIVERSAL_DIAGRAM_SYSTEM.applyFixes();
        UNIVERSAL_DIAGRAM_SYSTEM.forceDiagramLoad();
        setupQuizInteractions(topic.id);
        setupCaseStudyInteractions();
    }, 200);
    
    // Scroll to top
    contentContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
    
    console.log(`✅ Tema cargado: ${topic.id}`);
}

// Load topic by ID (called from navigation)
function loadTopicById(topicId) {
    const topicIndex = moduleData.topics.findIndex(t => t.id === topicId);
    if (topicIndex !== -1) {
        loadTopic(topicIndex);
    } else {
        console.warn('⚠️ Tema no encontrado:', topicId);
    }
}

// Load topic content (alternative method for better modularity)
function loadTopicContent(topic) {
    console.log(`📖 Generando contenido para tema: ${topic.id}`);
    
    const contentContainer = document.getElementById('topic-content');
    if (!contentContainer) {
        console.error('❌ Contenedor de contenido no encontrado');
        return;
    }
    
    // Create topic content based on topic ID
    let content = '';
    
    switch (topic.id) {
        case 'osstmm':
            console.log('🔧 Creando contenido OSSTMM');
            content = createOsstmmContent(topic);
            break;
        case 'owasp':
            console.log('🔧 Creando contenido OWASP');
            content = createOwaspContent(topic);
            break;
        case 'ceh':
            console.log('🔧 Creando contenido CEH');
            content = createCehContent(topic);
            break;
        default:
            console.log('🔧 Creando contenido por defecto');
            content = createDefaultContent(topic);
    }
    
    // Set content
    contentContainer.innerHTML = content;
      // Setup interactions after content load
    setTimeout(() => {
        UNIVERSAL_DIAGRAM_SYSTEM.applyFixes();
        UNIVERSAL_DIAGRAM_SYSTEM.forceDiagramLoad();
        setupQuizInteractions(topic.id);
        setupCaseStudyInteractions();
        
        // Update topic completion button state if topic is already completed
        const progress = getProgress();
        if (progress[topic.id]) {
            updateTopicCompletionButton(topic.id);
        }
    }, 200);
    
    // Scroll to top
    contentContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
    
    console.log(`✅ Contenido generado para: ${topic.id}`);
}

// Create content for OSSTMM topic
function createOsstmmContent(topic) {
    return `
        <div class="topic-header">
            <h2 class="text-center">
                <svg class="topic-icon me-2" width="32" height="32" viewBox="0 0 100 100">
                    <use href="../../assets/images/icons.svg#icon-methodology"></use>
                </svg>
                ${topic.title}
            </h2>
            <p class="topic-intro">
                Open Source Security Testing Methodology Manual (OSSTMM) es una metodología científica para realizar pruebas de seguridad.
            </p>
        </div>
        
        <div class="topic-content-body">
            <h3>Framework OSSTMM</h3>
            
            <!-- Diagrama del Framework OSSTMM -->
            <div class="osstmm-framework-diagram mb-4">
                <h4 class="text-center mb-3">Estructura del Framework OSSTMM</h4>
                <svg class="w-100" style="max-height: 600px;" viewBox="0 0 900 600">
                    <use href="../../assets/images/diagrams.svg#osstmm-framework"></use>
                </svg>
                <p class="text-center text-muted mt-2">
                    <small>Componentes principales y actividades del framework OSSTMM</small>
                </p>
            </div>
            
            <h4>Generalidades</h4>
            <p>OSSTMM se centra en <strong>qué</strong> y <strong>cómo</strong> testear, proporcionando un enfoque científico y medible para las pruebas de seguridad.</p>
            
            <div class="concept-card">
                <h4>
                    <svg class="concept-icon me-2" width="24" height="24" viewBox="0 0 100 100">
                        <use href="../../assets/images/icons.svg#icon-scope"></use>
                    </svg>
                    Alcance
                </h4>
                <p><strong>Define el proceso de recolección de información</strong> en todos los bienes del ambiente objetivo. Establece los límites y parámetros de la evaluación.</p>
            </div>
            
            <div class="concept-card">
                <h4>
                    <svg class="concept-icon me-2" width="24" height="24" viewBox="0 0 100 100">
                        <use href="../../assets/images/icons.svg#icon-channel"></use>
                    </svg>
                    Canal
                </h4>
                <p><strong>Determina el tipo de comunicación e interacción</strong> que habrá con los bienes, los cuales pueden ser:</p>
                <ul class="mt-2">
                    <li><strong>Físicos:</strong> Acceso directo a equipos y instalaciones</li>
                    <li><strong>Espectros:</strong> Comunicaciones inalámbricas y electromagnéticas</li>
                    <li><strong>Comunicativos:</strong> Redes, protocolos y servicios de comunicación</li>
                </ul>
            </div>
            
            <div class="concept-card">
                <h4>
                    <svg class="concept-icon me-2" width="24" height="24" viewBox="0 0 100 100">
                        <use href="../../assets/images/icons.svg#icon-index"></use>
                    </svg>
                    Índice
                </h4>
                <p><strong>Clasifica bienes objetivo</strong> que se corresponde con sus particulares identificaciones como la dirección MAC o la dirección IP.</p>
            </div>
            
            <div class="concept-card">
                <h4>
                    <svg class="concept-icon me-2" width="24" height="24" viewBox="0 0 100 100">
                        <use href="../../assets/images/icons.svg#icon-vector"></use>
                    </svg>
                    Vector
                </h4>
                <p><strong>Concluye en qué dirección</strong> puede el perito informático evaluar y analizar cada bien funcional.</p>
            </div>
            
            <h4>Actividades de Evaluación OSSTMM</h4>
            
            <div class="activities-grid">
                <div class="row">
                    <div class="col-lg-6 mb-3">
                        <div class="activity-card border-primary">
                            <h5>
                                <svg class="activity-icon me-2" width="20" height="20" viewBox="0 0 100 100">
                                    <use href="../../assets/images/icons.svg#icon-vulnerability-search"></use>
                                </svg>
                                Búsqueda de Vulnerabilidades
                            </h5>
                            <p>Orientado principalmente a realizar <strong>comprobaciones automáticas</strong> de un sistema o sistemas dentro de una red.</p>
                        </div>
                    </div>
                    <div class="col-lg-6 mb-3">
                        <div class="activity-card border-info">
                            <h5>
                                <svg class="activity-icon me-2" width="20" height="20" viewBox="0 0 100 100">
                                    <use href="../../assets/images/icons.svg#icon-security-scan"></use>
                                </svg>
                                Escaneo de Seguridad
                            </h5>
                            <p>Orientado a las <strong>búsquedas principales de vulnerabilidades</strong> en el sistema que incluyen verificaciones manuales de falsos positivos.</p>
                        </div>
                    </div>
                    <div class="col-lg-6 mb-3">
                        <div class="activity-card border-success">
                            <h5>
                                <svg class="activity-icon me-2" width="20" height="20" viewBox="0 0 100 100">
                                    <use href="../../assets/images/icons.svg#icon-penetration-test"></use>
                                </svg>
                                Test de Intrusión
                            </h5>
                            <p>Se plantean test de pruebas que se centran en <strong>romper la seguridad</strong> de un sistema determinado.</p>
                        </div>
                    </div>
                    <div class="col-lg-6 mb-3">
                        <div class="activity-card border-warning">
                            <h5>
                                <svg class="activity-icon me-2" width="20" height="20" viewBox="0 0 100 100">
                                    <use href="../../assets/images/icons.svg#icon-risk-assessment"></use>
                                </svg>
                                Evaluación de Riesgo
                            </h5>
                            <p>Se refiere a los <strong>análisis de seguridad</strong> a través de entrevistas e investigación de nivel medio.</p>
                        </div>
                    </div>
                    <div class="col-lg-6 mb-3">
                        <div class="activity-card border-danger">
                            <h5>
                                <svg class="activity-icon me-2" width="20" height="20" viewBox="0 0 100 100">
                                    <use href="../../assets/images/icons.svg#icon-security-audit"></use>
                                </svg>
                                Auditoría de Seguridad
                            </h5>
                            <p>Se refiere a la <strong>continua inspección</strong> que sufre el sistema por parte de los administradores.</p>
                        </div>
                    </div>
                    <div class="col-lg-6 mb-3">
                        <div class="activity-card border-dark">
                            <h5>
                                <svg class="activity-icon me-2" width="20" height="20" viewBox="0 0 100 100">
                                    <use href="../../assets/images/icons.svg#icon-ethical-hacking"></use>
                                </svg>
                                Hacking Ético
                            </h5>
                            <p>Orientado a tratar de obtener, a partir de los test de intrusión, <strong>objetivos complejos</strong> dentro de la red de sistemas.</p>
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
                <div class="quiz-question mb-3">
                    <p><strong>¿Cuál es el propósito principal del "Canal" en OSSTMM?</strong></p>
                    <div class="quiz-options">
                        <label class="quiz-option">
                            <input type="radio" name="q_osstmm_1" value="a">
                            <span>Clasificar los bienes por su dirección IP</span>
                        </label>
                        <label class="quiz-option">
                            <input type="radio" name="q_osstmm_1" value="b">
                            <span>Determinar el tipo de comunicación e interacción con los bienes</span>
                        </label>
                        <label class="quiz-option">
                            <input type="radio" name="q_osstmm_1" value="c">
                            <span>Realizar comprobaciones automáticas de vulnerabilidades</span>
                        </label>
                    </div>
                </div>
                
                <div class="quiz-question">
                    <p><strong>¿Qué actividad OSSTMM se centra en romper la seguridad de un sistema?</strong></p>
                    <div class="quiz-options">
                        <label class="quiz-option">
                            <input type="radio" name="q_osstmm_2" value="a">
                            <span>Búsqueda de Vulnerabilidades</span>
                        </label>
                        <label class="quiz-option">
                            <input type="radio" name="q_osstmm_2" value="b">
                            <span>Test de Intrusión</span>
                        </label>
                        <label class="quiz-option">
                            <input type="radio" name="q_osstmm_2" value="c">
                            <span>Auditoría de Seguridad</span>
                        </label>
                    </div>
                </div>
            </div>
            
            <div class="case-study mt-4">
                <h4 class="text-center">
                    <svg class="case-icon me-2" width="24" height="24" viewBox="0 0 100 100">
                        <use href="../../assets/images/icons.svg#icon-case-study"></use>
                    </svg>
                    Caso de Estudio: Aplicación de OSSTMM
                </h4>
                <div class="case-content">
                    <div class="case-scenario">
                        <h6>📚 Escenario:</h6>
                        <p>Una empresa te contrata para evaluar la seguridad de su infraestructura usando OSSTMM. Necesitas definir el alcance, canales, índices y vectores antes de comenzar las actividades de evaluación.</p>
                    </div>
                    
                    <div class="case-question mt-3">
                        <h6>❓ Pregunta de Análisis:</h6>
                        <p><strong>¿Cuál sería tu primer paso al aplicar OSSTMM?</strong></p>
                        <div class="case-options">
                            <button class="btn btn-outline-primary case-option" data-case="osstmm_case" data-value="a">
                                A) Comenzar inmediatamente con el escaneo de vulnerabilidades
                            </button>
                            <button class="btn btn-outline-primary case-option" data-case="osstmm_case" data-value="b">
                                B) Definir el alcance y recopilar información sobre todos los bienes del ambiente objetivo
                            </button>
                            <button class="btn btn-outline-primary case-option" data-case="osstmm_case" data-value="c">
                                C) Realizar directamente tests de intrusión en los sistemas críticos
                            </button>
                        </div>
                        <div class="case-feedback" id="case-osstmm_case-feedback" style="display: none;"></div>
                    </div>
                </div>
            </div>
              <div class="topic-actions mt-4">
                <button class="btn btn-sena-primary" onclick="markTopicComplete('osstmm')">
                    <svg class="btn-icon me-2" width="16" height="16" viewBox="0 0 100 100">
                        <use href="../../assets/images/icons.svg#icon-check"></use>
                    </svg>
                    Marcar como Completado
                </button>
            </div>
        </div>
    `;
}

// Create content for OWASP topic
function createOwaspContent(topic) {
    return `
        <div class="topic-header">
            <h2 class="text-center">
                <svg class="topic-icon me-2" width="32" height="32" viewBox="0 0 100 100">
                    <use href="../../assets/images/icons.svg#icon-web-security"></use>
                </svg>
                ${topic.title}
            </h2>
            <p class="topic-intro">
                El Proyecto Abierto de Seguridad de Aplicaciones Web (OWASP) proporciona recursos gratuitos para mejorar la seguridad del software.
            </p>
        </div>
        
        <div class="topic-content-body">
            <h3>Framework OWASP</h3>
            
            <!-- Diagrama de Metodología OWASP -->
            <div class="owasp-methodology-diagram mb-4">
                <h4 class="text-center mb-3">Metodología de Testeo OWASP</h4>
                <svg class="w-100" style="max-height: 550px;" viewBox="0 0 850 550">
                    <use href="../../assets/images/diagrams.svg#owasp-methodology"></use>
                </svg>
                <p class="text-center text-muted mt-2">
                    <small>Framework de testeo y principios fundamentales de OWASP</small>
                </p>
            </div>
            
            <h4>Generalidades</h4>
            <p>OWASP se enfoca en la <strong>seguridad de aplicaciones web</strong>, ofreciendo guías, herramientas y documentación para desarrolladores y profesionales de seguridad.</p>
            
            <div class="concept-card">
                <h4>
                    <svg class="concept-icon me-2" width="24" height="24" viewBox="0 0 100 100">
                        <use href="../../assets/images/icons.svg#icon-scope-testing"></use>
                    </svg>
                    Alcance del Testeo
                </h4>
                <p><strong>Definir qué se va a probar</strong> y los límites de la evaluación. Incluye identificar aplicaciones, funcionalidades y componentes a evaluar.</p>
            </div>
            
            <div class="concept-card">
                <h4>
                    <svg class="concept-icon me-2" width="24" height="24" viewBox="0 0 100 100">
                        <use href="../../assets/images/icons.svg#icon-principles"></use>
                    </svg>
                    Principios del Testeo
                </h4>
                <p><strong>Seguir un enfoque ético, metódico y documentado.</strong> Los tests deben ser:</p>
                <ul class="mt-2">
                    <li>Reproducibles y documentados</li>
                    <li>Realizados con autorización</li>
                    <li>Enfocados en vulnerabilidades reales</li>
                    <li>No destructivos para el negocio</li>
                </ul>
            </div>
            
            <div class="concept-card">
                <h4>
                    <svg class="concept-icon me-2" width="24" height="24" viewBox="0 0 100 100">
                        <use href="../../assets/images/icons.svg#icon-techniques"></use>
                    </svg>
                    Técnicas de Testeo
                </h4>
                <p><strong>Métodos específicos para identificar vulnerabilidades</strong> en aplicaciones web, incluyendo:</p>
                <ul class="mt-2">
                    <li>Análisis estático de código (SAST)</li>
                    <li>Análisis dinámico (DAST)</li>
                    <li>Análisis interactivo (IAST)</li>
                    <li>Pruebas manuales especializadas</li>
                </ul>
            </div>
            
            <div class="concept-card border-primary">
                <h4>
                    <svg class="concept-icon me-2" width="24" height="24" viewBox="0 0 100 100">
                        <use href="../../assets/images/icons.svg#icon-framework"></use>
                    </svg>
                    Framework de Testeo OWASP
                </h4>
                <p><strong>Un marco completo para guiar las evaluaciones</strong> de seguridad web que incluye metodologías, herramientas y mejores prácticas.</p>
            </div>
            
            <h4>Top 10 Vulnerabilidades Web OWASP (2025)</h4>
            <p>OWASP es famoso por su lista <strong>Top 10</strong>, que destaca los riesgos de seguridad más críticos para las aplicaciones web en la actualidad.</p>
            
            <div class="top10-preview alert alert-info">
                <h6><i class="fas fa-shield-alt me-2"></i>Principales Categorías 2025:</h6>
                <div class="row">
                    <div class="col-md-6">
                        <ul class="mb-0">
                            <li>Broken Access Control</li>
                            <li>Cryptographic Failures</li>
                            <li>Injection</li>
                            <li>Insecure Design</li>
                            <li>Security Misconfiguration</li>
                        </ul>
                    </div>
                    <div class="col-md-6">
                        <ul class="mb-0">
                            <li>Vulnerable Components</li>
                            <li>Authentication Failures</li>
                            <li>Software Integrity Failures</li>
                            <li>Logging Failures</li>
                            <li>Server-Side Request Forgery</li>
                        </ul>
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
                <div class="quiz-question mb-3">
                    <p><strong>¿En qué se especializa principalmente OWASP?</strong></p>
                    <div class="quiz-options">
                        <label class="quiz-option">
                            <input type="radio" name="q_owasp_1" value="a">
                            <span>Seguridad de redes físicas</span>
                        </label>
                        <label class="quiz-option">
                            <input type="radio" name="q_owasp_1" value="b">
                            <span>Seguridad de aplicaciones web</span>
                        </label>
                        <label class="quiz-option">
                            <input type="radio" name="q_owasp_1" value="c">
                            <span>Estándares de criptografía</span>
                        </label>
                    </div>
                </div>
                
                <div class="quiz-question">
                    <p><strong>¿Cuál es el primer paso en la metodología de testeo OWASP?</strong></p>
                    <div class="quiz-options">
                        <label class="quiz-option">
                            <input type="radio" name="q_owasp_2" value="a">
                            <span>Definir el alcance del testeo</span>
                        </label>
                        <label class="quiz-option">
                            <input type="radio" name="q_owasp_2" value="b">
                            <span>Ejecutar herramientas automatizadas</span>
                        </label>
                        <label class="quiz-option">
                            <input type="radio" name="q_owasp_2" value="c">
                            <span>Revisar el código fuente</span>
                        </label>
                    </div>
                </div>
            </div>
            
            <div class="case-study mt-4">
                <h4 class="text-center">
                    <svg class="case-icon me-2" width="24" height="24" viewBox="0 0 100 100">
                        <use href="../../assets/images/icons.svg#icon-case-study"></use>
                    </svg>
                    Caso de Estudio: Evaluación OWASP
                </h4>
                <div class="case-content">
                    <div class="case-scenario">
                        <h6>📚 Escenario:</h6>
                        <p>Una startup de e-commerce te solicita evaluar la seguridad de su aplicación web antes del lanzamiento. Deben seguir las mejores prácticas de OWASP para proteger los datos de los clientes y las transacciones.</p>
                    </div>
                    
                    <div class="case-question mt-3">
                        <h6>❓ Pregunta de Análisis:</h6>
                        <p><strong>¿Cuál sería tu enfoque principal usando OWASP?</strong></p>
                        <div class="case-options">
                            <button class="btn btn-outline-primary case-option" data-case="owasp_case" data-value="a">
                                A) Aplicar únicamente herramientas automatizadas del OWASP ZAP
                            </button>
                            <button class="btn btn-outline-primary case-option" data-case="owasp_case" data-value="b">
                                B) Seguir el framework de testeo OWASP y verificar el Top 10 de vulnerabilidades
                            </button>
                            <button class="btn btn-outline-primary case-option" data-case="owasp_case" data-value="c">
                                C) Enfocarse únicamente en las vulnerabilidades de inyección SQL
                            </button>
                        </div>
                        <div class="case-feedback" id="case-owasp_case-feedback" style="display: none;"></div>
                    </div>
                </div>
            </div>
              <div class="topic-actions mt-4">
                <button class="btn btn-sena-primary" onclick="markTopicComplete('owasp')">
                    <svg class="btn-icon me-2" width="16" height="16" viewBox="0 0 100 100">
                        <use href="../../assets/images/icons.svg#icon-check"></use>
                    </svg>
                    Marcar como Completado
                </button>
            </div>
        </div>
    `;
}

// Create content for CEH topic
function createCehContent(topic) {
    return `
        <div class="topic-header">
            <h2 class="text-center">
                <svg class="topic-icon me-2" width="32" height="32" viewBox="0 0 100 100">
                    <use href="../../assets/images/icons.svg#icon-certification"></use>
                </svg>
                ${topic.title}
            </h2>
            <p class="topic-intro">
                La certificación Certified Ethical Hacker (CEH) enseña a pensar como un hacker para poder defenderse de ellos.
            </p>
        </div>
        
        <div class="topic-content-body">
            <h3>Metodología CEH</h3>
            
            <!-- Diagrama del Proceso CEH -->
            <div class="ceh-process-diagram mb-4">
                <h4 class="text-center mb-3">Flujo del Proceso CEH</h4>
                <svg class="w-100" style="max-height: 620px;" viewBox="0 0 800 620">
                    <use href="../../assets/images/diagrams.svg#ceh-process-flow"></use>
                </svg>
                <p class="text-center text-muted mt-2">
                    <small>Fases secuenciales de la metodología de hacking ético según CEH</small>
                </p>
            </div>
            
            <h4>Generalidades CEH</h4>
            <p>CEH divide el proceso de <strong>hacking ético</strong> en fases claras y secuenciales que simulan el comportamiento de un atacante real.</p>
            
            <div class="methodology-phases">
                <div class="phase-card border-success">
                    <h5>
                        <svg class="phase-icon me-2" width="24" height="24" viewBox="0 0 100 100">
                            <use href="../../assets/images/icons.svg#icon-information-gathering"></use>
                        </svg>
                        1. Obtención de Información (Reconocimiento)
                    </h5>
                    <p><strong>Recopilar la mayor cantidad de información posible</strong> sobre el objetivo usando técnicas pasivas y activas.</p>
                    <ul class="mt-2">
                        <li><strong>Reconocimiento Pasivo:</strong> OSINT, redes sociales, DNS</li>
                        <li><strong>Reconocimiento Activo:</strong> Escaneo de red, fingerprinting</li>
                        <li><strong>Ingeniería Social:</strong> Información de empleados y procesos</li>
                    </ul>
                </div>
                
                <div class="phase-card border-primary">
                    <h5>
                        <svg class="phase-icon me-2" width="24" height="24" viewBox="0 0 100 100">
                            <use href="../../assets/images/icons.svg#icon-access-gaining"></use>
                        </svg>
                        2. Obtención de Acceso (Escaneo y Enumeración)
                    </h5>
                    <p><strong>Identificar vulnerabilidades y puntos de entrada</strong> en el sistema objetivo.</p>
                    <ul class="mt-2">
                        <li><strong>Escaneo de Puertos:</strong> Identificar servicios activos</li>
                        <li><strong>Escaneo de Vulnerabilidades:</strong> Buscar debilidades conocidas</li>
                        <li><strong>Análisis de Servicios:</strong> Versiones y configuraciones</li>
                    </ul>
                </div>
                
                <div class="phase-card border-info">
                    <h5>
                        <svg class="phase-icon me-2" width="24" height="24" viewBox="0 0 100 100">
                            <use href="../../assets/images/icons.svg#icon-enumeration"></use>
                        </svg>
                        3. Enumeración
                    </h5>
                    <p><strong>Extraer información detallada</strong> sobre usuarios, sistemas y recursos de red.</p>
                    <ul class="mt-2">
                        <li><strong>Enumeración de Usuarios:</strong> Cuentas y privilegios</li>
                        <li><strong>Enumeración de Recursos:</strong> Shares, servicios, aplicaciones</li>
                        <li><strong>Enumeración de Red:</strong> Topología y configuraciones</li>
                    </ul>
                </div>
                
                <div class="phase-card border-warning">
                    <h5>
                        <svg class="phase-icon me-2" width="24" height="24" viewBox="0 0 100 100">
                            <use href="../../assets/images/icons.svg#icon-privilege-escalation"></use>
                        </svg>
                        4. Escalamiento de Privilegios
                    </h5>
                    <p><strong>Una vez dentro, obtener mayores niveles de control</strong> sobre el sistema comprometido.</p>
                    <ul class="mt-2">
                        <li><strong>Escalamiento Horizontal:</strong> Acceso a otros sistemas</li>
                        <li><strong>Escalamiento Vertical:</strong> Mayores privilegios en el mismo sistema</li>
                        <li><strong>Persistencia:</strong> Mantener el acceso a largo plazo</li>
                    </ul>
                </div>
                
                <div class="phase-card border-danger">
                    <h5>
                        <svg class="phase-icon me-2" width="24" height="24" viewBox="0 0 100 100">
                            <use href="../../assets/images/icons.svg#icon-reporting"></use>
                        </svg>
                        5. Reporte de Hallazgos
                    </h5>
                    <p><strong>Documentar los hallazgos, vulnerabilidades y recomendaciones</strong> de manera clara y accionable.</p>
                    <ul class="mt-2">
                        <li><strong>Resumen Ejecutivo:</strong> Para la alta dirección</li>
                        <li><strong>Detalles Técnicos:</strong> Para el equipo de TI</li>
                        <li><strong>Plan de Remediación:</strong> Pasos para corregir vulnerabilidades</li>
                    </ul>
                </div>
            </div>
            
            <div class="alert alert-success mt-4">
                <h6><i class="fas fa-lightbulb me-2"></i>Principio Fundamental CEH:</h6>
                <p class="mb-0">"Para defenderte de un hacker, debes <strong>pensar como un hacker</strong>". CEH enseña las mismas técnicas que usan los atacantes, pero aplicadas de forma ética y legal.</p>
            </div>
            
            <div class="topic-quiz mt-4">
                <h4>
                    <svg class="quiz-icon me-2" width="24" height="24" viewBox="0 0 100 100">
                        <use href="../../assets/images/icons.svg#icon-quiz"></use>
                    </svg>
                    Evaluación de Conocimientos
                </h4>
                <div class="quiz-question mb-3">
                    <p><strong>¿Cuál es la primera fase en la metodología CEH?</strong></p>
                    <div class="quiz-options">
                        <label class="quiz-option">
                            <input type="radio" name="q_ceh_1" value="a">
                            <span>Escalamiento de Privilegios</span>
                        </label>
                        <label class="quiz-option">
                            <input type="radio" name="q_ceh_1" value="b">
                            <span>Reporte de Hallazgos</span>
                        </label>
                        <label class="quiz-option">
                            <input type="radio" name="q_ceh_1" value="c">
                            <span>Obtención de Información</span>
                        </label>
                    </div>
                </div>
                
                <div class="quiz-question">
                    <p><strong>¿Qué diferencia al escalamiento horizontal del vertical?</strong></p>
                    <div class="quiz-options">
                        <label class="quiz-option">
                            <input type="radio" name="q_ceh_2" value="a">
                            <span>Horizontal es acceso a otros sistemas, vertical es mayor privilegio en el mismo sistema</span>
                        </label>
                        <label class="quiz-option">
                            <input type="radio" name="q_ceh_2" value="b">
                            <span>No hay diferencia, son términos sinónimos</span>
                        </label>
                        <label class="quiz-option">
                            <input type="radio" name="q_ceh_2" value="c">
                            <span>Horizontal es más peligroso que vertical</span>
                        </label>
                    </div>
                </div>
            </div>
            
            <div class="case-study mt-4">
                <h4 class="text-center">
                    <svg class="case-icon me-2" width="24" height="24" viewBox="0 0 100 100">
                        <use href="../../assets/images/icons.svg#icon-case-study"></use>
                    </svg>
                    Caso de Estudio: Penetration Test CEH
                </h4>
                <div class="case-content">
                    <div class="case-scenario">
                        <h6>📚 Escenario:</h6>
                        <p>Una empresa gubernamental te contrata para realizar un penetration test siguiendo la metodología CEH. Has completado la fase de reconocimiento y encontraste varios puertos abiertos. Ahora necesitas decidir el siguiente paso.</p>
                    </div>
                    
                    <div class="case-question mt-3">
                        <h6>❓ Pregunta de Análisis:</h6>
                        <p><strong>¿Cuál debería ser tu siguiente acción siguiendo CEH?</strong></p>
                        <div class="case-options">
                            <button class="btn btn-outline-primary case-option" data-case="ceh_case" data-value="a">
                                A) Proceder inmediatamente con el escalamiento de privilegios
                            </button>
                            <button class="btn btn-outline-primary case-option" data-case="ceh_case" data-value="b">
                                B) Realizar enumeración detallada de los servicios encontrados
                            </button>
                            <button class="btn btn-outline-primary case-option" data-case="ceh_case" data-value="c">
                                C) Escribir el reporte final con los puertos encontrados
                            </button>
                        </div>
                        <div class="case-feedback" id="case-ceh_case-feedback" style="display: none;"></div>
                    </div>
                </div>
            </div>
              <div class="topic-actions mt-4">
                <button class="btn btn-sena-primary" onclick="markTopicComplete('ceh')">
                    <svg class="btn-icon me-2" width="16" height="16" viewBox="0 0 100 100">
                        <use href="../../assets/images/icons.svg#icon-check"></use>
                    </svg>
                    Marcar como Completado
                </button>
            </div>
        </div>
    `;
}

// Create content for any topic
function createDefaultContent(topic) {
    return `
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
                <strong>Nota:</strong> Este es un contenido de ejemplo. 
                El contenido detallado será desarrollado próximamente.
            </div>
              <div class="topic-actions mt-4">
                <button class="btn btn-sena-primary" onclick="markTopicComplete('${topic.id}')">
                    <i class="fas fa-check me-2"></i>Marcar como Completado
                </button>
            </div>
        </div>
    `;
}

// Complete current topic (wrapper function)
function completeTopic() {
    console.log('✅ Completando tema actual...');
    
    const currentTopic = getCurrentTopic();
    if (currentTopic) {
        markTopicComplete(currentTopic.id);
    } else {
        console.warn('⚠️ No hay tema actual para completar');
        showNotification('No hay tema actual para completar', 'warning');
    }
}

// Navigation functions
function previousTopic() {
    console.log('⬅️ Navegando al tema anterior...');
    
    if (currentTopicIndex > 0) {
        currentTopicIndex--;
        const previousTopic = moduleData.topics[currentTopicIndex];
        loadTopicContent(previousTopic);
        updateNavigationState();
        
        console.log(`✅ Navegado a: ${previousTopic.title}`);
    } else {
        console.log('ℹ️ Ya estás en el primer tema');
        showNotification('Ya estás en el primer tema', 'info');
    }
}

function nextTopic() {
    console.log('➡️ Navegando al siguiente tema...');
    
    if (currentTopicIndex < moduleData.topics.length - 1) {
        currentTopicIndex++;
        const nextTopic = moduleData.topics[currentTopicIndex];
        loadTopicContent(nextTopic);
        updateNavigationState();
        
        console.log(`✅ Navegado a: ${nextTopic.title}`);
    } else {
        console.log('ℹ️ Ya estás en el último tema');
        showNotification('Ya estás en el último tema', 'info');
    }
}

function updateNavigationState() {
    console.log('🔄 Actualizando estado de navegación...');
    
    // Update sidebar active state
    const topicItems = document.querySelectorAll('.nav-item');
    topicItems.forEach((item, index) => {
        item.classList.toggle('active', index === currentTopicIndex);
    });
    
    // Update navigation buttons if they exist
    const prevBtn = document.getElementById('prev-topic-btn');
    const nextBtn = document.getElementById('next-topic-btn');
    
    if (prevBtn) {
        prevBtn.disabled = currentTopicIndex === 0;
        prevBtn.style.opacity = currentTopicIndex === 0 ? '0.5' : '1';
    }
    
    if (nextBtn) {
        nextBtn.disabled = currentTopicIndex === moduleData.topics.length - 1;
        nextBtn.style.opacity = currentTopicIndex === moduleData.topics.length - 1 ? '0.5' : '1';
    }
    
    // Update progress
    updateProgressUI();
    
    console.log('✅ Estado de navegación actualizado');
}

function loadModuleNavigation() {
    console.log('🚀 Cargando navegación del módulo...');
    
    const sidebar = document.getElementById('module-sidebar');
    if (!sidebar) {
        console.warn('⚠️ Sidebar no encontrado');
        return;
    }
    
    let navigationHTML = `
        <div class="module-header p-3 border-bottom">
            <h5 class="mb-1">${moduleData.title}</h5>
            <small class="text-muted">${moduleData.topics.length} temas</small>
        </div>
        <div class="topics-list">
    `;
    
    moduleData.topics.forEach((topic, index) => {
        const isActive = index === currentTopicIndex;
        const progress = getProgress();
        const isCompleted = progress[topic.id];
        
        navigationHTML += `
            <div class="topic-item ${isActive ? 'active' : ''} ${isCompleted ? 'completed' : ''}" 
                 onclick="loadTopicById('${topic.id}')" 
                 data-topic="${topic.id}">
                <div class="topic-status">
                    ${isCompleted ? '<i class="fas fa-check-circle text-success"></i>' : 
                      isActive ? '<i class="fas fa-play-circle text-primary"></i>' : 
                      '<i class="far fa-circle text-muted"></i>'}
                </div>
                <div class="topic-info">
                    <div class="topic-title">${topic.title}</div>
                    <div class="topic-duration">
                        <i class="far fa-clock"></i> ${topic.duration} min
                    </div>
                </div>
            </div>
        `;
    });
    
    navigationHTML += '</div>';
    sidebar.innerHTML = navigationHTML;
    
    console.log('✅ Navegación del módulo cargada');
}

function nextModule() {
    console.log('➡️ Navegando al siguiente módulo...');
    window.location.href = '../escaneo-dispositivos/index.html';
}

function previousModule() {
    console.log('⬅️ Navegando al módulo anterior...');
    window.location.href = '../introduccion-hacking/index.html';
}

// ========================================
// INTERACTIVITY AND COMPLETION
// ========================================

// Quiz solutions for each topic
const quizSolutions = {
    'osstmm': { 'q_osstmm_1': 'b', 'q_osstmm_2': 'b' },
    'owasp': { 'q_owasp_1': 'b', 'q_owasp_2': 'a' },
    'ceh': { 'q_ceh_1': 'c', 'q_ceh_2': 'a' }
};

// Refresh topic content (useful for dynamic updates)
function refreshTopicContent() {
    console.log('🔄 Refrescando contenido del tema actual');
    
    if (currentTopicIndex >= 0 && currentTopicIndex < moduleData.topics.length) {
        const currentTopic = moduleData.topics[currentTopicIndex];
        loadTopicContent(currentTopic);
        updateNavigationState();
        
        console.log('✅ Contenido refrescado');
    } else {
        console.warn('⚠️ No hay tema actual válido para refrescar');
    }
}

// Get current topic information
function getCurrentTopic() {
    if (currentTopicIndex >= 0 && currentTopicIndex < moduleData.topics.length) {
        return moduleData.topics[currentTopicIndex];
    }
    return null;
}

// Check if current topic is completed
function isCurrentTopicCompleted() {
    const currentTopic = getCurrentTopic();
    if (!currentTopic) return false;
    
    const progress = getProgress();
    return !!progress[currentTopic.id];
}

// Get module completion percentage
function getModuleCompletionPercentage() {
    const progress = getProgress();
    const completedCount = Object.keys(progress).length;
    const totalTopics = moduleData.topics.length;
    
    return totalTopics > 0 ? Math.round((completedCount / totalTopics) * 100) : 0;
}

// Get module statistics
function getModuleStats() {
    const progress = getProgress();
    const completedTopics = Object.keys(progress);
    const totalTopics = moduleData.topics.length;
    const completionPercentage = getModuleCompletionPercentage();
    
    return {
        totalTopics,
        completedTopics: completedTopics.length,
        remainingTopics: totalTopics - completedTopics.length,
        completionPercentage,
        isModuleComplete: completedTopics.length === totalTopics,
        completedTopicIds: completedTopics
    };
}

// Reset module progress (for debugging/testing)
function resetModuleProgress() {
    if (confirm('¿Estás seguro de que quieres reiniciar el progreso del módulo? Esta acción no se puede deshacer.')) {
        localStorage.removeItem(`module-progress-${moduleData.id}`);
        
        // Reset visual state
        currentTopicIndex = 0;
        updateProgressUI();
        populateSidebar();
        loadFirstTopic();
        
        showNotification('Progreso del módulo reiniciado', 'info');
        console.log('🔄 Progreso del módulo reiniciado');
    }
}

// ========================================
// AUTO-INITIALIZATION
// ========================================

// Auto-inicializar el sistema cuando se carga el módulo
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Inicializando módulo Metodologías y Estándares para Hacking...');
    
    // Inicializar sistema de diagramas
    setTimeout(() => {
        UNIVERSAL_DIAGRAM_SYSTEM.init().then(() => {
            console.log('✅ Sistema de diagramas inicializado');
            
            // Forzar carga de diagramas después de la inicialización
            setTimeout(() => {
                UNIVERSAL_DIAGRAM_SYSTEM.forceDiagramLoad();
            }, 500);
        }).catch(error => {
            console.error('❌ Error inicializando sistema de diagramas:', error);
            // Intentar carga de respaldo
            setTimeout(() => {
                UNIVERSAL_DIAGRAM_SYSTEM.forceDiagramLoad();
            }, 1000);
        });
    }, 100);
    
    // Cargar el primer tema
    setTimeout(() => {
        if (typeof loadFirstTopic === 'function') {
            loadFirstTopic();
        }
    }, 500);
});

// También inicializar si la página ya está cargada
if (document.readyState === 'loading') {
    // El DOM aún se está cargando, el evento DOMContentLoaded se disparará
} else {
    // El DOM ya está cargado
    setTimeout(() => {
        console.log('🚀 Inicialización tardía del módulo...');
        UNIVERSAL_DIAGRAM_SYSTEM.init().then(() => {
            UNIVERSAL_DIAGRAM_SYSTEM.forceDiagramLoad();
        });
    }, 100);
}

// ========================================
// GLOBAL FUNCTIONS EXPORT
// ========================================

// Make functions globally available
window.startModule = startModule;
window.loadFirstTopic = loadFirstTopic;
window.loadTopic = loadTopic;
window.loadTopicById = loadTopicById;
window.loadTopicContent = loadTopicContent;
window.markTopicComplete = markTopicComplete;
window.updateTopicCompletionButton = updateTopicCompletionButton;
window.showNotification = showNotification;
window.completeTopic = completeTopic;
window.nextModule = nextModule;
window.previousModule = previousModule;
window.previousTopic = previousTopic;
window.nextTopic = nextTopic;
window.loadModuleNavigation = loadModuleNavigation;
window.updateNavigationState = updateNavigationState;
window.handleQuizAnswer = handleQuizAnswer;
window.updateQuizProgress = updateQuizProgress;
window.checkTopicQuizCompletion = checkTopicQuizCompletion;
window.showTopicCompletionBadge = showTopicCompletionBadge;
window.setupQuizInteractions = setupQuizInteractions;
window.setupCaseStudyInteractions = setupCaseStudyInteractions;
window.updateProgressUI = updateProgressUI;
window.refreshTopicContent = refreshTopicContent;
window.getCurrentTopic = getCurrentTopic;
window.isCurrentTopicCompleted = isCurrentTopicCompleted;
window.getModuleCompletionPercentage = getModuleCompletionPercentage;
window.getModuleStats = getModuleStats;
window.resetModuleProgress = resetModuleProgress;

// Debug function for diagrams
function debugDiagrams() {
    console.log('=== DEBUG SISTEMA DE DIAGRAMAS ===');
    console.log('Diagram System Status:', {
        initialized: UNIVERSAL_DIAGRAM_SYSTEM.isInitialized,
        processing: UNIVERSAL_DIAGRAM_SYSTEM.isProcessing,
        attempts: UNIVERSAL_DIAGRAM_SYSTEM.fixAttempts,
        cached: !!UNIVERSAL_DIAGRAM_SYSTEM.svgCache,
        diagramsLoaded: UNIVERSAL_DIAGRAM_SYSTEM.diagramsLoaded || 0
    });
    
    // Check available diagrams
    const diagramElements = document.querySelectorAll('.diagram-container');
    console.log('Diagram Elements Found:', diagramElements.length);
    
    diagramElements.forEach((element, index) => {
        const diagramId = element.getAttribute('data-diagram');
        const svgElement = element.querySelector('svg');
        console.log(`Diagram ${index + 1}:`, {
            id: diagramId,
            element: element,
            hasSVG: !!svgElement,
            svgContent: svgElement ? svgElement.outerHTML.substring(0, 100) + '...' : 'No SVG',
            visible: element.style.display !== 'none'
        });
    });
    
    // Check SVG cache
    if (UNIVERSAL_DIAGRAM_SYSTEM.svgCache) {
        console.log('SVG Cache Keys:', Object.keys(UNIVERSAL_DIAGRAM_SYSTEM.svgCache));
    }
    
    // Return debug data
    return {
        systemStatus: {
            initialized: UNIVERSAL_DIAGRAM_SYSTEM.isInitialized,
            processing: UNIVERSAL_DIAGRAM_SYSTEM.isProcessing,
            attempts: UNIVERSAL_DIAGRAM_SYSTEM.fixAttempts,
            cached: !!UNIVERSAL_DIAGRAM_SYSTEM.svgCache,
            diagramsLoaded: UNIVERSAL_DIAGRAM_SYSTEM.diagramsLoaded || 0
        },
        elementsFound: diagramElements.length,
        diagrams: Array.from(diagramElements).map(el => ({
            id: el.getAttribute('data-diagram'),
            hasSVG: !!el.querySelector('svg'),
            visible: el.style.display !== 'none'
        })),
        cacheKeys: UNIVERSAL_DIAGRAM_SYSTEM.svgCache ? Object.keys(UNIVERSAL_DIAGRAM_SYSTEM.svgCache) : []
    };
}

window.debugDiagrams = debugDiagrams;

// Export Universal Diagram System for external access
window.UNIVERSAL_DIAGRAM_SYSTEM = UNIVERSAL_DIAGRAM_SYSTEM;

// Debug functions (helpful for development and testing)
window.debugModule = function() {
    console.log('=== DEBUG MÓDULO METODOLOGÍAS ===');
    console.log('Current Topic Index:', currentTopicIndex);
    console.log('Current Topic:', getCurrentTopic());
    console.log('Module Stats:', getModuleStats());
    console.log('Module Data:', moduleData);
    console.log('Progress:', getProgress());
    console.log('Diagram System:', {
        initialized: UNIVERSAL_DIAGRAM_SYSTEM.isInitialized,
        processing: UNIVERSAL_DIAGRAM_SYSTEM.isProcessing,
        attempts: UNIVERSAL_DIAGRAM_SYSTEM.fixAttempts,
        cached: !!UNIVERSAL_DIAGRAM_SYSTEM.svgCache
    });
    return {
        currentTopicIndex,
        currentTopic: getCurrentTopic(),
        moduleStats: getModuleStats(),
        moduleData,
        progress: getProgress(),
        diagramSystem: {
            initialized: UNIVERSAL_DIAGRAM_SYSTEM.isInitialized,
            processing: UNIVERSAL_DIAGRAM_SYSTEM.isProcessing,
            attempts: UNIVERSAL_DIAGRAM_SYSTEM.fixAttempts,
            cached: !!UNIVERSAL_DIAGRAM_SYSTEM.svgCache
        }
    };
};

console.log('🎯 Módulo Metodologías y Estándares para Hacking cargado exitosamente');
console.log('📊 Funciones disponibles:', Object.keys(window).filter(key => 
    key.startsWith('loadTopic') || 
    key.startsWith('markTopic') || 
    key === 'debugModule' || 
    key === 'debugDiagrams'
));

/* ========================================
   INTERACTIVITY AND QUIZ FUNCTIONS
   ======================================== */

// Quiz interaction functions
function setupQuizInteractions(topicId) {
    console.log(`🎯 Configurando interacciones de quiz para: ${topicId}`);
    
    // Setup quiz radio button interactions
    const quizInputs = document.querySelectorAll('input[type="radio"]');
    quizInputs.forEach(input => {
        input.addEventListener('change', function() {
            handleQuizAnswer(this);
        });
    });
    
    // Setup case study interactions
    setupCaseStudyInteractions();
    
    console.log('✅ Interacciones de quiz configuradas');
}

function handleQuizAnswer(inputElement) {
    const questionName = inputElement.name;
    const selectedValue = inputElement.value;
    const topicId = getCurrentTopic()?.id;
    
    if (!topicId || !quizSolutions[topicId]) {
        console.warn('⚠️ No se encontraron soluciones para el topic:', topicId);
        return;
    }
    
    const correctAnswer = quizSolutions[topicId][questionName];
    const isCorrect = selectedValue === correctAnswer;
    
    console.log(`Quiz respuesta: ${questionName} = ${selectedValue} (${isCorrect ? 'correcta' : 'incorrecta'})`);
    
    // Visual feedback
    const questionContainer = inputElement.closest('.quiz-question');
    if (questionContainer) {
        // Remove previous feedback
        questionContainer.querySelectorAll('.quiz-feedback').forEach(f => f.remove());
        
        // Add feedback
        const feedback = document.createElement('div');
        feedback.className = `quiz-feedback alert ${isCorrect ? 'alert-success' : 'alert-danger'} mt-2`;
        feedback.innerHTML = isCorrect ? 
            '<i class="fas fa-check-circle"></i> ¡Correcto!' : 
            '<i class="fas fa-times-circle"></i> Incorrecto. Intenta de nuevo.';
        
        questionContainer.appendChild(feedback);
    }
    
    // Update quiz progress
    updateQuizProgress(questionName, isCorrect);
    
    // Check if topic quiz is complete
    checkTopicQuizCompletion();
}

function updateQuizProgress(questionName, isCorrect) {
    const currentTopic = getCurrentTopic();
    if (!currentTopic) return;
    
    if (!currentTopic.quizProgress) {
        currentTopic.quizProgress = {};
    }
    
    currentTopic.quizProgress[questionName] = isCorrect;
    
    // Save progress to localStorage
    const progress = getProgress();
    progress[`${currentTopic.id}_quiz`] = currentTopic.quizProgress;
    saveProgress(progress);
}

function checkTopicQuizCompletion() {
    const currentTopic = getCurrentTopic();
    if (!currentTopic) return false;
    
    const quizQuestions = document.querySelectorAll('.quiz-question input[type="radio"]:checked');
    const totalQuestions = new Set(Array.from(quizQuestions).map(input => input.name)).size;
    
    if (totalQuestions === 0) return false;
    
    const correctAnswers = Object.values(currentTopic.quizProgress || {}).filter(Boolean).length;
    const isComplete = correctAnswers === totalQuestions && correctAnswers > 0;
    
    if (isComplete && !isCurrentTopicCompleted()) {
        showTopicCompletionBadge();
        setTimeout(() => {
            markTopicComplete(currentTopic.id);
        }, 1000);
    }
    
    return isComplete;
}

function showTopicCompletionBadge() {
    // Create completion notification
    const notification = document.createElement('div');
    notification.className = 'topic-completion-badge alert alert-success alert-dismissible fade show position-fixed';
    notification.style.cssText = 'top: 80px; right: 20px; z-index: 1050; max-width: 300px; box-shadow: 0 4px 12px rgba(0,0,0,0.3);';
    notification.innerHTML = `
        <div class="d-flex align-items-center">
            <i class="fas fa-trophy text-warning me-2"></i>
            <div>
                <strong>¡Tema Completado!</strong><br>
                <small>Has terminado exitosamente este tema</small>
            </div>
        </div>
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    `;
    
    document.body.appendChild(notification);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.remove();
        }
    }, 5000);
}

function setupCaseStudyInteractions() {
    console.log('🎯 Configurando interacciones de casos de estudio');
    
    // Setup case study button interactions
    const caseButtons = document.querySelectorAll('.case-option');
    caseButtons.forEach(button => {
        button.addEventListener('click', function() {
            const caseId = this.getAttribute('data-case');
            const value = this.getAttribute('data-value');
            
            // Remove active state from all buttons in this case
            const caseContainer = this.closest('.case-study');
            if (caseContainer) {
                caseContainer.querySelectorAll('.case-option').forEach(btn => {
                    btn.classList.remove('btn-primary', 'btn-success', 'btn-danger');
                    btn.classList.add('btn-outline-primary');
                });
            }
            
            // Add feedback
            const feedbackContainer = document.getElementById(`case-${caseId}-feedback`);
            if (feedbackContainer) {
                // Simple feedback logic (you can customize this)
                const isCorrect = value === 'b'; // Assuming 'b' is usually correct
                
                this.classList.remove('btn-outline-primary');
                this.classList.add(isCorrect ? 'btn-success' : 'btn-danger');
                
                feedbackContainer.innerHTML = isCorrect ? 
                    '<div class="alert alert-success mt-2"><i class="fas fa-check-circle"></i> ¡Excelente análisis!</div>' :
                    '<div class="alert alert-warning mt-2"><i class="fas fa-info-circle"></i> Considera otros aspectos del caso.</div>';
                
                feedbackContainer.style.display = 'block';
            }
        });
    });
    
    console.log('✅ Interacciones de casos de estudio configuradas');
}
