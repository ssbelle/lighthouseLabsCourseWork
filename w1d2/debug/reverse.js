var input = process.argv[2];

function reverse(original) {
  var str = '';
  for (var i = original.length - 1; i >= 0; i --){
    str += original[i];
  }
  return str;
}

console.log(reverse(input));