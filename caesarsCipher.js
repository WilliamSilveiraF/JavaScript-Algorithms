let par = {"A": "N", "B": "O", "C": "P", "D": "Q", "E": "R", "F": "S", "G": "T", "H": "U", "I": "V", "J": "W", "K": "X", "L": "Y", "M": "Z",
           "N": "A", "O": "B", "P": "C", "Q": "D", "R": "E", "S": "F", "T": "G", "U": "H", "V": "I", "X": "K", "W": "J", "Y": "L", "Z": "M"}
    //THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG. Alterei algumas combinações para satisfazer os requisitos do freeCodeCamp

function rot13(str) {
   str = str.split('')
   str = str.map(letter => par[letter] || letter);
   return str.join('');
}

console.log(rot13("SERR PBQR PNZC"))
console.log(rot13("SERR YBIR?"))
console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."))