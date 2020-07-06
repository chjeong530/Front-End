"use strict";
// Function
// - fundamental building block in the program
// - subprogram can be used multiple times
// - performs a task of calculates a value

// 1. Function declaration
// function name(param1, param2) { body ... return; }
// on function === one thing
// naming: doSomthing, command, verb
// e.g. createCardAndPoint -> createCard, createPoint
// function is object in JS

function printHello(){
  console.log('Hello');
}

printHello();

function log(message){
  console.log(message);
  return 0;
}
/* TypeScript
function log(message: string): number{
  console.log(message);
  return 0;
}
*/

log('Hello@');
log(1234);


// 2. Parameters
// premitive parameters: passed by value
// object parameters: passed by reference
function changeName(obj){
  obj.name = 'coder';
}

const chan = { name: 'chan' };
changeName(chan);
console.log(chan);


// 3. Default parameters (added in ES6)
function showMessage(message, from='unknown'){
  // if (from === undefined) {
  //   from = 'unknown'
  // }
  console.log(`${message} by ${from}`);
}



// 4. Rest parameters (added in ES6)
function printAll(...args){
  for (let i=0; i < args.length; i++){
    console.log(args[i])
  }

  for (const arg of args){
    console.log(arg)
  }

  args.forEach((arg) => console.log(arg))
}

printAll('A', 'B', 'C')


// 5. Local scope
let globalMessage = 'global'; // global variable
function printMessage() {
  let message = 'hello';
  console.log(message);
  console.log(globalMessage);
  function printAnother(){
    console.log(message);
    let childMessage = 'hello'
  }
  // console.log(childMessage);
}
printMessage();
// console.log(message);


// 6. Return a value
function sum(a, b){
  return a + b;
}
const result = sum(1, 2); // 3
console.log(`sum: ${sum(1, 2)}`);


// 7. Early return, early exit
// bad 
function upgradeUser(user){
  if(user.point > 10){
    // long upgrade logic...
  }
}

// good
function upgradeUser(user){
  if(user.point <= 10){
    return;
  }
  // long upgrade logic ...
}


// First-class function
// functions are treated like any other variable
// can be assigned as a value to varibale
// can be passed as an argument to other functions.
// can be returned by another function.

// 1. Function expression
// a function declaration can be called earlier than it is defined. (hoisted)
// a function expression is created when the execution reaches itahepqpq
const print = function print() {
  console.log('print');
}
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1, 3))


// 2. Callback function using function expression
function randomQuiz(answer, printYes, printNo){
  if (answer === 'love you'){
    printYes();
  } else{
    printNo();
  }
}

const printYes = function () {
  console.log('yes!');
};

const printNo = function print() {
  console.log('no!');
};

randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);


// Arrow function
// always anonymous
const simplePrint = function (){
  console.log('simplePrint!');
};

//ouconst simplePrint = () => console.log('simplePrint!');
const add = function(a, b) { return a + b};
// const add = (a, b) => a + b;
// const add = (a, b) => {
//   do something more
//   return a * b;
// };


// IIFE: Immediately Invoked Function Expression
(function hello(){
  console.log('IIFE')
})();