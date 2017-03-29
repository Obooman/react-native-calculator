import React,{ Component } from 'react'
import {
	View,
	Text,
	TouchableHighlight,
	StyleSheet,
	Dimensions
} from 'react-native'
import { connect } from 'react-redux';

const { width, height } = Dimensions.get('window');

class Main extends Component{
	render(){
		return (
			<View style={ styles.wrapper }>
				<Text style={ styles.text }>{
					this.props.display
				}</Text>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	wrapper:{
		width:width,
		height:height - (width/4)*5,
		backgroundColor:'#1d1d1d'
	},
	text:{
		color:'white',
		position:'absolute',
		right:10,
		bottom:0,
		fontSize:70,
		fontFamily:'PingFangSC-Ultralight'
	}
})

export default connect((store) => {
	return {
		display:(store &&  store.display) ? store.display : 0
	}
})(Main);