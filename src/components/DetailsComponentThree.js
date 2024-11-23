/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Alert,
  Dimensions,
  Image,
  Share,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { commonstyles } from '../styles/commonstyles';
const screenWidth = Dimensions.get('window').width;

class DetailsComponentThree extends React.PureComponent {
  render() {
    let decode = require('html-entities-decoder');
    const defaultImage = require('../Assets/Images/no_image.png');
    const imageUrl = this.props?.item?.web_featured_image
  ? { uri: this.props?.item?.web_featured_image }
  : defaultImage;
    return (
      <View>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('Details', {
              item: this.props.item,
              detailsData: this.props.propsdata,
            });
          }}>
          <View style={commonstyles.HomeComp2MainView}>
            <View style={commonstyles.HomeComp2DotView}>
              <View style={commonstyles.cateviewText}>
                <Text
                  numberOfLines={2}
                  ellipsizeMode="tail"
                  style={commonstyles.latestText}>
                  {decode(this.props?.item?.title?.rendered)}
                </Text>
               
              </View>
              <View style={commonstyles.cateviewImg}>
                <Image source={imageUrl} style={commonstyles.cateImage} />
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
export default DetailsComponentThree;
