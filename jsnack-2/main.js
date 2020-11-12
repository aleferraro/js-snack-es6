/*
JSnack 2

Creare un array di oggetti: ogni oggetto descriverà una bici
da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore.
*/

/*
jsnack 2 - Updated
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore utilizzando destructuring e template literal
*/

const bici = [
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

let [biciLeggera] = bici;

for(let i=0; i<bici.length; i++){
  if(biciLeggera.peso > bici[i].peso){
    biciLeggera = bici[i];
  }
  console.log(biciLeggera);
}

document.write(`Nome Bici: ${biciLeggera.nome} <br>Peso: ${biciLeggera.peso}`);
