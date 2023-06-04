const numeros = [1, 98, -76, 0, 12, 19, 5, 60, 44];

const resultado = numeros.reduce((acumulador, valorAtual) => {
    let maiorValor = acumulador;
    if (valorAtual > maiorValor) {
        maiorValor = valorAtual;
    }
    return maiorValor
});
console.log(resultado);