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

/* *********** 
     MENÚ
_________________*/
gsap.from('.menu-open-gsap',{
    opacity: 0,
    x: '100%',
    duration: 1.5,
    ease: 'slow(0.7, 0.7, false)',
});

gsap.from('.logo__img, .logo__img-2',1.2,{
    opacity: 0,
    y: '-100%',
    stagger: {
        amount: .4
    }
});

const menuBtn = document.querySelector('.header__open');
const exitBtn = document.querySelector('.menu__exit');

let t1 = gsap.timeline({ paused: true });
t1.to('.menu', { 
    top: 0,
    duration: 1, 
    ease: Power2.easeInOut 
   }
);
t1.to('.menu__links', {
        opacity: 1,
        paddingTop: 0,
        duration: 1,
        ease: Power2.easeInOut,
    },
    '>-0.6'
);
t1.to('.menu__background', {
        opacity: 0.4,
        duration: 1,
        ease: 'slow(0.7, 0.7, false)',
    },
    '>-0.8'
);

menuBtn.addEventListener('click', () => {
    t1.play().timeScale(1);
});

exitBtn.addEventListener('click', () => {
    t1.timeScale(2);
    t1.reverse();
});