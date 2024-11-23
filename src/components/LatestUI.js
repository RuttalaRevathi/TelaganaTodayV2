/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from 'react-native';
import { blackcolor, commonstyles } from '../styles/commonstyles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import HomeLatestComponent from './HomeLatestComponent';

function LatestUI(props) {
  const renderItemOne = ({ item }) => (
    <HomeLatestComponent
      item={item}
      propsdata={props?.data}
      navigation={props?.navigation}
    />
  );

  // Check if data is available and is an array
  const newdata = Array.isArray(props?.data) ? props.data : [];

  return (
    <SafeAreaView styles={commonstyles.container}>
      <View style={{paddingLeft:10}}>
        {/* LatestNews  text*/}
        <View style={commonstyles.latestcategoryView}>
          <View>
            <Text style={commonstyles.Category}>Latest News</Text>
          </View>
          <View>
            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate('LatestStack', { screen: 'LatestNews' });
              }}>
              <Image style={{marginRight:10,width:20,height:20}} source={require('../Assets/Images/next1.jpeg')} />
            </TouchableOpacity>
          </View>
        </View>

        {/* flatlist for Latest News */}
        <View>
          <View style={commonstyles.LatestflatView}>
            <FlatList
              data={newdata}
              horizontal={true}
              showsHorizontalScrollIndicator={true}
              renderItem={renderItemOne}
            />

          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default LatestUI;
