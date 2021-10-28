// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.

/* 1. creare una lista con tutti i nome degli invitati
   2. chiedere all'utente il suo nome 
   3. verificare che il suo nome è presente o meno nella lista
     3.1 se è presente stampare messaggio positivo
     3.2 altrimenti stamapare un messaggio negativo
*/

const permesso = document.getElementById("permesso");

const lista = ["marco", "fabio", "dario", "mario", "carlo"];
console.log(lista);

let nomeUtente = prompt("inserisci il tuo nome");

let trovata = false;

    for (let i = 0; i < lista.length; i++){

    if ( nomeUtente == lista[i]){
        trovata = true;
    }  
}

if ( trovata ) {
    permesso.innerHTML = "il tuo nome è presente.";
}else {
    permesso.innerHTML = "il tuo nome non è presente.";
}

