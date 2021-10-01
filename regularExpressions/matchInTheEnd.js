//Combinar o fim de uma string

let theEnding = "This is a never ending story"; 
let storyRegex = /story$/;
console.log(storyRegex.test(theEnding)); //Vai retornar "True" porque a string termina em story
let noEnding = "Sometimes a story will have to end"
console.log(storyRegex.test(noEnding)) //Vai retornar "False" poruqe a string não termina em story