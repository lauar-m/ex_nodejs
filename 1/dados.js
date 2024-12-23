function jogarDados() {
  return Math.floor(Math.random() * 6) + 1;
}

let dado1 = jogarDados();
let dado2 = jogarDados();

let somar = dado1 + dado2;

console.log(`Dado 1: ${dado1}`);
console.log(`Dado 2: ${dado2}`);
console.log(`Soma dos dados: ${somar}`);
