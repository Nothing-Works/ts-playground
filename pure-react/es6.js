// arrow function
function makeFullName(first, last) {
    return `${first} ${last}`
}

const arrow = (first, last) => {
    return `${first} ${last}`
}

console.log(makeFullName('Andy', 'Song'))
console.log(arrow('Andy', 'Song'))


// this keyword

function printThis() {
    console.log(this)
}

printThis()

// let vs const vs var scope
// var is inside the whole function, let and const are only scope block

// in this case var will modify the same value but let will have always have a new value
function printNumber() {
    for (var i = 0; i < 5; i++) {
        setTimeout(() => {
            console.log(i)
        }, 2000)
    }
}

printNumber()

// statements vs. expressions
let aa = 1 + 2;
// 1 + 2 is expression and let a = 1 + 2 is statement
// in react component we can only return expression, not statement,
// we can turn some statements into expression if we want.

// string interpolation
// any expression can go inside {}
const firstName = 'Andy';
const lastName = 'Song';

console.log(`${firstName} ${lastName} ${ 1 === 1 ? 'good' : 'bad'}`);

// rest & spread operators
// 2 names for three dots that look the same

function printArgs(...args) {
  console.log(args);
}

printArgs(1, 2, 3)

const nums = [1, 2, 3, 4]

printArgs(...nums);

const user = {
  userName: 'andy',
  firstName: 'andy',
  lastName: 'song'
}

const newUser = {
  ...user,
  email:'andy@gmail.com'
}

console.log(newUser);

// Destructuring arrays and objects
// it will not modify the original object or array
const arr = [1, 2, 3, 4, 5]

const [a, b, ...others] = nums;

const user1 = {
  userName1: 'andy',
  firstName1: 'andy',
  lastName1: 'song'
}

const {firstName1, lastName1} = user1;
// const {firstName1, ...name} = user1;

// we can even have a default value
const {missing = 'missing'} = user1;

console.log(firstName);
console.log(lastName);

// Mutable vs. Immutable
// by {...user} object or array so we get new object/array without mutating
// for nested reference types, need to update each level.

// Find Elements in JavaScript Arrays with find and findIndex
const spices = [
  { id: 1, name: 'Black Pepper' },
  { id: 2, name: 'Turmeric' },
  { id: 3, name: 'Cumin' },
  { id: 4, name: 'Coriander' },
  { id: 6, name: 'Coriander' },
  { id: 7, name: 'Coriander' },
  { id: 5, name: 'Chili Powder' }
];

console.log(spices.find(v => v.id === 1));
console.log(spices.findIndex(v => v.id === 1));

// Slice and Splice

const word = ['c', 'o', 'd', 'e']

// slice will not mutate
const sliced = word.slice(1, 4); 
const sliced1 = word.slice(1);
const sliced2 = word.slice(-1); // will give you last item

// splice will mutate
const spliced = word.splice(1, 1)
console.log(sliced);

// Concat and the Spread Operator

const numbers = [1, 2, 3, 4]
const moreNumbers = [5, 6, 7, 8]

// push will modify, concat and spread will not modify
const added = [...numbers, ...moreNumbers]

// map function on array
// and if we change the property inside object, it's going to modify it
// so we should create a new one.
// so inside map do not mutate state!!! always return new if you can
// inside map do not assign to the original property

// filter to remove items.

// reduce 
const veggieDrawer = [
  '3 apples',
  '2 bad tomatoes',
  'fresh celery',
  '4 good onions',
  '1 bad onion',
  'rotten cilantro',
  '2 rotten red peppers',
  'garlic'
];

const reduced = veggieDrawer.reduce((acc, cur) => {
  if (!cur.includes('bad')) {
    acc.push(cur)
  }
  return acc;
}, [])

console.log(reduced);

// import and export
// named import/export, default import/export,
// import with * as _ so this is import everything and assign it to _

// sometimes we still need to use babel transforms modern js to older js.