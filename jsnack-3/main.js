/*
JSnack 3

Creare un oggetto che rappresenti un triangolo rettangolo,
con le seguenti proprietà: base e altezza.
Calcolare perimetro e area.
*/

const triangolo = {
  'base': 10,
  'altezza': 8
};

document.write(`Base: ${triangolo.base}<br>Altezza: ${triangolo.altezza}`);

const area = (triangolo.base * triangolo.altezza) / 2;
document.write(`<br>Area: ${area}`);

const ipotenusa = Math.sqrt((triangolo.base ** 2) + (triangolo.altezza ** 2));

const perimetro = triangolo.base + triangolo.altezza + ipotenusa;
document.write(`<br>Perimetro: ${perimetro.toFixed(2)}`);
