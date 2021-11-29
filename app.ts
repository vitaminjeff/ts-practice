// console.log('Time to get started...');

function add(n1: number, n2: number, showResult: boolean, phrase: string) {
  // if (typeof n1 !== 'number' && typeof n2 !== 'number') {
  //     throw new Error('Incorrect input!');
  // }

  const result = n1 + n2;
  if (showResult) {
    console.log(phrase + result);
  } else {
    return n1 + n2;
  }
}

// let number1: number = 5; // redundant
// let number1: number; // okay if not initialized
let number1 = 5; // same as 5.0, use type inference

const number2 = 2.8;
const printResult = true;
let resultPhrase = "Result is: ";
// resultPhrase = 0; // build time error

const result = add(number1, number2, printResult, resultPhrase);

// objects

// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string]; // tuples
// } = {
//   name: "Maximilian",
//   age: 30,
//   hobbies: ["Sports", "Cooking"],
//   role: [2, "author"],
// };

const ADMIN = 0;
const READ_ONLY = 1;
const AUTHOR = 2;

const person = {
  name: "Maximilian",
  age: 30,
  hobbies: ["Sports", "Cooking"],
  role: 0,
};

// person.role.push("admin"); // shouldn't allow this, but typescript doesn't allow this
// person.role[1] = 10; // supported type check
// person.role = [0, 'admin', 'user']; // supported type check

let favoriteActiviites: string[];
favoriteActiviites = ["Sports"];

console.log(person.name);
for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
  // console.log(hobby.map()); // ERROR
}

if (person.role === ADMIN) {
  console.log("is admin");
}
