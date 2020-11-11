/*
JSnack 4A

Creare un array di oggetti di squadre di calcio.
Ogni squadra avrà diverse proprietà:
nome, punti fatti, falli subiti.

Nome sarà l’unica proprietà da compilare, le altre
saranno tutte settate a 0.
*/

let teams =[];

for(let i = 0; i < 4; i++){
  let newTeam = {
    'nome': prompt('inserisci il nome della squadra numero ' + (i+1)),
    'puntiFatti': 0,
    'falliSubiti': 0
  }

  teams.push(newTeam);
}

for(let i = 0; i < teams.length; i++){
  document.getElementById('snack4a').innerHTML += '<h2>Squadra ' + (i+1) + '</h2>';

  for(key in teams[i]){
    document.getElementById('snack4a').innerHTML += key + ': ' + teams[i][key] + '<br>';
  }
}


/*
JSnack 4B

Generare numeri random al posto degli 0 nelle proprietà:
punti fatti e falli subiti
*/

for(let i = 0; i < teams.length; i++){
  teams[i].puntiFatti = (Math.random() * 100).toFixed(0);
  teams[i].falliSubiti = (Math.random() * 20).toFixed(0);

  document.getElementById('snack4b').innerHTML += '<h2>Squadra ' + (i+1) + '</h2>';

  for(key in teams[i]){
    document.getElementById('snack4b').innerHTML += key + ': ' + teams[i][key] + '<br>';
  }
}
