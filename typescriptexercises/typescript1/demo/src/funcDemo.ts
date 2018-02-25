function sayHello(fName: string, lName: string, role: string = 'Stripper') {
    console.log(`
    Hello ${fName} ${lName}!
    Your role is: ${role}
    `);
}
// sayHello("Bob", "Frandsen", "Teacher");
// sayHello("Hanne", "Hansen");

class Person {
    constructor(private fName: string, private lName: string) {
    }
    sayHelloEventually() {
        const self = this;//here is the this the classes this...
        setTimeout(function () {
            // this.fName, this points to the function, which does not have
            // have an fName 
            // so you should use self.fName;           
            // console.log(`Hi ${this.fName}`);
            console.log(`Hi ${self.fName}`)
        });
    }
    sayHelloEvt2() {
        setTimeout(() => {
            console.log(`Hi ${this.fName}`);
        })
    }
}
let p = new Person("Kurt", "Jensen");
p.sayHelloEvt2();
export { };