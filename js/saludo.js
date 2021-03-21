"use strict"
/*
"use strict"

var forma = document.getElementById("forma");
    salida = document.getElementById("salida");


    forma.addEventListener("input", salida, false);

    function saludar(){
        var nombre1 = forma["nombre1"].value.trim();
        var nombre2 = forma["nombre2"].value.trim();

        salida.textContent="Saludos a " + nombre1 + " y a " + nombre2;
   alert(nombre2 + " y a " + nombre1);

    }


      
    saludar();*/

    "use strict";
var forma = document.getElementById("forma"),
    campos =  ["nombre", "secreto", "navegador", "email", "usuario",
               "url", "telefono"],
    salidas = ["salidaNombre", "salidaSecreto", "salidaNavegador", 
               "salidaEmail", "salidaUsuario", "salidaUrl", "salidaTelefono"];

 

forma.addEventListener("submit", procesa, false);

 

function procesa(){
    for (var i = 0, longitud = campos.length; i < longitud; i++) {
        var campo = forma[campos[i]];
        var salida = document.getElementById(salidas[i]);
        salida.value = campo.value;
    }
    var nombre = forma["nombre"].value;
    forma["nombre"].value = "Hola "+ nombre;
    
}
