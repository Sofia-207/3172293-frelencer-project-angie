document.addEventListener("DOMContentLoaded", function () {
    const heroElement = document.querySelector(".hero-container");
    if (!heroElement) return;

    const heroFallback = `
        <div class="hero">
            <div class="hero__title">Diseño y Desarrollo Web-Freelancer</div>
            <p class="hero__location">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#50e5f9" aria-hidden="true">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M18.364 4.636a9 9 0 0 1 .203 12.519l-.203 .21l-4.243 4.242a3 3 0 0 1 -4.097 .135l-.144 -.135l-4.244 -4.243a9 9 0 0 1 12.728 -12.728zm-6.364 3.364a3 3 0 1 0 0 6a3 3 0 0 0 0 -6"></path>
                </svg>
                Pereira
            </p>
            <a class="hero_button">Contactar</a>
        </div>
    `;

    fetch("./views/components/hero.html")
        .then((response) => {
            if (!response.ok) throw new Error("No se pudo cargar hero.html");
            return response.text();
        })
        .then((data) => {
            heroElement.innerHTML = data;
        })
        .catch((error) => {
            console.log("error cargando el hero, usando fallback:", error);
            heroElement.innerHTML = heroFallback;
        });
});