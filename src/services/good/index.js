'use strict';

const service = require('feathers-mongoose');
const good = require('./good-model');
const hooks = require('./hooks');

module.exports = function() {
  const app = this;

  const options = {
    Model: good,
    paginate: {
      default: 25,
      max: 100
    }
  };

  // Initialize our service with any options it requires
  app.use('/goods', service(options));

  // Get our initialize service to that we can bind hooks
  const goodService = app.service('/goods');

  // Set up our before hooks
  goodService.before(hooks.before);

  // Set up our after hooks
  goodService.after(hooks.after);
};
