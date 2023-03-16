/* OBJETIVO - quando clicarmos no botão temos que mostrar a imagem de fundo correspondente

PASSO 1 - dar um jeito de pegar o elemento HTM: dos botões
PASSO 2 - dar um jeito de identificar o clique o usuário no botão
PASSO 3 - desamarcar o botão selecionado anterior
PASSO 4 - marcar o botão clicado como se estivesse selecionada
PASSO 5 - esconder a imagem ativa de fundo anterior
PASSO 6 - fazer aparecer a imagem de fundo correspondente */

//PASSO 1 - dar um jeito de pegar o elemento HTM: dos botões
const botoesCarrosel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem');

//PASSO 2 - dar um jeito de identificar o clique o usuário no botão
botoesCarrosel.forEach((botao, indice) => {
  botao.addEventListener('click', () => {
    //PASSO 3 - desamarcar o botão selecionado anterior
    desativarBotaoSelecionado();

    //PASSO 4 - marcar o botão clicado como se estivesse selecionada
    selecionarBotaoCarrousel(botao);

    //PASSO 5 - esconder a imagem ativa de fundo anterior
    esconderImagemAtiva();

    // PASSO 6 - fazer aparecer a imagem de fundo correspondente
    mostrarImagemDeFundo(indice);
  })
})

function selecionarBotaoCarrousel(botao) {
  botao.classList.add('selecionado');
}

function mostrarImagemDeFundo(indice) {
  imagens[indice].classList.add('ativa');
}

function desativarBotaoSelecionado() {
  const botaoSelecionado = document.querySelector('.selecionado');
  botaoSelecionado.classList.remove('selecionado');
}

function esconderImagemAtiva() {
  const imagemAtiva = document.querySelector('.ativa');
  imagemAtiva.classList.remove('ativa');
}

