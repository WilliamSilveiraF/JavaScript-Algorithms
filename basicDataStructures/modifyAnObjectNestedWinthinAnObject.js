//Alterando objetos complexos

let nestedObject = {
    id: 123456789,
    date: '2 de Outubro de 2021',
    data: {
        totalUsers: 99,
        online: 80,
        onlineStatus: {
            active: 67,
            away: 13,
            busy: 8
        }
    }
}
nestedObject.data.totalUsers = "teste";
nestedObject.data.onlineStatus.busy = 10;

console.log(nestedObject);