var numArray = [];
for (var i = 0; i < 3; i++) {
  numArray.push(i);
}
console.log(numArray); // p Array vao ser composto por [0, 1, 2]
console.log(i); // o i vai ter o valor de 3

var printNumTwo;
for (var a = 0; a < 3; a++) {
  if (a === 2) {
    printNumTwo = function() {
      return a; // Note que não a função não retorna 2, e sim 3.
    };
  }
}
console.log(printNumTwo());
console.log(a);

//Alterando para Let
let escrevaNumero2;
for (let b = 0; b < 3; b++) {
  if (b === 2) {
    escrevaNumero2 = function() {
      return b;
    };
  }
}
console.log(escrevaNumero2());
console.log(b); // Note que a função dá erro, pois b só existe localmente no loop.

function checkScope() {
    let i = 'function scope';
    if (true) {
      let i = 'block scope';
      console.log('Block scope i is: ', i); // Com o let o i tem valor de 'block scope', mas só aqui! Pois let é uma variável local
    }
    console.log('Function scope i is: ', i);
    return i;
  }
