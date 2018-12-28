let words = [
    {trueWord : 'клАла', falseWord : 'клалА'},
    {trueWord : 'звонИт', falseWord : 'звОнит'},
    {trueWord : 'свЕкла', falseWord : 'свеклА'},
    {trueWord : 'слИвовый', falseWord : 'сливОвый'},
    {trueWord : 'апострОф', falseWord : 'апОстроф'},
    ];

let lengthWords = words.length-1;

// let index = 4;
// let word = 'апострОф';
let index = 2;
let word = 'свЕкла';

function replaceElements(arr, i) {
    let temp = arr[i];
    arr[i] = arr[lengthWords];
    arr[lengthWords] = temp;
}

function checkWord(arr, i, wrd) {
    if (wrd === arr[i].trueWord) {
        if (i === lengthWords) {
            lengthWords -= 1;
        } else {
            replaceElements(arr, i);
            lengthWords -= 1;
        }
    }
}

// TODO: тестовая функция
function _writeConsole() {
    words.forEach(function(elem) {
        console.log(elem);
    });
    console.log(lengthWords);
}

checkWord(words, index, word);

_writeConsole();

index = 2;
word = 'апострОф';

checkWord(words, index, word);

_writeConsole();

//Функция вычисления случайного числа от min до max включительно
/*
function randomInteger(min, max) {
    var rand = min + Math.random() * (max + 1 - min);
    rand = Math.floor(rand);
    return rand;
}

alert( randomInteger(5, 10) );
*/

// ------------------------- Работа с кнопками -------------------------

let buttonBegin = document.querySelector('.button--begin');
let buttonTrue = document.querySelector('.button--true');
let buttonFalse = document.querySelector('.button--false');


buttonBegin.addEventListener('click', function() {
    buttonTrue.classList.remove('button--hide');
    buttonFalse.classList.remove('button--hide');
    this.classList.add('button--hide');
});