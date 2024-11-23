/* eslint-disable prettier/prettier */
// ActivityIndicator.js
import React from 'react';
import {ActivityIndicator, View, StyleSheet} from 'react-native';
import {blackcolor} from '../styles/commonstyles';

const CustomActivityIndicator = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <ActivityIndicator size="large" color={blackcolor} />
    </View>
  );
};

export default CustomActivityIndicator;
