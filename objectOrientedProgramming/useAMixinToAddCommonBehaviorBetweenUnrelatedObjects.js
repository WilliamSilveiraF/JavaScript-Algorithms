//Adicinar comportamentos comuns entre objetos não relacionados. Exemplo: Avião e Pássaro

let flyMixin = function(obj) {
    obj.fly = function() {
        console.log("Flying, wooosh!");
    }
};

let bird = {
    name: "Donald",
    numLegs: 2
};
let plane = {
    model: "777",
    numPassengers: 524
};

flyMixin(bird);
flyMixin(plane);

bird.fly();
plane.fly();
