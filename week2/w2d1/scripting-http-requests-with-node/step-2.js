var https = require('https');

 var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

function getAndPrintHTML () {
  https.get(requestOptions, function(response){
    console.log('Status Code:', response.statusCode);
    console.log('Headers;', response.headers);

    var output = "";

    response.on('data', function(data){
      console.log(data + "\n");
      output += data;
    });
    response.on('end', function(){
      console.log('complete');
    })
  });
}


getAndPrintHTMLChunks();


//buffers so that html comes to screen