// A Promise is an object that represents the eventual completion of an async operation. 
// Can be in 1 of 3 states, pending, fufilled, or rejected.

const promise = new Promise((resolve, reject) => {
    let success = true;

    setTimeout(() => {
        if (success) resolve(20)
        else reject("Promise rejected!")
    }, 1000)
})

// Lets try logging the actual promise right after we define it
// console.log(promise)

// How to handle the result of a promise? We gotta use .then for success and .catch for failure
// Then essentially is the dispatcher that runs the code within its block once the promise has been resolved
promise.then(value => console.log(`In THEN Block: ${value}`)).catch(err => console.log(`In CATCH Block: ${err}`))

console.log("App finished");