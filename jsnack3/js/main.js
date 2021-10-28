// Il software deve chiedere per 10 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.

/* 1. chiedere un numero all'utente
     1.2 ripetere per 10 volte la stessa operazione
   2. in automatico verrà visualizzata la somma dei 10 num inseriti
*/

/*

    1. chiedere 10 numeri all'utente => FOR
    2. sommare ogni numero inserito per formare un totale => VARIABILE CHE SOMMA
    3. stampare il risultato

*/

let somma = 0;

for (let i = 1; i < 4; i++) {
    somma += parseInt(prompt('Inserisci il numero ' + i));
    console.log(somma);
}

alert('La somma è ' + somma);