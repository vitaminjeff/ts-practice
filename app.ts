// console.log('Time to get started...');

function add(n1: number, n2: number, showResult: boolean, phrase: string) {
    // if (typeof n1 !== 'number' && typeof n2 !== 'number') {
    //     throw new Error('Incorrect input!');
    // }
    
    const result = n1 + n2;
    if(showResult) {
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
let resultPhrase = 'Result is: '
resultPhrase = 0;

const result = add(number1, number2, printResult, resultPhrase);
