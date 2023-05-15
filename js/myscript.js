//MILESTONE 1

// Il numero di chilometri da percorrere
//Età del passeggero Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
//il prezzo del biglietto è definito in base ai km (0.233 € al km)
//va applicato uno sconto del 19.4% per i minorenni//
//va applicato uno sconto del 37.7% per gli over 65. //

const input1 = document.getElementById("one");
const input2 = document.getElementById("two");
const button = document.getElementById("button");

button.addEventListener("click", function() {
     const kilometers = input1.value
     const passengerAge = input2.value
     let KilometersPrice = kilometers * 0.233; 

    if(passengerAge < 18) {

        KilometersPrice = KilometersPrice - (19.4 / 100 * KilometersPrice)
    } 
      else if(passengerAge > 65) {

        KilometersPrice = KilometersPrice - (37.7 / 100 * KilometersPrice)
    }
    

    KilometersPrice = KilometersPrice.toFixed(2)

    console.log(kilometers)
    console.log(passengerAge)
     

    console.log(KilometersPrice) 

 
})


//MILESTONE 2 

//Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui 
//l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo.
//Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con
// massimo due decimali, per indicare i centesimi sul prezzo).