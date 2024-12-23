/*Escreva um script que receba como input do usuário a data de nascimento e retorne ao usuário a qual geração ele pertence.
 *Use os intervalos de datas abaixo como base de delimitação das gerações
 */

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const calculaGeracao = (dataNascimento) => {
  const dataAniversario = new Date(dataNascimento);
  const geracao = ["Alpha", "Z", "Millennials", "X", "Boomer", "Sileciosa"];

  switch (true){
    case dataAniversario.getFullYear() >= 2013 && dataAniversario.getFullYear() <= 2025: //alpha
      var i = 0;
      break;

    case dataAniversario.getFullYear() >= 1997 && dataAniversario.getFullYear() <= 2012: // z
      var i = 1;
      break;

    case dataAniversario.getFullYear() >= 1981 && dataAniversario.getFullYear() <= 1996: // millennials
      var i = 2;
      break;

    case dataAniversario.getFullYear() >= 1965 && dataAniversario.getFullYear() <= 1980: // x
      var i = 3;
      break;


    case dataAniversario.getFullYear() >= 1946 && dataAniversario.getFullYear() <= 1964: // boomers
      var i = 4;
      break; 

    case dataAniversario.getFullYear() >= 1928 && dataAniversario.getFullYear() <= 1965: // silenciosa
      var i = 5;
      break;

    default:
      console.log('Numero n valido');
      break;
  }

  return `Você é da geração: ${geracao[i]}`;
};

rl.question(
  `Digite a data do seu nascimento (YYYY-MM-DD): `,
  (dataNascimento) => {
    console.log(calculaGeracao(dataNascimento));
    rl.close();
  }
);
