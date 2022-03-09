// variáveis
let canvas, ctx, ALTURA, LARGURA, frames = 0, maxPulos = 3,

// variável que cria o chão do ambiente
chao = {
  y: 550,
  altura: 50,
  cor: "#ffdf70",

  desenha: function() {
    ctx.fillStyle = this.cor;
    ctx.fillRect(0, this.y, LARGURA, this.altura);
  }
},

// variável que cria o bloco do jogo
bloco = {
  x: 50,
  y: 0,
  altura: 50,
  largura: 50,
  cor: "#ff4e4e",
  gravidade: 2.5,
  velocidade: 0,
  forcaDoPulo: 25,
  qntPulos: 0,

  // atualiza a posição do bloco com base na gravidade e na velocidade
  atualiza: function() {
    this.velocidade += this.gravidade;
    this.y += this.velocidade;

    // incapacita o bloco de atravessar o chão
    if (this.y > chao.y - this.altura) {
      this.y = chao.y - this.altura;
      this.qntPulos = 0;
    }
  },

  // faz o bloco pular
  pula: function() {
    if (this.qntPulos < maxPulos) {
      this.velocidade = -this.forcaDoPulo;
      this.qntPulos++;
    }
  },

  desenha: function() {
    ctx.fillStyle = this.cor; // usa a cor desse objeto no bloco
    ctx.fillRect(this.x, this.y, this.largura, this.altura); // usa as dimenções desse objeto no bloco
  },
};

function click(event) {
  // alert("clicou"); // teste
  bloco.pula(); // faz o bloco pular
};

// função responsável por inicializar o jogo
function main() {
  ALTURA = window.innerHeight;
  LARGURA = window.innerWidth;

  if (LARGURA >= 500) {
    LARGURA = 600;
    ALTURA = 600;
  }

  // cria a tela do jogo
  canvas = document.createElement("canvas");
  canvas.width = LARGURA;
  canvas.height = ALTURA;
  canvas.style.border = "1px solid #000";

  ctx = canvas.getContext("2d");
  document.body.appendChild(canvas);
  document.addEventListener("mousedown", click);

  roda();
};

// função responsável por fazer o jogo rodar
function roda() {
  atualiza();
  desenha();

  // chama a função a cada 1/60 segundos
  window.requestAnimationFrame(roda);
};

// função responsável por atualizar o jogo
function atualiza() {
  frames++;
  
  bloco.atualiza(); // atualiza o bloco do jogo
};

function desenha() {
  ctx.fillStyle = "#50beff"; // fundo em tom azul
  ctx.fillRect(0, 0, LARGURA, ALTURA); // pinta todo o fundo da canvas

  chao.desenha(); // cria o chão do ambiente
  bloco.desenha(); // cria o bloco do jogo
};

// inicializa o jogo
main();
