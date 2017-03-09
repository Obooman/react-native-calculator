import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View
} from 'react-native';

import Main from './components/Main';

export default class ReactNativeCalculator extends Component {
  render() {
    return (
    	<View>
    		<Main/>
    	</View>
    )
  }
}

AppRegistry.registerComponent('ReactNativeCalculator', () => ReactNativeCalculator);
