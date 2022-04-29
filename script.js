var jogador,
  vencedor = null;
var jogadorSelecionado = document.getElementById('jogador-selecionado');
var vencedorSelecionado = document.getElementById('vencedor-selecionado');
var quadrados = document.getElementsByClassName('quadrado');

mudarJogador('X');

function escolherQuadrado(id) {
  if (vencedor !== null) {
    return;
  }

  var quadrado = document.getElementById(id);
  if (quadrado.innerHTML !== '-') {
    return;
  }

  quadrado.innerHTML = jogador;
  quadrado.style.color = '#000';

  if (jogador === 'X') {
    jogador = 'O';
    quadrado.style.color = '#837acb';
  } else {
    jogador = 'X';
    quadrado.style.color = '#e682a7';
  }

  mudarJogador(jogador);
  verificarVencedor();
}

function mudarJogador(valor) {
  jogador = valor;
  jogadorSelecionado.innerHTML = jogador;
}

function verificarVencedor() {
  var quadrado1 = document.getElementById(1);
  var quadrado2 = document.getElementById(2);
  var quadrado3 = document.getElementById(3);
  var quadrado4 = document.getElementById(4);
  var quadrado5 = document.getElementById(5);
  var quadrado6 = document.getElementById(6);
  var quadrado7 = document.getElementById(7);
  var quadrado8 = document.getElementById(8);
  var quadrado9 = document.getElementById(9);

  if (verificarSequencia(quadrado1, quadrado2, quadrado3)) {
    corQuadradoVencedor(quadrado1, quadrado2, quadrado3);
    mostrarVencedor(quadrado1);
    return;
  }

  if (verificarSequencia(quadrado4, quadrado5, quadrado6)) {
    corQuadradoVencedor(quadrado4, quadrado5, quadrado6);
    mostrarVencedor(quadrado5);
    return;
  }

  if (verificarSequencia(quadrado7, quadrado8, quadrado9)) {
    corQuadradoVencedor(quadrado7, quadrado8, quadrado9);
    mostrarVencedor(quadrado7);
    return;
  }

  if (verificarSequencia(quadrado1, quadrado4, quadrado7)) {
    corQuadradoVencedor(quadrado1, quadrado4, quadrado7);
    mostrarVencedor(quadrado1);
    return;
  }

  if (verificarSequencia(quadrado2, quadrado5, quadrado8)) {
    corQuadradoVencedor(quadrado2, quadrado5, quadrado8);
    mostrarVencedor(quadrado2);
    return;
  }

  if (verificarSequencia(quadrado3, quadrado6, quadrado9)) {
    corQuadradoVencedor(quadrado3, quadrado6, quadrado9);
    mostrarVencedor(quadrado3);
    return;
  }

  if (verificarSequencia(quadrado1, quadrado5, quadrado9)) {
    corQuadradoVencedor(quadrado1, quadrado5, quadrado9);
    mostrarVencedor(quadrado1);
    return;
  }

  if (verificarSequencia(quadrado3, quadrado5, quadrado7)) {
    corQuadradoVencedor(quadrado3, quadrado5, quadrado7);
    mostrarVencedor(quadrado3);
    return;
  }
}

function mostrarVencedor(quadrado) {
  vencedor = quadrado.innerHTML;

  if (vencedor == 'X') {
    chamada.innerHTML = 'Vencedor: X!';
    placarDoX = +scorex.innerHTML;
    scorex.innerHTML = placarDoX + 1;
  } else if (vencedor == 'O') {
    chamada.innerHTML = 'Vencedor: O!';
    placarDoO = +scoreo.innerHTML;
    scoreo.innerHTML = placarDoO + 1;
  }
}

function corQuadradoVencedor(quadrado1, quadrado2, quadrado3) {
  quadrado1.style.background = '#8bff8b';
  quadrado2.style.background = '#8bff8b';
  quadrado3.style.background = '#8bff8b';
}

function verificarSequencia(quadrado1, quadrado2, quadrado3) {
  if (
    quadrado1.innerHTML !== '-' &&
    quadrado1.innerHTML === quadrado2.innerHTML &&
    quadrado2.innerHTML === quadrado3.innerHTML
  ) {
    var eigual = true;
  }
  return eigual;
}

function reiniciar() {
  vencedor = null;
  vencedorSelecionado.innerHTML = '';

  for (var i = 1; i <= 9; i++) {
    var quadrado = document.getElementById(i);
    quadrado.style.background = '#dcdcdc';
    quadrado.style.color = '#dcdcdc';
    quadrado.innerHTML = '-';
    chamada.innerHTML = '';
  }
  mudarJogador('X');
}
function reset() {
  location.reload();
}

function changeMode() {
  var element = document.body;
  element.classList.toggle('dark-mode');
}
