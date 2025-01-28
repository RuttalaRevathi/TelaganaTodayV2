/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import { useRoute, useNavigation } from '@react-navigation/native';
import TagUI from '../components/TagUI';

const TagScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { tagName } = route.params; // Get the tag name from route params

  const [parentData, setParentData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchParentData(tagName); // Fetch data with the tag name
        setParentData(data?.data);
      } catch (error) {
        console.error('Error fetching parent data:', error);
      }
    };
    fetchData();
  }, [tagName]);

  const fetchParentData = async (tag) => {
    try {
      const response = await fetch(
        `https://telanganatoday.com/wp-json/ttnews/v1/tag-api?tag_name=${encodeURIComponent(tag)}`
      );
      const jsonData = await response.json();
      return jsonData;
    } catch (error) {
      console.error('Error fetching parent data:', error);
      return null; // Return null in case of an error
    }
  };

  return (
    <TagUI
      data={parentData}
      navigation={navigation}
      title={tagName}
      categoryName={tagName}
    />
  );
};

export default TagScreen;
