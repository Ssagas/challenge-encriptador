    let tEncriptado = "";
  
     //función para el botón encriptar
    function encriptar(){

        let cajaT = document.getElementById("caja-texto");
        let textoEncriptado = document.getElementById("texto-encriptado");
   
        let mensaje = document.getElementById ("msg");
        let img = document.getElementById ('imagen');   
        let btnCopiar = document.getElementById ("boton-copiar");
        
        let texto = cajaT.value;
        
        btnCopiar.style.display = "block";  
        textoEncriptado.style.display = "block";
        textoEncriptado.style.border= "none";
        if(img.style.display=="block") img.style.display = "none";
        mensaje.style.display = "none";
       

        var mayuscula = /[A-Z]/.test(texto);

    // Si el valor contiene algún caracter en mayúsculas, muestra una alerta y convierte el texto a minúsculas
    if (mayuscula) {
      alert("Solo se permiten caracteres en minúsculas");
      cajaT.value = texto.toLowerCase();
    }
       // textoEncriptado.value= encriptarTexto(cajaT.value, propiedades.length);
        textoEncriptado.value= encriptarTexto(cajaT.value);
    
    }
    
    //function encriptarTexto(texto,i){ 
      function encriptarTexto(texto){
    
           tEncriptado = texto.replaceAll("e", "enter");
           tEncriptado = tEncriptado.replaceAll("i", "imes");
           tEncriptado = tEncriptado.replaceAll("a","ai");
           tEncriptado = tEncriptado.replaceAll("o", "ober");
           tEncriptado = tEncriptado.replaceAll("u","ufat");
     return tEncriptado;

    }  
     
    //función del botón copiar

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
        texto.value= " ";
        texto.border="none";
        texto.style.border= "none";

    }

    //función del botón desencriptar

    function desencriptar(){
     
        let texto = document.getElementById("caja-texto");
        let tDesencriptado = document.getElementById("texto-encriptado");
        let textoDesencriptado=texto.value;
        textoDesencriptado=textoDesencriptado.replaceAll("ai","a");
        textoDesencriptado=textoDesencriptado.replaceAll("enter", "e");
        textoDesencriptado = textoDesencriptado.replaceAll("imes", "i");
        textoDesencriptado = textoDesencriptado.replaceAll("ober", "o");
        textoDesencriptado = textoDesencriptado.replaceAll("ufat","u");

        tDesencriptado.value=textoDesencriptado;
        texto.value="";
        tDesencriptado.style.border="none";

    }