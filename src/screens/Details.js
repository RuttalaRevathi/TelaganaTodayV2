/* eslint-disable prettier/prettier */
import React, { useEffect, useRef, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList,
  Share,
  Dimensions,
  ImageBackground,
  Linking,
  TouchableWithoutFeedback,
  Platform
} from 'react-native';
import {
  blackcolor,
  commonstyles,
  dark_graycolor,
  graycolor,
  light_gray,
  redcolor,
} from '../styles/commonstyles';
import AutoHeightWebView from 'react-native-autoheight-webview';
import moment from 'moment';
import { connect, useDispatch } from 'react-redux';
import getRelatedAction from '../redux/actions/getRelatedAction';
import getArticleDetailAction from '../redux/actions/getArticleDetailAction';
import DetailsComponentTwo from '../components/DetailsComponentTwo';
import DetailsComponentOne from '../components/DetailsComponentOne';
import DetailsComponentThree from '../components/DetailsComponentThree';
import SubHeader from '../components/SubHeader';
import { PanGestureHandler, State } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const screenWidth = Dimensions.get('window').width;

const Details = ({
  navigation,
  relatedData,
  latestNews,
  latestLoading,
  route,
}) => {
  const dispatch = useDispatch();
  const [detailsData, setDetailsData] = useState([]);
  const [fontSize, setFontSize] = useState(18); // Initial font size state
  const [renderWebView, setRenderWebView] = useState(false);
  const Scrollref = useRef(null);
  const [offset, setOffset] = useState(0);
  const navigate = useNavigation();
  useEffect(() => {
    const timer = setTimeout(() => {
      setRenderWebView(true);
    }, 500); // Delay rendering by 0.5 seconds

    return () => clearTimeout(timer); // Clean up the timer on unmount
  }, []);

  useEffect(() => {
    goToTop();
  }, [route]);

  const goToTop = () => {
    Scrollref.current?.scrollTo({ x: 0, y: 0, animated: true });
  };

  const sharecall = () => {
    const Link_Url = route?.params?.item?.link;
    Share.share({
      message: Link_Url,
    })
      .then(result => console.log(result))
      .catch(error => console.log(error));
  };

  const source = route?.params?.item?.content?.rendered || '';
  let source1 = typeof source === 'string' ? source.replace('lazyload', 'text/javascript') : '';

  const fontSizes = [18, 20, 23, 25];
const toggleFontSize = () => {
  const nextSizeIndex = (fontSizes.indexOf(fontSize) + 1) % fontSizes.length;
  setFontSize(fontSizes[nextSizeIndex]);
};

  const renderItemOne = ({ item }) => (
    <DetailsComponentOne
      item={item}
      propsdata={latestNews?.data}
      navigation={navigation}
    />
  );

  const renderItemTwo = ({ item }) => (
    <DetailsComponentTwo
      item={item}
      propsdata={latestNews?.data}
      navigation={navigation}
    />
  );

  const defaultImage = require('../Assets/Images/no_image.png');
  const imageUrl = route?.params?.item?.web_featured_image
    ? { uri: route?.params?.item?.web_featured_image }
    : defaultImage;
  let decode = require('html-entities-decoder');
  const now = moment.utc();
  const date = moment.utc(route?.params?.item?.date_gmt || now);
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

  const handleScroll = (event) => {
    setOffset(Math.floor(event.nativeEvent.contentOffset.y))
  }

  return (
    <View style={commonstyles.container}>
      <ScrollView ref={Scrollref} onScroll={handleScroll}>
        <View
          style={{
            position: 'relative',
            height: '100%',
          }}>
          <View>
            <ImageBackground
              source={imageUrl}
              style={commonstyles.Detailslargecard}>
              <TouchableOpacity
                style={{
                  padding: 12,
                  width: '12%',
                  position: 'absolute',
                  justifyContent: 'center',
                }}
                onPress={() => navigation.goBack()}>
                <Image
                  style={{ width: 30, height: 30, right: 5 }}
                  source={require('../Assets/Images/previous.png')}
                />
              </TouchableOpacity>
            </ImageBackground>
          </View>
          <View style={commonstyles.DetailsMainView}>
            {/* category view */}
            <View style={commonstyles.DetailsSubView}>
              <View style={commonstyles.DetailsCategoryTextView}>
                <Text style={commonstyles.DetailsCategoryText}>
                  {route?.params?.item?.category_name}
                </Text>
              </View>
              <View
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  width: 50,
                  flexDirection: 'row',
                }}>
                <View style={{ display: 'flex', alignItems: 'center' }}>
                  <TouchableOpacity onPress={toggleFontSize}>
                    <Image
                      style={{ width: 20, height: 20, marginRight: 10 }}
                      source={require('../Assets/Images/font.png')}
                    />
                  </TouchableOpacity>
                </View>
                <View style={{ display: 'flex', alignItems: 'center' }}>
                  <TouchableOpacity onPress={sharecall}>
                    <Image
                      style={commonstyles.DetailsShareImage}
                      source={require('../Assets/Images/new_share.png')}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            {/* Tittle */}
            <View style={{ paddingLeft: 10, paddingTop: 5, paddingRight: 5 }}>
              <Text style={commonstyles.Detailstittle}>
                {decode(route?.params?.item?.title?.rendered)}
              </Text>
            </View>
            {/* Date */}
            <View style={{ paddingLeft: 10 }}>
              <Text style={commonstyles.detailTime}>{formattedDate}</Text>
            </View>
            {/* Author */}
            <View style={{ paddingTop: 5, paddingLeft: 10 }}>
              <Text style={commonstyles.detailauthor}>
                {decode(route?.params?.item?.author)?.toUpperCase()}
              </Text>
            </View>
            {/* Content */}
            <View
              style={{
                width: screenWidth - 10,
                justifyContent: 'center',
                paddingLeft: 5,
                paddingBottom: 5,
              }}>
              {/* <Text>{source1}</Text> */}
              {/* {
                console.log(source1)

              } */}
              <View
                style={{
                  justifyContent: 'center',
                }}>
                {renderWebView &&
                  // <TouchableWithoutFeedback onPress={handlePressIn}>
                    <AutoHeightWebView
                      style={{
                        width: Dimensions.get('window').width - 15,
                        marginTop: 10,
                        pointerEvents: 'auto',
                      }}
                      customStyle={`
                  * { font-family: 'Faustina'; line-height: 20px; -webkit-user-select: none; -webkit-touch-callout: none; }
                  p { font-size: ${fontSize}px; text-align: left; font-family: 'Faustina'; line-height: 20px; font-weight: none; }
                  p img { width: 100%; height: inherit; }
                  p iframe { width: 100%; height: 200px; }
                  img { width: 100%; height: inherit; }
                  div[id*=attachment] { max-width: 100%!important; height: inherit; }
                

                  .wp-video video {
                  width: 100%; height: 200!important;
                  }
                  .wp-video{ width:100% !important;}
                `}
                    source={{
                      html: `
                    ${source1}
                    <style>
                      @import url('https://fonts.googleapis.com/css2?family=Faustina&display=swap');
                      p strong, span, p span { font-family: 'Faustina', sans-serif; }
                      p, li { font-family: 'Faustina', sans-serif; line-height: 1.2; padding: 0px 8px; color: #000; font-weight: 500; font-size: ${fontSize}px; }
                    </style>
                  `,
                        baseUrl: Platform.OS === 'android' ? 'https://twitter.com' : '',
                      }}
                      onShouldStartLoadWithRequest={request => {
                        // Check if the URL should be opened in an external browser
                        if (
                          request.url !== 'about:blank' &&
                          request.url.startsWith('http')
                        ) {
                          Linking.openURL(request.url); // Open the URL in the browser
                          return false; // Prevent WebView from loading the URL
                        }
                        return true; // Allow WebView to load other content
                      }}
                      javaScriptEnabled={true}
                      scalesPageToFit={false}
                      allowsFullscreenVideo={true}
                      scrollEnabled={false}
                      viewportContent={'width=device-width, user-scalable=no'}
                    />
                    // </TouchableWithoutFeedback>
                    }
              </View>
            </View>
          </View>
          {/* LatestNews */}
          <View style={commonstyles.homecategoryView}>
            <View>
              <Text style={commonstyles.Category}>Latest News</Text>
            </View>
          </View>
          {latestNews?.data && latestNews.data.length > 0 && !latestLoading ? (
            <View style={{ paddingHorizontal: 10 }}>
              {/* <FlatList
                  showsHorizontalScrollIndicator={false}
                  persistentScrollbar={false}
                  data={latestNews.data.slice(0, 1)}
                  renderItem={renderItemOne}
                /> */}
              <View
                style={{
                  borderBottomColor: light_gray,
                  borderBottomWidth: 0.5,
                  width: screenWidth,
                  alignSelf: 'center',
                }}
              />
              <FlatList
                data={latestNews?.data?.slice(0, 6)}
                renderItem={renderItemTwo}
              />
            </View>
          ) : (
            <View style={{ paddingHorizontal: 10 }}>
              <FlatList
                data={latestNews?.data?.slice(0, 6)}
                renderItem={renderItemTwo}
                keyExtractor={(item, index) => index.toString()}
              />
            </View>
          )}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  swipeLabelContainer: {
    position: 'absolute',
    bottom: 10,
    width: '100%',
    alignItems: 'center',
  },
  swipeLabel: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    color: 'white',
    padding: 10,
    borderRadius: 5,
  },
});

const mapStateToProps = state => ({
  relatedData: state.relatedReducer?.relatedData,
  relatedLoading: state.relatedReducer?.relatedLoading,
  sliderData: state.sliderReducer?.sliderData,
  loading: state.sliderReducer?.loading,
  latestNews: state.latestNewsReducer?.latestNews,
  latestLoading: state.latestNewsReducer?.latestLoading,
  articleDetailData: state.articleDetailReducer?.articleDetailData,
  articleDetailLoading: state.articleDetailReducer?.articleDetailLoading,
});

const mapDispatchToProps = {
  getRelatedAction,
  getArticleDetailAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(Details);
