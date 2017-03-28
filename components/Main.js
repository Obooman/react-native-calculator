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

YellowBox=false;

export default class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      display:0,
      former:0,
      latter:0,
      result:0
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
          <FuncButton display="C" onPress={ this.clear } key="C"/>
          <FuncButton display="+/-" onPress = { this.toggleMinus } key="+/-"/>
          <FuncButton display="%" onPress={ this.setPercentage }/>
          {
            [
              this.getFuncBtn("÷","divide"),
              this.getNumberBtn([7,8,9]),
              this.getFuncBtn("-","minus"),
              this.getNumberBtn([4,5,6]),
              this.getFuncBtn("+","plus"),
              this.getNumberBtn([1,2,3]),
              this.getFuncBtn("×","multi")
            ]
          }
          <Button display="0" big="true" onPress={ () => {this.changeDisplay("0")} }/>
          <Button display="." onPress={ this.addDot }/>
          <FuncButton display="=" operation = { true } onPress={ this.getResult } key="="/>
        </ButtonWrapper>
    	</View>
    )
  }

  getNumberBtn(numberArr){
    return numberArr.map((number,index) => (
        <Button display={
          number
        } onPress={ 
          () => {this.changeDisplay( ''+number )}
        } key={ ''+Math.random().toFixed(2)+index }/>
    ))
  }

  getFuncBtn = (display,operation) => (
      <FuncButton display = { display } 
        operation = {true} 
        active = { this.state.operation == operation }
        onPress = { () => {this.setOperation( operation )} }
      />
  )

  setOperation = (operation) => {
    this.setState({
      operation
    })
  }

  changeDisplay = (number) => {
    let {
      operation,former,latter
    } = this.state;

    if( !operation ){
      former = parseFloat(former + number);

      this.setState({
        display:former,
        former
      })
    } else {
      latter = former = parseFloat(latter + number);

      this.setState({
        display:latter,
        latter
      })
    }
  }

  changeOperation = (operation) => {
    alert(operation);

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

  setPercentage = () => {
    const {
      display
    } = this.state;

    this.setState({
      display:display/100
    })
  }

  toggleMinus = () => {
    let {
      display,operation,former,latter
    } = this.state;

    if( !/\-/.test(display) ){
      display = '-' + display
    } else {
      display = '' + -Number(display)
    }

    this.setState({
      former: operation ? former :-former,
      latter: operation ? latter :-latter,
      display
    })
  }

  addDot = () => {
    let {
      display
    } = this.state;

    if( !/\./.test(display) ){
      display = '' + display + '.'
    }

    this.setState({
      display
    })
  }

  getResult = () => {
    const calc = this.calculate()

    this.setState({
      display:calc,
      former:calc,
      latter:0
    })
  }

  calculate = () => {
    if(!this.state.operation) return;

    const {
      operation,former,latter
    } = this.state;

    let result;

    switch(operation){
      case "plus": result = former + latter;break;
      case "minus": result = former - latter;break;
      case "multi": result = former * latter;break;
      case "devide": result = (former / latter);break;
    }

    return result;
  }

  clear = () => {
    this.setState({
      display:0,
      former:0,
      latter:0,
      operation:''
    })
  }
}