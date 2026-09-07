/* 
  SISTEMA:    Cicchetti Natal Landing Page
  STACK:      JS Vanilla OTIMIZADO para Core Web Vitals 90+
  ESTRATÉGIA: Defer tudo que não é first paint. Slides injetados após load.
*/

/* Throttle para INP */
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
    
    /* 1. Header Scroll + Scroll Spy — UM ÚNICO listener */
    const header = document.getElementById('header');
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    const handleScrollAll = () => {
        const y = window.scrollY;
        
        /* Header bg */
        header.classList.toggle('scrolled', y > 50);
        
        /* Scroll Spy (loop reverso = mais eficiente) */
        let current = '';
        for (let i = sections.length - 1; i >= 0; i--) {
            if (y >= sections[i].offsetTop - 200) {
                current = sections[i].getAttribute('id');
                break;
            }
        }
        navLinks.forEach(link => {
            link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
        });
    };

    window.addEventListener('scroll', throttle(handleScrollAll, 100), { passive: true });

    /* 2. Mobile Menu */
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const mobileOverlay = document.querySelector('.mobile-nav-overlay');
    const closeBtn = document.querySelector('.close-menu');
    const mobileLinks = document.querySelectorAll('.mobile-links a');

    if (mobileBtn && mobileOverlay) {
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

    /* 3. Modal de Galeria */
    const modal = document.getElementById('gallery-modal');
    const modalImg = document.getElementById('modal-img');
    const closeModal = document.querySelector('.close-modal');

    const hideModal = () => {
        modal.style.display = 'none';
        document.body.style.overflow = '';
    };

    document.querySelectorAll('.gallery-item').forEach(item => {
        item.addEventListener('click', () => {
            const img = item.querySelector('img');
            if (img) {
                modal.style.display = 'block';
                modalImg.src = img.currentSrc || img.src;
                document.body.style.overflow = 'hidden';
            }
        });
    });

    if (closeModal) closeModal.addEventListener('click', hideModal);
    window.addEventListener('click', e => { if (e.target === modal) hideModal(); });
    window.addEventListener('keydown', e => { if (e.key === 'Escape' && modal.style.display === 'block') hideModal(); });

    /* 4. Form de Reserva */
    const reservaForm = document.getElementById('reserva-form');
    const feedbackDiv = document.getElementById('reserva-feedback');

    if (reservaForm) {
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
                setTimeout(() => { feedbackDiv.className = 'form-feedback'; }, 5000);
            }, 1500);
        });
    }
});

/* ============================================================
   5. SLIDESHOW — Injetar slides APÓS o page load (não bloqueia LCP)
   ============================================================ */
window.addEventListener('load', () => {
    const slideshow = document.getElementById('hero-slideshow');
    if (!slideshow) return;

    /* Slides extras (não estavam no HTML para não bloquear o carregamento) */
    const extraSlides = [
        { webp: 'assets/webp/Selecao-de-sobremesas-da-casa-em-versao-mini-2048x1430.webp', jpg: 'assets/hero/Selecao-de-sobremesas-da-casa-em-versao-mini-2048x1430.jpg', alt: 'Seleção de sobremesas da casa em versão mini' },
        { webp: 'assets/webp/O-Cicchetti-Midway-ja-se-firma-como-uma-das-novidades-gastronomicas-mais-comentadas-da-cidade-funcionando-com-dois-ambientes-modernos-scaled.webp', jpg: 'assets/hero/O-Cicchetti-Midway-ja-se-firma-como-uma-das-novidades-gastronomicas-mais-comentadas-da-cidade-funcionando-com-dois-ambientes-modernos-scaled.jpg', alt: 'Ambiente moderno do Cicchetti no Midway Mall' },
        { webp: 'assets/webp/Polvo-grelhado-com-molho-romesco-batata-rustica-e-chimichurri-scaled.webp', jpg: 'assets/hero/Polvo-grelhado-com-molho-romesco-batata-rustica-e-chimichurri-scaled.jpg', alt: 'Polvo grelhado com molho romesco, batata rústica e chimichurri' },
        { webp: 'assets/webp/Salada-de-Fermentados-Pachamama-2048x1365.webp', jpg: 'assets/hero/Salada-de-Fermentados-Pachamama-2048x1365.jpg', alt: 'Salada de fermentados Pachamama' },
        { webp: 'assets/webp/Cicchetti-Midway-e-a-primeira-franquia-da-marca-no-Brasil-e-traz-para-o-publico-potiguar-a-mesma-experiencia-que-consagrou-o-Cicchetti-em-Pipa-2048x1365.webp', jpg: 'assets/hero/Cicchetti-Midway-e-a-primeira-franquia-da-marca-no-Brasil-e-traz-para-o-publico-potiguar-a-mesma-experiencia-que-consagrou-o-Cicchetti-em-Pipa-2048x1365.jpg', alt: 'Cicchetti Midway - primeira franquia da marca no Brasil' }
    ];

    extraSlides.forEach(s => {
        const div = document.createElement('div');
        div.className = 'hero-slide';
        div.innerHTML = `<picture><source type="image/webp" srcset="${s.webp}"><img src="${s.jpg}" alt="${s.alt}" width="1920" height="1080" loading="lazy" decoding="async"></picture>`;
        slideshow.appendChild(div);
    });

    /* Iniciar slideshow APÓS injeção */
    const slides = slideshow.querySelectorAll('.hero-slide');
    let currentSlide = 0;
    let slideTimer = setInterval(() => {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    }, 5000);

    /* Pausar quando aba oculta (economia de CPU) */
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            clearInterval(slideTimer);
        } else {
            slideTimer = setInterval(() => {
                slides[currentSlide].classList.remove('active');
                currentSlide = (currentSlide + 1) % slides.length;
                slides[currentSlide].classList.add('active');
            }, 5000);
        }
    });
});