let testStr = "freeCodeCamp";
let testRegex = /Code/;
console.log(testRegex.test(testStr))
//A sintaxe acima faz parte de Expressões Regulares, e serve para localizar trechos em strings

//Caps faz diferença
let testeStr2 = "freeCodeCamp"
let testeRegex2 = /code/;
console.log(testeRegex2.test(testeStr2))

//Procurar mais de um elemento, o "|" funciona como "ou"
let petString = "James has a pet cat."
let petRegex = /dog|cat|bird|fish/
let result = petRegex.test(petString)

console.log(result)