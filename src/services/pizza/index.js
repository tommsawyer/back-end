'use strict';

const service = require('feathers-mongoose');
const pizza = require('./pizza-model');
const hooks = require('./hooks');

module.exports = function() {
  const app = this;

  const options = {
    Model: pizza,
  };

  // Initialize our service with any options it requires
  app.use('/pizzas', service(options));

  // Get our initialize service to that we can bind hooks
  const pizzaService = app.service('/pizzas');

  // Set up our before hooks
  pizzaService.before(hooks.before);

  // Set up our after hooks
  pizzaService.after(hooks.after);
};
