// L’utente inserisce due numeri in successione, con due prompt. 
// Il software stampa il maggiore.

let numero1 = Number(prompt("Inserisci un numero"));
let numero2 = Number(prompt("Inserisci un numero"));

const numeroMaggiore = (primo, secondo) => {
    if(primo > secondo){
      console.log(primo);
    } else {
      console.log(secondo);
    }
}

numeroMaggiore(numero1, numero2);