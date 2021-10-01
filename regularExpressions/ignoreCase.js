//Ignorar maiúscular em regex
let myString = "freeCodeCamp";
let fccRegex = /cOdE/i;
let result = fccRegex.test(myString)
console.log(result)