//O ^ filtra os elementos que vocês quer

let quoteSample = "Alemanha, Brasil e Australia"
let myRegex = /[^al]/ig
console.log(quoteSample.match(myRegex))

let quoteSample2 = "3 blind mice.";
let myRegex2 = /[^aeiou0-9]/gi; 
let result2 = quoteSample2.match(myRegex2);

console.log(result2)