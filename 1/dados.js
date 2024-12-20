function jogarDados() {
  return Math.floor(Math.random() * 6) + 1;
}

const dado1 = jogarDados();
const dado2 = jogarDados();

const somar = dado1 + dado2;

console.log(`Dado 1: ${dado1}`);
console.log(`Dado 2: ${dado2}`);
console.log(`Soma dos dados: ${somar}`);
