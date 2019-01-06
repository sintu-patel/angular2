var express = require('express'),
  app = express(),
  port = process.env.PORT || 8080,
  path = require('path'),
  bodyParser = require('body-parser');

app.use(function(req, res, next) {
    res.setHeader("Access-Control-Allow-Methods", "POST, PUT, OPTIONS, DELETE, GET");
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Credentials", true);
    next();
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/index.html', express.static('index.html'));
app.use('/app/assets/css/style.css', express.static('app/assets/css/style.css'));
app.use('/node_modules', express.static('node_modules'));
app.use('/dist', express.static('dist'));
app.use('/app', express.static('app'));
app.use('/pwa', express.static('pwa'));
 
var routes = require('./api/routes/cmsRoute');
routes(app);


app.listen(port);


console.log('RESTful API server started on: ' + port);