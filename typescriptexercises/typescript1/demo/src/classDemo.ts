class Person {
    private static nextId: number = 100;
    public readonly id: number;
    private _name: string;

    constructor(name: string, private email: string) {
        this.id = Person.nextId++
        this._name = name;
    }

    get getName(): string {
        return this._name;
    }

    set setName(name: string) {
        this._name = name;
    }
}

let p3: Person = new Person("Bob", "emial@emal.dk");
console.log(`${p3.id}, ${p3.getName}`);
p3 = new Person("Frans", "email@email.dk");
console.log(`${p3.id}, ${p3.getName}`);