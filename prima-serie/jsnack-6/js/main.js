// Stampa il cubo dei primi N numeri, 
//dove N è un numero indicato dall’utente.

let numeroUtente = Number(prompt("Inserisci un numero"));

for (let i=0; i <= numeroUtente; i++) {
     cubo = Math.pow(i, 3);
    console.log(cubo);
}