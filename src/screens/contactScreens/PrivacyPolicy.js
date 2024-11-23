/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { Text, View, ScrollView, SafeAreaView } from 'react-native';
import SubHeader from '../../components/SubHeader';
import { commonstyles } from '../../styles/commonstyles';
import { blackcolor, ContactStyles } from '../../styles/contactScreenStyles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


export default class PrivacyPolicy extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    };


    render() {


        return (
            <SafeAreaView styles={commonstyles.container}>
                <SubHeader title={'Privacy Policy '} isMenu={false} isBook={false} isShare={false}
                    leftBtnClick={() => this.props.navigation.goBack()}
                    ShareClick={() => { this.sharecall() }}
                    BookClick={() => { alert('BookMark   Clicked') }}
                />
                <ScrollView>
                    <View style={ContactStyles.mainView}>
                        <View style={ContactStyles.subView}>

                            <Text style={ContactStyles.content}>At Namasthe Telangana, accessible from https://ntnews.com, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Namasthe Telangana and how we use it. </Text>
                            <Text style={ContactStyles.content}>If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us. </Text>

                            <Text style={ContactStyles.content}>This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in Namasthe Telangana. This policy is not applicable to any information collected offline or via channels other than this website. </Text>

                            <Text style={ContactStyles.title}>Consent</Text>

                            <Text style={ContactStyles.content}>By using our website, you hereby consent to our Privacy Policy and agree to its terms. </Text>

                            <Text style={ContactStyles.title}>Information we collect</Text>

                            <Text style={ContactStyles.content}>The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information. </Text>
                            <Text style={ContactStyles.content}>If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide. </Text>

                            <Text style={ContactStyles.content}>When you register for an Account, we may ask for your contact information, including items such as name, company name, address, email address, and telephone number. </Text>
                            <Text style={ContactStyles.title}>How we use your information</Text>

                            <Text style={ContactStyles.content}>We use the information we collect in various ways, including to: </Text>

                            <View style={{ flexDirection: 'row' }}>
                                <MaterialIcons name="circle" size={8} color={blackcolor} style={ContactStyles.bulleticon} />
                                <Text style={ContactStyles.bullettext}>Provide, operate, and maintain our website</Text>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <MaterialIcons name="circle" size={8} color={blackcolor} style={ContactStyles.bulleticon} />
                                <Text style={ContactStyles.bullettext}>Improve, personalize, and expand our website</Text>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <MaterialIcons name="circle" size={8} color={blackcolor} style={ContactStyles.bulleticon} />
                                <Text style={ContactStyles.bullettext}>Understand and analyze how you use our website</Text>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <MaterialIcons name="circle" size={8} color={blackcolor} style={ContactStyles.bulleticon} />
                                <Text style={ContactStyles.bullettext}>Develop new products, services, features, and functionality</Text>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <MaterialIcons name="circle" size={8} color={blackcolor} style={ContactStyles.bulleticon} />
                                <Text style={ContactStyles.bullettext}>Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes</Text>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <MaterialIcons name="circle" size={8} color={blackcolor} style={ContactStyles.bulleticon} />
                                <Text style={ContactStyles.bullettext}>Send you emails</Text>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <MaterialIcons name="circle" size={8} color={blackcolor} style={ContactStyles.bulleticon} />
                                <Text style={ContactStyles.bullettext}>Find and prevent fraud</Text>
                            </View>
                            <Text style={ContactStyles.title}>Log Files</Text>
                            <Text style={ContactStyles.content}>Namasthe Telangana follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services’ analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users’ movement on the website, and gathering demographic information.</Text>
                            <Text style={ContactStyles.title}>Cookies and Web Beacons</Text>
                            <Text style={ContactStyles.content}>Like any other website, Namasthe Telangana uses ‘cookies’. These cookies are used to store information including visitors’ preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users’ experience by customizing our web page content based on visitors’ browser type and/or other information.</Text>
                            <Text style={ContactStyles.content}>For more general information on cookies, please read “What Are Cookies”.</Text>
                            <Text style={ContactStyles.title}>Google DoubleClick DART Cookie</Text>
                            <Text style={ContactStyles.content}>Google is one of a third-party vendor on our site. It also uses cookies, known as DART cookies, to serve ads to our site visitors based upon their visit to www.website.com and other sites on the internet. However, visitors may choose to decline the use of DART cookies by visiting the Google ad and content network Privacy Policy at the following URL – https://policies.google.com/technologies/ads</Text>
                            <Text style={ContactStyles.title}>Our Advertising Partners</Text>
                            <Text style={ContactStyles.content}>Some of advertisers on our site may use cookies and web beacons. Our advertising partners are listed below. Each of our advertising partners has their own Privacy Policy for their policies on user data. For easier access, we hyperlinked to their Privacy Policies below.</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <MaterialIcons name="circle" size={8} color={blackcolor} style={ContactStyles.bulleticon} />
                                <Text style={ContactStyles.bullettext}>Google https://policies.google.com/technologies/ads</Text>
                            </View>
                            <Text style={ContactStyles.title}>Advertising Partners Privacy Policies</Text>

                            <Text style={ContactStyles.content}>You may consult this list to find the Privacy Policy for each of the advertising partners of Namasthe Telangana.</Text>
                            <Text style={ContactStyles.content}>Third-party ad servers or ad networks uses technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on Namasthe Telangana, which are sent directly to users’ browser. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on websites that you visit.</Text>
                            <Text style={ContactStyles.content}>Note that Namasthe Telangana has no access to or control over these cookies that are used by third-party advertisers.</Text>
                            <Text style={ContactStyles.title}>Third Party Privacy Policies</Text>
                            <Text style={ContactStyles.content}>Namasthe Telangana’s Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options.</Text>
                            <Text style={ContactStyles.content}>You can choose to disable cookies through your individual browser options. To know more detailed information about cookie management with specific web browsers, it can be found at the browsers’ respective websites.</Text>
                            <Text style={ContactStyles.title}>CCPA Privacy Rights (Do Not Sell My Personal Information)</Text>
                            <Text style={ContactStyles.content}>Under the CCPA, among other rights, California consumers have the right to:</Text>
                            <Text style={ContactStyles.content}>Request that a business that collects a consumer’s personal data disclose the categories and specific pieces of personal data that a business has collected about consumers.</Text>
                            <Text style={ContactStyles.content}>Request that a business delete any personal data about the consumer that a business has collected.</Text>
                            <Text style={ContactStyles.content}>Request that a business that sells a consumer’s personal data, not sell the consumer’s personal data.</Text>
                            <Text style={ContactStyles.content}>If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.</Text>
                            <Text style={ContactStyles.title}>GDPR Data Protection Rights</Text>
                            <Text style={ContactStyles.content}>We would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following:</Text>
                            <Text style={ContactStyles.content}>The right to access – You have the right to request copies of your personal data. We may charge you a small fee for this service.</Text>
                            <Text style={ContactStyles.content}>The right to rectification – You have the right to request that we correct any information you believe is inaccurate. You also have the right to request that we complete the information you believe is incomplete.</Text>
                            <Text style={ContactStyles.content}>The right to erasure – You have the right to request that we erase your personal data, under certain conditions.</Text>
                            <Text style={ContactStyles.content}>The right to restrict processing – You have the right to request that we restrict the processing of your personal data, under certain conditions.</Text>
                            <Text style={ContactStyles.content}>The right to object to processing – You have the right to object to our processing of your personal data, under certain conditions.</Text>
                            <Text style={ContactStyles.content}>The right to data portability – You have the right to request that we transfer the data that we have collected to another organization, or directly to you, under certain conditions.</Text>
                            <Text style={ContactStyles.content}>If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.</Text>
                            <Text style={ContactStyles.title}>Children’s Information</Text>
                            <Text style={ContactStyles.content}>Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity.</Text>
                            <Text style={ContactStyles.content}>Namasthe Telangana does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records.</Text>
                            <Text style={ContactStyles.content}>Contact Us For any other information or clarification https://ntnews.com/contactus</Text>

                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        )
    }
}