import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View
} from 'react-native';

import Main from './components/Main';

export default class ReactNativeCalculator extends Component {
  render() {
    return <Main/>
  }
}

AppRegistry.registerComponent('ReactNativeCalculator', () => ReactNativeCalculator);
