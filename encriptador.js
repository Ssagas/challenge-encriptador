 //document.addEventListener("DOMContentLoaded", function() {
    
    let tEncriptado = "";

    let reglasEncriptador = {  //declarando el objeto para realizar la encriptación
        "a" : "ai",
        'e': 'enter',
        'i': 'imes',
        'o': 'ober',
        'u': 'ufat',
    };

    let propiedades = Object.keys(reglasEncriptador);
    
    function btnEncriptar(){

        let cajaT = document.getElementById("caja-texto");
        let textoEncriptado = document.getElementById("texto-encriptado");
   
        let mensaje = document.getElementById ("msg");
        let img = document.getElementById ('imagen');   
        let btnCopiar = document.getElementById ("boton-copiar");

        textoEncriptado.style.display = "block";
        if(img.style.display=="block") img.style.display = "none";
        mensaje.style.display = "none";
        btnCopiar.style.display = "block";
        
        
        textoEncriptado.value= encriptarTexto(cajaT.value, propiedades.length);
        
    }
    
    function encriptarTexto(texto,i){
        if((i<=propiedades.length)&&(i!=0)){
            tEncriptado = texto.replaceAll(propiedades[i-1], reglasEncriptador[propiedades[i-1]]);
            i--;
            if (i>=0) encriptarTexto(tEncriptado, i);
        } 
           return tEncriptado;
    }  //end de la funcion encriptarTexto
  //});
    
  
    
     




