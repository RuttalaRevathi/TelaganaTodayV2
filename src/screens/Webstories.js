/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView } from 'react-native';
import FastImage from 'react-native-fast-image';
import { commonstyles } from '../styles/commonstyles';
import WebView from 'react-native-webview';
import AutoHeightWebView from 'react-native-autoheight-webview';

const Webstories = ({ navigation, route }) => {
    const { storyData, propsdata } = route.params;
    console.log(storyData, "storyData=============");
    const screenWidth = Dimensions.get('window').width;

    const source = route?.params?.item?.content?.rendered || '';
  var source1 = source.replace('lazyload', 'text/javascript');
    return (
        <View style={styles.container}>
            <ScrollView>
            <View
            style={{
              width: screenWidth - 10,
              justifyContent: 'center',
              pointerEvents: 'none',
              paddingLeft: 10,
            }}>
            <Text>{source1}</Text>
            <AutoHeightWebView style={{ width: Dimensions.get('window').width - 15, marginTop: 10 }}
              customStyle={`
              * {
                font-family: 'TTLogo';
                line-height: 1.5;
                -webkit-user-select: none;
                  -webkit-touch-callout: none; 
                 }
                
              p {
                font-size: 16px;
                text-align:left;
                margin:10;
                font-family:'TTLogo';
                line-height:35px
                                              }
                                              p img{
                                                width:100%;
                                                height:inherit
                                              }
                                              p iframe{
                                                width:100%;
                                                height:inherit
                                              }
                                              img{
                                                width:100%;
                                                height:inherit
                                              }
                                              div[id*=attachment]{
                                                max-width:100%!important;
                                                height:inherit
                                              }
                                             
                                            
            `}
              source={{
                html: (source1 +=
                  "<style>@import url('https://fonts.googleapis.com/css2?family=TTLogo&display=swap');p strong, span, p span{font-family: 'TTLogo', sans-serif;}p,li{font-family: 'TTLogo', sans-serif;line-height:1.6;padding:0px 8px;color:#000;font-weight:500;font-size:18px}</style>"),
                baseUrl: 'https://twitter.com',
              }}
              scalesPageToFit={false}
              viewportContent={'width=device-width, user-scalable=no'}

            />
          </View>
          </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F0F0F0', // Gray background color
        padding: 10,
    },

    storyImage: {
        width: 80,
        height: 80,
        position: 'absolute',
        top: 10,
        right: 10,
        borderRadius: 5,
    },
    storyContent: {
        fontSize: 16,
        lineHeight: 24,
        marginTop: 10,
    },
});

export default Webstories;
