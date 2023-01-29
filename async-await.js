'use strict'

// async/await is just promise
async function main() {
    setTimeout(() => {
        console.log('done');
        return 'user'
    }, 2000);

    // this will execute one by one, in this case it will take 4s.
    const user = await getUserData();
    const userString = await getUserString();

    // this will fire two together/at the same time
    const userPromise = getUserData()
    const userStringPromise = getUserString();

    // we will get the result here around the same time which will be 2s.
    const user1 = await userPromise;
    const userString1 = await userStringPromise;
}

function getUserData() {
    return new Promise((resolve,reject)=> {
        setTimeout(() => {
            resolve({
                id:1,
                name:'andy'
            })
        }, 2000);
    })
}

function getUserString() {
    return new Promise((resolve,reject)=> {
        setTimeout(() => {
            resolve({
                id:1,
                name:'andy'
            })
        }, 2000);
    })
}

const user = await main();
console.log(user);