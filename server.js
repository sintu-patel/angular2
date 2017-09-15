var express = require('express'),
  app = express(),
  port = process.env.PORT || 3100,
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
app.use('/index.html', express.static('index.html'))
app.use('/app/assets/css/style.css', express.static('app/assets/css/style.css'))
 
var routes = require('./api/routes/cmsRoute');
routes(app);


app.listen(port);


console.log('RESTful API server started on: ' + port);