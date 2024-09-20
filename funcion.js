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