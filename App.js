/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import { StyleSheet, StatusBar, Alert } from 'react-native';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { store } from './src/redux/store';
import DrawerNavigator from './src/navigation/DrawerNavigator';
import getSliderAction from './src/redux/actions/getSliderAction';
import getLatestNewsAction from './src/redux/actions/getLatestNewsAction';
import getCartoonAction from './src/redux/actions/getCartoonAction';
import getHyderabadAction from './src/redux/actions/getHyderabadAction';
import getTelanganaAction from './src/redux/actions/getTelanganaAction';
import getApAction from './src/redux/actions/getApAction';
import getSportsAction from './src/redux/actions/getSportsAction';
import getBusinessAction from './src/redux/actions/getBusinessAction';
import getNriAction from './src/redux/actions/getNriAction';
import getVideoAction from './src/redux/actions/getVideoAction';
import getIndiaAction from './src/redux/actions/getIndiaAction';
import getWorldAction from './src/redux/actions/getWorldAction';
import getEntertainmentAction from './src/redux/actions/getEntertainmentAction';
import getScienceAction from './src/redux/actions/getScienceAction';
import getRewindAction from './src/redux/actions/getRewindAction';
import getViewpointAction from './src/redux/actions/getViewpointAction';
import getColumunsAction from './src/redux/actions/getColumunsAction';
import getEducationAction from './src/redux/actions/getEducationAction';
import getReviewsAction from './src/redux/actions/getReviewsAction';
import getPropertyAction from './src/redux/actions/getPropertyAction';
import getLifestyleAction from './src/redux/actions/getLifestyleAction';
import { off_white } from './src/styles/commonstyles';
import getWebstoriesAction from './src/redux/actions/getWebstoriesAction';
import { navigationRef } from './src/navigation/NavigationService';
import NetInfo from '@react-native-community/netinfo';
import { useState } from 'react';
import getRelatedAction from './src/redux/actions/getRelatedAction';
import Toast from 'react-native-toast-message';
import SplashScreen from 'react-native-splash-screen';

const App = () => {
  const [isConnected, setIsConnected] = useState(null);
  const [connectionType, setConnectionType] = useState(null);

  useEffect(()=> {
    setTimeout(()=>{
      SplashScreen.hide();
    }, 2000)
  }, [])

  useEffect(() => {
    store.dispatch(getSliderAction());
    store.dispatch(getLatestNewsAction());
    store.dispatch(getHyderabadAction());
    store.dispatch(getTelanganaAction());
    store.dispatch(getApAction());
    store.dispatch(getIndiaAction());
    store.dispatch(getWorldAction());
    store.dispatch(getEntertainmentAction());
    store.dispatch(getScienceAction());
    store.dispatch(getSportsAction());
    store.dispatch(getBusinessAction());
    store.dispatch(getRewindAction());
    store.dispatch(getNriAction());
    store.dispatch(getViewpointAction());
    store.dispatch(getCartoonAction());
    store.dispatch(getColumunsAction());
    store.dispatch(getEducationAction());
    store.dispatch(getReviewsAction());
    store.dispatch(getPropertyAction());
    store.dispatch(getVideoAction());
    store.dispatch(getLifestyleAction());
    store.dispatch(getWebstoriesAction());
    store.dispatch(getRelatedAction());

    // Subscribe to network state changes
    const unsubscribe = NetInfo.addEventListener(state => {
      const newConnectionType = state.type;
      const newIsConnected = state.isConnected;

      if (!newIsConnected) {
        Toast.show({
          type: 'error',
          text1: 'There seems to be internet issues,',
          text2: 'Please check your network connection',
          position: 'bottom',
          bottomOffset: 40,
          autoHide: false,
        });
      } else {
        Toast.hide();
      }
      

      // Update state to keep track of the connection status
      setConnectionType(newConnectionType);
      setIsConnected(newIsConnected);
    });

    return () => {
      unsubscribe();
    };
  }, []);


  return (
    <Provider store={store}>
      <StatusBar barStyle="dark-content" backgroundColor={off_white} />
      <NavigationContainer ref={navigationRef}>
        <DrawerNavigator />
      </NavigationContainer>
      <Toast />
    </Provider>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
