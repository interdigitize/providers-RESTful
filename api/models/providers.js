'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var ProviderSchema = new Schema({
  id: Number,
  'Provider Name': String,
  'Provider Street Address': String,
  'Provider City': String,
  'Provider State': String,
  'Provider Zip Code': String,
  'Hospital Referral Region Description': String,
  'Total Discharges': Number,
  'Average Covered Charges': String,
  'Average Total Payments':   String,
  'Average Medicare Payments': String
});

module.exports = mongoose.model('Providers', ProviderSchema);
