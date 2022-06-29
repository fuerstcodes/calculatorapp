let firstNumber;
let operation;
let result = document.querySelector('.result');
let button0 = document.querySelector('.buttonZero');
let button1 = document.querySelector('.button1');
let button2 = document.querySelector('.button2');
let button3 = document.querySelector('.button3');
let button4 = document.querySelector('.button4');
let button5 = document.querySelector('.button5');
let button6 = document.querySelector('.button6');
let button7 = document.querySelector('.button7');
let button8 = document.querySelector('.button8');
let button9 = document.querySelector('.button9');
let buttonC = document.querySelector('.buttonC');
let buttonBack = document.querySelector('.buttonBack');
let buttonDivide = document.querySelector('.buttonDivide');
let buttonMultiply = document.querySelector('.buttonMultiply');
let buttonMinus = document.querySelector('.buttonMinus');
let buttonPlus = document.querySelector('.buttonPlus');
let buttonEquals = document.querySelector('.buttonEquals');

button0.addEventListener('click', function(event) {
    if(result.innerHTML === '0') {
        result.innerHTML = event.target.innerHTML;
    } else {
    result.innerHTML += event.target.innerHTML;
    }
})

button1.addEventListener('click', function(event) {
    if(result.innerHTML === '0') {
        result.innerHTML = event.target.innerHTML;
    } else {
    result.innerHTML += event.target.innerHTML;
    }
})

button2.addEventListener('click', function(event) {
    if(result.innerHTML === '0') {
        result.innerHTML = event.target.innerHTML;
    } else {
    result.innerHTML += event.target.innerHTML;
    }
})

button3.addEventListener('click', function(event) {
    if(result.innerHTML === '0') {
        result.innerHTML = event.target.innerHTML;
    } else {
    result.innerHTML += event.target.innerHTML;
    }
})

button4.addEventListener('click', function(event) {
    if(result.innerHTML === '0') {
        result.innerHTML = event.target.innerHTML;
    } else {
    result.innerHTML += event.target.innerHTML;
    }
})

button5.addEventListener('click', function(event) {
    if(result.innerHTML === '0') {
        result.innerHTML = event.target.innerHTML;
    } else {
    result.innerHTML += event.target.innerHTML;
    }
})

button6.addEventListener('click', function(event) {
    if(result.innerHTML === '0') {
        result.innerHTML = event.target.innerHTML;
    } else {
    result.innerHTML += event.target.innerHTML;
    }
})

button7.addEventListener('click', function(event) {
    if(result.innerHTML === '0') {
        result.innerHTML = event.target.innerHTML;
    } else {
    result.innerHTML += event.target.innerHTML;
    }
})

button8.addEventListener('click', function(event) {
    if(result.innerHTML === '0') {
        result.innerHTML = event.target.innerHTML;
    } else {
    result.innerHTML += event.target.innerHTML;
    }
})

button9.addEventListener('click', function(event) {
    if(result.innerHTML === '0') {
        result.innerHTML = event.target.innerHTML;
    } else {
    result.innerHTML += event.target.innerHTML;
    }
})

buttonC.addEventListener('click', function(event) {
    result.innerHTML = '0';
})

buttonBack.addEventListener('click', function(event) {
    let newNumber = result.innerHTML.slice(0, -1);
    result.innerHTML = newNumber;
    if(result.innerHTML ===  '') {
        result.innerHTML = '0';
    }
})

buttonPlus.addEventListener('click', function(event) {
    firstNumber = parseInt(result.innerHTML);
    result.innerHTML = '0';
    operation = 'plus';
})

buttonMinus.addEventListener('click', function(event) {
    firstNumber = parseInt(result.innerHTML);
    result.innerHTML = '0';
    operation = 'minus';
})

buttonMultiply.addEventListener('click', function(event) {
    firstNumber = parseInt(result.innerHTML);
    result.innerHTML = '0';
    operation = 'multiply';
})

buttonDivide.addEventListener('click', function(event) {
    firstNumber = parseInt(result.innerHTML);
    result.innerHTML = '0';
    operation = 'divide';
})

buttonEquals.addEventListener('click', function(event) {
    let secondNumber = parseInt(result.innerHTML);
    switch(operation) {
        case 'plus':
            result.innerHTML = firstNumber + secondNumber;
            break;
        case 'minus': 
            result.innerHTML = firstNumber - secondNumber;
            break;
        case 'multiply': 
            result.innerHTML = firstNumber * secondNumber;
            break;
        case 'divide': 
            result.innerHTML = Math.floor(firstNumber / secondNumber);
            break;
        default: 
            result.innerHTML = 'ERROR';
            break;
    }
})

