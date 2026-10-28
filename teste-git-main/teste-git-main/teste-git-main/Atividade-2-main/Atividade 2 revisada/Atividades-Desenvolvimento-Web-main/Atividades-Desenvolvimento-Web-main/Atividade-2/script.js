const menu = document.querySelector(".menu nav");
const links = document.querySelectorAll(".menu nav a");
const indicador = document.querySelector(".indicador");

function moverIndicador(link) {
    const posicao = link.offsetLeft;
    const largura = link.offsetWidth;

    indicador.style.left = posicao + "px";
    indicador.style.width = largura + "px";
}

const linkAtivo = document.querySelector(".menu nav a.ativo");

if (linkAtivo) {
    moverIndicador(linkAtivo);
}

links.forEach(function(link) {
    link.addEventListener("mouseenter", function() {
        moverIndicador(link);
    });
});

menu.addEventListener("moseleave", function() {
    if (linkAtivo) {
        moverIndicador(linkAtivo);        
    }
});