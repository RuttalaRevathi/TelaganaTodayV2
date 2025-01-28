// In TagUI component
import React from 'react';
import { Text, View, FlatList, SafeAreaView, ActivityIndicator } from 'react-native';
import { commonstyles } from '../styles/commonstyles';
import TagComponent from './TagComponent';  // Assuming you have a TagComponent to display individual tags

function TagUI(props) {
  const renderItem = ({ item }) => (
    <TagComponent
      tag={item}
      navigation={props.navigation}
    />
  );

  return (
    <SafeAreaView style={commonstyles.container}>
      <View>
        {props?.data?.length !== 0 ? (
          <FlatList
            data={props?.data}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
          />
        ) : (
          <View style={commonstyles.spinnerView}>
            <ActivityIndicator color="#0000ff" size="large" />
            <Text style={commonstyles.spinnerText}>Loading...</Text>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
}

export default TagUI;
