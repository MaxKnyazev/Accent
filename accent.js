let words = [
    {trueWord : 'клАла', falseWord : 'клалА'},
    {trueWord : 'свЕкла', falseWord : 'свеклА'},
    {trueWord : 'слИвовый', falseWord : 'сливОвый'},
    {trueWord : 'апострОф', falseWord : 'апОстроф'},
    {trueWord : 'красИвее', falseWord : 'красивЕе'},
    {trueWord : 'звонИт', falseWord : 'звОнит'},
    {trueWord : 'тОртов', falseWord : 'тортОв'},
    ];

let lengthWords = words.length-1;

//Функция вычисления случайного числа от min до max включительно
function randomInteger(min, max) {
    var rand = min + Math.random() * (max + 1 - min);
    rand = Math.floor(rand);
    return rand;
}

function replaceElements(arr, i) {
    let temp = arr[i];
    arr[i] = arr[lengthWords];
    arr[lengthWords] = temp;
}

function needReplace(arr, i) {
    if (i === lengthWords) {
        lengthWords -= 1;
    } else {
        replaceElements(arr, i);
        lengthWords -= 1;
    }
}

// needReplace(words, index, word);
// _writeConsole();

// ------------------------- Работа с кнопками -------------------------

let buttonBegin = document.querySelector('.button--begin');
let buttonTrue = document.querySelector('.button--true');
let buttonFalse = document.querySelector('.button--false');
let contentButtons = document.querySelector('.content__buttons');


let index;
let countTrue = 0;
let countFalse = 0;


buttonBegin.addEventListener('click', function() {
    buttonTrue.classList.remove('button--hide');
    buttonFalse.classList.remove('button--hide');
    this.classList.add('button--hide');




//TODO:*******************************************************************
    index = randomInteger(0, lengthWords);
    console.log(index);
    console.log(words[index]);

    buttonTrue.innerHTML = words[index].trueWord;
    buttonFalse.innerHTML = words[index].falseWord;

    if (randomInteger(0, 1)) {
        contentButtons.style.flexDirection = 'column-reverse';
    };
//TODO:*******************************************************************



});

    buttonTrue.addEventListener('click', function() {
        //TODO: поменять background-color кнопкам (сообщение пользователю).
        //TODO: progress bar true - увеличить значение на 1.
        //TODO: Текущее слово должно попасть в конец массива.
        //TODO: Уменьшить lengthWords на 1 (если возможно - проверка на game over).
        //TODO: Расчитать новую пару слов.
        //TODO: Поставить новую пару слов в кнопки.
        console.log('click true ' + ++countTrue);
        needReplace(words, index);
    });

    buttonFalse.addEventListener('click', function() {
        //TODO: поменять background-color кнопкам (сообщение пользователю).
        //TODO: progress bar false - увеличить значение на 1.
        //TODO: Расчитать новую пару слов.
        //TODO: Поставить новую пару слов в кнопки.
        console.log('click false ' + ++countFalse);
    });

//****************************************************************************

// Тестовая функция:
function _writeConsole() {
    words.forEach(function(elem) {
        console.log(elem);
    });
    console.log(lengthWords);
}