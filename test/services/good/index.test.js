'use strict';

const assert = require('assert');
const app = require('../../../src/app');

describe('good service', function() {
  it('registered the goods service', () => {
    assert.ok(app.service('goods'));
  });
});
