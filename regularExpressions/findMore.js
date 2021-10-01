//Procurar por combinações por mais vezes
let testStr = "Repeat, Repeat, Repeat";
let ourRegex = /Repeat/g;
let result = testStr.match(ourRegex);

console.log(result)

//Procurar por combinações por mais vezes e sem caseSensitive

let twinkleStar = "Twinkle, twinkle, litter star"
let starRegex = /Twinkle/ig;
let result2 = twinkleStar.match(starRegex)
console.log(result2)