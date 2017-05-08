function countLetters(str){
  var obj = {}
  str = str.split(" ").join("");
  //obj['hello']

  for(var i = 0; i < str.length; i++) {
    var l = str[i]
    if (obj[l]){
    // obj[l]++;
    obj[l].push(i);
   }else {
    obj[l] = [i];
  }
}
console.log(obj)

}




countLetters("lighthouse in the house");




