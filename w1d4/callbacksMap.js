
var words = ["ground", "control", "to", "major", "tom"];

map(words, function(word){return word.length;});

function map(arr, fun){
  var newarray = [];
  arr.forEach(function(item){
    newarray.push(fun(item));
  });
  return newarray;
}

