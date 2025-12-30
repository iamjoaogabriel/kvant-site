// ========================================
// KVANT — Premium Interactions
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    initHeader();
    initMobileMenu();
    initSmoothScroll();
    initCursorGlow();
    initScrollAnimations();
});

// ========================================
// Header Scroll Effect
// ========================================

function initHeader() {
    const header = document.getElementById('header');
    let lastScroll = 0;
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.scrollY;
        
        if (currentScroll > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        lastScroll = currentScroll;
    }, { passive: true });
}

// ========================================
// Mobile Menu
// ========================================

function initMobileMenu() {
    const trigger = document.getElementById('mobileMenuTrigger');
    const menu = document.getElementById('mobileMenu');
    const overlay = document.getElementById('mobileMenuOverlay');
    const links = menu.querySelectorAll('a');
    
    function openMenu() {
        menu.classList.add('active');
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    
    function closeMenu() {
        menu.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    }
    
    trigger.addEventListener('click', openMenu);
    overlay.addEventListener('click', closeMenu);
    
    links.forEach(link => {
        link.addEventListener('click', closeMenu);
    });
    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeMenu();
    });
}

// ========================================
// Smooth Scroll
// ========================================

function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const target = document.querySelector(targetId);
            if (!target) return;
            
            const headerHeight = 80;
            const targetPosition = target.getBoundingClientRect().top + window.scrollY - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        });
    });
}

// ========================================
// Cursor Glow Effect
// ========================================

function initCursorGlow() {
    const glow = document.getElementById('cursorGlow');
    
    if (window.matchMedia('(pointer: fine)').matches) {
        document.addEventListener('mousemove', (e) => {
            glow.style.left = e.clientX + 'px';
            glow.style.top = e.clientY + 'px';
            glow.classList.add('active');
        });
        
        document.addEventListener('mouseleave', () => {
            glow.classList.remove('active');
        });
    }
}

// ========================================
// Scroll Animations
// ========================================

function initScrollAnimations() {
    const elements = document.querySelectorAll(
        '.solution__problem, .solution__answer, .process__step, .features__card, .pricing__card, .guarantee__content'
    );
    
    elements.forEach(el => el.classList.add('fade-in'));
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    elements.forEach(el => observer.observe(el));
}

// ========================================
// Console Branding
// ========================================

console.log(
    '%cKVANT',
    'font-size: 48px; font-weight: 700; color: #45a7b9; font-family: system-ui;'
);
console.log(
    '%cEngenharia de Vendas com IA',
    'font-size: 14px; color: #71717a; font-family: system-ui;'
);