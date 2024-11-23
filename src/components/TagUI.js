/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import {
  Text,
  View,
  FlatList,
  ScrollView,
  SafeAreaView,
  Share,
  ActivityIndicator,
} from 'react-native';
import { appThemeColor, commonstyles } from '../styles/commonstyles';
import { ShareUrl } from '../utilities/urls';
import TagComponent from './TagComponent';

const sharecall = (name) => {
  const Link_Url = ShareUrl + name;
  Share.share({
    message: Link_Url,
  })
    .then((result) => console.log(result))
    .then((error) => console.log(error));
};
function TagUI(props, { navigation }) {
  useEffect(() => {
    // console.log(props.data,"categorydata");            
  })

  const renderItemTwo = ({ item}) => (
    <TagComponent
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
export default TagUI;