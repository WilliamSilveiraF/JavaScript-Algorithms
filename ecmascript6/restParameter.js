// Com rest parameter você pode criar uma funação com muitos argumentos sem especificar na função
function howMany(...args) {
    return  "You have passed " + args.length + " arguments.";
}
console.log(howMany(0, 1, 2)); // 3 argumentos = 0, 1 e 2
console.log(howMany("string", null, [1, 2, 3], {})); // 4 argumentos = "string", null, [1, 2, 3], {}

const sum = (x, y, z) => {
    const args = [x, y, z];
    return args.reduce((a, b) => a + b, 0);
}
console.log(sum(0, 1, 2))

//É possivel reescrever a função acima com:
const sum2 = (...args) => {
    return args.reduce((a, b) => a + b, 0);
  }
console.log(sum(0, 1, 2))