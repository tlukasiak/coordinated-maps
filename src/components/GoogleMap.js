'use strict';

import React from 'react/addons';

import actions from '../actions/MapActions';

import 'styles/GoogleMap.scss';

// Some inspiration from here: http://revelry.co/development/2015/02/19/react-google-maps/

var GoogleMap = React.createClass({

	onDragEnd() {
		console.log(`[Google Map] onDragEnd ${JSON.stringify(this.map.getCenter())}`);
		var center = {
			lat: this.map.getCenter().lat(),
			lng: this.map.getCenter().lng(),
		};
		actions.changeLocation(center);
	},

	onZoomChanged() {
		var zoom = this.map.getZoom();
		console.log(`[Google Map] onZoomChanged ${JSON.stringify(zoom)}`);
		actions.changeZoom(zoom);
	},

	componentDidMount() {
		let center = this.props.center;
		let zoom = this.props.zoom;
		console.log(`[Google Map] componentDidMount: ${center.lat} ${center.lng}`);

		var mapCanvas = this.getDOMNode();
    var mapOptions = {
      center: new google.maps.LatLng(center.lat, center.lng),
      zoom: zoom,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(mapCanvas, mapOptions);

		this.map = map; 
		google.maps.event.addListener(this.map, 'dragend', this.onDragEnd);
		google.maps.event.addListener(this.map, 'zoom_changed', this.onZoomChanged);
	},

	shouldComponentUpdate(nextProps, nextState) {
		var center = nextProps.center;
		var zoom = nextProps.zoom;
		console.log(`[Google Map] shouldComponentUpdate nextProps ${JSON.stringify(nextProps)} center ${center.lat}:${center.lng}`);
		this.map.panTo(center);
		this.map.setZoom(zoom);
		return false;
	},

	componentWillUnmount() {
		google.maps.clearInstanceListeners(this.map);
		this.map = null;
	},

  render: function () {
    return (
        <div id='google-map'>
          <p>Content for GoogleMap</p>
        </div>
      );
  }
});

export default GoogleMap; 

