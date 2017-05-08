//var str = "abca";

//var change = str.replace('a', 'x');

//console.log(change);




//var str = "abca";

//var change = str.match(/a/g);

//console.log(change)



var str = "audaciously";

function obfuscate(str){
  var change = str.replace(/a/g, '4').replace(/e/g, '3').replace(/o/g, '0').replace(/l/g, '1');
  return change;
}

console.log(obfuscate(str));