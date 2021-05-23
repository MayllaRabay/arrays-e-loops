//Exemplo de input:
const letras = ["A", "a", "B", "C", "L", "z"];

//Seu código aqui:
let letrasE = 0;

for(let letra of letras) {
    if(letra === "E" || letra === "e") {
        letrasE++
    };
}

if(letrasE === 0) {
    console.log('Nenhuma letra "E" ou "e" foi encontrada.');
} else if(letrasE === 1) {
    console.log('Apenas uma letra "E" ou "e" foi encontrada.');
} else {
    console.log(`Foram encontradas ${letrasE} letras "E" ou "e".`);
};