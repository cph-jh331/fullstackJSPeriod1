var customer = { name: "Foo" }
var card = { amount: 7, product: "Bar", unitprice: 42 }
var message = `Hello ${customer.name},
want to buy ${card.amount} ${card.product} for
a total of ${card.amount * card.unitprice} bucks?`

console.log(message);

function f(x, y, ...rest) {

}

console.log(f(5, 2, true, 2, "hello World", [1, 2, 3], new Date(), {}));