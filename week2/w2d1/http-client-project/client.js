// using request, make a 'GET' request to 'https://sytantris.github.io/http-examples/future.jpg' using chaining. The chain should:
// Use .on('error') to handle any errors
// Use .on('response') to log the HTTPS response code, response message (response.statusMessage) and content type (response.headers['content-type'])
// Use piping and fs.createWriteStream to save the file to your working directory ('./future.jpg')



// require `request` and the Node `fs` (filesystem) module
var request = require('request');
var fs = require('fs');

request.get('https://sytantris.github.io/http-examples/future.jpg')               // Note 1
       .on('error', function (err) {                                   // Note 2
         throw err;
       })
       .on('response', function (response) {                           // Note 3
         console.log('Response Status Message: ', response.statusMessage);
         console.log('Content Type:', response.headers['content-type']);
       })
       .pipe(fs.createWriteStream('./future.jpg'));               // Note 4
