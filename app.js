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
    res.render('category', context)
})

app.get('/military', function(req, res){
    res.render('category', {
        category: 'Military'
    })
})

app.get('/un', function(req, res){
    res.render('category', {
        category: 'U.N'
    })
})

app.get('/conflicts', function(req, res){
    res.render('category', {
        category: 'Conflicts'
    })
})

app.get('/executive', function(req, res){
    res.render('category', {
        category: 'Executive'
    })
})

app.get('/senate', function(req, res){
    res.render('category', {
        category: 'Senate'
    })
})

app.get('/movies', function(req, res){
    res.render('category', {
        category: 'Movies'
    })
})

app.get('/tv', function(req, res){
    res.render('category', {
        category: 'TV News'
    })
})

app.get('/markets', function(req, res){
    res.render('category', {
        category: 'Markets'
    })
})

app.get('/politics', function(req, res){
    res.render('category', {
        category: 'Politics'
    })
})

app.get('/food', function(req, res){
    res.render('category', {
        category: 'Foods + Drinks'
    })
})

app.get('/cars', function(req, res){
    res.render('category', {
        category: 'Cars + Trucks'
    })
})

app.get('/archaeology', function(req, res){
    res.render('category', {
        category: 'Archaeology'
    })
})

app.get('/earth', function(req, res){
    res.render('category', {
        category: 'Planet Earth'
    })
})

app.get('/security', function(req, res){
    res.render('category', {
        category: 'Security'
    })
})

app.get('/innovation', function(req, res){
    res.render('category', {
        category: 'Innovation'
    })
})

app.get('/healthy', function(req, res){
    res.render('category', {
        category: 'Healthy Living'
    })
})

app.get('/medical', function(req, res){
    res.render('category', {
        category: 'Medical Research'
    })
})

app.get('/shows', function(req, res){
    res.render('category', {
        category: 'Shows'
    })
})

app.get('/personalities', function(req, res){
    res.render('category', {
        category: 'Personalities'
    })
})

app.get('/write', function(req, res){
    res.render('write', {
        writer: true
    })
})

app.get('/user', function(req, res){
    res.render('user', context)
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
    signIn: true,
    user: [
        {
            username: 'richard',
            email: 'richard@gmail.com',
            password: '0123',
            bdate: '1997-04-21',
        }
    ],
    item: [
        {url: '/news1',
        source: 'images/1.jpg',
        title: 'Police shooting each other',
        category: 'Crime',
        date: '12/2/1999',},

        {url: '/news1',
        source: 'images/1.jpg',
        title: 'Police shooting each other',
        category: 'Crime',
        date: '12/2/1999',}
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

Handlebars.registerHelper('news', function(context, options){
    var ret = '';
    ret = ret + options.fn(context[0]);
    return ret;
})

Handlebars.registerHelper('user', function(context, options){
    var ret = '';
    ret = ret + options.fn(context[0]);
    return ret;
})
 
app.listen(3000, function(){
    console.log('service http://localhost:3000/ running')
})