let arrFinal = [];

function titleCase(str) {
    let arrDePalavras = str.split(' ');
    for (let i = 0; i < arrDePalavras.length; i++) {
        arrFinal.push(Formatando(arrDePalavras[i])); 
    }
  return arrFinal.join(' ');
}
console.log(titleCase("teasDASEda, Teasdaera, teadsadsa"))

function Formatando(umaString) {
    //Transformando minha String em um Array
    var minhaNovaString = umaString.split('');
    
    //Formatando a PRIMEIRA LETRA
    //Removendo a primeira letra do meu Array
    var PrimLetra = minhaNovaString.shift();
    //Minha primeira letra removida do meu Array para maiúsicula. a => A
    PrimLetra = PrimLetra.toUpperCase();
    
    minhaNovaString = maquinaDeMinuscula(minhaNovaString); // [T,E,s,t,E] => [t,e,s,t,e]
    //colocar a letra MAIÚSCULA na frente do meu array só com letras minúscula.
    minhaNovaString.unshift(PrimLetra);
    //Transforma um Array em Palavra novamente
    minhaNovaString = minhaNovaString.join('');

    return minhaNovaString
}

function maquinaDeMinuscula(arrayComLetras) { //Transforma todas as letras de um array de letras em minúsculas [T,E,s,T,e] => [t,e,s,t,e]
    let novoArraySoMinusculas = [];
    for (let y = 0; y < arrayComLetras.length; y++) {   
        var lowLetter = arrayComLetras[y].toLowerCase(); //Pega a letra do Array e transforma em minúscula
        novoArraySoMinusculas.push(lowLetter); //Coloca no meu array só com minúscula
    }
    return novoArraySoMinusculas;
}
