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

class NumberButton extends Component{
	render(){
		const {
			big 
		} = this.props;

		const bigStyle = {
			paddingRight:big ? width/4 : 0,
			width:big ? width/2 : width/4
		}

		return (
			<TouchableHighlight 
				style={[styles.wrapper,bigStyle]}
				underlayColor="#DDDDDD"
				onPress={ this.pressHandler }>
				<Text style={ styles.text }>{ 
					this.props.number
				}</Text>
			</TouchableHighlight>
		)
	}

	pressHandler = () => {
		const {
			dispatch
		} = this.props;

		dispatch({
			type:'INPUT',
			payload:{
				number:this.props.number
			}
		})
	}
}

const styles = StyleSheet.create({
	wrapper:{
		width:width/4,
		height:width/4,
		backgroundColor:'#D5D6D8',
		flexDirection:'row',
		alignItems:'center',
		justifyContent:'center',
		borderRightWidth:0.5,
		borderRightColor:'#000',
		borderTopWidth:0.5,
		borderTopColor:'#000'
	},
	text:{
		fontSize:40,
		fontFamily:'PingFangSC-Ultralight'
	}
})

export default connect()(NumberButton);