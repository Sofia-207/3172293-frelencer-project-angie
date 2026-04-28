// logica para cargar el componente navbar

document.addEventListener("DOMContentLoaded", function(){
    const navbarElement = document.querySelector(".navbar-container")

    if(!navbarElement) return;

        fetch("./views/components/navbar.html")
        // La respuesta la convierte al texto plano 
        .then(response => response.text())

        //Inserta el contenido html del navbar en el contenedor correspondiente 

        .then(data => {
            navbarElement.innerHTML = data;

        const currentPage = window.location.pathname.split("/").pop() || 
        "index.html"

        const navLinks = navbarElement.querySelectorAll(".navbar__link");

        navLinks.forEach(link => {
            // Verifica si el href del enlace incluye el nombre de la pagina actual 
            if (link.getAttribute("href")?.includes(currentPage)){
                link.classList.add("active");
                }
            });
        })
        .catch (error => console.log ("error cargando el navbar",error));

    });