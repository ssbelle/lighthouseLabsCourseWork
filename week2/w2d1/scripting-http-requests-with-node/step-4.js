var https = require('https');

 var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step4.html'
  };

function getHTML (options, callback) {
  https.get(options, function(response){
    var output = "";
    response.setEncoding('utf8');
    response.on('data', function(data){
      callback(data)
      output += data;
    });
  });
};

function printHTML(html){
  console.log(html);
}

getHTML(requestOptions, printHTML);


//////replaces this with printhtml callback
 // console.log('Status Code:', response.statusCode);
 //    console.log('Headers;', response.headers);

 //    var output = "";

 //    response.on('data', function(data){
 //      console.log(data + "\n");
 //      output += data;


 // response.on('end', function(){
 //      console.log('complete');