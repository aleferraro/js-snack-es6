/*
jsnack 6
dato questo array di obj iniziale:
var arrayObj = [
  {name: 'Poppy', type: 'tshirt', color: 'red'},
  {name: 'Jumping', type: 'occhiali', color: 'blue'},
  {name: 'CrissCross', type: 'scarpe', color: 'black'},
  {name: 'Jenny', type: 'borsa', color: 'pink'},
];
Creiamo una copia dell’array di partenza e aggiungiamo ai singoli elementi (quindi ogni oggetto del nuovo array)
una nuova proprietà position che contiene una lettera casuale. non dobbiamo modificare l’array iniziale

*/

const arrayObj = [
  {name: 'Poppy', type: 'tshirt', color: 'red'},
  {name: 'Jumping', type: 'occhiali', color: 'blue'},
  {name: 'CrissCross', type: 'scarpe', color: 'black'},
  {name: 'Jenny', type: 'borsa', color: 'pink'},
];

const alphabet = 'abcdefghijklmnopqrstuvwxyz';

//creo un nuovo array aggiungendo ad ogni elemento la proprietà position che contiene una lettera casuale presa dalla variabile alphabet
const newArray = arrayObj.map((element) => {
  const newEl = {...element, position: alphabet.charAt(Math.floor(Math.random() * alphabet.length))};
  return newEl;
});

console.log('startArr', arrayObj);

const resultEl = document.getElementById('result');

//stampo il nuovo array nell'HTML
newArray.forEach((element, index) => {
  resultEl.innerHTML += `
  <h2>Object ${index}</h2>
  <p>
    Nome: ${element.name}<br>
    Tipo: ${element.type}<br>
    Colore: ${element.color}<br>
    Posizione: ${element.position}<br>
  </p>
  `;
});

console.log('newArray', newArray);
