var https = require('https');

console.log('I did it!');


// var options = {
//   host: 'www.example.org',
//   path: '/'
// };
//called by https when the request is made
/////////first sends back stream


// var callback = function(response){
//   console.log('In response handler callback!');
//   console.log('Response: ', response);
// }

// console.log("I'm about to make the request!");

// https.request(options, callback).end();

// console.log("I've made the request!");






/////////second sends back chunks
// var callback = function(response) {
//   console.log('In response handler callback!');

//   response.on('data', function(chunk) {
//     console.log('[-- CHUNK OF LENGTH ' + chunk.length + ' --]');
//     console.log(chunk.toString());
//   });
// }

// console.log("I'm about to make the request!");

// https.request(options, callback).end();

// console.log("I've made the request!");



////////third   send multiple chunks
var options = {
  host: 'stream-large-file.herokuapp.com',
  path: '/give-me-stuff-now'
};

var callback = function(response) {
  console.log('In response handler callback!');

  response.on('data', function(chunk) {
    console.log('[-- CHUNK OF LENGTH ' + chunk.length + ' --]');
    console.log(chunk.toString());
  });
}

console.log("I'm about to make the request!");

https.request(options, callback).end();

console.log("I've made the request!");