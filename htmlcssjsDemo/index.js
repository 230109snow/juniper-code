let foo = 'bar'
console.log(foo)
const bar = 'foo'

var hello = 'world'
var num = 1
var boolean = true
var arr = [1, 2, 'apple', true]

foo = 3
console.log(foo)

foo = false
console.log(foo)

// bar = false
console.log(arr)

//function
function greet() {
    //this name variable, doesn't exist outside of greet function
    let name = "auryn";
    console.log("hello " + name);
    if(true) {
        //this creates a block scope
        let x = 3;
        const z = 10;
        //max scope for variables made with var keyword is function scope
        var y = 6;
        console.log(x, y, z);
    }
    //because x is contained in the block scope above, and we are out of scope here, we no longer have reference to x at this point
    console.log(z);  //reference error
    console.log(y);
    for(var i = 0; i < arr.length; i++) {

    }
    console.log(i);
}
greet()
console.log('y', y);

function arithmeticOperations() {
    const a = 2, b = 5;
    const c = a + b;
    const d = b - a;
    const e = b / a; //2.5 //not an integer division
    const f = b % 2;
    const g = a * b;
    let h = 1;
    h++;
    console.log(h) //2
    h += 5; // h = h + 5
    console.log(a, b, c, d, e)
}

function conditionalOperators() {
    if(true == false) {
        //false
    }
    //logical AND
    if(true && false) {
       //false 
    }

    //logical OR
    if(false || true) {
        //True
    }

    if((true && false) || true) {

    }

    if(!false)  {
        //true
    }

    //strict equals, will not type coerce, and will return true only when the data type and the value are equal
    if(true === true) {

    } else if(true) {
        
    }
    else {

    }

    if(!undefined) {
        //truthy
    }
    if("") {
        //falsey
    }
    if(null) {
        //falsey
    }

    let arr = []
    //example of using truthy values
    //if arr variable is not undefined,
    if(arr) {
        //then do stuff with the arr
    }
}

//javascript object is a collection of key value pair
//keys have to be unique
//the values doesn't have to be
let object = {
    key : 'value',
    key2 : 2,
    key3 : [1,2,3,4,5],
    a: {
        b: 'value'
    }
}