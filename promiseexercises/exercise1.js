// As you hopefully already have realized, promises are much more convenient to use,
// compared to asynchronous callbacks. And when we get to async/await (which relies 
// on promises) you will think of asynchronous callbacks as “ludicrous”. In this 
// exercise you will wrap a callback based design in a promise, so you can use it 
// with the .then notation (and later, with async/await)

// In this exercise you must create a design to produce an object with 6 secure 
// randoms as sketched below:
// {
//   "title": "6 Secure Randoms",
//   "randoms": [
//     {"length": 48,"random": "A string with 48 random hex-characters"},
//     {"length": 40,"random": "A string with 40 random hex-characters"},
//     {"length": 32,"random": "A string with 32 random hex-characters"},
//     {"length": 24,"random": "A string with 24 random hex-characters"},
//     {"length": 16,"random": "A string with 16 random hex-characters"},
//     {"length": 8,"random":  "A string with 8 random hex-characters"}
//   ]
// }

// The 6 strings must be presented in the order given above.

// c) Use es2015 Promises to solve the problem.
// Hints: 
// Create a function makeSecureRandom(size) that returns a promise, using the callback based 
// design,provided by the randomBytes(..) method.
// Since the result from one calculation does not influence the next (only order matters), 
// use Promise.all(..) to execute the operations in parallel.

const crypto = require('crypto');
function makeSecureRandom(size) {
    return new Promise((resolve, reject) => {
        crypto.randomBytes(size, function (err, buffer) {
            if (err) {
                reject(err);
            }
            else {
                resolve({ "length": size, "random": buffer.toString('hex') })
            };
        });
    });
};

Promise.all([makeSecureRandom(48), makeSecureRandom(40),
makeSecureRandom(32), makeSecureRandom(24),
makeSecureRandom(16), makeSecureRandom(8)])
    .then(resolve => {
        let secureRandoms = {
            "title": "6 Secure Randoms",
            "randoms": resolve
        };
        // Send this object when you call rest api
        console.log(secureRandoms);
    })
    .catch(reject => {
        console.log(reject)
    });