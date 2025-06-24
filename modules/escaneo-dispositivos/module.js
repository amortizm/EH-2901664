/* ========================================
   MODULE: ESCANEO DE DISPOSITIVOS
   ======================================== */

// Module data based on info.md
const moduleData = {
    id: 'escaneo-dispositivos',
    title: 'Escaneo de Dispositivos',
    topics: [
        {
            id: 'definicion-tipos-escaneo',
            title: 'Definición y Tipos de Escaneo',
            duration: 60,
            completed: false,
            subtopics: [
                'Concepto de Escaneo',
                'Escaneo de Puertos',
                'Análisis de Vulnerabilidad',
                'Escaneado en Red'
            ]
        },
        {
            id: 'metodologia-escaneo',
            title: 'Metodología de Escaneo',
            duration: 75,
            completed: false,
            subtopics: [
                'Comprobar Sistemas Vivos',
                'Comprobar Puertos Abiertos',
                'Capturar Banderas de Servicios',
                'Identificar Vulnerabilidades',
                'Dibujar Diagramas de Red',
                'Preparar Proxies'
            ]
        },
        {
            id: 'metodologia-ceh',
            title: 'Metodología de Exploración de CEH',
            duration: 45,
            completed: false,
            subtopics: [
                'Fases del Escaneo según CEH',
                'Herramientas Clave en CEH',
                'Consideraciones Éticas y Legales'
            ]
        },
        {
            id: 'tecnicas-herramientas',
            title: 'Técnicas y Herramientas',
            duration: 90,
            completed: false,
            subtopics: [
                'Nmap (Network Mapper)',
                'Escaneo a Gran Escala',
                'Hping3',
                'Escáneres de Vulnerabilidades',
                'Herramientas de Evasión'
            ]
        },
        {
            id: 'banner-fingerprinting-os',
            title: 'Banner Fingerprinting, Acaparamiento y OS',
            duration: 75,
            completed: false,
            subtopics: [
                'Captura de Banners',
                'Acaparamiento de Información',
                'OS Fingerprinting Activo',
                'OS Fingerprinting Pasivo'
            ]
        },
        {
            id: 'proxychains-anonimizadores-tor',
            title: 'Proxychains, Anonimizadores y Tor',
            duration: 60,
            completed: false,
            subtopics: [
                'Configuración de Proxychains',
                'Red Tor para Anonimato',
                'VPN y Técnicas de Anonimato',
                'Consideraciones de Seguridad'
            ]
        },
        {
            id: 'analisis-vulnerabilidad',
            title: 'Análisis de Vulnerabilidad',
            duration: 90,
            completed: false,
            subtopics: [
                'Conceptos de Vulnerabilidades',
                'Herramientas de Análisis',
                'Base de Datos CVE',
                'Proceso de Análisis'
            ]
        }
    ]
};

let currentTopicIndex = 0;
let moduleProgress = 0;
let startTime = null;

// ========================================
// SISTEMA UNIVERSAL DE DIAGRAMAS - MÓDULO 4 (Escaneo de Dispositivos)
// ========================================

const UNIVERSAL_DIAGRAM_SYSTEM = {    // Configuración de todos los diagramas del módulo - ADAPTADO AL MÓDULO 4 ESCANEO
    diagrams: [
        { id: 'scan-types-overview', viewBox: '0 0 900 500', topic: 1 },
        { id: 'scanning-methodology', viewBox: '0 0 900 500', topic: 2 },
        { id: 'ceh-methodology', viewBox: '0 0 900 500', topic: 3 },
        { id: 'nmap-process-flow', viewBox: '0 0 900 500', topic: 4 },
        { id: 'banner-grabbing', viewBox: '0 0 900 500', topic: 5 },
        { id: 'proxy-tor-network', viewBox: '0 0 900 500', topic: 6 },
        { id: 'vulnerability-analysis', viewBox: '0 0 900 500', topic: 7 }
    ],
    
    // Estado del sistema
    isInitialized: false,
    fixAttempts: 0,
    maxAttempts: 5,
    isProcessing: false,
    svgCache: null,    // Inicializar sistema de diagramas - IMPLEMENTACIÓN COMPLETA DE REFERENCIA
    async init() {
        if (this.isInitialized || this.isProcessing) {
            console.log('🎯 Universal Diagram System (Escaneo): Ya inicializado o en proceso');
            return;
        }
        
        this.isProcessing = true;
        console.log('🎯 Universal Diagram System (Escaneo): Inicializando para módulo 4...');
        
        // Initialize Icon Fix System if available - con timeout
        if (window.IconFixSystem) {
            try {
                await Promise.race([
                    window.IconFixSystem.init(),
                    new Promise((_, reject) => setTimeout(() => reject(new Error('Timeout')), 3000))
                ]);
                console.log('✅ Icon Fix System inicializado desde Universal Diagram System (Escaneo)');
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
                console.log('✅ Universal Diagram System (Escaneo): SVG content cached');
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

    // Verificar disponibilidad de archivos SVG - IMPLEMENTACIÓN DE REFERENCIA
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

    // Aplicar correcciones a todos los diagramas - IMPLEMENTACIÓN COMPLETA DE REFERENCIA
    async applyFixes() {
        if (this.isProcessing) {
            console.log('🔧 Universal Diagram System (Escaneo): Corrección ya en proceso, saltando...');
            return;
        }
        
        this.fixAttempts++;
        this.isProcessing = true;
        
        console.log(`🔧 Universal Diagram System (Escaneo): Intento ${this.fixAttempts}/${this.maxAttempts}`);
        
        if (this.fixAttempts > this.maxAttempts) {
            console.log('⚠️ Universal Diagram System (Escaneo): Máximo de intentos alcanzado, aplicando respaldos...');
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
                    console.log(`✅ Universal Diagram System (Escaneo): ${processedCount} diagramas procesados exitosamente`);
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
            console.warn('⚠️ Universal Diagram System (Escaneo): Error en carga principal:', error);
            
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

    // Cargar contenido del archivo SVG - IMPLEMENTACIÓN COMPLETA DE REFERENCIA
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
            console.warn('⚠️ Universal Diagram System (Escaneo): Error cargando SVG:', error);
            return null;
        }
    },

    // Procesar todos los diagramas - IMPLEMENTACIÓN COMPLETA DE REFERENCIA
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
                                console.log(`✅ Universal Diagram System (Escaneo): ${diagram.id} (Topic ${diagram.topic}) corregido`);
                            } else {
                                console.warn(`⚠️ Símbolo ${diagram.id} no encontrado en SVG`);
                            }
                            
                        } catch (elementError) {
                            console.warn(`⚠️ Universal Diagram System (Escaneo): Error procesando elemento ${diagram.id}:`, elementError);
                        }
                    }
                });
                
            } catch (diagramError) {
                console.warn(`⚠️ Universal Diagram System (Escaneo): Error procesando diagrama ${diagram.id}:`, diagramError);
            }
        });
        
        if (fixedCount > 0) {
            console.log(`🎉 Universal Diagram System (Escaneo): ${fixedCount} diagramas procesados exitosamente`);
        }
        
        return fixedCount;
    },

    // Aplicar respaldos si falla la carga principal - IMPLEMENTACIÓN COMPLETA DE REFERENCIA
    applyFallbacks() {
        console.log('🛠️ Universal Diagram System (Escaneo): Aplicando respaldos...');
        
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
                                
                                console.log(`🎨 Universal Diagram System (Escaneo): Respaldo aplicado a ${diagram.id} (Topic ${diagram.topic})`);
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
        
        console.log(`🎨 Universal Diagram System (Escaneo): ${fallbackCount} respaldos aplicados`);    },
    
    // Generar contenido de respaldo para cada diagrama - ESPECÍFICO PARA ESCANEO MÓDULO 4
    generateFallbackContent(diagram) {
        const fallbacks = {
            'scan-types-overview': this.generateScanTypesOverviewFallback(),
            'scanning-methodology': this.generateScanningMethodologyFallback(),
            'ceh-methodology': this.generateCehMethodologyFallback(),
            'nmap-process-flow': this.generateNmapProcessFlowFallback(),
            'banner-grabbing': this.generateBannerGrabbingFallback(),
            'proxy-tor-network': this.generateProxyTorNetworkFallback(),
            'vulnerability-analysis': this.generateVulnerabilityAnalysisFallback()
        };
        
        return fallbacks[diagram.id] || this.generateGenericFallback(diagram.id);
    },    // Respaldo para Scan Types Overview - Topic 1
    generateScanTypesOverviewFallback() {
        return `
            <defs>
                <linearGradient id="scanGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#007bff;stop-opacity:1" />
                    <stop offset="100%" style="stop-color:#0056b3;stop-opacity:1" />
                </linearGradient>
                <filter id="scanShadow">
                    <feDropShadow dx="3" dy="3" stdDeviation="3" flood-opacity="0.3"/>
                </filter>
            </defs>
            
            <rect width="900" height="500" fill="#f8f9fa" stroke="#dee2e6" stroke-width="3" rx="15"/>
            
            <!-- Título -->
            <text x="450" y="40" text-anchor="middle" font-size="24" font-weight="bold" fill="#2c3e50">Tipos de Escaneo</text>
            <line x1="200" y1="50" x2="700" y2="50" stroke="#007bff" stroke-width="3"/>
            
            <!-- TCP Scan -->
            <rect x="80" y="100" width="180" height="120" rx="10" fill="#007bff" stroke="#0056b3" stroke-width="2" filter="url(#scanShadow)"/>
            <text x="170" y="130" text-anchor="middle" font-size="16" font-weight="bold" fill="white">TCP CONNECT</text>
            <text x="170" y="150" text-anchor="middle" font-size="16" font-weight="bold" fill="white">SCAN</text>
            <text x="170" y="175" text-anchor="middle" font-size="12" fill="white">• Más confiable</text>
            <text x="170" y="190" text-anchor="middle" font-size="12" fill="white">• Detectado fácilmente</text>
            <text x="170" y="205" text-anchor="middle" font-size="12" fill="white">• Requiere privilegios</text>
            
            <!-- SYN Scan -->
            <rect x="300" y="100" width="180" height="120" rx="10" fill="#28a745" stroke="#1e7e34" stroke-width="2" filter="url(#scanShadow)"/>
            <text x="390" y="130" text-anchor="middle" font-size="16" font-weight="bold" fill="white">SYN STEALTH</text>
            <text x="390" y="150" text-anchor="middle" font-size="16" font-weight="bold" fill="white">SCAN</text>
            <text x="390" y="175" text-anchor="middle" font-size="12" fill="white">• Sigiloso</text>
            <text x="390" y="190" text-anchor="middle" font-size="12" fill="white">• Rápido</text>
            <text x="390" y="205" text-anchor="middle" font-size="12" fill="white">• Menos detectable</text>
            
            <!-- UDP Scan -->
            <rect x="520" y="100" width="180" height="120" rx="10" fill="#ffc107" stroke="#e0a800" stroke-width="2" filter="url(#scanShadow)"/>
            <text x="610" y="130" text-anchor="middle" font-size="16" font-weight="bold" fill="black">UDP SCAN</text>
            <text x="610" y="175" text-anchor="middle" font-size="12" fill="black">• Servicios UDP</text>
            <text x="610" y="190" text-anchor="middle" font-size="12" fill="black">• Más lento</text>
            <text x="610" y="205" text-anchor="middle" font-size="12" fill="black">• Menos confiable</text>
            
            <!-- Stealth Scan -->
            <rect x="190" y="280" width="180" height="120" rx="10" fill="#dc3545" stroke="#c82333" stroke-width="2" filter="url(#scanShadow)"/>
            <text x="280" y="310" text-anchor="middle" font-size="16" font-weight="bold" fill="white">STEALTH</text>
            <text x="280" y="330" text-anchor="middle" font-size="16" font-weight="bold" fill="white">TECHNIQUES</text>
            <text x="280" y="355" text-anchor="middle" font-size="12" fill="white">• FIN, XMAS, NULL</text>
            <text x="280" y="370" text-anchor="middle" font-size="12" fill="white">• Evasión de firewalls</text>
            <text x="280" y="385" text-anchor="middle" font-size="12" fill="white">• ACK scan</text>
            
            <!-- OS Detection -->
            <rect x="410" y="280" width="180" height="120" rx="10" fill="#6f42c1" stroke="#5a2d91" stroke-width="2" filter="url(#scanShadow)"/>
            <text x="500" y="310" text-anchor="middle" font-size="16" font-weight="bold" fill="white">OS DETECTION</text>
            <text x="500" y="355" text-anchor="middle" font-size="12" fill="white">• Fingerprinting</text>
            <text x="500" y="370" text-anchor="middle" font-size="12" fill="white">• Stack analysis</text>
            <text x="500" y="385" text-anchor="middle" font-size="12" fill="white">• Banner grabbing</text>
        `;
    },

    // Respaldo para Scanning Methodology - Topic 2
    generateScanningMethodologyFallback() {
        return `
            <defs>
                <linearGradient id="methodGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#28a745;stop-opacity:1" />
                    <stop offset="100%" style="stop-color:#1e7e34;stop-opacity:1" />
                </linearGradient>
                <filter id="methodShadow">
                    <feDropShadow dx="2" dy="2" stdDeviation="2" flood-opacity="0.3"/>
                </filter>
            </defs>
            
            <rect width="900" height="500" fill="#f8f9fa" stroke="#dee2e6" stroke-width="3" rx="15"/>
            
            <!-- Título -->
            <text x="450" y="35" text-anchor="middle" font-size="22" font-weight="bold" fill="#2c3e50">Metodología de Escaneo</text>
            <line x1="120" y1="45" x2="780" y2="45" stroke="#28a745" stroke-width="3"/>
            
            <!-- Step 1: Check Live Systems -->
            <ellipse cx="150" cy="120" rx="80" ry="45" fill="url(#methodGrad)" stroke="#1e7e34" stroke-width="2" filter="url(#methodShadow)"/>
            <text x="150" y="110" text-anchor="middle" font-size="12" font-weight="bold" fill="white">COMPROBAR</text>
            <text x="150" y="125" text-anchor="middle" font-size="12" font-weight="bold" fill="white">SISTEMAS</text>
            <text x="150" y="140" text-anchor="middle" font-size="12" font-weight="bold" fill="white">VIVOS</text>
            
            <!-- Step 2: Check Open Ports -->
            <rect x="280" y="80" width="120" height="80" rx="10" fill="#007bff" stroke="#0056b3" stroke-width="2" filter="url(#methodShadow)"/>
            <text x="340" y="105" text-anchor="middle" font-size="12" font-weight="bold" fill="white">COMPROBAR</text>
            <text x="340" y="120" text-anchor="middle" font-size="12" font-weight="bold" fill="white">PUERTOS</text>
            <text x="340" y="135" text-anchor="middle" font-size="12" font-weight="bold" fill="white">ABIERTOS</text>
            <text x="340" y="150" text-anchor="middle" font-size="10" fill="white">TCP/UDP Scan</text>
            
            <!-- Step 3: Service Detection -->
            <ellipse cx="500" cy="120" rx="70" ry="40" fill="#ffc107" stroke="#e0a800" stroke-width="2" filter="url(#methodShadow)"/>
            <text x="500" y="110" text-anchor="middle" font-size="12" font-weight="bold" fill="black">CAPTURAR</text>
            <text x="500" y="125" text-anchor="middle" font-size="12" font-weight="bold" fill="black">BANDERAS</text>
            <text x="500" y="140" text-anchor="middle" font-size="12" font-weight="bold" fill="black">SERVICIOS</text>
            
            <!-- Step 4: Vulnerability Analysis -->
            <rect x="620" y="80" width="120" height="80" rx="10" fill="#dc3545" stroke="#c82333" stroke-width="2" filter="url(#methodShadow)"/>
            <text x="680" y="105" text-anchor="middle" font-size="12" font-weight="bold" fill="white">ANALIZAR</text>
            <text x="680" y="120" text-anchor="middle" font-size="12" font-weight="bold" fill="white">VULNERAB.</text>
            <text x="680" y="135" text-anchor="middle" font-size="10" fill="white">CVE Database</text>
            <text x="680" y="150" text-anchor="middle" font-size="10" fill="white">Nessus/OpenVAS</text>
            
            <!-- Step 5: Network Mapping -->
            <rect x="200" y="220" width="140" height="80" rx="10" fill="#6f42c1" stroke="#5a2d91" stroke-width="2" filter="url(#methodShadow)"/>
            <text x="270" y="245" text-anchor="middle" font-size="12" font-weight="bold" fill="white">DIBUJAR</text>
            <text x="270" y="260" text-anchor="middle" font-size="12" font-weight="bold" fill="white">DIAGRAMAS</text>
            <text x="270" y="275" text-anchor="middle" font-size="12" font-weight="bold" fill="white">DE RED</text>
            <text x="270" y="290" text-anchor="middle" font-size="10" fill="white">Topology mapping</text>
            
            <!-- Step 6: Proxy Setup -->
            <rect x="380" y="220" width="140" height="80" rx="10" fill="#17a2b8" stroke="#138496" stroke-width="2" filter="url(#methodShadow)"/>
            <text x="450" y="245" text-anchor="middle" font-size="12" font-weight="bold" fill="white">PREPARAR</text>
            <text x="450" y="260" text-anchor="middle" font-size="12" font-weight="bold" fill="white">PROXIES</text>
            <text x="450" y="280" text-anchor="middle" font-size="10" fill="white">Anonymization</text>
            <text x="450" y="295" text-anchor="middle" font-size="10" fill="white">Tor/VPN</text>
            
            <!-- Arrows -->
            <defs>
                <marker id="arrowMethod" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                    <polygon points="0 0, 10 3.5, 0 7" fill="#6c757d" />
                </marker>
            </defs>
            <line x1="230" y1="120" x2="270" y2="120" stroke="#6c757d" stroke-width="2" marker-end="url(#arrowMethod)"/>
            <line x1="410" y1="120" x2="430" y2="120" stroke="#6c757d" stroke-width="2" marker-end="url(#arrowMethod)"/>
            <line x1="570" y1="120" x2="610" y2="120" stroke="#6c757d" stroke-width="2" marker-end="url(#arrowMethod)"/>
            <line x1="340" y1="170" x2="270" y2="210" stroke="#6c757d" stroke-width="2" marker-end="url(#arrowMethod)"/>
            <line x1="500" y1="170" x2="450" y2="210" stroke="#6c757d" stroke-width="2" marker-end="url(#arrowMethod)"/>
            
            <!-- Tools Section -->
            <rect x="120" y="350" width="660" height="120" rx="10" fill="#e9ecef" stroke="#adb5bd" stroke-width="2"/>
            <text x="450" y="375" text-anchor="middle" font-size="16" font-weight="bold" fill="#495057">Herramientas Principales</text>
            
            <circle cx="200" cy="420" r="25" fill="#007bff" stroke="#0056b3" stroke-width="2"/>
            <text x="200" y="425" text-anchor="middle" font-size="12" font-weight="bold" fill="white">Nmap</text>
            
            <circle cx="300" cy="420" r="25" fill="#28a745" stroke="#1e7e34" stroke-width="2"/>
            <text x="300" y="425" text-anchor="middle" font-size="12" font-weight="bold" fill="white">Hping3</text>
            
            <circle cx="400" cy="420" r="25" fill="#dc3545" stroke="#c82333" stroke-width="2"/>
            <text x="400" y="425" text-anchor="middle" font-size="11" font-weight="bold" fill="white">Nessus</text>
            
            <circle cx="500" cy="420" r="25" fill="#ffc107" stroke="#e0a800" stroke-width="2"/>
            <text x="500" y="425" text-anchor="middle" font-size="11" font-weight="bold" fill="black">Masscan</text>
            
            <circle cx="600" cy="420" r="25" fill="#6f42c1" stroke="#5a2d91" stroke-width="2"/>
            <text x="600" y="425" text-anchor="middle" font-size="12" font-weight="bold" fill="white">Zenmap</text>
            
            <circle cx="700" cy="420" r="25" fill="#17a2b8" stroke="#138496" stroke-width="2"/>
            <text x="700" y="425" text-anchor="middle" font-size="12" font-weight="bold" fill="white">Proxies</text>
        `;    },
    
    // Respaldo para CEH Methodology - Topic 3
    generateCehMethodologyFallback() {
        return `
            <defs>
                <linearGradient id="cehGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#dc3545;stop-opacity:1" />
                    <stop offset="100%" style="stop-color:#c82333;stop-opacity:1" />
                </linearGradient>
                <filter id="cehShadow">
                    <feDropShadow dx="2" dy="2" stdDeviation="2" flood-opacity="0.3"/>
                </filter>
            </defs>
            
            <rect width="900" height="500" fill="#f8f9fa" stroke="#dee2e6" stroke-width="3" rx="15"/>
            
            <!-- Título -->
            <text x="450" y="35" text-anchor="middle" font-size="22" font-weight="bold" fill="#2c3e50">Metodología CEH de Exploración</text>
            <line x1="120" y1="45" x2="780" y2="45" stroke="#dc3545" stroke-width="3"/>
            
            <!-- Phase 1: Information Gathering -->
            <rect x="80" y="80" width="160" height="80" rx="10" fill="url(#cehGrad)" stroke="#c82333" stroke-width="2" filter="url(#cehShadow)"/>
            <text x="160" y="105" text-anchor="middle" font-size="14" font-weight="bold" fill="white">OBTENCIÓN DE</text>
            <text x="160" y="120" text-anchor="middle" font-size="14" font-weight="bold" fill="white">INFORMACIÓN</text>
            <text x="160" y="140" text-anchor="middle" font-size="11" fill="white">• Reconnaissance</text>
            <text x="160" y="155" text-anchor="middle" font-size="11" fill="white">• Footprinting</text>
            
            <!-- Phase 2: Enumeration -->
            <rect x="280" y="80" width="160" height="80" rx="10" fill="#007bff" stroke="#0056b3" stroke-width="2" filter="url(#cehShadow)"/>
            <text x="360" y="105" text-anchor="middle" font-size="14" font-weight="bold" fill="white">ENUMERACIÓN</text>
            <text x="360" y="125" text-anchor="middle" font-size="11" fill="white">• Service detection</text>
            <text x="360" y="140" text-anchor="middle" font-size="11" fill="white">• Banner grabbing</text>
            <text x="360" y="155" text-anchor="middle" font-size="11" fill="white">• OS fingerprinting</text>
            
            <!-- Phase 3: Access -->
            <rect x="480" y="80" width="160" height="80" rx="10" fill="#28a745" stroke="#1e7e34" stroke-width="2" filter="url(#cehShadow)"/>
            <text x="560" y="105" text-anchor="middle" font-size="14" font-weight="bold" fill="white">OBTENCIÓN DE</text>
            <text x="560" y="120" text-anchor="middle" font-size="14" font-weight="bold" fill="white">ACCESO</text>
            <text x="560" y="140" text-anchor="middle" font-size="11" fill="white">• Vulnerability exploit</text>
            <text x="560" y="155" text-anchor="middle" font-size="11" fill="white">• Password attacks</text>
            
            <!-- Phase 4: Privilege Escalation -->
            <rect x="680" y="80" width="160" height="80" rx="10" fill="#ffc107" stroke="#e0a800" stroke-width="2" filter="url(#cehShadow)"/>
            <text x="760" y="105" text-anchor="middle" font-size="14" font-weight="bold" fill="black">ESCALAMIENTO</text>
            <text x="760" y="120" text-anchor="middle" font-size="14" font-weight="bold" fill="black">PRIVILEGIOS</text>
            <text x="760" y="140" text-anchor="middle" font-size="11" fill="black">• Local exploits</text>
            <text x="760" y="155" text-anchor="middle" font-size="11" fill="black">• System compromise</text>
            
            <!-- Phase 5: Reporting -->
            <rect x="380" y="220" width="160" height="80" rx="10" fill="#6f42c1" stroke="#5a2d91" stroke-width="2" filter="url(#cehShadow)"/>
            <text x="460" y="245" text-anchor="middle" font-size="14" font-weight="bold" fill="white">REPORTE</text>
            <text x="460" y="265" text-anchor="middle" font-size="11" fill="white">• Executive summary</text>
            <text x="460" y="280" text-anchor="middle" font-size="11" fill="white">• Technical details</text>
            <text x="460" y="295" text-anchor="middle" font-size="11" fill="white">• Recommendations</text>
            
            <!-- Arrows -->
            <defs>
                <marker id="arrowCeh" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                    <polygon points="0 0, 10 3.5, 0 7" fill="#6c757d" />
                </marker>
            </defs>
            <line x1="250" y1="120" x2="270" y2="120" stroke="#6c757d" stroke-width="2" marker-end="url(#arrowCeh)"/>
            <line x1="450" y1="120" x2="470" y2="120" stroke="#6c757d" stroke-width="2" marker-end="url(#arrowCeh)"/>
            <line x1="650" y1="120" x2="670" y2="120" stroke="#6c757d" stroke-width="2" marker-end="url(#arrowCeh)"/>
            <line x1="560" y1="170" x2="460" y2="210" stroke="#6c757d" stroke-width="2" marker-end="url(#arrowCeh)"/>
            
            <!-- CEH Principles -->
            <rect x="120" y="350" width="660" height="120" rx="10" fill="#e9ecef" stroke="#adb5bd" stroke-width="2"/>
            <text x="450" y="375" text-anchor="middle" font-size="16" font-weight="bold" fill="#495057">Principios Éticos CEH</text>
            
            <rect x="150" y="390" width="150" height="60" rx="5" fill="#28a745" stroke="#1e7e34" stroke-width="1"/>
            <text x="225" y="410" text-anchor="middle" font-size="12" font-weight="bold" fill="white">AUTORIZACIÓN</text>
            <text x="225" y="425" text-anchor="middle" font-size="10" fill="white">Permiso explícito</text>
            <text x="225" y="440" text-anchor="middle" font-size="10" fill="white">del propietario</text>
            
            <rect x="320" y="390" width="150" height="60" rx="5" fill="#007bff" stroke="#0056b3" stroke-width="1"/>
            <text x="395" y="410" text-anchor="middle" font-size="12" font-weight="bold" fill="white">CONFIDENCIALIDAD</text>
            <text x="395" y="425" text-anchor="middle" font-size="10" fill="white">Proteger la</text>
            <text x="395" y="440" text-anchor="middle" font-size="10" fill="white">información</text>
            
            <rect x="490" y="390" width="150" height="60" rx="5" fill="#ffc107" stroke="#e0a800" stroke-width="1"/>
            <text x="565" y="410" text-anchor="middle" font-size="12" font-weight="bold" fill="black">RESPONSABILIDAD</text>
            <text x="565" y="425" text-anchor="middle" font-size="10" fill="black">Uso responsable</text>
            <text x="565" y="440" text-anchor="middle" font-size="10" fill="black">de habilidades</text>
            
            <rect x="660" y="390" width="120" height="60" rx="5" fill="#dc3545" stroke="#c82333" stroke-width="1"/>
            <text x="720" y="410" text-anchor="middle" font-size="12" font-weight="bold" fill="white">NO DAÑO</text>
            <text x="720" y="425" text-anchor="middle" font-size="10" fill="white">Minimizar</text>
            <text x="720" y="440" text-anchor="middle" font-size="10" fill="white">impacto</text>
        `;
    },
    
    // Respaldo para Nmap Process Flow - Topic 4
    generateNmapProcessFlowFallback() {
        return `
            <defs>
                <linearGradient id="nmapGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#17a2b8;stop-opacity:1" />
                    <stop offset="100%" style="stop-color:#138496;stop-opacity:1" />
                </linearGradient>
                <filter id="nmapShadow">
                    <feDropShadow dx="2" dy="2" stdDeviation="2" flood-opacity="0.3"/>
                </filter>
            </defs>
            
            <rect width="900" height="500" fill="#f8f9fa" stroke="#dee2e6" stroke-width="3" rx="15"/>
            
            <!-- Título -->
            <text x="450" y="35" text-anchor="middle" font-size="22" font-weight="bold" fill="#2c3e50">Proceso de Flujo con Nmap</text>
            <line x1="150" y1="45" x2="750" y2="45" stroke="#17a2b8" stroke-width="3"/>
            
            <!-- Host Discovery -->
            <ellipse cx="180" cy="120" rx="70" ry="40" fill="url(#nmapGrad)" stroke="#138496" stroke-width="2" filter="url(#nmapShadow)"/>
            <text x="180" y="110" text-anchor="middle" font-size="12" font-weight="bold" fill="white">HOST</text>
            <text x="180" y="125" text-anchor="middle" font-size="12" font-weight="bold" fill="white">DISCOVERY</text>
            <text x="180" y="140" text-anchor="middle" font-size="10" fill="white">-sn (Ping scan)</text>
            
            <!-- Port Scanning -->
            <rect x="320" y="80" width="120" height="80" rx="10" fill="#28a745" stroke="#1e7e34" stroke-width="2" filter="url(#nmapShadow)"/>
            <text x="380" y="105" text-anchor="middle" font-size="12" font-weight="bold" fill="white">PORT</text>
            <text x="380" y="120" text-anchor="middle" font-size="12" font-weight="bold" fill="white">SCANNING</text>
            <text x="380" y="140" text-anchor="middle" font-size="10" fill="white">-sS (SYN scan)</text>
            <text x="380" y="155" text-anchor="middle" font-size="10" fill="white">-sT (TCP connect)</text>
            
            <!-- Service Detection -->
            <ellipse cx="550" cy="120" rx="70" ry="40" fill="#ffc107" stroke="#e0a800" stroke-width="2" filter="url(#nmapShadow)"/>
            <text x="550" y="110" text-anchor="middle" font-size="12" font-weight="bold" fill="black">SERVICE</text>
            <text x="550" y="125" text-anchor="middle" font-size="12" font-weight="bold" fill="black">DETECTION</text>
            <text x="550" y="140" text-anchor="middle" font-size="10" fill="black">-sV (Version)</text>
            
            <!-- OS Detection -->
            <rect x="680" y="80" width="120" height="80" rx="10" fill="#dc3545" stroke="#c82333" stroke-width="2" filter="url(#nmapShadow)"/>
            <text x="740" y="105" text-anchor="middle" font-size="12" font-weight="bold" fill="white">OS</text>
            <text x="740" y="120" text-anchor="middle" font-size="12" font-weight="bold" fill="white">DETECTION</text>
            <text x="740" y="140" text-anchor="middle" font-size="10" fill="white">-O (OS scan)</text>
            <text x="740" y="155" text-anchor="middle" font-size="10" fill="white">Fingerprinting</text>
            
            <!-- Script Scanning -->
            <rect x="200" y="220" width="140" height="80" rx="10" fill="#6f42c1" stroke="#5a2d91" stroke-width="2" filter="url(#nmapShadow)"/>
            <text x="270" y="245" text-anchor="middle" font-size="12" font-weight="bold" fill="white">SCRIPT</text>
            <text x="270" y="260" text-anchor="middle" font-size="12" font-weight="bold" fill="white">SCANNING</text>
            <text x="270" y="280" text-anchor="middle" font-size="10" fill="white">-sC (Default scripts)</text>
            <text x="270" y="295" text-anchor="middle" font-size="10" fill="white">--script vuln</text>
            
            <!-- Aggressive Scan -->
            <rect x="380" y="220" width="140" height="80" rx="10" fill="#fd7e14" stroke="#dc6502" stroke-width="2" filter="url(#nmapShadow)"/>
            <text x="450" y="245" text-anchor="middle" font-size="12" font-weight="bold" fill="white">AGGRESSIVE</text>
            <text x="450" y="260" text-anchor="middle" font-size="12" font-weight="bold" fill="white">SCAN</text>
            <text x="450" y="280" text-anchor="middle" font-size="10" fill="white">-A (All-in-one)</text>
            <text x="450" y="295" text-anchor="middle" font-size="10" fill="white">-T4 (Timing)</text>
            
            <!-- Output -->
            <rect x="560" y="220" width="140" height="80" rx="10" fill="#198754" stroke="#157347" stroke-width="2" filter="url(#nmapShadow)"/>
            <text x="630" y="245" text-anchor="middle" font-size="12" font-weight="bold" fill="white">OUTPUT</text>
            <text x="630" y="260" text-anchor="middle" font-size="12" font-weight="bold" fill="white">FORMATS</text>
            <text x="630" y="280" text-anchor="middle" font-size="10" fill="white">-oA (All formats)</text>
            <text x="630" y="295" text-anchor="middle" font-size="10" fill="white">XML, JSON, TXT</text>
            
            <!-- Arrows -->
            <defs>
                <marker id="arrowNmap" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                    <polygon points="0 0, 10 3.5, 0 7" fill="#6c757d" />
                </marker>
            </defs>
            <line x1="250" y1="120" x2="310" y2="120" stroke="#6c757d" stroke-width="2" marker-end="url(#arrowNmap)"/>
            <line x1="450" y1="120" x2="480" y2="120" stroke="#6c757d" stroke-width="2" marker-end="url(#arrowNmap)"/>
            <line x1="620" y1="120" x2="670" y2="120" stroke="#6c757d" stroke-width="2" marker-end="url(#arrowNmap)"/>
            <line x1="380" y1="170" x2="270" y2="210" stroke="#6c757d" stroke-width="2" marker-end="url(#arrowNmap)"/>
            <line x1="550" y1="170" x2="450" y2="210" stroke="#6c757d" stroke-width="2" marker-end="url(#arrowNmap)"/>
            <line x1="740" y1="170" x2="630" y2="210" stroke="#6c757d" stroke-width="2" marker-end="url(#arrowNmap)"/>
            
            <!-- Common Commands -->
            <rect x="120" y="350" width="660" height="120" rx="10" fill="#e9ecef" stroke="#adb5bd" stroke-width="2"/>
            <text x="450" y="375" text-anchor="middle" font-size="16" font-weight="bold" fill="#495057">Comandos Nmap Comunes</text>
            
            <rect x="140" y="390" width="200" height="25" rx="3" fill="#212529" stroke="#000" stroke-width="1"/>
            <text x="240" y="405" text-anchor="middle" font-size="10" font-family="monospace" fill="#fff">nmap -sS -sV -O target</text>
            
            <rect x="350" y="390" width="200" height="25" rx="3" fill="#212529" stroke="#000" stroke-width="1"/>
            <text x="450" y="405" text-anchor="middle" font-size="10" font-family="monospace" fill="#fff">nmap -A -T4 target</text>
            
            <rect x="560" y="390" width="200" height="25" rx="3" fill="#212529" stroke="#000" stroke-width="1"/>
            <text x="660" y="405" text-anchor="middle" font-size="10" font-family="monospace" fill="#fff">nmap --script vuln target</text>
            
            <rect x="140" y="425" width="200" height="25" rx="3" fill="#212529" stroke="#000" stroke-width="1"/>
            <text x="240" y="440" text-anchor="middle" font-size="10" font-family="monospace" fill="#fff">nmap -sn 192.168.1.0/24</text>
            
            <rect x="350" y="425" width="200" height="25" rx="3" fill="#212529" stroke="#000" stroke-width="1"/>
            <text x="450" y="440" text-anchor="middle" font-size="10" font-family="monospace" fill="#fff">nmap -p- --top-ports 1000</text>
            
            <rect x="560" y="425" width="200" height="25" rx="3" fill="#212529" stroke="#000" stroke-width="1"/>
            <text x="660" y="440" text-anchor="middle" font-size="10" font-family="monospace" fill="#fff">nmap -oA scan_results</text>
        `;
    },
    
    // Respaldo para Banner Grabbing - Topic 5
    generateBannerGrabbingFallback() {
        return `
            <defs>
                <linearGradient id="bannerGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#fd7e14;stop-opacity:1" />
                    <stop offset="100%" style="stop-color:#dc6502;stop-opacity:1" />
                </linearGradient>
                <filter id="bannerShadow">
                    <feDropShadow dx="2" dy="2" stdDeviation="2" flood-opacity="0.3"/>
                </filter>
            </defs>
            
            <rect width="900" height="500" fill="#f8f9fa" stroke="#dee2e6" stroke-width="3" rx="15"/>
            
            <!-- Título -->
            <text x="450" y="35" text-anchor="middle" font-size="22" font-weight="bold" fill="#2c3e50">Banner Grabbing y OS Fingerprinting</text>
            <line x1="100" y1="45" x2="800" y2="45" stroke="#fd7e14" stroke-width="3"/>
            
            <!-- Banner Grabbing Process -->
            <ellipse cx="180" cy="120" rx="80" ry="45" fill="url(#bannerGrad)" stroke="#dc6502" stroke-width="2" filter="url(#bannerShadow)"/>
            <text x="180" y="110" text-anchor="middle" font-size="13" font-weight="bold" fill="white">BANNER</text>
            <text x="180" y="125" text-anchor="middle" font-size="13" font-weight="bold" fill="white">GRABBING</text>
            <text x="180" y="140" text-anchor="middle" font-size="10" fill="white">Service identification</text>
            
            <!-- Service Detection -->
            <rect x="320" y="80" width="140" height="80" rx="10" fill="#28a745" stroke="#1e7e34" stroke-width="2" filter="url(#bannerShadow)"/>
            <text x="390" y="105" text-anchor="middle" font-size="13" font-weight="bold" fill="white">SERVICE</text>
            <text x="390" y="120" text-anchor="middle" font-size="13" font-weight="bold" fill="white">DETECTION</text>
            <text x="390" y="140" text-anchor="middle" font-size="10" fill="white">Port 80: Apache</text>
            <text x="390" y="155" text-anchor="middle" font-size="10" fill="white">Port 22: OpenSSH</text>
            
            <!-- OS Fingerprinting -->
            <ellipse cx="580" cy="120" rx="80" ry="45" fill="#dc3545" stroke="#c82333" stroke-width="2" filter="url(#bannerShadow)"/>
            <text x="580" y="110" text-anchor="middle" font-size="13" font-weight="bold" fill="white">OS</text>
            <text x="580" y="125" text-anchor="middle" font-size="13" font-weight="bold" fill="white">FINGERPRINTING</text>
            <text x="580" y="140" text-anchor="middle" font-size="10" fill="white">TTL, Window size</text>
            
            <!-- Version Detection -->
            <rect x="720" y="80" width="120" height="80" rx="10" fill="#6f42c1" stroke="#5a2d91" stroke-width="2" filter="url(#bannerShadow)"/>
            <text x="780" y="105" text-anchor="middle" font-size="13" font-weight="bold" fill="white">VERSION</text>
            <text x="780" y="120" text-anchor="middle" font-size="13" font-weight="bold" fill="white">DETECTION</text>
            <text x="780" y="140" text-anchor="middle" font-size="10" fill="white">Apache 2.4.41</text>
            <text x="780" y="155" text-anchor="middle" font-size="10" fill="white">OpenSSH 8.2</text>
            
            <!-- Tools Section -->
            <rect x="100" y="220" width="700" height="160" rx="10" fill="#e9ecef" stroke="#adb5bd" stroke-width="2"/>
            <text x="450" y="245" text-anchor="middle" font-size="16" font-weight="bold" fill="#495057">Herramientas de Banner Grabbing</text>
            
            <!-- Netcat -->
            <rect x="130" y="270" width="120" height="60" rx="5" fill="#007bff" stroke="#0056b3" stroke-width="2"/>
            <text x="190" y="290" text-anchor="middle" font-size="12" font-weight="bold" fill="white">NETCAT</text>
            <text x="190" y="305" text-anchor="middle" font-size="10" fill="white">nc -nv target port</text>
            <text x="190" y="320" text-anchor="middle" font-size="10" fill="white">Raw connection</text>
            
            <!-- Telnet -->
            <rect x="270" y="270" width="120" height="60" rx="5" fill="#28a745" stroke="#1e7e34" stroke-width="2"/>
            <text x="330" y="290" text-anchor="middle" font-size="12" font-weight="bold" fill="white">TELNET</text>
            <text x="330" y="305" text-anchor="middle" font-size="10" fill="white">telnet target port</text>
            <text x="330" y="320" text-anchor="middle" font-size="10" fill="white">Interactive</text>
            
            <!-- Nmap -->
            <rect x="410" y="270" width="120" height="60" rx="5" fill="#ffc107" stroke="#e0a800" stroke-width="2"/>
            <text x="470" y="290" text-anchor="middle" font-size="12" font-weight="bold" fill="black">NMAP</text>
            <text x="470" y="305" text-anchor="middle" font-size="10" fill="black">nmap -sV target</text>
            <text x="470" y="320" text-anchor="middle" font-size="10" fill="black">Automated</text>
            
            <!-- Dmitry -->
            <rect x="550" y="270" width="120" height="60" rx="5" fill="#dc3545" stroke="#c82333" stroke-width="2"/>
            <text x="610" y="290" text-anchor="middle" font-size="12" font-weight="bold" fill="white">DMITRY</text>
            <text x="610" y="305" text-anchor="middle" font-size="10" fill="white">dmitry -pb target</text>
            <text x="610" y="320" text-anchor="middle" font-size="10" fill="white">Comprehensive</text>
            
            <!-- Amap -->
            <rect x="690" y="270" width="120" height="60" rx="5" fill="#6f42c1" stroke="#5a2d91" stroke-width="2"/>
            <text x="750" y="290" text-anchor="middle" font-size="12" font-weight="bold" fill="white">AMAP</text>
            <text x="750" y="305" text-anchor="middle" font-size="10" fill="white">amap -bq target</text>
            <text x="750" y="320" text-anchor="middle" font-size="10" fill="white">Application map</text>
            
            <!-- Example Banners -->
            <rect x="130" y="350" width="640" height="100" rx="5" fill="#212529" stroke="#000" stroke-width="2"/>
            <text x="450" y="370" text-anchor="middle" font-size="14" font-weight="bold" fill="#fff">Ejemplos de Banners</text>
            
            <text x="140" y="390" font-size="11" font-family="monospace" fill="#28a745">HTTP/1.1 200 OK</text>
            <text x="140" y="405" font-size="11" font-family="monospace" fill="#28a745">Server: Apache/2.4.41 (Ubuntu)</text>
            
            <text x="450" y="390" font-size="11" font-family="monospace" fill="#ffc107">SSH-2.0-OpenSSH_8.2p1 Ubuntu-4ubuntu0.5</text>
            
            <text x="140" y="425" font-size="11" font-family="monospace" fill="#17a2b8">220 ProFTPD 1.3.6 Server (Debian)</text>
            
            <text x="450" y="425" font-size="11" font-family="monospace" fill="#dc3545">Microsoft-IIS/10.0</text>
            
            <!-- Arrows -->
            <defs>
                <marker id="arrowBanner" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                    <polygon points="0 0, 10 3.5, 0 7" fill="#6c757d" />
                </marker>
            </defs>
            <line x1="260" y1="120" x2="310" y2="120" stroke="#6c757d" stroke-width="2" marker-end="url(#arrowBanner)"/>
            <line x1="470" y1="120" x2="500" y2="120" stroke="#6c757d" stroke-width="2" marker-end="url(#arrowBanner)"/>
            <line x1="660" y1="120" x2="710" y2="120" stroke="#6c757d" stroke-width="2" marker-end="url(#arrowBanner)"/>
        `;
    },
    
    // Respaldo para Proxy Tor Network - Topic 6
    generateProxyTorNetworkFallback() {
        return `
            <defs>
                <linearGradient id="torGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#6f42c1;stop-opacity:1" />
                    <stop offset="100%" style="stop-color:#5a2d91;stop-opacity:1" />
                </linearGradient>
                <filter id="torShadow">
                    <feDropShadow dx="2" dy="2" stdDeviation="2" flood-opacity="0.3"/>
                </filter>
            </defs>
            
            <rect width="900" height="500" fill="#f8f9fa" stroke="#dee2e6" stroke-width="3" rx="15"/>
            
            <!-- Título -->
            <text x="450" y="35" text-anchor="middle" font-size="22" font-weight="bold" fill="#2c3e50">Proxychains, Anonimizadores y Red Tor</text>
            <line x1="80" y1="45" x2="820" y2="45" stroke="#6f42c1" stroke-width="3"/>
            
            <!-- User -->
            <circle cx="120" cy="120" r="30" fill="#007bff" stroke="#0056b3" stroke-width="3" filter="url(#torShadow)"/>
            <text x="120" y="120" text-anchor="middle" font-size="12" font-weight="bold" fill="white">USER</text>
            <text x="120" y="135" text-anchor="middle" font-size="12" font-weight="bold" fill="white">CLIENT</text>
            
            <!-- Proxy 1 -->
            <rect x="220" y="80" width="80" height="80" rx="10" fill="url(#torGrad)" stroke="#5a2d91" stroke-width="2" filter="url(#torShadow)"/>
            <text x="260" y="105" text-anchor="middle" font-size="11" font-weight="bold" fill="white">PROXY 1</text>
            <text x="260" y="120" text-anchor="middle" font-size="11" font-weight="bold" fill="white">SOCKS5</text>
            <text x="260" y="135" text-anchor="middle" font-size="9" fill="white">Entry Node</text>
            <text x="260" y="150" text-anchor="middle" font-size="9" fill="white">IP: Hidden</text>
            
            <!-- Proxy 2 -->
            <rect x="350" y="80" width="80" height="80" rx="10" fill="#28a745" stroke="#1e7e34" stroke-width="2" filter="url(#torShadow)"/>
            <text x="390" y="105" text-anchor="middle" font-size="11" font-weight="bold" fill="white">PROXY 2</text>
            <text x="390" y="120" text-anchor="middle" font-size="11" font-weight="bold" fill="white">HTTP</text>
            <text x="390" y="135" text-anchor="middle" font-size="9" fill="white">Middle Node</text>
            <text x="390" y="150" text-anchor="middle" font-size="9" fill="white">Relay</text>
            
            <!-- Proxy 3 -->
            <rect x="480" y="80" width="80" height="80" rx="10" fill="#ffc107" stroke="#e0a800" stroke-width="2" filter="url(#torShadow)"/>
            <text x="520" y="105" text-anchor="middle" font-size="11" font-weight="bold" fill="black">PROXY 3</text>
            <text x="520" y="120" text-anchor="middle" font-size="11" font-weight="bold" fill="black">VPN</text>
            <text x="520" y="135" text-anchor="middle" font-size="9" fill="black">Exit Node</text>
            <text x="520" y="150" text-anchor="middle" font-size="9" fill="black">Final Hop</text>
            
            <!-- Target -->
            <circle cx="650" cy="120" r="30" fill="#dc3545" stroke="#c82333" stroke-width="3" filter="url(#torShadow)"/>
            <text x="650" y="115" text-anchor="middle" font-size="12" font-weight="bold" fill="white">TARGET</text>
            <text x="650" y="130" text-anchor="middle" font-size="12" font-weight="bold" fill="white">SERVER</text>
            
            <!-- Tor Network -->
            <ellipse cx="780" cy="120" rx="60" ry="35" fill="#343a40" stroke="#212529" stroke-width="2" filter="url(#torShadow)"/>
            <text x="780" y="115" text-anchor="middle" font-size="12" font-weight="bold" fill="white">TOR</text>
            <text x="780" y="130" text-anchor="middle" font-size="12" font-weight="bold" fill="white">NETWORK</text>
            
            <!-- Connection lines with encryption -->
            <line x1="150" y1="120" x2="210" y2="120" stroke="#007bff" stroke-width="4" stroke-dasharray="5,5"/>
            <text x="180" y="110" text-anchor="middle" font-size="8" fill="#007bff">Encrypted</text>
            
            <line x1="310" y1="120" x2="340" y2="120" stroke="#6f42c1" stroke-width="4" stroke-dasharray="5,5"/>
            <text x="325" y="110" text-anchor="middle" font-size="8" fill="#6f42c1">Layer 1</text>
            
            <line x1="440" y1="120" x2="470" y2="120" stroke="#28a745" stroke-width="4" stroke-dasharray="5,5"/>
            <text x="455" y="110" text-anchor="middle" font-size="8" fill="#28a745">Layer 2</text>
            
            <line x1="570" y1="120" x2="610" y2="120" stroke="#ffc107" stroke-width="4" stroke-dasharray="5,5"/>
            <text x="590" y="110" text-anchor="middle" font-size="8" fill="#ffc107">Layer 3</text>
            
            <line x1="690" y1="120" x2="720" y2="120" stroke="#dc3545" stroke-width="4"/>
            <text x="705" y="110" text-anchor="middle" font-size="8" fill="#dc3545">Direct</text>
            
            <!-- Proxychains Configuration -->
            <rect x="100" y="220" width="700" height="200" rx="10" fill="#e9ecef" stroke="#adb5bd" stroke-width="2"/>
            <text x="450" y="245" text-anchor="middle" font-size="16" font-weight="bold" fill="#495057">Configuración Proxychains</text>
            
            <!-- Config file example -->
            <rect x="120" y="260" width="330" height="140" rx="5" fill="#212529" stroke="#000" stroke-width="2"/>
            <text x="130" y="280" font-size="11" font-family="monospace" fill="#28a745"># /etc/proxychains.conf</text>
            <text x="130" y="295" font-size="11" font-family="monospace" fill="#fff">strict_chain</text>
            <text x="130" y="310" font-size="11" font-family="monospace" fill="#fff">proxy_dns</text>
            <text x="130" y="325" font-size="11" font-family="monospace" fill="#fff">remote_dns_subnet 224</text>
            <text x="130" y="340" font-size="11" font-family="monospace" fill="#fff">tcp_read_time_out 15000</text>
            <text x="130" y="355" font-size="11" font-family="monospace" fill="#fff">tcp_connect_time_out 8000</text>
            <text x="130" y="370" font-size="11" font-family="monospace" fill="#ffc107">[ProxyList]</text>
            <text x="130" y="385" font-size="11" font-family="monospace" fill="#17a2b8">socks5 127.0.0.1 9050</text>
            
            <!-- Commands -->
            <rect x="470" y="260" width="310" height="140" rx="5" fill="#495057" stroke="#343a40" stroke-width="2"/>
            <text x="480" y="280" font-size="12" font-weight="bold" fill="#fff">Comandos Comunes</text>
            
            <rect x="480" y="290" width="290" height="20" rx="3" fill="#212529"/>
            <text x="485" y="305" font-size="10" font-family="monospace" fill="#28a745">proxychains nmap -sT target</text>
            
            <rect x="480" y="315" width="290" height="20" rx="3" fill="#212529"/>
            <text x="485" y="330" font-size="10" font-family="monospace" fill="#17a2b8">proxychains curl http://target</text>
            
            <rect x="480" y="340" width="290" height="20" rx="3" fill="#212529"/>
            <text x="485" y="355" font-size="10" font-family="monospace" fill="#ffc107">torify firefox</text>
            
            <rect x="480" y="365" width="290" height="20" rx="3" fill="#212529"/>
            <text x="485" y="380" font-size="10" font-family="monospace" fill="#dc3545">torsocks ssh user@target</text>
            
            <!-- Anonymity levels -->
            <rect x="150" y="440" width="600" height="40" rx="5" fill="#f8f9fa" stroke="#dee2e6" stroke-width="1"/>
            <text x="450" y="455" text-anchor="middle" font-size="14" font-weight="bold" fill="#495057">Niveles de Anonimato</text>
            <text x="200" y="470" text-anchor="middle" font-size="11" fill="#28a745">Alto: Tor + VPN</text>
            <text x="350" y="470" text-anchor="middle" font-size="11" fill="#ffc107">Medio: Proxychains</text>
            <text x="500" y="470" text-anchor="middle" font-size="11" fill="#fd7e14">Bajo: Proxy simple</text>
            <text x="650" y="470" text-anchor="middle" font-size="11" fill="#dc3545">Ninguno: Conexión directa</text>
        `;
    },
    
    // Respaldo para Vulnerability Analysis - Topic 7
    generateVulnerabilityAnalysisFallback() {
        return `
            <defs>
                <linearGradient id="vulnGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#dc3545;stop-opacity:1" />
                    <stop offset="100%" style="stop-color:#c82333;stop-opacity:1" />
                </linearGradient>
                <linearGradient id="assessGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#ffc107;stop-opacity:1" />
                    <stop offset="100%" style="stop-color:#e0a800;stop-opacity:1" />
                </linearGradient>
                <filter id="vulnShadow">
                    <feDropShadow dx="3" dy="3" stdDeviation="3" flood-opacity="0.3"/>
                </filter>
            </defs>
            
            <rect width="900" height="500" fill="#f8f9fa" stroke="#dee2e6" stroke-width="3" rx="15"/>
            
            <!-- Título -->
            <text x="450" y="35" text-anchor="middle" font-size="22" font-weight="bold" fill="#2c3e50">Proceso de Evaluación de Vulnerabilidades</text>
            <line x1="100" y1="45" x2="800" y2="45" stroke="#dc3545" stroke-width="3"/>
            
            <!-- Discovery Phase -->
            <rect x="80" y="80" width="160" height="90" rx="10" fill="#007bff" stroke="#0056b3" stroke-width="2" filter="url(#vulnShadow)"/>
            <text x="160" y="105" text-anchor="middle" font-size="14" font-weight="bold" fill="white">DESCUBRIMIENTO</text>
            <text x="160" y="125" text-anchor="middle" font-size="11" fill="white">• Escaneo de puertos</text>
            <text x="160" y="140" text-anchor="middle" font-size="11" fill="white">• Detección servicios</text>
            <text x="160" y="155" text-anchor="middle" font-size="11" fill="white">• Identificación SO</text>
            
            <!-- Vulnerability Scanning -->
            <rect x="280" y="80" width="160" height="90" rx="10" fill="url(#vulnGrad)" stroke="#c82333" stroke-width="2" filter="url(#vulnShadow)"/>
            <text x="360" y="105" text-anchor="middle" font-size="14" font-weight="bold" fill="white">ESCANEO VULNS</text>
            <text x="360" y="125" text-anchor="middle" font-size="11" fill="white">• Nessus/OpenVAS</text>
            <text x="360" y="140" text-anchor="middle" font-size="11" fill="white">• Nmap scripts</text>
            <text x="360" y="155" text-anchor="middle" font-size="11" fill="white">• CVE Database</text>
            
            <!-- Analysis -->
            <rect x="480" y="80" width="160" height="90" rx="10" fill="url(#assessGrad)" stroke="#e0a800" stroke-width="2" filter="url(#vulnShadow)"/>
            <text x="560" y="105" text-anchor="middle" font-size="14" font-weight="bold" fill="black">ANÁLISIS</text>
            <text x="560" y="125" text-anchor="middle" font-size="11" fill="black">• Clasificación CVSS</text>
            <text x="560" y="140" text-anchor="middle" font-size="11" fill="black">• Priorización</text>
            <text x="560" y="155" text-anchor="middle" font-size="11" fill="black">• Falsos positivos</text>
            
            <!-- Reporting -->
            <rect x="680" y="80" width="160" height="90" rx="10" fill="#28a745" stroke="#1e7e34" stroke-width="2" filter="url(#vulnShadow)"/>
            <text x="760" y="105" text-anchor="middle" font-size="14" font-weight="bold" fill="white">REPORTE</text>
            <text x="760" y="125" text-anchor="middle" font-size="11" fill="white">• Resumen ejecutivo</text>
            <text x="760" y="140" text-anchor="middle" font-size="11" fill="white">• Detalles técnicos</text>
            <text x="760" y="155" text-anchor="middle" font-size="11" fill="white">• Recomendaciones</text>
            
            <!-- Arrows -->
            <defs>
                <marker id="arrowVuln" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                    <polygon points="0 0, 10 3.5, 0 7" fill="#6c757d" />
                </marker>
            </defs>
            <line x1="245" y1="125" x2="275" y2="125" stroke="#6c757d" stroke-width="2" marker-end="url(#arrowVuln)"/>
            <line x1="445" y1="125" x2="475" y2="125" stroke="#6c757d" stroke-width="2" marker-end="url(#arrowVuln)"/>
            <line x1="645" y1="125" x2="675" y2="125" stroke="#6c757d" stroke-width="2" marker-end="url(#arrowVuln)"/>
            
            <!-- Vulnerability Severity Levels -->
            <rect x="100" y="220" width="700" height="180" rx="10" fill="#e9ecef" stroke="#adb5bd" stroke-width="2"/>
            <text x="450" y="245" text-anchor="middle" font-size="18" font-weight="bold" fill="#495057">Niveles de Severidad CVSS</text>
            
            <!-- Critical -->
            <rect x="130" y="270" width="120" height="50" rx="5" fill="#8b0000" stroke="#660000" stroke-width="2"/>
            <text x="190" y="290" text-anchor="middle" font-size="12" font-weight="bold" fill="white">CRÍTICO</text>
            <text x="190" y="305" text-anchor="middle" font-size="10" fill="white">9.0 - 10.0</text>
            
            <!-- High -->
            <rect x="270" y="270" width="120" height="50" rx="5" fill="#dc3545" stroke="#c82333" stroke-width="2"/>
            <text x="330" y="290" text-anchor="middle" font-size="12" font-weight="bold" fill="white">ALTO</text>
            <text x="330" y="305" text-anchor="middle" font-size="10" fill="white">7.0 - 8.9</text>
            
            <!-- Medium -->
            <rect x="410" y="270" width="120" height="50" rx="5" fill="#ffc107" stroke="#e0a800" stroke-width="2"/>
            <text x="470" y="290" text-anchor="middle" font-size="12" font-weight="bold" fill="black">MEDIO</text>
            <text x="470" y="305" text-anchor="middle" font-size="10" fill="black">4.0 - 6.9</text>
            
            <!-- Low -->
            <rect x="550" y="270" width="120" height="50" rx="5" fill="#28a745" stroke="#1e7e34" stroke-width="2"/>
            <text x="610" y="290" text-anchor="middle" font-size="12" font-weight="bold" fill="white">BAJO</text>
            <text x="610" y="305" text-anchor="middle" font-size="10" fill="white">0.1 - 3.9</text>
            
            <!-- Info -->
            <rect x="690" y="270" width="120" height="50" rx="5" fill="#17a2b8" stroke="#138496" stroke-width="2"/>
            <text x="750" y="290" text-anchor="middle" font-size="12" font-weight="bold" fill="white">INFO</text>
            <text x="750" y="305" text-anchor="middle" font-size="10" fill="white">0.0</text>
            
            <!-- Common Vulnerabilities -->
            <rect x="150" y="340" width="600" height="50" rx="5" fill="#f8f9fa" stroke="#dee2e6" stroke-width="1"/>
            <text x="450" y="360" text-anchor="middle" font-size="14" font-weight="bold" fill="#495057">Vulnerabilidades Comunes</text>
            <text x="220" y="375" text-anchor="middle" font-size="10" fill="#6c757d">SQLi</text>
            <text x="290" y="375" text-anchor="middle" font-size="10" fill="#6c757d">XSS</text>
            <text x="360" y="375" text-anchor="middle" font-size="10" fill="#6c757d">Buffer Overflow</text>
            <text x="450" y="375" text-anchor="middle" font-size="10" fill="#6c757d">Privilege Escalation</text>
            <text x="550" y="375" text-anchor="middle" font-size="10" fill="#6c757d">DoS</text>
            <text x="620" y="375" text-anchor="middle" font-size="10" fill="#6c757d">CSRF</text>
            <text x="680" y="375" text-anchor="middle" font-size="10" fill="#6c757d">RCE</text>
        `;
    },

    // Respaldo para Network Mapping - Módulo 4
    generateNetworkMappingFallback() {
        return `
            <defs>
                <linearGradient id="networkGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#6f42c1;stop-opacity:1" />
                    <stop offset="100%" style="stop-color:#5a2d91;stop-opacity:1" />
                </linearGradient>
                <linearGradient id="mapGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#17a2b8;stop-opacity:1" />
                    <stop offset="100%" style="stop-color:#138496;stop-opacity:1" />
                </linearGradient>
                <filter id="mapShadow">
                    <feDropShadow dx="2" dy="2" stdDeviation="2" flood-opacity="0.3"/>
                </filter>
            </defs>
            
            <rect width="900" height="500" fill="#f8f9fa" stroke="#dee2e6" stroke-width="3" rx="15"/>
            
            <!-- Título -->
            <text x="450" y="35" text-anchor="middle" font-size="22" font-weight="bold" fill="#2c3e50">Mapeo de Red y Topología</text>
            <line x1="120" y1="45" x2="780" y2="45" stroke="#6f42c1" stroke-width="3"/>
            
            <!-- Network Discovery -->
            <ellipse cx="200" cy="120" rx="80" ry="45" fill="url(#networkGrad)" stroke="#5a2d91" stroke-width="2" filter="url(#mapShadow)"/>
            <text x="200" y="110" text-anchor="middle" font-size="13" font-weight="bold" fill="white">DESCUBRIMIENTO</text>
            <text x="200" y="125" text-anchor="middle" font-size="13" font-weight="bold" fill="white">DE RED</text>
            <text x="200" y="140" text-anchor="middle" font-size="10" fill="white">Ping sweep, ARP scan</text>
            
            <!-- Host Discovery -->
            <rect x="350" y="80" width="140" height="80" rx="10" fill="#007bff" stroke="#0056b3" stroke-width="2" filter="url(#mapShadow)"/>
            <text x="420" y="105" text-anchor="middle" font-size="13" font-weight="bold" fill="white">DESCUBRIMIENTO</text>
            <text x="420" y="120" text-anchor="middle" font-size="13" font-weight="bold" fill="white">DE HOSTS</text>
            <text x="420" y="140" text-anchor="middle" font-size="10" fill="white">TCP/UDP scan</text>
            <text x="420" y="150" text-anchor="middle" font-size="10" fill="white">ICMP probes</text>
            
            <!-- Service Enumeration -->
            <ellipse cx="620" cy="120" rx="80" ry="45" fill="url(#mapGrad)" stroke="#138496" stroke-width="2" filter="url(#mapShadow)"/>
            <text x="620" y="110" text-anchor="middle" font-size="13" font-weight="bold" fill="white">ENUMERACIÓN</text>
            <text x="620" y="125" text-anchor="middle" font-size="13" font-weight="bold" fill="white">SERVICIOS</text>
            <text x="620" y="140" text-anchor="middle" font-size="10" fill="white">Version detection</text>
            
            <!-- Topology Mapping -->
            <rect x="720" y="80" width="120" height="80" rx="10" fill="#28a745" stroke="#1e7e34" stroke-width="2" filter="url(#mapShadow)"/>
            <text x="780" y="105" text-anchor="middle" font-size="13" font-weight="bold" fill="white">MAPEO</text>
            <text x="780" y="120" text-anchor="middle" font-size="13" font-weight="bold" fill="white">TOPOLOGÍA</text>
            <text x="780" y="140" text-anchor="middle" font-size="10" fill="white">Route tracing</text>
            <text x="780" y="150" text-anchor="middle" font-size="10" fill="white">Network diagram</text>
            
            <!-- Network Diagram Example -->
            <rect x="100" y="200" width="700" height="250" rx="10" fill="#ffffff" stroke="#adb5bd" stroke-width="2"/>
            <text x="450" y="225" text-anchor="middle" font-size="16" font-weight="bold" fill="#495057">Ejemplo de Topología de Red</text>
            
            <!-- Internet Cloud -->
            <ellipse cx="450" cy="270" rx="60" ry="30" fill="#e9ecef" stroke="#6c757d" stroke-width="2"/>
            <text x="450" y="275" text-anchor="middle" font-size="12" font-weight="bold" fill="#495057">INTERNET</text>
            
            <!-- Router -->
            <rect x="400" y="320" width="100" height="40" rx="5" fill="#ffc107" stroke="#e0a800" stroke-width="2"/>
            <text x="450" y="340" text-anchor="middle" font-size="11" font-weight="bold" fill="black">ROUTER</text>
            <text x="450" y="350" text-anchor="middle" font-size="9" fill="black">192.168.1.1</text>
            
            <!-- Switch -->
            <rect x="200" y="380" width="80" height="35" rx="5" fill="#17a2b8" stroke="#138496" stroke-width="2"/>
            <text x="240" y="395" text-anchor="middle" font-size="11" font-weight="bold" fill="white">SWITCH</text>
            <text x="240" y="405" text-anchor="middle" font-size="9" fill="white">Layer 2</text>
            
            <rect x="520" y="380" width="80" height="35" rx="5" fill="#17a2b8" stroke="#138496" stroke-width="2"/>
            <text x="560" y="395" text-anchor="middle" font-size="11" font-weight="bold" fill="white">SWITCH</text>
            <text x="560" y="405" text-anchor="middle" font-size="9" fill="white">Layer 2</text>
            
            <!-- Hosts -->
            <circle cx="150" cy="430" r="15" fill="#28a745" stroke="#1e7e34" stroke-width="2"/>
            <text x="150" y="435" text-anchor="middle" font-size="8" fill="white">PC1</text>
            <text x="150" y="450" text-anchor="middle" font-size="7" fill="#495057">.100</text>
            
            <circle cx="200" cy="430" r="15" fill="#28a745" stroke="#1e7e34" stroke-width="2"/>
            <text x="200" y="435" text-anchor="middle" font-size="8" fill="white">PC2</text>
            <text x="200" y="450" text-anchor="middle" font-size="7" fill="#495057">.101</text>
            
            <circle cx="280" cy="430" r="15" fill="#dc3545" stroke="#c82333" stroke-width="2"/>
            <text x="280" y="435" text-anchor="middle" font-size="8" fill="white">SRV</text>
            <text x="280" y="450" text-anchor="middle" font-size="7" fill="#495057">.10</text>
            
            <circle cx="520" cy="430" r="15" fill="#28a745" stroke="#1e7e34" stroke-width="2"/>
            <text x="520" y="435" text-anchor="middle" font-size="8" fill="white">PC3</text>
            <text x="520" y="450" text-anchor="middle" font-size="7" fill="#495057">.102</text>
            
            <circle cx="600" cy="430" r="15" fill="#6f42c1" stroke="#5a2d91" stroke-width="2"/>
            <text x="600" y="435" text-anchor="middle" font-size="8" fill="white">DB</text>
            <text x="600" y="450" text-anchor="middle" font-size="7" fill="#495057">.20</text>
            
            <!-- Connection lines -->
            <line x1="450" y1="300" x2="450" y2="320" stroke="#6c757d" stroke-width="2"/>
            <line x1="420" y1="360" x2="260" y2="380" stroke="#6c757d" stroke-width="2"/>
            <line x1="480" y1="360" x2="540" y2="380" stroke="#6c757d" stroke-width="2"/>
            <line x1="220" y1="415" x2="150" y2="415" stroke="#6c757d" stroke-width="1"/>
            <line x1="220" y1="415" x2="200" y2="415" stroke="#6c757d" stroke-width="1"/>
            <line x1="260" y1="415" x2="280" y2="415" stroke="#6c757d" stroke-width="1"/>
            <line x1="540" y1="415" x2="520" y2="415" stroke="#6c757d" stroke-width="1"/>
            <line x1="580" y1="415" x2="600" y2="415" stroke="#6c757d" stroke-width="1"/>
            
            <!-- Arrows for process flow -->
            <defs>
                <marker id="arrowMap" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
                    <polygon points="0 0, 8 3, 0 6" fill="#6c757d" />
                </marker>
            </defs>
            <line x1="280" y1="120" x2="340" y2="120" stroke="#6c757d" stroke-width="2" marker-end="url(#arrowMap)"/>
            <line x1="500" y1="120" x2="540" y2="120" stroke="#6c757d" stroke-width="2" marker-end="url(#arrowMap)"/>
            <line x1="700" y1="120" x2="710" y2="120" stroke="#6c757d" stroke-width="2" marker-end="url(#arrowMap)"/>
        `;
    },

    // Respaldo genérico para diagramas sin definir
    generateGenericFallback(diagramId) {
        return `
            <rect width="100%" height="100%" fill="#f8f9fa" stroke="#dee2e6" stroke-width="2" rx="10"/>
            <text x="50%" y="40%" text-anchor="middle" font-size="18" font-weight="bold" fill="#6c757d">Diagrama: ${diagramId}</text>
            <text x="50%" y="55%" text-anchor="middle" font-size="14" fill="#868e96">Contenido disponible próximamente</text>
            <rect x="40%" y="65%" width="20%" height="15%" fill="none" stroke="#6c757d" stroke-width="2" stroke-dasharray="5,5" rx="5"/>
        `;    }
};

// ========================================
// INITIALIZATION AND CORE FUNCTIONS
// ========================================

// Initialize module when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Módulo Escaneo de Dispositivos: Inicializando...');
    
    initializeModule();
    
    // Initialize Universal Diagram System
    UNIVERSAL_DIAGRAM_SYSTEM.init();
});

// Initialize module
async function initializeModule() {
    try {
        loadSavedProgress();
        loadModuleNavigation();
        loadModuleProgress();
        updateProgressDisplay();
        
        console.log('✅ Módulo Escaneo de Dispositivos inicializado correctamente');
    } catch (error) {
        console.error('❌ Error inicializando módulo:', error);
    }
}

// Load saved progress from localStorage
function loadSavedProgress() {
    console.log(`[DEBUG] Loading saved progress...`);
    
    try {
        const savedProgress = localStorage.getItem('sena-hacking-progress');
        if (savedProgress) {
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
            }
        }
        
        // Set current topic index
        const completedCount = moduleData.topics.filter(t => t.completed).length;
        
        if (completedCount === 0) {
            currentTopicIndex = 0;
        } else if (completedCount < moduleData.topics.length) {
            const firstIncompleteIndex = moduleData.topics.findIndex(t => !t.completed);
            currentTopicIndex = firstIncompleteIndex >= 0 ? firstIncompleteIndex : 0;
        } else {
            currentTopicIndex = moduleData.topics.length - 1;
        }
        
        if (currentTopicIndex < 0 || currentTopicIndex >= moduleData.topics.length) {
            console.log(`[DEBUG] Invalid currentTopicIndex ${currentTopicIndex}, resetting to 0`);
            currentTopicIndex = 0;
        }
        
        console.log(`[DEBUG] Progress loaded: ${completedCount} completed, currentTopicIndex: ${currentTopicIndex}`);
    } catch (error) {
        console.error('Error loading module progress:', error);
        moduleProgress = 0;
        currentTopicIndex = 0;
        moduleData.topics.forEach(topic => topic.completed = false);
    }
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

// Start module
function startModule() {
    startTime = Date.now();
    updateProgress(moduleData.id, 'started');
    loadFirstTopic();
}

// Load first topic
function loadFirstTopic() {
    console.log(`[DEBUG] loadFirstTopic called - resetting to index 0`);
    currentTopicIndex = -1;
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
    
    updateNavigationState();
    loadTopicContent(topic);
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
    
    let content = '';
    
    switch (topic.id) {
        case 'definicion-tipos-escaneo':
            content = createDefinicionTiposContent(topic);
            break;
        case 'metodologia-escaneo':
            content = createMetodologiaContent(topic);
            break;
        case 'metodologia-ceh':
            content = createMetodologiaCEHContent(topic);
            break;
        case 'tecnicas-herramientas':
            content = createTecnicasHerramientasContent(topic);
            break;
        case 'banner-fingerprinting-os':
            content = createBannerFingerprintingContent(topic);
            break;
        case 'proxychains-anonimizadores-tor':
            content = createProxychainsContent(topic);
            break;
        case 'analisis-vulnerabilidad':
            content = createAnalisisVulnerabilidadContent(topic);
            break;
        default:
            content = createDefaultContent(topic);
    }
    
    contentContainer.innerHTML = content;
    
    setupTopicInteractions();
    
    // Fix icons immediately after content load
    if (window.IconFixSystem) {
        setTimeout(() => {
            window.IconFixSystem.fixAll();
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
    
    contentContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
    
    console.log(`[DEBUG] Topic content loaded successfully for ${topic.id}`);
}

// ========================================
// CONTENT CREATION FUNCTIONS
// ========================================

// Create content for "Definición y Tipos de Escaneo"
function createDefinicionTiposContent(topic) {
    return `
        <div class="topic-header">
            <h2 class="text-center">
                <svg class="topic-icon me-2" width="32" height="32" viewBox="0 0 100 100">
                    <use href="../../assets/images/icons.svg#icon-scan"></use>
                </svg>
                ${topic.title}
            </h2>
            <p class="topic-intro">
                El escaneo es una fase fundamental en el hacking ético, utilizada para descubrir sistemas activos, puertos abiertos, servicios en ejecución y posibles vulnerabilidades.
            </p>
        </div>

        <div class="topic-content-body">
            <h3>Conceptos Fundamentales del Escaneo</h3>
              <!-- Diagrama de Tipos de Escaneo -->
            <div class="scan-types-diagram mb-4">
                <h4 class="text-center mb-3">Tipos de Escaneo en Hacking Ético</h4>
                <svg class="w-100" style="max-height: 500px;" viewBox="0 0 900 500">
                    <use href="../../assets/images/diagrams.svg#scan-types-overview"></use>
                </svg>
                <p class="text-center text-muted mt-2">
                    <small>Explora los diferentes tipos de escaneo utilizados en evaluaciones de seguridad</small>
                </p>
            </div>

            <div class="concept-card">
                <h4>
                    <svg class="concept-icon me-2" width="24" height="24" viewBox="0 0 100 100">
                        <use href="../../assets/images/icons.svg#icon-scan"></use>
                    </svg>
                    Concepto de Escaneo
                </h4>
                <p>El escaneo implica el envío de paquetes a un rango de direcciones IP o puertos para obtener respuestas que revelen información sobre el estado y la configuración de los sistemas. Es un paso más intrusivo que el footprinting, ya que interactúa directamente con el objetivo.</p>
                
                <div class="alert alert-info">
                    <h6><i class="fas fa-lightbulb me-2"></i>Objetivos Principales del Escaneo:</h6>
                    <ul class="mb-0">
                        <li>Identificar hosts activos en la red</li>
                        <li>Descubrir puertos abiertos y servicios</li>
                        <li>Determinar el sistema operativo</li>
                        <li>Detectar vulnerabilidades conocidas</li>
                    </ul>
                </div>
            </div>

            <div class="concept-card">
                <h4>
                    <svg class="concept-icon me-2" width="24" height="24" viewBox="0 0 100 100">
                        <use href="../../assets/images/icons.svg#icon-port"></use>
                    </svg>
                    Escaneo de Puertos
                </h4>
                <p>El escaneo de puertos es el proceso de sondear los puertos TCP y UDP de un host para determinar cuáles están abiertos, cerrados o filtrados.</p>
                
                <!-- Visualización de Estados de Puertos -->
                <div class="port-states-visual mt-3">
                    <h5>Estados de Puertos:</h5>
                    <div class="row text-center">
                        <div class="col-md-4">
                            <div class="port-state-card">
                                <div class="port-state port-open">ABIERTO</div>
                                <small>Servicio activo escuchando</small>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="port-state-card">
                                <div class="port-state port-closed">CERRADO</div>
                                <small>Puerto accesible pero sin servicio</small>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="port-state-card">
                                <div class="port-state port-filtered">FILTRADO</div>
                                <small>Bloqueado por firewall</small>
                            </div>
                        </div>
                    </div>
                </div>

                <h5 class="mt-4">Tipos de Escaneo de Puertos:</h5>
                <div class="accordion" id="scanTypesAccordion">
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTcpConnect">
                                Escaneo TCP Connect (-sT)
                            </button>
                        </h2>
                        <div id="collapseTcpConnect" class="accordion-collapse collapse" data-bs-parent="#scanTypesAccordion">
                            <div class="accordion-body">
                                <p>Completa el handshake TCP de tres vías. Es fiable pero fácilmente detectable.</p>
                                <pre class="command-block">nmap -sT &lt;objetivo&gt;</pre>
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSynScan">
                                Escaneo SYN o Stealth Scan (-sS)
                            </button>
                        </h2>
                        <div id="collapseSynScan" class="accordion-collapse collapse" data-bs-parent="#scanTypesAccordion">
                            <div class="accordion-body">
                                <p>Envía un paquete SYN sin completar la conexión. Más sigiloso y requiere privilegios root.</p>
                                <pre class="command-block">sudo nmap -sS &lt;objetivo&gt;</pre>
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseUdpScan">
                                Escaneo UDP (-sU)
                            </button>
                        </h2>
                        <div id="collapseUdpScan" class="accordion-collapse collapse" data-bs-parent="#scanTypesAccordion">
                            <div class="accordion-body">
                                <p>Envía paquetes UDP. Es más lento y menos fiable debido a la naturaleza sin conexión de UDP.</p>
                                <pre class="command-block">sudo nmap -sU &lt;objetivo&gt;</pre>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="concept-card">
                <h4>
                    <svg class="concept-icon me-2" width="24" height="24" viewBox="0 0 100 100">
                        <use href="../../assets/images/icons.svg#icon-vulnerability"></use>
                    </svg>
                    Análisis de Vulnerabilidad
                </h4>
                <p>Consiste en identificar debilidades conocidas en los sistemas, servicios o aplicaciones descubiertos durante el escaneo.</p>
                <div class="alert alert-warning">
                    <i class="fas fa-exclamation-triangle me-2"></i>
                    <strong>Importante:</strong> El análisis de vulnerabilidad puede ser intrusivo y debe realizarse con autorización explícita.
                </div>
            </div>

            <div class="concept-card">
                <h4>
                    <svg class="concept-icon me-2" width="24" height="24" viewBox="0 0 100 100">
                        <use href="../../assets/images/icons.svg#icon-network"></use>
                    </svg>
                    Escaneado en Red
                </h4>
                <p>Implica descubrir la topología de la red, identificar routers, firewalls y otros dispositivos de infraestructura.</p>
                <pre class="command-block">sudo nmap --traceroute &lt;objetivo&gt;</pre>
            </div>

            <div class="topic-quiz mt-4">
                <h4>
                    <svg class="quiz-icon me-2" width="24" height="24" viewBox="0 0 100 100">
                        <use href="../../assets/images/icons.svg#icon-quiz"></use>
                    </svg>
                    Verifica tu Comprensión
                </h4>
                <div class="quiz-question">
                    <p><strong>¿Cuál es la principal diferencia entre un escaneo TCP Connect y un escaneo SYN?</strong></p>
                    <div class="quiz-options">
                        <label class="quiz-option">
                            <input type="radio" name="q1" value="a">
                            <span>TCP Connect es más rápido que SYN</span>
                        </label>
                        <label class="quiz-option">
                            <input type="radio" name="q1" value="b">
                            <span>SYN no completa el handshake TCP, siendo más sigiloso</span>
                        </label>
                        <label class="quiz-option">
                            <input type="radio" name="q1" value="c">
                            <span>No hay diferencia, son sinónimos</span>
                        </label>
                    </div>
                </div>
            </div>

            <div class="case-study mt-4">
                <h4 class="text-center">
                    <svg class="case-icon me-2" width="24" height="24" viewBox="0 0 100 100">
                        <use href="../../assets/images/icons.svg#icon-case-study"></use>
                    </svg>
                    Caso de Estudio: Escaneo de Red Corporativa
                </h4>
                <div class="case-content">
                    <div class="case-scenario">
                        <h6>📚 Escenario:</h6>
                        <p>Has sido contratado para realizar una evaluación de seguridad de la red corporativa de una empresa. El alcance incluye la subred 192.168.1.0/24. Necesitas identificar todos los hosts activos y sus servicios.</p>
                    </div>
                    
                    <div class="case-question mt-3">
                        <h6>❓ Pregunta de Análisis:</h6>
                        <p><strong>¿Cuál sería tu primer paso más apropiado?</strong></p>
                        <div class="case-options">
                            <button class="btn btn-outline-primary case-option" data-case="q1" data-value="a">
                                A) Realizar un escaneo SYN completo de todos los puertos en toda la subred
                            </button>
                            <button class="btn btn-outline-primary case-option" data-case="q1" data-value="b">
                                B) Hacer un escaneo de ping para identificar hosts activos primero
                            </button>
                            <button class="btn btn-outline-primary case-option" data-case="q1" data-value="c">
                                C) Comenzar directamente con análisis de vulnerabilidades
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

// Create default topic content template
function createDefaultContent(topic) {
    return `
        <div class="topic-header">
            <h2 class="text-center">${topic.title}</h2>
            <p class="topic-intro">
                Este tema cubre aspectos importantes del escaneo de dispositivos. Duración estimada: ${topic.duration} minutos.
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
                <strong>Nota:</strong> Este contenido está siendo desarrollado siguiendo la metodología del módulo de referencia.
            </div>
            
            <div class="topic-actions mt-4">
                <button class="btn btn-sena-primary" onclick="completeTopic(${currentTopicIndex})">
                    <i class="fas fa-check me-2"></i>Marcar como Completado
                </button>
            </div>
        </div>
    `;
}

// Placeholder functions for other content creation - to be implemented
function createMetodologiaContent(topic) {
    return `
        <div class="topic-header">
            <h2 class="text-center">
                <svg class="topic-icon me-2" width="32" height="32" viewBox="0 0 100 100">
                    <use href="../../assets/images/icons.svg#icon-methodology"></use>
                </svg>
                ${topic.title}
            </h2>
            <p class="topic-intro">
                La metodología de escaneo define un enfoque sistemático para descubrir y analizar dispositivos, servicios y vulnerabilidades en una red objetivo de manera organizada y eficiente.
            </p>
        </div>

        <div class="topic-content-body">
            <h3>Metodología Sistemática de Escaneo</h3>
              <!-- Diagrama de Metodología de Escaneo -->
            <div class="scanning-methodology-diagram mb-4">
                <h4 class="text-center mb-3">Proceso Metodológico de Escaneo</h4>
                <svg class="w-100" style="max-height: 600px;" viewBox="0 0 800 600">
                    <use href="../../assets/images/diagrams.svg#scanning-methodology"></use>
                </svg>
                <p class="text-center text-muted mt-2">
                    <small>Flujo sistemático del proceso de escaneo desde el descubrimiento hasta el análisis</small>
                </p>
            </div>

            <div class="concept-card">
                <h4>
                    <svg class="concept-icon me-2" width="24" height="24" viewBox="0 0 100 100">
                        <use href="../../assets/images/icons.svg#icon-network-scan"></use>
                    </svg>
                    1. Comprobar Sistemas Vivos (Host Discovery)
                </h4>
                <p>El primer paso es identificar qué hosts están activos en la red objetivo. Esto evita desperdiciar tiempo escaneando sistemas inactivos.</p>
                
                <div class="method-examples">
                    <h5>Técnicas de Host Discovery:</h5>
                    <div class="row">
                        <div class="col-md-6">
                            <div class="technique-card">
                                <h6><i class="fas fa-wifi me-2"></i>ICMP Echo Requests</h6>
                                <pre class="command-block">nmap -sn 192.168.1.0/24</pre>
                                <small class="text-muted">Ping sweep básico</small>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="technique-card">
                                <h6><i class="fas fa-broadcast-tower me-2"></i>ARP Scan (Local Network)</h6>
                                <pre class="command-block">nmap -PR 192.168.1.0/24</pre>
                                <small class="text-muted">Más efectivo en redes locales</small>
                            </div>
                        </div>
                    </div>
                    <div class="row mt-3">
                        <div class="col-md-6">
                            <div class="technique-card">
                                <h6><i class="fas fa-satellite me-2"></i>TCP SYN Discovery</h6>
                                <pre class="command-block">nmap -PS80,443 192.168.1.0/24</pre>
                                <small class="text-muted">Para hosts que bloquean ICMP</small>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="technique-card">
                                <h6><i class="fas fa-signal me-2"></i>UDP Discovery</h6>
                                <pre class="command-block">nmap -PU53,67,68 192.168.1.0/24</pre>
                                <small class="text-muted">Puertos UDP comunes</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="concept-card">
                <h4>
                    <svg class="concept-icon me-2" width="24" height="24" viewBox="0 0 100 100">
                        <use href="../../assets/images/icons.svg#icon-port"></use>
                    </svg>
                    2. Comprobar Puertos Abiertos
                </h4>
                <p>Una vez identificados los hosts activos, se procede a escanear los puertos para descubrir servicios en ejecución.</p>
                
                <div class="scanning-strategies">
                    <h5>Estrategias de Escaneo de Puertos:</h5>
                    <div class="accordion" id="portScanAccordion">
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseQuickScan">
                                    Escaneo Rápido (Top Ports)
                                </button>
                            </h2>
                            <div id="collapseQuickScan" class="accordion-collapse collapse show" data-bs-parent="#portScanAccordion">
                                <div class="accordion-body">
                                    <p>Escanea los puertos más comunes para un descubrimiento rápido:</p>
                                    <pre class="command-block">nmap --top-ports 1000 &lt;objetivo&gt;</pre>
                                    <div class="alert alert-info">
                                        <small><i class="fas fa-clock me-2"></i>Ventaja: Rápido y cubre la mayoría de servicios comunes</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseComprehensive">
                                    Escaneo Comprehensivo
                                </button>
                            </h2>
                            <div id="collapseComprehensive" class="accordion-collapse collapse" data-bs-parent="#portScanAccordion">
                                <div class="accordion-body">
                                    <p>Escanea todos los puertos TCP (1-65535):</p>
                                    <pre class="command-block">nmap -p- &lt;objetivo&gt;</pre>
                                    <div class="alert alert-warning">
                                        <small><i class="fas fa-exclamation-triangle me-2"></i>Advertencia: Puede ser muy lento y detectable</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseCustomRange">
                                    Escaneo de Rango Personalizado
                                </button>
                            </h2>
                            <div id="collapseCustomRange" class="accordion-collapse collapse" data-bs-parent="#portScanAccordion">
                                <div class="accordion-body">
                                    <p>Escanea puertos específicos o rangos:</p>
                                    <pre class="command-block">nmap -p 80,443,8080-8090 &lt;objetivo&gt;</pre>
                                    <div class="alert alert-success">
                                        <small><i class="fas fa-bullseye me-2"></i>Ideal: Para objetivos específicos conocidos</small>
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
                        <use href="../../assets/images/icons.svg#icon-service"></use>
                    </svg>
                    3. Capturar Banderas de Servicios (Service Detection)
                </h4>
                <p>Una vez identificados los puertos abiertos, se debe determinar qué servicios están ejecutándose y sus versiones.</p>
                
                <div class="service-detection-methods">
                    <h5>Métodos de Detección de Servicios:</h5>
                    <div class="row">
                        <div class="col-md-12">
                            <div class="detection-method">
                                <h6><i class="fas fa-search me-2"></i>Detección de Versión con Nmap</h6>
                                <pre class="command-block">nmap -sV &lt;objetivo&gt;</pre>
                                <p class="mb-2"><strong>Opciones de intensidad:</strong></p>
                                <ul class="list-unstyled">
                                    <li><code>--version-intensity 0</code> - Sondeos ligeros</li>
                                    <li><code>--version-intensity 5</code> - Intensidad media (por defecto)</li>
                                    <li><code>--version-intensity 9</code> - Sondeos exhaustivos</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                    <div class="banner-grabbing-example mt-3">
                        <h6><i class="fas fa-flag me-2"></i>Ejemplo de Banner Grabbing Manual:</h6>
                        <div class="row">
                            <div class="col-md-6">
                                <h7>HTTP Banner:</h7>
                                <pre class="command-block">telnet ejemplo.com 80
GET / HTTP/1.1
Host: ejemplo.com</pre>
                            </div>
                            <div class="col-md-6">
                                <h7>SSH Banner:</h7>
                                <pre class="command-block">nc ejemplo.com 22</pre>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="concept-card">
                <h4>
                    <svg class="concept-icon me-2" width="24" height="24" viewBox="0 0 100 100">
                        <use href="../../assets/images/icons.svg#icon-vulnerability"></use>
                    </svg>
                    4. Identificar Vulnerabilidades
                </h4>
                <p>Con la información de servicios y versiones, se pueden identificar vulnerabilidades conocidas.</p>
                
                <div class="vulnerability-identification">
                    <h5>Herramientas y Técnicas:</h5>
                    <div class="row">
                        <div class="col-md-6">
                            <div class="vuln-tool">
                                <h6><i class="fas fa-shield-alt me-2"></i>Scripts NSE de Nmap</h6>
                                <pre class="command-block">nmap --script vuln &lt;objetivo&gt;</pre>
                                <small class="text-muted">Scripts automatizados para vulnerabilidades comunes</small>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="vuln-tool">
                                <h6><i class="fas fa-database me-2"></i>Búsqueda en CVE</h6>
                                <p>Consultar bases de datos de vulnerabilidades:</p>
                                <ul class="list-unstyled small">
                                    <li>• CVE Database (cve.mitre.org)</li>
                                    <li>• NVD (nvd.nist.gov)</li>
                                    <li>• Exploit-DB</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="concept-card">
                <h4>
                    <svg class="concept-icon me-2" width="24" height="24" viewBox="0 0 100 100">
                        <use href="../../assets/images/icons.svg#icon-network-topology"></use>
                    </svg>
                    5. Dibujar Diagramas de Red
                </h4>
                <p>Documentar la topología de red descubierta para facilitar ataques posteriores y generar reportes.</p>
                
                <div class="network-mapping">
                    <h5>Técnicas de Mapeo de Red:</h5>
                    <div class="mapping-techniques">
                        <div class="technique-item">
                            <h6><i class="fas fa-route me-2"></i>Traceroute</h6>
                            <pre class="command-block">nmap --traceroute &lt;objetivo&gt;</pre>
                            <p>Identifica la ruta de red y dispositivos intermedios.</p>
                        </div>
                        
                        <div class="technique-item">
                            <h6><i class="fas fa-sitemap me-2"></i>OS Detection</h6>
                            <pre class="command-block">nmap -O &lt;objetivo&gt;</pre>
                            <p>Identifica sistemas operativos para mapear tipos de dispositivos.</p>
                        </div>
                        
                        <div class="technique-item">
                            <h6><i class="fas fa-project-diagram me-2"></i>Herramientas de Visualización</h6>
                            <ul class="list-unstyled">
                                <li>• Zenmap (GUI de Nmap)</li>
                                <li>• Maltego</li>
                                <li>• NetworkMiner</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div class="concept-card">
                <h4>
                    <svg class="concept-icon me-2" width="24" height="24" viewBox="0 0 100 100">
                        <use href="../../assets/images/icons.svg#icon-proxy"></use>
                    </svg>
                    6. Preparar Proxies
                </h4>
                <p>Configurar proxies y técnicas de anonimización para evitar detección y mantener el anonimato durante el escaneo.</p>
                
                <div class="proxy-setup">
                    <h5>Configuración de Proxies:</h5>
                    <div class="row">
                        <div class="col-md-6">
                            <div class="proxy-method">
                                <h6><i class="fas fa-mask me-2"></i>Proxychains</h6>
                                <pre class="command-block">proxychains nmap -sT &lt;objetivo&gt;</pre>
                                <small class="text-muted">Enruta el tráfico a través de múltiples proxies</small>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="proxy-method">
                                <h6><i class="fas fa-user-secret me-2"></i>Tor</h6>
                                <pre class="command-block">torify nmap -sT &lt;objetivo&gt;</pre>
                                <small class="text-muted">Utiliza la red Tor para anonimato</small>
                            </div>
                        </div>
                    </div>
                    
                    <div class="alert alert-warning mt-3">
                        <i class="fas fa-exclamation-triangle me-2"></i>
                        <strong>Nota:</strong> Los proxies pueden afectar la velocidad y precisión de los escaneos. Algunos tipos de escaneo (como SYN scan) no funcionan a través de proxies.
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
                    <p><strong>¿Cuál es el primer paso en la metodología de escaneo?</strong></p>
                    <div class="quiz-options">
                        <label class="quiz-option">
                            <input type="radio" name="q2" value="a">
                            <span>Escanear todos los puertos TCP</span>
                        </label>
                        <label class="quiz-option">
                            <input type="radio" name="q2" value="b">
                            <span>Comprobar sistemas vivos (Host Discovery)</span>
                        </label>
                        <label class="quiz-option">
                            <input type="radio" name="q2" value="c">
                            <span>Identificar vulnerabilidades</span>
                        </label>
                    </div>
                </div>
                
                <div class="quiz-question mt-3">
                    <p><strong>¿Qué opción de Nmap se utiliza para detección de versiones de servicios?</strong></p>
                    <div class="quiz-options">
                        <label class="quiz-option">
                            <input type="radio" name="q3" value="a">
                            <span>-sS</span>
                        </label>
                        <label class="quiz-option">
                            <input type="radio" name="q3" value="b">
                            <span>-sV</span>
                        </label>
                        <label class="quiz-option">
                            <input type="radio" name="q3" value="c">
                            <span>-O</span>
                        </label>
                    </div>
                </div>
            </div>

            <div class="case-study mt-4">
                <h4 class="text-center">
                    <svg class="case-icon me-2" width="24" height="24" viewBox="0 0 100 100">
                        <use href="../../assets/images/icons.svg#icon-case-study"></use>
                    </svg>
                    Caso de Estudio: Escaneo Metodológico
                </h4>
                <div class="case-content">
                    <div class="case-scenario">
                        <h6>📚 Escenario:</h6>
                        <p>Durante una evaluación de penetración, has identificado que la red 10.0.0.0/24 está activa. Necesitas seguir la metodología de escaneo para identificar servicios web potencialmente vulnerables.</p>
                    </div>
                    
                    <div class="case-question mt-3">
                        <h6>❓ Pregunta de Análisis:</h6>
                        <p><strong>Siguiendo la metodología correcta, ¿cuál sería tu secuencia de comandos?</strong></p>
                        <div class="case-options">
                            <button class="btn btn-outline-primary case-option" data-case="q2" data-value="a">
                                A) nmap -p- 10.0.0.0/24 → nmap -sV 10.0.0.1-254 → nmap --script vuln
                            </button>
                            <button class="btn btn-outline-primary case-option" data-case="q2" data-value="b">
                                B) nmap -sn 10.0.0.0/24 → nmap -p 80,443,8080 [hosts activos] → nmap -sV [puertos abiertos]
                            </button>
                            <button class="btn btn-outline-primary case-option" data-case="q2" data-value="c">
                                C) nmap --script vuln 10.0.0.0/24 → nmap -sV → nmap -sn
                            </button>
                        </div>
                        <div class="case-feedback" id="case-q2-feedback" style="display: none;"></div>
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

function createMetodologiaCEHContent(topic) {
    return `
        <div class="topic-header">
            <h2 class="text-center">
                <svg class="topic-icon me-2" width="32" height="32" viewBox="0 0 100 100">
                    <use href="../../assets/images/icons.svg#icon-ceh"></use>
                </svg>
                ${topic.title}
            </h2>
            <p class="topic-intro">
                La metodología de exploración del Certified Ethical Hacker (CEH) proporciona un marco estructurado y ético para realizar actividades de escaneo y exploración durante evaluaciones de seguridad autorizadas.
            </p>
        </div>

        <div class="topic-content-body">
            <h3>Metodología CEH para Exploración</h3>
              <!-- Diagrama de Metodología CEH -->
            <div class="ceh-methodology-diagram mb-4">
                <h4 class="text-center mb-3">Fases de la Metodología CEH</h4>
                <svg class="w-100" style="max-height: 650px;" viewBox="0 0 900 650">
                    <use href="../../assets/images/diagrams.svg#ceh-methodology"></use>
                </svg>
                <p class="text-center text-muted mt-2">
                    <small>Proceso completo de la metodología CEH desde reconocimiento hasta mantenimiento de acceso</small>
                </p>
            </div>

            <div class="concept-card">
                <h4>
                    <svg class="concept-icon me-2" width="24" height="24" viewBox="0 0 100 100">
                        <use href="../../assets/images/icons.svg#icon-phases"></use>
                    </svg>
                    Fases del Escaneo según CEH
                </h4>
                <p>La metodología CEH define un proceso de 7 fases para el hacking ético, donde el escaneo juega un papel crucial en las fases 2 y 3.</p>
                
                <div class="ceh-phases">
                    <div class="phase-timeline">
                        <div class="phase-item active-phase">
                            <div class="phase-number">1</div>
                            <div class="phase-content">
                                <h6>Reconocimiento</h6>
                                <p>Recopilación pasiva de información sobre el objetivo.</p>
                                <div class="phase-tools">
                                    <span class="badge bg-secondary">OSINT</span>
                                    <span class="badge bg-secondary">Google Dorks</span>
                                    <span class="badge bg-secondary">Whois</span>
                                </div>
                            </div>
                        </div>
                        
                        <div class="phase-item scanning-phase">
                            <div class="phase-number">2</div>
                            <div class="phase-content">
                                <h6>Escaneo</h6>
                                <p>Identificación de sistemas vivos, puertos abiertos y servicios.</p>
                                <div class="phase-tools">
                                    <span class="badge bg-primary">Nmap</span>
                                    <span class="badge bg-primary">Hping3</span>
                                    <span class="badge bg-primary">Masscan</span>
                                </div>
                            </div>
                        </div>
                        
                        <div class="phase-item enumeration-phase">
                            <div class="phase-number">3</div>
                            <div class="phase-content">
                                <h6>Enumeración</h6>
                                <p>Extracción de información detallada de servicios identificados.</p>
                                <div class="phase-tools">
                                    <span class="badge bg-info">Banner Grabbing</span>
                                    <span class="badge bg-info">SNMP Walk</span>
                                    <span class="badge bg-info">SMB Enum</span>
                                </div>
                            </div>
                        </div>
                        
                        <div class="phase-item">
                            <div class="phase-number">4</div>
                            <div class="phase-content">
                                <h6>Análisis de Vulnerabilidad</h6>
                                <p>Identificación de debilidades en los sistemas objetivo.</p>
                            </div>
                        </div>
                        
                        <div class="phase-item">
                            <div class="phase-number">5</div>
                            <div class="phase-content">
                                <h6>Explotación</h6>
                                <p>Aprovechamiento de vulnerabilidades para obtener acceso.</p>
                            </div>
                        </div>
                        
                        <div class="phase-item">
                            <div class="phase-number">6</div>
                            <div class="phase-content">
                                <h6>Post-Explotación</h6>
                                <p>Actividades posteriores al compromiso inicial.</p>
                            </div>
                        </div>
                        
                        <div class="phase-item">
                            <div class="phase-number">7</div>
                            <div class="phase-content">
                                <h6>Borrado de Huellas</h6>
                                <p>Eliminación de evidencias de la actividad de prueba.</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="alert alert-info mt-4">
                    <h6><i class="fas fa-lightbulb me-2"></i>Enfoque del Módulo:</h6>
                    <p class="mb-0">Este módulo se centra específicamente en las <strong>Fases 2 y 3</strong> (Escaneo y Enumeración), que son fundamentales para el descubrimiento de sistemas y servicios.</p>
                </div>
            </div>

            <div class="concept-card">
                <h4>
                    <svg class="concept-icon me-2" width="24" height="24" viewBox="0 0 100 100">
                        <use href="../../assets/images/icons.svg#icon-tools"></use>
                    </svg>
                    Herramientas Clave en CEH
                </h4>
                <p>La metodología CEH recomienda herramientas específicas para cada fase del proceso de escaneo.</p>
                
                <div class="ceh-tools-categories">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="tool-category">
                                <h5><i class="fas fa-search me-2 text-primary"></i>Host Discovery</h5>
                                <div class="tool-list">
                                    <div class="tool-item">
                                        <strong>Nmap</strong>
                                        <pre class="mini-command">nmap -sn target</pre>
                                        <small>Estándar de la industria para descubrimiento de hosts</small>
                                    </div>
                                    <div class="tool-item">
                                        <strong>Hping3</strong>
                                        <pre class="mini-command">hping3 -S -p 80 target</pre>
                                        <small>Herramienta avanzada de manipulación de paquetes</small>
                                    </div>
                                    <div class="tool-item">
                                        <strong>Angry IP Scanner</strong>
                                        <small>Escáner de red con interfaz gráfica</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="col-md-6">
                            <div class="tool-category">
                                <h5><i class="fas fa-door-open me-2 text-success"></i>Port Scanning</h5>
                                <div class="tool-list">
                                    <div class="tool-item">
                                        <strong>Nmap (Stealth)</strong>
                                        <pre class="mini-command">nmap -sS target</pre>
                                        <small>Escaneo sigiloso SYN</small>
                                    </div>
                                    <div class="tool-item">
                                        <strong>Masscan</strong>
                                        <pre class="mini-command">masscan -p1-65535 target</pre>
                                        <small>Escaneo de puertos de alta velocidad</small>
                                    </div>
                                    <div class="tool-item">
                                        <strong>Unicornscan</strong>
                                        <small>Escáner de puertos asíncrono</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="row mt-4">
                        <div class="col-md-6">
                            <div class="tool-category">
                                <h5><i class="fas fa-fingerprint me-2 text-warning"></i>OS Fingerprinting</h5>
                                <div class="tool-list">
                                    <div class="tool-item">
                                        <strong>Nmap OS Detection</strong>
                                        <pre class="mini-command">nmap -O target</pre>
                                        <small>Detección activa del sistema operativo</small>
                                    </div>
                                    <div class="tool-item">
                                        <strong>P0f</strong>
                                        <small>Fingerprinting pasivo del OS</small>
                                    </div>
                                    <div class="tool-item">
                                        <strong>Xprobe2</strong>
                                        <small>Fingerprinting activo alternativo</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="col-md-6">
                            <div class="tool-category">
                                <h5><i class="fas fa-shield-alt me-2 text-danger"></i>Vulnerability Scanning</h5>
                                <div class="tool-list">
                                    <div class="tool-item">
                                        <strong>Nessus</strong>
                                        <small>Escáner comercial de vulnerabilidades</small>
                                    </div>
                                    <div class="tool-item">
                                        <strong>OpenVAS</strong>
                                        <small>Escáner de vulnerabilidades de código abierto</small>
                                    </div>
                                    <div class="tool-item">
                                        <strong>NSE Scripts</strong>
                                        <pre class="mini-command">nmap --script vuln target</pre>
                                        <small>Scripts de vulnerabilidades de Nmap</small>
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
                        <use href="../../assets/images/icons.svg#icon-ethics"></use>
                    </svg>
                    Consideraciones Éticas y Legales
                </h4>
                <p>La metodología CEH enfatiza la importancia de mantener estándares éticos y cumplir con requisitos legales durante todas las actividades de escaneo.</p>
                
                <div class="ethics-guidelines">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="ethics-section">
                                <h5><i class="fas fa-gavel me-2 text-primary"></i>Requisitos Legales</h5>
                                <ul class="ethics-list">
                                    <li>
                                        <strong>Autorización por Escrito</strong>
                                        <p>Obtener permiso explícito antes de cualquier actividad de escaneo.</p>
                                    </li>
                                    <li>
                                        <strong>Definición de Alcance</strong>
                                        <p>Establecer claramente qué sistemas pueden ser escaneados.</p>
                                    </li>
                                    <li>
                                        <strong>Limitaciones de Tiempo</strong>
                                        <p>Respetar las ventanas de tiempo autorizadas para las pruebas.</p>
                                    </li>
                                    <li>
                                        <strong>Documentación Legal</strong>
                                        <p>Mantener registros de todas las actividades realizadas.</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        
                        <div class="col-md-6">
                            <div class="ethics-section">
                                <h5><i class="fas fa-heart me-2 text-danger"></i>Principios Éticos</h5>
                                <ul class="ethics-list">
                                    <li>
                                        <strong>Minimizar el Impacto</strong>
                                        <p>Evitar interrupciones en operaciones críticas del negocio.</p>
                                    </li>
                                    <li>
                                        <strong>Confidencialidad</strong>
                                        <p>Proteger la información sensible descubierta durante las pruebas.</p>
                                    </li>
                                    <li>
                                        <strong>Reporte Responsable</strong>
                                        <p>Comunicar vulnerabilidades de manera constructiva y oportuna.</p>
                                    </li>
                                    <li>
                                        <strong>Integridad Profesional</strong>
                                        <p>Mantener honestidad y transparencia en todas las actividades.</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                    <div class="alert alert-warning mt-4">
                        <h6><i class="fas fa-exclamation-triangle me-2"></i>Advertencia Legal:</h6>
                        <p class="mb-0">Realizar escaneos sin autorización puede constituir un delito en muchas jurisdicciones. Siempre asegúrate de tener permiso explícito antes de escanear cualquier sistema que no sea de tu propiedad.</p>
                    </div>
                </div>
            </div>

            <div class="ceh-best-practices">
                <h4>
                    <svg class="concept-icon me-2" width="24" height="24" viewBox="0 0 100 100">
                        <use href="../../assets/images/icons.svg#icon-best-practices"></use>
                    </svg>
                    Mejores Prácticas CEH para Escaneo
                </h4>
                
                <div class="best-practices-grid">
                    <div class="row">
                        <div class="col-md-4">
                            <div class="practice-card">
                                <i class="fas fa-clock fa-2x text-primary mb-2"></i>
                                <h6>Timing y Evasión</h6>
                                <p>Usar técnicas de temporización para evitar sistemas de detección.</p>
                                <code>nmap -T2 target</code>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="practice-card">
                                <i class="fas fa-random fa-2x text-success mb-2"></i>
                                <h6>Randomización</h6>
                                <p>Aleatorizar el orden de escaneo para parecer menos sospechoso.</p>
                                <code>nmap --randomize-hosts</code>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="practice-card">
                                <i class="fas fa-user-secret fa-2x text-warning mb-2"></i>
                                <h6>Camuflaje</h6>
                                <p>Usar técnicas de señuelo para ofuscar el origen real.</p>
                                <code>nmap -D RND:10 target</code>
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
                    <p><strong>¿En qué fase de la metodología CEH se realiza principalmente el escaneo de puertos?</strong></p>
                    <div class="quiz-options">
                        <label class="quiz-option">
                            <input type="radio" name="q4" value="a">
                            <span>Fase 1: Reconocimiento</span>
                        </label>
                        <label class="quiz-option">
                            <input type="radio" name="q4" value="b">
                            <span>Fase 2: Escaneo</span>
                        </label>
                        <label class="quiz-option">
                            <input type="radio" name="q4" value="c">
                            <span>Fase 4: Análisis de Vulnerabilidad</span>
                        </label>
                    </div>
                </div>
                
                <div class="quiz-question mt-3">
                    <p><strong>¿Cuál es el requisito MÁS importante antes de realizar cualquier escaneo según CEH?</strong></p>
                    <div class="quiz-options">
                        <label class="quiz-option">
                            <input type="radio" name="q5" value="a">
                            <span>Tener las herramientas más avanzadas</span>
                        </label>
                        <label class="quiz-option">
                            <input type="radio" name="q5" value="b">
                            <span>Obtener autorización por escrito del propietario</span>
                        </label>
                        <label class="quiz-option">
                            <input type="radio" name="q5" value="c">
                            <span>Configurar proxies para anonimato</span>
                        </label>
                    </div>
                </div>
            </div>

            <div class="case-study mt-4">
                <h4 class="text-center">
                    <svg class="case-icon me-2" width="24" height="24" viewBox="0 0 100 100">
                        <use href="../../assets/images/icons.svg#icon-case-study"></use>
                    </svg>
                    Caso de Estudio: Evaluación CEH
                </h4>
                <div class="case-content">
                    <div class="case-scenario">
                        <h6>📚 Escenario:</h6>
                        <p>Una empresa te ha contratado para realizar una evaluación de penetración siguiendo la metodología CEH. Has completado la fase de reconocimiento y ahora necesitas proceder con el escaneo de su red interna 172.16.0.0/16.</p>
                    </div>
                    
                    <div class="case-question mt-3">
                        <h6>❓ Pregunta de Análisis:</h6>
                        <p><strong>¿Cuál es el enfoque más apropiado siguiendo las mejores prácticas CEH?</strong></p>
                        <div class="case-options">
                            <button class="btn btn-outline-primary case-option" data-case="q3" data-value="a">
                                A) Escaneo rápido y agresivo para obtener resultados inmediatos
                            </button>
                            <button class="btn btn-outline-primary case-option" data-case="q3" data-value="b">
                                B) Escaneo sigiloso con timing lento y técnicas de evasión
                            </button>
                            <button class="btn btn-outline-primary case-option" data-case="q3" data-value="c">
                                C) Comenzar directamente con análisis de vulnerabilidades
                            </button>
                        </div>
                        <div class="case-feedback" id="case-q3-feedback" style="display: none;"></div>
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

function createTecnicasHerramientasContent(topic) {
    return `
        <div class="topic-header">
            <h2 class="text-center">
                <svg class="topic-icon me-2" width="32" height="32" viewBox="0 0 100 100">
                    <use href="../../assets/images/icons.svg#icon-tools"></use>
                </svg>
                ${topic.title}
            </h2>
            <p class="topic-intro">
                Las técnicas y herramientas de escaneo han evolucionado para ofrecer capacidades avanzadas de descubrimiento, análisis y evasión. Dominar estas herramientas es esencial para realizar evaluaciones de seguridad efectivas.
            </p>
        </div>

        <div class="topic-content-body">
            <h3>Herramientas Principales de Escaneo</h3>
              <!-- Diagrama de Flujo de Proceso Nmap -->
            <div class="nmap-process-diagram mb-4">
                <h4 class="text-center mb-3">Flujo de Proceso de Nmap</h4>
                <svg class="w-100" style="max-height: 400px;" viewBox="0 0 800 400">
                    <use href="../../assets/images/diagrams.svg#nmap-process-flow"></use>
                </svg>
                <p class="text-center text-muted mt-2">
                    <small>Proceso interno de Nmap desde host discovery hasta service detection</small>
                </p>
            </div>

            <div class="concept-card">
                <h4>
                    <svg class="concept-icon me-2" width="24" height="24" viewBox="0 0 100 100">
                        <use href="../../assets/images/icons.svg#icon-nmap"></use>
                    </svg>
                    Nmap (Network Mapper)
                </h4>
                <p>Nmap es la herramienta de escaneo de red más utilizada y versátil, ofreciendo capacidades desde descubrimiento básico hasta análisis avanzado de vulnerabilidades.</p>
                
                <div class="nmap-features">
                    <h5>Capacidades Principales de Nmap:</h5>
                    <div class="row">
                        <div class="col-md-6">
                            <div class="feature-section">
                                <h6><i class="fas fa-search me-2 text-primary"></i>Host Discovery</h6>
                                <div class="command-examples">
                                    <div class="command-item">
                                        <code>nmap -sn 192.168.1.0/24</code>
                                        <small>Ping scan - no port scan</small>
                                    </div>
                                    <div class="command-item">
                                        <code>nmap -Pn 192.168.1.1</code>
                                        <small>Skip host discovery</small>
                                    </div>
                                    <div class="command-item">
                                        <code>nmap -PS80,443 192.168.1.0/24</code>
                                        <small>TCP SYN discovery</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="col-md-6">
                            <div class="feature-section">
                                <h6><i class="fas fa-door-open me-2 text-success"></i>Port Scanning</h6>
                                <div class="command-examples">
                                    <div class="command-item">
                                        <code>nmap -sS target</code>
                                        <small>SYN scan (stealth)</small>
                                    </div>
                                    <div class="command-item">
                                        <code>nmap -sT target</code>
                                        <small>TCP connect scan</small>
                                    </div>
                                    <div class="command-item">
                                        <code>nmap -sU target</code>
                                        <small>UDP scan</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="row mt-3">
                        <div class="col-md-6">
                            <div class="feature-section">
                                <h6><i class="fas fa-fingerprint me-2 text-warning"></i>OS & Service Detection</h6>
                                <div class="command-examples">
                                    <div class="command-item">
                                        <code>nmap -O target</code>
                                        <small>OS detection</small>
                                    </div>
                                    <div class="command-item">
                                        <code>nmap -sV target</code>
                                        <small>Service version detection</small>
                                    </div>
                                    <div class="command-item">
                                        <code>nmap -A target</code>
                                        <small>Aggressive scan (OS, version, scripts)</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="col-md-6">
                            <div class="feature-section">
                                <h6><i class="fas fa-code me-2 text-info"></i>NSE Scripts</h6>
                                <div class="command-examples">
                                    <div class="command-item">
                                        <code>nmap --script vuln target</code>
                                        <small>Vulnerability scripts</small>
                                    </div>
                                    <div class="command-item">
                                        <code>nmap --script default target</code>
                                        <small>Default scripts</small>
                                    </div>
                                    <div class="command-item">
                                        <code>nmap --script http-enum target</code>
                                        <small>HTTP enumeration</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="nmap-timing mt-4">
                    <h5>Control de Timing y Evasión:</h5>
                    <div class="timing-templates">
                        <div class="row text-center">
                            <div class="col-md-2">
                                <div class="timing-option">
                                    <code>-T0</code>
                                    <small>Paranoid</small>
                                    <div class="timing-bar" style="width: 10%;"></div>
                                </div>
                            </div>
                            <div class="col-md-2">
                                <div class="timing-option">
                                    <code>-T1</code>
                                    <small>Sneaky</small>
                                    <div class="timing-bar" style="width: 25%;"></div>
                                </div>
                            </div>
                            <div class="col-md-2">
                                <div class="timing-option">
                                    <code>-T2</code>
                                    <small>Polite</small>
                                    <div class="timing-bar" style="width: 40%;"></div>
                                </div>
                            </div>
                            <div class="col-md-2">
                                <div class="timing-option recommended">
                                    <code>-T3</code>
                                    <small>Normal</small>
                                    <div class="timing-bar" style="width: 60%;"></div>
                                </div>
                            </div>
                            <div class="col-md-2">
                                <div class="timing-option">
                                    <code>-T4</code>
                                    <small>Aggressive</small>
                                    <div class="timing-bar" style="width: 80%;"></div>
                                </div>
                            </div>
                            <div class="col-md-2">
                                <div class="timing-option">
                                    <code>-T5</code>
                                    <small>Insane</small>
                                    <div class="timing-bar" style="width: 100%;"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="concept-card">
                <h4>
                    <svg class="concept-icon me-2" width="24" height="24" viewBox="0 0 100 100">
                        <use href="../../assets/images/icons.svg#icon-scale"></use>
                    </svg>
                    Escaneo a Gran Escala
                </h4>
                <p>Para evaluaciones de redes empresariales grandes, se requieren herramientas especializadas en escaneo masivo y de alta velocidad.</p>
                
                <div class="large-scale-tools">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="tool-highlight">
                                <h6><i class="fas fa-rocket me-2 text-primary"></i>Masscan</h6>
                                <p>Escáner de puertos de alta velocidad capaz de escanear toda Internet en menos de 6 minutos.</p>
                                <div class="tool-examples">
                                    <div class="example-item">
                                        <strong>Escaneo básico:</strong>
                                        <pre class="command-block">masscan -p80,443 10.0.0.0/8 --rate=1000</pre>
                                    </div>
                                    <div class="example-item">
                                        <strong>Escaneo completo:</strong>
                                        <pre class="command-block">masscan -p1-65535 192.168.0.0/16 --rate=10000</pre>
                                    </div>
                                    <div class="example-item">
                                        <strong>Output formato XML:</strong>
                                        <pre class="command-block">masscan -p80 10.0.0.0/8 -oX results.xml</pre>
                                    </div>
                                </div>
                                
                                <div class="alert alert-warning mt-3">
                                    <small><i class="fas fa-exclamation-triangle me-2"></i>
                                    <strong>Precaución:</strong> Masscan puede generar tráfico muy alto. Usar con cuidado en redes de producción.</small>
                                </div>
                            </div>
                        </div>
                        
                        <div class="col-md-6">
                            <div class="tool-highlight">
                                <h6><i class="fas fa-tachometer-alt me-2 text-success"></i>Zmap</h6>
                                <p>Escáner de red de un solo puerto diseñado para investigación de Internet a gran escala.</p>
                                <div class="tool-examples">
                                    <div class="example-item">
                                        <strong>Escaneo puerto 80:</strong>
                                        <pre class="command-block">zmap -p 80 -o results.txt</pre>
                                    </div>
                                    <div class="example-item">
                                        <strong>Con rate limiting:</strong>
                                        <pre class="command-block">zmap -p 443 -r 10000 -o https.txt</pre>
                                    </div>
                                    <div class="example-item">
                                        <strong>Subred específica:</strong>
                                        <pre class="command-block">zmap -p 22 192.168.0.0/16 -o ssh.txt</pre>
                                    </div>
                                </div>
                                
                                <div class="performance-stats mt-3">
                                    <small class="text-muted">
                                        <i class="fas fa-chart-line me-1"></i>
                                        Capaz de escanear 1.3 millones de paquetes por segundo
                                    </small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="concept-card">
                <h4>
                    <svg class="concept-icon me-2" width="24" height="24" viewBox="0 0 100 100">
                        <use href="../../assets/images/icons.svg#icon-packet"></use>
                    </svg>
                    Hping3
                </h4>
                <p>Herramienta avanzada de manipulación de paquetes que permite crear escaneos personalizados y técnicas de evasión sofisticadas.</p>
                
                <div class="hping-capabilities">
                    <h5>Capacidades de Hping3:</h5>
                    <div class="accordion" id="hpingAccordion">
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseCustomScan">
                                    Escaneos Personalizados
                                </button>
                            </h2>
                            <div id="collapseCustomScan" class="accordion-collapse collapse show" data-bs-parent="#hpingAccordion">
                                <div class="accordion-body">
                                    <div class="hping-examples">
                                        <div class="example-item">
                                            <strong>SYN scan manual:</strong>
                                            <pre class="command-block">hping3 -S -p 80 target.com</pre>
                                            <small>Envía paquete SYN al puerto 80</small>
                                        </div>
                                        <div class="example-item">
                                            <strong>UDP scan:</strong>
                                            <pre class="command-block">hping3 -2 -p 53 target.com</pre>
                                            <small>Escaneo UDP al puerto 53 (DNS)</small>
                                        </div>
                                        <div class="example-item">
                                            <strong>Port range scan:</strong>
                                            <pre class="command-block">hping3 -S -p ++1 target.com</pre>
                                            <small>Incrementa puerto en cada paquete</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFirewallBypass">
                                    Evasión de Firewalls
                                </button>
                            </h2>
                            <div id="collapseFirewallBypass" class="accordion-collapse collapse" data-bs-parent="#hpingAccordion">
                                <div class="accordion-body">
                                    <div class="hping-examples">
                                        <div class="example-item">
                                            <strong>Fragmentación:</strong>
                                            <pre class="command-block">hping3 -S -p 80 -f target.com</pre>
                                            <small>Fragmenta paquetes para evadir detección</small>
                                        </div>
                                        <div class="example-item">
                                            <strong>Timing aleatorio:</strong>
                                            <pre class="command-block">hping3 -S -p 80 -i u1000 target.com</pre>
                                            <small>Intervalo de 1000 microsegundos</small>
                                        </div>
                                        <div class="example-item">
                                            <strong>Source port spoofing:</strong>
                                            <pre class="command-block">hping3 -S -p 80 -s 53 target.com</pre>
                                            <small>Usa puerto fuente 53 (DNS)</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseDoSTest">
                                    Pruebas de DoS
                                </button>
                            </h2>
                            <div id="collapseDoSTest" class="accordion-collapse collapse" data-bs-parent="#hpingAccordion">
                                <div class="accordion-body">
                                    <div class="hping-examples">
                                        <div class="example-item">
                                            <strong>Flood SYN:</strong>
                                            <pre class="command-block">hping3 -S --flood -p 80 target.com</pre>
                                            <small>⚠️ Solo para entornos de prueba autorizados</small>
                                        </div>
                                        <div class="example-item">
                                            <strong>Smurf attack:</strong>
                                            <pre class="command-block">hping3 -1 --flood -a target.com broadcast.addr</pre>
                                            <small>⚠️ Técnica de amplificación ICMP</small>
                                        </div>
                                    </div>
                                    <div class="alert alert-danger mt-3">
                                        <i class="fas fa-exclamation-triangle me-2"></i>
                                        <strong>Advertencia:</strong> Las pruebas de DoS solo deben realizarse en entornos controlados con autorización explícita.
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
                        <use href="../../assets/images/icons.svg#icon-vulnerability-scanner"></use>
                    </svg>
                    Escáneres de Vulnerabilidades
                </h4>
                <p>Herramientas especializadas en identificar vulnerabilidades conocidas en sistemas y servicios descubiertos.</p>
                
                <div class="vulnerability-scanners">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="scanner-tool">
                                <h6><i class="fas fa-shield-alt me-2 text-primary"></i>OpenVAS</h6>
                                <p>Escáner de vulnerabilidades de código abierto con amplia base de datos de pruebas.</p>
                                <ul class="features-list">
                                    <li>Más de 50,000 pruebas de vulnerabilidades</li>
                                    <li>Interfaz web completa</li>
                                    <li>Reportes detallados</li>
                                    <li>Autenticación en múltiples protocolos</li>
                                </ul>
                                <div class="usage-example">
                                    <small><strong>Instalación:</strong></small>
                                    <pre class="mini-command">apt install openvas</pre>
                                </div>
                            </div>
                        </div>
                        
                        <div class="col-md-6">
                            <div class="scanner-tool">
                                <h6><i class="fas fa-search me-2 text-success"></i>Nessus</h6>
                                <p>Escáner comercial líder en la industria con capacidades avanzadas de detección.</p>
                                <ul class="features-list">
                                    <li>Base de datos actualizada diariamente</li>
                                    <li>Compliance scanning</li>
                                    <li>Advanced dynamic analysis</li>
                                    <li>Cloud and container scanning</li>
                                </ul>
                                <div class="usage-example">
                                    <small><strong>Interfaz:</strong></small>
                                    <pre class="mini-command">https://localhost:8834</pre>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="row mt-3">
                        <div class="col-md-6">
                            <div class="scanner-tool">
                                <h6><i class="fas fa-bug me-2 text-warning"></i>Nikto</h6>
                                <p>Escáner web especializado en encontrar vulnerabilidades en servidores web.</p>
                                <div class="nikto-examples">
                                    <div class="example-item">
                                        <strong>Escaneo básico:</strong>
                                        <pre class="command-block">nikto -h http://target.com</pre>
                                    </div>
                                    <div class="example-item">
                                        <strong>Con puerto específico:</strong>
                                        <pre class="command-block">nikto -h target.com -p 8080</pre>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="col-md-6">
                            <div class="scanner-tool">
                                <h6><i class="fas fa-code me-2 text-info"></i>NSE Scripts</h6>
                                <p>Scripts especializados de Nmap para detección de vulnerabilidades específicas.</p>
                                <div class="nse-examples">
                                    <div class="example-item">
                                        <strong>HTTP vulnerabilities:</strong>
                                        <pre class="command-block">nmap --script http-vuln-* target</pre>
                                    </div>
                                    <div class="example-item">
                                        <strong>SMB vulnerabilities:</strong>
                                        <pre class="command-block">nmap --script smb-vuln-* target</pre>
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
                        <use href="../../assets/images/icons.svg#icon-stealth"></use>
                    </svg>
                    Herramientas de Evasión
                </h4>
                <p>Técnicas y herramientas avanzadas para evitar la detección por sistemas de seguridad durante el escaneo.</p>
                
                <div class="evasion-techniques">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="evasion-category">
                                <h5><i class="fas fa-mask me-2"></i>Técnicas de Evasión con Nmap</h5>
                                <div class="evasion-grid">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="evasion-method">
                                                <h6>Fragmentación de Paquetes</h6>
                                                <pre class="command-block">nmap -f target.com</pre>
                                                <small>Divide paquetes en fragmentos pequeños</small>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="evasion-method">
                                                <h6>Decoy Scanning</h6>
                                                <pre class="command-block">nmap -D RND:10 target.com</pre>
                                                <small>Usa 10 direcciones IP señuelo aleatorias</small>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row mt-3">
                                        <div class="col-md-6">
                                            <div class="evasion-method">
                                                <h6>Source Port Manipulation</h6>
                                                <pre class="command-block">nmap --source-port 53 target.com</pre>
                                                <small>Usa puerto DNS como origen</small>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="evasion-method">
                                                <h6>MAC Address Spoofing</h6>
                                                <pre class="command-block">nmap --spoof-mac 0 target.com</pre>
                                                <small>Genera MAC address aleatoria</small>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row mt-3">
                                        <div class="col-md-6">
                                            <div class="evasion-method">
                                                <h6>Bad Checksum</h6>
                                                <pre class="command-block">nmap --badsum target.com</pre>
                                                <small>Envía paquetes con checksums incorrectos</small>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="evasion-method">
                                                <h6>Data Length</h6>
                                                <pre class="command-block">nmap --data-length 25 target.com</pre>
                                                <small>Añade datos aleatorios a paquetes</small>
                                            </div>
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
                    <p><strong>¿Cuál es la principal ventaja de Masscan sobre Nmap?</strong></p>
                    <div class="quiz-options">
                        <label class="quiz-option">
                            <input type="radio" name="q6" value="a">
                            <span>Mayor precisión en la detección de servicios</span>
                        </label>
                        <label class="quiz-option">
                            <input type="radio" name="q6" value="b">
                            <span>Velocidad de escaneo extremadamente alta</span>
                        </label>
                        <label class="quiz-option">
                            <input type="radio" name="q6" value="c">
                            <span>Mejor evasión de sistemas de detección</span>
                        </label>
                    </div>
                </div>
                
                <div class="quiz-question mt-3">
                    <p><strong>¿Qué opción de Nmap se utiliza para crear un escaneo con direcciones IP señuelo?</strong></p>
                    <div class="quiz-options">
                        <label class="quiz-option">
                            <input type="radio" name="q7" value="a">
                            <span>-D</span>
                        </label>
                        <label class="quiz-option">
                            <input type="radio" name="q7" value="b">
                            <span>-S</span>
                        </label>
                        <label class="quiz-option">
                            <input type="radio" name="q7" value="c">
                            <span>-f</span>
                        </label>
                    </div>
                </div>
            </div>

            <div class="case-study mt-4">
                <h4 class="text-center">
                    <svg class="case-icon me-2" width="24" height="24" viewBox="0 0 100 100">
                        <use href="../../assets/images/icons.svg#icon-case-study"></use>
                    </svg>
                    Caso de Estudio: Selección de Herramientas
                </h4>
                <div class="case-content">
                    <div class="case-scenario">
                        <h6>📚 Escenario:</h6>
                        <p>Necesitas escanear una red corporativa muy grande (Clase A) en busca de servidores web. La red tiene sistemas de detección de intrusos avanzados y necesitas completar el escaneo lo más rápido posible sin ser detectado.</p>
                    </div>
                    
                    <div class="case-question mt-3">
                        <h6>❓ Pregunta de Análisis:</h6>
                        <p><strong>¿Cuál sería la mejor combinación de herramientas y técnicas?</strong></p>
                        <div class="case-options">
                            <button class="btn btn-outline-primary case-option" data-case="q4" data-value="a">
                                A) Nmap con timing T5 y escaneo agresivo para velocidad máxima
                            </button>
                            <button class="btn btn-outline-primary case-option" data-case="q4" data-value="b">
                                B) Masscan para descubrimiento rápido + Nmap con evasión para verificación
                            </button>
                            <button class="btn btn-outline-primary case-option" data-case="q4" data-value="c">
                                C) Solo Hping3 con intervalos largos para máxima discreción
                            </button>
                        </div>
                        <div class="case-feedback" id="case-q4-feedback" style="display: none;"></div>
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

function createBannerFingerprintingContent(topic) {
    return `
        <div class="topic-header">
            <h2 class="text-center">
                <svg class="topic-icon me-2" width="32" height="32" viewBox="0 0 100 100">
                    <use href="../../assets/images/icons.svg#icon-fingerprint"></use>
                </svg>
                ${topic.title}
            </h2>
            <p class="topic-intro">
                El banner grabbing y fingerprinting son técnicas esenciales para obtener información detallada sobre servicios, versiones de software y sistemas operativos, permitiendo una evaluación de seguridad más precisa.
            </p>
        </div>

        <div class="topic-content-body">
            <h3>Técnicas de Banner Grabbing y Fingerprinting</h3>
            
            <!-- Diagrama de Banner Grabbing -->            <div class="banner-grabbing-diagram mb-4">
                <h4 class="text-center mb-3">Proceso de Banner Grabbing</h4>
                <svg class="w-100" style="max-height: 500px;" viewBox="0 0 700 500">
                    <use href="../../assets/images/diagrams.svg#banner-grabbing"></use>
                </svg>
                <p class="text-center text-muted mt-2">
                    <small>Flujo del proceso de captura y análisis de banners de servicios</small>
                </p>
            </div>

            <div class="concept-card">
                <h4>
                    <svg class="concept-icon me-2" width="24" height="24" viewBox="0 0 100 100">
                        <use href="../../assets/images/icons.svg#icon-banner"></use>
                    </svg>
                    Captura de Banners
                </h4>
                <p>El banner grabbing consiste en conectarse a servicios de red para obtener información de identificación que revelan detalles sobre el software, versión y configuración.</p>
                
                <div class="banner-techniques">
                    <h5>Técnicas de Banner Grabbing por Protocolo:</h5>
                    
                    <div class="accordion" id="bannerAccordion">
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseHTTP">
                                    Banner Grabbing HTTP/HTTPS
                                </button>
                            </h2>
                            <div id="collapseHTTP" class="accordion-collapse collapse show" data-bs-parent="#bannerAccordion">
                                <div class="accordion-body">
                                    <div class="protocol-techniques">
                                        <div class="technique-method">
                                            <h6><i class="fas fa-terminal me-2"></i>Telnet Manual</h6>
                                            <pre class="command-block">telnet target.com 80
GET / HTTP/1.1
Host: target.com
[Enter][Enter]</pre>
                                            <div class="output-example">
                                                <strong>Respuesta típica:</strong>
                                                <pre class="output-block">HTTP/1.1 200 OK
Server: Apache/2.4.41 (Ubuntu)
X-Powered-By: PHP/7.4.3</pre>
                                            </div>
                                        </div>
                                        
                                        <div class="technique-method">
                                            <h6><i class="fas fa-network-wired me-2"></i>Netcat</h6>
                                            <pre class="command-block">echo -e "GET / HTTP/1.1\\nHost: target.com\\n\\n" | nc target.com 80</pre>
                                        </div>
                                        
                                        <div class="technique-method">
                                            <h6><i class="fas fa-globe me-2"></i>cURL</h6>
                                            <pre class="command-block">curl -I http://target.com</pre>
                                            <small>Solo headers HTTP</small>
                                        </div>
                                        
                                        <div class="technique-method">
                                            <h6><i class="fas fa-search me-2"></i>Nmap</h6>
                                            <pre class="command-block">nmap -sV --script=banner target.com</pre>
                                            <small>Automático con scripts</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSSH">
                                    Banner Grabbing SSH
                                </button>
                            </h2>
                            <div id="collapseSSH" class="accordion-collapse collapse" data-bs-parent="#bannerAccordion">
                                <div class="accordion-body">
                                    <div class="protocol-techniques">
                                        <div class="technique-method">
                                            <h6><i class="fas fa-terminal me-2"></i>Netcat Simple</h6>
                                            <pre class="command-block">nc target.com 22</pre>
                                            <div class="output-example">
                                                <strong>Respuesta típica:</strong>
                                                <pre class="output-block">SSH-2.0-OpenSSH_8.2p1 Ubuntu-4ubuntu0.5</pre>
                                            </div>
                                        </div>
                                        
                                        <div class="technique-method">
                                            <h6><i class="fas fa-key me-2"></i>SSH Client</h6>
                                            <pre class="command-block">ssh -V target.com 2>&1 | head -1</pre>
                                        </div>
                                        
                                        <div class="technique-method">
                                            <h6><i class="fas fa-search me-2"></i>Nmap SSH Scripts</h6>
                                            <pre class="command-block">nmap --script ssh2-enum-algos target.com</pre>
                                            <small>Enumera algoritmos soportados</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFTP">
                                    Banner Grabbing FTP
                                </button>
                            </h2>
                            <div id="collapseFTP" class="accordion-collapse collapse" data-bs-parent="#bannerAccordion">
                                <div class="accordion-body">
                                    <div class="protocol-techniques">
                                        <div class="technique-method">
                                            <h6><i class="fas fa-terminal me-2"></i>Telnet/Netcat</h6>
                                            <pre class="command-block">nc target.com 21</pre>
                                            <div class="output-example">
                                                <strong>Respuesta típica:</strong>
                                                <pre class="output-block">220 (vsFTPd 3.0.3)</pre>
                                            </div>
                                        </div>
                                        
                                        <div class="technique-method">
                                            <h6><i class="fas fa-folder-open me-2"></i>FTP Client</h6>
                                            <pre class="command-block">ftp target.com</pre>
                                            <small>Banner se muestra automáticamente</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSMTP">
                                    Banner Grabbing SMTP
                                </button>
                            </h2>
                            <div id="collapseSMTP" class="accordion-collapse collapse" data-bs-parent="#bannerAccordion">
                                <div class="accordion-body">
                                    <div class="protocol-techniques">
                                        <div class="technique-method">
                                            <h6><i class="fas fa-terminal me-2"></i>Telnet Manual</h6>
                                            <pre class="command-block">telnet target.com 25</pre>
                                            <div class="output-example">
                                                <strong>Respuesta típica:</strong>
                                                <pre class="output-block">220 mail.target.com ESMTP Postfix (Ubuntu)</pre>
                                            </div>
                                        </div>
                                        
                                        <div class="technique-method">
                                            <h6><i class="fas fa-envelope me-2"></i>SMTP Commands</h6>
                                            <pre class="command-block">EHLO test.com
HELP
QUIT</pre>
                                            <small>Comandos para obtener más información</small>
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
                        <use href="../../assets/images/icons.svg#icon-collect"></use>
                    </svg>
                    Acaparamiento de Información
                </h4>
                <p>El acaparamiento de información va más allá del banner grabbing, recopilando datos adicionales sobre configuraciones, políticas y características del sistema.</p>
                
                <div class="information-gathering">
                    <h5>Técnicas de Acaparamiento:</h5>
                    <div class="row">
                        <div class="col-md-6">
                            <div class="gathering-method">
                                <h6><i class="fas fa-spider me-2 text-primary"></i>Web Crawling</h6>
                                <p>Analizar páginas web para obtener información sobre tecnologías utilizadas.</p>
                                <div class="tool-examples">
                                    <div class="example-item">
                                        <strong>Whatweb:</strong>
                                        <pre class="command-block">whatweb target.com</pre>
                                    </div>
                                    <div class="example-item">
                                        <strong>Wappalyzer CLI:</strong>
                                        <pre class="command-block">wappalyzer target.com</pre>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="col-md-6">
                            <div class="gathering-method">
                                <h6><i class="fas fa-code me-2 text-success"></i>Source Code Analysis</h6>
                                <p>Examinar código fuente HTML para encontrar comentarios e información sensible.</p>
                                <div class="tool-examples">
                                    <div class="example-item">
                                        <strong>View Source:</strong>
                                        <pre class="command-block">curl -s target.com | grep -i comment</pre>
                                    </div>
                                    <div class="example-item">
                                        <strong>Robots.txt:</strong>
                                        <pre class="command-block">curl target.com/robots.txt</pre>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="row mt-3">
                        <div class="col-md-6">
                            <div class="gathering-method">
                                <h6><i class="fas fa-certificate me-2 text-warning"></i>SSL/TLS Information</h6>
                                <p>Analizar certificados SSL para obtener información del servidor.</p>
                                <div class="tool-examples">
                                    <div class="example-item">
                                        <strong>OpenSSL:</strong>
                                        <pre class="command-block">openssl s_client -connect target.com:443</pre>
                                    </div>
                                    <div class="example-item">
                                        <strong>SSLyze:</strong>
                                        <pre class="command-block">sslyze target.com</pre>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="col-md-6">
                            <div class="gathering-method">
                                <h6><i class="fas fa-network-wired me-2 text-info"></i>Network Services</h6>
                                <p>Obtener información detallada de servicios de red específicos.</p>
                                <div class="tool-examples">
                                    <div class="example-item">
                                        <strong>SNMP Walk:</strong>
                                        <pre class="command-block">snmpwalk -v1 -c public target.com</pre>
                                    </div>
                                    <div class="example-item">
                                        <strong>SMB Enumeration:</strong>
                                        <pre class="command-block">smbclient -L target.com</pre>
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
                        <use href="../../assets/images/icons.svg#icon-os-active"></use>
                    </svg>
                    OS Fingerprinting Activo
                </h4>
                <p>El OS fingerprinting activo envía paquetes especialmente crafteados para identificar el sistema operativo basándose en las respuestas específicas del stack TCP/IP.</p>
                
                <div class="active-fingerprinting">
                    <h5>Técnicas de OS Fingerprinting Activo:</h5>
                    
                    <div class="fingerprinting-methods">
                        <div class="method-card">
                            <h6><i class="fas fa-search me-2 text-primary"></i>Nmap OS Detection</h6>
                            <p>La técnica más utilizada y precisa para identificación de sistemas operativos.</p>
                            <div class="nmap-os-examples">
                                <div class="example-item">
                                    <strong>Detección básica:</strong>
                                    <pre class="command-block">nmap -O target.com</pre>
                                </div>
                                <div class="example-item">
                                    <strong>Detección agresiva:</strong>
                                    <pre class="command-block">nmap -O --osscan-guess target.com</pre>
                                </div>
                                <div class="example-item">
                                    <strong>Con límite de intentos:</strong>
                                    <pre class="command-block">nmap -O --osscan-limit target.com</pre>
                                </div>
                            </div>
                            
                            <div class="os-detection-process mt-3">
                                <h7>Proceso de Detección de Nmap:</h7>
                                <ol class="process-steps">
                                    <li><strong>TCP Sequence Number Sampling:</strong> Analiza números de secuencia TCP</li>
                                    <li><strong>TCP Options:</strong> Examina opciones TCP soportadas</li>
                                    <li><strong>IP ID Sampling:</strong> Estudia patrones de ID de paquetes IP</li>
                                    <li><strong>Initial Window Size:</strong> Analiza tamaño de ventana inicial</li>
                                    <li><strong>TCP Flags:</strong> Prueba respuestas a combinaciones de flags</li>
                                    <li><strong>ICMP Message Quoting:</strong> Examina cómo se citan mensajes ICMP</li>
                                </ol>
                            </div>
                        </div>
                        
                        <div class="method-card mt-4">
                            <h6><i class="fas fa-fingerprint me-2 text-success"></i>Xprobe2</h6>
                            <p>Herramienta alternativa de OS fingerprinting con enfoque en técnicas estadísticas.</p>
                            <div class="xprobe-examples">
                                <div class="example-item">
                                    <strong>Escaneo básico:</strong>
                                    <pre class="command-block">xprobe2 target.com</pre>
                                </div>
                                <div class="example-item">
                                    <strong>Modo verbose:</strong>
                                    <pre class="command-block">xprobe2 -v target.com</pre>
                                </div>
                            </div>
                        </div>
                        
                        <div class="method-card mt-4">
                            <h6><i class="fas fa-tools me-2 text-warning"></i>Técnicas Manuales con Hping</h6>
                            <p>Creación manual de paquetes para análisis específico de respuestas del OS.</p>
                            <div class="hping-examples">
                                <div class="example-item">
                                    <strong>Test Window Size:</strong>
                                    <pre class="command-block">hping3 -S -p 80 -c 1 target.com</pre>
                                </div>
                                <div class="example-item">
                                    <strong>Test ICMP:</strong>
                                    <pre class="command-block">hping3 -1 -c 1 target.com</pre>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="concept-card">
                <h4>
                    <svg class="concept-icon me-2" width="24" height="24" viewBox="0 0 100 100">
                        <use href="../../assets/images/icons.svg#icon-os-passive"></use>
                    </svg>
                    OS Fingerprinting Pasivo
                </h4>
                <p>El fingerprinting pasivo analiza el tráfico de red existente sin generar paquetes adicionales, siendo completamente indetectable.</p>
                
                <div class="passive-fingerprinting">
                    <h5>Herramientas de Fingerprinting Pasivo:</h5>
                    
                    <div class="row">
                        <div class="col-md-6">
                            <div class="passive-tool">
                                <h6><i class="fas fa-eye me-2 text-primary"></i>P0f</h6>
                                <p>Herramienta líder en fingerprinting pasivo que analiza características únicas del tráfico TCP/IP.</p>
                                <div class="p0f-examples">
                                    <div class="example-item">
                                        <strong>Modo básico:</strong>
                                        <pre class="command-block">p0f -i eth0</pre>
                                    </div>
                                    <div class="example-item">
                                        <strong>Archivo PCAP:</strong>
                                        <pre class="command-block">p0f -r capture.pcap</pre>
                                    </div>
                                    <div class="example-item">
                                        <strong>Modo daemon:</strong>
                                        <pre class="command-block">p0f -d -o p0f.log</pre>
                                    </div>
                                </div>
                                
                                <div class="p0f-features mt-3">
                                    <h7>Capacidades de P0f:</h7>
                                    <ul class="features-list">
                                        <li>Identificación de OS y aplicaciones</li>
                                        <li>Detección de NAT y proxies</li>
                                        <li>Estimación de uptime del sistema</li>
                                        <li>Detección de herramientas de red</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        
                        <div class="col-md-6">
                            <div class="passive-tool">
                                <h6><i class="fas fa-network-wired me-2 text-success"></i>Ettercap</h6>
                                <p>Suite completa que incluye capacidades de fingerprinting pasivo y análisis de red.</p>
                                <div class="ettercap-examples">
                                    <div class="example-item">
                                        <strong>Modo text:</strong>
                                        <pre class="command-block">ettercap -T -M arp /192.168.1.0/24//</pre>
                                    </div>
                                    <div class="example-item">
                                        <strong>Fingerprinting:</strong>
                                        <pre class="command-block">ettercap -T -P fingerprint</pre>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="passive-analysis mt-4">
                        <h5><i class="fas fa-chart-line me-2"></i>Análisis de Características TCP/IP</h5>
                        <div class="characteristics-grid">
                            <div class="row">
                                <div class="col-md-4">
                                    <div class="characteristic-item">
                                        <strong>TTL Values</strong>
                                        <ul class="small">
                                            <li>Windows: 128</li>
                                            <li>Linux: 64</li>
                                            <li>Cisco: 255</li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="characteristic-item">
                                        <strong>Window Size</strong>
                                        <ul class="small">
                                            <li>Windows: 65535, 8192</li>
                                            <li>Linux: 5840, 5792</li>
                                            <li>FreeBSD: 65535</li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="characteristic-item">
                                        <strong>TCP Options</strong>
                                        <ul class="small">
                                            <li>MSS ordering</li>
                                            <li>Window scaling</li>
                                            <li>Timestamp usage</li>
                                        </ul>
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
                    <p><strong>¿Cuál es la principal diferencia entre OS fingerprinting activo y pasivo?</strong></p>
                    <div class="quiz-options">
                        <label class="quiz-option">
                            <input type="radio" name="q8" value="a">
                            <span>El activo es más preciso que el pasivo</span>
                        </label>
                        <label class="quiz-option">
                            <input type="radio" name="q8" value="b">
                            <span>El activo envía paquetes, el pasivo solo analiza tráfico existente</span>
                        </label>
                        <label class="quiz-option">
                            <input type="radio" name="q8" value="c">
                            <span>No hay diferencia, son sinónimos</span>
                        </label>
                    </div>
                </div>
                
                <div class="quiz-question mt-3">
                    <p><strong>¿Qué herramienta es más conocida para fingerprinting pasivo?</strong></p>
                    <div class="quiz-options">
                        <label class="quiz-option">
                            <input type="radio" name="q9" value="a">
                            <span>Nmap</span>
                        </label>
                        <label class="quiz-option">
                            <input type="radio" name="q9" value="b">
                            <span>P0f</span>
                        </label>
                        <label class="quiz-option">
                            <input type="radio" name="q9" value="c">
                            <span>Hping3</span>
                        </label>
                    </div>
                </div>
            </div>

            <div class="case-study mt-4">
                <h4 class="text-center">
                    <svg class="case-icon me-2" width="24" height="24" viewBox="0 0 100 100">
                        <use href="../../assets/images/icons.svg#icon-case-study"></use>
                    </svg>
                    Caso de Estudio: Análisis Sigiloso
                </h4>
                <div class="case-content">
                    <div class="case-scenario">
                        <h6>📚 Escenario:</h6>
                        <p>Necesitas identificar el sistema operativo de varios servidores críticos, pero el cliente ha enfatizado que no debe haber absolutamente ninguna interrupción de servicio ni detección por parte de sus sistemas de monitoreo.</p>
                    </div>
                    
                    <div class="case-question mt-3">
                        <h6>❓ Pregunta de Análisis:</h6>
                        <p><strong>¿Cuál sería el enfoque más apropiado?</strong></p>
                        <div class="case-options">
                            <button class="btn btn-outline-primary case-option" data-case="q5" data-value="a">
                                A) Usar Nmap con OS detection en modo stealth
                            </button>
                            <button class="btn btn-outline-primary case-option" data-case="q5" data-value="b">
                                B) Implementar fingerprinting pasivo con P0f
                            </button>
                            <button class="btn btn-outline-primary case-option" data-case="q5" data-value="c">
                                C) Combinar banner grabbing manual con análisis de TTL
                            </button>
                        </div>
                        <div class="case-feedback" id="case-q5-feedback" style="display: none;"></div>
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

function createProxychainsContent(topic) {
    return `
        <div class="topic-header">
            <h2 class="text-center">
                <svg class="topic-icon me-2" width="32" height="32" viewBox="0 0 100 100">
                    <use href="../../assets/images/icons.svg#icon-proxy"></use>
                </svg>
                ${topic.title}
            </h2>
            <p class="topic-intro">
                Las técnicas de anonimización y proxies son esenciales para mantener la privacidad y evitar la detección durante actividades de escaneo y evaluación de seguridad autorizadas.
            </p>
        </div>

        <div class="topic-content-body">
            <h3>Técnicas de Anonimización en Escaneo</h3>
            
            <!-- Diagrama de Red Proxy/Tor -->            <div class="proxy-network-diagram mb-4">
                <h4 class="text-center mb-3">Red de Proxies y Tor</h4>
                <svg class="w-100" style="max-height: 400px;" viewBox="0 0 900 400">
                    <use href="../../assets/images/diagrams.svg#proxy-tor-network"></use>
                </svg>
                <p class="text-center text-muted mt-2">
                    <small>Arquitectura de anonimización usando proxies y red Tor</small>
                </p>
            </div>

            <div class="concept-card">
                <h4>
                    <svg class="concept-icon me-2" width="24" height="24" viewBox="0 0 100 100">
                        <use href="../../assets/images/icons.svg#icon-proxychains"></use>
                    </svg>
                    Configuración de Proxychains
                </h4>
                <p>Proxychains permite enrutar conexiones a través de múltiples servidores proxy, creando cadenas complejas de anonimización para ocultar el origen real de las conexiones.</p>
                
                <div class="proxychains-setup">
                    <h5>Instalación y Configuración:</h5>
                    
                    <div class="setup-steps">
                        <div class="step-item">
                            <h6><i class="fas fa-download me-2 text-primary"></i>Instalación</h6>
                            <div class="install-commands">
                                <div class="command-option">
                                    <strong>Ubuntu/Debian:</strong>
                                    <pre class="command-block">sudo apt update && sudo apt install proxychains4</pre>
                                </div>
                                <div class="command-option">
                                    <strong>CentOS/RHEL:</strong>
                                    <pre class="command-block">sudo yum install proxychains-ng</pre>
                                </div>
                                <div class="command-option">
                                    <strong>Kali Linux:</strong>
                                    <pre class="command-block">apt install proxychains4</pre>
                                    <small class="text-muted">Generalmente preinstalado</small>
                                </div>
                            </div>
                        </div>
                        
                        <div class="step-item">
                            <h6><i class="fas fa-cog me-2 text-success"></i>Configuración del Archivo</h6>
                            <p>El archivo de configuración principal se encuentra en <code>/etc/proxychains4.conf</code></p>
                            
                            <div class="config-example">
                                <strong>Ejemplo de configuración:</strong>
                                <pre class="config-block"># /etc/proxychains4.conf

# Tipo de cadena de proxies
dynamic_chain    # Los proxies se usan en orden hasta encontrar uno que funcione
# strict_chain   # Todos los proxies deben funcionar
# random_chain   # Proxies se usan en orden aleatorio

# Configuraciones adicionales
proxy_dns        # DNS queries através de proxies
remote_dns_subnet 224
tcp_read_time_out 15000
tcp_connect_time_out 8000

# Lista de proxies
[ProxyList]
# Formato: tipo host puerto [usuario password]
socks4  127.0.0.1   9050
socks5  proxy1.com  1080  usuario password
http    proxy2.com  8080</pre>
                            </div>
                        </div>
                        
                        <div class="step-item">
                            <h6><i class="fas fa-play me-2 text-warning"></i>Uso Básico</h6>
                            <div class="usage-examples">
                                <div class="example-item">
                                    <strong>Comando básico:</strong>
                                    <pre class="command-block">proxychains4 nmap -sT target.com</pre>
                                    <small>Ejecuta nmap a través de la cadena de proxies</small>
                                </div>
                                <div class="example-item">
                                    <strong>Con configuración específica:</strong>
                                    <pre class="command-block">proxychains4 -f /path/to/custom.conf curl http://target.com</pre>
                                </div>
                                <div class="example-item">
                                    <strong>Modo silencioso:</strong>
                                    <pre class="command-block">proxychains4 -q wget http://target.com</pre>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="chain-types mt-4">
                        <h5>Tipos de Cadenas de Proxies:</h5>
                        <div class="row">
                            <div class="col-md-4">
                                <div class="chain-type-card">
                                    <h6><i class="fas fa-link me-2"></i>Dynamic Chain</h6>
                                    <p>Usa proxies en orden hasta encontrar uno funcional.</p>
                                    <div class="pros-cons">
                                        <div class="pros">
                                            <strong>Ventajas:</strong>
                                            <ul class="small">
                                                <li>Resistente a proxies caídos</li>
                                                <li>Más rápido que strict</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="chain-type-card">
                                    <h6><i class="fas fa-shield-alt me-2"></i>Strict Chain</h6>
                                    <p>Todos los proxies deben funcionar en secuencia.</p>
                                    <div class="pros-cons">
                                        <div class="pros">
                                            <strong>Ventajas:</strong>
                                            <ul class="small">
                                                <li>Máxima anonimización</li>
                                                <li>Múltiples saltos</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="chain-type-card">
                                    <h6><i class="fas fa-random me-2"></i>Random Chain</h6>
                                    <p>Proxies seleccionados aleatoriamente.</p>
                                    <div class="pros-cons">
                                        <div class="pros">
                                            <strong>Ventajas:</strong>
                                            <ul class="small">
                                                <li>Dificulta tracking</li>
                                                <li>Patrones impredecibles</li>
                                            </ul>
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
                        <use href="../../assets/images/icons.svg#icon-tor"></use>
                    </svg>
                    Red Tor para Anonimato
                </h4>
                <p>La red Tor (The Onion Router) proporciona anonimato robusto mediante el enrutamiento de tráfico a través de múltiples nodos encriptados.</p>
                
                <div class="tor-setup">
                    <h5>Configuración de Tor:</h5>
                    
                    <div class="tor-installation">
                        <h6><i class="fas fa-download me-2"></i>Instalación de Tor</h6>
                        <div class="install-options">
                            <div class="option-item">
                                <strong>Ubuntu/Debian:</strong>
                                <pre class="command-block">sudo apt update
sudo apt install tor</pre>
                            </div>
                            <div class="option-item">
                                <strong>Iniciar servicio:</strong>
                                <pre class="command-block">sudo systemctl start tor
sudo systemctl enable tor</pre>
                            </div>
                            <div class="option-item">
                                <strong>Verificar estado:</strong>
                                <pre class="command-block">sudo systemctl status tor</pre>
                            </div>
                        </div>
                    </div>
                    
                    <div class="tor-config mt-4">
                        <h6><i class="fas fa-cog me-2"></i>Configuración de Tor</h6>
                        <p>Archivo de configuración: <code>/etc/tor/torrc</code></p>
                        <div class="config-example">
                            <pre class="config-block"># Configuración básica de Tor
SocksPort 9050              # Puerto SOCKS por defecto
ControlPort 9051            # Puerto de control
ExitPolicy reject *:*       # No actuar como exit node
DataDirectory /var/lib/tor  # Directorio de datos

# Configuraciones opcionales para mayor anonimato
EntryNodes {us}             # Usar solo nodos de entrada US
ExitNodes {de}              # Usar solo nodos de salida alemanes
StrictNodes 1               # Forzar usar solo nodos especificados</pre>
                        </div>
                    </div>
                    
                    <div class="tor-usage mt-4">
                        <h6><i class="fas fa-terminal me-2"></i>Uso de Tor con Herramientas</h6>
                        <div class="tor-tools">
                            <div class="tool-example">
                                <strong>Proxychains + Tor:</strong>
                                <pre class="command-block"># Configurar proxychains para usar Tor
echo "socks4 127.0.0.1 9050" >> /etc/proxychains4.conf
proxychains4 nmap -sT target.com</pre>
                            </div>
                            <div class="tool-example">
                                <strong>Torify (wrapper):</strong>
                                <pre class="command-block">torify nmap -sT target.com
torify curl http://target.com</pre>
                            </div>
                            <div class="tool-example">
                                <strong>Torsocks:</strong>
                                <pre class="command-block">torsocks wget http://target.com
torsocks ssh user@target.com</pre>
                            </div>
                        </div>
                    </div>
                    
                    <div class="tor-verification mt-4">
                        <h6><i class="fas fa-check me-2"></i>Verificación de Anonimato</h6>
                        <div class="verification-methods">
                            <div class="verify-item">
                                <strong>Verificar IP externa:</strong>
                                <pre class="command-block">proxychains4 curl http://icanhazip.com
torify curl http://httpbin.org/ip</pre>
                            </div>
                            <div class="verify-item">
                                <strong>Verificar circuito Tor:</strong>
                                <pre class="command-block">curl --socks5 127.0.0.1:9050 http://check.torproject.org</pre>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="concept-card">
                <h4>
                    <svg class="concept-icon me-2" width="24" height="24" viewBox="0 0 100 100">
                        <use href="../../assets/images/icons.svg#icon-vpn"></use>
                    </svg>
                    VPN y Técnicas de Anonimato
                </h4>
                <p>Las VPN y otras técnicas complementarias proporcionan capas adicionales de anonimato y protección durante actividades de escaneo.</p>
                
                <div class="anonymity-techniques">
                    <h5>Técnicas Complementarias:</h5>
                    
                    <div class="row">
                        <div class="col-md-6">
                            <div class="technique-section">
                                <h6><i class="fas fa-shield me-2 text-primary"></i>VPN (Virtual Private Network)</h6>
                                <div class="vpn-benefits">
                                    <p><strong>Ventajas:</strong></p>
                                    <ul class="benefits-list">
                                        <li>Cifrado de todo el tráfico</li>
                                        <li>Cambio de ubicación geográfica</li>
                                        <li>Velocidad mayor que Tor</li>
                                        <li>Compatible con todas las aplicaciones</li>
                                    </ul>
                                </div>
                                
                                <div class="vpn-setup">
                                    <strong>OpenVPN básico:</strong>
                                    <pre class="command-block">sudo openvpn --config client.ovpn</pre>
                                </div>
                            </div>
                        </div>
                        
                        <div class="col-md-6">
                            <div class="technique-section">
                                <h6><i class="fas fa-server me-2 text-success"></i>SSH Tunneling</h6>
                                <div class="ssh-tunneling">
                                    <p><strong>Túneles SSH SOCKS:</strong></p>
                                    <pre class="command-block">ssh -D 8080 user@proxy-server.com</pre>
                                    <small>Crea proxy SOCKS en puerto 8080</small>
                                    
                                    <p class="mt-3"><strong>Usar el túnel:</strong></p>
                                    <pre class="command-block">proxychains4 -f custom.conf curl target.com</pre>
                                    <small>Configurar socks5 127.0.0.1 8080 en custom.conf</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="row mt-4">
                        <div class="col-md-6">
                            <div class="technique-section">
                                <h6><i class="fas fa-cloud me-2 text-warning"></i>Cloud Proxies</h6>
                                <div class="cloud-proxies">
                                    <p><strong>Proveedores populares:</strong></p>
                                    <ul class="providers-list">
                                        <li>AWS EC2 instances</li>
                                        <li>Google Cloud Platform</li>
                                        <li>DigitalOcean Droplets</li>
                                        <li>Linode VPS</li>
                                    </ul>
                                    
                                    <div class="cloud-setup">
                                        <strong>Squid Proxy en VPS:</strong>
                                        <pre class="command-block">sudo apt install squid
sudo systemctl start squid</pre>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="col-md-6">
                            <div class="technique-section">
                                <h6><i class="fas fa-mask me-2 text-info"></i>MAC Spoofing</h6>
                                <div class="mac-spoofing">
                                    <p><strong>Cambio de dirección MAC:</strong></p>
                                    <pre class="command-block">sudo ifconfig eth0 down
sudo ifconfig eth0 hw ether 00:11:22:33:44:55
sudo ifconfig eth0 up</pre>
                                    
                                    <p class="mt-3"><strong>Con macchanger:</strong></p>
                                    <pre class="command-block">sudo macchanger -r eth0</pre>
                                    <small>Genera MAC aleatoria</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="concept-card">
                <h4>
                    <svg class="concept-icon me-2" width="24" height="24" viewBox="0 0 100 100">
                        <use href="../../assets/images/icons.svg#icon-security"></use>
                    </svg>
                    Consideraciones de Seguridad
                </h4>
                <p>El uso de técnicas de anonimización requiere cuidado especial para mantener la seguridad operacional y evitar comprometer la identidad del evaluador.</p>
                
                <div class="security-considerations">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="security-section">
                                <h6><i class="fas fa-exclamation-triangle me-2 text-warning"></i>Riesgos y Limitaciones</h6>
                                <div class="risks-list">
                                    <div class="risk-item">
                                        <strong>DNS Leaks:</strong>
                                        <p>Las consultas DNS pueden revelar la identidad real.</p>
                                        <div class="mitigation">
                                            <small><strong>Mitigación:</strong> Usar proxy_dns en proxychains</small>
                                        </div>
                                    </div>
                                    
                                    <div class="risk-item">
                                        <strong>WebRTC Leaks:</strong>
                                        <p>Navegadores pueden filtrar IP real mediante WebRTC.</p>
                                        <div class="mitigation">
                                            <small><strong>Mitigación:</strong> Deshabilitar WebRTC en navegador</small>
                                        </div>
                                    </div>
                                    
                                    <div class="risk-item">
                                        <strong>Timing Attacks:</strong>
                                        <p>Patrones de tráfico pueden revelar correlaciones.</p>
                                        <div class="mitigation">
                                            <small><strong>Mitigación:</strong> Usar timing aleatorio</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="col-md-6">
                            <div class="security-section">
                                <h6><i class="fas fa-shield-alt me-2 text-success"></i>Mejores Prácticas</h6>
                                <div class="best-practices-list">
                                    <div class="practice-item">
                                        <strong>Capas múltiples:</strong>
                                        <p>Combinar VPN + Tor + Proxychains para máxima protección.</p>
                                    </div>
                                    
                                    <div class="practice-item">
                                        <strong>Verificación constante:</strong>
                                        <p>Comprobar IP externa regularmente durante las pruebas.</p>
                                    </div>
                                    
                                    <div class="practice-item">
                                        <strong>Logs y evidencias:</strong>
                                        <p>Mantener logs de conexiones para auditoría.</p>
                                    </div>
                                    
                                    <div class="practice-item">
                                        <strong>Operaciones compartimentadas:</strong>
                                        <p>Usar diferentes cadenas para diferentes objetivos.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="alert alert-warning mt-4">
                        <h6><i class="fas fa-gavel me-2"></i>Consideración Legal:</h6>
                        <p class="mb-0">El uso de técnicas de anonimización debe estar claramente documentado y autorizado en el contrato de evaluación. Algunos países pueden tener restricciones legales sobre el uso de Tor y proxies.</p>
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
                    <p><strong>¿Cuál es la principal diferencia entre dynamic_chain y strict_chain en Proxychains?</strong></p>
                    <div class="quiz-options">
                        <label class="quiz-option">
                            <input type="radio" name="q10" value="a">
                            <span>Dynamic es más rápido, strict es más seguro</span>
                        </label>
                        <label class="quiz-option">
                            <input type="radio" name="q10" value="b">
                            <span>Dynamic usa proxies hasta encontrar uno funcional, strict requiere que todos funcionen</span>
                        </label>
                        <label class="quiz-option">
                            <input type="radio" name="q10" value="c">
                            <span>No hay diferencia práctica</span>
                        </label>
                    </div>
                </div>
                
                <div class="quiz-question mt-3">
                    <p><strong>¿Qué puerto usa Tor por defecto para conexiones SOCKS?</strong></p>
                    <div class="quiz-options">
                        <label class="quiz-option">
                            <input type="radio" name="q11" value="a">
                            <span>8080</span>
                        </label>
                        <label class="quiz-option">
                            <input type="radio" name="q11" value="b">
                            <span>9050</span>
                        </label>
                        <label class="quiz-option">
                            <input type="radio" name="q11" value="c">
                            <span>1080</span>
                        </label>
                    </div>
                </div>
            </div>

            <div class="case-study mt-4">
                <h4 class="text-center">
                    <svg class="case-icon me-2" width="24" height="24" viewBox="0 0 100 100">
                        <use href="../../assets/images/icons.svg#icon-case-study"></use>
                    </svg>
                    Caso de Estudio: Anonimización Completa
                </h4>
                <div class="case-content">
                    <div class="case-scenario">
                        <h6>📚 Escenario:</h6>
                        <p>Realizas una evaluación de penetración para una organización gubernamental que requiere el máximo nivel de anonimización. Necesitas escanear infraestructura crítica manteniendo absoluto anonimato y evitando cualquier posibilidad de rastreo.</p>
                    </div>
                    
                    <div class="case-question mt-3">
                        <h6>❓ Pregunta de Análisis:</h6>
                        <p><strong>¿Cuál sería la configuración de anonimización más robusta?</strong></p>
                        <div class="case-options">
                            <button class="btn btn-outline-primary case-option" data-case="q6" data-value="a">
                                A) VPN comercial + Tor con configuración por defecto
                            </button>
                            <button class="btn btn-outline-primary case-option" data-case="q6" data-value="b">
                                B) VPN → Proxychains (strict_chain) → Tor con nodos específicos
                            </button>
                            <button class="btn btn-outline-primary case-option" data-case="q6" data-value="c">
                                C) Solo Tor con múltiples circuitos
                            </button>
                        </div>
                        <div class="case-feedback" id="case-q6-feedback" style="display: none;"></div>
                    </div>
                </div>
            </div>

            <div class="topic-actions mt-4">
                <button class="btn btn-sena-primary" onclick="completeTopic(5)">
                    <svg class="btn-icon me-2" width="16" height="16" viewBox="0 0 100 100">
                        <use href="../../assets/images/icons.svg#icon-check"></use>
                    </svg>
                    Marcar como Completado
                </button>
            </div>
        </div>
    `;
}

function createAnalisisVulnerabilidadContent(topic) {
    return `
        <div class="topic-header">
            <h2 class="text-center">
                <svg class="topic-icon me-2" width="32" height="32" viewBox="0 0 100 100">
                    <use href="../../assets/images/icons.svg#icon-vulnerability"></use>
                </svg>
                ${topic.title}
            </h2>
            <p class="topic-intro">
                El análisis de vulnerabilidades es la culminación del proceso de escaneo, donde se identifican, evalúan y priorizan las debilidades de seguridad descubiertas en los sistemas objetivo.
            </p>
        </div>

        <div class="topic-content-body">
            <h3>Análisis Comprehensivo de Vulnerabilidades</h3>
              <!-- Diagrama de Análisis de Vulnerabilidad -->
            <div class="vulnerability-analysis-diagram mb-4">
                <h4 class="text-center mb-3">Proceso de Análisis de Vulnerabilidades</h4>
                <svg class="w-100" style="max-height: 550px;" viewBox="0 0 800 550">
                    <use href="../../assets/images/diagrams.svg#vulnerability-analysis"></use>
                </svg>
                <p class="text-center text-muted mt-2">
                    <small>Flujo completo desde identificación hasta priorización de vulnerabilidades</small>
                </p>
            </div>

            <div class="concept-card">
                <h4>
                    <svg class="concept-icon me-2" width="24" height="24" viewBox="0 0 100 100">
                        <use href="../../assets/images/icons.svg#icon-concepts"></use>
                    </svg>
                    Conceptos de Vulnerabilidades
                </h4>
                <p>Una vulnerabilidad es una debilidad en un sistema que puede ser explotada por amenazas para comprometer la seguridad de la información.</p>
                
                <div class="vulnerability-concepts">
                    <h5>Clasificación de Vulnerabilidades:</h5>
                    
                    <div class="vulnerability-types">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="vuln-category">
                                    <h6><i class="fas fa-bug me-2 text-danger"></i>Por Origen</h6>
                                    <ul class="vuln-list">
                                        <li><strong>Software:</strong> Bugs en código, librerías vulnerables</li>
                                        <li><strong>Configuración:</strong> Configuraciones inseguras por defecto</li>
                                        <li><strong>Arquitectura:</strong> Diseño inseguro del sistema</li>
                                        <li><strong>Procedimientos:</strong> Procesos de seguridad inadecuados</li>
                                    </ul>
                                </div>
                            </div>
                            
                            <div class="col-md-6">
                                <div class="vuln-category">
                                    <h6><i class="fas fa-layer-group me-2 text-warning"></i>Por Severidad (CVSS)</h6>
                                    <div class="severity-scale">
                                        <div class="severity-item critical">
                                            <span class="severity-score">9.0-10.0</span>
                                            <span class="severity-label">Crítica</span>
                                        </div>
                                        <div class="severity-item high">
                                            <span class="severity-score">7.0-8.9</span>
                                            <span class="severity-label">Alta</span>
                                        </div>
                                        <div class="severity-item medium">
                                            <span class="severity-score">4.0-6.9</span>
                                            <span class="severity-label">Media</span>
                                        </div>
                                        <div class="severity-item low">
                                            <span class="severity-score">0.1-3.9</span>
                                            <span class="severity-label">Baja</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="vulnerability-lifecycle mt-4">
                        <h5>Ciclo de Vida de Vulnerabilidades:</h5>
                        <div class="lifecycle-timeline">
                            <div class="timeline-item">
                                <div class="timeline-marker">1</div>
                                <div class="timeline-content">
                                    <h7>Descubrimiento</h7>
                                    <p>Identificación inicial de la debilidad</p>
                                </div>
                            </div>
                            <div class="timeline-item">
                                <div class="timeline-marker">2</div>
                                <div class="timeline-content">
                                    <h7>Divulgación</h7>
                                    <p>Reporte al vendor o comunidad</p>
                                </div>
                            </div>
                            <div class="timeline-item">
                                <div class="timeline-marker">3</div>
                                <div class="timeline-content">
                                    <h7>Publicación</h7>
                                    <p>Asignación de CVE y publicación</p>
                                </div>
                            </div>
                            <div class="timeline-item">
                                <div class="timeline-marker">4</div>
                                <div class="timeline-content">
                                    <h7>Explotación</h7>
                                    <p>Desarrollo de exploits</p>
                                </div>
                            </div>
                            <div class="timeline-item">
                                <div class="timeline-marker">5</div>
                                <div class="timeline-content">
                                    <h7>Mitigación</h7>
                                    <p>Parches y contramedidas</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="concept-card">
                <h4>
                    <svg class="concept-icon me-2" width="24" height="24" viewBox="0 0 100 100">
                        <use href="../../assets/images/icons.svg#icon-tools-advanced"></use>
                    </svg>
                    Herramientas de Análisis
                </h4>
                <p>Las herramientas de análisis de vulnerabilidades automatizan el proceso de identificación y evaluación de debilidades de seguridad.</p>
                
                <div class="analysis-tools">
                    <h5>Categorías de Herramientas:</h5>
                    
                    <div class="tools-grid">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="tool-category-section">
                                    <h6><i class="fas fa-shield-virus me-2 text-primary"></i>Escáneres Generales</h6>
                                    
                                    <div class="tool-detail">
                                        <h7><strong>OpenVAS</strong></h7>
                                        <p>Escáner de vulnerabilidades de código abierto con amplia base de datos.</p>
                                        <div class="tool-features">
                                            <ul class="features-list">
                                                <li>50,000+ pruebas de vulnerabilidades</li>
                                                <li>Interfaz web Greenbone Security Assistant</li>
                                                <li>Reportes detallados y personalizables</li>
                                                <li>Integración con SCAP</li>
                                            </ul>
                                        </div>
                                        <div class="tool-usage">
                                            <strong>Instalación Ubuntu:</strong>
                                            <pre class="command-block">sudo apt update
sudo apt install openvas
sudo gvm-setup</pre>
                                        </div>
                                    </div>
                                    
                                    <div class="tool-detail">
                                        <h7><strong>Nessus</strong></h7>
                                        <p>Escáner comercial líder en precisión y cobertura de vulnerabilidades.</p>
                                        <div class="tool-features">
                                            <ul class="features-list">
                                                <li>Actualizaciones diarias de plugins</li>
                                                <li>Compliance scanning</li>
                                                <li>Cloud and container support</li>
                                                <li>Advanced malware detection</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="col-md-6">
                                <div class="tool-category-section">
                                    <h6><i class="fas fa-globe me-2 text-success"></i>Escáneres Web</h6>
                                    
                                    <div class="tool-detail">
                                        <h7><strong>OWASP ZAP</strong></h7>
                                        <p>Proxy de interceptación y escáner de aplicaciones web.</p>
                                        <div class="tool-usage">
                                            <strong>Escaneo automatizado:</strong>
                                            <pre class="command-block">zap-baseline.py -t http://target.com</pre>
                                        </div>
                                    </div>
                                    
                                    <div class="tool-detail">
                                        <h7><strong>Nikto</strong></h7>
                                        <p>Escáner web especializado en vulnerabilidades de servidores.</p>
                                        <div class="tool-usage">
                                            <strong>Escaneo completo:</strong>
                                            <pre class="command-block">nikto -h http://target.com -C all</pre>
                                        </div>
                                    </div>
                                    
                                    <div class="tool-detail">
                                        <h7><strong>Burp Suite</strong></h7>
                                        <p>Plataforma integrada para testing de aplicaciones web.</p>
                                        <div class="tool-features">
                                            <ul class="features-list">
                                                <li>Proxy interceptor</li>
                                                <li>Escáner automatizado</li>
                                                <li>Herramientas manuales</li>
                                                <li>Extensiones personalizadas</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="row mt-4">
                            <div class="col-md-6">
                                <div class="tool-category-section">
                                    <h6><i class="fas fa-network-wired me-2 text-warning"></i>Herramientas de Red</h6>
                                    
                                    <div class="tool-detail">
                                        <h7><strong>Nmap NSE Scripts</strong></h7>
                                        <p>Scripts especializados para detección de vulnerabilidades específicas.</p>
                                        <div class="tool-usage">
                                            <strong>Scripts de vulnerabilidades:</strong>
                                            <pre class="command-block">nmap --script vuln target.com
nmap --script smb-vuln-* target.com
nmap --script http-vuln-* target.com</pre>
                                        </div>
                                    </div>
                                    
                                    <div class="tool-detail">
                                        <h7><strong>Metasploit Auxiliary</strong></h7>
                                        <p>Módulos auxiliares para identificación de vulnerabilidades específicas.</p>
                                        <div class="tool-usage">
                                            <strong>Escáneres Metasploit:</strong>
                                            <pre class="command-block">use auxiliary/scanner/smb/smb_enumshares
use auxiliary/scanner/http/dir_scanner</pre>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="col-md-6">
                                <div class="tool-category-section">
                                    <h6><i class="fas fa-code me-2 text-info"></i>Análisis de Código</h6>
                                    
                                    <div class="tool-detail">
                                        <h7><strong>SonarQube</strong></h7>
                                        <p>Plataforma para análisis continuo de calidad y seguridad del código.</p>
                                    </div>
                                    
                                    <div class="tool-detail">
                                        <h7><strong>Bandit (Python)</strong></h7>
                                        <p>Herramienta especializada en encontrar problemas de seguridad en código Python.</p>
                                        <div class="tool-usage">
                                            <pre class="command-block">bandit -r /path/to/code/</pre>
                                        </div>
                                    </div>
                                    
                                    <div class="tool-detail">
                                        <h7><strong>Semgrep</strong></h7>
                                        <p>Analizador estático para múltiples lenguajes con reglas de seguridad.</p>
                                        <div class="tool-usage">
                                            <pre class="command-block">semgrep --config=auto /path/to/code/</pre>
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
                    Base de Datos CVE
                </h4>
                <p>El sistema CVE (Common Vulnerabilities and Exposures) proporciona identificadores únicos para vulnerabilidades de seguridad conocidas públicamente.</p>
                
                <div class="cve-system">
                    <h5>Estructura del Sistema CVE:</h5>
                    
                    <div class="cve-structure">
                        <div class="cve-example">
                            <h6>Formato CVE:</h6>
                            <div class="cve-format-display">
                                <span class="cve-prefix">CVE</span>-<span class="cve-year">2023</span>-<span class="cve-number">12345</span>
                            </div>
                            <div class="cve-explanation">
                                <ul class="explanation-list">
                                    <li><strong>CVE:</strong> Prefijo fijo</li>
                                    <li><strong>2023:</strong> Año de asignación</li>
                                    <li><strong>12345:</strong> Número secuencial único</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                    <div class="cve-databases mt-4">
                        <h5>Principales Bases de Datos:</h5>
                        <div class="row">
                            <div class="col-md-6">
                                <div class="database-info">
                                    <h6><i class="fas fa-database me-2 text-primary"></i>NVD (National Vulnerability Database)</h6>
                                    <p>Base de datos oficial del gobierno estadounidense.</p>
                                    <div class="database-features">
                                        <ul class="features-list">
                                            <li>Puntuaciones CVSS completas</li>
                                            <li>Información detallada de CPE</li>
                                            <li>Referencias y enlaces</li>
                                            <li>API para automatización</li>
                                        </ul>
                                    </div>
                                    <div class="database-access">
                                        <strong>URL:</strong> <code>https://nvd.nist.gov/</code><br>
                                        <strong>API:</strong> <code>https://services.nvd.nist.gov/rest/json/cves/2.0/</code>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="col-md-6">
                                <div class="database-info">
                                    <h6><i class="fas fa-shield-alt me-2 text-success"></i>CVE.org</h6>
                                    <p>Fuente oficial mantenida por MITRE Corporation.</p>
                                    <div class="database-features">
                                        <ul class="features-list">
                                            <li>Descripciones originales de CVE</li>
                                            <li>Estado de publicación</li>
                                            <li>Referencias iniciales</li>
                                            <li>Información de CNA</li>
                                        </ul>
                                    </div>
                                    <div class="database-access">
                                        <strong>URL:</strong> <code>https://cve.mitre.org/</code>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="row mt-3">
                            <div class="col-md-6">
                                <div class="database-info">
                                    <h6><i class="fas fa-bug me-2 text-warning"></i>Exploit-DB</h6>
                                    <p>Base de datos de exploits y vulnerabilidades con PoC.</p>
                                    <div class="database-access">
                                        <strong>Búsqueda local:</strong>
                                        <pre class="command-block">searchsploit apache 2.4
searchsploit -m 12345</pre>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="col-md-6">
                                <div class="database-info">
                                    <h6><i class="fas fa-exclamation-triangle me-2 text-info"></i>VulnDB</h6>
                                    <p>Base de datos comercial con información extendida.</p>
                                    <div class="database-features">
                                        <ul class="features-list">
                                            <li>Información adicional no pública</li>
                                            <li>Análisis de impacto detallado</li>
                                            <li>Correlaciones avanzadas</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="cve-search-tools mt-4">
                        <h5>Herramientas de Búsqueda CVE:</h5>
                        <div class="search-tools">
                            <div class="tool-item">
                                <h6><strong>CVE Search API:</strong></h6>
                                <pre class="command-block">curl "https://services.nvd.nist.gov/rest/json/cves/2.0/?keywordSearch=apache"</pre>
                            </div>
                            
                            <div class="tool-item">
                                <h6><strong>CVE-Search (Local):</strong></h6>
                                <pre class="command-block">git clone https://github.com/cve-search/cve-search.git
python3 sbin/db_mgmt.py -p</pre>
                            </div>
                            
                            <div class="tool-item">
                                <h6><strong>Vulners API:</strong></h6>
                                <pre class="command-block">curl "https://vulners.com/api/v3/search/lucene/?query=apache"</pre>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="concept-card">
                <h4>
                    <svg class="concept-icon me-2" width="24" height="24" viewBox="0 0 100 100">
                        <use href="../../assets/images/icons.svg#icon-process"></use>
                    </svg>
                    Proceso de Análisis
                </h4>
                <p>Un proceso sistemático de análisis de vulnerabilidades asegura una evaluación comprehensiva y priorización efectiva de riesgos.</p>
                
                <div class="analysis-process">
                    <h5>Metodología de Análisis:</h5>
                    
                    <div class="process-steps">
                        <div class="step-card">
                            <div class="step-number">1</div>
                            <div class="step-content">
                                <h6>Recopilación de Datos</h6>
                                <p>Consolidar información de escaneos de puertos, detección de servicios y banners.</p>
                                <div class="step-actions">
                                    <ul class="actions-list">
                                        <li>Inventario de servicios identificados</li>
                                        <li>Versiones de software detectadas</li>
                                        <li>Configuraciones observadas</li>
                                        <li>Sistemas operativos identificados</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        
                        <div class="step-card">
                            <div class="step-number">2</div>
                            <div class="step-content">
                                <h6>Identificación de Vulnerabilidades</h6>
                                <p>Mapear servicios y versiones con vulnerabilidades conocidas en bases de datos.</p>
                                <div class="step-actions">
                                    <ul class="actions-list">
                                        <li>Búsqueda en bases CVE/NVD</li>
                                        <li>Consulta de advisories del vendor</li>
                                        <li>Verificación con escáneres automáticos</li>
                                        <li>Análisis manual específico</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        
                        <div class="step-card">
                            <div class="step-number">3</div>
                            <div class="step-content">
                                <h6>Evaluación de Impacto</h6>
                                <p>Determinar el impacto potencial de cada vulnerabilidad en el contexto del negocio.</p>
                                <div class="impact-factors">
                                    <div class="factor-grid">
                                        <div class="factor-item">
                                            <strong>Confidencialidad:</strong>
                                            <p>¿Qué información podría ser comprometida?</p>
                                        </div>
                                        <div class="factor-item">
                                            <strong>Integridad:</strong>
                                            <p>¿Qué datos podrían ser modificados?</p>
                                        </div>
                                        <div class="factor-item">
                                            <strong>Disponibilidad:</strong>
                                            <p>¿Qué servicios podrían ser interrumpidos?</p>
                                        </div>
                                        <div class="factor-item">
                                            <strong>Criticidad del Sistema:</strong>
                                            <p>¿Qué tan importante es el sistema afectado?</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="step-card">
                            <div class="step-number">4</div>
                            <div class="step-content">
                                <h6>Priorización de Riesgos</h6>
                                <p>Clasificar vulnerabilidades según riesgo real para enfocar esfuerzos de mitigación.</p>
                                <div class="risk-matrix">
                                    <h7>Matriz de Riesgo:</h7>
                                    <table class="risk-table">
                                        <thead>
                                            <tr>
                                                <th>Probabilidad</th>
                                                <th>Impacto Bajo</th>
                                                <th>Impacto Medio</th>
                                                <th>Impacto Alto</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td><strong>Alta</strong></td>
                                                <td class="risk-medium">Medio</td>
                                                <td class="risk-high">Alto</td>
                                                <td class="risk-critical">Crítico</td>
                                            </tr>
                                            <tr>
                                                <td><strong>Media</strong></td>
                                                <td class="risk-low">Bajo</td>
                                                <td class="risk-medium">Medio</td>
                                                <td class="risk-high">Alto</td>
                                            </tr>
                                            <tr>
                                                <td><strong>Baja</strong></td>
                                                <td class="risk-low">Bajo</td>
                                                <td class="risk-low">Bajo</td>
                                                <td class="risk-medium">Medio</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        
                        <div class="step-card">
                            <div class="step-number">5</div>
                            <div class="step-content">
                                <h6>Verificación y Validación</h6>
                                <p>Confirmar vulnerabilidades para reducir falsos positivos antes del reporte final.</p>
                                <div class="verification-methods">
                                    <ul class="methods-list">
                                        <li><strong>Pruebas manuales:</strong> Verificación directa de vulnerabilidades</li>
                                        <li><strong>PoC development:</strong> Desarrollo de pruebas de concepto</li>
                                        <li><strong>Cross-validation:</strong> Verificación con múltiples herramientas</li>
                                        <li><strong>Context analysis:</strong> Análisis en contexto específico</li>
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
                    <p><strong>¿Qué significa el sistema de puntuación CVSS en el rango 9.0-10.0?</strong></p>
                    <div class="quiz-options">
                        <label class="quiz-option">
                            <input type="radio" name="q12" value="a">
                            <span>Vulnerabilidad de severidad alta</span>
                        </label>
                        <label class="quiz-option">
                            <input type="radio" name="q12" value="b">
                            <span>Vulnerabilidad de severidad crítica</span>
                        </label>
                        <label class="quiz-option">
                            <input type="radio" name="q12" value="c">
                            <span>Vulnerabilidad de severidad media</span>
                        </label>
                    </div>
                </div>
                
                <div class="quiz-question mt-3">
                    <p><strong>¿Cuál es el primer paso en un proceso sistemático de análisis de vulnerabilidades?</strong></p>
                    <div class="quiz-options">
                        <label class="quiz-option">
                            <input type="radio" name="q13" value="a">
                            <span>Priorización de riesgos</span>
                        </label>
                        <label class="quiz-option">
                            <input type="radio" name="q13" value="b">
                            <span>Recopilación de datos de escaneos anteriores</span>
                        </label>
                        <label class="quiz-option">
                            <input type="radio" name="q13" value="c">
                            <span>Verificación manual de vulnerabilidades</span>
                        </label>
                    </div>
                </div>
            </div>

            <div class="case-study mt-4">
                <h4 class="text-center">
                    <svg class="case-icon me-2" width="24" height="24" viewBox="0 0 100 100">
                        <use href="../../assets/images/icons.svg#icon-case-study"></use>
                    </svg>
                    Caso de Estudio: Análisis Integral
                </h4>
                <div class="case-content">
                    <div class="case-scenario">
                        <h6>📚 Escenario:</h6>
                        <p>Has completado el escaneo de una infraestructura empresarial y descubierto 247 vulnerabilidades potenciales. El cliente tiene recursos limitados y necesita priorizar las correcciones. Entre los hallazgos hay: un servidor web con Apache 2.2.14 (CVE-2010-1452), un servidor SSH con OpenSSH 7.4 (CVE-2018-15473), y un servidor de base de datos MySQL 5.5.62 con múltiples CVEs.</p>
                    </div>
                    
                    <div class="case-question mt-3">
                        <h6>❓ Pregunta de Análisis:</h6>
                        <p><strong>¿Cuál debería ser tu enfoque para la priorización de estas vulnerabilidades?</strong></p>
                        <div class="case-options">
                            <button class="btn btn-outline-primary case-option" data-case="q7" data-value="a">
                                A) Priorizar únicamente por puntuación CVSS de mayor a menor
                            </button>
                            <button class="btn btn-outline-primary case-option" data-case="q7" data-value="b">
                                B) Evaluar CVSS + criticidad del sistema + facilidad de explotación + impacto al negocio
                            </button>
                            <button class="btn btn-outline-primary case-option" data-case="q7" data-value="c">
                                C) Concentrarse solo en vulnerabilidades con exploits públicos disponibles
                            </button>
                        </div>
                        <div class="case-feedback" id="case-q7-feedback" style="display: none;"></div>
                    </div>
                </div>
            </div>

            <div class="module-completion-section mt-5">
                <div class="completion-card">
                    <h4 class="text-center">
                        <svg class="completion-icon me-2" width="32" height="32" viewBox="0 0 100 100">
                            <use href="../../assets/images/icons.svg#icon-trophy"></use>
                        </svg>
                        ¡Felicitaciones!
                    </h4>
                    <p class="text-center">Has completado el último tema del módulo "Escaneo de Dispositivos". Ahora tienes un conocimiento comprehensivo de:</p>
                    
                    <div class="knowledge-summary">
                        <div class="row">
                            <div class="col-md-6">
                                <ul class="knowledge-list">
                                    <li>Tipos y metodologías de escaneo</li>
                                    <li>Herramientas avanzadas como Nmap, Masscan</li>
                                    <li>Técnicas de banner grabbing y fingerprinting</li>
                                    <li>Anonimización con Proxychains y Tor</li>
                                </ul>
                            </div>
                            <div class="col-md-6">
                                <ul class="knowledge-list">
                                    <li>Análisis comprehensivo de vulnerabilidades</li>
                                    <li>Uso de bases de datos CVE/NVD</li>
                                    <li>Priorización basada en riesgo</li>
                                    <li>Metodología ética CEH</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                    <div class="alert alert-success mt-4">
                        <i class="fas fa-graduation-cap me-2"></i>
                        <strong>Próximos pasos:</strong> Procede al siguiente módulo para continuar tu aprendizaje en hacking ético, o revisa los temas anteriores para reforzar conceptos específicos.
                    </div>
                </div>
            </div>

            <div class="topic-actions mt-4">
                <button class="btn btn-sena-primary" onclick="completeTopic(6)">
                    <svg class="btn-icon me-2" width="16" height="16" viewBox="0 0 100 100">
                        <use href="../../assets/images/icons.svg#icon-check"></use>
                    </svg>
                    Completar Módulo
                </button>
            </div>
        </div>
    `;
}

// ========================================
// INTERACTION AND QUIZ FUNCTIONS
// ========================================

// Setup topic interactions
function setupTopicInteractions() {
    // Setup quiz interactions
    const quizInputs = document.querySelectorAll('.quiz-question input[type="radio"]');
    quizInputs.forEach(input => {
        input.addEventListener('change', function() {
            handleQuizAnswer(this);
        });
    });
    
    // Setup case study interactions
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
    }    // Define correct answers with explanations
    const correctAnswers = {
        'q1': {
            correct: 'b',
            explanation: 'El escaneo SYN no completa el handshake TCP de tres vías, enviando solo el paquete SYN inicial, lo que lo hace más sigiloso y difícil de detectar que el TCP Connect que completa toda la conexión.'
        },
        'q2': {
            correct: 'b',
            explanation: 'Comprobar sistemas vivos (Host Discovery) es el primer paso fundamental en la metodología de escaneo, ya que permite identificar qué hosts están activos antes de proceder con escaneos más detallados.'
        },
        'q3': {
            correct: 'b',
            explanation: 'La opción -sV de Nmap se utiliza específicamente para la detección de versiones de servicios, permitiendo identificar qué servicios están ejecutándose y sus versiones específicas.'
        },
        'q4': {
            correct: 'b',
            explanation: 'El escaneo de puertos se realiza principalmente en la Fase 2 (Escaneo) de la metodología CEH, después del reconocimiento inicial y antes de la enumeración detallada.'
        },
        'q5': {
            correct: 'b',
            explanation: 'Obtener autorización por escrito del propietario es el requisito más importante y fundamental antes de realizar cualquier actividad de escaneo, según los principios éticos del CEH.'
        },
        'q6': {
            correct: 'b',
            explanation: 'La principal ventaja de Masscan es su velocidad extremadamente alta, capaz de escanear toda Internet en minutos, mientras que Nmap se enfoca más en precisión y versatilidad.'
        },
        'q7': {
            correct: 'a',
            explanation: 'La opción -D de Nmap se utiliza para crear escaneos con direcciones IP señuelo (decoy scanning), ocultando la dirección IP real del atacante entre múltiples IPs falsas.'
        },
        'q8': {
            correct: 'b',
            explanation: 'El OS fingerprinting activo envía paquetes especialmente crafteados para identificar el sistema operativo, mientras que el pasivo solo analiza el tráfico de red existente sin generar paquetes adicionales.'
        },
        'q9': {
            correct: 'b',
            explanation: 'P0f es la herramienta más conocida y especializada para fingerprinting pasivo, capaz de identificar sistemas operativos y aplicaciones analizando características únicas del tráfico TCP/IP.'
        },
        'q10': {
            correct: 'b',
            explanation: 'Dynamic_chain usa proxies en orden hasta encontrar uno que funcione, mientras que strict_chain requiere que todos los proxies en la cadena estén funcionando para establecer la conexión.'
        },
        'q11': {
            correct: 'b',
            explanation: 'Tor utiliza el puerto 9050 por defecto para conexiones SOCKS, que es el puerto estándar configurado en el archivo de configuración de Tor.'
        },
        'q12': {
            correct: 'b',
            explanation: 'El rango 9.0-10.0 en la escala CVSS indica vulnerabilidades de severidad crítica, representando las amenazas más severas que requieren atención inmediata.'
        },
        'q13': {
            correct: 'b',
            explanation: 'La recopilación de datos de escaneos anteriores es el primer paso fundamental, ya que consolida toda la información necesaria (servicios, versiones, configuraciones) para el análisis posterior de vulnerabilidades.'
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
    checkTopicQuizCompletion();
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
    });    // Define case study answers and explanations
    const caseAnswers = {
        'q1': {
            correct: 'b',
            explanations: {
                'a': {
                    type: 'warning',
                    text: '⚠️ Aunque efectivo, es demasiado agresivo como primer paso. Es mejor identificar hosts activos primero para optimizar el escaneo.'
                },
                'b': {
                    type: 'success',
                    text: '✅ Correcto. Un escaneo de ping (host discovery) es el primer paso lógico para identificar qué hosts están activos antes de proceder con escaneos más detallados de puertos y servicios.'
                },
                'c': {
                    type: 'danger',
                    text: '❌ Incorrecto. El análisis de vulnerabilidades debe realizarse después de identificar hosts activos y sus servicios. Es prematuro como primer paso.'
                }
            }
        },
        'q2': {
            correct: 'b',
            explanations: {
                'a': {
                    type: 'warning',
                    text: '⚠️ Aunque técnicamente correcto, el orden no es óptimo. Es mejor identificar hosts activos primero y luego escanear puertos específicos relevantes.'
                },
                'b': {
                    type: 'success',
                    text: '✅ Perfecto. Esta secuencia sigue la metodología correcta: 1) Host discovery, 2) Port scanning en hosts activos para servicios web, 3) Service detection en puertos abiertos.'
                },
                'c': {
                    type: 'danger',
                    text: '❌ Incorrecto. Esta secuencia está completamente invertida. El análisis de vulnerabilidades debe ser el último paso, no el primero.'
                }
            }
        },
        'q3': {
            correct: 'b',
            explanations: {
                'a': {
                    type: 'danger',
                    text: '❌ Incorrecto. Un escaneo agresivo puede ser detectado fácilmente y puede interrumpir servicios críticos del negocio, violando los principios éticos del CEH.'
                },
                'b': {
                    type: 'success',
                    text: '✅ Excelente. El escaneo sigiloso con timing lento y técnicas de evasión es la mejor práctica CEH para minimizar la detección y el impacto en los sistemas objetivo.'
                },
                'c': {
                    type: 'warning',
                    text: '⚠️ Incorrecto. Necesitas completar las fases de escaneo y enumeración antes del análisis de vulnerabilidades para tener información suficiente sobre los sistemas objetivo.'
                }
            }
        },
        'q4': {
            correct: 'b',
            explanations: {
                'a': {
                    type: 'danger',
                    text: '❌ Incorrecto. El timing T5 es extremadamente agresivo y fácilmente detectable por sistemas IDS. No es apropiado para evasión.'
                },
                'b': {
                    type: 'success',
                    text: '✅ Perfecto. Masscan proporciona velocidad para el descubrimiento inicial, y Nmap con técnicas de evasión permite verificación detallada sin ser detectado.'
                },
                'c': {
                    type: 'warning',
                    text: '⚠️ Aunque muy sigiloso, sería extremadamente lento para una red Clase A. La combinación de herramientas es más eficiente.'
                }
            }
        },
        'q5': {
            correct: 'b',
            explanations: {
                'a': {
                    type: 'warning',
                    text: '⚠️ Aunque Nmap stealth es menos detectable que escaneos normales, sigue generando tráfico que puede ser detectado por sistemas de monitoreo avanzados.'
                },
                'b': {
                    type: 'success',
                    text: '✅ Excelente. El fingerprinting pasivo con P0f es completamente indetectable ya que solo analiza tráfico existente sin generar paquetes adicionales.'
                },
                'c': {
                    type: 'warning',
                    text: '⚠️ Parcialmente correcto, pero el banner grabbing manual sigue siendo activo. La combinación con análisis de TTL ayuda, pero P0f es más sigiloso.'
                }
            }
        },
        'q6': {
            correct: 'b',
            explanations: {
                'a': {
                    type: 'warning',
                    text: '⚠️ Una buena opción, pero puede no ser suficiente para el máximo nivel requerido. Tor con configuración por defecto puede tener vulnerabilidades conocidas.'
                },
                'b': {
                    type: 'success',
                    text: '✅ Perfecto. Esta configuración de múltiples capas (VPN→Proxychains strict→Tor con nodos específicos) proporciona el máximo nivel de anonimización y redundancia.'
                },
                'c': {
                    type: 'danger',
                    text: '❌ Aunque Tor es robusto, para máxima seguridad gubernamental se requieren múltiples capas de protección, no solo una herramienta.'
                }
            }
        },
        'q7': {
            correct: 'b',
            explanations: {
                'a': {
                    type: 'danger',
                    text: '❌ Incorrecto. Priorizar solo por CVSS ignora el contexto del negocio, la criticidad del sistema y la facilidad real de explotación en el ambiente específico.'
                },
                'b': {
                    type: 'success',
                    text: '✅ Excelente. Un enfoque integral que considera múltiples factores (CVSS + criticidad + explotabilidad + impacto) proporciona una priorización realista y efectiva.'
                },
                'c': {
                    type: 'warning',
                    text: '⚠️ Muy limitado. Aunque los exploits públicos son importantes, ignorar otras vulnerabilidades críticas sin exploits públicos puede dejar riesgos significativos sin abordar.'
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

// Update quiz progress
function updateQuizProgress(questionName, isCorrect) {
    const currentTopic = moduleData.topics[currentTopicIndex];
    if (!currentTopic.quizProgress) {
        currentTopic.quizProgress = {};
    }
    
    currentTopic.quizProgress[questionName] = isCorrect;
    saveTopicProgress();
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

// ========================================
// NAVIGATION AND PROGRESS FUNCTIONS
// ========================================

// Complete current topic
function completeTopic(topicIndex) {
    if (topicIndex >= 0 && topicIndex < moduleData.topics.length) {
        moduleData.topics[topicIndex].completed = true;
        updateModuleProgress();
        updateProgressDisplay();
        saveTopicProgress();
        
        // Update navigation
        updateNavigationState();
        
        // Show success notification
        showNotification(`Tema "${moduleData.topics[topicIndex].title}" completado exitosamente`, 'success');
        
        // Check if all topics completed
        const completedCount = moduleData.topics.filter(t => t.completed).length;
        if (completedCount === moduleData.topics.length) {
            showModuleCompletionModal();
        } else {
            // Auto-advance to next topic
            setTimeout(() => {
                if (topicIndex < moduleData.topics.length - 1) {
                    loadTopic(topicIndex + 1);
                }
            }, 1500);
        }
    }
}

// Show module completion modal
function showModuleCompletionModal() {
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
                    <p class="lead">Has completado todos los temas del módulo de Escaneo de Dispositivos</p>
                    
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

// Navigation functions
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

// Update functions
function updateNavigationState() {
    // Update sidebar navigation
    document.querySelectorAll('.nav-item').forEach((item, index) => {
        item.classList.remove('active');
        if (index === currentTopicIndex) {
            item.classList.add('active');
        }
    });
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
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `alert alert-${type} module-notification position-fixed`;
    notification.style.cssText = `
        top: 80px;
        right: 20px;
        z-index: 1050;
        min-width: 300px;
        box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    `;
    
    const icon = type === 'success' ? 'check-circle' : type === 'warning' ? 'exclamation-triangle' : type === 'danger' ? 'times-circle' : 'info-circle';
    
    notification.innerHTML = `
        <i class="fas fa-${icon} me-2"></i>
        ${message}
        <button type="button" class="btn-close" onclick="this.parentElement.remove()"></button>
    `;
    
    document.body.appendChild(notification);
    
    // Auto-remove after duration
    setTimeout(() => {
        if (notification.parentElement) {
            notification.remove();
        }
    }, duration);
}
