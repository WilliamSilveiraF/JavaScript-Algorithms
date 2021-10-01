let A4 = "aaaah";
let A2 = "aah";
let multipleA = /a{3,5}h/;
let resultA4 = multipleA.test(A4);
let resultA2 = multipleA.test(A2);

console.log(resultA4);
console.log(resultA2);