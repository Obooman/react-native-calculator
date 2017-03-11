import React, { Component } from 'react';
import {
  Text,
  View,
  StatusBar
} from 'react-native';

import Display from './Display';
import Button from './Button';
import FuncButton from './FuncButton';
import ButtonWrapper from './ButtonWrapper';

export default class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      display:0,
      former:0,
      latter:0
    }
  }

  render() {
    return (
    	<View>
        <StatusBar
          barStyle="light-content"
        />
        <Display display={ this.state.display }/>
        <ButtonWrapper>
          <FuncButton display="C"/>
          <FuncButton display="+/-"/>
          <FuncButton display="%"/>
          <FuncButton display="÷" 
            operation = {true} 
            active = { this.state.operation == 'divide' }
            onPress = { this.setOperation('divide') }
          />

          <Button display="7"/>
          <Button display="8"/>
          <Button display="9"/>
          <FuncButton display="×" 
            operation = {true} 
            active = { this.state.operation == 'multi' }
            onPress = { this.setOperation('multi') }
          />

          <Button display="4"/>
          <Button display="5"/>
          <Button display="6"/>
          <FuncButton display="-" 
            operation = {true} 
            active = { this.state.operation == 'minus' }
            onPress = { this.setOperation('minus') }
          />

          <Button display="1"/>
          <Button display="2"/>
          <Button display="3"/>
          <FuncButton display="+" 
            operation = {true} 
            active = { this.state.operation == 'plus' }
            onPress = { this.setOperation('plus') }
          />

          <Button display="0" big="true"/>
          <Button display="."/>
          <FuncButton display="=" operation = { true }/>
        </ButtonWrapper>
    	</View>
    )
  }

  changeDisplay(){
  }

  changeOperation(operation){
    if( this.state.latter ){

      this.setState({
        former:calculate(),
        operation,
        latter:0
      })

    } else {

      this.setState({
        operation
      })

    }
  }

  getResult(){
    this.setState({
      display:this.calculate(),
      former:this.calculate()
    })
  }

  calculate(){
    const {
      operation,former,latter
    } = this.state;

    if( operation == "plus" ){
      return former + latter;
    } else if( operation == 'minus' ){
      return former - latter;
    } else if( operation == 'multi' ){
      return former * latter;
    } else if( operation == 'devide' ){
      return former/latter;
    }
  }

  clear(){
    this.setState({
      display:0
    })
  }
}