/*
JSnack 2

Creare un array di oggetti: ogni oggetto descriverà una bici
da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore.
*/

let bici = [
  {
    'nome': 'biciUno',
    'peso': 15
  },
  {
    'nome': 'biciDue',
    'peso': 20
  },
  {
    'nome': 'biciTre',
    'peso': 13
  },
];

let biciLeggera = bici[0];

for(let i=0; i<bici.length; i++){
  if(biciLeggera.peso > bici[i].peso){
    biciLeggera = bici[i];
  }
  console.log(biciLeggera);
}

document.write('nome bici: ' + biciLeggera.nome + '<br>peso: ' + biciLeggera.peso);
