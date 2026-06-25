/* =====================================================
   DOM READY
===================================================== */

document.addEventListener('DOMContentLoaded', () => {

    initMobileMenu();
    initHeaderScroll();
    initCounters();
    initRevealAnimations();
    initParallax();
    initActiveMenu();

});

/* =====================================================
   MOBILE MENU
===================================================== */

function initMobileMenu() {

    const toggle = document.getElementById('mobileToggle');
    const nav = document.getElementById('nav');

    if (!toggle || !nav) return;

    toggle.addEventListener('click', () => {

        nav.classList.toggle('nav-open');

        if (nav.classList.contains('nav-open')) {
            toggle.innerHTML = '✕';
        } else {
            toggle.innerHTML = '☰';
        }

    });

    nav.querySelectorAll('a').forEach(link => {

        link.addEventListener('click', () => {

            nav.classList.remove('nav-open');
            toggle.innerHTML = '☰';

        });

    });

}

/* =====================================================
   HEADER EFFECT
===================================================== */

function initHeaderScroll() {

    const header = document.getElementById('header');

    if (!header) return;

    window.addEventListener('scroll', () => {

        if (window.scrollY > 50) {

            header.style.background =
                'rgba(5,8,22,0.95)';

            header.style.boxShadow =
                '0 10px 30px rgba(0,0,0,.25)';

        } else {

            header.style.background =
                'rgba(5,8,22,.65)';

            header.style.boxShadow =
                'none';
        }

    });

}

/* =====================================================
   COUNTERS
===================================================== */

function initCounters() {

    const counters =
        document.querySelectorAll('[data-counter]');

    if (!counters.length) return;

    const observer =
        new IntersectionObserver(entries => {

            entries.forEach(entry => {

                if (!entry.isIntersecting) return;

                const el = entry.target;

                const target =
                    parseInt(el.dataset.counter);

                animateCounter(el, target);

                observer.unobserve(el);

            });

        }, {
            threshold: 0.5
        });

    counters.forEach(counter => {
        observer.observe(counter);
    });

}

function animateCounter(element, target) {

    let current = 0;

    const duration = 1800;

    const increment =
        target / (duration / 16);

    const timer = setInterval(() => {

        current += increment;

        if (current >= target) {

            current = target;

            clearInterval(timer);
        }

        element.textContent =
            Math.floor(current);

    }, 16);

}

/* =====================================================
   SCROLL REVEAL
===================================================== */

function initRevealAnimations() {

    const revealElements = document.querySelectorAll(
        '.section-header,' +
        '.stat-card,' +
        '.about-card,' +
        '.category-card,' +
        '.timeline-item,' +
        '.pillar-card,' +
        '.contact-form'
    );

    revealElements.forEach(el => {

        el.style.opacity = '0';
        el.style.transform =
            'translateY(40px)';

        el.style.transition =
            'all .8s ease';

    });

    const observer =
        new IntersectionObserver(entries => {

            entries.forEach(entry => {

                if (!entry.isIntersecting) return;

                entry.target.style.opacity = '1';

                entry.target.style.transform =
                    'translateY(0)';

                observer.unobserve(entry.target);

            });

        }, {
            threshold: .15
        });

    revealElements.forEach(el => {
        observer.observe(el);
    });

}

/* =====================================================
   PARALLAX HERO
===================================================== */

function initParallax() {

    const hero =
        document.querySelector('.hero');

    if (!hero) return;

    window.addEventListener('scroll', () => {

        const offset =
            window.pageYOffset;

        hero.style.backgroundPositionY =
            offset * 0.5 + 'px';

    });

}

/* =====================================================
   ACTIVE MENU
===================================================== */

function initActiveMenu() {

    const sections =
        document.querySelectorAll('section[id]');

    const navLinks =
        document.querySelectorAll('.nav a');

    window.addEventListener('scroll', () => {

        let current = '';

        sections.forEach(section => {

            const sectionTop =
                section.offsetTop - 120;

            const sectionHeight =
                section.offsetHeight;

            if (
                window.scrollY >= sectionTop &&
                window.scrollY <
                sectionTop + sectionHeight
            ) {
                current = section.getAttribute('id');
            }

        });

        navLinks.forEach(link => {

            link.classList.remove('active');

            if (
                link.getAttribute('href') ===
                `#${current}`
            ) {
                link.classList.add('active');
            }

        });

    });

}

/* =====================================================
   SMOOTH SCROLL
===================================================== */

document.querySelectorAll('a[href^="#"]')
    .forEach(anchor => {

        anchor.addEventListener(
            'click',
            function (e) {

                const target =
                    document.querySelector(
                        this.getAttribute('href')
                    );

                if (!target) return;

                e.preventDefault();

                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });

            }
        );

    });

/* =====================================================
   CTA BUTTON EFFECT
===================================================== */

document.querySelectorAll('.btn')
    .forEach(btn => {

        btn.addEventListener(
            'mouseenter',
            () => {

                btn.style.transform =
                    'translateY(-3px)';
            }
        );

        btn.addEventListener(
            'mouseleave',
            () => {

                btn.style.transform =
                    'translateY(0)';
            }
        );

    });

/* =====================================================
   PRELOADER OPTIONAL
===================================================== */

// Si quieres añadir un preloader:
//
// window.addEventListener('load', () => {
//     document.body.classList.add('loaded');
// });

/* =====================================================
   CONSOLE SIGNATURE
===================================================== */

console.log(`
=====================================
 CLUB NATACIÓN RIBA-ROJA
 HIGH PERFORMANCE EDITION 2026
=====================================
`);
