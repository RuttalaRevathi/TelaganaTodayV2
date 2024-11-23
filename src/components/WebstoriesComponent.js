/* eslint-disable prettier/prettier */
import React from 'react';
import {Alert, Image, Text, TouchableOpacity, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import LinearGradient from 'react-native-linear-gradient';
import {commonstyles} from '../styles/commonstyles';

class WebstoriesComponent extends React.PureComponent {
  render() {
    return (
      <TouchableOpacity
        onPress={() => {
          this.props.navigation.navigate('Webstories', {
            item: this.props.item,
            storyData: this.props.propsdata,
          });
        }}>
        <View style={{padding: 5, position: 'relative'}}>
          <Image
            source={{uri: this.props.item?.web_featured_image}}
            style={commonstyles.slidercard}
          />
          <LinearGradient
            colors={[
              'rgba(70,70,70,0.7)',
              'rgba(70,70,70,0.7)',
              'rgba(70,70,70,0.7)',
            ]}
            style={commonstyles.sliderGradient}>
            <Text numberOfLines={3} style={commonstyles.slidertext}>
              {this.props.item?.title?.rendered}
            </Text>
          </LinearGradient>
        </View>
      </TouchableOpacity>
    );
  }
}
export default WebstoriesComponent;
