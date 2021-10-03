function factorialize(num) {
    var x = 1;
    if (num == 0) {
        return x
    } else {
        for (let i = 1; i <= num; i++) {
            x = x * i;
        } 
    }  
    return x;
}
console.log(factorialize(10));

//Daria para fazer também usando recursão
function factorialize(num) {
    if (num === 0) {
      return 1;
    }
    return num * factorialize(num - 1);
}
console.log(factorialize(5));