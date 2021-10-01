//Você pode setar intervalos de acordo com o alfabeto como aqui [a-e]. Letras entre "a" e "e"
let catStr = "cat";
let batStr = "bat";
let matStr = "mat"; //Não volta mat porque m não está no intervalo entre a e e
let bgRegex = /[a-e]at/g;
console.log(catStr.match(bgRegex));
console.log(batStr.match(bgRegex));
console.log(matStr.match(bgRegex));