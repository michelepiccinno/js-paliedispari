/*Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.*/

//RECUPERO GLI ELEMENTI E LI ASSEGNO ALLE VARIABILI
const inputNumElement = document.querySelector("[name='number-input']");
const inputEvenOddElement = document.querySelector("#select-evenodd");
const btnInvia = document.querySelector(".invia-dati");

//CREO L'EVENTLISTENER
btnInvia.addEventListener("click", function () {
  const userNum = parseInt(inputNumElement.value);
  const EvenOddSelect = inputEvenOddElement.value;
  console.log(`Numero scelto dal giocatore: ${userNum}`);
  console.log(`il giocatore ha scelto : ${EvenOddSelect}`);

  //VERIFICO SE IL NUMERO INSERITO E' MAGGIORE/MINORE DI 5
  //VERIFICO SE L'UTENTE HA INSERITO TYPE NUMBER
  if ((inputNumElement.value < 1) || (inputNumElement.value > 5)) {
    return alert('inserisci un numero minore o uguale a 5!');
  } /*else if (typeof inputNumElement.value !== 'number') {           DA VERIFICARE PERCHE' NON VA
    return alert('non sono ammessi caratteri diversi da numeri!');
  }*/

  //INVOCO LA FUNZIONE CHE GENERA UN RANDOM NUMBER DA 1 A 5 PER IL PC
  const pcNumber = numRandom1to5();
  console.log(`Numero assegnato al PC: ${pcNumber}`);
  document.getElementById("pc-num").innerHTML = (`Numero assegnato al PC: ${pcNumber}`);

  //ALLA VARIABILE SUM ASSEGNIAMO LA SOMMA DEI DUE VALORI
  const sum = userNum + pcNumber;
  console.log(`la somma dei due numeri è: ${sum} `)
  document.getElementById("somma").innerHTML = (`la somma dei due numeri è: ${sum} `);

  //INVOCO LA FUNZIONE checkEvenOdd CHE VERIFICA SE LA SOMMA E' PARI O DISPARI
  const checkResult = checkEvenOdd(sum);

  //VERIFICHIAMO CHI E' IL VINCITORE
  if (((EvenOddSelect == 'pari') && (checkResult == true)) ||
    ((EvenOddSelect == 'dispari') && (checkResult == false))) {
    console.log('ha vinto il giocatore');
    document.getElementById("winner").innerHTML = ('ha vinto il giocatore!');
  } else {
    console.log('ha vinto il PC');
    document.getElementById("winner").innerHTML = ('ha vinto il PC!');
  }
})

/*FUNZIONI*/

//CREO UNA FUNZIONE CHE GENERA UN NUMERO RANDOM DA 1 A 5
/** Ritorna un numero random da 1 a 5
 * @returns
 */
function numRandom1to5() {
  const randomNum = Math.floor((Math.random() * 5) + 1)
  return randomNum;
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

