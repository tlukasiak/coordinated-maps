'use strict';

describe('MapStore', function() {
  var store;

  beforeEach(function() {
    store = require('stores/MapStore.js');
  });

  it('should be defined', function() {
    expect(store).toBeDefined();
  });
});
