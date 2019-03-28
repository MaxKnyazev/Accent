let words = [
        // {trueWord : 'клАла', falseWord : 'клалА'},
        // {trueWord : 'свЕкла', falseWord : 'свеклА'},
        // {trueWord : 'слИвовый', falseWord : 'сливОвый'},
        // {trueWord : 'апострОф', falseWord : 'апОстроф'},
        // {trueWord : 'красИвее', falseWord : 'красивЕе'},
        {trueWord : 'звонИт', falseWord : 'звОнит'},
        {trueWord : 'тОртов', falseWord : 'тортОв'},
    ],
    lengthWords,
    buttonBegin = document.querySelector('.button--begin'),
    buttonTrue = document.querySelector('.button--true'),
    buttonFalse = document.querySelector('.button--false'),
    contentButtons = document.querySelector('.content__buttons'),
    progressBarTrue = document.querySelector('.progressBar--true'),
    progressBarFalse = document.querySelector('.progressBar--false'),
    progressBarWrapper = document.querySelectorAll('.progressBar-wrapper'),
    gameOver = document.querySelector('.gameOver'),
    gameOverCountCorrect = document.querySelector('.gameOver__countCorrect'),
    gameOverCountError = document.querySelector('.gameOver__countError'),
    index,
    countTrue,
    countFalse;

function init() {
    lengthWords = words.length-1;
    countTrue = 0;
    countFalse = 0;

    progressBarTrue.style.width = '0';
    progressBarFalse.style.width = '0';

    progressBarWrapper.forEach(function (elem) {
        elem.classList.remove('opacityNull');
    });
}

//Функция вычисления случайного числа от min до max включительно
function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    rand = Math.floor(rand);
    return rand;
}

function replaceElements(arr, i) {
    let temp = arr[i];
    arr[i] = arr[lengthWords];
    arr[lengthWords] = temp;
}

function needReplace(arr, i) {
    if (i !== lengthWords) {
        replaceElements(arr, i);
    }
    lengthWords -= 1;
}

function setButtonsText(i) {
    buttonTrue.innerHTML = words[i].trueWord;
    buttonFalse.innerHTML = words[i].falseWord;
}
/**********************************************************/
function addColumnRevers() {
    contentButtons.classList.remove('_column');
    contentButtons.classList.add('_column-reverse');
}

function removeColumnRevers() {
    contentButtons.classList.remove('_column-reverse');
    contentButtons.classList.add('_column');
}

function reverseButtons() {
    randomInteger(0, 1) ? addColumnRevers() : removeColumnRevers();
}

function initButtons(flag) {
    if (flag) {
        needReplace(words, index);
    }

    index = randomInteger(0, lengthWords);
    // console.log(index);
    // console.log(words[index]);

    setButtonsText(index);
    reverseButtons();
}

function endGame() {
    console.log('game over');
    progressBarWrapper.forEach(function(elem) {
        elem.classList.add('opacityNull');
    });
    buttonFalse.classList.add('hide');
    buttonTrue.classList.add('hide');

    //TODO :**********************************************************/
    console.log('+++++++++++++++++ ' + contentButtons.className.split(' ').includes('_column-reverse'))

    // removeColumnRevers();
    // contentButtons.style.flexDirection = 'column';

    contentButtons.classList.remove('_column-reverse');
    contentButtons.classList.add('_column');

    gameOverCountCorrect.innerHTML = `${countTrue}`;
    gameOverCountError.innerHTML = `${countFalse}`;

    gameOver.classList.remove('hide');
    buttonBegin.classList.remove('hide');

}

// needReplace(words, index, word);
// _writeConsole();

// ------------------------- Работа с кнопками -------------------------

buttonBegin.addEventListener('click', function() {
    gameOver.classList.add('hide');
    init();

    buttonTrue.classList.remove('hide');
    buttonFalse.classList.remove('hide');
    this.classList.add('hide');


    // _writeConsole();

    initButtons(false);
});

    buttonTrue.addEventListener('click', function() {
        //TODO: поменять background-color кнопкам (сообщение пользователю).
        //TODO: progress bar true - увеличить значение на 1.
        // Текущее слово должно попасть в конец массива.
        // Уменьшить lengthWords на 1.
        //TODO: Проверка на game over
        // Расчитать новую пару слов.
        // Поставить новую пару слов в кнопки.

        console.log('lengthWords = ' + lengthWords);
        progressBarTrue.style.width = ++countTrue + '%';
        if (lengthWords === 0) {
            endGame();
        }

        console.log('countTrue = ' + countTrue);

        initButtons(true);

        // _writeConsole();
    });

    buttonFalse.addEventListener('click', function() {
        //TODO: поменять background-color кнопкам (сообщение пользователю).
        //TODO: progress bar false - увеличить значение на 1.
        // Расчитать новую пару слов.
        // Поставить новую пару слов в кнопки.

        // console.log('click false ' + ++countFalse);

        progressBarFalse.style.width = ++countFalse + '%';

        initButtons(false);

        // _writeConsole();
    });

//****************************************************************************

// Тестовая функция:
function _writeConsole() {
    words.forEach(function(elem) {
        console.log(elem);
    });
    console.log(lengthWords);
}