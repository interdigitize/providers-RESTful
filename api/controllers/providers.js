'use strict';

var mongoose = require('mongoose'),
  Provider = mongoose.model('Providers');

exports.list_all = function(req, res) {
  Provider.find({}, function(err, provider) {
    if (err)
      res.send(err);
    res.json(provider);
  });
};


exports.create = function(req, res) {
  var new_provider = new Provider(req.body);
  new_provider.save(function(err, provider) {
    if (err)
      res.send(err);
    res.json(provider);
  });
};


exports.read = function(req, res) {
  Provider.findById(req.params.providerId, function(err, provider) {
    if (err)
      res.send(err);
    res.json(provider);
  });
};


// exports.update_a_provider = function(req, res) {
//   Provider.findOneAndUpdate({_id: req.params.providerId}, req.body, {new: true}, function(err, provider) {
//     if (err)
//       res.send(err);
//     res.json(provider);
//   });
// };
//
//
// exports.delete_a_provider = function(req, res) {
//   Provider.remove({
//     _id: req.params.providerId
//   }, function(err, provider) {
//     if (err)
//       res.send(err);
//     res.json({ message: 'Provider successfully deleted' });
//   });
// };
