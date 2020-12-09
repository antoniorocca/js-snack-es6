// Stampa le potenze di 2 fino a 1000.

const potenze = [];

let i=0;
do {  
    potenza = Math.pow(2, i);
    potenze.push(potenza);
    i++;     
} while (potenza <= 1000);

console.log(potenze);