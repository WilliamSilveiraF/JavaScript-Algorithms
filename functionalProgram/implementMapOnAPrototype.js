var s = [23, 65, 98, 5];

Array.prototype.myMap = function(callback) {
  var newArray = [];
  for (let i = 0; i < callback.length; i++) {
    let novoNumber= callback[i];
    newArray.push(novoNumber);
  }
  return newArray;
};

var new_s = s.myMap(function(item) {
  return item * 2;
});