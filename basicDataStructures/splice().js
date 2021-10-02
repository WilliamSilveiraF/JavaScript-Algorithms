// splice() serve para remover elementos seguidos que não estão nem no começo e nem no fim de um Array
let array = ['today', 'was', 'not', 'so', 'great'];

console.log(array); // [ 'today', 'was', 'not', 'so', 'great' ]

array.splice(2, 1); //Removendo um Array de posição específica

console.log(array); // [ 'today', 'was', 'great' ]

let array2 = ['today', 'was', 'not', 'so', 'great', 'test', 'test2'];

array2.splice(1, 4); // removendo por intervalo de posições
console.log(array2); // [ 'today', 'test', 'test2' ]

let array3 = ['today', 'was', 'not', 'so', 'great', 'test', 'test2'];
array3.splice(4, 1); // Note que quando a ordenada X é maior que Y, a sintaxe do splice muda
console.log(array3); // [ 'today', 'was', 'not', 'so', 'test', 'test2' ]