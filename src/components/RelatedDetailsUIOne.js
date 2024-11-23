/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import {
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Share,
} from 'react-native';
import { appThemeColor, commonstyles } from '../styles/commonstyles';

import HomeComponentTwo from './HomeComponentTwo';



function RelatedDetailsUIOne(props) {
  useEffect(() => {
  });
  const renderItemOne = ({item}) => (
    <HomeComponentTwo
         item={item}
         propsdata={props?.data}
         navigation={ props?.navigation}

    />
  );
  return (
    <View>
            <View style={{ marginLeft: 10, marginTop: 10 }}>
              <Text style={commonstyles.relatedText}>Related News</Text>
            </View>
            {/* Related news FlatList */}

              <View >

                <FlatList
                  showsHorizontalScrollIndicator={false}
                  persistentScrollbar={false}
                  data={props?.data}   
                  renderItem={renderItemOne}
                />

              </View>

          </View>
  );
}
export default RelatedDetailsUIOne;
