//Search and replace words

let wrongText = "The sky is silver.";

let silverRegex = /silver/;

let result = wrongText.replace(silverRegex, "blue");

console.log(result);


// Replacement string with dollar signs $

console.log("Code Camp".replace(/(\w+)\s(\w+)/, '$2 $1'));

let str = "one two three";
let fixRegex = /(\w+)\s(\w+)\s(\w+)/;
let replaceText = "$3 $2 $1";
let result2 = str.replace(fixRegex, replaceText);

console.log(result2)