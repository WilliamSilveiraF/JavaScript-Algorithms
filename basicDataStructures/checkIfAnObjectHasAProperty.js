//Checar se um objeto possui certa proiedade
let users = {
    Alan: {
      age: 27,
      online: true
    },
    Jeff: {
      age: 32,
      online: true
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
console.log(users.hasOwnProperty('Ryan'));
console.log(users.Alan.hasOwnProperty('age'));
console.log(('Ryan') in users);

/*
Finish writing the function so that it returns true if the object passed to it contains all four names, Alan, Jeff, Sarah and Ryan and returns false otherwise.
*/
function isEveryoneHere(userObj) {
    if (
        userObj.hasOwnProperty("Alan") &&
        userObj.hasOwnProperty("Jeff") &&
        userObj.hasOwnProperty("Sarah") &&
        userObj.hasOwnProperty("Ryan")
    ) {
        return true;
    }
    return false
}
console.log(isEveryoneHere(users))