// Copyright (c) 2015 Uber Technologies, Inc.

// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:

// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.

'use strict';

var assign = require('object-assign');
var React = require('react');
var r = require('r-dom');

var MapGL = require('../../src/index.js');

// San Francisco
var location = require('./../data/cities.json')[0];
var _zipcodesSF = require('./../data/feature-example-sf.json');

_zipcodesSF.features.forEach(function _forEach(feature) {
  feature.properties.value = Math.random() * 1000;
});

var NotInteractiveExample = React.createClass({
  displayName: 'NotInteractiveExample',

  PropTypes: {
    width: React.PropTypes.number.isRequired,
    height: React.PropTypes.number.isRequired
  },

  getInitialState: function getInitialState() {
    return {
      latitude: location.latitude,
      longitude: location.longitude,
      zoom: 11
    };
  },

  render: function render() {
    return r(MapGL, assign({
      latitude: this.state.latitude,
      longitude: this.state.longitude,
      zoom: this.state.zoom,
      width: this.props.width,
      height: this.props.height,
      startDragLatLng: this.state.startDragLatLng
    }, this.props));
  }
});

module.exports = NotInteractiveExample;
