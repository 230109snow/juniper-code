let foo : string = 'bar'
foo = 'hello world!'

let bar : number = 3

let array : number[] = [1, 2, 3]
// array = [1, '2', {}]; ts will try to stop you from doing this kind of things

function greet() : void {
    console.log('hello world')
}

function add(a: number, b: number) : number {
    return a + b;
}

const someTable : HTMLTableElement = document.getElementById('some-table-id') as HTMLTableElement; 

someTable.createTBody();

//any is when you're fed up with ts and just want to write some weird js
let backToJs : any = '2';
backToJs = 3
backToJs = [];

//Unknown is type safe any
let tbd : unknown;
tbd = 3;

interface exampleInterface {
    a : string,
    b : number
}

const usingInterface : exampleInterface  = {
    a : 'foo',
    b : 3
}

function domOps(elem : HTMLElement) : void {
    elem.id = 'some id';
    elem.innerHTML = '<div>some class</div>';
}

// domOps('string')

function usingCustomInterface(param : exampleInterface) : void {
    console.log(param);
}

usingCustomInterface(usingInterface);

const notExampleInterface : any = {
    a : 'hello',
    b: 3,
    c: [],
    d: {
        hello: 'world'
    }
};
// Even though the variable notExampleInterface is not of interface "ExampleInterface", I was able to pass it to usingCustomInterface fn because the shape of the object satisfied the required properties that must exist in the exampleInterface
usingCustomInterface(notExampleInterface);

//union types
interface oneThatUsesDate {
    created : Date | string | number
}

// any versus unknown
function fn1(bar : any) {
    bar();
}
function fn2(foo: unknown) {
    // foo();
}

let z : unknown;
let y : any = z;
let x : number = z as number;
let v : string = z as string;

let w : any = 'string'
w = 3
w = []
w = {}
let t : string = w;
let i : number = w;