/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, FlatList, Alert, SafeAreaView, TouchableHighlight, Linking, Share } from 'react-native';
import { DrawerItem } from '@react-navigation/drawer';
import { appThemeColor, blackcolor, graycolor, whitecolor } from '../styles/commonstyles';
import { sideMenuStyle } from '../styles/SideMenuStyles';
import { ScrollView } from 'react-native-gesture-handler';
import { navigate } from '../navigation/NavigationService';

export default class SideMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            DrawerItem: false,
        };
    }
    
   
    render() {
        
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{ flex: 1, paddingTop: 20, backgroundColor: whitecolor }}>

                    <View style={{
                        width: '100%',
                        padding: 10, backgroundColor: '#000',
                    }}>
                        <Image style={{ width: '100%', height: 70 }} source={require('../Assets/Images/logoBlack.png')} />
                    </View>
                    <ScrollView style={{ paddingBottom: 50 }}>
                          {/* Home */}
                          <DrawerItem style={sideMenuStyle.item}
                            icon={({ color, size }) =>
                                <Image source={require('../Assets/Images/home.png')} style={sideMenuStyle.icon} />
                            }

                            label="Home"
                            labelStyle={sideMenuStyle.text}
                            onPress={() => {
                                this.props.navigation.navigate('Home', { screen: 'Home' })
                            }}
                        />
                        {/* Hyderabad */}
                        <DrawerItem style={sideMenuStyle.item}
                            icon={({ color, size }) =>
                                <Image source={require('../Assets/Images/sidemenuIcons/hyderabad.png')} style={sideMenuStyle.icon} />
                            }

                            label="Hyderabad"
                            labelStyle={sideMenuStyle.text}
                            onPress={() => {
                                this.props.navigation.navigate('Hyderabad');
                            }}
                        />

                        {/*Telangana  */}
                        <DrawerItem style={sideMenuStyle.item}
                            icon={({ color, size }) =>
                                <Image source={require('../Assets/Images/sidemenuIcons/telangana.png')} style={sideMenuStyle.icon} />
                            }
                            label="Telangana"
                            labelStyle={sideMenuStyle.text}
                            onPress={() => {
                                this.props.navigation.navigate('Telangana');
                            }}
                        />
                        {/* AP News */}
                        <DrawerItem style={sideMenuStyle.item}
                            icon={({ color, size }) =>
                                <Image source={require('../Assets/Images/sidemenuIcons/ap.png')} style={sideMenuStyle.icon} />
                            }
                            label="AP News"
                            labelStyle={sideMenuStyle.text}
                            onPress={() => {
                                this.props.navigation.navigate('AP News');
                            }}
                        />
                        {/* India */}
                        <DrawerItem style={sideMenuStyle.item}
                            icon={({ color, size }) =>
                                <Image source={require('../Assets/Images/sidemenuIcons/india.png')} style={sideMenuStyle.icon} />
                            }

                            label="India"
                            labelStyle={sideMenuStyle.text}
                            onPress={() => {
                                this.props.navigation.navigate('India');
                            }}
                        />
                        {/* World */}
                        <DrawerItem style={sideMenuStyle.item}
                            icon={({ color, size }) =>
                                <Image source={require('../Assets/Images/sidemenuIcons/world.png')} style={sideMenuStyle.icon} />
                            }
                            label="World"
                            labelStyle={sideMenuStyle.text}
                            onPress={() => {
                                this.props.navigation.navigate('World');
                            }}
                        />
                        {/* Entertainment */}
                        <DrawerItem style={sideMenuStyle.item}
                            icon={({ color, size }) =>
                                <Image source={require('../Assets/Images/sidemenuIcons/cinema.png')} style={sideMenuStyle.icon} />
                            }

                            label="Entertainment"
                            labelStyle={sideMenuStyle.text}
                            onPress={() => {
                                this.props.navigation.navigate('Entertainment');
                            }}
                        />
                        {/* Science & Tech */}
                        <DrawerItem style={sideMenuStyle.item}
                            icon={({ color, size }) =>
                                <Image source={require('../Assets/Images/sidemenuIcons/science.png')} style={sideMenuStyle.icon} />
                            }

                            label="Science & Tech"
                            labelStyle={sideMenuStyle.text}
                            onPress={() => {
                                this.props.navigation.navigate('Science');
                            }}
                        />
                        {/* Sports */}
                        <DrawerItem style={sideMenuStyle.item}
                            icon={({ color, size }) =>
                                <Image source={require('../Assets/Images/sidemenuIcons/sports.png')} style={sideMenuStyle.icon} />
                            }
                            label="Sports"
                            labelStyle={sideMenuStyle.text}
                            onPress={() => {
                                this.props.navigation.navigate('Sports');
                            }}
                        />
                        {/* Business */}
                        <DrawerItem style={sideMenuStyle.item}
                            icon={({ color, size }) =>
                                <Image source={require('../Assets/Images/sidemenuIcons/business.png')} style={sideMenuStyle.icon} />
                            }
                            label="Business"
                            labelStyle={sideMenuStyle.text}
                            onPress={() => {
                                this.props.navigation.navigate('Business');
                            }}
                        />
                        {/* Rewind */}
                        <DrawerItem style={sideMenuStyle.item}
                            icon={({ color, size }) =>
                                <Image source={require('../Assets/Images/sidemenuIcons/rewind.png')} style={sideMenuStyle.icon} />
                            }
                            label="Rewind"
                            labelStyle={sideMenuStyle.text}
                            onPress={() => {
                                this.props.navigation.navigate('Rewind');
                            }}
                        />
                        {/* NRI */}
                        <DrawerItem style={sideMenuStyle.item}
                            icon={({ color, size }) =>
                                <Image source={require('../Assets/Images/sidemenuIcons/nri.png')} style={sideMenuStyle.icon} />
                            }
                            label="NRI"
                            labelStyle={sideMenuStyle.text}
                            onPress={() => {
                                this.props.navigation.navigate('NRI');
                            }}
                        />
                        {/* Viewpoint */}
                        <DrawerItem style={sideMenuStyle.item}
                            icon={({ color, size }) =>
                                <Image source={require('../Assets/Images/sidemenuIcons/viewpoint.png')} style={sideMenuStyle.icon} />
                            }
                            label="Viewpoint"
                            labelStyle={sideMenuStyle.text}
                            onPress={() => {
                                this.props.navigation.navigate('Viewpoint');
                            }}
                        />
                        {/* Cartoon */}
                        <DrawerItem style={sideMenuStyle.item}
                            icon={({ color, size }) =>
                                <Image source={require('../Assets/Images/sidemenuIcons/cartoon.png')} style={sideMenuStyle.icon} />
                            }
                            label="Cartoon"
                            labelStyle={sideMenuStyle.text}
                            onPress={() => {
                                this.props.navigation.navigate('Cartoon');
                            }}
                        />
                        {/* Columuns */}
                        <DrawerItem style={sideMenuStyle.item}
                            icon={({ color, size }) =>
                                <Image source={require('../Assets/Images/sidemenuIcons/columns.png')} style={sideMenuStyle.icon} />
                            }
                            label="Columuns"
                            labelStyle={sideMenuStyle.text}
                            onPress={() => {
                                this.props.navigation.navigate('Columuns');
                            }}
                        />
                        {/* Education Today */}
                        <DrawerItem style={sideMenuStyle.item}
                            icon={({ color, size }) =>
                                <Image source={require('../Assets/Images/sidemenuIcons/education.png')} style={sideMenuStyle.icon} />
                            }
                            label="Education Today"
                            labelStyle={sideMenuStyle.text}
                            onPress={() => {
                                this.props.navigation.navigate('Education');
                            }}
                        />
                        {/* Reviews */}
                        <DrawerItem style={sideMenuStyle.item}
                            icon={({ color, size }) =>
                                <Image source={require('../Assets/Images/sidemenuIcons/reviews.png')} style={sideMenuStyle.icon} />
                            }
                            label="Reviews"
                            labelStyle={sideMenuStyle.text}
                            onPress={() => {
                                this.props.navigation.navigate('Reviews');
                            }}
                        />

                        {/* Property */}
                        <DrawerItem style={sideMenuStyle.item}
                            icon={({ color, size }) =>
                                <Image source={require('../Assets/Images/sidemenuIcons/property.png')} style={sideMenuStyle.icon} />
                            }

                            label="Property"
                            labelStyle={sideMenuStyle.text}
                            onPress={() => {
                                this.props.navigation.navigate('Property');
                            }}
                        />
                        {/* Videos */}
                        {/* <DrawerItem style={sideMenuStyle.item}
                            icon={({ color, size }) =>
                                <Image source={require('../Assets/Images/sidemenuIcons/video.png')} style={sideMenuStyle.icon} />
                            }

                            label="Videos"
                            labelStyle={sideMenuStyle.text}
                            onPress={() => {
                                this.props.navigation.navigate('Videos');
                            }}
                        /> */}
                        {/* Lifestyle */}
                        <DrawerItem style={sideMenuStyle.item}
                            icon={({ color, size }) =>
                                <Image source={require('../Assets/Images/sidemenuIcons/lifestyle.png')} style={sideMenuStyle.icon} />
                            }

                            label="Lifestyle"
                            labelStyle={sideMenuStyle.text}
                            onPress={() => {
                                this.props.navigation.navigate('Lifestyle');
                            }}
                        />


                        <DrawerItem style={sideMenuStyle.item}
                            icon={({ color, size }) =>
                                <Image source={require('../Assets/Images/sidemenuIcons/contact.png')}
                                    style={sideMenuStyle.icon} />
                            }
                            label="Contact Us"
                            labelStyle={sideMenuStyle.text}
                            onPress={() => {
                                this.props.navigation.navigate('Contact');
                            }}
                        />
                        <DrawerItem style={sideMenuStyle.item}
                            icon={({ color, size }) =>
                                <Image source={require('../Assets/Images/sidemenuIcons/about.png')} style={sideMenuStyle.icon} />
                            }

                            label="About Us"
                            labelStyle={sideMenuStyle.text}
                            onPress={() => {
                                this.props.navigation.navigate('About');
                            }}
                        />
                        <DrawerItem style={sideMenuStyle.item}
                            icon={({ color, size }) =>
                                <Image source={require('../Assets/Images/sidemenuIcons/epaper.png')} style={sideMenuStyle.icon} />
                            }

                            label="E-paper"
                            labelStyle={sideMenuStyle.text}
                            onPress={() => {
                                Linking.openURL('https://epaper.telanganatoday.com');
                            }} />
                        {/* <DrawerItem style={sideMenuStyle.item}
                            icon={({ color, size }) =>
                                <Image source={require('../Assets/Images/sidemenuIcons/contact.png')} style={sideMenuStyle.icon} />
                            }

                            label="Share App"
                            labelStyle={sideMenuStyle.text}
                            onPress={this.onShare} /> */}
                        {/* follow */}
                        <View style={{ backgroundColor: graycolor, padding: 10 }}>
                            <Text style={{ color: blackcolor, size: 15, fontWeight: '700', fontFamily: 'TTLogo' }}>Follow us</Text>
                        </View>
                        <DrawerItem style={sideMenuStyle.item}
                            icon={({ color, size }) =>
                                <Image source={require('../Assets/Images/sidemenuIcons/facebook.png')} style={{}} />
                            }

                            label="Facebook"
                            labelStyle={sideMenuStyle.text}
                            onPress={() => {
                                Linking.openURL('https://www.facebook.com/TelanganaToday');
                            }} />
                        <DrawerItem style={sideMenuStyle.item}
                            icon={({ color, size }) =>
                                <Image source={require('../Assets/Images/sidemenuIcons/twitter.png')} style={{}} />
                            }

                            label="Twitter"
                            labelStyle={sideMenuStyle.text}
                            onPress={() => {
                                Linking.openURL('https://x.com/TelanganaToday');
                            }} />
                        <DrawerItem style={sideMenuStyle.item}
                            icon={({ color, size }) =>
                                <Image source={require('../Assets/Images/sidemenuIcons/youtube.png')} style={{}} />
                            }

                            label="Youtube"
                            labelStyle={sideMenuStyle.text}
                            onPress={() => {
                                Linking.openURL('https://www.youtube.com/c/telanganatodayvideos');
                            }} />
                        <DrawerItem style={sideMenuStyle.item}
                            icon={({ color, size }) =>
                                <Image source={require('../Assets/Images/sidemenuIcons/telegram.png')} style={{}} />
                            }

                            label="Telegram"
                            labelStyle={sideMenuStyle.text}
                            onPress={() => {
                                Linking.openURL('https://t.me/s/TelanganaToday');
                            }} />


                    </ScrollView>

                </View >
            </SafeAreaView>
        );

    }


}
