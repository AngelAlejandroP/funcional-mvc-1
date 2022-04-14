// load the things we need
var express = require('express');
var path= require('path');

var app = express();

// set the view engine to ejs
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');
app.set('port', process.env.PORT || 3000);

// use res.render to load up an ejs view file

// index page
app.get('/', function(req, res) {
    res.render('pages/index');
});

// about page
app.get('/about', function(req, res) {
    res.render('pages/about');
});

app.listen(app.get('port'), () => {
    console.log('Server on port: ', app.get('port'));
});

