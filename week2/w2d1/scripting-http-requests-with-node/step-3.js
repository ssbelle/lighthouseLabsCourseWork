var https = require('https');

 var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step3.html'
  };

function getAndPrintHTML (options) {
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


getAndPrintHTML();

//makes it easier to reuse by passing options as a param
//run curls gives same thing
