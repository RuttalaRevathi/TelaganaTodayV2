/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Alert,
  Dimensions,
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { commonstyles } from '../styles/commonstyles';
import moment from 'moment';
import FastImage from 'react-native-fast-image';

class HomeComponentThree extends React.PureComponent {
  render() {
    let decode = require('html-entities-decoder');
    const now = moment.utc();
    const date = moment.utc(this.props?.item?.date_gmt || now);
    const diffSeconds = now.diff(date, 'seconds');
    const diffMinutes = now.diff(date, 'minutes');
    const diffHours = now.diff(date, 'hours');
    const diffDays = now.diff(date, 'days');

    let formattedDate;
    if (diffSeconds < 60) {
      formattedDate = `${diffSeconds} SECONDS AGO`;
    } else if (diffMinutes < 60) {
      formattedDate = `${diffMinutes} MINUTES AGO`;
    } else if (diffHours < 24) {
      formattedDate = `${diffHours} HOURS AGO`;
    } else {
      formattedDate = `${diffDays} DAYS AGO`;
    }
    const defaultImage = require('../Assets/Images/no_image.png');
    const imageUrl = this.props?.item?.web_featured_image
      ? { uri: this.props?.item?.web_featured_image }
      : defaultImage;
    return (
      <View>
        <View>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('Details', {
                item: this.props.item,
                detailsData: this.props?.propsdata,
              });
            }}>
            <View style={commonstyles.HomeThreeCategoryview}>
              <View>
                <FastImage
                  resizeMode={FastImage.resizeMode.cover}
                  source={imageUrl}
                  style={commonstyles.HomeCategoryImg}
                />
              </View>
              <View style={commonstyles.homecategoryTextView}>
                <Text numberOfLines={3} style={commonstyles.HomeCategorytext}>
                  {decode(this.props?.item?.title?.rendered)}
                </Text>
              </View>
              <View style={commonstyles.timeview}>
                <Text style={commonstyles.latesttime}>{formattedDate}</Text>
              </View>
            </View>

          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
export default HomeComponentThree;
