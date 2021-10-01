const myFunc = function () {
    const myVar = "value";
    return myVar; 
}
console.log(myFunc)
//ES6 fornece um sintaxe para o código acima
const myFunc2 = () => {
    const myVar = "value";
    return myVar;
}
console.log(myFunc2)

// Quando a função há somente um valor de retorno é possível fazer assim:
const myFunc3 = () => "value";
console.log(myFunc3)

//mais exemplos
const magic = () => new Date
console.log(magic)