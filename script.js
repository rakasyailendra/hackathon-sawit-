document.addEventListener('DOMContentLoaded', function() {

    // === FUNGSI UNTUK MENU HAMBURGER ===
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (navToggle && navLinks) {
        navToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            const icon = navToggle.querySelector('i');
            if (navLinks.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
                navToggle.setAttribute('aria-label', 'Tutup menu navigasi');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
                navToggle.setAttribute('aria-label', 'Buka menu navigasi');
            }
        });

        const navLinksItems = navLinks.querySelectorAll('a');
        navLinksItems.forEach(link => {
            link.addEventListener('click', () => {
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                    const icon = navToggle.querySelector('i');
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                    navToggle.setAttribute('aria-label', 'Buka menu navigasi');
                }
            });
        });
    }

    // === FUNGSI UNTUK EFEK BINTANG PARALAKS SAAT MOUSE BERGERAK ===
    const stars = document.querySelectorAll('.fa-icon-star');
    const wrapper = document.querySelector('.site-wrapper');
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    if (stars.length > 0 && wrapper && !motionQuery.matches) {
        wrapper.addEventListener('mousemove', function(e) {
            const { clientX, clientY } = e;
            const centerX = window.innerWidth / 2;
            const centerY = window.innerHeight / 2;

            stars.forEach((star, index) => {
                const speed = 1 + (index * 0.05);
                const invert = (index % 2 === 0) ? 1 : -1;
                const moveX = (clientX - centerX) * speed * invert / 100;
                const moveY = (clientY - centerY) * speed * invert / 100;
                star.style.transform = `translate(${moveX}px, ${moveY}px)`;
            });
        });
    }

    // === FUNGSI UNTUK FAQ ACCORDION (REVISI FINAL) ===
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        const answerContent = item.querySelector('.faq-answer-content');

        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');

            // Tutup semua item lain
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                    otherItem.querySelector('.faq-answer').style.maxHeight = null;
                }
            });

            // Buka atau tutup item yang diklik
            if (!isActive) {
                item.classList.add('active');
                answer.style.maxHeight = answerContent.scrollHeight + 'px';
            } else {
                item.classList.remove('active');
                answer.style.maxHeight = null;
            }
        });
    });
    
    // === FUNGSI UNTUK FOOTER ===
    const icons = document.querySelectorAll('.footer .icon');

    icons.forEach(icon => {
        icon.addEventListener('mouseenter', function () {
            this.style.transform = 'scale(1.1)';
            this.style.filter = 'brightness(1.2)';
            this.style.boxShadow = '0 4px 10px rgba(0,0,0,0.3)';
        });

        icon.addEventListener('mouseleave', function () {
            this.style.transform = 'scale(1)';
            this.style.filter = 'brightness(1)';
            this.style.boxShadow = '0 2px 5px rgba(0,0,0,0.2)';
        });
    });

    console.log('Situs Hackathon Sawit Nasional berhasil dimuat.');
});

