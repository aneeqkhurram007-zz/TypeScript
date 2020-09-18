export {};
let name1 = "Aneeq Khurram";
console.log(name1);
let x = 30;
const y = 10;
x = 365;
let sum = x + y;
console.log(sum);
let isBegginer: boolean = true;
let total: number = 8.55648;
let name: string = "Sheikh";
name = "true";
let sentence: string = `My name is ${name} 
and I am a Begineer`;
console.log(sentence);
console.log(total.toFixed(2));
let n: null = null;
let u: undefined = undefined;

//Array
let person1: [string, number] = ["Aneeq", 20];
//Enum
enum Color {
  Red,
  Green = 6,
  Blue,
}
let c: Color = Color.Red;
console.log(c);
//Any Type
let randomValur: any = 10;
randomValur = true;
randomValur = "Bishwas";
let myVar: unknown = 10;
//Tyoe Interfernce
// let b: number = 89;
let b = 21;
// b = "Aneeq";
function add(num1: number, num2: number = 10): number {
  return num1 + num2;
}

console.log(add(5));
// console.log(add(5));

interface Person {
  firstName: string;
  lastName: string;
}
function fullName(pers: Person) {
  console.log(`${pers.firstName} ${pers.lastName}`);
}
let p = {
  firstName: "Aneeq",
  lastName: "Sheikh",
};
fullName(p);
//Class
class Employee {
  employeeName: string;
  constructor(name: string) {
    this.employeeName = name;
  }
  greet() {
    console.log(`Good Morning ${this.employeeName}`);
  }
}
let employee1 = new Employee("Aneeq");
console.log(employee1.employeeName);
employee1.greet;
class Manager extends Employee {
  constructor(managerName: string) {
    super(managerName);
  }
  delegateWork() {
    console.log(`Manager delegating tasks`);
  }
}
let m1 = new Manager("Bruce");
m1.delegateWork;
m1.greet;
m1.employeeName;
