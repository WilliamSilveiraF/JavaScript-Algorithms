function convertHTML(str) {
    var teste = str.split('');
    teste = teste.map(
        item => 
        /&/.test(item) ? item.replace(/&/, "&amp;") :
        /"/.test(item) ? item.replace(/"/, "&quot;") :
        /</.test(item) ? item.replace(/</, "&lt;") : 
        />/.test(item) ? item.replace(/>/, "&gt;") : 
        /'/.test(item) ? item.replace(/'/, "&apos;s") : item
    )

    return teste.join('')
}
console.log(convertHTML("Schindler&apos;s List")); //Ainda deu erro

//Resolução
function convertHTML(str) {
    // Split by character to avoid problems.
  
    var temp = str.split("");
  
    // Since we are only checking for a few HTML elements, use a switch
  
    for (var i = 0; i < temp.length; i++) {
      switch (temp[i]) {
        case "<":
          temp[i] = "&lt;";
          break;
        case "&":
          temp[i] = "&amp;";
          break;
        case ">":
          temp[i] = "&gt;";
          break;
        case '"':
          temp[i] = "&quot;";
          break;
        case "'":
          temp[i] = "&apos;";
          break;
      }
    }
  
    temp = temp.join("");
    return temp;
  }
  
  //test here
  console.log(convertHTML("Dolce & Gabbana"));