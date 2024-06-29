const elementoTexto = document.getElementById("texto");
const elementoVelocidade = document.getElementById("velocidade");
const texto = "Nós Amamos Programação!";

let indice = 1;
let velocidade = 300 / elementoVelocidade.value;

function escreverTexto() {
    elementoTexto.innerText = texto.slice(0, indice);

    indice++;

    if (indice > texto.length) {
        indice = 1;
    }

    setTimeout(escreverTexto, velocidade);
}

escreverTexto();

elementoVelocidade.addEventListener(
    "input",
    (evento) => (velocidade = 300 / evento.target.value)
);
