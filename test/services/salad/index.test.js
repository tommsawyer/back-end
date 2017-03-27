'use strict';

const assert = require('assert');
const app = require('../../../src/app');

describe('salad service', function() {
  it('registered the salads service', () => {
    assert.ok(app.service('salads'));
  });
});
