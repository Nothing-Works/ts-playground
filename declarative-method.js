'use strict'

let fruit = [ 'Banana', 'Strawberry', 'Orange', 'Apple', 'Grape', 'Plum' ]

fruit = fruit.filter((f) => {
    return !f.includes('e')
})

console.log(fruit)

let users = [
    {
        name: 'Andrew',
        email: 'andrew@example.com',
        stars: 5
    },
    {
        name: 'Ashley',
        email: 'ashley@example.com',
        stars: 9
    },
    {
        name: 'Gaston',
        email: 'gaston@example.com',
        stars: 1
    }
]

const star = users.reduce((acc, cur) => {
    return { stars:acc.stars + cur.stars }
})

console.log(star)


let users1 = [
    {
        name: 'Andrew',
        email: 'andrew@example.com',
        stars: 5
    },
    {
        name: 'Ashley',
        email: 'ashley@example.com',
        stars: 9
    },
    {
        name: 'Gaston',
        email: 'gaston@example.com',
        stars: 1
    }
]

users1 = users1.map((u) => {
    return {
        email:u.email
    }
}
)

console.log(users1)
