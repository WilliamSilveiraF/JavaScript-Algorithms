let arr = [
    [ 'Twenty Dollars', 20 ],
    [ 'Twenty Dollars', 20 ],
    [ 'Twenty Dollars', 20 ],
    [ 'Twenty Dollars', 20 ],
    [ 'Ten Dollars', 10 ],
    [ 'Five Dollars', 5 ],
    [ 'Dollar', 1 ],
    [ 'Quarter', 0.25 ],
    [ 'Quarter', 0.25 ],
    [ 'Quarter', 0.25 ],
    [ 'Penny', 0.01 ],
    [ 'Penny', 0.01 ],
    [ 'Penny', 0.01 ],
    [ 'Penny', 0.01 ]
]
let value = {
    'One-hundred Dollars' : 100,
    'Twenty Dollars': 20,
    'Ten Dollars': 10,
    'Five Dollars': 5,
    'Dollar': 1,
    'Quarter': 0.25,
    'Dime': 0.1,
    'Nickel': 0.05,
    'Penny': 0.01
}
var arrKeys = Object.keys(value);

let arrDeCedulasRemovidas = [];

function somaTipoNota(arr) { //Retorna um array onde cada elemento é composto por [nome da cédula, valor da cédula * quantidade encontrada]
    let deNotasSomadas = [];
    for (let i = 0; i < arrKeys.length; i++) {
        var amountDeNotas = arr.filter(nota => nota[0] == arrKeys[i]).length;//Filtrei várias vezes o arr de referência por tipo de nota, a fim de pegar a quantidade delas.
        //Se a quantidade de cédulas daquele tipo de valor for maior que 0, dê o push no formato [nome do valor da cédula, somatório total]
        amountDeNotas > 0 ? deNotasSomadas.push([  arrKeys[i], amountDeNotas * value[arrKeys[i]] ]) : null
    }
    return deNotasSomadas
}


function removeCedula(nomeDeCedula, cid) {//Só remove uma cédula por chamada
    var cedRemovida = cid.find(nota => nota[0] == nomeDeCedula);
    var posicaoDaRemovida = cid.indexOf(cedRemovida);
    arrDeCedulasRemovidas.push(cedRemovida)
    
    if (posicaoDaRemovida == -1) {//Se a cédula que eu tentar remover não existir, retorne meu cash-in-drawer sem alteração
        return cid
    }
    cid.splice(posicaoDaRemovida, 1)
    return cid;
}

function dandoTroco(cid) {
    let troco = 0.5;
    
    for (let i = 0; i < arrKeys.length; i++) {
        while ( cid.filter(nota => nota[0] == arrKeys[i]).length > 0 && troco > 0.00 && troco >= value[arrKeys[i]] ) { //Enquanto tiver cédula no meu cash-in-dranw
            cid = removeCedula(arrKeys[i], cid); //Retorna um novo array com apenas UMA cédula removida, se a cédula que eu tentar remover não existir retorno o Array sem alteração
            troco = troco - value[arrKeys[i]] //Subtrai do troco, o valor da nota que está sendo removida
            troco = troco.toFixed(2)
        }
    }
    console.log(troco)
    if (troco > 0) { return  {status: "INSUFFICIENT_FUNDS", change: []} }
    return {status: "CLOSED", change: somaTipoNota([...arrDeCedulasRemovidas])}
}

function checkCashRegister(price, cash, cid) {
    var result = price > cash ? {status: "INSUFFICIENT_FUNDS", change: []} :
                 price == cash ? {status: "CLOSED", change: [...cid]} :
                 dandoTroco(price, cash, cid)
    return result
}

console.log(dandoTroco(arr))


