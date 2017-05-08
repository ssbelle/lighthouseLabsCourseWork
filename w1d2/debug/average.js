var sum = 0;
function average(list){
  for (var num of list) {
    sum += num;
  }
  return sum / list.length;
}
console.log(average([3, 5, 7]));






// mean = [ 4, 2, 0]

// function mean(arr) {
//   var total = 0;
// arr.forEach(round(number){
//   for (var i = 0; i < arr.length; i ++){
//     total += arr[i];
//   }

// })
// }

// function round(number) {

//   return Math.round(number * 100) / 100;
// }