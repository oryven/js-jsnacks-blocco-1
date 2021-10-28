// L’utente inserisce due numeri in successione, con due prompt.
// Il software stampa il maggiore.

/* 
1. chiedo all'utente il primo num - ok
2. chiedo il secondo numero - ok
3. il software gener in automantico il num maggiore che vedremo in video
  3.1 confronto di 2 num 
  3.2 il num maggiore verrà visualizzato

*/

// creare una variabile che richiami tramite id il div

const munMaggiore = document.getElementById("mess-numero");

// chiedere all'utente il primo num

let primoNum = prompt("inserisci il primo numero");

// chiedere all'utente il secondo num

let secondoNum = prompt("inserisci il secondo numero");

// confrontare i 2 numero con una condizione

if (primoNum > secondoNum){
    console.log('primoNum');

}else if (primoNum < secondoNum) {
    console.log('secondoNum');

}else {
    console.log('sono uguali');

}

