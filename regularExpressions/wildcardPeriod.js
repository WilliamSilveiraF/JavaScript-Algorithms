// With the dot ".", you don't need to match the character

let humStr = "I'll rehug a song";
let hugStr = "Bear rhug";
let huRegex = /..ug/; // tanto faz a quantidade de dots se você quer o final
result  = huRegex.test(humStr);
result2 = huRegex.test(hugStr);

console.log(result);
console.log(result2);