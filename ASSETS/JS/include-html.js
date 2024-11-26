
//Declara la función includeHTML. Esta función se encargará de incluir contenido HTML desde otros archivos.
function includeHTML() {
  var z, i, elmnt, file, xhttp; //Declara varias variables (z, i, elmnt, file, xhttp) que se usarán más adelante en la función.
  
  z = document.getElementsByTagName("*");//document.getElementsByTagName("*") selecciona todos los elementos del DOM.
  for (i = 0; i < z.length; i++) {
    elmnt = z[i]; //Itera a través de todos los elementos encontrados. elmnt representa cada elemento en la colección durante cada iteración
  
    file = elmnt.getAttribute("include-html");//Verifica si el elemento actual tiene el atributo include-html. Si lo tiene, el valor de este atributo (la ruta del archivo HTML a incluir) se guarda en la variable file.
    if (file) {
      //Define una función de retorno de llamada (onreadystatechange) que se ejecutará cada vez que cambie el estado del XMLHttpRequest
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) { //significa que la solicitud se ha completado.
          if (this.status == 200) {elmnt.innerHTML = this.responseText;}//significa que la solicitud fue exitosa, y el contenido del archivo se inserta en el elemento actual (elmnt).
          if (this.status == 404) {elmnt.innerHTML = "Page not found.";}//maneja el caso en que el archivo no se encontró, mostrando un mensaje de error en el elemento actual.
          
          elmnt.removeAttribute("include-html");//Elimina el atributo include-html del elemento actual para evitar que se procese nuevamente, y llama a la función includeHTML nuevamente para procesar otros elementos potenciales que también tengan el atributo include-html.
          includeHTML();
        }
      }      
      xhttp.open("GET", file, true);//Configura la solicitud GET para recuperar el archivo especificado por file. true indica que la solicitud es asincrónica.
      xhttp.send();//Envía la solicitud HTTP.
      //Sale de la función para evitar que continúe procesando los elementos una vez que ha encontrado y procesado un elemento con el atributo include-html
      return;
    }
  }
};
includeHTML(); //llamamos a la funcion