// Objects
// one of the JavaScript's data types.
// a collection of related data and/or functionality.
// Nearly all objects in JavaScript are instances of Object.
// object = { key : value };

// 1. Literals and properties
const name = 'chan';
const age = 4;
print(name, age);
function print(person) {
  console.log(person.name);
  console.log(person.age);
}

const chan = {name: 'chan', age: 4};
print(chan);

const obj1 = {}; // 'object literal' syntax
const obj2 = new Object; // 'object constructor' syntax

// with JavaScript magic (dynamically typed language)
// can add properties later
chan.hasJob = true;
console.log(chan.hasJob);

// can delete properties later
delete chan.hasJob;

// 2. Computed properties
// key should be always string
console.log(chan.name);
console.log(chan['name']);
chan['hasJob'] = true;
console.log(chan.hasJob);

function printValue(obj, key){
  console.log(obj[key]);
}
printValue(chan, 'name');
printValue(chan, 'age');

// 3. Property value shorthand
const person1 = {name: 'bob', age:2}
const person2 = {name: 'steve', age:3}
const person3 = {name: 'dave', age:4}
const person4 = makePerson('chan', 30)
const person5 = Person('chan', 30)

function makePerson(name, ave){
  return {
    name, 
    age };
}

// 4. Construcotr Function
function Person(name, ave){
    this.name = name; 
    this.age = age;
}

// 5. in operator : property existence check (key in obj)
console.log('name' in chan);
console.log('age' in chan);
console.log('random' in chan);

// 6. for..in vs for..of
// for (key in obj)
// object
console.clear();
for (key in chan){
  console.log(key);
}

// for (value of iteralbe)
// array
const array = [1, 2, 3, 4, 5];
for(let i=0; i < array.length; i++){
  console.log(array[i]);
}
for(value of array){
  console.log(value);
}

// 7. Fun cloning
// Object.assign(dest, [obj1, obj2, obj3, ... ])
const user = {name:'chan', age:'20'}
const user2 = user
user2.name = 'coder';
console.log(user);

// old way
const user3 = {};
for (key in user){
  user3[key] = user[key];
}

const user4 = {};
Object.assign(user4, user);
// const user4 = Object.assign({}, user);
console.log(user4);

// another example
const fruit1 = { color: 'red' };
const fruit2 = { color: 'blue', size: 'big'};
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color);
console.log(mixed.size);
