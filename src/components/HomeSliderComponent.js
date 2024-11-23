/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Alert, Image, Text, TouchableOpacity, View} from 'react-native';
import {blackcolor, commonstyles, dark_graycolor, graycolor, whitecolor} from '../styles/commonstyles';
import LinearGradient from 'react-native-linear-gradient';
import FastImage from 'react-native-fast-image';

class HomeSliderComponent extends React.PureComponent {
  render() {
    const {index, propsdata, item, navigation, goToPrevious, goToNext} =
      this.props;

    return (
      <View style={{position: 'relative'}}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Details', {
              item: item,
              detailsData: propsdata,
            });
          }}>
          <FastImage
            resizeMode={FastImage.resizeMode.cover}
            source={{uri: item?.web_featured_image}}
            style={commonstyles.slidercard}
          />
          <LinearGradient
            colors={['rgba(0, 0, 0, 0.2)','rgba(0, 0, 0, 0.7)',
              'rgba(0, 0, 0, 1)']}
            style={commonstyles.sliderGradient}>
            <Text numberOfLines={2} style={commonstyles.slidertext}>{item?.title?.rendered}</Text>
          </LinearGradient>
          <View
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
            }}>
            <Text
              style={{
                color: dark_graycolor,
                fontSize: 12,
                fontFamily: 'Lora-Medium',
                marginLeft: 5,
              }}>
              {index + 1}/{propsdata.length}
            </Text>
          </View>
        </TouchableOpacity>
        {/* <TouchableOpacity
          style={{
            position: 'absolute',
            top: '50%',
            left: 10,
            transform: [{translateY: -25}],
          }}
          onPress={goToPrevious}>
          <Text style={{color: '#fff', fontSize: 30}}>‹</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            position: 'absolute',
            top: '50%',
            right: 30,
            transform: [{translateY: -20}],
            backgroundColor: blackcolor,
            width: 30, // Make it the same as height
            height: 30, // Set the height for the circle
            borderRadius: 30, // Half of the width/height to make it a circle
            justifyContent: 'center', // Center the text vertically
            alignItems: 'center', // Center the text horizontally
          }}
          onPress={goToNext}>
          <Text style={{color: '#fff', fontSize: 30, textAlign: 'center'}}>
            ›
          </Text>
        </TouchableOpacity> */}
      </View>
    );
  }
}

export default HomeSliderComponent;
