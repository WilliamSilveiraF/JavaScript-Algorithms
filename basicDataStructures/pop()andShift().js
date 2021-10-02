// pop() remove do final de um Array
let greetings = ['whats up?', 'hello', 'see ya!'];

greetings.pop();

console.log(greetings); // [ 'whats up?', 'hello' ]

// shift() remove do início de um Array

greetings.shift();

console.log(greetings); // [ 'hello' ]

//Armazenandos valores removidos

function popShift(arr) {
    let popped = arr.pop(); // 'comeplete'
    let shifted = arr.shift(); // 'challenge
    return [shifted, popped]; 
}

console.log(popShift(['challenge', 'is', 'not', 'complete'])); // [ 'challenge', 'complete' ]
console.log(popShift([1, 2, 3, 4]))