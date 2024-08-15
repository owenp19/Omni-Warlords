const header = document.querySelector("header")

window.addEventListener ("scroll", function() {
    header.classList.toggle ("sticky", window.scrollY > 0);
});

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.barra-nav');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
};

const sr = ScrollReveal ({
    distance: '65px',
    duration: 2600,
    delay: 450,
    reset: true
});

sr.reveal('.portada-texto',{delay:200, origin:'top'});
sr.reveal('.portada-img',{delay:450, origin:'top'});
sr.reveal('.iconos i',{delay:500, origin:'left'});
sr.reveal('.scroll-abajo',{delay:500, origin:'rigth'});

document.addEventListener('DOMContentLoaded', function() {
    const imagenes = document.querySelectorAll('.carrusel-orionis img');
    const flechaIzquierda = document.querySelector('.control-izquierda');
    const flechaDerecha = document.querySelector('.control-derecha');
    let indiceActual = 0;

    function mostrarImagen(indice) {
        imagenes.forEach((img, i) => {
            img.classList.remove('imagen-activa');
            if (i === indice) {
                img.classList.add('imagen-activa');
            }
        });
    }

    flechaIzquierda.addEventListener('click', function() {
        indiceActual = (indiceActual > 0) ? indiceActual - 1 : imagenes.length - 1;
        mostrarImagen(indiceActual);
    });

    flechaDerecha.addEventListener('click', function() {
        indiceActual = (indiceActual < imagenes.length - 1) ? indiceActual + 1 : 0;
        mostrarImagen(indiceActual);
    });

    mostrarImagen(indiceActual);
});

// script de numero de pedidos en tiempo real 
document.addEventListener("DOMContentLoaded", function() {
    let contador = 1;
    const maxPedidos = 500;
    const incremento = 1;

    const contadorElement = document.querySelector('.descargas');

    // Función para incrementar el contador
    const incrementarContador = () => {
        if (contador < maxPedidos) {
            contador += incremento;
            contadorElement.textContent = contador;
        }
    };

    // Establecer un intervalo de 10 segundos
    setInterval(incrementarContador, 10000); // 10000 ms = 10 segundos
});
