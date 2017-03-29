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
				style={styles.wrapper}
				underlayColor="#DDDDDD"
				onPress={ this.pressHandler }>
				<Text style={ styles.text }>{ this.props.text }</Text>
			</TouchableHighlight>
		)
	}

	pressHandler = () => {
		if( this.props.text === 'C' ){
			this.props.dispatch({
				type:'CLEAR'
			})
		} else if( this.props.text === '%' ){
			this.props.dispatch({
				type:'PERCENTAGE'
			})

		} else {
			this.props.dispatch({
				type:'TOGGLE_MINUS'
			})
		}
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
		fontSize:26,
		fontFamily:'PingFangSC-Ultralight'
	}
})

export default connect()(ModifyButton);