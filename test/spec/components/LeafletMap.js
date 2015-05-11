'use strict';

describe('LeafletMap', function () {
  var React = require('react/addons');
  var LeafletMap, component;

  beforeEach(function () {
    LeafletMap = require('components/LeafletMap.js');
    component = React.createElement(LeafletMap);
  });

  it('should create a new instance of LeafletMap', function () {
    expect(component).toBeDefined();
  });
});
