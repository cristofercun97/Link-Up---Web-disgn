/**
 * LINK UP - Landing Page Scripts
 * Animaciones y efectos interactivos
 */

// ========================================
// SMOOTH SCROLL PARA NAVEGACIÓN
// ========================================
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll para los enlaces internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href !== '#terminos' && href !== '#privacidad' && href !== '#cookies' && href !== '#soporte') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                    
                    // Cerrar menú mobile si está abierto
                    const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');
                    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
                    if (mobileMenuOverlay && mobileMenuOverlay.classList.contains('active')) {
                        mobileMenuOverlay.classList.remove('active');
                        mobileMenuToggle.classList.remove('active');
                        document.body.style.overflow = '';
                        document.body.classList.remove('menu-open');
                    }
                }
            }
        });
    });

    // Inicializar animación de círculos en el hero
    initHeroCircles();
    
    // Inicializar menú mobile
    initMobileMenu();
});

// ========================================
// NAVEGACIÓN DE SLIDES EN PHONE MOCKUP
// ========================================
let currentSlide = 1;
const totalSlides = 3;

function changeSlide(direction) {
    const slides = document.querySelectorAll('.screen-slide');
    const currentSlideEl = document.querySelector('.screen-slide.active');
    
    if (!currentSlideEl) return;
    
    currentSlideEl.classList.remove('active');
    
    currentSlide += direction;
    
    if (currentSlide > totalSlides) {
        currentSlide = 1;
    } else if (currentSlide < 1) {
        currentSlide = totalSlides;
    }
    
    const nextSlide = document.querySelector(`.screen-slide[data-slide="${currentSlide}"]`);
    if (nextSlide) {
        nextSlide.classList.add('active');
    }
}

// ========================================
// ANIMACIÓN DE CÍRCULOS EN EL HERO
// ========================================
function initHeroCircles() {
    const hero = document.querySelector('.hero');
    if (!hero) return;

    // Crear contenedor de círculos
    const circlesContainer = document.createElement('div');
    circlesContainer.className = 'hero-circles';
    hero.appendChild(circlesContainer);

    // Configuración de tamaños y cantidades
    const circleConfig = [
        { size: 'xxl', count: 2, minSize: 300, maxSize: 500 },
        { size: 'xl', count: 3, minSize: 200, maxSize: 300 },
        { size: 'l', count: 4, minSize: 120, maxSize: 200 },
        { size: 'm', count: 5, minSize: 70, maxSize: 120 },
        { size: 's', count: 6, minSize: 30, maxSize: 70 }
    ];

    // Crear círculos
    circleConfig.forEach(config => {
        for (let i = 0; i < config.count; i++) {
            createAnimatedCircle(circlesContainer, config);
        }
    });
}

function createAnimatedCircle(container, config) {
    const circle = document.createElement('div');
    circle.className = `hero-circle hero-circle-${config.size}`;
    
    // Tamaño aleatorio dentro del rango
    const size = Math.random() * (config.maxSize - config.minSize) + config.minSize;
    circle.style.width = `${size}px`;
    circle.style.height = `${size}px`;
    
    // Posición inicial aleatoria
    const startX = Math.random() * 100;
    const startY = Math.random() * 100;
    circle.style.left = `${startX}%`;
    circle.style.top = `${startY}%`;
    
    // Duración aleatoria de la animación (más lento = más elegante)
    const duration = Math.random() * 20 + 15; // Entre 15 y 35 segundos
    circle.style.animationDuration = `${duration}s`;
    
    // Delay aleatorio para que no todos empiecen al mismo tiempo
    const delay = Math.random() * 10;
    circle.style.animationDelay = `${delay}s`;
    
    // Opacidad base según tamaño
    const baseOpacity = config.size === 's' ? 0.15 : 
                       config.size === 'm' ? 0.12 : 
                       config.size === 'l' ? 0.10 : 
                       config.size === 'xl' ? 0.08 : 0.06;
    circle.style.setProperty('--circle-opacity', baseOpacity);
    
    container.appendChild(circle);
    
    // Recrear el círculo cuando termine su animación para loop infinito
    circle.addEventListener('animationend', () => {
        circle.remove();
        createAnimatedCircle(container, config);
    });
}

// ========================================
// WIDGET DE CHAT CON IA
// ========================================

const chatButton = document.getElementById('chatButton');
const chatWindow = document.getElementById('chatWindow');
const minimizeChat = document.getElementById('minimizeChat');
const chatInput = document.getElementById('chatInput');
const sendButton = document.getElementById('sendButton');
const chatBody = document.getElementById('chatBody');

// URL del webhook de n8n - REEMPLAZAR CON TU URL
const N8N_WEBHOOK_URL = 'https://tu-instancia-n8n.com/webhook/chat';

// Alternar ventana de chat
chatButton.addEventListener('click', () => {
    chatButton.classList.toggle('active');
    chatWindow.classList.toggle('active');
    
    // Enfocar el input cuando se abre
    if (chatWindow.classList.contains('active')) {
        chatInput.focus();
    }
});

// Minimizar chat
minimizeChat.addEventListener('click', () => {
    chatButton.classList.remove('active');
    chatWindow.classList.remove('active');
});

// Función para agregar mensaje al chat
function addMessage(text, isUser = false) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `chat-message ${isUser ? 'user-message' : 'bot-message'}`;
    
    const avatarContent = isUser 
        ? `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" fill="currentColor"/>
           </svg>`
        : `<img src="img/cupi_profile.png" alt="Cupi" width="32" height="32">`;
    
    messageDiv.innerHTML = `
        <div class="message-avatar">
            ${avatarContent}
        </div>
        <div class="message-content">
            <p>${text}</p>
        </div>
    `;
    
    chatBody.appendChild(messageDiv);
    chatBody.scrollTop = chatBody.scrollHeight;
}

// Función para enviar mensaje al agente de n8n
async function sendMessageToN8N(message) {
    try {
        const response = await fetch(N8N_WEBHOOK_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                message: message,
                timestamp: new Date().toISOString(),
                sessionId: getOrCreateSessionId()
            })
        });
        
        if (!response.ok) {
            throw new Error('Error en la respuesta del servidor');
        }
        
        const data = await response.json();
        return data.response || data.message || 'Lo siento, no pude procesar tu mensaje.';
    } catch (error) {
        console.error('Error al comunicarse con n8n:', error);
        return 'Lo siento, estoy teniendo problemas para conectarme. Por favor, intenta nuevamente en unos momentos.';
    }
}

// Obtener o crear ID de sesión
function getOrCreateSessionId() {
    let sessionId = localStorage.getItem('linkup_chat_session');
    if (!sessionId) {
        sessionId = 'session_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
        localStorage.setItem('linkup_chat_session', sessionId);
    }
    return sessionId;
}

// Manejar envío de mensaje
async function handleSendMessage() {
    const message = chatInput.value.trim();
    
    if (message === '') return;
    
    // Agregar mensaje del usuario
    addMessage(message, true);
    chatInput.value = '';
    sendButton.disabled = true;
    
    // Mostrar indicador de escritura
    const typingDiv = document.createElement('div');
    typingDiv.className = 'chat-message bot-message typing-indicator';
    typingDiv.innerHTML = `
        <div class="message-avatar">
            <img src="img/cupi_profile.png" alt="Cupi" width="32" height="32">
        </div>
        <div class="message-content">
            <p>...</p>
        </div>
    `;
    chatBody.appendChild(typingDiv);
    chatBody.scrollTop = chatBody.scrollHeight;
    
    // Enviar mensaje a n8n y obtener respuesta
    const response = await sendMessageToN8N(message);
    
    // Remover indicador de escritura
    typingDiv.remove();
    
    // Agregar respuesta del bot
    addMessage(response, false);
    
    sendButton.disabled = false;
    chatInput.focus();
}

// Event listeners para enviar mensaje
sendButton.addEventListener('click', handleSendMessage);

chatInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        handleSendMessage();
    }
});

// ========================================
// MENÚ MOBILE
// ========================================

function initMobileMenu() {
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');
    
    if (!mobileMenuToggle || !mobileMenuOverlay) return;
    
    // Abrir/cerrar menú con botón hamburguesa
    mobileMenuToggle.addEventListener('click', () => {
        mobileMenuToggle.classList.toggle('active');
        mobileMenuOverlay.classList.toggle('active');
        
        // Prevenir scroll del body cuando el menú está abierto
        if (mobileMenuOverlay.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
            document.body.classList.add('menu-open');
        } else {
            document.body.style.overflow = '';
            document.body.classList.remove('menu-open');
        }
    });
    
    // Cerrar menú al hacer click fuera del contenido
    mobileMenuOverlay.addEventListener('click', (e) => {
        if (e.target === mobileMenuOverlay) {
            mobileMenuToggle.classList.remove('active');
            mobileMenuOverlay.classList.remove('active');
            document.body.style.overflow = '';
            document.body.classList.remove('menu-open');
        }
    });
    
    // Cerrar menú con tecla ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && mobileMenuOverlay.classList.contains('active')) {
            mobileMenuToggle.classList.remove('active');
            mobileMenuOverlay.classList.remove('active');
            document.body.style.overflow = '';
            document.body.classList.remove('menu-open');
        }
    });
}

// ========================================
// CARRUSEL DE PLAN DE RECOMPENSAS
// ========================================
function initRewardsCarousel() {
    const track = document.getElementById('rewardsCarouselTrack');
    const prevBtn = document.getElementById('rewardsPrevBtn');
    const nextBtn = document.getElementById('rewardsNextBtn');
    const indicators = document.querySelectorAll('.carousel-indicators .indicator');
    const slides = document.querySelectorAll('.carousel-slide');
    
    if (!track || !prevBtn || !nextBtn || slides.length === 0) return;
    
    let currentIndex = 0;
    const totalSlides = slides.length;
    
    function updateCarousel(index) {
        // Asegurar que el índice esté en el rango válido
        if (index < 0) index = totalSlides - 1;
        if (index >= totalSlides) index = 0;
        
        currentIndex = index;
        
        // Mover el track
        const offset = -currentIndex * 100;
        track.style.transform = `translateX(${offset}%)`;
        
        // Actualizar clases active de los slides
        slides.forEach((slide, i) => {
            if (i === currentIndex) {
                slide.classList.add('active');
            } else {
                slide.classList.remove('active');
            }
        });
        
        // Actualizar indicadores
        indicators.forEach((indicator, i) => {
            if (i === currentIndex) {
                indicator.classList.add('active');
            } else {
                indicator.classList.remove('active');
            }
        });
    }
    
    // Event listeners para botones
    prevBtn.addEventListener('click', () => {
        updateCarousel(currentIndex - 1);
    });
    
    nextBtn.addEventListener('click', () => {
        updateCarousel(currentIndex + 1);
    });
    
    // Event listeners para indicadores
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            updateCarousel(index);
        });
    });
    
    // Soporte para swipe en móviles
    let startX = 0;
    let isDragging = false;
    
    track.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
        isDragging = true;
    });
    
    track.addEventListener('touchmove', (e) => {
        if (!isDragging) return;
    });
    
    track.addEventListener('touchend', (e) => {
        if (!isDragging) return;
        isDragging = false;
        
        const endX = e.changedTouches[0].clientX;
        const diff = startX - endX;
        
        if (Math.abs(diff) > 50) { // Mínimo 50px para considerar un swipe
            if (diff > 0) {
                // Swipe izquierda - siguiente
                updateCarousel(currentIndex + 1);
            } else {
                // Swipe derecha - anterior
                updateCarousel(currentIndex - 1);
            }
        }
    });
    
    // Auto-play opcional (comentado por defecto)
    // setInterval(() => {
    //     updateCarousel(currentIndex + 1);
    // }, 5000);
    
    // Inicializar
    updateCarousel(0);
}

// Inicializar el carrusel cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', initRewardsCarousel);

// ========================================
// CALCULADORA FINANCIERA
// ========================================

/**
 * Constantes de la calculadora
 */
const CALCULATOR_CONSTANTS = {
    MONTHLY_COUPON_VALUE: 100, // USD por cuponera mensual
    REFERRAL_PERCENTAGES: {
        1: 0.10, // Gen 1: 10%
        2: 0.05, // Gen 2: 5%
        3: 0.05, // Gen 3: 5%
        4: 0.03, // Gen 4: 3%
        5: 0.02  // Gen 5: 2%
    },
    CONSUMPTION_PERCENTAGES: {
        0: 0.30, // Nivel 0: 30%
        1: 0.15, // Nivel 1: 15%
        2: 0.10, // Nivel 2: 10%
        3: 0.05, // Nivel 3: 5%
        4: 0.03, // Nivel 4: 3%
        5: 0.02  // Nivel 5: 2%
    }
};

/**
 * Calcula el número de personas en cada nivel
 * @param {number} r - Número de personas invitadas directamente
 * @param {number} level - Nivel a calcular (0-5)
 * @returns {number} - Número de personas en ese nivel
 */
function calculatePeopleAtLevel(r, level) {
    if (level === 0) return 1;
    return Math.pow(r, level);
}

/**
 * Calcula los ingresos por recomendación mensual para un nivel
 * @param {number} people - Número de personas en el nivel
 * @param {number} generation - Generación (1-5)
 * @returns {number} - Ingreso mensual por recomendaciones
 */
function calculateReferralIncome(people, generation) {
    const percentage = CALCULATOR_CONSTANTS.REFERRAL_PERCENTAGES[generation] || 0;
    const income = people * CALCULATOR_CONSTANTS.MONTHLY_COUPON_VALUE * percentage;
    return Math.round(income * 100) / 100;
}

/**
 * Calcula los ingresos por consumo mensual para un nivel
 * @param {number} people - Número de personas en el nivel
 * @param {number} monthlyConsumption - Consumo mensual por persona
 * @param {number} poolPercentage - Porcentaje del pool
 * @param {number} level - Nivel (0-5)
 * @returns {number} - Ingreso mensual por consumo
 */
function calculateConsumptionIncome(people, monthlyConsumption, poolPercentage, level) {
    // Pool fijo: Consumo × % Pool
    const poolPerPerson = monthlyConsumption * (poolPercentage / 100);
    // % de consumo según nivel
    const levelPercentage = CALCULATOR_CONSTANTS.CONSUMPTION_PERCENTAGES[level] || 0;
    // Fórmula: Personas × Pool × % Nivel
    const income = people * poolPerPerson * levelPercentage;
    // Redondear a 2 decimales
    return Math.round(income * 100) / 100;
}

/**
 * Formatea un número como moneda USD
 * @param {number} value - Valor a formatear
 * @returns {string} - Valor formateado
 */
function formatCurrency(value) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(Math.round(value));
}

/**
 * Formatea un número con separadores de miles
 * @param {number} value - Valor a formatear
 * @returns {string} - Valor formateado
 */
function formatNumber(value) {
    return new Intl.NumberFormat('en-US').format(value);
}

/**
 * Calcula todos los resultados y actualiza la UI
 */
function calculateAndUpdateResults() {
    // Obtener valores de los inputs
    const inviteCount = parseInt(document.getElementById('inviteCount').value) || 0;
    const monthlyConsumption = parseFloat(document.getElementById('monthlyConsumption').value) || 0;
    const poolPercentage = parseFloat(document.getElementById('poolPercentage').value) || 0;
    const includePersonal = document.getElementById('includePersonalConsumption').checked;

    // Arrays para almacenar resultados
    const levels = [];
    let totalPeople = 0;
    let totalReferralAnnual = 0;
    let totalConsumptionMonthly = 0;

    // Calcular para cada nivel (0-5)
    for (let level = 0; level <= 5; level++) {
        const people = calculatePeopleAtLevel(inviteCount, level);
        
        // Para nivel 0, solo calcular si incluye consumo personal
        if (level === 0 && !includePersonal) {
            continue;
        }

        const generation = level === 0 ? 0 : level;
        const referralMonthly = level === 0 ? 0 : calculateReferralIncome(people, generation);
        const consumptionMonthly = calculateConsumptionIncome(people, monthlyConsumption, poolPercentage, level);
        const totalMonthly = referralMonthly + consumptionMonthly;

        levels.push({
            level,
            people,
            referralMonthly,
            consumptionMonthly,
            totalMonthly
        });

        totalPeople += people;
        totalReferralAnnual += referralMonthly;
        totalConsumptionMonthly += consumptionMonthly;
    }

    const totalReferralMonthly = totalReferralAnnual;
    const totalMonthlyEstimated = totalReferralMonthly + totalConsumptionMonthly;

    // Actualizar UI
    updateResultsUI(levels, {
        totalPeople,
        totalReferralAnnual,
        totalReferralMonthly,
        totalConsumptionMonthly,
        totalMonthlyEstimated
    });
}

/**
 * Actualiza la interfaz con los resultados calculados
 * @param {Array} levels - Datos de cada nivel
 * @param {Object} totals - Totales calculados
 */
function updateResultsUI(levels, totals) {
    // Actualizar cards destacadas
    document.getElementById('totalPeople').textContent = formatNumber(totals.totalPeople);
    // Mostrar solo ingresos por publicidad en el widget principal
    document.getElementById('totalMonthly').textContent = formatCurrency(totals.totalReferralMonthly);

    // Actualizar tabla
    const tbody = document.getElementById('calculatorTableBody');
    tbody.innerHTML = '';

    levels.forEach(level => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td><strong>Nivel ${level.level}</strong></td>
            <td>${formatNumber(level.people)}</td>
            <td>${formatCurrency(level.referralMonthly)}</td>
            <td>${formatCurrency(level.consumptionMonthly)}</td>
            <td><strong>${formatCurrency(level.totalMonthly)}</strong></td>
        `;
        tbody.appendChild(row);
        
        // Animación de entrada
        setTimeout(() => {
            row.style.opacity = '0';
            row.style.transform = 'translateY(10px)';
            row.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
            setTimeout(() => {
                row.style.opacity = '1';
                row.style.transform = 'translateY(0)';
            }, 50);
        }, 0);
    });

    // Actualizar totales en footer
    document.getElementById('totalReferralAnnual').textContent = formatCurrency(totals.totalReferralMonthly);
    document.getElementById('totalConsumptionMonthly').textContent = formatCurrency(totals.totalConsumptionMonthly);
    document.getElementById('totalMonthlyFooter').textContent = formatCurrency(totals.totalMonthlyEstimated);
}

/**
 * Sincroniza un slider con su input numérico
 * @param {string} sliderId - ID del slider
 * @param {string} inputId - ID del input
 */
function syncSliderWithInput(sliderId, inputId) {
    const slider = document.getElementById(sliderId);
    const input = document.getElementById(inputId);

    if (!slider || !input) return;

    slider.addEventListener('input', (e) => {
        input.value = e.target.value;
        calculateAndUpdateResults();
    });

    input.addEventListener('input', (e) => {
        const value = e.target.value;
        const min = parseFloat(slider.min);
        const max = parseFloat(slider.max);
        
        if (value >= min && value <= max) {
            slider.value = value;
        }
        calculateAndUpdateResults();
    });
}

/**
 * Inicializa la calculadora
 */
function initCalculator() {
    // Sincronizar sliders con inputs
    syncSliderWithInput('inviteCount', 'inviteCountValue');
    syncSliderWithInput('monthlyConsumption', 'monthlyConsumptionValue');

    // Listener para pool percentage
    const poolInput = document.getElementById('poolPercentage');
    if (poolInput) {
        poolInput.addEventListener('input', calculateAndUpdateResults);
    }

    // Listener para toggle de consumo personal
    const personalToggle = document.getElementById('includePersonalConsumption');
    if (personalToggle) {
        personalToggle.addEventListener('change', calculateAndUpdateResults);
    }

    // Cálculo inicial
    calculateAndUpdateResults();
}

// Inicializar la calculadora cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', initCalculator);

// ========================================
// ALTERNANCIA PLAN DE RECOMPENSAS
// ========================================
document.addEventListener('DOMContentLoaded', function() {
    const toggleButtons = document.querySelectorAll('.rewards-toggle-btn');
    const planRecomendacion = document.getElementById('plan-recomendacion-content');
    const planConsumo = document.getElementById('plan-consumo-content');
    
    let consumoCarouselInitialized = false;
    
    console.log('Inicializando alternancia de planes...');

    toggleButtons.forEach(button => {
        button.addEventListener('click', function() {
            const planType = this.getAttribute('data-plan');
            console.log('Click en botón:', planType);
            
            // Remover clase active de todos los botones
            toggleButtons.forEach(btn => btn.classList.remove('active'));
            
            // Agregar clase active al botón clickeado
            this.classList.add('active');
            
            // Mostrar/ocultar contenido correspondiente
            if (planType === 'recomendacion') {
                if (planConsumo) {
                    planConsumo.style.display = 'none';
                }
                if (planRecomendacion) {
                    planRecomendacion.style.display = 'block';
                }
                console.log('Mostrando Plan de Recomendación');
            } else if (planType === 'consumo') {
                if (planRecomendacion) {
                    planRecomendacion.style.display = 'none';
                }
                if (planConsumo) {
                    planConsumo.style.display = 'block';
                    
                    // Inicializar el carousel SOLO la primera vez que se muestra
                    if (!consumoCarouselInitialized) {
                        setTimeout(() => {
                            initConsumoCarousel();
                            consumoCarouselInitialized = true;
                            console.log('Carousel de consumo inicializado');
                        }, 50);
                    }
                }
                console.log('Mostrando Plan de Consumo');
            }
        });
    });
    
    // Asegurarse de que el Plan de Recomendación esté visible al inicio
    if (planRecomendacion && planConsumo) {
        planRecomendacion.style.display = 'block';
        planConsumo.style.display = 'none';
        console.log('Estado inicial configurado');
    }
});

// ========================================
// CAROUSEL PLAN DE CONSUMO
// ========================================
function initConsumoCarousel() {
    const track = document.getElementById('consumoCarouselTrack');
    const prevBtn = document.getElementById('consumoPrevBtn');
    const nextBtn = document.getElementById('consumoNextBtn');
    const indicators = document.querySelectorAll('#plan-consumo-content .indicator');
    const slides = document.querySelectorAll('#plan-consumo-content .carousel-slide');
    
    if (!track || !prevBtn || !nextBtn) return;
    
    let currentIndex = 0;
    const totalSlides = slides.length;
    
    function updateCarousel() {
        // Actualizar slides
        slides.forEach((slide, index) => {
            slide.classList.remove('active');
            if (index === currentIndex) {
                slide.classList.add('active');
            }
        });
        
        // Actualizar indicadores
        indicators.forEach((indicator, index) => {
            indicator.classList.remove('active');
            if (index === currentIndex) {
                indicator.classList.add('active');
            }
        });
        
        // Mover el track
        const offset = -currentIndex * 100;
        track.style.transform = `translateX(${offset}%)`;
    }
    
    // Botón siguiente
    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % totalSlides;
        updateCarousel();
    });
    
    // Botón anterior
    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        updateCarousel();
    });
    
    // Indicadores
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            currentIndex = index;
            updateCarousel();
        });
    });
}

// ========================================
// MODALES (TÉRMINOS Y PRIVACIDAD)
// ========================================
document.addEventListener('DOMContentLoaded', function() {
    const openTermsBtn = document.getElementById('openTerms');
    const openPrivacyBtn = document.getElementById('openPrivacy');
    const termsModal = document.getElementById('termsModal');
    const privacyModal = document.getElementById('privacyModal');
    const closeButtons = document.querySelectorAll('.close-modal');

    // Abrir modal de términos
    if (openTermsBtn) {
        openTermsBtn.addEventListener('click', function(e) {
            e.preventDefault();
            termsModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    }

    // Abrir modal de privacidad
    if (openPrivacyBtn) {
        openPrivacyBtn.addEventListener('click', function(e) {
            e.preventDefault();
            privacyModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    }

    // Cerrar modales con la X
    closeButtons.forEach(function(closeBtn) {
        closeBtn.addEventListener('click', function() {
            termsModal.classList.remove('active');
            privacyModal.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // Cerrar modales al hacer click fuera del contenido
    [termsModal, privacyModal].forEach(function(modal) {
        if (modal) {
            modal.addEventListener('click', function(e) {
                if (e.target === modal) {
                    modal.classList.remove('active');
                    document.body.style.overflow = '';
                }
            });
        }
    });

    // Cerrar modales con la tecla ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            if (termsModal.classList.contains('active')) {
                termsModal.classList.remove('active');
                document.body.style.overflow = '';
            }
            if (privacyModal.classList.contains('active')) {
                privacyModal.classList.remove('active');
                document.body.style.overflow = '';
            }
        }
    });
});
