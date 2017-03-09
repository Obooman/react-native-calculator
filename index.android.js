import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View
} from 'react-native';

export default class ReactNativeCalculator extends Component {
  render() {
    return (
      <View/>
    )
  }
}

AppRegistry.registerComponent('ReactNativeCalculator', () => ReactNativeCalculator);
