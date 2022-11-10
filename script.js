let kmPercorso = prompt("Inserisci i km del percorso");
let etaPasseggero= prompt("Inserisci l'età del passeggero");


let prezzoBiglietto = 0.21 * kmPercorso;
console.log("Il prezzo senza applicazione di sconto è " + prezzoBiglietto);

let prezzoBigliettoScontato = prezzoBiglietto;

if (etaPasseggero < 18) {
    prezzoBigliettoScontato = prezzoBiglietto * 0.8;
    console.log("Il prezzo scontato del 20% è " + prezzoBigliettoScontato);
} else if (etaPasseggero > 64) {
    prezzoBigliettoScontato = prezzoBiglietto * 0.4;
    console.log("Il prezzo scontato del 40% è " + prezzoBigliettoScontato);
} else {
    console.log("Al prezzo non verranno applicati sconti: " + prezzoBigliettoScontato);
}