'use strict'
// used to be just var, but now it's let or const
// the difference is how the variables are scoped
// var is scoped to the function level, let and const are block scoped
// Hoisting also works differently, var is hosted but let and const are not
var name = 'andy'
// every time we set variable in the top level, it's going to set to the global window object
// window.name is 'andy', but with let and const it's not set to window object
// so do not use var, and just use let and const

// email should not be accessible outside of if condition
// email1 and email2 are accessible inside if
function init() {
    if (true) {
        var email = 'andy@gmail.com'
        let email1 = 'andy1@gmail.com'
        const email2 = 'andy1@gmail.com'
    }
    document.getElementById('output').innerHTML = email
    // can not do this as email1 and email2 are out of scope
    // document.getElementById('output').innerHTML = email1
    // document.getElementById('output').innerHTML = email2
}

init()


function init1() {
    // using var to define a variable the email variable will be hoisted to the top of the function but with undefined
    document.getElementById('output').innerHTML = email
    document.getElementById('output').innerHTML = email1
    var email = 'andy@gmail.com'
    // with let then we will get an error that email1 is not defined.
    let email1 = 'andy@gmail.com'
}

init1()

// difference between let and const
// let we can modify later, const we can not

let type = 'andy'
type = 'another'

const a = 'andy'
// can not do this
// a = 'asdf'
const ojb = {
    name: 'andy',
    email:'andy@gmail.com'
}

// this is ok as this is not really modify the variable this is changing the property which is ok.
ojb.name = 'anohter'

// use const if you can
