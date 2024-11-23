/* eslint-disable prettier/prettier */
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, connect, useSelector } from 'react-redux';
import Spinner from 'react-native-loading-spinner-overlay';

import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ScrollView,
  SafeAreaView,
  RefreshControl,
  Image,
} from 'react-native';
import getSliderAction from '../redux/actions/getSliderAction';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import {
  ITEM_WIDTH,
  SLIDER_WIDTH,
  blackcolor,
  commonstyles,

} from '../styles/commonstyles';
import HomeUI from '../components/HomeUI';
import HomeVideosgalleryItemOne from '../components/HomeVideosgalleryItemOne';
import getLatestNewsAction from '../redux/actions/getLatestNewsAction';
import getCartoonAction from '../redux/actions/getCartoonAction';
import getHyderabadAction from '../redux/actions/getHyderabadAction';
import getTelanganaAction from '../redux/actions/getTelanganaAction';
import getApAction from '../redux/actions/getApAction';
import getSportsAction from '../redux/actions/getSportsAction';
import getBusinessAction from '../redux/actions/getBusinessAction';
import getNriAction from '../redux/actions/getNriAction';
import getVideoAction from '../redux/actions/getVideoAction';
import getIndiaAction from '../redux/actions/getIndiaAction';
import getWorldAction from '../redux/actions/getWorldAction';
import getEntertainmentAction from '../redux/actions/getEntertainmentAction';
import getScienceAction from '../redux/actions/getScienceAction';
import getRewindAction from '../redux/actions/getRewindAction';
import getViewpointAction from '../redux/actions/getViewpointAction';
import getColumunsAction from '../redux/actions/getColumunsAction';
import getEducationAction from '../redux/actions/getEducationAction';
import getReviewsAction from '../redux/actions/getReviewsAction';
import getPropertyAction from '../redux/actions/getPropertyAction';
import getLifestyleAction from '../redux/actions/getLifestyleAction';
import SliderUI from '../components/SliderUI';
import LatestUI from '../components/LatestUI';
import HomeVideosgalleryItemTwo from '../components/HomeVideosgalleryItemTwo';
import HomeUINew from '../components/HomeUINew';
import getWebstoriesAction from '../redux/actions/getWebstoriesAction';
import WebstoriesComponent from '../components/WebstoriesComponent';
import InstaStory from 'react-native-insta-story';
import getRelatedAction from '../redux/actions/getRelatedAction';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import HomeSliderComponent from '../components/HomeSliderComponent';

const Home = ({
  navigation,
  sliderData,
  loading,
  latestNews,
  latestLoading,
  hyderabadData,
  telanganaData,
  apData,
  indiaData,
  worldData,
  entertainmentData,
  scienceData,
  sportsData,
  businessData,
  rewindData,
  nriData,
  viewpointData,
  cartoonData,
  columunsData,
  educationData,
  reviewsData,
  propertyData,
  videosData,
  lifestyleData,
  webstoriesData,
  relatedData,
}: Props) => {
  // let decode = require('html-entities-decoder');
  const isCarousel = useRef(null);
  // const [index, setIndex] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoPlayState, setAutoPlayState] = useState(true);
  sliderData = useSelector(state => state.sliderReducer.sliderData);
  loading = useSelector(state => state.sliderReducer.loading);
  latestNews = useSelector(state => state.latestNewsReducer.latestNews);
  latestLoading = useSelector(state => state.latestNewsReducer.latestLoading);
  hyderabadData = useSelector(state => state.hyderabadReducer.hyderabadData);
  telanganaData = useSelector(state => state.telanganaReducer.telanganaData);
  apData = useSelector(state => state.apReducer.apData);
  indiaData = useSelector(state => state.indiaReducer.indiaData);
  worldData = useSelector(state => state.worldReducer.worldData);
  entertainmentData = useSelector(state => state.entertainmentReducer.entertainmentData);
  scienceData = useSelector(state => state.scienceReducer.scienceData);
  sportsData = useSelector(state => state.sportsReducer.sportsData);
  businessData = useSelector(state => state.businessReducer.businessData);
  rewindData = useSelector(state => state.rewindReducer.rewindData);
  nriData = useSelector(state => state.nriReducer.nriData);
  viewpointData = useSelector(state => state.viewpointReducer.viewpointData);
  cartoonData = useSelector(state => state.cartoonReducer.cartoonData);
  columunsData = useSelector(state => state.columunsReducer.columunsData);
  educationData = useSelector(state => state.educationReducer.educationData);
  reviewsData = useSelector(state => state.reviewsReducer.reviewsData);
  propertyData = useSelector(state => state.propertyReducer.propertyData);
  videosData = useSelector(state => state.videoReducer.videosData);
  lifestyleData = useSelector(state => state.lifestyleReducer.lifestyleData);
  webstoriesData = useSelector(state => state.webstoriesReducer.webstoriesData);
  relatedData = useSelector(state => state.relatedReducer.relatedData);

  const dispatch = useDispatch();

  const goToPrevious = () => {
    isCarousel.current.snapToPrev();
  };

  const goToNext = () => {
    isCarousel.current.snapToNext();
  };

  const carouselItem = ({ item, index }) => (
    <HomeSliderComponent
      item={item}
      propsdata={newsliderdata}
      navigation={navigation}
      index={activeIndex}
      goToPrevious={goToPrevious}
      goToNext={goToNext}
    />
  );


  const [refreshing, setRefreshing] = React.useState(false);
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    // setAutoPlayState(false);
    // setActiveIndex(0);

    setTimeout(() => {
      setRefreshing(false);
      dispatch(getSliderAction());
      dispatch(getLatestNewsAction());
      dispatch(getHyderabadAction());
      dispatch(getTelanganaAction());
      dispatch(getApAction());
      dispatch(getIndiaAction());
      dispatch(getWorldAction());
      dispatch(getEntertainmentAction());
      dispatch(getScienceAction());
      dispatch(getSportsAction());
      dispatch(getBusinessAction());
      dispatch(getRewindAction());
      dispatch(getNriAction());
      dispatch(getViewpointAction());
      dispatch(getCartoonAction());
      dispatch(getColumunsAction());
      dispatch(getEducationAction());
      dispatch(getReviewsAction());
      dispatch(getPropertyAction());
      dispatch(getVideoAction());
      dispatch(getLifestyleAction());
      dispatch(getWebstoriesAction());
      dispatch(getRelatedAction());


    }, 3000);
  }, []);
  const newlatestdata = Array.isArray(latestNews?.data) ? latestNews?.data : [];
  const newsliderdata = Array.isArray(sliderData?.data) ? sliderData?.data : [];

  return (
    <SafeAreaView style={{ flex: 1 }}>

      <ScrollView style={commonstyles.scroll} refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
        <View style={{}}>
          {/* Spinner */}
          {/* <Spinner
            //visibility of Overlay Loading Spinner
            visible={loading && latestLoading}
            //Text with the Spinner
            textContent={'Loading...'}
            //Text style of the Spinner Text
            textStyle={{ color: '#FFF' }}
          /> */}

          {/* Slider */}
          <View style={{ padding: 10 }}>
            <Carousel
              layout="default"
              ref={isCarousel}
              autoplay={true}
              autoplayDelay={500}
              autoplayInterval={5000}
              data={newsliderdata}
              renderItem={carouselItem}
              loop={true}
              sliderWidth={SLIDER_WIDTH}
              itemWidth={ITEM_WIDTH}
              onSnapToItem={index => setActiveIndex(index)}
              useScrollView={true}
            />
            {/* <Pagination
            dotsLength={newsliderdata.length}
            activeDotIndex={activeIndex}
            carouselRef={isCarousel}
            dotStyle={{
              width: 10,
              height: 10,
              borderRadius: 5,
              // marginHorizontal: 8,
              backgroundColor: 'rgba(0, 0, 0, 0.92)',
            }}
            // inactiveDotOpacity={0.4}
            // inactiveDotScale={0.6}
          /> */}
          </View>
          {/* LatestNews */}
          <LatestUI
            data={newlatestdata}
            navigationScreen="LatestNews"
            navigation={navigation}
          />
          {/* Hyderabad */}
          <HomeUI
            categoryName="Hyderabad"
            data={hyderabadData?.data}
            navigationScreen="Hyderabad"
            navigation={navigation}
          />
          {/* Telangana */}
          <HomeUINew
            categoryName="Telangana"
            data={telanganaData?.data}
            navigationScreen="Telangana"
            navigation={navigation}
          />
          {/* Ap */}
          <HomeUINew
            categoryName="Ap News"
            data={apData?.data}
            navigationScreen="AP News"
            navigation={navigation}
          />


          {/* India */}
          <HomeUI
            categoryName="India"
            data={indiaData?.data}
            navigationScreen="India"
            navigation={navigation}
          />

          {/* world */}
          <HomeUINew
            categoryName="World"
            data={worldData?.data}
            navigationScreen="World"
            navigation={navigation}
          />
          {/* Entertainment */}
          <HomeUINew
            categoryName="Entertainment"
            data={entertainmentData?.data}
            navigationScreen="Entertainment"
            navigation={navigation}
          />
          {/* Science */}
          <HomeUI
            categoryName="Science"
            data={scienceData?.data}
            navigationScreen="Science"
            navigation={navigation}
          />
          {/* Sports */}
          <HomeUINew
            categoryName="Sports"
            data={sportsData?.data}
            navigationScreen="Sports"
            navigation={navigation}
          />
          {/* Business */}
          <HomeUI
            categoryName="Business"
            data={businessData?.data}
            navigationScreen="Business"
            navigation={navigation}
          />
          {/* Rewind */}
          <HomeUINew
            categoryName="Rewind"
            data={rewindData?.data}
            navigationScreen="Rewind"
            navigation={navigation}
          />
          {/* nri */}
          <HomeUINew
            categoryName="Nri"
            data={nriData?.data}
            navigationScreen="NRI"
            navigation={navigation}
          />
          {/* Viewpoint */}
          <HomeUI
            categoryName="Viewpoint"
            data={viewpointData?.data}
            navigationScreen="Viewpoint"
            navigation={navigation}
          />
          {/* columns */}
          <HomeUINew
            categoryName="Columuns"
            data={columunsData?.data}
            navigationScreen="Columuns"
            navigation={navigation}
          />
          {/* education */}
          <HomeUINew
            categoryName="Education"
            data={educationData?.data}
            navigationScreen="Education"
            navigation={navigation}
          />
          {/* Reviews */}
          <HomeUI
            categoryName="Reviews"
            data={reviewsData?.data}
            navigationScreen="Reviews"
            navigation={navigation}
          />
          {/* Property */}
          <HomeUINew
            categoryName="Property"
            data={propertyData?.data}
            navigationScreen="Property"
            navigation={navigation}
          />

          {/* Lifestyle */}
          <HomeUINew
            categoryName="lifestyle"
            data={lifestyleData?.data}
            navigationScreen="Lifestyle"
            navigation={navigation}
          />


        </View>
      </ScrollView >
    </SafeAreaView >
  );
};

type Props = {
  sliderData: Function,
  loading: Boolean,
  latestNews: Function,
  latestLoading: Boolean,
  hyderabadData: Function,
  telanganaData: Function,
  apData: Function,
  indiaData: Function,
  worldData: Function,
  entertainmentData: Function,
  scienceData: Function,
  sportsData: Function,
  businessData: Function,
  rewindData: Function,
  nriData: Function,
  viewpointData: Function,
  cartoonData: Function,
  columunsData: Function,
  educationData: Function,
  reviewsData: Function,
  propertyData: Function,
  videosData: Function,
  lifestyleData: Function,

};

export default Home;
