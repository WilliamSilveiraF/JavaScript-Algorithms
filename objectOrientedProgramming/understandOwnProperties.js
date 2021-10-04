//Armazenando propiedades de Objetos
let ownProps = [];

function Bird(name) {
    this.name = name;
    this.numLegs = 2;
}

let duck = new Bird("Donald");
let canary = new Bird("Tweety");


for (let property in duck) {
    if(duck.hasOwnProperty(property)) {
        ownProps.push(property);
    }
}

console.log(ownProps)