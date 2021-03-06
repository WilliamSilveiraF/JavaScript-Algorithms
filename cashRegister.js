const value = {
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
const arrKeys = Object.keys(value);

var arrDeCedulasRemovidas = [];

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


function checkCashRegister(price, cash, cid) {
    let troco = (cash - price).toFixed(2);
    var cid = [...cid]
    
    /*SE SÓ EXISTIR UMA CÉDULA NO CAIXA, ELE NÃO SACA*/
    if ( cid.filter(cedula => cedula[1].toFixed(2) > 0.00 ).length <= 1 ) {
        return {status: "CLOSED", change: [...cid]}
    }
    
    /*CONTADOR DE CÉDULAS*/
    var cedula; 
    let newArrDeCedulas = [];
    let k = 0;
    while (k < arrKeys.length) {
        cedula = cid.find(nota => nota[0] == arrKeys[k]) //Ache a cédula que eu quero.
        qtdCedula = (cedula[1] / value[arrKeys[k]]).toFixed(2) //Calcule a quantidade de Cédulas daquele valor
        let x = 0
        while (x < qtdCedula) {
            newArrDeCedulas.push( [ [arrKeys[k]], value[arrKeys[k]] ] ) //Adicione uma cédula ao meu dataBank
            x++
        }
        k++//Some o K e começe novamente
    }
    cid = newArrDeCedulas /*CÉDULAS CONTADAS*/
    
    /*Calculando Troco*/
    let jx = 0;
    while (jx < arrKeys.length) {
        while ( cid.filter(nota => nota[0] == arrKeys[jx]).length > 0 && troco > 0.00 && troco >= value[arrKeys[jx]] ) {
            cid = removeCedula(arrKeys[jx], cid);
            troco = troco - value[arrKeys[jx]]
            troco = troco.toFixed(2)
        }
        jx++;
    }
    
    //Soma Por Tipo de Nota
    var copiaArrRemovidas = arrDeCedulasRemovidas.slice(0,)
    let deNotasSomadas = [];
    let z = 0
    while (z < arrKeys.length) {
        var amountDeNotas = copiaArrRemovidas.filter(nota => nota[0] == arrKeys[z]).length;
        amountDeNotas > 0 ? deNotasSomadas.push([  arrKeys[z], amountDeNotas * value[arrKeys[z]] ]) : deNotasSomadas
        z++
    }

    if (troco > 0) return {status: "INSUFFICIENT_FUNDS", change: []}
    return {status: "OPEN", change: [...deNotasSomadas]}
}

console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]))