//Note que a shortHand "\W" é diferente das passada "\w"
// "\W" equivale a [^A-Za-z0-9_]
let shortHand = /\W/g; 
let numbers = "42%";
let sentence = "Coding!";
console.log(numbers.match(shortHand)); //Retorna só o "%"
console.log(sentence.match(shortHand)); //Retorna só o "!"