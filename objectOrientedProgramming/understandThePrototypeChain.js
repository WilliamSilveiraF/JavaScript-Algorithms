//Todos os objetos no JavaScript (com algumas exceções) tem um prototype. 

function Bird(name) {
    this.name = name;
}

console.log(typeof Bird.prototype); // Retorna "object", Prototype's em si são objetos

//Como prototype's também são objetos, eles também podem ter seus próprios prototypes
//Object.prototype é o "prototype" de Bird.prototype
console.log(Object.prototype.isPrototypeOf(Bird.prototype));

let duck = new Bird("Donald");
console.log(duck.hasOwnProperty("name"));