const cidades = [
    "Salvador",//8
    "São Paulo",//9
    "Brasilia",//8
    "Recife",//6
    "Rio de Janeiro",//14
];

const resultado = cidades.reduce((acumulador, valorAtual) => {
    let maior = acumulador;
    if (valorAtual.length > maior.length) {
        maior = valorAtual;
    }
    return maior;
});
console.log(resultado);
