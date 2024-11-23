/* eslint-disable no-trailing-spaces */
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
} from 'react-native';
import FastImage from 'react-native-fast-image';
import { blackcolor, commonstyles } from '../../styles/commonstyles';
import { Cartoonurl, ShareUrl } from '../../utilities/urls';
import getCartoonAction from '../../redux/actions/getCartoonAction';
import { connect, useDispatch } from 'react-redux';


const Cartoon = ({ navigation,
    cartoonData,
    cartoonLoading }: Props) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCartoonAction());

    }, []);
    return (
        <SafeAreaView styles={commonstyles.container}>
            <ScrollView style={commonstyles.scroll}>
                <View>

                    <View style={{}}>
                        <FlatList
                            style={commonstyles.cateflist}
                            data={cartoonData?.data}
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={({ item, index }) =>
                                <View style={{ flex: 1, marginRight: 5 }}>
                                    <TouchableOpacity onPress={() => { navigation.navigate('CartoonArticle', { item: item }); }}  >
                                        <Image source={{ uri: item?.web_featured_image }} style={commonstyles.cartoonimg} />

                                    </TouchableOpacity>
                                    <View>
                                        <Text style={{color:blackcolor,fontSize:18,marginLeft:5,marginBottom:10}}>
                                            {(item?.title?.rendered)}
                                        </Text>
                                    </View>
                                </View>

                            }

                        />

                    </View>

                </View>
            </ScrollView>

        </SafeAreaView>
    );
};
type Props = {
    cartoonData: Function,
    cartoonLoading: Boolean,
};
const mapStateToProps = state => ({
    cartoonData: state.cartoonReducer?.cartoonData,
    cartoonLoading: state.cartoonReducer?.cartoonLoading,
});
const mapDispatchToProps = {
    getCartoonAction,
};
export default connect(mapStateToProps, mapDispatchToProps)(Cartoon);
