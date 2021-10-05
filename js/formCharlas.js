
function mostrarAlertaEnviado() {
    var mensaje = 'Formulario Enviado'
    console.log(mensaje);
    alert(mensaje);  
    document.getElementById("form-charla").reset();
}



function ValidarDatos(){
    var nombre = document.getElementById("name");
    var dirigidoA = document.getElementById("list-dirigida");
    var telefono = document.getElementById("tel");
    var textareaDescrip = document.getElementById("Descripcioncaso");
    var cntCamposVacios = new Object ();
    cntCamposVacios.num = 0
 
    
    if(nombre.value == ''){
        nombre.classList.add("error");
        cntCamposVacios.num =+ 1;
    }else{
        nombre.classList.add("success");
    }
    if(dirigidoA.value === '1'){
        dirigidoA.classList.add("error");
        cntCamposVacios.num =+ 1;
    }else{
        dirigidoA.classList.add("success");
    }
    if(textareaDescrip.value == ''){
        textareaDescrip.classList.add("error");
        cntCamposVacios.num =+ 1;
    }else{
        textareaDescrip.classList.add("success");
    }
    if(telefono.value == ''){
        telefono.classList.add("error");
        cntCamposVacios.num =+ 1;
    }else{
        telefono.classList.add("success");
    }
    if ( cntCamposVacios.num  > 0) {
        var mensaje = 'Formulario Incompleto'
        console.log(mensaje);
        alert(mensaje); 
    }   
}

