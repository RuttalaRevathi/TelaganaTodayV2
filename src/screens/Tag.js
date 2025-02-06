/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import { useRoute, useNavigation } from '@react-navigation/native';
import {
  Image,
  View,
  TouchableOpacity,
  FlatList
} from 'react-native'; import TagComponent from '../components/TagComponent';

const TagScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const [parentData, setParentData] = useState([]);

  useEffect(() => {
    fetchParentData();
  }, [route]);

  const fetchParentData = async () => {
    try {
      const tag = route.params?.url;
      console.log(tag, "tag");

      const response = await fetch(
        `https://telanganatoday.com/wp-json/ttnews/v1/tag-api?tag_name=${tag}`
      );
      const jsonData = await response.json();
      setParentData(jsonData);
    } catch (error) {
      console.error('Error fetching parent data:', error);
      return null; // Return null in case of an error
    }
  };
  // console.log(parentData, "parentData");
  const renderItem = ({ item }) => (
    <TagComponent
      tag={item}
      navigation={props.navigation}
    />
  );

  return (
    <>
      <View>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
        >
          <Image
            source={require('../Assets/Images/arrow.png')}
            style={{ width: 22, height: 22 }}
          />
        </TouchableOpacity>
      </View>
      <View>
        {/* FlatList to display posts */}
        <FlatList
          data={parentData}
          contentContainerStyle={{ padding: 20 }}
          // keyExtractor={(item) => item.toString()}
          renderItem={({item}) => (
            <View>
              <Text>
                Tag
              </Text>
            </View>
          )}

        />
      </View>
    </>
  );
};

export default TagScreen;
