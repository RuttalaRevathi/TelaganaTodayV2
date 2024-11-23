/* eslint-disable prettier/prettier */
import React from 'react';
import { HeaderStyle } from '../styles/Header.Styles';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { appThemeColor, blackcolor } from '../styles/commonstyles';
export default function SubHeader(props, { navigation }) {
  return (
    <View style={HeaderStyle.subHeaderviewHeight}>
      <View style={{}}>
        <TouchableOpacity
          onPress={() => {
            props.leftBtnClick();
          }}
          style={{}}>
          <MaterialIcons
            name="arrow-back"
            size={30}
            color={blackcolor}
          />

        </TouchableOpacity>
      </View>
      <View style={{}}>
        <Text style={[HeaderStyle.subHeaderheading]}>{props.title}</Text>
      </View>
      <View style={{}} />


    </View>
  );
}
