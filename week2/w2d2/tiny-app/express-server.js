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

const users = {
  "userRandomID": {
    id: "userRandomID",
    name: "Rosy",
    email: "user@example.com",
    password: "purple-monkey-dinosaur"
  },
 "user2RandomID": {
    id: "user2RandomID",
    name: "Bob",
    email: "user2@example.com",
    password: "dishwasher-funk"
  }
}


function generateRandomString(length, chars) {
    var result = '';
    for (var i = length; i > 0; --i) result += chars[Math.round(Math.random() * (chars.length - 1))];
    return result;
}

app.get("/register", (req, res) => {
  res.render("register");
});

app.post("/register", (req, res) =>{
  let checkEmails = Object.keys(users).filter(key => users[key].email == req.body.email)
  if(checkEmails.length > 0){
    res.status(400).send('This email is already registered.')
  } else {
    let user_id = generateRandomString(3, '0123456789abcdefghijklmnOPQRSTUVWXYZ')
    users[user_id] = {
      id: user_id,
      name: req.body.email,
      email: req.body.email,
      password: req.body.password
    }
    if(users[user_id].email.length === 0){
      res.status(400).send('Please enter a valid email!');
    }
    if(users[user_id].password.length < 6){
      res.status(400).send('Please enter a password at least 6 characters in length!')
    }
    res.cookie("user_id", user_id)
    //console.log(req.cookies["user_id"], users, users[req.cookies["user_id"]])
    res.redirect("/urls");
  }
});





app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});


app.get("/urls/new", (req, res) => {
  res.render("urls_new", {user: users[req.cookies["user_id"]]});
});

//new url and assign random string
app.post("/urls", (req, res) => {
  let newShortURL = generateRandomString(6, '0123456789abcdefghijklmnOPQRSTUVWXYZ')
  urlDatabase[newShortURL] = req.body.longURL;
  res.redirect("/urls/" + newShortURL);
});

//get all urls and stores current user name to urls/index /header
app.get("/urls", (req, res) => {
  res.render("urls_index", { urlDatabase: urlDatabase, user: req.cookies["user"]});
});

//getting one url reading the signed in user from the cookie
app.get("/urls/:id", (req, res) => {
  res.render("urls_show", { newShortURL: req.params.id, longURL: urlDatabase[req.params.id], user: req.cookies["user_id"]});
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
  res.redirect('/urls');
 });

app.get('/login', (req, res) => {
  res.render('login')

})

//saves input username to an object and sets a cookie function  that compares let email = req.body.email; with user: req.cookies["user_id"]
app.post('/login', (req, res) => {
  for (var user in users){
    if(users[user].email === req.body.email && users[user].password === req.body.password){
     res.cookie("user", users[user]);
    }
    else {
      res.status(403).send('Your user name or password do not match.<br> Please try again or <a href="/register">Register Here!</a>')
  }
  res.redirect('/urls')
}
});


app.post('/logout', (req, res) => {
  res.clearCookie("user")
  res.redirect('/urls')
});







