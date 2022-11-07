// Usando o método sort() resolva as seguintes questões:
// a) Ordenar o array abaixo em ordem crescente.
const numeros = [10, 1, 5, 50, 20, 30, 3, 4, 8, 2];

numeros.sort((x, y) => {
    return x - y;
});

console.log(numeros);

// b) Ordenar o array abaixo em ordem decrescente.
numeros.sort((x, y) => {
    return y - x;
});

console.log(numeros);

//c) Ordenar o array abaixo em ordem crescente, com base nos valores dos pontos de código Unicode.
numeros.sort();
console.log(numeros);

// d) Ordenar o array abaixo em ordem alfabética.
const frutas = ["Banana", "Amora", "abacaxi", "uva", "Pera"]
frutas.sort((a, b) => {
    return a.localeCompare(b);
});
console.log(frutas);

// e) Ordenar o array abaixo em ordem alfabética decrescente.
frutas.sort((a, b) => {
    return b.localeCompare(a);
});
console.log(frutas);

// f) Ordenar o array abaixo em ordem crescente, de acordo com a quantidade de caracters (do que tem menos caracteres, para o que tem mais).
frutas.sort((a, b) => {
    const resultadoA = a.length
    const resultadoB = b.length

    return resultadoA - resultadoB
});
console.log(frutas);
