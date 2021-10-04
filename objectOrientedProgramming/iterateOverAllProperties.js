function Bird(name) {
    this.name = name;
}

Bird.prototype.numLegs = 2;

let duck = new Bird("Donald");

console.log(duck.numLegs)

// Colocando todas as propiedades em OwnProps e prototipos em prototypeProps
let ownProps = [];
let prototypeProps = [];

for (let property in duck) {
    if(duck.hasOwnProperty(property)) {
        ownProps.push(property);
    } else {
        prototypeProps.push(property);
    }
}
console.log(ownProps);
console.log(prototypeProps);