//Gerar um Array de todos objetos com object.keys()

let users = {
    Alan: {
      age: 27,
      online: false
    },
    Jeff: {
      age: 32,
      online: true
    },
    Sarah: {
      age: 48,
      online: false
    },
    Ryan: {
      age: 19,
      online: true
    }
  };
  
function getArrayOfUsers(obj) {
  return Object.keys(obj)
}

//console.log(getArrayOfUsers(users));

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

var arrValue = Object.keys(value);

function getPropriedade(valorQuePassei) {
      let result;
      for (let i = 0; i < arrValue.length; i++) {
        value[arrValue[i]] == valorQuePassei ? result = arrValue[i] : null
      }
      return result
}
console.log(getPropriedade(5))