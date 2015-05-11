'use strict';

describe('Maps', function () {
  var React = require('react/addons');
  var Maps, component;

  beforeEach(function () {
    var container = document.createElement('div');
    container.id = 'content';
    document.body.appendChild(container);

    Maps = require('components/Maps.js');
    component = React.createElement(Maps);
  });

  it('should create a new instance of Maps', function () {
    expect(component).toBeDefined();
  });
});
