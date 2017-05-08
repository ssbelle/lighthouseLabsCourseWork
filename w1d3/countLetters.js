//NEEDS TO

//function
//not counting spaces
//returns all the unique characters in a
//string that is passed into the function
//also report how many isntances of each lettter in the string
//return an obj that is the stats of the strings
//key = letter and value = # of occurances

//STEPS

//set up input for string to be passed proc.arg
//want that to be stored (is is an array or string?)
//we want to slice and join into individual characters sans spaces
//iterate through and count instances of each letter

//store total in obj

// count keys and values
//iterate through each
//need? var lettersToCount = '';


//var arrayPassedIn = process.argv.slice(2);

//var makeSingleString = arrayPassedIn.join("");

function countLetters(str){
  var obj = {}
  str = str.split(" ").join("");
  obj['hello']

  for(var i = 0; i < str.length; i++) {
    var l = str[i]
    if (obj[l]) {
      obj[l]++;
    } else {
      obj[l] = 1;
    }
  }
  console.log(obj)
}



countLetters("lighthouse in the house");

//for(var i = 0; i <= makeSingleString.length; i++) {
//     var l = str.charAt(i)
//     obj[l] = (isNaN(obj[l]) ? 1 : obj[l] + 1);



//function returns object



//push letters to object
//letter is key : value is #of istances












//EXAMPLE 1
// var myArgs = process.argv.slice(2);


// function arrayThenReverse(array){
//   for(var i = 0; i < array.length; i ++){
//     var wordOrder = '';
//     for (var j = (array[i].length -1); j >=0; j--){
//       wordOrder += array[i].charAt(j);
//     }
//     console.log (wordOrder);
//   }
// }

// //var newString = arrayThenReverse(myArgs[0]);

// //console.log(newString);

// arrayThenReverse(myArgs);


//EXAMPLE 2

// function isPalindrome(str) {
//   var noSpaces = str.toLowerCase().split(" ").join("");
//   var mid = Math.floor(noSpaces.length/2);
//   var last = noSpaces.length - 1;
//   for (var i = 0; i < mid; i++) {
//     if (noSpaces[i] !== noSpaces[last - i]) return false;
//   }
//   return true
// }

// // Test driver code. These should all log true.
// console.log(isPalindrome('p') === true);
// console.log(isPalindrome('foo') === false);