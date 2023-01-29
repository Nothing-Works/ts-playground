'use strict'

let fruit = [ 'bananas', 'apples', 'strawberries' ]

let fruitObj = {
    type:'banana',
    color:'yellow'
}

const fruitM = new Map()

fruitM.set(1, 'banana')
fruitM.set(2, 'apple')

// we can also delete from map
// use has to check the key exists
// and loop over each, using forEach or for of
// and the key and values can be anything
console.log(fruitM)
console.log(fruitM.get(1))

const fruitS = new Set()
fruitS.add('banana')
fruitS.add('apple')
// can loop over them, only unique values
