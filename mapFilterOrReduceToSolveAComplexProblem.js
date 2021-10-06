const squareList = arr => {
    let newArr = [];
    newArr = arr.filter(greaterThanZero).filter(ehInteiro)
    newArr = newArr.map(n => n * n)
    return newArr; 
    
};

const greaterThanZero = el => el > 0

const ehInteiro = num => num % parseInt(num) === 0

const squaredIntegers = squareList([4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2]);
console.log(squaredIntegers);

console.log(ehInteiro(3.2))