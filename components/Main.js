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
  render() {
    return (
    	<View>
        <StatusBar
          barStyle="light-content"
        />
        <Display/>
        <ButtonWrapper>
          <FuncButton display="C"/>
          <FuncButton display="+/-"/>
          <FuncButton display="%"/>
          <FuncButton display="÷" operation = {true}/>

          <Button display="7"/>
          <Button display="8"/>
          <Button display="9"/>
          <FuncButton display="×" operation = {true}/>

          <Button display="4"/>
          <Button display="5"/>
          <Button display="6"/>
          <FuncButton display="-" operation = {true}/>

          <Button display="1"/>
          <Button display="2"/>
          <Button display="3"/>
          <FuncButton display="+" operation = {true}/>

          <Button display="0" big="true"/>
          <Button display="."/>
          <FuncButton display="=" operation = {true}/>
        </ButtonWrapper>
    	</View>
    )
  }
}