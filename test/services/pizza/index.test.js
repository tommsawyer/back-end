'use strict';

const assert = require('assert');
const app = require('../../../src/app');

describe('pizza service', function() {
  it('registered the pizzas service', () => {
    assert.ok(app.service('pizzas'));
  });
});
