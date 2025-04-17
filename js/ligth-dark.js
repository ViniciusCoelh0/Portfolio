// const btn = document.querySelector('.btn');
//         const darkmode = document.querySelector('.darkmode');

//         btn.onclick = function(){
//             document.body.classList.toggle('white-mode')
//             btn.classList.toggle('active')
//         }


// Seleciona o ícone do menu e o menu em si
const btnMenuMobile = document.querySelector(".btn-menu-mobile");
const menuMobile = document.querySelector(".menu-mobile");

// Alterna a classe "active" ao clicar no ícone
btnMenuMobile.addEventListener("click", () => {
    menuMobile.classList.toggle("active");
});

// Fecha o menu ao clicar em um link dentro dele
document.querySelectorAll(".menu-mobile a").forEach(link => {
    link.addEventListener("click", () => {
        menuMobile.classList.remove("active");
    });
});
