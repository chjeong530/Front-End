// 1. String concatenation
console.log('my' + ' cat');
console.log('1' + 2);
console.log(`string literals: 

1 + 2 = ${1 + 2}`);

// 2. Numeric operators
console.log(1 + 1); // add
console.log(1 - 1); // substract
console.log(1 * 1); // divide
console.log(1 / 1); // multiply
console.log(5 % 2); // remainder
console.log(2 ** 3); // exponentation


// 3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter;
// counter = counter + 1;
// preIncrement = counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);
const postIncrement = counter++;
// postIncrement = counter;
// counter = counter + 1;
console.log(`postIncrement: ${postIncrement}, counter: ${counter}`);
const preDecrement = --counter;
console.log(`postDecrement: ${postDecrement}, counter: ${counter}`);
const postDecrement = counter--;
console.log(`postDecrement: ${postDecrement}, counter: ${counter}`);


// 4. Assignment operators
let x = 3;
let y = 6;
x += y; // x = x + y;
x -= y;
x *= y;
x /= y;


// 5. Comparison operators
console.log(10 < 6); // less than
console.log(10 <= 6); // less than or equal
console.log(10 > 6); // more than
console.log(10 >= 6); // more than or equal


// 6. Logical operators: || (or), && (and), ! (not)
const value1 = false;
const value2 = 4 < 2;

// || (or), finds the first truthy value
console.log(`or: ${value1 || value2 || check()}`)

// often used to compress long if-statement
// nullableObject && nullableObject.something

if (nullableObject != null){
  nullableObject.something;
}

function check() {
  for (let i = 0; i < 10 ; i++){
    // wasting time
    console.log('');
  }
  return true;
}
// ! (not)
console.log(!value1);


// 7. Equality
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

// === strict equality, no with type conversion
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

// object equality by reference
const chan1 = { name: 'chan' }
const chan2 = { name: 'chan' }
const chan3 = chan1;
console.log(chan1 == chan2)  // False
console.log(chan1 === chan2) // False
console.log(chan1 === chan3) // True

// equality - puzzler
console.log(0 == false);
console.log(0 === false);
console.log('' == false);
console.log('' === false);
console.log(null == undefined);
console.log(null === undefined);


// 8. Conditional operators: if
// if, else if, else
const name = 'coder';
if (name === 'chan'){
  console.log('Welcome, Chan!');
} else if(name === 'coder'){
  console.log('You are amazing coder')
} else {
  console.log('unknown');
}


// 9. Ternary operator: ?
// condition ? value1 : value2;
console.log(name === 'chan'?'yes':'no');


// 10. Switch statement
// use for multiple if checks
// use for enum-like value check
// use for multiple type checks in TS
const browser = 'IE';
switch (browser){
  case 'IE':
    console.log('go away!');
    break;
  case 'Chrome':
    console.log('love you!');
    break;
  case 'Firefox':
    console.log('love you!');
    break;
  default:
    console.log('same all!');
    break;
}


// 11. Loops
// while loop, while the condition is truthy,
// body code is executed.
let i = 3;
while(i>0){
  console.log(`while: ${i}`);
  i--;
}

// do while loop, body code is executed first,
// then check the condition.
do{
  console.log(`do while: ${i}`);
  i--;
} while(i>0);


// 12. for loop, for(begin; condition; step)
for(let i = 3; i>0; i--){
  // inline variable declaration
  console.log(`inline variable for: ${i}`);
}