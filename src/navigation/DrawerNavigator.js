/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { View, Image, TouchableOpacity, Text, Linking } from 'react-native';
import HomeStackNavigator from '../navigation/stack-navigators/HomeStackNavigator';
import { HeaderStyle } from '../styles/Header.Styles';
import { whitecolor, dark_graycolor, blackcolor, off_white, marooncolor } from '../styles/commonstyles';
import SideMenu from '../components/SideMenu';
import BottomTabNavigator from './BottomTabNavigator';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: whitecolor,
          borderBottomWidth: 1.3,
          borderBottomColor: dark_graycolor,
        },
        headerStyle: {
          backgroundColor: off_white,
        },
        headerTitleAlign: 'center', // Ensure the title (logo) is aligned center
      }}
      drawerContent={props => <SideMenu {...props} />}
    >
      <Drawer.Screen
        name="TopTab"
        component={BottomTabNavigator}
        style={{flex:1 ,  justifyContent: 'center',}}
        options={({ navigation }) => ({
          headerLeft: () => (
            <View style={HeaderStyle.headerLeftView}>
              <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
                <Image
                  style={HeaderStyle.headerLeftImg}
                  source={require('../Assets/Images/menu_red.png')}
                />
              </TouchableOpacity>
            </View>
          ),
          headerTitle: () => (
            <View style={{}}>
              <Image
                style={HeaderStyle.HeadTitleImg}
                source={require('../Assets/Images/logo1.png')}
              />
            </View>
          ),
          headerRight: () => (
            <View style={{ paddingRight: 10 }}>
              <TouchableOpacity style={{
                flexDirection: 'row',
                width: 50,
                height: 27,
              }}
                onPress={() => {
                  Linking.openURL('https://epaper.telanganatoday.com');
                }}>
                <Text style={{
                  color: marooncolor, fontSize: 12, fontWeight: '700', top: 5,
                  textAlign: 'center',
                }}>EPaper</Text>
              </TouchableOpacity>
            </View>
          ),
          headerShown: true,
        })}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
