const myArray = [["John", 23], ["cat", 2]];
myArray.push(["dog", 3])
//method push - добавляет к массиву элемент в конце
const myArray = [["John", 23], ["cat", 2]];
var removedFromMyArray = myArray.pop()
//.pop() function.- удаляет последний элемент в массиве

const myArray = [["John", 23], ["dog", 3]];
var removedFromMyArray = myArray.shift()
//.shift() function.- удаляет первый элемент в массиве

const myArray = [["John", 23], ["dog", 3]];
myArray.shift();
myArray.unshift(["Paul", 35]);
//.unshift() function.- добавляет к массиву элемент в начале

const myList = [["Chocolate Bar", 15],["Water", 20],["Fish", 50],["Meat", 60],["Cakes", 20]];

/////
function reusableFunction() {
    console.log("Hi World");
}
reusableFunction();
/////
function functionWithArgs(a, b) {
    console.log(a + b);
}
functionWithArgs(10, 5);
///////
function timesFive(num){
    return num*5;
}
let myGlobal=10;
function fun1() {
    oopsGlobal=5;// Assign 5 to oopsGlobal here
}
function fun2() {
    let output = "";
    if (typeof myGlobal != "undefined") {
        output += "myGlobal: " + myGlobal;
    }
    if (typeof oopsGlobal != "undefined") {
        output += " oopsGlobal: " + oopsGlobal;
    }
    console.log(output);
}
// Setup
const outerWear = "T-Shirt";

function myOutfit() {
    const outerWear="sweater";
    return outerWear;
}
myOutfit();

/////

let sum = 0;
function addThree() {
    sum = sum + 3;
}
function addFive(){
    sum = sum + 5;
}
addThree();
addFive();


/////

// Setup
let processed = 0;

function processArg(num) {
    return (num + 3) / 5;
}
processed=processArg(7);