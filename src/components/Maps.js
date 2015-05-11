'use strict';

import React from 'react/addons';
import Reflux from 'reflux';

import 'normalize.css';
import '../styles/main.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootswatch/readable/bootstrap.min.css';

import LeafletMap from './LeafletMap';
import GoogleMap from './GoogleMap';

import store from '../stores/MapStore';
import actions from '../actions/MapActions';

var Maps = React.createClass({
  mixins: [Reflux.connect(store)],

  render() {
    return (
      <div className='main'>
        <div className='row'>
          <div className='col-md-12'>
          <h2>Coordinated Maps</h2>
          This is a playground for comparing various mapping approaches on the Web. React+Flux (Reflux) is used to manage state of the maps. You can pan and zoom around in one map and see the changes reflected in all the other maps.
          </div>
        </div>
        <div className='row'>
          <div className='col-sm-6'>

            <div class="panel panel-default">
              <div class="panel-heading">
                <h4 class="panel-title">Leaflet Map</h4>
              </div>
              <div class="panel-body">
                <LeafletMap center={this.state.center} zoom={this.state.zoom} />
              </div>
            </div>

          </div>
          <div className='col-sm-6'>

            <div class="panel panel-default">
              <div class="panel-heading">
                <h4 class="panel-title">Google Map</h4>
              </div>
              <div class="panel-body">
                <GoogleMap center={this.state.center} zoom={this.state.zoom} />
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }
});

actions.changeLocation({lat: 40.7140, lng: -74.0710});

export default Maps;
