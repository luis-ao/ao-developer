/* const btnNext = document.querySelector('#btn-next');
const btnPrev = document.querySelector('#btn-prev'); */

const btnClose = document.querySelector('#btn-close');

const lightbox = document.querySelector('#lightbox');
const img = document.querySelectorAll('#img-galery');
const imgActiva = document.querySelector('#img-activa');

img.forEach( img =>{
    img.addEventListener('click', ()=>{
        addImg(img.getAttribute('src'),img.getAttribute('alt'));
    })
    
});

const addImg = (srcImg, altImg)=>{
    lightbox.classList.toggle('move');
    imgActiva.classList.toggle('show');
    imgActiva.src = srcImg;
    imgActiva.alt = altImg;
}

lightbox.addEventListener('click', ()=>{
    lightbox.classList.toggle('move');
    imgActiva.classList.toggle('show');
})

