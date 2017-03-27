'use strict';
const drink = require('./drink');
const salad = require('./salad');
const pizza = require('./pizza');
const vendor = require('./vendor');
const authentication = require('./authentication');
const user = require('./user');
const mongoose = require('mongoose');
module.exports = function() {
  const app = this;

  mongoose.connect(app.get('mongodb'));
  mongoose.Promise = global.Promise;

  app.configure(authentication);
  app.configure(user);
  app.configure(vendor);
  app.configure(pizza);
  app.configure(salad);
  app.configure(drink);
};
