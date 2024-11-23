/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { Text, View, SafeAreaView, Linking, Image, ScrollView, TouchableOpacity } from 'react-native';
import SubHeader from '../../components/SubHeader';
import { Dark_Gray, blackcolor, commonstyles, gallerycolor, whitecolor } from '../../styles/commonstyles';
import { ContactStyles } from '../../styles/contactScreenStyles';


export default class ContactUs extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }


    render() {
        const Mail = () => {
            Linking.openURL('mailto:admin@tppl.news');
        };

        const Contact = () => {
            Linking.openURL('tel:+91 40 2329 1999');
        };
        const website = () => {
            Linking.openURL('https://telanganatoday.com/');
        };
        const ContactFax = () => {
            Linking.openURL('fax:+91 40 2329 1117');
        };
        return (
            <SafeAreaView style={commonstyles.container}>

                <SubHeader title={'Contact Us'}
                    leftBtnClick={() => this.props.navigation.goBack()}


                />

                <View style={ContactStyles.Container}>
                    <View style={ContactStyles.HeaderviewHeight}>
                        <Text style={{ color: whitecolor, fontSize: 20, fontWeight: 'bold', textAlign: 'center' }}>CORPORATE OFFICE</Text>
                    </View>
                    <ScrollView style={{}}>
                        <View style={{}}>
                            <View style={ContactStyles.contactheadview}>
                                <View style={ContactStyles.contentview}>
                                    <Image style={ContactStyles.image}
                                        source={require('../../Assets/Images/address.png')} />
                                    <Text style={ContactStyles.text}>Address</Text>
                                </View>
                                <View style={{ width: '80%' }}>
                                    <Text style={ContactStyles.text2}>TELANGANA PUBLICATIONS PVT. LTD,</Text>
                                    <Text style={ContactStyles.text2}># 8-2-603/1/7, 8 & 9, Krishnapuram,</Text>
                                    <Text style={ContactStyles.text2}>Road No. 10 , Banjara Hills,</Text>
                                    <Text style={ContactStyles.text2}>HYDERABAD 500 034.</Text>
                                    <Text style={ContactStyles.text2}>Telangana State.</Text>
                                </View>
                            </View>
                            <View style={ContactStyles.contactheadview}>
                                <View style={ContactStyles.contentview}>
                                    <Image style={ContactStyles.image}
                                        source={require('../../Assets/Images/telephone.png')} />
                                    <Text style={ContactStyles.text}>Phone Number</Text>
                                </View>
                                <View>
                                    <TouchableOpacity onPress={Contact}>

                                        <Text numberOfLines={3} ellipsizeMode="tail" style={ContactStyles.text1}>
                                            +91 40 2329 1999
                                        </Text>
                                    </TouchableOpacity>

                                </View>
                            </View>
                            {/* <View style={ContactStyles.contactheadview}>
                                <View style={ContactStyles.contentview}>
                                    <Image style={ContactStyles.image}
                                        source={require('../../Assets/Images/fax.png')} />
                                    <Text style={ContactStyles.text}>Fax</Text>
                                </View>
                                <View>
                                    <TouchableOpacity onPress={ContactFax}>

                                        <Text numberOfLines={3} ellipsizeMode="tail" style={ContactStyles.text1}>
                                        +91 40 2329 1117
                                        </Text>
                                    </TouchableOpacity>

                                </View>
                            </View> */}
                            <View style={ContactStyles.contactheadview}>
                                <View style={ContactStyles.contentview}>
                                    <Image style={ContactStyles.image}
                                        source={require('../../Assets/Images/mail.png')} />
                                    <Text style={ContactStyles.text}>Email</Text>
                                </View>
                                <TouchableOpacity onPress={Mail}>
                                    <Text style={ContactStyles.text1}>admin@tppl.news</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={ContactStyles.contactheadview}>
                                <View style={ContactStyles.contentview}>
                                    <Image style={ContactStyles.image}
                                        source={require('../../Assets/Images/click.png')} />
                                    <Text style={ContactStyles.text}>Website</Text>
                                </View>
                                <View>
                                    <TouchableOpacity onPress={website}>

                                        <Text numberOfLines={3}
                                            ellipsizeMode="tail" style={ContactStyles.text1}>https://telanganatoday.com/</Text>

                                    </TouchableOpacity>
                                </View>
                            </View>




                        </View>
                    </ScrollView>
                </View>

            </SafeAreaView>
        );
    }
}