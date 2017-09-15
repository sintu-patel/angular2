'use strict';
function index(req, res) {
  res.json({status: 'The app is running'});
}
module.exports = function(app) {
  app.route('/').get(index);
}