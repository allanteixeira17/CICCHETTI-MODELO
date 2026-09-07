/* 
  SISTEMA:    Cicchetti Natal Landing Page
  TELA:       Home Completa
  DESIGNER:   Web Designer Sênior
  STACK:      JS Vanilla
*/

document.addEventListener('DOMContentLoaded', () => {
    
    /* 1. Header Scroll Effect */
    const header = document.getElementById('header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    /* 2. Scroll Spy para Nav Links */
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            // Ajuste do offset para ativação
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
    });

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

    /* 6. Newsletter Form */
    const newsForm = document.getElementById('contato-form');
    const newsFeedback = document.getElementById('newsletter-feedback');

    if(newsForm) {
        newsForm.addEventListener('submit', (e) => {
            e.preventDefault();
            newsFeedback.textContent = 'Inscrito com sucesso!';
            newsFeedback.className = 'form-feedback success';
            newsForm.reset();
            setTimeout(() => {
                newsFeedback.className = 'form-feedback';
            }, 3000);
        });
    }
});
