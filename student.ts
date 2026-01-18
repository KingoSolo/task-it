let studentName: string = "Dave chappelle";
let age : number = 25;
let isEnrolled: boolean = true;

console.log(`Student's name is ${studentName}`)

interface Student {
    name: string;
    age: number;
    email: string; 
    gpa? : number;
}

const student1 : Student = {
    name : "Alice Johnson",
    age : 22,
    email : "alice@gmail.com",
    gpa : 3.8
}

const student2 : Student = {
    name : "Bob Smith",
    age : 24,
    email : "bob@gmail.com"
}

console.log(student1);