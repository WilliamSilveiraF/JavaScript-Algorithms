const getMousePosition = (x, y) => ({
    x: x,
    y: y
})
console.log(getMousePosition(1,2))

const createPerson = (name, age, gender) => {
    return {
        name,
        age,
        gender
    }
}
console.log(createPerson("Guerrero", 18,"M"))