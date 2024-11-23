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
  ActivityIndicator,
} from 'react-native';
import { appThemeColor, commonstyles } from '../styles/commonstyles';
import SubHeader from '../components/SubHeader';
import LinearGradient from 'react-native-linear-gradient';
import moment from 'moment';
import { ShareUrl } from '../utilities/urls';
import CategoryComponentOne from './CategoryComponentOne';
import CategoryComponentTwo from './CategoryComponentTwo';

const sharecall = (name) => {
  const Link_Url = ShareUrl + name;
  Share.share({
    message: Link_Url,
  })
    .then((result) => console.log(result))
    .then((error) => console.log(error));
};
function CategoryUI(props, { navigation }) {
  useEffect(() => {
    // console.log(props.data,"categorydata");            
  })
  const renderItemOne = ({ item }) => (
    <CategoryComponentOne
      item={item}
      propsdata={props?.data}
      navigation={props?.navigation}

    />
  );
  const renderItemTwo = ({ item}) => (
    <CategoryComponentTwo
      item={item}
      propsdata={props?.data}
      navigation={props?.navigation}

    />
  );

  return (
    <SafeAreaView styles={commonstyles.container}>

      <ScrollView style={commonstyles.scroll}>
        <View>
          {props?.data?.length !== 0 ?
            <View style={{ position: 'relative' }}>
              <FlatList
                style={commonstyles.cateflist}
                data={props?.data}
                renderItem={renderItemTwo}
              />
            </View>
            :
            <View style={commonstyles.spinnerView}>
              <ActivityIndicator color={appThemeColor} size='large' />
              <Text style={commonstyles.spinnerText}>. . . Loading . . .</Text>
            </View>
          }
        </View>
      </ScrollView>


    </SafeAreaView>
  );
};
export default CategoryUI;