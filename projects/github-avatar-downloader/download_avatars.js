// var request = require('request');

// console.log('Welcome to the GitHub Avatar Downloader!');

// var GITHUB_USER = "ssbelle";
// //var GITHUB_TOKEN = "643463f5c0d12f00f1756e9ae56f93cf161b2331";
// var GITHUB_TOKEN = "748c63f4afafe56c46f1f4d77690823317707ede";

// function getRepoContributors(repoOwner, repoName, cb) {
//  var requestURL = 'https://'+ GITHUB_USER + ':' + GITHUB_TOKEN + '@api.github.com/repos/' + repoOwner + '/' + repoName + '/contributors';
//  console.log(requestURL);
// }



// getRepoContributors("jquery", "jquery", function(err, result) {
//   console.log("Errors:", err);
//   console.log("Result:", result);
// });



var request = require('request');
//console.log('Welcome to the GitHub Avatar Downloader!');

var GITHUB_USER = "ssbelle";
var GITHUB_TOKEN = "748c63f4afafe56c46f1f4d77690823317707ede";


function getRepoContributors(repoOwner, repoName, cb) {
  var requestURL = 'https://'+ GITHUB_USER + ':' + GITHUB_TOKEN + '@api.github.com/repos/' + repoOwner + '/' + repoName + '/contributors';

  var options = {
    url: requestURL,
    headers:{
      'User-Agent': 'GitHub Avatar Downloader - Student Project'
    }
  };

  request(options, cb);
}

function callback(error, response, body) {
  if (!error && response.statusCode == 200) {
    var info = JSON.parse(body);
    info.forEach(function(user){
      console.log(user.avatar_url);
    });
  }
}



getRepoContributors("jquery", "jquery", callback);
// getRepoContributors("jquery", "jquery", function(err, result) {


//check request documention


//
//returns the same as
//curl -u ssbelle:643463f5c0d12f00f1756e9ae56f93cf161b2331 -I https://api.github.com/repos/jquery/jquery/contributors


//748c63f4afafe56c46f1f4d77690823317707ede
