let arrTeste = [
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
let arrAgregado = [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]].reverse()

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

//console.log(arrKeys[0])
//console.log(contadorDeCedula(arrAgregado))

function somaTipoNota(arr) { //Retorna um array onde cada elemento é composto por [nome da cédula, valor da cédula * quantidade encontrada]
    let deNotasSomadas = [];
    for (let i = 0; i < arrKeys.length; i++) {
        var amountDeNotas = arr.filter(nota => nota[0] == arrKeys[i]).length;//Filtrei várias vezes o arr de referência por tipo de nota, a fim de pegar a quantidade delas.
        //Se a quantidade de cédulas daquele tipo de valor for maior que 0, dê o push no formato [nome do valor da cédula, somatório total]
        amountDeNotas > 0 ? deNotasSomadas.push([  arrKeys[i], (amountDeNotas * value[arrKeys[i]]).toFixed(2) ]) : null
    }
    return deNotasSomadas
}
console.log(somaTipoNota(contadorDeCedula(arrAgregado)))