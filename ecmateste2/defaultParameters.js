// ECMA6 criou a possibilidade de parametros padrões para uma função

const greeting = (name = "Anonymous") => "Hello " + name;

console.log(greeting("William")); // Como eu defini um parâmetro, meu parâmetro padrão não será utilizado
console.log(greeting()); // Como eu não defini um parâmetro, meu parâmetro padrão será atualizado

const increment = (number, value = 1) => number + value;
console.log(increment(5, 2))
console.log(increment(5))// Como você não definiu o value, então ele vai ser 1 pois é o parâmetro padrão
