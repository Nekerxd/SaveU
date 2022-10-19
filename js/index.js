const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#btn-menu");
const closeBtn = document.querySelector("#btn-fechar");
const modoNoturno = document.querySelector(".modo-noturno")

// Mostrar barra lateral
menuBtn.addEventListener('click', () => {
    sideMenu.style.display = 'block';
})

// Fechar barra lateral
closeBtn.addEventListener('click', () => {
    sideMenu.style.display = 'none';
})

// Modo Noturno
modoNoturno.addEventListener('click', () => {
    document.body.classList.toggle('modo-noturno-escuro');

    modoNoturno.querySelector('span:nth-child(1)').classList.toggle('active');
    modoNoturno.querySelector('span:nth-child(2)').classList.toggle('active');
})