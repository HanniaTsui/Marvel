 //Funcionalidad del boton de Menu
 document.addEventListener("DOMContentLoaded", function() {
    const btnRojo = document.querySelector(".btnRojo"); // Selecciona el botón
    const menuDesplegable = document.querySelector("#menuDesplegable"); // Selecciona el menú desplegable
    const menuItems = menuDesplegable.querySelectorAll("a"); // Selecciona todos los elementos de menú dentro del menú desplegable


    // Función para alternar la visibilidad del menú desplegable
    function toggleMenu() {
        if (menuDesplegable.style.display === "block") {
            menuDesplegable.style.display = "none";
        } else {
            menuDesplegable.style.display = "block";
        }
    }

    // Maneja el clic en el botón
    btnRojo.addEventListener("click", function(event) {
        event.stopPropagation(); // Previene que el clic en el botón cierre el menú inmediatamente
        toggleMenu();
    });

    // Maneja el clic en el documento
    document.addEventListener("click", function(event) {
        // Verifica si el clic se realizó fuera del botón y del menú
        if (!btnRojo.contains(event.target) && !menuDesplegable.contains(event.target)) {
            menuDesplegable.style.display = "none";
        }
    });

    // Maneja el clic en los elementos del menú
    menuItems.forEach(item => {
    item.addEventListener("click", function() {
        menuDesplegable.style.display = "none";
    });
});
    
});


//Contador de comics (Lista de lectura)
document.addEventListener("DOMContentLoaded", function() {
    const totalComics = document.querySelectorAll('.lect ').length;
    document.getElementById('totalComics').textContent = totalComics;
});



function filtrar() {
    //Declarar variables
    var input, filter, ul, listElements, i, txtValue;
    input = document.getElementById("search-input");
    filter = input.value.toUpperCase();
    ul = document.getElementById("elementos");
    listElements = ul.getElementsByTagName("li");
    var comics = document.querySelectorAll('.imagen');
  
    // Mostrar la lista solo si hay texto en el campo de entrada
  if (filter.length > 0) {
    ul.style.display = ""; // Muestra la lista

    // Recorrer todos los elementos de la lista y ocultar los que no coinciden
    for (i = 0; i < listElements.length; i++) {
      txtValue = listElements[i].textContent || listElements[i].innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        listElements[i].style.display = "none"; // Mantiene la lista oculta
      } else {
        listElements[i].style.display = "none"; // Oculta los que no coinciden
      }
    }

    // Filtrar cómics
    comics.forEach(function(comic) {
      var comicTitle = comic.getAttribute('data-title').toUpperCase();
      if (comicTitle.indexOf(filter) > -1) {
        comic.style.display = ""; // Muestra los cómics que coinciden
      } else {
        comic.style.display = "none"; // Oculta los que no coinciden
      }
    });
  } else {
    ul.style.display = "none"; // Oculta la lista si el campo de entrada está vacío
        comics.forEach(function(comic) {
        comic.style.display = ""; // Muestra todos los cómics si no hay filtro
    });
  }
}

// Agregar el evento de clic a los enlaces
document.querySelectorAll('#myUL a').forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault(); // Evitar el comportamiento predeterminado del enlace
      var targetId = this.getAttribute('href').substring(1); // Obtener el id del cómic
      
      // Limpiar el resaltado de todos los cómics
      document.querySelectorAll('.imagen').forEach(comic => {
        comic.classList.remove('highlight');
      });
  
      // Agregar la clase de resaltado al cómic seleccionado
      var targetComic = document.getElementById(targetId);
      if (targetComic) {
        targetComic.classList.add('highlight');
      }
    });
  });
  


  