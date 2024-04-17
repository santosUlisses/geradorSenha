const gerar = document.querySelector("#gerar");
const senhaDiv = document.querySelector(".senha");
const resultado = document.querySelector("#resultado");
const copiar = document.querySelector("#copiar");
const texto = document.querySelector("#texto");
const qtd = document.querySelector("#qtd");


const letras = "abcdefghijklmnopqrstuwxyz";
const numeros = () => {
    n = Math.floor(Math.random() * 10);
    return n;
}
const simbulos = () => {
    const symb = "!@#$%&";
    const d = symb[Math.floor(Math.random() * symb.length)];
    return d;
}
const caracteres = () => {
    let letra = letras[Math.floor(Math.random() * letras.length)];
    return letra;
}
const caracteresUp = () => {
    let letra = letras[Math.floor(Math.random() * letras.length)].toUpperCase();
    return letra;
}

gerar.addEventListener("click", () => {
    senhaDiv.style.display = "block";
    copiar.style.display = "block";

    let todos = [];
    while (todos.length <= qtd.value) {
        todos.push(numeros(), simbulos(), caracteres(), caracteresUp());
    }
    if (todos.length > qtd.value) {
        todos.splice(qtd.value);
    }
    if(!qtd.value){
        alert("CAMPO VAZIO");
    }
    let senha = todos.join("")
    resultado.textContent = senha;
    console.log(qtd.value);
    copiar.addEventListener('click', async () => {
        try {
            await navigator.clipboard.writeText(senha);
            texto.innerText = "TEXTO COPIADO COM SUCESSO";
            copiar.innerText = "Copiado"
            setTimeout(() => {
                texto.innerText = "";
                copiar.innerText = "Copiar";
            }, 800)
        } catch (err) {
            console.error('Erro ao copiar o texto: ', err);
        }
    });
});

