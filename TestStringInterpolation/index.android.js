/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import App from './js/index';

export default class TestStringInterpolation extends Component {
  render() {
    return <App />;
  }
}

AppRegistry.registerComponent('TestStringInterpolation', () => TestStringInterpolation);
