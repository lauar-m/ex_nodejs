/**
 * Escreva um script que informe quais são as 5 palavras mais usadas no hino nacional brasileiro, com mais de 2 letras.
 * As palavras mais usadas devem ser apresentadas em ordem decrescente e o número de vezes que ela aparece também deve ser apresentado.
 */

/**
 *
 *
 * pegar do txt para string // readfile
 * .toLowerCase // passar tudo minusculo
 * separa em palavras
 * .split()
 * 
 * contador palavras > 2
 * .length // maior que 2
 *  
 *
 */

const fs = require("fs");

function contarPalavras(hino) {
  const hinoLowerCase = hino.replace(/[^\w\s]/g, "").toLowerCase(); // passar tudo minusculo e tira caracteres invalidos
  const hinoPalavras = hinoLowerCase.split(/\s+/);  // separa em palavras 
  const contador = {}; 

  hinoPalavras.forEach((palavra) => {
    if (palavra.length > 2) {
      if (contador[palavra]) {
        contador[palavra] += 1;
      } else {
        contador[palavra] = 1;
      }
    }
  });

  const palavrasOrdenadas = [];
  for (let palavra in contador) {
    palavrasOrdenadas.push([palavra, contador[palavra]]);
  }

  palavrasOrdenadas.sort((a, b) => b[1] - a[1]);

  return palavrasOrdenadas.slice(0, 5);
}

fs.readFile("hino.txt", "utf8", (err, data) => {
  if (err) {
    console.error("Erro ao ler o arquivo:", err);
    return;
  }

  const palavrasMaisUsadas = contarPalavras(data);
  palavrasMaisUsadas.forEach(([palavra, count]) => {
    console.log(`${palavra}: ${count}`);
  });
});
