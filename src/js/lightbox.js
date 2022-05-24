const btnClose = document.querySelector('#btn-close');
const btnNext = document.querySelector('#btn-next');
const btnPrev = document.querySelector('#btn-prev');
const img = document.querySelector('#img-galery');
const lightbox = document.querySelector('#lightbox-principal');
const imgActiva = document.querySelector('#img-activa');
let indiceImg = 0;

const abreLightbox = () => {
imgActiva.src = envent.target.src;
lightbox.style.display = 'flex';
};

img.forEach((imagen) => {
    imagen.addEventListener('click', abreLightbox);
});