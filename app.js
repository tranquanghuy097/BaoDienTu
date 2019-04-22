console.log("Hello World");

var express = require('express');
var exphbs  = require('express-handlebars');

var app = express();

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
 
app.get('/', function (req, res) {
    res.render('home');
})

app.get('/signin', function(req, res) {
    res.render('signin', {signIn: true});
})

app.get('/signup', function(req, res) {
    res.render('signup');
})
 
app.listen(3000, function(){
    console.log('service http://localhost:3000/ running')
})