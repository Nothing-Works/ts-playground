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
      console.log(i);
    }, 2000);
  }
}

printNumber()