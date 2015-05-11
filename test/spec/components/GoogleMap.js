'use strict';

describe('GoogleMap', function () {
  var React = require('react/addons');
  var GoogleMap, component;

  beforeEach(function () {
    GoogleMap = require('components/GoogleMap.js');
    component = React.createElement(GoogleMap);
  });

  it('should create a new instance of GoogleMap', function () {
    expect(component).toBeDefined();
  });
});
