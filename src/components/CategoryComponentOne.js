/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Alert, Text, TouchableOpacity, View, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {commonstyles} from '../styles/commonstyles';

class CategoryComponentOne extends React.PureComponent {
  render() {
    return (
      <View style={{marginRight: 5, marginLeft: 5, marginTop: 10}}>
        <TouchableOpacity
          onPress={() => {
            this.props?.navigation?.navigate('Details', {
              item: this.props?.item,
              detailsData: this.props?.propsdata,
            });
          }}>
          <View style={commonstyles.sliderView}>
            <Image
              source={{uri: this.props?.item?.web_featured_image}}
              style={commonstyles.slidercard}
            />
            <LinearGradient
              colors={['rgba(0,0,0,0)', 'rgba(0,0,0,.8)', 'rgba(0,0,0,1)']}
              style={commonstyles.sliderGradient}>
              <Text style={commonstyles.slidertext}>
                {this.props?.item?.title?.rendered}
              </Text>
            </LinearGradient>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
export default CategoryComponentOne;
