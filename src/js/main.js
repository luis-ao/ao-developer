/* *********** 
     MENÚ
_________________*/
gsap.from('.header__logo, .menu-open-gsap',1.2,{
    opacity: 0,
    y: '-100%',
    stagger: {
        amount: .4
    }
});

const menuBtn = document.querySelector('.menu-open');
const exitBtn = document.querySelector('.menu-exit');

const t1 = gsap.timeline({ paused: true });
t1.to('.menu', { 
    opacity: 1,
    top: 0, 
    duration: 1, 
    ease: Power2.easeInOut }
);
t1.to('.menu__links', {
        opacity: 1,
        paddingTop: 0,
        duration: 1,
        ease: Power2.easeInOut,
        /* stagger: 0.3, */
    },
    '>-0.4'
);
t1.to('.menu__background', {
        opacity: 0.4,
        duration: 1,
        ease: 'slow(0.7, 0.7, false)',
    },
'>-0.6'
);

menuBtn.addEventListener('click', () => {
    t1.play().timeScale(1);
});

exitBtn.addEventListener('click', () => {
    t1.timeScale(2);
    t1.reverse();
});


/* *********** 
     PRELOADER 
_________________*/
var loader = document.getElementById('loader');
window.addEventListener('load', function () {
    loader.style.height = '100%';
    loader.style.width = '100%';
    loader.style.borderRadius = '50%';
    loader.style.visibility = 'hidden'
});