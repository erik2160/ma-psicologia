const carrossel = document.querySelector(".carrossel");
const esquerda = document.querySelector(".seta.esquerda");
const direita = document.querySelector(".seta.direita");
const depoimentos = document.querySelectorAll(".depoimento");

let indexDepoimentos = 0;
let depoimentosVisiveis = calcularDepoimentosVisiveis();
const totalItems = depoimentos.length;

function calcularDepoimentosVisiveis() {
    return window.innerWidth <= 768 ? 1 : 2;
}

function atualizarCarrossel() {
    depoimentosVisiveis = calcularDepoimentosVisiveis();
    const largura = document.querySelector(".carrossel-wrapper").offsetWidth;
    const scroll = indexDepoimentos * (largura / depoimentosVisiveis);
    carrossel.style.transform = `translateX(-${scroll}px)`;
}

esquerda.addEventListener("click", () => {
    if (indexDepoimentos > 0) {
        indexDepoimentos--;
        atualizarCarrossel();
    }
});

direita.addEventListener("click", () => {
    if (indexDepoimentos < totalItems - depoimentosVisiveis) {
        indexDepoimentos++;
        atualizarCarrossel();
    }
});

window.addEventListener("resize", () => {
    // Atualiza o número de depoimentos visíveis ao redimensionar
    indexDepoimentos = 0;
    atualizarCarrossel();
});

// Inicialização
atualizarCarrossel();
