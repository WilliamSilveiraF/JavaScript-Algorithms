//Essa sintaxe pode ser usada quando você não tem todas as variáveis disponíveis
function unCurried(x, y) {
    return x + y;
}
console.log(unCurried(1, 2))

function curried(x) {
    return function(y) {
        return x + y;
    }
}
console.log(curried(2)(3))//Primeiro a curried é feita

const curried2 = x => y => x + y

console.log(curried(2)(3))


function add(x) {
    return function(y) {
        return function(z) {
            return x + y + z;
        };
    };
}
console.log(add(10)(20)(30));