// L’utente inserisce due parole in successione, con due prompt.
// Il software stampa prima la parola più corta, poi la parola più lunga.

/* 1. chiedere all'utente 2 parole 
   2. confrontare la lunghezza delle 2 parole
   3. stampa delle 2 parole in ordine in base alla loro lunghezza
*/


const ordineParole = document.getElementById("ordine-parole");

const parolaUno = prompt("Inserisci una parola");

const parolaDue = prompt("Inserisci un'altra parola");


if (parolaUno.length > parolaDue.length){

    ordineParole.innerHTML = "La parola più corta è:" + parolaDue + " mentre la parola lunga è:" + parolaUno;

} else if (parolaUno.length < parolaDue.length){

    ordineParole.innerHTML = "La parola più corta è:" + parolaUno + " mentre la parola lunga è:" + parolaDue;
}
