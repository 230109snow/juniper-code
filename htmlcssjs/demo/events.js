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

function fizzbuzz(event) {
    console.log(event)
    //prevents the default behavior from happening (aka refresh)
    event.preventDefault()
    
    //prevents event from bubbling up to its parents
    // event.stopPropagation();

    //closure, creating private scope by enclosing a function within another function
    //this is equivalent to setting a helper method private in OOP languages
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

    const userInput = document.querySelector('#fizzbuzz-input').value;
    const outputTable = document.querySelector('#fizzbuzz-output');

    if(userInput && userInput >= 1 && userInput <=100) {
        if(outputTable) {
            //For loop
            //We are initializing our counter variable(i) to 1, while it is less than or equal to userInput value, 
            //we'll continue looping
            //after each iteration, we'll increment the value of i by1
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
        
    }

    //you'll want to look up
    //javascript loops (either while, or for will work well here)
    //conditionals (if, elseif, else) or switch statements
    //modulo operator will also come handy here.


}

// different ways to create functions
//function declaration
function calculator(value) {}

//anonymous function assigned to a variable
//callback function
const fn = function(fnAsParameter) {
    fnAsParameter();
}

fn(calculator);

//fn2 variable is pointing to calculator function
const fn2 = calculator;
fn2();

//arrow function
const fn3 = () => {}

//IIFE, if you want to run the function right away
//pretty handy for set up code
(function(){

})();

//parent element is reacting to events happening in its children
const parentOfBtns = (event) => {
    console.log(event);
    if(event.target.id === 'btn1')  {
        console.log('btn 1 was clicked')
    } else if(event.target.id === 'btn2')  {
        console.log('btn 2 was clicked')
    } else if(event.target.id === 'btn3')  {
        console.log('btn 3 was clicked')
    }
}