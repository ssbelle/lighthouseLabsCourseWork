
//original
function findWaldo(arr, found) {
  for (var i = 0; i < arr.length; i++) {
    index = [i];
    if (arr[i] === "Waldo") {
      found();   // execute callback
    }
  }
}

function actionWhenFound() {
  console.log("Found Waldo at index: " + index + "!");
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);



//refactored with for each
function findWaldo(arr, found) {
  arr.forEach(function(name, i) {
    if (name === "Waldo") {
      found(i);   // execute callback
    }
  })
}

function actionWhenFound(index) {
  console.log("Found Waldo at index: " + index + "!");
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);





// //done with jystin at home
// function findWaldo(arr, found) {
//   arr.forEach(function(name,index) {
//     if (name === "Waldo") {
//       found(index);
//     }
//   })
// }

// function actionWhenFound(where) {
//   console.log("Found Waldo at index: " + where + " !");
// }

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);