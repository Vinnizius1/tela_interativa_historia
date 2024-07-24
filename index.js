const prompt = require("prompt-sync")({ sigint: true });

const Heroi = require("./classes/heroi");
const Vilao = require("./classes/vilao1");

/* INTRODUÇÃO DO JOGO */
console.log();
console.log("NOME DO JOGO");
console.log();
console.log(
  "Bem-vindo jogador, este é o seu jogo de aventura e ação! As suas atitudes importarão e um bom número sorteado no dado também... prepare-se!"
);
console.log();
console.log(
  "Mas primeiro, precisamos criar o seu personagem, ou melhor, o seu herói que salvará a si mesmo e a sua princesa amada."
);
console.log();

/* INTRODUÇÃO/CRIAÇÃO DO PERSONAGEM COM NOME E HABILIDADE ÚNICA */
console.log("APRESENTAÇÃO DO PERSONAGEM");
let nomeDoHeroi;
do {
  nomeDoHeroi = prompt("Diga o nome dele: ");
} while (nomeDoHeroi.trim() === "");
console.log();

// Nome do herói criado após a validação de "espaço vazio"
console.log(
  `Certo, ${nomeDoHeroi}! Agora, em qual habilidade ele mais se destacará? \n`
);
console.log("1. Força");
console.log("2. Sabedoria\n");

// Função que retornará a habiliade escolhida (forçará o usuário a digitar corretamente)
function obterHabilidadeValida() {
  let habilidadeDoHeroi;
  do {
    habilidadeDoHeroi = prompt("Digite a opção desejada (1 ou 2): ");
  } while (habilidadeDoHeroi !== "1" && habilidadeDoHeroi !== "2");
  return habilidadeDoHeroi;
}
console.log();

const habilidadeDoHeroi = obterHabilidadeValida();
const habilidades = ["Força", "Sabedoria"];
const habilidadeEscolhida = habilidades[habilidadeDoHeroi - 1];

// Função que retornará a "criação do objeto herói"
function criarHeroi(nome, habilidade) {
  // variáveis que se alterarão de acordo com a escolha da "habilidade" feita pelo usuário
  let vida, forca;
  if (habilidade === "Força") {
    vida = 70;
    forca = 100;
  } else {
    vida = 100;
    forca = 70;
  }
  // Aqui criamos o "heroi" de acordo com a habilidade escolhida, se "Força" terá menos "vida" e mais "forca", se "Sabedoria" será o oposto disso
  return new Heroi(vida, nome, 100, forca);
}

console.log(`\nHerói criado com sucesso!
Nome: ${nomeDoHeroi}
Habilidade: ${habilidadeEscolhida}`);
console.log();

const heroi = criarHeroi(nomeDoHeroi, habilidadeEscolhida);
console.log(heroi);
// console.log(
//   "O ano era 500 d.C., quando os reis eram respeitados por sua bravura e, acima de tudo, justiça... Não muito distante das terras áridas de 'Sequidão', um jovem nenhum, jamais conhecido fora de sua simples e pequena vila, 'Pequenez', decidiu mudar a sua vida de uma forma radical e inesperada: tomou rumo pela estrada chamada 'Estreita', uma estrada muito, muito perigosa..."
// );
