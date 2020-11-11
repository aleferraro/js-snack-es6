/*
JSnack 1A

Creare un oggetto palla che abbia le seguenti proprietà.

Nome = palla
Peso = 10
*/

let palla = {
  'nome': 'palla',
  'peso': 10
};

document.getElementById('snack1a').innerHTML = 'nome: ' + palla.nome + '<br>peso: ' + palla.peso;


/*
JSnack 1B

Attraverso un prompt dare la possibilità all’utente di
modificare il peso della palla.
*/

palla.peso = prompt('inserisci il peso della palla');

document.getElementById('snack1b').innerHTML = 'nome: ' + palla.nome + '<br>peso: ' + palla.peso;
