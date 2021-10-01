let teste = "titanic";
let myRegex = /t[a-z]*i/; //Sem o "?", myRegex vai procurar o maior intervalo possível

console.log(teste.match(myRegex));

let teste2 = "titanic";
let myRegex2 = /t[a-z]*?i/

console.log(teste2.match(myRegex2))


let text = "<h1>Winter is coming</h1>";
let myRegex3 = /<.*?>/; 
let result = text.match(myRegex3);
console.log(result);