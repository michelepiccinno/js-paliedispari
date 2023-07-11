/*Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma (una parola che 
  si legge allo stesso modo anche da destra versi sinistra, ad esempio anna, otto)*/

//RECUPERO GLI ELEMENTI E LI ASSEGNO ALLE VARIABILI
const inputWordElement = document.querySelector("[name='word-input']");
const btnInvia = document.querySelector(".invia-dati");

//CREO L'EVENTLISTENER
btnInvia.addEventListener("click", function () {
  const userWord = inputWordElement.value;

  //RICHIAMO LA FUNZIONE checkPalidnrome CHE VERIFICA SE E' PALINDROMA
  const checkedWord = checkPalidnrome(userWord);
  console.log(checkedWord);

  //INIETTO OUTPUT MSG NELL'HTML
  if (checkedWord == true) {
    document.getElementById("output-msg").innerHTML = (`la parola ${userWord} è palindroma`);
  } else {
    document.getElementById("output-msg").innerHTML = (`la parola ${userWord} NON è palindroma`);
  }
})


//CREO UNA FUNZIONE CHE VERIFICA SE UNA PAROLA E' PALINDROMA
/**Riceve una stringa, e restituisce true se palindroma, viceversa false
 * @param {string} text  
 * @returns {boolean}
 *///setto una variabile "check=TRUE". Se nel controllo risulta NON palindroma setto "check=FALSE"
function checkPalidnrome(text) {
  let check = true;
  for ( i=0, j=(text.length - 1); i<j; i++, j--) {
    if (text[i] !== text[j]) {
      check = false;
    }
  }
  return check;
}