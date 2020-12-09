// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby,
// chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.

let invitati = ["Michele", "Pasquale", "Gennaro", "Mario", "Antonio"];
let nomeUtente = prompt("Inserisci il tuo nome");

let nomePresente = false;
for (var i = 0; i < invitati.length; i++ ) {
     let nome = invitati[i];
    
    if (nome === nomeUtente) {
        nomePresente = true;
    }
}
if (nomePresente) {
    console.log(`Sei invitato alla festa!`);
} else {
    console.log(`Non sei stato invitato`);
}