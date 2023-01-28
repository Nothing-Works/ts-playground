'use strict'

const myPromise = new Promise((resolve, reject) => {
    // call an api
    setTimeout(() => {
        // reject('sorry')
        resolve({ id:1, name:'andy' })
    }, 2000)
})

const getMoreUserDetails = (user) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`${user.name}hello`)
        }, 2000)
    })
}

myPromise.then(getMoreUserDetails)
    .then((data) => {
        return console.log(data)
    })
    .catch((e) => {
        return console.log(e)
    })
