// Chiedi un numero di 4 cifre all’utente e calcola la somma
// di tutte le cifre che compongono il numero.

let numeroUtente = prompt("Inserisci un numero di 4 cifre");
let somma = 0;

for (let i=0; i<numeroUtente.length; i++) {
    num = Number(numeroUtente[i]);
    somma += num; 
}

console.log(`La somma delle cifre che compongono il numero inserito è: ${somma}`)