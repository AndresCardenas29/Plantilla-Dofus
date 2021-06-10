document.addEventListener('DOMContentLoaded', () => {
    
    let ancho = 1920;
    const carousel = document.querySelector('.carousel');
    const boton_izquierdo = document.querySelector('.btn-left');
    const boton_derecho = document.querySelector('.btn-rigth');

    boton_derecho.addEventListener('click', () => {
        carousel.scroll({
            left: ancho,
            behavior: 'smooth'
        });
        ancho = ancho + 1920;
        if(ancho == (1920 * 3)){
            ancho = 0;
        }
    });

    boton_izquierdo.addEventListener('click', () => {
        carousel.scroll({
            left: ancho - (1920 * 2),
            behavior: 'smooth'
        });
        ancho = ancho - 1920;
        if (ancho <= 1920){
            ancho = 1920;
        }
    });
    console.log('carrusel cargado');
    // console.log(carousel.scroll(20,0));
    
});