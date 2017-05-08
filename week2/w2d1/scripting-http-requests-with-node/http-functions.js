  var https = require('https');

module.exports = function getHTML (options, callback) {



 // var requestOptions = {
 //    host: 'sytantris.github.io',
 //    path: '/http-examples/step4.html'
 //  };


  https.get(options, function(response){
    var output = "";
    response.setEncoding('utf8');
    response.on('data', function(data){
      callback(data)
      output += data;
    });
  });
};


////callback belongs with request
// function printHTML(html){
//   console.log(html);
// // }

// getHTML(requestOptions, printHTML);
