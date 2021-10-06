//Se algum for True, vai retornar True
var numbers = [10, 50, 8, 220, 110, 11];
let result = numbers.some(function(currentValue) {
    return currentValue < 10;
});

console.log(result); //O 8 é menor que 10