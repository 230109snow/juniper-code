let num = 0;
function increment() {
    const countElem = document.getElementById('count');
    countElem.innerText = ++num;
}
function decrement() {
    const countElem = document.getElementById('count');
    countElem.innerText = --num;
}
function reset() {
    const countElem = document.getElementById('count');
    num = 0;
    countElem.innerText = 0;
}

function modifyNum(number) {
    const countElem = document.getElementById('count');
    num += number;
    countElem.innerText = num;
}

function fizzbuzz() {
    console.log(document.querySelector('#fizzbuzz-input').value);
    //you'll want to look up
    //javascript loops (either while, or for will work well here)
    //conditionals (if, elseif, else) or switch statements
    //modulo operator will also come handy here.
}

function calculator(value) {
}