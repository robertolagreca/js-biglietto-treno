let kmPercorso, etaPasseggero, prezzoBiglietto, prezzoBigliettoScontato,prezzoKm;
let prezzoBtn;
prezzoKm = 0.21;
//kmPercorso = prompt("Inserisci i km del percorso");
//etaPasseggero = prompt("Inserisci l'età del passeggero");


prezzoBtn = document.getElementById("ticket-btn");

prezzoBtn.addEventListener('click', function(){
    
    let kmPercorso = document.getElementById("input-km").value;
    let etaPasseggero = document.getElementById("input-eta").value;
    
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

        document.getElementById("output-sconto").innerHTML = "Tariffa standard";
       // document.getElementById("ticket").innerHTML =  "Il prezzo con tariffa standard è " + prezzoBiglietto + "€";
    
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
    
        document.getElementById("output-sconto").innerHTML = "Tariffa under 18. Applicazione del 20% di sconto";
        //document.getElementById("ticket").innerHTML =  "Il prezzo con tariffa under 18 è " + prezzoBigliettoScontato + "€";
    
        } else if (etaPasseggero > 64) {
    
            prezzoBigliettoScontato = (prezzoBiglietto * 0.6).toFixed(2);
    
            console.log(` 
        -----------------------------------------------
        Applicazione-----------------------------------
        Tariffa over 65-------------------------------
        Al prezzo è stato applicato uno sconto del 40%
        --------------------${prezzoBigliettoScontato} €--------------------
        -----------------------------------------------
        ` );

        document.getElementById("output-sconto").innerHTML = "Tariffa over 65. Applicazione del 40% di sconto";
        //document.getElementById("ticket").innerHTML =  "Il prezzo con tariffa over 65 è " + prezzoBigliettoScontato + "€";
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
    
        //document.getElementById("ticket").innerHTML =  "In uno o più campi non hai inserito un numbero. Ricarica la pagina e riprova";
    
    }


    document.getElementById("output-costo").innerHTML ="Il costo è: " + prezzoBigliettoScontato;


    });