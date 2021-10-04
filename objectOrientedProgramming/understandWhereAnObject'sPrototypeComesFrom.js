//Assim como pessoas herdam genes de seus pais, um objeto herda o prototype diretamente da função constructor que criou ele.

function Bird(name) {
    this.name = name;
}
let duck = new Bird("Donald");

console.log(Bird.prototype.isPrototypeOf(duck));