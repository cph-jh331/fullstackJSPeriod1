let isDone: boolean = true;
isDone = false;

let count: number;
count = 34;

let user: string = "Kurt Jensen";

let msg = `**************
 HELLO ${user} welcome today!
**************
`;

console.log(msg);

let numbers: number[] = [1, 2, 3, 4, 5, 6];
let numbers2: Array<number> = [2, 4, 6, 8, 10];
numbers2.push(300);

let numberString: any = 1;
numberString = "5";

function logInfo(info: any): void {
    console.log(info);
}

//Enums:
let skill: number = 0;
//numeric enums:
enum skills {
    Low, Medium, High, Expert
}
if (skill === skills.Low) {
    //do something.
}
if (skill === skills.Expert) {
    //stop going to class.
}

//String enums:
enum color {
    orange = 'orange', pink = 'pink', golden = 'golden'
}
