'use strict';
module.exports = function(app) {
  var providers = require('../controllers/providers');

  // todoList Routes
  app.route('/providers')
    .get(providers.list_all)
    .post(providers.create);

  app.route('/providers/:providerId')
    .get(providers.read)
};
