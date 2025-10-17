/* eslint-disable prettier/prettier */
import React, {useEffect} from 'react';
import {
  StyleSheet,
  StatusBar,
  Alert,
  PermissionsAndroid,
  Linking,
  Platform,
  SafeAreaView,
} from 'react-native';
import {Provider} from 'react-redux';
import {Link, NavigationContainer} from '@react-navigation/native';
import {store} from './src/redux/store';
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
import {off_white} from './src/styles/commonstyles';
import getWebstoriesAction from './src/redux/actions/getWebstoriesAction';
import NetInfo from '@react-native-community/netinfo';
import {useState} from 'react';
import getRelatedAction from './src/redux/actions/getRelatedAction';
import Toast from 'react-native-toast-message';
import SplashScreen from 'react-native-splash-screen';
import iZooto from 'react-native-izooto';
import {request, RESULTS} from 'react-native-permissions';
import {navigationRef} from './src/navigation/NavigationService';

const App = () => {
  const [isConnected, setIsConnected] = useState(null);
  const [connectionType, setConnectionType] = useState(null);

  const checkNotificationPermission = async () => {
    try {
      if (Platform.OS === 'android') {
        if (Platform.Version >= 33) {
          const permission = PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS;
          const status = await PermissionsAndroid.request(permission, {
            title: 'Notification Permission',
            message:
              'This app needs notification permission to send you updates.',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          });

          if (status === PermissionsAndroid.RESULTS.GRANTED) {
            console.log('Notifications permission granted');
          } else {
            console.log('Notifications permission denied');
            Alert.alert(
              'Permission Required',
              'Please enable notifications from settings.',
            );
          }
        }
      } else {
        // iOS permission handling
        const status = await request('ios.permission.NOTIFICATION');
        if (status === RESULTS.GRANTED) {
          console.log('Notifications enabled for iOS');
        } else {
          Alert.alert(
            'Notifications Disabled',
            'You have disabled notifications. Please enable them in settings.',
            [
              {text: 'Cancel', style: 'cancel'},
              {
                text: 'Go to Settings',
                onPress: () => Linking.openSettings(),
              },
            ],
          );
        }
      }
    } catch (error) {
      console.error('Error checking notification permission:', error);
    }
  };
  const linking = {
    prefixes: ['https://app'],
    config: {
      screens: {
        Details: 'Details',
      },
    },
  };
  // const linking = {
  //   prefixes: ['https://app'],
  //   config: {
  //     screens: {
  //       TopTab: {
  //         screens: {
  //           HomeStack: {
  //             screens: {
  //               Details: 'details',
  //             },
  //           },
  //         },
  //       },
  //     },
  //   },
  // };

  useEffect(() => {
    SplashScreen.hide();
    checkNotificationPermission();
    iZooto.initAndroid(false);
    iZooto.setSubscription(true);
    iZooto.onTokenReceivedListener(token => {
      console.log('Token Received', token); // THIS CAN BE CHANGED AS PER REQUIREMENT
    });
    iZooto.onNotificationReceivedListener(payload => {
      console.log('Notification Payload', payload); // THIS CAN BE CHANGED AS PER REQUIREMENT
    });
    iZooto.onNotificationOpenedListener(async data => {
      const jsonString = `${data}`;
      const outerObject = JSON.parse(jsonString);
      const additionalData = JSON.parse(outerObject.additionalData);
      console.log('Parsed additionalData:', additionalData);

      if (additionalData.id) {
        try {
          navigationRef.current?.navigate('Details', {
            item: {
              id: additionalData.id,
              isNotification: true,
            },
          });
        } catch (err) {
          console.error('❌ Failed to parse additionalData:', err);
        }
      } else {
        console.log('⚠️ No additionalData present in payload');
      }
    });
  }, []);

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
      <SafeAreaView style={styles.container} edges={['bottom']}>
        <StatusBar barStyle="dark-content" backgroundColor={off_white} />
        <NavigationContainer ref={navigationRef} linking={linking}>
          <DrawerNavigator />
        </NavigationContainer>
        <Toast />
      </SafeAreaView>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: off_white,
  },
});

export default App;
