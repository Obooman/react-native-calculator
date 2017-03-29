import React,{ Component } from 'react'
import { connect } from 'react-redux'
import {
	View,
	Text,
	Dimensions,
	StyleSheet,
	TouchableHighlight
} from 'react-native';

const { width, height } = Dimensions.get('window')

class ModifyButton extends Component{
	render(){
		return (
			<TouchableHighlight 
				style={ styles.wrapper }
				underlayColor="#F68F10"
				onPress={ this.pressHandler }
				>
				<Text style={ styles.text }>=</Text>
			</TouchableHighlight>
		)
	}

	pressHandler = () => {
		this.props.dispatch({
			type:'GET_RESULT'
		})
	}
}

const styles = StyleSheet.create({
	wrapper:{
		width:width/4,
		height:width/4,
		backgroundColor:'#E48B15',
		flexDirection:'row',
		alignItems:'center',
		justifyContent:'center',
		borderRightWidth:0.5,
		borderRightColor:'#000',
		borderTopWidth:0.5,
		borderTopColor:'#000'
	},
	text:{
		color:'white',
		fontSize:30,
		fontFamily:'PingFangSC-Ultralight'
	}
})

export default connect()(ModifyButton);