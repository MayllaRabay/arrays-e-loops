//Exemplo de input:
const numeros = [54, 22, 14, 87, 10, 284, 10];

//Seu código aqui:
let tem10 = false;

for(let i = 0; i < numeros.length; i++) {
    if(numeros[i] === 10) {
        tem10 = true;
        console.log(i);
    };
}

if(!tem10) {
    console.log("-1");
};