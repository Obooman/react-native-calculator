import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  TouchableHighlight
} from 'react-native';

const { height } = Dimensions.get('window');

export default class FuncButton extends Component {
  render() {
    let wrapperStyle = {
      width:80,
      height:80,
      backgroundColor:'#DDD',
      borderRightWidth:1,
      borderTopWidth:1,
      borderRightColor:'#444',
      borderTopColor:'#444',
    }

    let textStyle = {
      fontSize:34,
      textAlign:'center',
      lineHeight:80,
      fontWeight:'100'
    }

    if( this.props.big ){
      wrapperStyle.width = 160;
      wrapperStyle.paddingRight = 80;
    }

    if( this.props.operation ){
      wrapperStyle.backgroundColor = "#F67B13"
      textStyle.color = "white"
    }

    return (
    	<TouchableHighlight underlayColor={this.props.operation?'#F78D10':'#B8BDBD'} style = { wrapperStyle } onPress={this.props.onPress}>
          <Text style = { textStyle }>
            { this.props.display }
          </Text>
      </TouchableHighlight>
    )
  }
}
