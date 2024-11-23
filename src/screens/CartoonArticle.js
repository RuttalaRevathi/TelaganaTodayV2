/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Linking, ScrollView, FlatList, Share, Dimensions } from 'react-native';
import { appThemeColor, blackcolor, commonstyles, Header_text, whitecolor } from '../styles/commonstyles';
import AutoHeightWebView from 'react-native-autoheight-webview';
import LinearGradient from 'react-native-linear-gradient';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { HeaderStyle } from '../styles/Header.Styles';
import HTMLView from 'react-native-htmlview';
import moment from 'moment';
import { connect, useDispatch } from 'react-redux';
import getRelatedAction from '../redux/actions/getRelatedAction';
import FastImage from 'react-native-fast-image';

const screenWidth = Dimensions.get('window').width;

// let decode = require('html-entities-decoder');

const CartoonArticle = ({ navigation, relatedData, relatedLoading,
    sliderData,
    loading,
    latestNews,
    latestLoading, route }: Props) => {
    const dispatch = useDispatch();
    const source = route?.params?.item?.content?.rendered;
    var source1 = source?.replace('lazyload', 'text/javascript');
    const decode = require('html-entities-decoder');

    useEffect(() => {
        dispatch(getRelatedAction());
    }, []);
    useEffect(() => {
        // goToTop();
    }, []);


    const defaultImage = require('../Assets/Images/no_image.png');
    const imageUrl = route?.params?.item?.web_featured_image
        ? { uri: route?.params?.item?.web_featured_image }
        : defaultImage;
    const now = moment.utc();
    const date = moment.utc(route?.params?.item?.date_gmt || now);
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
    return (
        // <View>
        //     <Text> {route?.params?.item?.title?.rendered}</Text>
        // </View>
        <View style={commonstyles.container}>
            <View >
                <View style={HeaderStyle.subHeadercustom}>
                    <View style={{ }}>
                        <TouchableOpacity onPress={() => {
                            navigation.goBack();
                        }} style={{ zIndex: 999 }}>
                            <Image source={require('../Assets/Images/previous.png')} style={{ width: 18, height: 18, top: 10,paddingLeft:5 }} />
                        </TouchableOpacity>
                    </View>
                   <View></View>
                </View>
            </View>
            <ScrollView
                ref={(c) => { this.scroll = c; }}
            >
                <View>
                    <View style={{ paddingLeft: 10, paddingTop: 5, paddingRight: 5 }}>
                        <Text style={commonstyles.Detailstittle}>
                            {decode(route?.params?.item?.title?.rendered)}
                        </Text>
                    </View>

                    <View style={{paddingLeft: 10}}>
              <Text style={commonstyles.detailTime}>{formattedDate}</Text>
            </View>
                    {/* description */}

                    <View style={{ justifyContent: 'center', padding: 5 }}>

                        <Image source={imageUrl}
                            style={commonstyles.cartoonimg} />

                    </View>

                    {/* Related News */}
                    {/* <View>

                        Related news FlatList

                        <View style={{ position: 'relative' }}>
                            <FlatList
                                showsHorizontalScrollIndicator={false}
                                persistentScrollbar={false}
                                data={relatedData?.data}
                                renderItem={({ item, index }) =>

                                    <View >
                                        <TouchableOpacity onPress={() => { this.props.navigation.navigate("Details", { data: item }) }}  >
                                            <View style={commonstyles.cardView}>
                                                <View style={commonstyles.cateviewImg}>
                                                    <Image source={{ uri: item.web_featured_image }} style={commonstyles.cateImage} />
                                                </View>
                                                <View style={commonstyles.cateviewText}>
                                                    <Text numberOfLines={2} ellipsizeMode='tail'
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
    p: { color: appThemeColor, fontSize: 20, fontFamily: 'JIMS', lineHeight: 32, fontWeight: 'bold' },

});
const RelatedTextStyles = StyleSheet.create({
    p: { color: '#000', fontSize: 20, fontFamily: 'JIMS', lineHeight: 25, top: 10 },
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
export default connect(mapStateToProps, mapDispatchToProps)(CartoonArticle);
