/*
  Quanti anni ha?
  Scrivi un programma che dato l'anno corrente e un anno di nascita determini:
    - l'età della persona,
    - quanti anni sono necessari per raggiungere i 100
  Restituisca in output entrambi i risultati.

  Esempio:
    Input: anno corrente = 2018, anno di nascita = 1991
    Ouput: età = 27, anni mancanti = 73

  http://www.imparareaprogrammare.it
*/

var annocorrente = 2023;
var annonascita = 1994;

var eta = annocorrente-annonascita;
var anni100 = 100-eta;

console.log('età: '+eta);
console.log('anni mancanti: '+anni100);
