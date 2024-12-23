function jogarDados(){
    return Math.floor (Math.random() * 6) + 1; 
}

let jogada = 1;
for (let i = 0; i < 5; i++){
    const dado1 = jogarDados();
    const dado2 = jogarDados();
    const somar = dado1 + dado2;
    
    console.log(`Jogada: ${jogada} `);
    console.log(`Dado 1: ${dado1}\nDado 2: ${dado2}\nSoma: ${somar}`);
    jogada++;
}

