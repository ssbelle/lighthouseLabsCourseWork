//functions


//exports

function sayHello(name) {
  console.log(sayHi(name) + "!");
  //console.log("HELLO" + nickname)
}

function sayHi(name) {
  var nickname = "ssbelle"
  return "Hi " + nickname;
}

// Use the `module.exports` object to indicate which functions and values will
// be available when the module is required. You can have functions that are
// used inside the module but aren't exported (private).
// You can assign anything to module.exports, but usually this will either be
// an object or a function that returns an object.
module.exports = {
  sayHello: sayHello,
 // sayHi: sayHi
}