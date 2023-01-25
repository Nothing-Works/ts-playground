// 'use strict'

// old way
function init() {
    return 'andy'
}

// new way
const func = () => 'andy'
const func1 = test => test

// this is saving space with inline function

// the most important thing is `this`
// arrow function will pass the parent level this down into the function
// Inside a regular function, this keyword refers to the function where it is called.
// However, this is not associated with arrow functions. Arrow function does not have its own this.
// So whenever you call this, it refers to its parent scope.
// should not be used as methods.


// more about this
// this is referencing the object that is executing the current function
// if this is inside the method then this is the object
// if this is inside the function then this is the global (window)

const video = {
    title:'a',
    play() {
        console.log(this)
    }
}

// video.play()

function playVideo() {
    console.log(this)
}

playVideo()

// this === current execution context
// if it's global then it's either window or global
// it references who is calling the function
