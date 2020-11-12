/*
jsnack 5
Partendo da un array semplice tipo:
var myArray = ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'];
chiediamo all’utente con 2 prompt due numeri tra 0 e la lunghezza dell’array
quindi creiamone uno nuovo con solo i valori che hanno la posizione compresa tra i due numeri inseriti dall’utente
*/

//definisco un array generico
let myArray = ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'];

const userNum = [];

//chiedo all’utente con 2 prompt due numeri tra 0 e la lunghezza dell’array e li salvo in un array
for (let i = 0; i < 2; i++){
  userNum.push(parseInt(prompt(`inserisci un numero da 0 a ${myArray.length}`)));
}

console.log(userNum);

//creo un array con i valori di myArray che hanno la posizione compresa tra i due numeri inseriti dall’utente
const filteredArray = myArray.slice(userNum[0], userNum[1]);

console.log('filteredArray', filteredArray);

document.write(`Gli elementi corrispondenti sono: ${filteredArray.join(', ')}`);
