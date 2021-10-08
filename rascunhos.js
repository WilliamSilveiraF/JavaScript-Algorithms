let arr = [
    [ 'TWENTY', 20 ],
    [ 'TWENTY', 20 ],
    [ 'TWENTY', 20 ],
    [ 'TWENTY', 20 ],
    [ 'TEN', 10 ],
    [ 'FIVE', 5 ],
    [ 'ONE', 1 ],
    [ 'QUARTER', 0.25 ],
    [ 'QUARTER', 0.25 ],
    [ 'QUARTER', 0.25 ],
    [ 'PENNY', 0.01 ],
    [ 'PENNY', 0.01 ],
    [ 'PENNY', 0.01 ],
    [ 'PENNY', 0.01 ]
]
let value = {
    'ONE HUNDRED' : 100,
    'TWENTY': 20,
    'TEN': 10,
    'FIVE': 5,
    'ONE': 1,
    'QUARTER': 0.25,
    'DIME': 0.1,
    'NICKEL': 0.05,
    'PENNY': 0.01
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
function contadorDeCedula(arrDeCedulas) {
    var cedulaSeparada;
    let newArrDeCedulas = [];
    for (let i = 0; i < arrKeys.length; i++) {
        let x = 0;
        cedulaSeparada = arrDeCedulas.find(nota => nota[0] == arrKeys[i])
        amountDeCedula = (cedulaSeparada[1] / value[arrKeys[i]]).toFixed(2)
        while (x < amountDeCedula) {
            newArrDeCedulas.push( [arrKeys[i], value[arrKeys[i]]] )
            x++
        }
    }
    return newArrDeCedulas
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

function dandoTroco(cid, price, cash) {
    let troco = (cash - price).toFixed(2)

    cid = contadorDeCedula(cid)

    for (let i = 0; i < arrKeys.length; i++) {
        while ( cid.filter(nota => nota[0] == arrKeys[i]).length > 0 && troco > 0.00 && troco >= value[arrKeys[i]] ) { //Enquanto tiver cédula no meu cash-in-dranw
            cid = removeCedula(arrKeys[i], cid); //Retorna um novo array com apenas UMA cédula removida, se a cédula que eu tentar remover não existir retorno o Array sem alteração
            troco = troco - value[arrKeys[i]] //Subtrai do troco, o valor da nota que está sendo removida
            troco = troco.toFixed(2)
        }
    }
    
    if (troco > 0) { return {status: "INSUFFICIENT_FUNDS", change: []} }
    
    return {status: "OPEN", change: somaTipoNota([...arrDeCedulasRemovidas])}
}

function checkCashRegister(price, cash, cid) {
    var result = price > cash ? {status: "INSUFFICIENT_FUNDS", change: []} :
                 price == cash ? {status: "CLOSED", change: [...cid]} :
                 dandoTroco(cid, price, cash)
    return result
}

console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]))