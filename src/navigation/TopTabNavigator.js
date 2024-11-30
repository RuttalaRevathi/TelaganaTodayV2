/* eslint-disable prettier/prettier */
import React, { useEffect, useRef, useState } from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { SelectList } from 'react-native-dropdown-select-list';
import Home from '../screens/Home';
import { blackcolor,  bold_gray,  dark_graycolor,  graycolor,  light_gray,  marooncolor,  redcolor,  whitecolor } from '../styles/commonstyles';
import HyderabadScreen from '../screens/TopTabScreens/Hyderabad';
import CartoonScreen from '../screens/TopTabScreens/Cartoon';
import TelanganaScreen from '../screens/TopTabScreens/Telangana';
import ApScreen from '../screens/TopTabScreens/Ap';
import SportsScreen from '../screens/TopTabScreens/Sports';
import BusinessScreen from '../screens/TopTabScreens/Business';
import Videos from '../screens/TopTabScreens/Videos';
import India from '../screens/TopTabScreens/India';
import World from '../screens/TopTabScreens/World';
import Entertainment from '../screens/TopTabScreens/Entertainment';
import Science from '../screens/TopTabScreens/Science';
import Rewind from '../screens/TopTabScreens/Rewind';
import Nri from '../screens/TopTabScreens/Nri';
import Viewpoint from '../screens/TopTabScreens/Viewpoint';
import Columuns from '../screens/TopTabScreens/Columuns';
import Education from '../screens/TopTabScreens/Education';
import Reviews from '../screens/TopTabScreens/Reviews';
import Property from '../screens/TopTabScreens/Property';
import Lifestyle from '../screens/TopTabScreens/Lifestyle';
import BottomTabNavigator from './BottomTabNavigator';


const TopTab = createMaterialTopTabNavigator();
const data = [
  { label: 'Item 1', value: '1' },
  { label: 'Item 2', value: '2' },

];
const renderLabel = () => {
  return (
    <SelectList
      setSelected={(val) => setSelected(val)}
      data={data}
      save="value"
    />
  );
};

const TopTabNavigator = () => {
  const [selected, setSelected] = React.useState('');

  return (
    <TopTab.Navigator
      screenOptions={{
        swipeEnabled: false,
        tabBarScrollEnabled: true,
        tabBarIndicatorStyle: { backgroundColor: redcolor,borderBottomWidth:2},

        tabBarActiveTintColor: marooncolor,
        tabBarInactiveTintColor: bold_gray,
        tabBarLabelStyle: { fontSize: 17, fontFamily: 'Lora-Medium', fontWeight:'500',
          textTransform: 'none'},
        tabBarStyle: {
          backgroundColor: whitecolor,
          height: 40,
          borderBottomWidth:1.3,borderBottomColor:dark_graycolor ,
         borderTopColor:dark_graycolor,borderTopWidth:1.2,

        },
        tabBarItemStyle: {
          width: 'auto',
          alignItems: 'flex-start',
          marginHorizontal: -5,
          marginVertical:-8
          
        },
        tabBarOptions: {
          showLabel: true,
        },
      }}>
      <TopTab.Screen  name="Home"  component={Home} options={{ headerShown: false, tabBarLabel: 'Home'}}/>
      <TopTab.Screen name="Hyderabad" component={HyderabadScreen} options={{ tabBarLabel: 'Hyderabad' }} />
      <TopTab.Screen name="Telangana" component={TelanganaScreen} options={{ tabBarLabel: 'Telangana' }} />
      <TopTab.Screen name="AP News" component={ApScreen} options={{ tabBarLabel: 'AP News' }} />
       <TopTab.Screen name="India" component={India} options={{ tabBarLabel: 'India' }} />
      <TopTab.Screen name="World" component={World} options={{ tabBarLabel: 'World' }} />
      <TopTab.Screen name="Entertainment" component={Entertainment} options={{ tabBarLabel: 'Entertainment' }} />
      <TopTab.Screen name="Science" component={Science} options={{ tabBarLabel: 'Science & Tech' }} />
      <TopTab.Screen name="Sports" component={SportsScreen} options={{ tabBarLabel: 'Sports' }} />
      <TopTab.Screen name="Business" component={BusinessScreen} options={{ tabBarLabel: 'Business' }} />
      <TopTab.Screen name="Rewind" component={Rewind} options={{ tabBarLabel: 'Rewind' }} />
      <TopTab.Screen name="NRI" component={Nri} options={{ tabBarLabel: 'NRI' }} />
      <TopTab.Screen name="Viewpoint" component={Viewpoint} options={{ tabBarLabel: 'Viewpoint' }} />
      <TopTab.Screen name="Cartoon" component={CartoonScreen} options={{ tabBarLabel: 'Cartoon' }} />
      <TopTab.Screen name="Columns" component={Columuns} options={{ tabBarLabel: 'Columns' }} />
      <TopTab.Screen name="Education" component={Education} options={{ tabBarLabel: 'Education Today' }} />
      <TopTab.Screen name="Reviews" component={Reviews} options={{ tabBarLabel: 'Reviews' }} />
      <TopTab.Screen name="Property" component={Property} options={{ tabBarLabel: 'Property' }} />
      {/* <TopTab.Screen name="Videos" component={Videos} options={{ tabBarLabel: 'Videos' }} /> */}
      <TopTab.Screen name="Lifestyle" component={Lifestyle} options={{ tabBarLabel: 'Lifestyle' }} />
    </TopTab.Navigator>
  );
};

export default TopTabNavigator;
