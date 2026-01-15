
/*nota: he intentado hacer de todo...la versioon anterior era más estimulante y si tenía cosillas de java,
pero esta es mucho más sencialla. Me habría gustado meter algun slider pero me funci¡onan fatal (algo estaré haciendo mal) y también animaciones 
de fade un asociada al scroll. NO ME SALE NADFA, SOCORRO*/

const archivoBtn = document.getElementById('archivoBtn');
const archivoPanel = document.getElementById('archivoPanel');
const flowTrack = document.getElementById("flowTrack");
const infoBar = document.querySelector("infoBar");
const navbar = document.querySelector(".navbar");

/* esto es del desplegable del archivo del antiguo documento*/

archivoBtn.addEventListener('click', () => {
    archivoPanel.classList.toggle('desplegar');
    document.body.classList.toggle("archivo-desplegado"); /* cambia color a blanco para contraste*/
    navbar.classList.toggle("arriba");  /* translada navbar arriba cuando estas en archivo!!*/
});

archivoPanel.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    archivoPanel.classList.remove('desplegar');
  });
})


/*carrousel en imagenes archivo, automático!!!
document.addEventListener("DOMContentLoaded", () => {
  new bootstrap.Carousel(
    document.querySelector("#slidernodo"),
    {
      interval: 1000,
      ride: "carousel"
    }
  );
});*/

/*sel = document.querySelector("#slidernodo"); este avanza con clic
const instance = bootstrap.Carousel.getInstance(carousel);

carousel.querySelectorAll(".carousel-click").forEach(img => {
  img.addEventListener("click", () => {
    instance.next();
  });
});*/



/*zoom intento. no funciona*/
const overlay = document.getElementById('overlay');
const overlayImg = document.getElementById('overlay-img');
const close = document.getElementById('close');
const body = document.body;

document.querySelectorAll('.zoom-img').forEach(img => {
  img.addEventListener('click', () => {
    overlay.style.display = 'flex';
    overlayImg.src = img.src;
  });
});

close.addEventListener('click', () => {
  overlay.style.display = 'none';
});

overlay.addEventListener('click', (e) => { /*cierra con clic fuera de la imagen*/
  if(e.target === overlay) {
    overlay.style.display = 'none';
  }
});

/*otro intento de efcto al cargar, nada SALE*/

/*document.addEventListener("DOMContentLoaded", () => {
  // Selecciona cada imagen con efecto blur
  const imgs = document.querySelectorAll(".blur-on-load");

  imgs.forEach(img => {
    // Crea elemento nuevo de Image para cargar
    const temp = new Image();
    temp.src = img.dataset.src;

    temp.onload = () => {
      // Cuando la imagen se carga, ponla como src real
      img.src = temp.src;
      img.style.opacity = "1";
      img.style.filter = "blur(0)";
    };
  });
});*/




/*al desplegar panel ocultar flow y info= pasando
if (archivoPanel.classList.contains("desplegar")) {
      infoBar.classList.add("ocultar");  // se oculta infoBar
      flow.classList.add("oculto");      // se oculta carrusel
    } else {
      infoBar.classList.remove("ocultar"); // reaparece infoBar
      flow.classList.remove("oculto");     // reaparece carrusel
    }
    

/*al desplegar panel ocultar carroulsel = funciona, pero el carrousel ensucia. quiza si
home es de otra forma puedes usarlo u mola

archivoBtn.addEventListener('click', () => {
    archivoPanel.classList.toggle('desplegar');

      flowTrack.classList.toggle(
      "oculto",
      archivoPanel.classList.contains("desplegar")
  );
    
});

boton.addEventListener("click", () => {
  panel.classList.toggle("desplegar");

  if (panel.classList.contains("desplegar")) {
    carrusel.classList.add("ocultar");
  } else {
    carrusel.classList.remove("ocultar");
  }
});*/


/*proyectos*

esto es un boton para subir, pero ñe
/*const scrollBtn = document.getElementById("scrollBtn"); /*para subir arriba

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 300) {
    scrollTopBtn.classList.add("show");
  } else {
    scrollTopBtn.classList.remove("show");
  }
});

scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});*/



