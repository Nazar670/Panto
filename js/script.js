document.addEventListener('DOMContentLoaded', () => {
    const watcherElements = document.querySelectorAll('[data-watcher]');

    if (!watcherElements.length) return;

        const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('_watcher-view');

                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.2
    });

    watcherElements.forEach((element) => {
        observer.observe(element);
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const footerTitles = document.querySelectorAll('.top-footer__menu-title');
    const footerSocialTitle = document.querySelector('.social__title');
    const footerSocialMenu = document.querySelector('.social__items');

    footerTitles.forEach((footerTitle) => {
        footerTitle.addEventListener('click', () => {
            const footerMenu = footerTitle.nextElementSibling;

            footerTitle.classList.toggle('top-footer__menu-title--active');
            footerMenu.classList.toggle('top-footer__list--active');
        });
    });

    footerSocialTitle.addEventListener('click', () => {
        footerSocialTitle.classList.toggle('social__title--active');
        footerSocialMenu.classList.toggle('social__items--active');
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header');
    const burgerMenu = document.querySelector('.menu__icon');
    const menu = document.querySelector('.menu__body');

    const subMenuLink = document.querySelector('.submenu');
    const subMenuIcon = document.querySelector('.submenu__icon');
    const subMenu = document.querySelector('.submenu__list');

    // Header scroll
    if (header) {
        const scrollThreshold = 100;

        window.addEventListener('scroll', () => {
            if (window.scrollY >= scrollThreshold) {
                header.classList.add('_header-scroll');
            } else {
                header.classList.remove('_header-scroll');
            }
        });
    }

    // Burger menu
    if (burgerMenu && menu) {
        burgerMenu.addEventListener('click', () => {
            menu.classList.toggle('menu__body--active');
            burgerMenu.classList.toggle('menu__icon--active');
            document.body.classList.toggle('body--lock');
        });
    }

    // Submenu
    if (subMenuLink && subMenuIcon && subMenu) {
        subMenuLink.addEventListener('click', (event) => {
            event.preventDefault();

            const isActive = subMenu.classList.toggle('submenu__list--active');

            subMenuIcon.classList.toggle('icon--transform', isActive);
        });
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const hero = document.querySelector('.hero');
    const colors = document.querySelectorAll('.hero__color');

    if (!hero || !colors.length) return;

    colors.forEach((color) => {
        color.addEventListener('click', () => {

            // Прибираємо active з усіх кольорів
            colors.forEach((item) => {
                item.classList.remove(
                    'color-orange--active',
                    'color-cyan--active',
                    'color-grey--active'
                );
            });

            // Додаємо active поточному кольору
            if (color.classList.contains('color-orange')) {
                color.classList.add('color-orange--active');
            }

            if (color.classList.contains('color-cyan')) {
                color.classList.add('color-cyan--active');
            }

            if (color.classList.contains('color-grey')) {
                color.classList.add('color-grey--active');
            }

            // Змінюємо background hero
            hero.style.backgroundImage = `
                url(${color.dataset.bg})
            `;
        });
    });
});

new Swiper('.products__cards', {

    slidesPerView: 4,
    spaceBetween: 42,

    loop: true,

    pagination: false,

    navigation: {
        nextEl: '.pagination__circle--next',
        prevEl: '.pagination__circle--prev',
    },

    breakpoints: {

        0: {
            slidesPerView: 1,
        },

        480: {
            slidesPerView: 2,
        },

        768: {
            slidesPerView: 3,
        },

        1024: {
            slidesPerView: 4,
        }

    }

});

new Swiper('.testimonials__slider', {

    slidesPerView: 3,
    spaceBetween: 38,

    loop: true,

    pagination: false,

    navigation: {
        nextEl: '.pagination__circle--next',
        prevEl: '.pagination__circle--prev',
    },

    breakpoints: {

        0: {
            slidesPerView: 1,
        },

        480: {
            slidesPerView: 1,
        },

        768: {
            slidesPerView: 2,
        },

        1024: {
            slidesPerView: 3,
        }

    }

});