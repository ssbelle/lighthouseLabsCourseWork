var request = require('request');
var fs = require('fs');
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
      downloadImageByURL(user.avatar_url + "&s=466", user.login + ".png");
    });
  }
}

getRepoContributors("jquery", "jquery", callback);


function downloadImageByURL(url, filePath) {
  request(url).pipe(fs.createWriteStream(filePath))
}






