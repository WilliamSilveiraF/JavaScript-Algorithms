//Quando uma função regular, é possível passar argumentos em uma função flecha
const doubler = (item) => item * 2;
console.log(doubler(4));

//Se a função flecha tem apenas um parâmetro, o parênteses podem ser omitidos
const dobro = item => item *2;
console.log(dobro(2))

//É possível passar mais de uma parâmetro numa função flecha
const multiplier = (item, multi) => item * multi;
console.log(multiplier(10, 3));

//Reeleitura
var myConcat = function(arr1, arr2) {
    return arr1.concat(arr2);
  };
  
  console.log(myConcat([1, 2], [3, 4, 5]));
//Substituindo 
const minhaConcatenação = (arr1, arr2) => arr1.concat(arr2);
console.log(minhaConcatenação([1], [1]))