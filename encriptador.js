    let tEncriptado = "";

    let reglasEncriptador = {  //declarando el objeto para realizar la encriptación
        "a" : "ai",
        'e': 'enter',
        'i': 'imes',
        'o': 'ober',
        'u': 'ufat',
    };

    let propiedades = Object.keys(reglasEncriptador);
    
    function encriptar(){

        let cajaT = document.getElementById("caja-texto");
        let textoEncriptado = document.getElementById("texto-encriptado");
   
        let mensaje = document.getElementById ("msg");
        let img = document.getElementById ('imagen');   
        let btnCopiar = document.getElementById ("boton-copiar");
        
        btnCopiar.style.display = "block";  
        textoEncriptado.style.display = "block";
        textoEncriptado.style.border= "none";
        if(img.style.display=="block") img.style.display = "none";
        mensaje.style.display = "none";
       
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
     
    function copyText() {
      
        /* Select text area by id*/
        var texto = document.getElementById("texto-encriptado");
        let cajaTexto = document.getElementById("caja-texto")

        /* Select the text inside text area. */
        texto.select();

        /* Copy selected text into clipboard */
        navigator.clipboard.writeText(texto.value);

        /* Set the copied text as text for 
        div with id clipboard */

        cajaTexto.value = texto.value;
        texto.value= "";

        document.getElementById("clipboard")
            .innerHTML = texto.value;
    }



