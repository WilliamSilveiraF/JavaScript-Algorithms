/*
Há um princípio na programação chamado Não repita a si mesmo.
Repetir código é um problema porque qualquer mudança requer conserto no código em múltiplos lugares
*/
function Cat(name) {
    this.name = name;
}
  
Cat.prototype = {
  constructor: Cat,
  // eat: function() { console.log("nom nom nom"); }
};
  
function Bear(name) {
  this.name = name;
}
  
Bear.prototype = {
  constructor: Bear,
  // eat: function() { console.log("nom nom nom"); }
};
  
function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

