/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import CategoryUI from '../components/CategoryUI';
import { useState } from 'react';
import { useRoute, useNavigation } from '@react-navigation/native';


const CategoryScreen = ({item}) => {

  const navigation = useNavigation();
  const route = useRoute();
 
  // console.log("item123---->",route.key);

const [parentData, setParentData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchParentData();
      // console.log("data---->",data);
      setParentData(data?.data);
    };
    fetchData();
  }, []);

  const fetchParentData = async () => {
    try {
      const response = await fetch('https://telanganatoday.com/wp-json/ttnews/v1/' + item?.url);
      const jsonData = await response.json();
      // console.log("jsonData---->",jsonData);
     // setParentData(jsonData);
     return jsonData;
    } catch (error) {
      console.error('Error fetching parent data: ', error);
    }
    //return jsonData;
  };

    return (
        <CategoryUI
        data = {parentData}
        navigation = {navigation}
        title = {item?.title}
        categoryName ={item?.title}
        />
       
    );
};



export default CategoryScreen;
