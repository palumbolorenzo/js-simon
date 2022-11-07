/*
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

- creare un container che scompare dopo un tempo prestabilito in cui inserire i 5 numeri casuali

- creare 5 prompt che compaiono dopo la scomparsa del container

- dire all'utente quanti e quali sono i numeri indovinati
*/

let nRandoms = 5;
let minRandom = 1;
let maxRandom = 100;
let timeToHide = 5 * 1000;

const eleContainer = document.querySelector('.container');
const eleText = document.querySelector('.text');

// determinare i 5 numeri random
let arrRandoms = getArrRandomIntegers(nRandoms, minRandom, maxRandom);
console.log(arrRandoms);

// mettere i numeri random in pagina 
//eleNumbers.innerHTML = arrRandoms // converte l'array in stringa prima di metterlo nell'HTML
for (let i = 0; i < arrRandoms.length; i++) {
    eleContainer.innerHTML += `<div class="number">${arrRandoms[i]}</div>`;
}

// registriamo la funzione che deve essere eseguita dopo il tempo stabilito

setTimeout(hide, timeToHide);
setTimeout(finish, timeToHide + 100); 

function hide() {
    eleContainer.innerHTML = '';
}

function finish() {
    const userNumbers = ask();
    console.log(userNumbers);
    const guessed = verify(arrRandoms, userNumbers);
    console.log(guessed);
    score(arrRandoms, guessed);
}

function ask() {
    const inputUser = prompt('dammi i numeri: ');
    const arrInputUser = inputUser.split(' ');
    for (let i = 0; i < arrInputUser.length; i++) {
        arrInputUser[i] = parseInt(arrInputUser[i]);
    }
    return arrInputUser;
}

function verify(arr1, arr2) {
    const arrGuessed = [];
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] == arr2[i]) {
            arrGuessed.push(i);
        }
    }
    return arrGuessed;
}

function score(arrValues, arrIndexes) {
    let msg;
    if (arrIndexes.length === 0) {
        eleText.innerHTML = 'Non hai indovinato nessun numero!';
    } else if (arrIndexes.length === arrValues.length) {
        eleText.innerHTML = 'Complimenti, hai indovinati tutti i numeri!';
    } else {
        eleText.innerHTML = `Hai indovinato ${arrIndexes.length} numeri: i numeri nelle posizioni: ${arrIndexes.join(' - ')}`;
    }
    console.log(msg);
}

function getArrRandomIntegers(n, min, max) {
    const arrRandoms = [];
    for (let i = 0; i < n; i++) {
        arrRandoms.push(getRandomInteger(min, max))
    }
    return arrRandoms;
}

function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}