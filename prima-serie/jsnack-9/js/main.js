// Calcola la somma e la media dei primi 10 numeri.

const numeri = [];

for (let i=0; i<=10; i++){
    numeri.push(i);    
}
const sum = numeri.reduce((a,b) => a + b , 0);
console.log(`La somma dei primi 10 numeri è: ${sum}`);

const avg = sum / numeri.length;
console.log(`La media dei primi 10 numeri è: ${avg}`)