let kmPercorso, etaPasseggero, prezzoBiglietto, prezzoBigliettoScontato;

kmPercorso = prompt("Inserisci i km del percorso");
etaPasseggero = prompt("Inserisci l'età del passeggero");

if (!isNaN(kmPercorso) && !isNaN(etaPasseggero)) {


    prezzoBiglietto = (0.21 * kmPercorso).toFixed(2);

    console.log("Il prezzo senza applicazione di sconto è di " + prezzoBiglietto + "€");

    prezzoBigliettoScontato = prezzoBiglietto;

    if (etaPasseggero < 18) {

        prezzoBigliettoScontato = (prezzoBiglietto * 0.8).toFixed(2);

        console.log("Il prezzo scontato del 20% è di " + prezzoBigliettoScontato + "€");

    } else if (etaPasseggero > 64) {

        prezzoBigliettoScontato = (prezzoBiglietto * 0.4).toFixed(2);
        console.log("Il prezzo scontato del 40% è di " + prezzoBigliettoScontato + "€");
    }

} else {
    console.log("Non hai inserito in uno o più campi dei numeri. Ricorda vengono accettati solo numeri. Ricarica pagina");
}