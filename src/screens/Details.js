/* eslint-disable prettier/prettier */
import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList,
  Share,
  Dimensions,
  ImageBackground,
  Platform,
} from 'react-native';
import {commonstyles, light_gray} from '../styles/commonstyles';
import AutoHeightWebView from 'react-native-autoheight-webview';
import moment from 'moment';
import {connect} from 'react-redux';
import getRelatedAction from '../redux/actions/getRelatedAction';
import DetailsComponentTwo from '../components/DetailsComponentTwo';
import DetailsComponentOne from '../components/DetailsComponentOne';
import {decode} from 'html-entities';
import {BaseUrl, ArticleDataByIdUrl} from '../utilities/urls';

const screenWidth = Dimensions.get('window').width;

const Details = ({navigation, latestNews, latestLoading, route}) => {
  const Scrollref = useRef(null);
  const [fontSize, setFontSize] = useState(18);
  const [renderWebView, setRenderWebView] = useState(false);
  const [firstArticle, setFirstArticle] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setRenderWebView(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    goToTop();
  }, [route]);

  useEffect(() => {
    if (route.params?.item?.isNotification) {
      renderArticleDetailData(route.params?.item?.id);
    } else {
      fetchSingleArticleObj();
    }
  }, [route]);

  async function renderArticleDetailData(id) {
    try {
      const result = await fetch(BaseUrl + ArticleDataByIdUrl + '?id=' + id, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const json = await result.json();
      setFirstArticle(json.data);
    } catch (e) {
      console.log(e, 'article-details-error');
    }
  }

  function fetchSingleArticleObj() {
    const articleObj = route.params?.detailsData?.filter(
      item => item.id === route.params?.item?.id,
    )[0];
    setFirstArticle(articleObj);
  }

  const goToTop = () => {
    Scrollref.current?.scrollTo({x: 0, y: 0, animated: true});
  };

  const sharecall = () => {
    const Link_Url = route?.params?.item?.link;
    Share.share({
      message: Link_Url,
    })
      .then(result => console.log(result))
      .catch(error => console.log(error));
  };

  const source = firstArticle?.content?.rendered || '';
  let source1 =
    typeof source === 'string'
      ? source.replace('lazyload', 'text/javascript')
      : '';

  const fontSizes = [18, 20, 23, 25];
  const toggleFontSize = () => {
    const nextSizeIndex = (fontSizes.indexOf(fontSize) + 1) % fontSizes.length;
    setFontSize(fontSizes[nextSizeIndex]);
  };

  const renderItemOne = ({item}) => (
    <DetailsComponentOne
      item={item}
      propsdata={latestNews?.data}
      navigation={navigation}
    />
  );

  const renderItemTwo = ({item}) => (
    <DetailsComponentTwo
      item={item}
      propsdata={latestNews?.data}
      navigation={navigation}
    />
  );

  const defaultImage = require('../Assets/Images/no_image.png');
  const imageUrl = firstArticle?.web_featured_image
    ? {uri: firstArticle?.web_featured_image}
    : defaultImage;

  const now = moment.utc();
  const date = moment.utc(firstArticle?.date_gmt || now);
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

  const handleWebViewRequest = request => {
    const url = request?.url;
    if (url.includes('telanganatoday.com/tag/')) {
      const splitURL = url.split('/');
      let category = splitURL.filter(Boolean).pop();
      category = decodeURIComponent(category);
      console.log(category, 'Extracted Tag');
      navigation.navigate('TagScreen', {
        url: category,
      });
      return false;
    }
    return true;
  };
  return (
    <View style={commonstyles.container}>
      <ScrollView ref={Scrollref}>
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
                  style={{width: 30, height: 30, right: 5}}
                  source={require('../Assets/Images/previous.png')}
                />
              </TouchableOpacity>
            </ImageBackground>
          </View>
          <View style={commonstyles.DetailsMainView}>
            <View style={commonstyles.DetailsSubView}>
              <View style={commonstyles.DetailsCategoryTextView}>
                <Text style={commonstyles.DetailsCategoryText}>
                  {firstArticle?.category_name}
                </Text>
              </View>
              <View
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  width: 50,
                  flexDirection: 'row',
                }}>
                <View style={{display: 'flex', alignItems: 'center'}}>
                  <TouchableOpacity onPress={toggleFontSize}>
                    <Image
                      style={{width: 20, height: 20, marginRight: 10}}
                      source={require('../Assets/Images/font.png')}
                    />
                  </TouchableOpacity>
                </View>
                <View style={{display: 'flex', alignItems: 'center'}}>
                  <TouchableOpacity onPress={sharecall}>
                    <Image
                      style={commonstyles.DetailsShareImage}
                      source={require('../Assets/Images/new_share.png')}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View style={{paddingLeft: 10, paddingTop: 5, paddingRight: 5}}>
              <Text style={commonstyles.Detailstittle}>
                {decode(firstArticle?.title?.rendered)}
              </Text>
            </View>
            <View style={{paddingLeft: 10}}>
              <Text style={commonstyles.detailTime}>{formattedDate}</Text>
            </View>
            <View style={{paddingTop: 5, paddingLeft: 10}}>
              <Text style={commonstyles.detailauthor}>
                {decode(firstArticle?.author)}
              </Text>
            </View>
            <View
              style={{
                width: screenWidth - 10,
                justifyContent: 'center',
                paddingLeft: 5,
                paddingBottom: 5,
              }}>
              <View
                style={{
                  justifyContent: 'center',
                }}>
                {renderWebView && (
                  <AutoHeightWebView
                    style={{
                      width: Dimensions.get('window').width - 15,
                      marginTop: 10,
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
                      baseUrl:
                        Platform.OS === 'android' ? 'https://twitter.com' : '',
                    }}
                    onShouldStartLoadWithRequest={handleWebViewRequest}
                    javaScriptEnabled={true}
                    scalesPageToFit={false}
                    allowsFullscreenVideo={true}
                    scrollEnabled={false}
                    viewportContent={'width=device-width, user-scalable=no'}
                  />
                )}
              </View>
            </View>
          </View>
          <View style={commonstyles.homecategoryView}>
            <View>
              <Text style={commonstyles.Category}>Latest News</Text>
            </View>
          </View>
          {latestNews?.data && latestNews.data.length > 0 && !latestLoading ? (
            <View style={{paddingHorizontal: 10}}>
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
            <View style={{paddingHorizontal: 10}}>
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

const mapStateToProps = state => ({
  latestNews: state.latestNewsReducer?.latestNews,
  latestLoading: state.latestNewsReducer?.latestLoading,
});

const mapDispatchToProps = {
  getRelatedAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(Details);
