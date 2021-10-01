const person = {
    name: "Angel Di Maria",
    age: 28
};

const greeting = `Olá, meu nome é ${person.name}! Eu tenho ${person.age} anos de Idade`

console.log(greeting)

const result = {
    sucess: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreank"],
    skipped: ["no-extra-semi", "no-dup-keys"]
};

function makeList(arr) {
    "use strict";
    const failureItems = [];
    for (let i = 0; i < arr.length; i++) {
        failureItems.push(`<li class= "text-warning">${arr[i]}</li>`)
    }
    return failureItems;
}
const failuresList = makeList(result.failure);
console.log(failuresList)