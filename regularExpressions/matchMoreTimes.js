// O "+" combina com o elemento anterior virando consecutivo. Como no exemplo abaixdo:

let sTring = "Mississippi";
let myRegex = /[s+]/gi;
let result = sTring.match(myRegex);

console.log(result)