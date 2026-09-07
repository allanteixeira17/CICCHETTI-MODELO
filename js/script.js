/* 
  SISTEMA:    Cicchetti Natal Landing Page
  TELA:       Home Completa
  DESIGNER:   Web Designer Sênior
  STACK:      JS Vanilla OTIMIZADO
*/

/* Função throttle para performance */
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
    
    /* 0. Hero Slideshow */
    const slides = document.querySelectorAll('.hero-slide');
    if (slides.length > 0) {
        let currentSlide = 0;
        const slideInterval = 5000;

        const nextSlide = () => {
            slides[currentSlide].classList.remove('active');
            currentSlide = (currentSlide + 1) % slides.length;
            slides[currentSlide].classList.add('active');
        };

        setInterval(nextSlide, slideInterval);
    }

    /* 1. Header Scroll Effect - com throttle */
    const header = document.getElementById('header');
    
    const handleScroll = () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    };

    window.addEventListener('scroll', throttle(handleScroll, 100), { passive: true });

    /* 2. Scroll Spy para Nav Links - com throttle */
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    const handleScrollSpy = () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', throttle(handleScrollSpy, 150), { passive: true });

    /* 3. Mobile Menu Toggle */
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const mobileOverlay = document.querySelector('.mobile-nav-overlay');
    const closeBtn = document.querySelector('.close-menu');
    const mobileLinks = document.querySelectorAll('.mobile-links a');

    if(mobileBtn && mobileOverlay) {
        mobileBtn.addEventListener('click', () => {
            mobileOverlay.classList.add('open');
            document.body.style.overflow = 'hidden'; // block scroll
        });

        const closeMenu = () => {
            mobileOverlay.classList.remove('open');
            document.body.style.overflow = 'auto';
        };

        closeBtn.addEventListener('click', closeMenu);
        mobileLinks.forEach(link => link.addEventListener('click', closeMenu));
    }

    /* 4. Modal de Galeria */
    const modal = document.getElementById('gallery-modal');
    const modalImg = document.getElementById('modal-img');
    const closeClasses = document.querySelector('.close-modal');
    const galleryItems = document.querySelectorAll('.gallery-item img');

    galleryItems.forEach(img => {
        img.parentNode.addEventListener('click', () => {
            modal.style.display = "block";
            modalImg.src = img.src;
        });
    });

    if(closeClasses) {
        closeClasses.addEventListener('click', () => {
            modal.style.display = "none";
        });
    }

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });

    /* 5. Validação de Formulário e Feedback Visual */
    const reservaForm = document.getElementById('reserva-form');
    const feedbackDiv = document.getElementById('reserva-feedback');

    if(reservaForm) {
        reservaForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Simulação de validação
            const btn = reservaForm.querySelector('button[type="submit"]');
            const originalText = btn.innerHTML;
            
            btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Processando...';
            btn.disabled = true;

            // Fake API call
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
