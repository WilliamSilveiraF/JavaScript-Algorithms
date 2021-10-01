//Se tover o elemento na string, ele vai ser selecionado, senão segue o fluxo normal sem a seleção dele 

let soccerWord = "gooooooooooal!";
let gPhrase = "gut feeling";
let oPhrase = "over the moon";
let goRegex = /go*/;

console.log(soccerWord.match(goRegex));
console.log(gPhrase.match(goRegex));
console.log(oPhrase.match(goRegex));

//meus testes

let goRegex2 = /g*o/;
console.log(soccerWord.match(goRegex2))
console.log(gPhrase.match(goRegex2))
console.log(oPhrase.match(goRegex2))