const tl = gsap.timeline();

/* Movimiento del texto principal */
tl.from('.line p', 2.4,{
    delay: .5,
    ease: 'power4.out',
    y: 250,
    skewY: 15,
    stagger: {
        amount: .8
    }
});

/* Cambio de color en el fondo */
tl.to('body',1.4,{
    backgroundColor: '#121212'
})

/* Cambio de color en el texto principal */
tl.to('.line p a', 1.1,{
    color: 'white'
},"-=1.8")

/* Movimiento del navbar */
tl.from('.header__logo, .header__text',.8,{
    opacity: 0,
    y: "-100%",
    stagger: {
        amount: .4
    }
});


/* Evento del cursor */
follower = document.querySelectorAll('.cursor');

    posX = 0;
    posY = 0;
    mouseX = 0;
    mouseY = 0;

    TweenMax.to({},0.016,{
        repeat: -2,
        onRepeat: function(){
            posX += (mouseX  - posX) / 10;
            posY += (mouseY  - posY) / 10;

            TweenMax.set(follower, {
                css: {
                    left: posX - 80,
                    top: posY - 80
                }
            });
        }
    });

document.addEventListener("mousemove", 
    function(e){
        mouseX = e.pageX;
        mouseY = e.pageY;
    });