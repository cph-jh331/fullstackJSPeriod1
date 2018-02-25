const evens = [0,1,2,3,4,5,6,7,8,9,10];

let odds  = evens.map(v => v + 1)
let pairs = evens.map(v => ({ even: v, odd: v + 1 }))
let nums  = evens.map((v, i) => v + i)
console.log(pairs);
