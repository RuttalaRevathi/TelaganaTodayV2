/* eslint-disable prettier/prettier */
import { StyleSheet, Dimensions } from 'react-native';
import { Dark_Gray, appThemeColor, blackcolor, gallerycolor, graycolor, medium_gray, red_color, whitecolor } from '../styles/commonstyles';
const screenWidth = Dimensions.get('window').width;

export const ContactStyles = StyleSheet.create({

    Container: {
        backgroundColor: whitecolor,

    },
    maincontainer: {
        backgroundColor: whitecolor, height: 'auto', margin: 10,
    },
    labelview: {
        backgroundColor: blackcolor, width: 140,
        height: 50, alignSelf: 'flex-end',
    },
    label: {
        color: whitecolor, alignItems: 'center', textAlign: 'center',
        fontSize: 20, fontWeight: '700', marginVertical: 10
    },

    contentmainview: { marginTop: 10, marginStart: 10 },

    contentview: { flexDirection: 'row', },

    image: { width: 15, height: 15, top: 9 },

    text: { color: blackcolor, fontSize: 16, fontWeight: '600', marginStart: 7, lineHeight: 30 },
    text1: {
        color: blackcolor, fontSize: 16, fontWeight: 'normal',
        left: 5, lineHeight: 30, textDecorationLine: 'Underline',
    },

    title: {
        fontFamily: 'Faustina-Bold', fontSize: 19,
        color: blackcolor,  marginBottom: 10, marginTop: 10
    },
    heading: { fontSize: 24, fontWeight: '600', color: blackcolor },
    headingview: { marginBottom: 10 },
    content: {
        fontSize: 16, fontWeight: '400',
        color: blackcolor, textAlign: 'justify', marginBottom: 10, fontFamily: 'Faustina'
    },
    subView: { paddingBottom: 70, margin: 10 },
    mainView: {
        backgroundColor: whitecolor,
        height: '100%'
    },
    text2: { color: blackcolor, fontSize: 15, fontWeight: 'normal', lineHeight: 25, marginStart: 5 },
    contactheadview: { borderBottomWidth: 1, borderBottomColor: graycolor, paddingStart: 10 },
    HeaderviewHeight: {
        width: "100%",
        backgroundColor: blackcolor,
        flexDirection: "row",
        padding: 10,
        justifyContent: 'flex-start',
        alignContent: "center",

    },
})