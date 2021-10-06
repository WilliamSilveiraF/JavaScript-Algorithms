function sliceArray(anim, beginSlice, endSlice) {

    var anim = anim.slice(beginSlice, endSlice)
    return anim;

}
var inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
sliceArray(inputAnim, 1, 3);