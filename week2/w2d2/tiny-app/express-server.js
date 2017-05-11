const express = require("express");

const app = express();

var PORT = process.env.PORT || 8080;

const bodyParser = require("body-parser");

const cookieParser = require('cookie-parser');

app.use(cookieParser());

app.use(bodyParser.urlencoded({extended: false}));

app.set("view engine", "ejs");

var urlDatabase = {
"b2xVn2": "http://www.lighthouselabs.ca",
"9sm5xK" : "http://www.google.com"
};

var userDatabase = {};




function generateRandomString(length, chars) {
    var result = '';
    for (var i = length; i > 0; --i) result += chars[Math.round(Math.random() * (chars.length - 1))];
    return result;
}

app.get("/", (req, res) => {
  res.send("Hello!");
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});


app.get("/urls/new", (req, res) => {
  res.render("urls_new", {username: req.cookies["username"]});
});

//new url and assign random string
app.post("/urls", (req, res) => {
  let newShortURL = generateRandomString(6, '0123456789abcdefghijklmnOPQRSTUVWXYZ')
  urlDatabase[newShortURL] = req.body.longURL;
  res.redirect("/urls/" + newShortURL);
});

//get all urls and stores current user name to urls/index /header
app.get("/urls", (req, res) => {
  res.render("urls_index", { urlDatabase: urlDatabase, username: req.cookies["username"]});
});

//getting one url
app.get("/urls/:id", (req, res) => {
  res.render("urls_show", { newShortURL: req.params.id, longURL: urlDatabase[req.params.id], username: req.cookies["username"]});
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

//svaes input username to an object and sets a cookie
app.post('/login', (req, res) => {
  let username = req.body.username;
  res.cookie("username", req.body.username);
  res.redirect('/urls')
});


app.post('/logout', (req, res) => {
  res.clearCookie("username")
  res.redirect('/urls')
});







