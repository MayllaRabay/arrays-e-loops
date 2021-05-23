//Exemplo de input:
const original = [1, 4, 12, 21, 53, 88, 112];

//Seu código aqui:
let pares = [];

for(let numero of original) {
    if(numero % 2 === 0) {
        pares.push(numero);
    };
}

if(pares.length === 0) {
    console.log("Não há números pares nesse array.")
} else {
    console.log(pares);
};
