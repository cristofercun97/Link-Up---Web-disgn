/**
 * LINK UP - PARA COMERCIOS
 * Landing Page Scripts
 * Animaciones y efectos interactivos
 */

// ========================================
// INICIALIZACIÓN
// ========================================
document.addEventListener('DOMContentLoaded', function() {
    initNavbar();
    initMobileMenu();
    initSmoothScroll();
    initFadeUpAnimations();
    initStatsCountUp();
    initFAQAccordion();
    initHeroCoupons();
    initChat();
});

// ========================================
// NAVBAR CON SCROLL
// ========================================
function initNavbar() {
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

// ========================================
// MENÚ MOBILE
// ========================================
function initMobileMenu() {
    const toggleBtn = document.getElementById('mobileMenuToggle');
    const closeBtn = document.getElementById('closeDrawer');
    const drawer = document.getElementById('mobileDrawer');
    const navLinks = document.querySelectorAll('.mobile-nav-link');
    
    if (!toggleBtn || !drawer) return;
    
    // Abrir menú
    toggleBtn.addEventListener('click', function() {
        drawer.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
    
    // Cerrar menú
    const closeMenu = function() {
        drawer.classList.remove('active');
        document.body.style.overflow = '';
    };
    
    if (closeBtn) {
        closeBtn.addEventListener('click', closeMenu);
    }
    
    // Cerrar al hacer click en un enlace
    navLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });
    
    // Cerrar con ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && drawer.classList.contains('active')) {
            closeMenu();
        }
    });
}

// ========================================
// SMOOTH SCROLL
// ========================================
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            
            // Ignorar enlaces especiales
            if (href === '#' || 
                href === '#terminos' || 
                href === '#privacidad' || 
                href === '#cookies' || 
                href === '#soporte') {
                return;
            }
            
            e.preventDefault();
            const target = document.querySelector(href);
            
            if (target) {
                const offsetTop = target.offsetTop - 80; // Ajuste por navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ========================================
// ANIMACIONES FADE-UP
// ========================================
function initFadeUpAnimations() {
    const fadeElements = document.querySelectorAll('.fade-up');
    
    if (!fadeElements.length) return;
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Opcional: dejar de observar después de animar
                // observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    fadeElements.forEach(element => {
        observer.observe(element);
    });
}

// ========================================
// COUNT-UP ANIMACIÓN DE NÚMEROS
// ========================================
function initStatsCountUp() {
    const statNumbers = document.querySelectorAll('.stat-number[data-count]');
    
    if (!statNumbers.length) return;
    
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
                entry.target.classList.add('counted');
                animateCount(entry.target);
            }
        });
    }, observerOptions);
    
    statNumbers.forEach(stat => {
        observer.observe(stat);
    });
}

function animateCount(element) {
    const target = parseInt(element.getAttribute('data-count'));
    const duration = 2000; // 2 segundos
    const increment = target / (duration / 16); // ~60fps
    let current = 0;
    
    const timer = setInterval(function() {
        current += increment;
        
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        
        // Formatear número con separador de miles
        const formatted = Math.floor(current).toLocaleString('es-CL');
        
        // Mantener el prefijo + si existe
        const prefix = target > 100 ? '+' : '';
        element.textContent = prefix + formatted;
        
        // Restaurar el decimal si es el caso de 4.9/5
        if (element.querySelector('.stat-decimal')) {
            element.innerHTML = prefix + formatted + element.querySelector('.stat-decimal').outerHTML;
        }
    }, 16);
}

// ========================================
// FLOATING COUPONS IN HERO
// ========================================
function initHeroCoupons() {
    const container = document.getElementById('heroCoupons');
    if (!container) return;
    
    const couponCount = 27;
    const sizes = ['xxl', 'xl', 'lg', 'md', 'sm', 'xs'];
    const positions = ['float-left', 'float-center-left', 'float-center', 'float-center-right', 'float-right'];
    const colors = [
        { primary: '#FF6B6B', secondary: '#FF8787' },
        { primary: '#4ECDC4', secondary: '#6FE7DD' },
        { primary: '#FFD93D', secondary: '#FFE66D' },
        { primary: '#A8E6CF', secondary: '#C1F0DC' },
        { primary: '#FF914D', secondary: '#FFAA6F' },
        { primary: '#B388FF', secondary: '#C9A7FF' },
        { primary: '#FF69B4', secondary: '#FF8CC8' },
        { primary: '#00D9FF', secondary: '#5AE4FF' }
    ];
    
    for (let i = 0; i < couponCount; i++) {
        setTimeout(() => {
            createFloatingCoupon(container, sizes, positions, colors);
        }, i * 800);
    }
}

function createFloatingCoupon(container, sizes, positions, colors) {
    const coupon = document.createElement('div');
    coupon.className = 'hero-coupon';
    
    const size = sizes[Math.floor(Math.random() * sizes.length)];
    const position = positions[Math.floor(Math.random() * positions.length)];
    const color = colors[Math.floor(Math.random() * colors.length)];
    const duration = 15 + Math.random() * 10;
    const delay = Math.random() * 5;
    
    coupon.classList.add('size-' + size);
    coupon.classList.add(position);
    coupon.style.animationDuration = duration + 's';
    coupon.style.animationDelay = delay + 's';
    
    coupon.innerHTML = createCouponSVG(color);
    container.appendChild(coupon);
}

function createCouponSVG(color) {
    const discountValue = ['10', '15', '20', '25', '30', '40', '50'][Math.floor(Math.random() * 7)];
    const gradientId = 'grad-' + Math.random().toString(36).substr(2, 9);
    
    return `
        <svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="${gradientId}" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:${color.primary};stop-opacity:1" />
                    <stop offset="100%" style="stop-color:${color.secondary};stop-opacity:1" />
                </linearGradient>
                <filter id="shadow-${gradientId}">
                    <feDropShadow dx="0" dy="4" stdDeviation="8" flood-opacity="0.3"/>
                </filter>
            </defs>
            
            <!-- Main coupon body -->
            <path d="M 20 10 L 180 10 Q 190 10 190 20 L 190 50 Q 195 55 190 60 L 190 100 Q 190 110 180 110 L 20 110 Q 10 110 10 100 L 10 60 Q 5 55 10 50 L 10 20 Q 10 10 20 10 Z" 
                  fill="url(#${gradientId})" 
                  filter="url(#shadow-${gradientId})"/>
            
            <!-- White accent border -->
            <path d="M 20 10 L 180 10 Q 190 10 190 20 L 190 50 Q 195 55 190 60 L 190 100 Q 190 110 180 110 L 20 110 Q 10 110 10 100 L 10 60 Q 5 55 10 50 L 10 20 Q 10 10 20 10 Z" 
                  fill="none" 
                  stroke="white" 
                  stroke-width="3" 
                  opacity="0.4"/>
            
            <!-- Perforated line -->
            <line x1="100" y1="20" x2="100" y2="100" stroke="white" stroke-width="2" stroke-dasharray="6 6" opacity="0.3"/>
            
            <!-- Left side - Discount value -->
            <text x="55" y="70" font-family="Inter, Arial, sans-serif" font-size="42" font-weight="900" fill="white" text-anchor="middle">
                ${discountValue}%
            </text>
            <text x="55" y="88" font-family="Inter, Arial, sans-serif" font-size="12" font-weight="700" fill="white" text-anchor="middle" opacity="0.9">
                OFF
            </text>
            
            <!-- Right side - LinkUp branding -->
            <text x="145" y="55" font-family="Inter, Arial, sans-serif" font-size="16" font-weight="800" fill="white" text-anchor="middle">
                LINKUP
            </text>
            <text x="145" y="72" font-family="Inter, Arial, sans-serif" font-size="10" font-weight="600" fill="white" text-anchor="middle" opacity="0.8">
                DESCUENTO
            </text>
            
            <!-- Decorative elements -->
            <circle cx="30" cy="30" r="3" fill="white" opacity="0.4"/>
            <circle cx="170" cy="30" r="3" fill="white" opacity="0.4"/>
            <circle cx="30" cy="90" r="3" fill="white" opacity="0.4"/>
            <circle cx="170" cy="90" r="3" fill="white" opacity="0.4"/>
        </svg>
    `;
}

// ========================================
// FAQ ACCORDION
// ========================================
function initFAQAccordion() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        
        if (!question || !answer) return;
        
        question.addEventListener('click', function() {
            const isActive = item.classList.contains('active');
            
            // Cerrar todos los demás items
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                    const otherQuestion = otherItem.querySelector('.faq-question');
                    if (otherQuestion) {
                        otherQuestion.setAttribute('aria-expanded', 'false');
                    }
                }
            });
            
            // Toggle el item actual
            if (isActive) {
                item.classList.remove('active');
                question.setAttribute('aria-expanded', 'false');
            } else {
                item.classList.add('active');
                question.setAttribute('aria-expanded', 'true');
            }
        });
    });
}

// ========================================
// UTILIDADES
// ========================================

/**
 * Debounce function para optimizar eventos
 */
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

/**
 * Detectar si el dispositivo es mobile
 */
function isMobile() {
    return window.innerWidth <= 768;
}

/**
 * Scroll to top button (opcional, si se quiere agregar)
 */
function initScrollToTop() {
    const scrollBtn = document.getElementById('scrollToTop');
    
    if (!scrollBtn) return;
    
    window.addEventListener('scroll', debounce(function() {
        if (window.scrollY > 500) {
            scrollBtn.classList.add('visible');
        } else {
            scrollBtn.classList.remove('visible');
        }
    }, 100));
    
    scrollBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ========================================
// MANEJO DE ERRORES DE IMÁGENES
// ========================================
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img[onerror]');
    
    images.forEach(img => {
        img.addEventListener('error', function() {
            // Crear un placeholder si la imagen no carga
            this.style.display = 'none';
            
            // Opcional: crear un div de placeholder
            const placeholder = document.createElement('div');
            placeholder.className = 'image-placeholder';
            placeholder.style.cssText = `
                width: 100%;
                height: 300px;
                background: linear-gradient(135deg, rgba(255, 145, 77, 0.1), rgba(255, 222, 89, 0.1));
                border-radius: 20px;
                display: flex;
                align-items: center;
                justify-content: center;
                color: #a3a3a3;
                font-size: 3rem;
            `;
            placeholder.innerHTML = '🏪';
            
            if (this.parentNode) {
                this.parentNode.insertBefore(placeholder, this);
            }
        });
    });
});

// ========================================
// PERFORMANCE OPTIMIZATION
// ========================================

/**
 * Lazy loading para imágenes (si se agregan más imágenes)
 */
function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    if (!images.length) return;
    
    const imageObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.getAttribute('data-src');
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// ========================================
// ANALYTICS Y TRACKING (opcional)
// ========================================

/**
 * Track clicks en CTAs principales
 */
function trackCTAClicks() {
    const ctaButtons = document.querySelectorAll('.btn-primary, .btn-nav-cta, .btn-cta-large');
    
    ctaButtons.forEach(button => {
        button.addEventListener('click', function() {
            const buttonText = this.textContent.trim();
            
            // Enviar evento a analytics (ejemplo con Google Analytics)
            if (typeof gtag !== 'undefined') {
                gtag('event', 'cta_click', {
                    'event_category': 'Comercios Landing',
                    'event_label': buttonText
                });
            }
            
            // Console log para debug
            console.log('CTA clicked:', buttonText);
        });
    });
}

// Inicializar tracking si está disponible
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', trackCTAClicks);
} else {
    trackCTAClicks();
}

// ========================================
// MANEJO DE FORMULARIOS (si se agrega un form)
// ========================================

/**
 * Validación y envío de formulario de registro
 */
function initFormHandling() {
    const forms = document.querySelectorAll('form[data-comercio-form]');
    
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Validación básica
            const formData = new FormData(form);
            const data = Object.fromEntries(formData);
            
            console.log('Form data:', data);
            
            // Aquí iría la lógica de envío al backend
            // fetch('/api/comercio/registro', {
            //     method: 'POST',
            //     headers: { 'Content-Type': 'application/json' },
            //     body: JSON.stringify(data)
            // })...
            
            // Por ahora, redirigir a la URL de registro
            window.location.href = form.getAttribute('action') || 'https://linkup-community.web.app/comercio-registro';
        });
    });
}

// ========================================
// MODO OSCURO (si se quisiera implementar)
// ========================================

/**
 * Toggle entre modo oscuro y claro
 * (La landing ya está en oscuro por defecto)
 */
function initThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    
    if (!themeToggle) return;
    
    const currentTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', currentTheme);
    
    themeToggle.addEventListener('click', function() {
        const theme = document.documentElement.getAttribute('data-theme');
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });
}

// ========================================
// HELPERS
// ========================================

/**
 * Animar elementos al hacer scroll
 */
function animateOnScroll(selector, animationClass = 'visible') {
    const elements = document.querySelectorAll(selector);
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add(animationClass);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    elements.forEach(el => observer.observe(el));
}

/**
 * Copiar texto al clipboard
 */
function copyToClipboard(text) {
    if (navigator.clipboard) {
        navigator.clipboard.writeText(text).then(function() {
            console.log('Copiado al portapapeles');
        });
    } else {
        // Fallback para navegadores antiguos
        const textarea = document.createElement('textarea');
        textarea.value = text;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
    }
}

/**
 * Formatear números con separador de miles
 */
function formatNumber(num) {
    return num.toLocaleString('es-CL');
}

/**
 * Validar email
 */
function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

/**
 * Mostrar notificación temporal
 */
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#3b82f6'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 12px;
        box-shadow: 0 8px 24px rgba(0,0,0,0.3);
        z-index: 10000;
        animation: slideIn 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(function() {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(function() {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// CSS para animaciones de notificaciones
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// ========================================
// CHAT WIDGET
// ========================================
function initChat() {
    const chatButton = document.getElementById('chatButton');
    const chatWindow = document.getElementById('chatWindow');
    const minimizeChat = document.getElementById('minimizeChat');
    const chatInput = document.getElementById('chatInput');
    const sendButton = document.getElementById('sendButton');
    const chatBody = document.getElementById('chatBody');

    if (!chatButton) return;

    const N8N_WEBHOOK_URL = 'https://tu-instancia-n8n.com/webhook/chat';

    chatButton.addEventListener('click', () => {
        chatButton.classList.toggle('active');
        chatWindow.classList.toggle('active');
        if (chatWindow.classList.contains('active')) {
            chatInput.focus();
        }
    });

    minimizeChat.addEventListener('click', () => {
        chatButton.classList.remove('active');
        chatWindow.classList.remove('active');
    });

    function addMessage(text, isUser = false) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `chat-message ${isUser ? 'user-message' : 'bot-message'}`;
        const avatarContent = isUser
            ? `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" fill="currentColor"/></svg>`
            : `<img src="img/cupi_profile.png" alt="Cupi" width="32" height="32">`;
        messageDiv.innerHTML = `
            <div class="message-avatar">${avatarContent}</div>
            <div class="message-content"><p>${text}</p></div>
        `;
        chatBody.appendChild(messageDiv);
        chatBody.scrollTop = chatBody.scrollHeight;
    }

    function getOrCreateSessionId() {
        let sessionId = localStorage.getItem('linkup_chat_session');
        if (!sessionId) {
            sessionId = 'session_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
            localStorage.setItem('linkup_chat_session', sessionId);
        }
        return sessionId;
    }

    async function sendMessageToN8N(message) {
        try {
            const response = await fetch(N8N_WEBHOOK_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ message, timestamp: new Date().toISOString(), sessionId: getOrCreateSessionId() })
            });
            if (!response.ok) throw new Error('Error en la respuesta del servidor');
            const data = await response.json();
            return data.response || data.message || 'Lo siento, no pude procesar tu mensaje.';
        } catch (error) {
            console.error('Error al comunicarse con n8n:', error);
            return 'Lo siento, estoy teniendo problemas para conectarme. Por favor, intenta nuevamente en unos momentos.';
        }
    }

    async function handleSendMessage() {
        const message = chatInput.value.trim();
        if (message === '') return;
        addMessage(message, true);
        chatInput.value = '';
        sendButton.disabled = true;
        const typingDiv = document.createElement('div');
        typingDiv.className = 'chat-message bot-message typing-indicator';
        typingDiv.innerHTML = `<div class="message-avatar"><img src="img/cupi_profile.png" alt="Cupi" width="32" height="32"></div><div class="message-content"><p>...</p></div>`;
        chatBody.appendChild(typingDiv);
        chatBody.scrollTop = chatBody.scrollHeight;
        const response = await sendMessageToN8N(message);
        typingDiv.remove();
        addMessage(response, false);
        sendButton.disabled = false;
        chatInput.focus();
    }

    sendButton.addEventListener('click', handleSendMessage);
    chatInput.addEventListener('keypress', (e) => { if (e.key === 'Enter') handleSendMessage(); });
}

// ========================================
// LOG DE INICIALIZACIÓN
// ========================================
console.log('✅ LINK UP - Para Comercios initialized');
console.log('📱 Mobile:', isMobile());
console.log('🎨 Theme: Dark mode');
