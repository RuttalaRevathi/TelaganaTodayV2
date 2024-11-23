/* eslint-disable no-return-assign */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Linking, ScrollView, FlatList, Share, Dimensions } from 'react-native';
import { appThemeColor, blackcolor, commonstyles, Header_text, whitecolor } from '../styles/commonstyles';
import AutoHeightWebView from 'react-native-autoheight-webview';
import LinearGradient from 'react-native-linear-gradient';
import Feather from 'react-native-vector-icons/Feather';
import FastImage from 'react-native-fast-image';
import { HeaderStyle } from '../styles/Header.Styles';
import HTMLView from 'react-native-htmlview';
import moment from 'moment';
import { connect, useDispatch } from 'react-redux';
import getRelatedAction from '../redux/actions/getRelatedAction';
const screenWidth = Dimensions.get('window').width;

// let decode = require('html-entities-decoder');

const VideoArticle = ({ navigation, relatedData, relatedLoading,
    sliderData,
    loading,
    latestNews,
    latestLoading, route }: Props) => {
    const dispatch = useDispatch();
    const source = route?.params?.item?.content?.rendered;
    var source1 = source?.replace('lazyload', 'text/javascript');
    
    useEffect(() => {
        dispatch(getRelatedAction());
    }, []);
    const sharecall = () => {
        const Link_Url = route?.params?.item?.link;
        Share.share({
          message: Link_Url,
        })
          .then((result) => console.log(result))
          .then((error) => console.log(error));
      };

    return (

        <View style={commonstyles.container}>
            <View >
                <View style={HeaderStyle.subHeadercustom}>
                    <View style={{ flex: 0.3 }}>
                        <TouchableOpacity onPress={() => {
                            navigation.goBack();
                        }} style={{ zIndex: 999 }}>
                            <Image source={require('../Assets/Images/arrow.png')} style={{ width: 18, height: 18, top: 10 }} />
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 0.6, flexDirection: 'row', justifyContent: 'space-evenly', paddingTop: 5 }}>
                        <TouchableOpacity onPress={() => { Linking.openURL('http://www.facebook.com/sharer.php?u=' + route?.params?.item?.link + '%3Futm_source%3Dreferral%26utm_medium%3DFB%26utm_campaign%3Dsocial_share&app_id=369158533547966'); }} >
                            <Image resizeMode="contain" source={require('../Assets/Images/facebook_share.png')} style={{ width: 30, height: 30 }} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { Linking.openURL('https://twitter.com/intent/tweet?url=' + route?.params?.item?.link); }} >
                            <Image resizeMode="contain" source={require('../Assets/Images/twitter_share.png')} style={{ width: 30, height: 30 }} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { Linking.openURL('whatsapp://send?text=' + route?.params?.item?.link); }} >
                            <Image resizeMode="contain" source={require('../Assets/Images/whatsapp_share.png')} style={{ width: 30, height: 30 }} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { Linking.openURL('https://t.me/share?url=' + route?.params?.item?.link); }} >
                            <Image resizeMode="contain" source={require('../Assets/Images/telegram_icon.png')} style={{ width: 30, height: 30 }} />
                        </TouchableOpacity>

                    </View>
                </View>
            </View>
            <ScrollView >
                <View>
                    <View style={{ margin: 10, flex: 1 }}>
                        <HTMLView
                            value={'<p>' + route?.params?.item?.title?.rendered + '</p>'}
                            stylesheet={headerStyles}
                        />
                    </View>

                    <View style={{ flexDirection: 'row', start: 10 }}>
                        <Text style={commonstyles.detailTime}>{(moment(route?.params?.item?.date_gmt).format('MMMM DD , YYYY'))} / </Text>
                        <Text style={commonstyles.detailTime}>{(moment(route?.params?.item?.date_gmt).utcOffset('+05:30').format('hh.mm A'))} IST  </Text>
                    </View>
                    {/* description */}
                    <AutoHeightWebView
                        androidLayerType="software"
                      
                        style={{ width: Dimensions.get('window').width - 15, bottom: 40 }}

                        customStyle={`
                                  * {
                                    font-family: 'JIMS';
                                    line-height: 2;; 
                                  }
                                  p {
                                    font-size: 15px;
                                    text-align:justify;
                                    margin:10;
                                    font-family: 'JIMS';
                                                                  }
                                                                  p img{
                                                                    width:100%;
                                                                    height:inherit
                                                                  }
                                                                  p iframe{
                                                                    width:100%;
                                                                    height:180px;  
                                                                  
                                                                  figure img{
                                                                    width:100%;
                                                                    height:inherit
                                                                  }
                                `}

                        source={{ html: source1 += "<style>@import url('https://fonts.googleapis.com/css2?family=TTLogo&display=swap');p strong, span, p span{font-family: 'TTLogo', sans-serif;}p,li{font-family: 'TTLogo', sans-serif;line-height:1.6;padding:0px 8px;color:#000;font-weight:500;font-size:18px}</style>", baseUrl: 'https://twitter.com' }}
                        scalesPageToFit={false}
                        viewportContent={'width=device-width, user-scalable=no'}

                    />

                    {/* Related News */}
                    {/* <View>
                        <View style={{ marginLeft: 10, marginBottom: 20 }}>
                            <Text style={{ color: '#000', fontSize: 20, fontFamily: 'Ramabhadra-Regular' }}>
                                Related News
                            </Text>
                        </View>
                         Related news FlatList 

                        <View style={{ position: 'relative' }}>
                            <FlatList
                                showsHorizontalScrollIndicator={false}
                                persistentScrollbar={false}
                                data={this.state.onlyRelated}

                                renderItem={({ item, index }) =>
                                    <View >
                                        <TouchableOpacity onPress={() => { this.props.navigation.navigate('VideoArticle', { data: item }); }}  >
                                            <View style={commonstyles.cardView}>
                                                <View style={commonstyles.cateviewImg}>
                                                    <Image source={{ uri: item.web_featured_image }} style={commonstyles.cateImage} />
                                                </View>
                                                <View style={commonstyles.cateviewText}>
                                                    <Text numberOfLines={2} ellipsizeMode="tail"
                                                        style={commonstyles.latestText}>{decode(item.title.rendered)}</Text>
                                                    <View style={commonstyles.timeview}>
                                                        <Text style={commonstyles.latesttime}>{(moment(item.date_gmt).format('DD-MMM-YYYY'))} , </Text>
                                                        <Text style={commonstyles.latesttime}>{(moment(item.modified).utcOffset('+05:30').format('hh.mm a'))}  </Text>
                                                    </View>

                                                </View>
                                            </View>
                                        </TouchableOpacity>

                                    </View>
                                }
                            />
                        </View>

                    </View> */}
                </View>
            </ScrollView>

        </View>
    );
};
const styles = StyleSheet.create({
    p: { color: '#000', fontSize: 22, fontFamily: 'JIMS', lineHeight: 30 },

});
const headerStyles = StyleSheet.create({
    p: { color: appThemeColor, fontSize: 26, fontFamily: 'JIMS', lineHeight: 37 },

});
const RelatedTextStyles = StyleSheet.create({
    p: { color: '#000', fontSize: 18, fontFamily: 'JIMS', lineHeight: 25, top: 10 },
});
type Props = {
    relatedData: Function,
    relatedLoading: Boolean,
    sliderData: Function,
    loading: Boolean,
    latestNews: Function,
    latestLoading: Boolean,

};

const mapStateToProps = state => ({
    relatedData: state.relatedReducer?.relatedData,
    relatedLoading: state.relatedReducer?.relatedLoading,
    sliderData: state.sliderReducer?.sliderData,
    loading: state.sliderReducer?.loading,
    latestNews: state.latestNewsReducer?.latestNews,
    latestLoading: state.latestNewsReducer?.latestLoading,
});
const mapDispatchToProps = {
    getRelatedAction,
};
export default connect(mapStateToProps, mapDispatchToProps)(VideoArticle);