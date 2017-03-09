import React, { Component } from 'react';
import {
  Text,
  View,
  StatusBar
} from 'react-native';

import Display from './Display';
import Button from './Button';
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
          <Button display="C"/>
          <Button display="+/-"/>
          <Button display="%"/>
          <Button display="÷" operation = {true}/>

          <Button display="7"/>
          <Button display="8"/>
          <Button display="9"/>
          <Button display="×" operation = {true}/>

          <Button display="4"/>
          <Button display="5"/>
          <Button display="6"/>
          <Button display="-" operation = {true}/>

          <Button display="1"/>
          <Button display="2"/>
          <Button display="3"/>
          <Button display="+" operation = {true}/>

          <Button display="0" big="true"/>
          <Button display="."/>
          <Button display="=" operation = {true}/>
        </ButtonWrapper>
    	</View>
    )
  }
}