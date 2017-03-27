'use strict';

const service = require('feathers-mongoose');
const drink = require('./drink-model');
const hooks = require('./hooks');

module.exports = function() {
  const app = this;

  const options = {
    Model: drink,
  };

  // Initialize our service with any options it requires
  app.use('/drinks', service(options));

  // Get our initialize service to that we can bind hooks
  const drinkService = app.service('/drinks');

  // Set up our before hooks
  drinkService.before(hooks.before);

  // Set up our after hooks
  drinkService.after(hooks.after);
};
