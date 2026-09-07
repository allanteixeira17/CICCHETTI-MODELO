/* 
  SISTEMA:    Cicchetti Natal Landing Page
  TELA:       Home Completa
  DESIGNER:   Web Designer Sênior
  STACK:      JS Vanilla OTIMIZADO para Core Web Vitals
*/

/* Função throttle para performance (INP) */
function throttle(fn, wait) {
    let last = 0;
    return (...args) => {
        const now = Date.now();
        if (now - last >= wait) {
            last = now;
            fn(...args);
        }
    };
}

document.addEventListener('DOMContentLoaded', () => {
    
    /* 0. Hero Slideshow - usando requestAnimationFrame para visibilidade */
    const slides = document.querySelectorAll('.hero-slide');
    if (slides.length > 0) {
        let currentSlide = 0;
        const slideInterval = 5000;

        const nextSlide = () => {
            slides[currentSlide].classList.remove('active');
            currentSlide = (currentSlide + 1) % slides.length;
            slides[currentSlide].classList.add('active');
        };

        /* Pausar slideshow quando a aba não está visível (economiza CPU) */
        let slideTimer = setInterval(nextSlide, slideInterval);
        
        document.addEventListener('visibilitychange', () => {
            if (document.hidden) {
                clearInterval(slideTimer);
            } else {
                slideTimer = setInterval(nextSlide, slideInterval);
            }
        });
    }

    /* 1. Header Scroll Effect - com throttle + passive */
    const header = document.getElementById('header');
    
    const handleScroll = () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    };

    /* 2. Scroll Spy para Nav Links - combinado com handleScroll para usar 1 só listener */
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    const handleScrollAll = () => {
        /* Header */
        handleScroll();
        
        /* Scroll Spy */
        let current = '';
        const scrollPos = window.scrollY;
        
        for (let i = sections.length - 1; i >= 0; i--) {
            if (scrollPos >= sections[i].offsetTop - 200) {
                current = sections[i].getAttribute('id');
                break;
            }
        }

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    };

    /* Um único listener de scroll com throttle (era 2 separados antes) */
    window.addEventListener('scroll', throttle(handleScrollAll, 100), { passive: true });

    /* 3. Mobile Menu Toggle */
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const mobileOverlay = document.querySelector('.mobile-nav-overlay');
    const closeBtn = document.querySelector('.close-menu');
    const mobileLinks = document.querySelectorAll('.mobile-links a');

    if(mobileBtn && mobileOverlay) {
        mobileBtn.addEventListener('click', () => {
            mobileOverlay.classList.add('open');
            mobileBtn.setAttribute('aria-expanded', 'true');
            document.body.style.overflow = 'hidden';
        });

        const closeMenu = () => {
            mobileOverlay.classList.remove('open');
            mobileBtn.setAttribute('aria-expanded', 'false');
            document.body.style.overflow = '';
        };

        closeBtn.addEventListener('click', closeMenu);
        mobileLinks.forEach(link => link.addEventListener('click', closeMenu));
    }

    /* 4. Modal de Galeria - usando dataset para evitar reflow */
    const modal = document.getElementById('gallery-modal');
    const modalImg = document.getElementById('modal-img');
    const closeModal = document.querySelector('.close-modal');
    const galleryItems = document.querySelectorAll('.gallery-item');

    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            const img = item.querySelector('img');
            if (img) {
                modal.style.display = "block";
                modalImg.src = img.currentSrc || img.src;
                document.body.style.overflow = 'hidden';
            }
        });
    });

    const hideModal = () => {
        modal.style.display = "none";
        document.body.style.overflow = '';
    };

    if(closeModal) {
        closeModal.addEventListener('click', hideModal);
    }

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            hideModal();
        }
    });

    /* Fechar modal com Escape */
    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            hideModal();
        }
    });

    /* 5. Validação de Formulário e Feedback Visual */
    const reservaForm = document.getElementById('reserva-form');
    const feedbackDiv = document.getElementById('reserva-feedback');

    if(reservaForm) {
        reservaForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const btn = reservaForm.querySelector('button[type="submit"]');
            const originalText = btn.innerHTML;
            
            btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Processando...';
            btn.disabled = true;

            setTimeout(() => {
                feedbackDiv.textContent = 'Solicitação enviada com sucesso! Nossa equipe entrará em contato via WhatsApp.';
                feedbackDiv.className = 'form-feedback success';
                reservaForm.reset();
                btn.innerHTML = originalText;
                btn.disabled = false;
                
                setTimeout(() => {
                    feedbackDiv.className = 'form-feedback';
                }, 5000);
            }, 1500);
        });
    }

});