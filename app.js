var express = require('express');
var exphbs  = require('express-handlebars');
var Handlebars = require('handlebars');

var app = express();

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(express.static('public')); 
 
app.get('/', function (req, res) {
    res.render('home', context);
})

app.get('/signin', function(req, res) {
    res.render('signin', {signIn: true});
})

app.get('/signup', function(req, res) {
    res.render('signup');
})

app.get('/crime', function(req, res){
    res.render('category', {
        category: 'Crime'
    })
})

app.get('/news1', function(req, res){
    res.render('news1', {
        title: 'California officers apparently shoot each other while confronting suspect, police say',
        author: 'Tran Quang Huy',
        date: "12/4/1999",
        category: 'Crime',
        url: '#',
        source: 'images/1.jpg',
        content: 'Two California police officers were injured on Saturday after seemingly aiming and firing at a suspect but instead hitting themselves, officials said\n' 
        });
})

var context ={
    item: [
        {url: '/news1',
        source: 'images/1.jpg',
        title: 'Police shooting each other',
        category: 'Crime',
        date: '12/2/1999'},

        {url: '/news1',
        source: 'images/1.jpg',
        title: 'Police shooting each other',
        category: 'Crime',
        date: '12/2/1999'}
    ]
}

Handlebars.registerHelper('list', function(context, options){
    var ret = '';
    for(var i = 0, j = context.length; i < j; i++)
    {
        ret = ret + options.fn(context[i]);
    }

    return ret;
})
 
app.listen(3000, function(){
    console.log('service http://localhost:3000/ running')
})