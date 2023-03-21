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



///objects
const myDog = {

    name: "Don",
    legs: 5,
    tails:1,
    friends:["hi","ha"],

};


///Accessing Object Properties with Dot Notation
// Setup
const testObj = {
    "hat": "ballcap",
    "shirt": "jersey",
    "shoes": "cleats"
};

// Only change code below this line
const hatValue = testObj.hat;      // Change this line
const shirtValue = testObj.shirt;    // Change this line



//Accessing Object Properties with Dot Notation
// Setup
const testObj = {
    "hat": "ballcap",
    "shirt": "jersey",
    "shoes": "cleats"
};
const hatValue = testObj.hat;      // Change this line
const shirtValue = testObj.shirt;    // Change this line

// Setup
const testObj = {
    "an entree": "hamburger",
    "my side": "veggies",
    "the drink": "water"
};

// Only change code below this line
const entreeValue = testObj["an entree"];   // Change this line
const drinkValue = testObj["the drink"];    // Change this line


//Accessing Object Properties with Variables
// Setup
const testObj = {
    12: "Namath",
    16: "Montana",
    19: "Unitas"
};

// Only change code below this line
const playerNumber = 16;  // Change this line
const player = testObj[playerNumber];   // Change this line


//Updating Object Properties

// Setup
const myDog = {
    "name": "Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
};

myDog.name = "Happy Coder";

//Add New Properties to a JavaScript Object

const myDog = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
};

myDog.bark ="woof";

//Delete Properties from a JavaScript Object

// Setup
const myDog = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"],
    "bark": "woof"
};
delete myDog.tails;

//Using Objects for Lookups

// Setup
function phoneticLookup(val) {
    let result = "";
    const lookup =  {
        "alpha":"Adams",
        "bravo":"Boston",
        "charlie":"Chicago",
        "delta":"Denver",
        "echo":"Easy",
        "foxtrot":"Frank",
    }
    result = lookup[val];
    return result;
}
phoneticLookup("charlie");

//Testing Objects for Properties
function checkObj(obj, checkProp) {
    if (obj.hasOwnProperty(checkProp)) {
        return obj[checkProp];
    } else {
        return "Not Found";
    }
}




