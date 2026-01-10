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
                }
            }
        });
    });

    // Inicializar animación de círculos en el hero
    initHeroCircles();
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
