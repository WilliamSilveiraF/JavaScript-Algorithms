// "\w" match with all the elements. It is equal to [A-Za-z0-9_]

let longHand  = /[A-Za-z0-9_]+/;
let shortHand = /\w+/gi;
let numbers = "42";
let varNames = "important_var";
console.log(longHand.test(numbers)); //Testando do mondo longo
console.log(longHand.test(varNames));
console.log(shortHand.test(numbers)); //Testando do modo curto 
console.log(shortHand.test(varNames));

//Note que o resultado não tem nenhuma diferença