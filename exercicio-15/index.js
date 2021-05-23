//Exemplo de input:
const filaDeDentro = ["Jose", "Maria", "Joao"];
const filaDeFora = ["Joana", "Roberta", "Marcos", "Felipe"];

//Seu código aqui:
while(filaDeDentro.length < 5) {
    filaDeDentro.push(filaDeFora[0]);
    filaDeFora.shift();
}

console.log(filaDeDentro);
console.log(filaDeFora);