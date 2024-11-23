/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, { useEffect } from 'react';
import { useDispatch, connect, useSelector } from 'react-redux';
import {
  ActivityIndicator,
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { commonstyles } from '../styles/commonstyles';
import FastImage from 'react-native-fast-image';
import moment from 'moment';
import LinearGradient from 'react-native-linear-gradient';
import CategoryComponentTwo from '../components/CategoryComponentTwo';
import CategoryComponentOne from '../components/CategoryComponentOne';


const LatestNews = ({
  navigation,
  route,
}: Props) => {
  const latestNews = useSelector(state => state.latestNewsReducer.latestNews);
  const latestLoading = useSelector(state => state.latestNewsReducer.latestLoading);

  const renderItemTwo = ({item}) => (
    <CategoryComponentTwo
         item={item}
         propsdata={latestNews?.data}
         navigation={ navigation}

    />
  );
  const renderItemOne = ({item}) => (
    <CategoryComponentOne
         item={item}
         propsdata={latestNews?.data}
         navigation={navigation}

    />
  );
 
  return (
    <SafeAreaView styles={commonstyles.container}>
    
      <ScrollView style={commonstyles.scroll}>
        <View>
          <View style={{ position: 'relative' }}>
            {/* <FlatList
              showsHorizontalScrollIndicator={false}
              data={latestNews.data?.slice(0, 1).filter(obj => {
                return obj.format === 'standard';
              })}
              renderItem={renderItemOne}
            /> */}
            <FlatList
              style={commonstyles.cateflist}
              data={latestNews?.data?.slice(0, -1).filter(obj => {
                return obj.format === 'standard';
              })}
              renderItem={renderItemTwo}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LatestNews;
