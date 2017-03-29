import React,{ Component } from 'react'
import {
	View,
	Text,
	StyleSheet
} from 'react-native'

import Display from './Display';
import NumberButton from './NumberButton';
import OperationMark from './OperationMark';
import ModifyButton from './ModifyButton';
import EqualButton from './EqualButton';

class Main extends Component{
	constructor(props) {
	  super(props);
	
	  this.state = {};
	}

	render(){
		return (
			<View style={ styles.container }>
				<Display/>				
				<ModifyButton text="C"/>
				<ModifyButton text="+/-"/>
				<ModifyButton text="%"/>
				<OperationMark operation="÷"/>
				<NumberButton number="7"/>
				<NumberButton number="8"/>
				<NumberButton number="9"/>
				<OperationMark operation="×"/>
				<NumberButton number="4"/>
				<NumberButton number="5"/>
				<NumberButton number="6"/>
				<OperationMark operation="-"/>
				<NumberButton number="1"/>
				<NumberButton number="2"/>
				<NumberButton number="3"/>
				<OperationMark operation="+"/>
				<NumberButton number="0" big={true}/>
				<NumberButton number="."/>
				<EqualButton/>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container:{
		flexDirection:'row',
		flexWrap:'wrap' 
	}
})

export default Main;