import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions
} from 'react-native';

const { height } = Dimensions.get('window');

export default class Row extends Component {
  render() {
    return (
    	<View style = { styles.wrapper }>
    		{ this.props.children }
    	</View>
    )
  }
}

var styles = StyleSheet.create({
	wrapper:{
		width:320,
		height:80
	}
})