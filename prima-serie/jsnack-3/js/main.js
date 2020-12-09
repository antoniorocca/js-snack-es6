// Il software deve chiedere per 5 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.
// Esegui questo programma in due versioni, con il for e con il while.

// ciclo for
let sum = 0;
for (let i=0; i<5; i++) {  
    const numeroUtente = Number(prompt("Insert a number"));
    sum += numeroUtente;  
}
console.log(sum);

// ciclo while
let sum = 0;
let i=0;
while (i<5) {
    const numeroUtente = Number(prompt("Insert a number"));
    sum += numeroUtente;    
    i++
}
console.log(sum);