/* eslint-disable prettier/prettier */
import { StyleSheet, Platform } from 'react-native';
import { appThemeColor, blackcolor, graycolor, whitecolor } from '../styles/commonstyles';

export const sideMenuStyle = StyleSheet.create({
  icon: { width: 25, height: 25 },

  text: {
    color: blackcolor,
    fontFamily: 'TTLogo',
    fontSize: 16,
  },
 
  item: {
    borderBottomColor: graycolor,
    borderBottomWidth: 1,
    marginRight:-10,
  },
  sectionsText: {
    color: whitecolor,
    paddingLeft: 10,
    fontFamily: 'TTLogo',
    fontSize: 22,
  },
  cross: { top: 5, alignSelf: 'flex-end', justifyContent: 'center' }
});
