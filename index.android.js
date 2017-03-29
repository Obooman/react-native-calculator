import React, { Component } from 'react';
import {
  AppRegistry,
  View,
} from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducer';

import Main from './components/Main';

let store = createStore(reducer);

export default class DemoReactNative extends Component {
  render() {
    return (
      <Provider store={store}>
        <Main/>
      </Provider>
    );
  }
}

AppRegistry.registerComponent('DemoReactNative', () => DemoReactNative);
