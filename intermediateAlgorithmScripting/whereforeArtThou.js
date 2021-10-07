function whatIsInAName(collection, source) {
    var srcKeys = Object.keys(source); //Pega todas as chaves do objeto principal
    
    
    return collection.filter(function(obj) { // Como é uma função de filtro tem que retornar true ou false
        for (var i = 0; i < srcKeys.length; i++) {
            if (
                !obj.hasOwnProperty(srcKeys[i]) || obj[srcKeys[i]] !== source[srcKeys[i]] //Se o item não tem a propiedade que eu passei ou possui a propiedade diferente daque eu procuro retorne false. E não passe ele.
            ) { return false; }
        }
        return true;
    });
}
  
const result = whatIsInAName([{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }], { "apple": 1, "bat": 2 });
console.log(result)
