/**
 * Escreva um script que leia de um arquivo csv temperaturas em Cº e salve um segundo arquivo csv com essas mesmas temperaturas e o valor correspondente em Fº. 
 */

const fs = require('fs');
const csv = require('csv-parser');

function lerArquivoCSV(caminhoArquivo, callback) {
  const resultados = [];

  fs.createReadStream(caminhoArquivo)
    .pipe(csv())
    .on('data', (linha) => {
      resultados.push(linha);
    })
    .on('end', () => {
      callback(resultados);
    });
}

const celsiusParaFahrenheit = (celsius) => {
  return (celsius * 9 / 5) + 32;
};

function escreverCSV(caminhoArquivo, dados) {
  const linhas = [
    ['Cº', 'Fº'],
    ...dados.map(item => [item['Cº'], item.Fahrenheit])
  ];

  const conteudoCSV = linhas.map(linha => linha.join(',')).join('\n');

  fs.writeFileSync(caminhoArquivo, conteudoCSV, 'utf8');
}

const caminhoArquivoCelsius = 'celsius.csv';
const caminhoArquivoFahrenheit = 'fahrenheit.csv';

lerArquivoCSV(caminhoArquivoCelsius, function (dadosCSV) {
  const dadosTemperatura = dadosCSV.map((linha) => {
    return {
      ['Cº']: linha['Cº'],
      Fahrenheit: celsiusParaFahrenheit(linha['Cº'])
    };
  });

  escreverCSV(caminhoArquivoFahrenheit, dadosTemperatura);

});
