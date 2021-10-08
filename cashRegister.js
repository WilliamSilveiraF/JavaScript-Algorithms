let value = {
    'ONE-HUNDRED DOLLARS' : 100,
    'TWENTY DOLLARS': 20,
    'TEN DOLLARS': 10,
    'FIVE DOLLARS': 5,
    'DOLLAR': 1,
    'QUARTER': 0.25,
    'DIME': 0.1,
    'NICKEL': 0.05,
    'PENNY': 0.01
}
var arrKeys = Object.keys(value);

function somaTipoNota(arr) { //Retorna um array onde cada elemento é composto por [nome da cédula, valor da cédula * quantidade encontrada]
    let deNotasSomadas = [];
    for (let i = 0; i < arrKeys.length; i++) {
        var amountDeNotas = arr.filter(nota => nota[0] == arrKeys[i]).length;//Filtrei várias vezes o arr de referência por tipo de nota, a fim de pegar a quantidade delas.
        //Se a quantidade de cédulas daquele tipo de valor for maior que 0, dê o push no formato [nome do valor da cédula, somatório total]
        amountDeNotas > 0 ? deNotasSomadas.push([  arrKeys[i], amountDeNotas * value[arrKeys[i]] ]) : null
    }
    return deNotasSomadas
}


function checkCashRegister(price, cash, cid) {
    
    var result = price > cash ? {status: "INSUFFICIENT_FUNDS", change: []} :
                 price == cash ? {status: "CLOSED", change: [...cid]} :
                 {status: "OPEN", change: fxCalcularTroco(price, cash, cid)}
    return result
}
  
var result = checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);
console.log(result)