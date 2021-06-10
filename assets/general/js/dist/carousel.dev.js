"use strict";

document.addEventListener('DOMContentLoaded', function () {
  var ancho = 1920;
  var carousel = document.querySelector('.carousel');
  var boton_izquierdo = document.querySelector('.btn-left');
  var boton_derecho = document.querySelector('.btn-rigth');
  boton_derecho.addEventListener('click', function () {
    carousel.scroll({
      left: ancho,
      behavior: 'smooth'
    });
    ancho = ancho + 1920;

    if (ancho == 1920 * 3) {
      ancho = 0;
    }
  });
  boton_izquierdo.addEventListener('click', function () {
    carousel.scroll({
      left: ancho - 1920 * 2,
      behavior: 'smooth'
    });
    ancho = ancho - 1920;

    if (ancho <= 1920) {
      ancho = 1920;
    }
  });
  console.log('carrusel cargado'); // console.log(carousel.scroll(20,0));
});