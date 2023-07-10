/*Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma (una parola che 
  si legge allo stesso modo anche da destra versi sinistra, ad esempio anna, otto)*/

//CHIEDO ALL'UTENTE DI INSERIRE UNA PAROLA
const word = prompt('Inserisci una parola');

//RICHIAMO LA FUNZIONE checkPalidnrome CHE VERIFICA SE E' PALINDROMA
const checkedWord = checkPalidnrome(word);
console.log(checkedWord);

//CREO UNA FUNZIONE CHE VERIFICA SE UNA PAROLA E' PALINDROMA
/**Riceve una stringa, e restituisce true se palindroma, viceversa false
 * @param {string} text  
 * @returns {boolean}
 *///setto una variabile "check=TRUE". Se nel controllo risulta NON palindroma setto "check=FALSE"
function checkPalidnrome(text) {
  let check = true;
  for (i = 0, j = (text.length - 1); i < j; i++, j--) {
    if (text[i] !== text[j]) {
      check = false;
    }
  }
  return check;
}