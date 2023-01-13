"use strict";
let foo = 'bar';
foo = 'hello world!';
let bar = 3;
let array = [1, 2, 3];
// array = [1, '2', {}]; ts will try to stop you from doing this kind of things
function greet() {
    console.log('hello world');
}
function add(a, b) {
    return a + b;
}
const someTable = document.getElementById('some-table-id');
someTable.createTBody();
//any is when you're fed up with ts and just want to write some weird js
let backToJs = '2';
backToJs = 3;
backToJs = [];
//Unknown is type safe any
let tbd;
tbd = 3;
const usingInterface = {
    a: 'foo',
    b: 3
};
function domOps(elem) {
    elem.id = 'some id';
    elem.innerHTML = '<div>some class</div>';
}
// domOps('string')
function usingCustomInterface(param) {
    console.log(param);
}
usingCustomInterface(usingInterface);
const notExampleInterface = {
    a: 'hello',
    b: 3,
    c: [],
    d: {
        hello: 'world'
    }
};
// Even though the variable notExampleInterface is not of interface "ExampleInterface", I was able to pass it to usingCustomInterface fn because the shape of the object satisfied the required properties that must exist in the exampleInterface
usingCustomInterface(notExampleInterface);
// any versus unknown
function fn1(bar) {
    bar();
}
function fn2(foo) {
    // foo();
}
let z;
let y = z;
let x = z;
let v = z;
let w = 'string';
w = 3;
w = [];
w = {};
let t = w;
let i = w;
