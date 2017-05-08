// function isPalindrome(s) {
//   var stringReverse = s.split("").reverse().join("");
//   return s === stringReverse;
// }

// module.exports = isPalindrome;


function isPalindrome(s) {
  var string = s.split(' ').join('');
  console.log(string)
  var stringReverse = string.split('').reverse().join('');
  console.log(reverseString)
  return string === stringReverse;
}

module.exports = isPalindrome;