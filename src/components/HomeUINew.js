/* eslint-disable prettier/prettier */
import React, {useEffect} from 'react';
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from 'react-native';
import {appThemeColor, blackcolor, commonstyles} from '../styles/commonstyles';
import HomeComponentFour from './HomeComponentFour';
import HomeComponentThree from './HomeComponentThree';

function HomeUINew(props) {
  const renderItemOne = ({item}) => (
    <HomeComponentThree
      item={item}
      propsdata={props?.data}
      navigation={props?.navigation}
    />
  );

  const renderItemTwo = ({item}) => (
    <HomeComponentFour
      item={item}
      propsdata={props?.data}
      navigation={props?.navigation}
    />
  );

  // Check if data is available and is an array
  const newdata = Array.isArray(props?.data) ? props.data : [];

  return (
    <SafeAreaView styles={commonstyles.container}>
      <View style={{paddingLeft: 10, paddingRight: 10,paddingTop:5}}>
        {/* Ctegory  text*/}
        <View style={commonstyles.homecategoryView}>
          <View>
            <Text style={commonstyles.Category}>{props?.categoryName}</Text>
          </View>
          <View>
            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate(props.navigationScreen);
              }}>
              <Image style={{top:3, width:20,height:20}} source={require('../Assets/Images/next1.jpeg')} />
            </TouchableOpacity>
          </View>
        </View>

        {/* flatlist for Latest News */}
        <View>
          <View style={commonstyles.homeCategoryflatView}>
            <FlatList
              data={newdata.slice(0, 1)}
              showsHorizontalScrollIndicator={false}
              persistentScrollbar={false}
              numColumns={2}
              onEndReachedThreshold={50}
              getItemLayout={(data, index) => ({
                length: 40,
                offset: 40 * index,
                index,
              })}
              renderItem={renderItemOne}
            />
            <View>
              <FlatList
                showsHorizontalScrollIndicator={true}
                persistentScrollbar={false}
                horizontal={true}
                data={newdata.slice(1, 10)}
                getItemLayout={(data, index) => ({
                  length: 40,
                  offset: 40 * index,
                  index,
                })}
                renderItem={renderItemTwo}
              />
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default HomeUINew;
