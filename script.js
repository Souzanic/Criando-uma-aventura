// Seleciona todos os botões
const botoes = document.querySelectorAll(".btn-proximo");

botoes.forEach(botao => {
  botao.addEventListener("click", () => {
    const proximo = botao.getAttribute("data-proximo");

    // esconde o passo atual
    const passoAtual = botao.parentElement;
    passoAtual.classList.remove("ativo");

    // mostra o próximo
    const passoProximo = document.getElementById("passo-" + proximo);
    passoProximo.classList.add("ativo");
  });
});
