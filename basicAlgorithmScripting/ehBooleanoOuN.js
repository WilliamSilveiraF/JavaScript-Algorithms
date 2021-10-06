function booWho(bool) {
    if (typeof bool == "boolean" || typeof bool == "boolean") { //Se o type de "bool" me voltar "boolean" retorne "true" para função. Que significa sim, o parâmetro dado é booleano
        return true
    }
    return false
}

console.log(booWho(false));