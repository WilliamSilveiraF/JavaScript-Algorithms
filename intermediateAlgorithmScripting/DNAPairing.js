function pairElement(str) {
    str = str.split('');
    let myArr = [];
    
    for (let i = 0; i < str.length; i++) {    
        (str[i] == 'G') ? myArr.push(['G','C']) : null;
        (str[i] == 'C') ? myArr.push(['C','G']) : null;
        (str[i] == 'A') ? myArr.push(['A','T']) : null;
        (str[i] == 'T') ? myArr.push(['T','A']) : null;
    }
    return myArr
}
  
console.log(pairElement("ATCGA"));

//Outra maneira interessante de fazer 

function pairElement2 (str) {
    var pairs = {
        A: "T",
        T: "A",
        C: "G",
        G: "C"
    };
    let arr2 = str.split("")
    return arr2.map(x => [x, pairs[x]]);
}
console.log(pairElement2("ATCGA"))