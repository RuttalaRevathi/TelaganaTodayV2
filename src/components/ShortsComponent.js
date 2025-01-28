/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  Share,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import moment from 'moment';
import {commonstyles, whitecolor} from '../styles/commonstyles';
import FastImage from 'react-native-fast-image';

class ShortsComponent extends React.PureComponent {
  render() {
    const sharecall = () => {
      const Link_Url = this.props?.item?.link;
      Share.share({
        message: Link_Url,
      })
        .then(result => console.log(result))
        .then(error => console.log(error));
    };
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
    const defaultImage = require('../Assets/Images/no_image.png');
    const imageUrl = this.props?.item?.web_featured_image
      ? {uri: this.props?.item?.web_featured_image}
      : defaultImage;
    const source = this.props?.item?.excerpt?.rendered || '';
    var source1 = source.replace('lazyload', 'text/javascript');

    const screenHeight = Dimensions.get('window').height;

    return (
      <View
        style={{
          height: screenHeight - 280,
          backgroundColor: whitecolor,
          borderRadius: 10,
          shadowColor: '#000',
          shadowOffset: {width: 0, height: 4},
          shadowOpacity: 0.6,
          shadowRadius: 2,
          elevation: 4,
          marginHorizontal: 16,
        }}>
        <ScrollView>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('Details', {
                item: this.props.item,
                detailsData: this.props?.propsdata,
              });
            }}>
            <View stye={{}}>
              {/* Image */}
              <FastImage
                resizeMode={FastImage.resizeMode.cover}
                source={imageUrl}
                style={{
                  width: '100%',
                  height: 220,
                  resizeMode: 'cover',
                  borderTopLeftRadius: 10,
                  borderTopRightRadius: 10,
                }}
              />
              {/* Titttle */}
              <View style={commonstyles.shortstittleview}>
                <Text style={commonstyles.shortstittletext}>
                  {decode(this.props?.item?.title?.rendered)}
                </Text>
              </View>
              <View style={{}}>
                {/* Time and Share View */}
                <View style={commonstyles.shortstimeview}>
                  <View style={{}}>
                    <Text style={commonstyles.detailTime}>{formattedDate}</Text>
                  </View>
                  <View>
                    <TouchableOpacity
                      onPress={() => {
                        sharecall();
                      }}>
                      <Image
                        style={commonstyles.shortsshareimage}
                        source={require('../Assets/Images/new_share.png')}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
                {/* description */}
                <View
                  style={{
                    justifyContent: 'center',
                    padding: 10,
                  }}>
                  <Text numberOfLines={5} style={commonstyles.shortscontent}>
                    {source1}
                  </Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}
export default ShortsComponent;
