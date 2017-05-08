//var str = "hello"
//changes string into array
//function rev(str){
//  var splitString = str.split('');
//  return splitString;
//}
//console.log(rev(str));


//var str = "hello"

//process.arg constructs and array of string starting at index [2]
//index[0]and [1] are removed by slice


var myArgs = process.argv.slice(2);


function arrayThenReverse(array){
  for(var i = 0; i < array.length; i ++){
    var wordOrder = '';
    for (var j = (array[i].length -1); j >=0; j--){
      wordOrder += array[i].charAt(j);
    }
    console.log (wordOrder);
  }
}

//var newString = arrayThenReverse(myArgs[0]);

//console.log(newString);

arrayThenReverse(myArgs);


