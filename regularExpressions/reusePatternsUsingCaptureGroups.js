let repeatStr = "row row row your boat"

let repeatRegex = /(\w+) \1 \1/; // Atenção à sintaxe

console.log(repeatRegex.test(repeatStr));
console.log(repeatStr.match(repeatRegex));

let repeatNum = "42 42 42";
let reRegex = /(\d+) \1 \1/;
let result = reRegex.test(repeatNum);

console.log(result)