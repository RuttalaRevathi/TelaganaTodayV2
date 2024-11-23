/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
    Alert,
    Text,
    TouchableOpacity,
    View,
    Image,
    Dimensions,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import {
    blackcolor,
    commonstyles,
    shadow_color,
    whitecolor,
} from '../styles/commonstyles';
import moment from 'moment/moment';

class HomeVideosgalleryItemTwo extends React.PureComponent {
    render() {
        let decode = require('html-entities-decoder');
        const now = moment.utc();
        const date = moment.utc(this.props?.item?.date_gmt || now);
        const diffSeconds = now.diff(date, 'seconds');
        const diffMinutes = now.diff(date, 'minutes');
        const diffHours = now.diff(date, 'hours');

        let formattedDate;
        if (diffSeconds < 60) {
            formattedDate = `${diffSeconds} seconds ago`;
        } else if (diffMinutes < 60) {
            formattedDate = `${diffMinutes} minutes ago`;
        } else {
            formattedDate = `${diffHours} hours ago`;
        }
        const defaultImage = require('../Assets/Images/no_image.png');
        const imageUrl = this.props?.item?.web_featured_image
            ? { uri: this.props?.item?.web_featured_image }
            : defaultImage;
        return (
            <View style={{ paddingRight: 10 }}>
                <TouchableOpacity
                    onPress={() => {
                        this.props.navigation.navigate('Details', {
                            item: this.props.item,
                            detailsData: this.props.videosData?.data,
                        });
                    }}>
                    <View style={{ paddingTop: 10, paddingBottom: 10 }}>
                        <View style={{ position: 'relative' }}>
                            <Image
                                source={imageUrl}
                                style={commonstyles.HomeVideosliderImg}
                            />
                            <View style={{
                                position: 'absolute',
                                bottom: 5,
                                right: 5,
                            }}>
                                <Image source={require('../Assets/Images/videoicon.png')} style={{}} />

                            </View>
                        </View>
                        <View style={commonstyles.homeVideosliderTextView}>
                            <Text numberOfLines={3} style={commonstyles.homeVideosliderText}>
                                {decode(this.props?.item?.title?.rendered)}                        </Text>
                        </View>
                        {/* <View style={commonstyles.timeview}>
                            <Text style={commonstyles.latesttime}>{formattedDate}</Text>
                        </View> */}
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}
export default HomeVideosgalleryItemTwo;
