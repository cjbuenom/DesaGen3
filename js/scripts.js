var arrComentarios = [];
var mensaje = 'Comentario agregado'
function addComentario(){
   
    var titulo = document.getElementById("ptitle").value;
    var comentario = document.getElementById("textoComentario").value;

    var objProduct = new Object();
    objProduct.titulo = titulo;
    objProduct.comentario = comentario;

    arrComentarios.push(objProduct);

    setComentario();
}

function mostrarAlerta() {    
    console.log(mensaje);
    alert(mensaje);        
}

function setComentario(){
    var diVContainer = document.getElementById("divcomentarios");
    diVContainer.innerHTML = "";
    for(var i = 0; i < arrComentarios.length; i++){
        var sectiontitulo = document.createElement("section");
        var divContComent = document.createElement("div");
        var aTitComen = document.createElement("a");
        var pComen = document.createElement("p");

        sectiontitulo.setAttribute("class", "description-Comentario");
        divContComent.setAttribute("class", "contenedor-titulo-Coment");
        aTitComen.setAttribute("class", "title-Coment");        
        aTitComen.innerHTML = arrComentarios[i].titulo;
        pComen.innerHTML = arrComentarios[i].comentario;

        sectiontitulo.appendChild(divContComent);
        divContComent.appendChild(aTitComen);
        sectiontitulo.appendChild(pComen);
        
        diVContainer.appendChild(sectiontitulo);
        
    }
    mostrarAlerta()
    document.getElementById("EmergenteComentario").reset();
    var modal = document.getElementById("myModalComentarios");    
    modal.style.display = "none"
}


function Slider_tools() {
    const IMAGENES = [
        'imagenes/tools1.png',
        'imagenes/tools2.png',
        'imagenes/tools3.png',
        'imagenes/tools4.png',
        'imagenes/tools5.png',
        'imagenes/tools6.png'
    ];

    const TIEMPO_INTERVALO_MILESIMAS_SEG = 1000;
    let posicionActual = 0;
    let $botonRetroceder = document.querySelector('#retroceder');
    let $botonAvanzar = document.querySelector('#avanzar');
    let $imagen = document.querySelector('#imagen');
    let $botonPlay = document.querySelector('#play');
    let $botonStop = document.querySelector('#stop');
    let intervalo;

    // Funciones

    /**
     * Funcion que cambia la foto en la siguiente posicion
     */
    function pasarFoto() {
        if(posicionActual >= IMAGENES.length - 1) {
            posicionActual = 0;
        } else {
            posicionActual++;
        }
        renderizarImagen();
    }

    /**
     * Funcion que cambia la foto en la anterior posicion
     */
    function retrocederFoto() {
        if(posicionActual <= 0) {
            posicionActual = IMAGENES.length - 1;
        } else {
            posicionActual--;
        }
        renderizarImagen();
    }

    /**
     * Funcion que actualiza la imagen de imagen dependiendo de posicionActual
     */
    function renderizarImagen () {
        $imagen.style.backgroundImage = `url(${IMAGENES[posicionActual]})`;
    }

    /**
     * Activa el autoplay de la imagen
     */
    function playIntervalo() {
        intervalo = setInterval(pasarFoto, TIEMPO_INTERVALO_MILESIMAS_SEG);
        // Desactivamos los botones de control
        $botonAvanzar.setAttribute('disabled', true);
        $botonRetroceder.setAttribute('disabled', true);
        $botonPlay.setAttribute('disabled', true);
        $botonStop.removeAttribute('disabled');

    }

    /**
     * Para el autoplay de la imagen
     */
    function stopIntervalo() {
        clearInterval(intervalo);
        // Activamos los botones de control
        $botonAvanzar.removeAttribute('disabled');
        $botonRetroceder.removeAttribute('disabled');
        $botonPlay.removeAttribute('disabled');
        $botonStop.setAttribute('disabled', true);
    }

    // Eventos
    $botonAvanzar.addEventListener('click', pasarFoto);
    $botonRetroceder.addEventListener('click', retrocederFoto);
    $botonPlay.addEventListener('click', playIntervalo);
    $botonStop.addEventListener('click', stopIntervalo);
    // Iniciar
    renderizarImagen();
} 
    








