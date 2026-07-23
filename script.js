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

const form = document.getElementById("contact-form");

if (form) {

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        emailjs.sendForm(
            "service_vpb56zq",
            "template_gaczacm",
            this
        )

        .then(() => {

            alert("Mensagem enviada com sucesso!");
            form.reset();

        })

        .catch((error) => {

            console.error(error);
            alert("Erro ao enviar a mensagem.");

        });

    });

}
