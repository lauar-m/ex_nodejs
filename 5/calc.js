/*Escreva um script que receba como input do usuário a data de nascimento e retorne para o usuário a idade dela, por exemplo: “25 anos, 3 meses, 15 dias”.
 */

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const calculaIdade = (dataNascimento) => {
    const dataAtual = new Date();
    const dataAniversario = new Date(dataNascimento);

    let anos = dataAtual.getFullYear() - dataAniversario.getFullYear();
    let meses = dataAtual.getMonth() - dataAniversario.getMonth();
    let dias = dataAtual.getDate() - 1 - dataAniversario.getDate();

    if (meses < 0 || meses === 0 && dias < 0){
        meses += 12;
        anos--;
    }

    let diasMeses = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]; 
    
    
    if (dias < 0) {
        meses--;
        const mesAnterior = meses == 0 ? 11 : dataAtual.getMonth() - 1;
        const diasMesAnterior = diasMeses[mesAnterior];
        dias += diasMesAnterior;

    }
    
    return `Você tem ${anos} anos, ${meses} meses e ${dias} dias`;
}

rl.question('Digite a data do seu nascimento (YYYY-MM-DD): ', (dataNascimento) => {
    console.log(calculaIdade(dataNascimento));
    rl.close();
});