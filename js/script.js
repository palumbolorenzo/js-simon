/*

Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

- creare un container che scompare dopo un tempo prestabilito in cui inserire i 5 numeri casuali

- creare 5 prompt che compaiono dopo la scomparsa del container

- dire all'utente quanti e quali sono i numeri indovinati

*/

let computerNumber;
const userNumbers = prompt('inserisci i 5 numeri');
const numberContainer = document.querySelector('.container');
const idInterval = setInterval(getRandomInteger, 1000);

function getRandomInteger() {
    for (let i = 1; i <= 5; i++) {
        getRandomInteger = Math.floor(Math.random() * 100) + 1;
        const eleNumber = document.createElement('div');
        eleNumber.classList.add('.numbers');
        eleNumber.innerHTML = getRandomInteger;
        numberContainer.appendChild(eleNumber);
    }
}

function hide() {
    numberContainer.classList.remove('.container');
}

