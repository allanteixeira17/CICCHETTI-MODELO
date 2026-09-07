/* 
  SISTEMA:    Cicchetti Natal Landing Page
  TELA:       Home Completa
  STACK:      JS Vanilla OTIMIZADO PARA PERFORMANCE
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

/* Função debounce */
function debounce(fn, wait) {
    let timeout;
    return (...args) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => fn(...args), wait);
    };
}

document.addEventListener('DOMContentLoaded', () => {
    
    /* 0. Hero Slideshow - usando requestAnimationFrame */
    const slides = document.querySelectorAll('.hero-slide');
    if (slides.length > 0) {
        let currentSlide = 0;
        const slideInterval = 5000;
        let lastSlideTime = 0;

        const nextSlide = (timestamp) => {
            if (timestamp - lastSlideTime >= slideInterval) {
                slides[currentSlide].classList.remove('active');
                currentSlide = (currentSlide + 1) % slides.length;
                slides[currentSlide].classList.add('active');
                lastSlideTime = timestamp;
            }
            requestAnimationFrame(nextSlide);
        };

        requestAnimationFrame(nextSlide);
    }

    /* 1. Header Scroll Effect - com throttle e passive */
    const header = document.getElementById('header');
    
    const handleScroll = () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    };

    window.addEventListener('scroll', throttle(handleScroll, 150), { passive: true });

    /* 2. Scroll Spy para Nav Links - com throttle mais agressivo */
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    const handleScrollSpy = () => {
        let current = '';
        
        for (let i = 0; i < sections.length; i++) {
            const section = sections[i];
            const sectionTop = section.offsetTop;
            if (pageYOffset >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        }

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', throttle(handleScrollSpy, 200), { passive: true });

    /* 3. Mobile Menu Toggle - com debounce */
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const mobileOverlay = document.querySelector('.mobile-nav-overlay');
    const closeBtn = document.querySelector('.close-menu');
    const mobileLinks = document.querySelectorAll('.mobile-links a');

    if(mobileBtn && mobileOverlay) {
        const toggleMenu = debounce(() => {
            mobileOverlay.classList.add('open');
            document.body.style.overflow = 'hidden';
        }, 100);

        mobileBtn.addEventListener('click', toggleMenu);

        const closeMenu = () => {
            mobileOverlay.classList.remove('open');
            document.body.style.overflow = 'auto';
        };

        closeBtn.addEventListener('click', closeMenu);
        mobileLinks.forEach(link => link.addEventListener('click', closeMenu));
    }

    /* 4. Modal de Galeria - lazy loaded */
    let modalLoaded = false;
    
    const initModal = () => {
        if (modalLoaded) return;
        modalLoaded = true;
        
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
    };

    /* Inicializar modal apenas quando necessário */
    const gallerySection = document.getElementById('galeria');
    if (gallerySection) {
        const galleryObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    initModal();
                    galleryObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });
        
        galleryObserver.observe(gallerySection);
    }

    /* 5. Validação de Formulário - lazy loaded */
    let formLoaded = false;
    
    const initForm = () => {
        if (formLoaded) return;
        formLoaded = true;
        
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
    };

    /* Inicializar formulário apenas quando necessário */
    const reservaSection = document.getElementById('reservas');
    if (reservaSection) {
        const formObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    initForm();
                    formObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });
        
        formObserver.observe(reservaSection);
    }

    /* 6. Smooth scroll para âncoras - otimizado */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
});