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
    const userInput = document.querySelector('#fizzbuzz-input').value;
    const outputTable = document.querySelector('#fizzbuzz-output');

    if(outputTable) {
        for(let i = 1; i <= userInput; i++) {
            //Give me a new <tr> element
            const newRow = outputTable.insertRow();
            
            //Gets me new <td> element inside the <tr> we just created
            const firstCell = newRow.insertCell();
            firstCell.innerText = i;
            
            const outputCell = newRow.insertCell();
            outputCell.innerText = divisible(i);
        }
    }

    //you'll want to look up
    //javascript loops (either while, or for will work well here)
    //conditionals (if, elseif, else) or switch statements
    //modulo operator will also come handy here.

    //For loop
    //We are initializing our counter variable(i) to 1, while it is less than or equal to userInput value, 
    //we'll continue looping
    //after each iteration, we'll increment the value of i by1

}

function divisible(num) {
    let result = "";
    if(num % 15 === 0) {
        result += "fizzbuzz";
    }
    else if (num % 5 === 0) {
        result += "buzz";
    } 
    else if(num % 3 === 0) {
        result += "fizz"
    }
    else {
        result += num;
    }

    //same behavior using switch statement
    // switch(num) {
    //     case 15:
    //         result += "fizzbuzz"
    //     break;

    //     case 5:
    //         result += "buzz"
    //     break;

    //     case 3:
    //         result += "fizz"
    //     break;

    //     default:
    //         result += num
    //     break;
    // }
    return result;
}

function calculator(value) {
}