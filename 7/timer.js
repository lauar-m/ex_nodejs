/**Escreva um script para simular um temporizador. O usuário deve inserir um valor de tempo em segundos. 
 * Após a duração desses segundos, o script deve informar ao usuário que o tempo escolhido acabou. */

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const calculaTimer = valorSegundos => {
    let valorSobra = Number(valorSegundos);
    
    // setInterval(function, milliseconds)
    const timer = setInterval(() => {
        if (valorSobra > 0){
            console.log(`Falta: ${valorSobra} segundos`);
            valorSobra--;
        } else {
            clearInterval(timer);
            console.log(`Fim da contagem`);

        }
    }, 1000 )
}


rl.question('Insira um valor em segundos para seu timer: ', (valorSegundos) => {
    if (isNaN(valorSegundos) || valorSegundos < 0){
        console.error(`erro num invalido, tente numeros positivos.`);
        rl.close();
    } else {
        calculaTimer(valorSegundos);
        rl.close();

    }
});