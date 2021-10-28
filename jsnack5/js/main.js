/* Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
se è dispari inseriscilo nell’array.
*/

/* 1. creo un archvio vuoto dove verranno inseriti i 6 numeri
 2. chiedo per sei volte all'utente un numero
    2.1 se il numero è dispari verrà inserto nell'archivio
*/

const arrNum = [];

for (let i = 1; i < 6; i++) {
    let numeri = parseInt(prompt('scrivi un numero numero ' + i));
    console.log(numeri);

    if (numeri % 2 !== 0){
        arrNum.push(numeri);
    }    
}

alert('i numeri dispari sono ' + arrNum);
