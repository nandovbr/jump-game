// variáveis do jump game
var canvas, ctx, ALTURA, LARGURA, frames = 0;

function click(event) {
  alert("clicou");
};

function main() {
  ALTURA = window.innerHeight;
  LARGURA = window.innerWidth;

  if (LARGURA >= 500) {
    LARGURA = 600;
    ALTURA = 600;
  }

  canvas = document.createElement("canvas");
  canvas.width = LARGURA;
  canvas.height = ALTURA;
  canvas.style.border = "1px solid #000";

  ctx = canvas.getContext("2d");
  document.body.appendChild(canvas);
  document.addEventListener("mousedown", click);

  roda();
};

function roda() {
  atualiza();
  desenha();

  window.requestAnimationFrame(roda);
};

function atualiza() {
  frames++;

};

function desenha() {
  ctx.fillStyle = "#50beff"; // fundo em tom azul
  ctx.fillRect(0, 0, LARGURA, ALTURA); // pinta todo o fundo da canvas
};

// inicializa o jogo
main();