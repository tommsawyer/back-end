'use strict';

const assert = require('assert');
const app = require('../../../src/app');

describe('drink service', function() {
  it('registered the drinks service', () => {
    assert.ok(app.service('drinks'));
  });
});
