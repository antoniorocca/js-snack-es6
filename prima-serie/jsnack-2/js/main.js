// L’utente inserisce due parole in successione, con due prompt.
// Il software stampa prima la parola più corta, poi la parola più lunga.

let parola1 = prompt("Inserisci una parola");
let parola2 = prompt("Inserisci una parola");

const ordineParole = (primaParola, secondaParola) => {  
  if (primaParola.lenght < secondaParola.lenght) {
    console.log(`${secondaParola}, ${primaParola}`);
  } else if (primaParola.lenght > secondaParola.lenght){
    console.log(`${primaParola}, ${secondaParola}`);
  } else {
    console.log(`Le parole hanno la stessa lunghezza`);
  }
}
ordineParole(parola1, parola2);