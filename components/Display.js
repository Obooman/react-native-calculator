import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions
} from 'react-native';

const { height } = Dimensions.get('window');

export default class Display extends Component {
  render() {
    return (
    	<View style = { styles.wrapper }>
    		<Text style = { styles.text }>
    			{ this.props.display || 0 }
			</Text>
    	</View>
    )
  }
}

var styles = StyleSheet.create({
	wrapper:{
		width:320,
		height:height - 400,
		backgroundColor:'#181818'
	},
	text:{
		color:'white',
		position:'absolute',
		right:10,
		bottom:10,
		fontSize:70,
		fontWeight:'100'
	}
})