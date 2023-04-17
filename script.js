function palindromo(frase){
    //buscar elementos
    let fraseUser = document.getElementById("frase").value;
    let resultado = document.getElementById("resultado");
    //limpar frase user
    let fraseLimpa = fraseUser.split(/\s+/).join("").replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '').toLowerCase();
    //inverter a frase
    let fraseInversa = fraseLimpa.split("").reverse().join("").replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '').toLowerCase();

    if (fraseLimpa === fraseInversa){
        resultado.innerHTML =
            "Esta frase é um palíndromo. <br>Frase original: " +
            fraseLimpa +
            "<br>Frase inversa: " +
            fraseInversa;  
    } else {
        resultado.innerHTML =
            "Esta frase não é um palíndromo. <br>Frase original: " +
            fraseLimpa +
            "<br>Frase inversa: " +
            fraseInversa;  
    }

    document.getElementById("formulario").addEventListener("submit", function (event) {
        event.preventDefault(); // evita que a página seja recarregada
    });
}


document.addEventListener("DOMContentLoaded", function () {
    const botao = document.getElementById("botao");
    const body = document.getElementById("body");
    const botaoDia = "images/botao_dia.png";
    const botaoNoite = "images/botao_noite.png";

    botao.addEventListener("click", function () {
        if (botao.getAttribute("src") === botaoDia) {
            botao.setAttribute("src", botaoNoite);
            body.style.backgroundColor = "black";
        } else {
            botao.setAttribute("src", botaoDia);
            body.style.backgroundColor = "white";
        }
    });
});
