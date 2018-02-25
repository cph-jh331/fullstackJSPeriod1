# JaveScript Period 1
HAR IKKE NÅET ALT... :(
- [day1 exercises, plain js](https://github.com/cph-jh331/fullstackJSPeriod1/tree/master/day1exercises)
- [promise execises](https://github.com/cph-jh331/fullstackJSPeriod1/tree/master/promiseexercises)
- [async exercises](https://github.com/cph-jh331/fullstackJSPeriod1/tree/master/asyncawaitexercises)
- [typescript exercises](https://github.com/cph-jh331/fullstackJSPeriod1/tree/master/typescriptexercises)
- [webhack exercises](https://github.com/cph-jh331/fullstackJSPeriod1/tree/master/webhackexercises)
- [es6 exercies](https://github.com/cph-jh331/fullstackJSPeriod1/tree/master/es6)


## Explain differences between Java and JavaScript. You should include both topics related to the fact that Java is a compiled language and JavaScript a scripted language, and general differences in language features.

JavaScript er et dynamisk skrevet script language, mens Java er et statisk skrevet kompileret language. Da JavaScript er et script language, så behøver det ikke kompileres for at kunne køre på en maskine. JS kører hovedsageligt i browseren, som har en indbygget js engine, mens Java skal kompileres før man kan kører koden.

##	Explain the two strategies for improving JavaScript: ES6 (es2015) + ES7, versus Typescript. What does it require to use these technologies: In our backend with Node and in (many different) browsers.

* ES6+7 (transpiles med Babel til es5):  
Arrow functions, promises, async, block scope variables(let, const), klasser, moduler. 

* TypeScript (transpiles med NodeJS med en typescript compiler til es5):  
Types, klasser, interfaces, moduler. Syntaxen minder meget om Java/C#.  Gør det muligt at få compile-time errors, hvilket kan være en stor hjælp. 


##	Explain generally about node.js, and when it “makes sense” and npm, and how it “fits” into the node echo system.
NodeJS er en JS runtime bygget på v8 moteren. Den gør brug at et event-driven non blocking I/O. Den kommer med et af det største open source biblioteker i verden: NPM.
NPM gør det muligt at genbruge og bygge videre på nogle af de mange libraries som er tilgængelige.  
NodeJS kan bruges til:
* Applikationer hvor der er mange input og outputs
* Real time chat server
* Web servers
* Rest servers
* Streaming servers

##	Explain about the Event Loop in Node.js
[Forklaring på event loop og hvad den gør](https://www.youtube.com/watch?v=8aGhZQkoFbQ)
NodeJS event loop gør det muligt at organisere de forskellige opgaver, så hvis man fx gør brug af async funktioner, så blokere det ikke hele runtime.

##	Explain (some) of the purposes with the tools Babel and WebPack, using examples from the exercises
* Babel bliver brugt til at transpile nyere versioner af js til es5, så næsten alle browsere er i stand til at forstå den kode man har skrevet.
* Webpack gør det muligt at lave sine egne "bundles".

##	Explain the purpose of “use strict” and also Linters, exemplified with ESLint

"use strict"; gør at man ikke kan bruge undeclared variabler. Linters kigger efter syntaks errors.

# features in JavaScript

##  Variable/function-Hoisting
Hoisting (hejse) gør at alle deklarationer bliver hejst op til toppen. variabler er bundet til funktionen hvor de er deklareret.
```javascript
// Function declarations are completely hoisted
function frans() {
    bob();
    return 'jens';
}
console.log(frans());
function bob() {
    console.log('sdf');
}
//var declarations is hoisted
var x = 6;
var y;
console.log(`x: ${x}, y: ${y}`);
y = 4; //init/assignment is not hoisted.
```

## this in JavaScript and how it differs from what we know from Java/.net.
This i JavaScript referer altid til funktionen som den er inde i, mens det i jave er klassen som holder styr på this. Du kan komme uden om problemet med enten at binde this, eller gøre brug af arrow-functions.

```ts
class Person {
    constructor(private fName:string, private lName:string){
        this.fName = fName;
    }
    sayHelloFail(){
        setTimeout(function(){
            // there is no this.fName in the function, so it will be undefined
            console.log(`Hello ${this.fName}`);
        },)
    }
    sayHelloArrowFix(){
        setTimeout(() => {    
            console.log(`Hello ${this.fName}`);
        },);    
    }
    sayHelloFixSelf(){        
        const self = this;
        setTimeout(function(){
            console.log(`Hello ${self.fName}`);
        },);
    }
}
let p = new Person("Bobby", "Olsen");
p.sayHelloFail();
p.sayHelloArrowFix();
p.sayHelloFixSelf();
```

## Function Closures and the JavaScript Module Pattern
Variabler kan være i lokal og global scope. Globale variable kan gøres lokale med "closures". Funktion closure betyder at, variablerne ikke er globale.  
Module pattern betyder at man laver private funtioner inde i en function.
```js
 var module = (function() {
     var counter = 0;
     return function(){return counter+= 1};
 })();
```

##	Immediately-Invoked Function Expressions (IIFE)
IIFE bruges til at undgå variable (hoisting). IIFE er mønster/pattern, hvor funktionen kalder sig.
```js
 (function() {
     var counter = 0;
     return function(){return counter+= 1};
 })();
```

## JavaScripts Prototype
Prototyper er Javascript måde at lave OOP på. Fx er .map en funktion på array prototypen. Det betyder at alle objekter som er et array har den funktion.  
Alle objekter i javascript "nedarver" fra objekt, som igen "nedarver" funktioner og props fra objekt.prototype, osv.  
Man kan også tilføje sine egne som jeg fx gør her:
```js
Array.prototype.myFilter = function (callback) {
    var resultArray = [];
    this.forEach(element => {
        if (callback(element) !== false) {
            resultArray.push(element);
        }
    });
    return resultArray;
}
```

## User defined Callback Functions
Man kan giver functioner med som parameter også kalde den inde i funktionen.
```js
function myMap(array, callback) {
    return callback(array);
}

function callbackForMap(arr) {
    var resultArray = [];
    arr.forEach(element => {
        resultArray.push(element.toLocaleUpperCase());
    });
    return resultArray;
}
console.log(myMap(names, callbackForMap));
```
## Explain the methods map, filter and reduce
* Filter, generer et nyt array med elementer som er sande.

```js
//homemade to simply show how it works. Does not have all parameters.
var names = ["Lars", "Peter", "Jan", "Bo"];
Array.prototype.myFilter = function (callback) {
    var resultArray = [];
    this.forEach(element => {
        if (callback(element) !== false) {
            resultArray.push(element);
        }
    });
    return resultArray;
}
console.log(names.myFilter(name => name.length <= 3));
```

* Map, returnér et array af samme længde, men med "edited" elementer.
```js
//homemade to simply show how it works. Does not have all parameters.
var names = ["Lars", "Peter", "Jan", "Bo"];
Array.prototype.myMap = function (callback) {
    var resultArray = [];
    this.forEach(element => {
        resultArray.push(callback(element));
    });
    return resultArray;
}
console.log(names.myMap(name => name.toLocaleUpperCase()));
```

* Reduce, reducer et array til et enkelt objekt
```js
var members = [{ name: "Peter", age: 18 }, { name: "Jan", age: 35 }, { name: "Janne", age: 25 }, { name: "Martin", age: 22 }];
function reducerAvgNoMap(a, v, i, arr) {
    return (i !== arr.length - 1) ? a + v.age : (a + v.age) / arr.length;
}
// Start value for accumulator in reduce is 0:
console.log(members.reduce(reducerAvgNoMap, 0));
// output: 25

var votes = ["Clinton", "Trump", "Clinton", "Clinton", "Trump", "Trump", "Trump", "None"];
function reducerVotes(a, v) {
    if (a[v]) {
        a[v]++;
    } else {
        a[v] = 1;
    }
    return a;
}
console.log(votes.reduce(reducerVotes, {}/*man kan sætte start værdien på accumulatoren her*/));
//output: { Clinton: 3, Trump: 4, None: 1 }
```

##	Provide examples of user defined reusable modules implemented in Node.js
