var https = require('https');

 var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

function getAndPrintHTMLChunks () {
  https.get(requestOptions, function(response){
    console.log('Status Code:', response.statusCode);
    console.log('Headers;', response.headers);



    response.on('data', function(data){
      console.log(data + "\n");

    });
    response.on('end', function(){
      console.log("complete");
    })
  });
}


getAndPrintHTMLChunks();




// response.setEncoding('utf8'); ?needed
//response.on('data', function(chunk){
  //    console.log(chunk.toString());?
//this one prints chunks with a space between