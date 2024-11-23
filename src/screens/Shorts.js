/* eslint-disable prettier/prettier */
import React, {useEffect, useState, useCallback} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  Image,
  Dimensions,
} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import {commonstyles} from '../styles/commonstyles';
import ShortsComponent from '../components/ShortsComponent';
import {useDispatch, useSelector} from 'react-redux';
import getLatestNewsAction from '../redux/actions/getLatestNewsAction';
import {interpolate} from 'react-native-reanimated';
const ShortsScreen = ({navigation}) => {
  const latestNews = useSelector(state => state.latestNewsReducer.latestNews);
  const dispatch = useDispatch();
  const windowHeight = Dimensions.get('window').height - 100;
  const windowWidth = Dimensions.get('window').width;
  const [isVertical, setIsVertical] = useState(true);

  useEffect(() => {
    // Fetch the latest news when the component mounts
    dispatch(getLatestNewsAction());

    // Set an interval to periodically fetch updates
    const intervalId = setInterval(() => {
      dispatch(getLatestNewsAction());
    }, 10000);

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, [dispatch]);
  const renderItemOne = ({item, index}) => (
    <ShortsComponent
      item={item}
      index={index}
      propsdata={latestNews?.data}
      navigation={navigation}
    />
  );

  const animationStyle = useCallback(
    value => {
      'worklet';
      const translateY = interpolate(value, [-1, 0, 1], [-windowHeight, 0, 0]);
      const translateX = interpolate(value, [-1, 0, 1], [-windowWidth, 0, 0]);
      const zIndex = interpolate(value, [-1, 0, 1], [300, 0, -300]);
      const scale = interpolate(value, [-1, 0, 1], [1, 1, 0.85]);
      return {
        transform: [isVertical ? {translateY} : {translateX}, {scale}],
        zIndex,
      };
    },
    [windowHeight, windowWidth, isVertical],
  );

  return (
    <SafeAreaView>
      <View style={commonstyles.shortsmainView}>
        <View>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}>
            <Image
              style={{width: 25, height: 25, top: 5}}
              source={require('../Assets/Images/close.png')}
            />
          </TouchableOpacity>
        </View>
        <View>
          <Text style={commonstyles.shortsheading}>Shorts</Text>
        </View>
        <View>
          {/* <Text style={{ top: 5, color: blackcolor }}>{`${currentIndex + 1}/${latestNews?.data.length}`}</Text> */}
        </View>
      </View>

      <View style={{flex: 1, borderRadius: 6, paddingTop: 16}}>
        <Carousel
          loop={true}
          autoPlay={false}
          width={windowWidth}
          height={windowHeight / 2}
          auto
          style={{
            width: windowWidth,
            height: windowHeight,
          }}
          vertical={isVertical}
          data={latestNews?.data}
          renderItem={renderItemOne}
          panGestureHandlerProps={{
            activeOffsetX: [-10, 10],
          }}
          customAnimation={animationStyle}
          mode={'StackCards'}
          customConfig={() => ({type: 'positive', viewCount: 5})}
          scrollAnimationDuration={1000}
          onSnapToItem={index => console.log('current index:', index)}
        />
      </View>
    </SafeAreaView>
  );
};

export default ShortsScreen;
