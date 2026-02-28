document.addEventListener('DOMContentLoaded', () => {
    // --- 1. LÓGICA DEL MENÚ (Lo que ya te funciona) ---
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // --- 2. LÓGICA DE EFECTOS AL BAJAR (Scroll) ---
    const elementos = document.querySelectorAll('.revelar');

    const aparecerAlHacerScroll = () => {
        elementos.forEach(el => {
            const posicionElemento = el.getBoundingClientRect().top;
            const alturaPantalla = window.innerHeight / 1.2;

            if (posicionElemento < alturaPantalla) {
                el.classList.add('activo');
            }
        });
    };

    window.addEventListener('scroll', aparecerAlHacerScroll);
    aparecerAlHacerScroll(); // Para que detecte los que ya están a la vista
});