//Exemplo de input:
const numeros = [8, 11, 4, 1];

//Seu código aqui:
let menorValor = numeros[0];
let maiorValor = numeros[0];

for(let numero of numeros) {
    if(numero <= menorValor) {
        menorValor = numero;
    } else if(numero >= maiorValor) {
        maiorValor = numero;
    };
}

console.log(maiorValor - menorValor);