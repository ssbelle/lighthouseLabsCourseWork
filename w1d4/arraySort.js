// var array = [10, 2, 5, 1, 9];
// array.sort();

var arr = [10, 2, 5, 1, 9];
// array.sort(function(a, b){
//   return a - b;
// })



//test for another problem
function median(arr) {
 var sorted = arr.sort(function(a, b){
     a - b;
  })
  return sorted;/* IMPLEMENT ME */
}



var arr = [1 , 2, 3];



function average(arr){
  return arr.reduce(function(acc, cur){
    return acc + cur;
  }, 0) / arr.length;
}

var av = average(arr);

var new_array = arr.map(function(num){
  return Math.pow(num - av, 2)
});

var av1 = average(new_array);



function stdev(arr) {




return stde;
}