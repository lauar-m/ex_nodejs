function jogarDados(){
    return Math.floor (Math.random() * 6 ) + 1 ;
}

/*Escreva um script para simular dois dados de 6 lados sendo lançados. O script deve “jogar” os dois dados até que a soma dos dois seja um número par ou maior que 10. 
Para cada jogada, exibir o valor de cada dado individual e também exibir a soma dos dois dados.  */
const dado1 = jogarDados();
const dado2 = jogarDados();

const somar = dado1 + dado2;



/*
const somar = dado1 + dado2;
console.log(`Dado 1: ${dado1}`);
console.log(`Dado 2: ${dado2}`);
console.log(`Soma dos dados: ${somar}`);
*/