//Match com número de vezes específico

let A4 = "haaaah";
let A3 = "haaah";
let A100 = "h" + "a".repeat(100) + "h";
let multipleHA = /ha{3}h/;

console.log(multipleHA.test(A4)); //Falso, o "a" se repete 4x
console.log(multipleHA.test(A3)); //Verdadeiro, o "a" se repete 3x
console.log(multipleHA.test(A100)); //Falso, o "a" se repete 100x