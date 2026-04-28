document.addEventListener("DOMContentLoaded", function(){
    const form = document.querySelector(".services__form-container");

    if(!form) return;

        fetch("./views/components/contact-form.html")
        .then(response => response.text())
        .then(data => {
            form.innerHTML = data;
        })
        .catch (error => console.log ("error cargando el formulario",error));

    });