'use strict';

import Reflux from 'reflux';
import actions from '../actions/MapActions';


var MapStore = Reflux.createStore({
  listenables: actions,

  state: {
  	center: {
			lat: 40.7140,
			lng: -74.0710
  	},
  	zoom: 13
  },

  getInitialState() {
  	console.log(`getInitialState: ${JSON.stringify(this.state)}`);
  	return this.state;
   },

  onChangeLocation(center) {
  	console.log(`MapStore.onChangeLocation: ${JSON.stringify(center)}`);
  	this.state.center = center;
  	this.trigger(this.state);
  },

  onChangeZoom(zoom) {
  	console.log(`MapStore.onChangeZoom: ${JSON.stringify(zoom)}`);
  	if (zoom !== this.state.zoom) {
  		this.state.zoom = zoom;
  		this.trigger(this.state);
  	}	
  }

});

export default MapStore; 
