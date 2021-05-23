//Exemplo de input:
const nomes = ["Ana", "Joana", "Carlos", "amanda"];

//Seu código aqui:
let letraInicialA = [];

for(let nome of nomes) {
    if(nome[0] === "a" || nome[0] === "A") {
        letraInicialA.push(nome);
    };
}

if(letraInicialA.length === 0) {
    console.log("Nenhum nome do array inicia com a letra A.");
} else {
    console.log(letraInicialA);
};