// Efeito de digitação no título
const texto = "Leonardo Vasconcelos";
let i = 0;

function escrever() {
    if (i < texto.length) {
        document.querySelector(".nome").innerHTML += texto.charAt(i);
        i++;
        setTimeout(escrever, 100);
    }
}

window.onload = escrever;


// Botão de contato
const botao = document.querySelector("#contato");

if (botao) {
    botao.addEventListener("click", () => {
        alert("Obrigado por visitar meu portfólio!");
    });
}


// Animação ao rolar a página
const elementos = document.querySelectorAll(".animar");

function aparecer() {
    elementos.forEach(elemento => {
        const altura = elemento.getBoundingClientRect().top;

        if (altura < window.innerHeight - 100) {
            elemento.classList.add("mostrar");
        }
    });
}

window.addEventListener("scroll", aparecer);
aparecer();