function mutation(arr) {
    let test = arr[1].toLowerCase();
    console.log(test);
    let target = arr[0].toLowerCase();
    console.log(target);
    for (let i = 0; i < test.length; i++) {
      if (target.indexOf(test[i]) < 0) return false;
    }
    return true;
  }

  console.log("hello".indexOf("hela"));