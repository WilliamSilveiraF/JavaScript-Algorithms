//Match whitespace " "
let whiteSpace = "Whitespace. Whitespace everywhere!";
let spaceRegex = /\s/g;

console.log(whiteSpace.match(spaceRegex));


//Match non-Whitespace " "
let nonWhiteSpace = "Whitespace. Whitespace everywhere!";
let nonSpaceRegex = /\S/g;

console.log(nonWhiteSpace.match(nonSpaceRegex)) //Retorna sem espaço