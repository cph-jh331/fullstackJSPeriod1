//? means optional, so you do not not need it.
interface IPerson {
    readonly id: number;
    first: string;
    lastNme: string;
    email: string;
    landLine?: string;
}

function personLogger(person: IPerson) {
    // person.id = 123; constant readonly cannot be changed.
    const str = `
    ******************************
    ID: ${person.id}
    Name: ${person.first} ${person.lastNme}
    Phone: ${person.landLine}
    ******************************
    `;
    console.log(str);
}

let p1: IPerson = {
    id: 34,
    first: 'bobby',
    lastNme: 'frans',
    email: 'email@email.com',
    landLine: "+45 33445566"
};
personLogger(p1);



