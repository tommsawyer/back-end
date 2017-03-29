'use strict';

const globalHooks = require('../../../hooks');
const hooks = require('feathers-hooks');

exports.before = {
  all: [],
  find: [globalHooks.parseFilters()],
  get: [],
  create: [],
  update: [],
  patch: [],
  remove: []
};

exports.after = {
  all: [],
  find: [],
  get: [],
  create: [],
  update: [],
  patch: [],
  remove: []
};
