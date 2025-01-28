/* eslint-disable prettier/prettier */
import React from 'react';
import { Alert, Text, TouchableOpacity, View, Image } from 'react-native';

import { blackcolor, commonstyles } from '../styles/commonstyles';
import moment from 'moment/moment';
import FastImage from 'react-native-fast-image';

class DetailsComponentTwo extends React.PureComponent {
  render() {
    const defaultImage = require('../Assets/Images/no_image.png');
    const imageUrl = this.props?.item?.web_featured_image
      ? { uri: this.props?.item?.web_featured_image }
      : defaultImage;
    let decode = require('html-entities-decoder');
    const now = moment.utc();
    const date = moment.utc(this.props?.item?.date_gmt || now);
    const diffSeconds = now.diff(date, 'seconds');
    const diffMinutes = now.diff(date, 'minutes');
    const diffHours = now.diff(date, 'hours');
    const diffDays = now.diff(date, 'days');

    let formattedDate;
    if (diffSeconds < 60) {
      formattedDate = `${diffSeconds} second${diffSeconds === 1 ? '' : 's'} ago`;
    } else if (diffMinutes < 60) {
      formattedDate = `${diffMinutes} minute${diffMinutes === 1 ? '' : 's'} ago`;
    } else if (diffHours < 24) {
      formattedDate = `${diffHours} hour${diffHours === 1 ? '' : 's'} ago`;
    } else {
      formattedDate = `${diffDays} day${diffDays === 1 ? '' : 's'} ago`;
    }
    return (
      <View>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('Details', {
              item: this.props.item,
              detailsData: this.props?.propsdata,
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
                <View style={commonstyles.timeview}>
                  <Text style={commonstyles.latesttime}>{formattedDate}</Text>
                </View>
              </View>
              <View style={commonstyles.cateviewImg}>
                <FastImage
                  resizeMode={FastImage.resizeMode.contain} source={imageUrl} style={commonstyles.cateImage} />
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
export default DetailsComponentTwo;
