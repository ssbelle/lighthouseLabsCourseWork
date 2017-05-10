const express = require("express");
const app = express();
var PORT = process.env.PORT || 8080; // default port 8080
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));

app.set("view engine", "ejs");

// var urlDatabase = {
// "b2xVn2":{ shortenedURL: "b2xVn2", longURL: "http://www.lighthouselabs.ca"},
// "9sm5xK":{ shortenedURL: "9sm5xK", longURL: "http://www.google.com"}
// };

var urlDatabase = {
"b2xVn2": "http://www.lighthouselabs.ca",
"9sm5xK" : "http://www.google.com"
};

function generateRandomString(length, chars) {
    var result = '';
    for (var i = length; i > 0; --i) result += chars[Math.round(Math.random() * (chars.length - 1))];
    return result;
}
// var req.params = {
//   "id" : "b2xVn2"
// }

app.get("/", (req, res) => {
  res.send("Hello!");
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});


app.get("/urls/new", (req, res) => {
  res.render("urls_new");
});


//new url and assign random string
app.post("/urls", (req, res) => {
  let newShortURL = generateRandomString(6, '0123456789abcdefghijklmnOPQRSTUVWXYZ')
  // console.log(req.body);  // debug statement to see POST parameters
  urlDatabase[newShortURL] = req.body.longURL;  // Respond with 'Ok' (we will replace this)
  res.redirect("/urls/" + newShortURL);
});

//get all urls
app.get("/urls", (req, res) => {
  // let templateVars = ;
  //console.log(req)
  //console.log(urlDatabase);
  res.render("urls_index", { urlDatabase: urlDatabase });
});

//getting one url
app.get("/urls/:id", (req, res) => {
  // let templateVars = ;
   //console.log(urlDatabase);
  // res.render("urls_show", {})
  res.render("urls_show", { newShortURL: req.params.id, longURL: urlDatabase[req.params.id] });
});

//redirecting short link to long link page
app.get("/u/:shortURL", (req, res) => {
  let longURL = urlDatabase[req.params.shortURL];
  res.redirect(longURL);
});


// deletes a link <%=`/urls/${url}/delete`% matches the form input >
app.post('/urls/:url/delete', (req, res) =>{
  delete urlDatabase[req.params.url];
  res.redirect('/urls');

});

//app.post('urls/:url/update', (req, res))

app.post('/urls/:url/updates', (req, res) => {
  let updatedURL = req.body.longURL;
  urlDatabase[req.params.url] = updatedURL;
  console.log(updatedURL)
  res.redirect('/urls');
 });

// <form mathod="POST" action= "/urls"
//       <label for="longURL">Enter a URL:</label>
//       <input id="longURL" type="text" name="longURL" placeholder="http://" style="width: 300px">
//       <input type="submit" value="UPDATE">
//     </form>






