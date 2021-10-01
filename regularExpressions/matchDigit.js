//Para localizar digitos em uma string usamos "\d"

let movieName = "2001: A Space Odyssey";
let numRegex = /\d/g;
let result = movieName.match(numRegex).length;

console.log(result)
