const S = [5, 6, 7];
//S = [1, 2, 3]; Dá erro porque const não pode ser reatribuído
S[2] = 45; //É possível alterar Array mesmo sendo declarado com Const.
console.log(S);

const X = [5, 7, 2];
function editInPlace() {
  // Only change code below this line
 X[0] = 2
 X[1] = 5 
 X[2] = 7
  // Using s = [2, 5, 7] would be invalid

  // Only change code above this line
}
editInPlace();