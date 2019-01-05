'use strict';
var fs = require('fs');
var request = require('request');
var { apiServerConfig } = require('../../app/code/config/app.main.config');
function index(req, res) {
	fs.readFile('index.html', 'utf8', function(err, text){
	    res.send(text);
	});
}
module.exports = function(app) {
	app.route('/').get(index);
	app.route('/payload').post(sendApiPayload);
	app.route('*').get(index);
}

function sendApiPayload(req, res) {
	var payload = req.body;

	const options = {
		url: `${apiServerConfig.apiHost}/payload`,
		method: 'post',
		json: payload
	  }
	  request(options, (error, response, body) => {
			if (error) {
				console.log('Error in getting data');
				  console.log('Error');
			}
			console.log('get data success');
			if (response) {
				res.send('success');
			}
		});
}