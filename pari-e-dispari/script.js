/*Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.*/

//CHIEDE ALL'UTENTE DI INSERIRE UN NUMERO
const inputNum = parseInt(prompt('Inserisci un numero da 1 a 5'), 10);
const inputEvenOdd = prompt('Scrivi "pari" o "dispari"');
console.log(`Numero scelto dal giocatore: ${inputNum}`);
console.log(`il giocatore ha scelto : ${inputEvenOdd}`);

//INVOCO LA FUNZIONE CHE GENERA UN RANDOM NUMBER DA 1 A 5
const pcNumber = numRandom1to5();
console.log(`Numero assegnato al PC: ${pcNumber}`);

//ALLA VARIABILE SUM ASSEGNIAMO LA SOMMA DEI DUE VALORI
const sum = inputNum + pcNumber;
console.log(`la somma dei due numeri è: ${sum} `)

//INVOCO LA FUNZIONE checkEvenOdd CHE VERIFICA SE LA SOMMA E' PARI O DISPARI
const numToCheck = checkEvenOdd(sum);
console.log(`True = pari, False = dispari: ${numToCheck}`);

//VERIFICHIAMO CHI HA VINTO 
if ((inputEvenOdd == 'pari') && (mod == true)) {
  console.log('ha vinto il giocatore');
} else if ((inputEvenOdd == 'dispari') && (mod == false)) {
  console.log('ha vinto il giocatore');
} else {
  console.log('ha vinto il PC');
}


/*FUNZIONI*/

//CREO UNA FUNZIONE CHE GENERA UN NUMERO RANDOM DA 1 A 5
/** Ritorna un numero random da 1 a 5
 * @returns
 */
function numRandom1to5() {
  const num = Math.floor((Math.random() * 5) + 1)
  return num;
}

//CREO UNA FUNZIONE CHE VERIFICA SE UN NUMERO è PARI O DISPARI
/** Riceve un numero e ritorna true se pari, false se dispari
 * @param {number} num
 * @returns {boolean}
 */
function checkEvenOdd(num) {
  if ((num) % 2 === 0) {
    mod = true;
  } else {
    mod = false;
  }
  return mod;
}