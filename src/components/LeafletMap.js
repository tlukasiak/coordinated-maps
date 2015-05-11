'use strict';

import React from 'react/addons';

import actions from '../actions/MapActions';

import L from 'leaflet/dist/leaflet';
import 'leaflet/dist/leaflet.css';
import 'styles/LeafletMap.scss';

// Some inspiration from here: http://stackoverflow.com/questions/26755251/good-way-to-combine-react-and-leaflet

var LeafletMap = React.createClass({

	onDragEnd(e) {
		console.log(`onDragEnd distance = ${JSON.stringify(e.distance)}`);
		actions.changeLocation(this.map.getCenter());
	},

	onZoomChanged() {
		var zoom = this.map.getZoom();
		console.log(`onZoomChanged ${JSON.stringify(zoom)}`);
		actions.changeZoom(zoom);
	},

	componentDidMount() {
		let center = this.props.center;
		console.log(`componentDidMount: ${center.lat} ${center.lng}`);
		var map = L.map(this.getDOMNode()).setView([center.lat, center.lng], 13);		
		L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    	attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
		}).addTo(map);

		map.on('dragend', this.onDragEnd);
		map.on('zoomend', this.onZoomChanged);
		this.map = map;
	},

	shouldComponentUpdate(nextProps, nextState) {
		var center = nextProps.center;
		var zoom = nextProps.zoom;
		console.log(`shoudComponentUpdate nextProps ${JSON.stringify(nextProps)} center ${center.lat}:${center.lng}`);
		var latlng = L.latLng(center.lat, center.lng);
		this.map.setView([center.lat, center.lng], zoom);
		return false;
	},

	componentWillUnmount() {
		this.map.clearAllEventListeners();
		this.map = null;
	},

  render() {
    return (
        <div id='leaflet-map'>
          <p>Content for LeafletMap</p>
        </div>
      );
  }
});

export default LeafletMap;
