let users = {
    Alan: {
      age: 27,
      online: true
    },
    Jeff: {
      age: 32,
      online: false
    },
    Sarah: {
      age: 48,
      online: true
    },
    Ryan: {
      age: 19,
      online: true
    }
};

//Como eu fiz
function dosArray(testeObj) {
let ourArr = [];
for (let user in testeObj) {
    if (testeObj[user].online == true) {
        ourArr.push(testeObj[user].online);
    }
} 
return ourArr.length
};
console.log(dosArray(users))

//freeCodeCamp
function countOnline(usersObj) {
    let result = 0;
    for (let user in usersObj) {
        if (usersObj[user].online === true) {
            result++;
        }
    }
    return result;
}
console.log(countOnline(users))