//Exemplo de input:
const numeros = [3, 4, 7, 8, 1, 6, 5, 10];

//Seu código aqui:
let somaPares = 0;

for(let numero of numeros) {
    if(numero % 2 === 0) {
        somaPares += numero;
    };
}

console.log(somaPares);