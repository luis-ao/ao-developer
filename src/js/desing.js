const img1 = document.getElementById('img1');
const img2 = document.getElementById('img2');
const img3 = document.getElementById('img3');
const img4 = document.getElementById('img4');


const fxImg = (entradas, observador) => {
    entradas.forEach(entrada => {
        if(entrada.isIntersecting){
            entrada.target.classList.add('fx');
        } /* else {
            entrada.target.classList.remove('img-GSAP');
        } */
    });
}

const observador = new IntersectionObserver(fxImg, {
    root: null, // referencia al viewport por así decirlo
    rootMargin: '0px 0px 0px 0px',
    threshold: 1.0 // para que realice todo a partir de que se muestre la iimagen por completo
});

observador.observe(img1);
observador.observe(img2);
observador.observe(img3);
observador.observe(img4);


