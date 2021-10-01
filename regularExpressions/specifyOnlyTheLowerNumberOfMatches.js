let A4 = "haaaah";
let A2 = "haaah";
let A100 = "h" + "a".repeat(100) + "h";
let multipleA = /ha{3,}h/

console.log(multipleA.test(A4));
console.log(multipleA.test(A2));
console.log(multipleA.test(A100));