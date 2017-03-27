'use strict';

const service = require('feathers-mongoose');
const salad = require('./salad-model');
const hooks = require('./hooks');

module.exports = function() {
  const app = this;

  const options = {
    Model: salad,
  };

  // Initialize our service with any options it requires
  app.use('/salads', service(options));

  // Get our initialize service to that we can bind hooks
  const saladService = app.service('/salads');

  // Set up our before hooks
  saladService.before(hooks.before);

  // Set up our after hooks
  saladService.after(hooks.after);
};
