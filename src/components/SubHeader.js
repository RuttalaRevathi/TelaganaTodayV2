/* eslint-disable prettier/prettier */
import React from 'react';
import { HeaderStyle } from '../styles/Header.Styles';
import { View, Image, Text, TouchableOpacity } from 'react-native';
export default function SubHeader(props, { navigation }) {
  return (
    <View style={HeaderStyle.subHeaderviewHeight}>
        <TouchableOpacity
          onPress={() => {
            props.leftBtnClick();
          }}>
           <Image style={{width:22,height:22}} source={require('../Assets/Images/left-arrow.png')} />
        </TouchableOpacity>
      <View>
        <Text style={[HeaderStyle.subHeaderheading]}>{props.title}</Text>
      </View>
      <View />
    </View>
  );
}
