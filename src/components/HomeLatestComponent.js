/* eslint-disable prettier/prettier */
import React from 'react';
import { Alert, Image, Text, TouchableOpacity, View } from 'react-native';
import { blackcolor, commonstyles, graycolor, marooncolor } from '../styles/commonstyles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

class HomeLatestComponent extends React.PureComponent {
    render() {
        let decode = require('html-entities-decoder');
        const defaultImage = require('../Assets/Images/no_image.png');
        const imageUrl = this.props?.item?.web_featured_image
          ? {uri: this.props?.item?.web_featured_image}
          : defaultImage;
        return (
            <TouchableOpacity
                onPress={() => {
                    this.props.navigation.navigate('Details', {
                        item: this.props.item,
                        detailsData: this.props.propsdata,
                    });
                }}>
                <View style={{ padding: 5,flexDirection:'row' }}>
                <View style={{top:11}}>
              <FontAwesome name="circle" size={10} color={marooncolor} />
            </View>
                    <View  style={commonstyles.homeLatestTextView}>
                        <Text numberOfLines={2} style={commonstyles.Homeletesttext}>
                        {decode(this.props?.item?.title?.rendered)} </Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
}
export default HomeLatestComponent;
