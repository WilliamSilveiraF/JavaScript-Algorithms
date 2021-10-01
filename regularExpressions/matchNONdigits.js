// Para combinar não digitos usa-se "\D". Note que para combinar digitos usa-se "\d"

//"\D" equivale a [^0-9]


let movieName = "2001: A Space Odyssey";
let noNumRegex = /\D/g; 
let result = movieName.match(noNumRegex).length;

console.log(result)