/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import {
    Text,
    View,
    FlatList,
    TouchableOpacity,
    SafeAreaView,
} from 'react-native';
import { appThemeColor, blackcolor, commonstyles } from '../styles/commonstyles';
import HomeSliderComponent from './HomeSliderComponent';
function SliderUI(props) {
    const renderItemOne = ({ item }) => (
        <HomeSliderComponent
            item={item}
            propsdata={props?.data}
            navigation={props?.navigation}
        />
    );

    // Check if data is available and is an array
    const newdata = Array.isArray(props?.data) ? props.data : [];

    return (
        <SafeAreaView styles={commonstyles.container}>
            <View>
                {/* LatestNews  text*/}
                <View style={commonstyles.SlidercategoryView}>
                    <View>
                        <Text style={commonstyles.Category}>News of the Day</Text>
                    </View>
                  
                </View>

                {/* flatlist for Latest News */}
                <View>
                    <View style={commonstyles.SliderflatView}>
                        <FlatList
                            data={newdata}
                            showsHorizontalScrollIndicator={true}
                            horizontal={true}
                            getItemLayout={(data, index) => ({
                                length: 40,
                                offset: 40 * index,
                                index,
                            })}
                            renderItem={renderItemOne}
                        />
                        
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
}

export default SliderUI;
