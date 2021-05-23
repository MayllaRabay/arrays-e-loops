//Exemplo de input:
const original = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//Seu código aqui:
const par = [];
const impar = [];

for(let numero of original) {
    if(numero % 2 === 0) {
        par.push(numero);
    } else {
        impar.push(numero);
    };
}

console.log(par);
console.log(impar);
