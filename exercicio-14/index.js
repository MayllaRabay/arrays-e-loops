//Exemplo de input:
const numeros = [3, 4, 1, 8, 11, 7, 5];

//Seu código aqui:
let maiorNumero = numeros[0];

for(let numero of numeros) {
    if(numero >= maiorNumero) {
        maiorNumero = numero
    };
}

console.log(maiorNumero);