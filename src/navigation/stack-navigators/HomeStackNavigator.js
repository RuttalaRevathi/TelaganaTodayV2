/* eslint-disable prettier/prettier */
import React from 'react';
import { Button } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../../screens/Home';
import Details from '../../screens/Details';
import TopTabNavigator from '../TopTabNavigator';
import VideoArticle from '../../screens/VideoArticle';
import CartoonArticle from '../../screens/CartoonArticle';
import ContactUs from '../../screens/contactScreens/ContactUs';
import AboutUs from '../../screens/contactScreens/AboutUs';
import TagScreen from '../../screens/Tag';


const Stack = createStackNavigator();

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}
      initialRouteName="Home"
    >
      <Stack.Screen name="Home" component={TopTabNavigator} />
      <Stack.Screen name="Details" component={Details} options={{ headerShown: false }}/>
      <Stack.Screen name="VideoArticle" component={VideoArticle} />
      <Stack.Screen name="CartoonArticle" component={CartoonArticle} />
      <Stack.Screen name="Contact" component={ContactUs} />
      <Stack.Screen name="TagScreen" component={TagScreen} />
      <Stack.Screen name="About" component={AboutUs} options={{ headerShown: false }} 
 />
    </Stack.Navigator>
  )
};

export default HomeStackNavigator;
