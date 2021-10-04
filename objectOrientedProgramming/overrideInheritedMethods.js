function Animal() { }

Animal.prototype.eat = function() {
    return "nom nom nom";
};
function Bird() { }

Bird.prototype = Object.create(Animal.prototype);

Bird.prototype.eat = function() {//Alterando características herdadas
    return "pack pack pack";
};

console.log(Bird.prototype.eat());