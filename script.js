let kmPercorso, etaPasseggero, prezzoBiglietto, prezzoBigliettoScontato,prezzoKm;

prezzoKm = 0.21;
kmPercorso = prompt("Inserisci i km del percorso");
etaPasseggero = prompt("Inserisci l'età del passeggero");

if (!isNaN(kmPercorso) && !isNaN(etaPasseggero)) {


    prezzoBiglietto = (prezzoKm * kmPercorso).toFixed(2);

    console.log(` 
    -----------------------------------------------
    -----------------------------------------------
    Kilometri inseriti: ${kmPercorso}------------------------
    Eta inserita: ${etaPasseggero}-------------------------------
    Prezzo al km : ${prezzoKm}----------------------------
    -----------------------------------------------
    Tariffa standard-------------------------------
    Il prezzo senza applicazione di sconto è di---- 
    --------------------${prezzoBiglietto} €--------------------
    -----------------------------------------------
    -----------------------------------------------
    -----------------------------------------------
    ` );

    prezzoBigliettoScontato = prezzoBiglietto;

    if (etaPasseggero < 18) {

        prezzoBigliettoScontato = (prezzoBiglietto * 0.8).toFixed(2);

        console.log(` 
    -----------------------------------------------
    Applicazione-----------------------------------
    Tariffa under 18-------------------------------
    Al prezzo è stato applicato uno sconto del 20%
    --------------------${prezzoBigliettoScontato} €--------------------
    -----------------------------------------------
    ` );

    } else if (etaPasseggero > 64) {

        prezzoBigliettoScontato = (prezzoBiglietto * 0.6).toFixed(2);

        console.log(` 
    -----------------------------------------------
    Applicazione-----------------------------------
    Tariffa under 18-------------------------------
    Al prezzo è stato applicato uno sconto del 40%
    --------------------${prezzoBigliettoScontato} €--------------------
    -----------------------------------------------
    ` );
    }

} else {
    console.log(`
    -----------------------------------------------
    -----------------------------------------------
    -----------------------------------------------
    Non hai inserito in uno o più campi dei numeri. 
    Ricorda vengono accettati solo numeri. Ricarica 
    pagina.----------------------------------------
    -----------------------------------------------
    -----------------------------------------------
    -----------------------------------------------` );
}