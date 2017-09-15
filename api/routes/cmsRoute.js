'use strict';
var fs = require('fs');
function index(req, res) {
	fs.readFile('index.html', 'utf8', function(err, text){
	    res.send(text);
	});
}
module.exports = function(app) {
  app.route('/').get(index);
}