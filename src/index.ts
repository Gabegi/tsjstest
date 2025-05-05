console.log("Hello");
let age: number = 20;
if (age < 50) age += 10;
console.log(age);

let sales: number = 123_456_789;

let course: string = "TypeScript";
let is_published: boolean = false;

let mytype;

mytype = 1;
mytype = "hello";

let numbers: number[] = [];

let user: [number, string] = [1, "Bob"];

const small = 1;
const medium = 2;
const large = 3;

const enum Size {
  small,
  medium,
  large,
}

enum Size2 {
  Small,
  Medium,
  Large,
}

enum Size3 {
  Small = 2,
  Medium,
  Large,
}

const enum Size4 {
  Small = "s",
  Medium = "m",
  Large = "l",
}

let mySize: Size = Size.large;
console.log(mySize); // 2

// (variable it takes): return type
function calculateTax(income: number): number {
  if (income < 50000) return income * 1.2;
  else return 0; //undefined
}
