function range(min, max, intervalo = 1) {
    let newArr = [];

    const step = min <= max ? Math.abs(intervalo) : -Math.abs(intervalo)
    for (let x = min; min <= max ? x <= max : x >= max; x += step) {
        newArr.push(x);
    }
    return newArr
}

console.log(range(19, 10, 2))

function finalPrice(tax) {
    return function(price) {
        return price * (1 + tax)
    }
}
const nycFinalPrice = finalPrice(0.0875)

console.log(nycFinalPrice(25.1))


const myArr = [1, 2, 3, 4, 5, 6]

const numbersV2 = myArr.map(el => el * 2)

console.log(numbersV2);

const students = [
    { name: 'Carlos', score: 3.5 },
    { name: 'Emma', score: 6.9},
    { name: 'Andrew', score: 8.6},
    { name: 'Ambrozzi', score: 9.8}
];

const getScore = el => el.score

const result = students
.map(getScore)
.map(Math.ceil)

console.log(students, result)

const greaterThanZero = el => el > 0

console.log(myArr.filter(greaterThanZero))

const greatStudent = student => student.score >= 8

console.log(students.filter(greatStudent))

//Parte do Reduce()

const sum = (total, el) => total + el
const total = myArr.reduce(sum, 100)
console.log(total)

