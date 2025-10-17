/* eslint-disable prettier/prettier */
import {Dimensions, StyleSheet} from 'react-native';
import {
  appThemeColor,
  blackcolor,
  graycolor,
  whitecolor,
  Header_BG_Color,
  Header_text,
} from '../styles/commonstyles';

export const HeaderStyle = StyleSheet.create({
  viewHeight: {
    height: 60,
    width: '100%',
    backgroundColor: Header_text,
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'center',
    alignContent: 'center',
    borderBottomColor: graycolor,
    borderBottomWidth: 2,
    // position:"absolute",
    // top:0
  },
  buttonImg: {
    width: 20,
    height: 20,
    // marginLeft: 6,
    // marginTop: 1,
  },
  buttonView: {
    flex: 0.4,
    backgroundColor: whitecolor,
    justifyContent: 'center',
    borderRadius: 50,
    height: 30,
    top: 5,
  },
  heading: {
    width: '70%',
    height: 45,
  },
  customheading: {
    width: '70%',
    height: 45,
    fontFamily: 'TTLogo',
    textAlign: 'center',
    fontSize: 33,
    color: Header_text,
    // fontWeight:'bold',
    // top:20
  },
  subHeaderviewHeight: {
    height: 50,
    width: '100%',
    backgroundColor: whitecolor,
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'space-between',
    alignContent: 'center',
  },
  subHeadercustom: {
    height: 40,
    width: '100%',
    backgroundColor: whitecolor,
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'flex-start',
  },
  subHeaderbuttonImg: {
    width: 30,
    height: 30,
    // marginLeft: 10,
    marginTop: 5,
  },
  subHeaderheading: {
    color: blackcolor,
    width: '100%',
    textAlign: 'center',
    fontFamily: 'Lora-Bold',
    fontSize: 24,
  },
  HeadTitleView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  HeadTitleImg: {
    height: 35,
    width: 225,
  },
  headerTitle: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerLeftView: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
  },
  headerLeftImg: {height: 20, width: 20},
  HeadRightView: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: whitecolor,
    borderRadius: 50,
    height: 30,
    width: 30,
  },
  headerRightImage: {height: 25, width: 25},
});
