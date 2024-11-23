/* eslint-disable prettier/prettier */
import { StyleSheet, Dimensions } from 'react-native';
// export const blackcolor = "#337DFF"
//3349FF,339fff
export const whitecolor = '#fff';
export const graycolor = '#ccc';
export const blackcolor = '#000';
export const dark_graycolor = '#A9A9A9';
export const off_white = '#F6F6F6';
export const bluecolor = '#6CAEFB';
export const redcolor = '#d11921';
export const marooncolor = '#a10510';
export const light_gray = '#cccccc5e';
export const bold_gray = '#606060';



const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
export const SLIDER_WIDTH = Dimensions.get('window').width;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH);

export const commonstyles = StyleSheet.create({
  container: {
    backgroundColor: whitecolor, height: '100%'
  },
  Detailstittle: {
    color: blackcolor,
    fontSize: 19,
    fontFamily: 'Lora-Medium',
    lineHeight: 27,
  },
  shortstittleview:{ paddingLeft:10,paddingTop:5,paddingRight:5},
  shortstittletext:{
    color: blackcolor,
    fontSize: 19,
    fontFamily: 'Lora-Medium',
    lineHeight: 27,paddingRight:5
},
shortscontent:{
  color: blackcolor,
  fontSize: 15,
  fontFamily: 'Faustina',
  paddingRight:5
},
  SlidercategoryView: {
    justifyContent: 'space-between', flex: 1,
    paddingBottom: 5,
    marginBottom: 15,
  },
  slidercard: {
    height: 200,
    width: ITEM_WIDTH - 20,
    // borderRadius: 15,

  },
  slidertext: {
    color: whitecolor,
    fontFamily: 'Lora-Bold',
    fontSize: 16,
    marginLeft: 10,
    marginRight: 10,
    lineHeight: 20,
    bottom: 10,
    position: 'absolute',
  },
  swipeLabelContainer: {
    position: 'absolute',
    right: 10, // Keep the icon 10px from the right side of the screen
    top: screenHeight / 2 - 50, // Center vertically by subtracting half of the icon's height
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.6)', // Optional: dark background with some opacity
    padding: 10,
    borderRadius: 8,
  },
  swipeIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  swipeText: {
    color: '#fff',
    fontSize: 16,
  },
  SliderflatView: {
    justifyContent: 'center',
    display: 'flex',
  },
  sliderGradient: {
    width: ITEM_WIDTH - 20, flex: 1.4, bottom: 0, 
    // borderBottomLeftRadius: 15,
    // borderBottomRightRadius: 15,
    position: 'absolute', height: 60,
  },
  Category: {
    color: marooncolor,
    fontFamily: 'Lora-Medium',
    fontSize: 22,
  },
  LatestflatView: {
    position: 'relative',
    paddingBottom: 10,
    justifyContent: 'center',
    display: 'flex',
    borderBottomWidth: 1.5,
    borderBottomColor: marooncolor,
    backgroundColor: light_gray,
  },
  Homeletesttext: {
    color: blackcolor,
    fontFamily: 'Lora-Medium',
    fontSize: 16,
    marginLeft: 10,
    marginRight: 10,
    lineHeight: 20,
    position: 'relative',
    paddingTop: 5,
    paddingBottom: 5,
    fontWeight: '600',
  },
  latestCard: {
    height: 150,
    width: ITEM_WIDTH - 150,
    borderRadius: 15,
    resizeMode: 'contain',
  },
  latestcategoryView: {
    justifyContent: 'space-between',
    flex: 1,
    flexDirection: 'row',
    padding: 5,
    marginBottom: 5,
  },
  homeLatestTextView: {
    width: ITEM_WIDTH - 120,
    borderRightColor: whitecolor,
    borderRightWidth: 1,
  },
  homeCategoryflatView: {
    position: 'relative',
    justifyContent: 'center',
    display: 'flex'
  },
  homecategoryTextView: {
    width: ITEM_WIDTH - 30,
  },
  HomeCategoryImg: {
    height: 200,
    width: ITEM_WIDTH - 20,
  },
  HomeoneCategoryImg: {
    height: 200,
    width: ITEM_WIDTH - 20,
  },
  HomeCategorytext: {
    color: blackcolor,
    fontFamily: 'Lora-Medium',
    fontSize: 18,
    marginLeft: 10,
    marginRight: 10,
    lineHeight: 20,
    position: 'relative',
    paddingTop: 5,
    paddingBottom: 5,
  },
  HomeoneCategoryview: {
    // padding: 5, 
    borderBottomColor: light_gray,
    borderBottomWidth: 4,
    paddingBottom: 5,
  },
  homecategoryView: {
    justifyContent: 'space-between', flexDirection: 'row',
    paddingBottom: 10,
    // paddingTop: 5,
    paddingLeft: 10,
    paddingRight: 10,

  },
  latesttime: { color: graycolor, fontSize: 10, fontFamily: 'Roboto-Regular' },
  timeview: {
    flexDirection: 'row',
    paddingLeft: 7,
  },
  categoryview: {
    padding: 5, borderBottomColor: graycolor,
    borderBottomWidth: 1,
    paddingBottom: 15,
  },
  homeVideoview: {
    backgroundColor: blackcolor,
  },
  homeVideotextview: {
    flexDirection: 'row', paddingLeft: 10,
    paddingRight: 10, paddingTop: 10, flex: 1,
  },
  ptext: {
    color: whitecolor, fontSize: 25,
    marginEnd: 5, fontFamily: 'Mandali-Bold',
  },
  homeVideoTextView: {
    width: ITEM_WIDTH - 30,
  },
  HomeVideotext: {
    color: whitecolor,
    fontFamily: 'Lora-Medium',
    fontSize: 18,
    marginLeft: 10,
    marginRight: 10,
    lineHeight: 20,
    position: 'relative',
    paddingTop: 5,
    paddingBottom: 5,
  },
  HomeVideoImg: {
    height: 200,
    width: ITEM_WIDTH - 30,
    borderRadius: 15,
  },
  HomeVideosliderImg: {
    height: 100,
    width: ITEM_WIDTH - 220,
    // borderRadius: 15,
    resizeMode: 'contain',
  },
  homeVideosliderTextView: {
    width: ITEM_WIDTH - 220,
  },
  homeVideosliderText: {
    color: whitecolor,
    fontFamily: 'Lora-Medium',
    fontSize: 16,
    marginLeft: 10,
    marginRight: 10,
    lineHeight: 20,
    position: 'relative',
    paddingTop: 5,
    paddingBottom: 5,
    fontWeight: '600',
  },
  homevideocategorytext: {
    color: whitecolor,
    fontFamily: 'Lora-Medium',
    fontSize: 22,
  },
  HomevideoCategoryview: {
    padding: 5, borderBottomColor: graycolor,
    borderBottomWidth: 1,
    paddingBottom: 15,
  },
  HomeVideoCategoryview: {
    padding: 5,
    paddingBottom: 15,
  },
  homeFoursliderText: {
    color: blackcolor,
    fontFamily: 'Lora-Medium',
    fontSize: 16,
    marginLeft: 10,
    marginRight: 10,
    lineHeight: 20,
    position: 'relative',
    paddingTop: 5,
    paddingBottom: 5,
    fontWeight: '600',
  },
  HomeFourcategoryView: {
    borderBottomColor: graycolor,
    borderBottomWidth: 2,
    paddingBottom: 10,
    paddingTop: 15,
    paddingRight: 10,
  },
  HomeThreeCategoryview: {
    // padding: 5,
    borderBottomColor:light_gray,borderBottomWidth:4,
  },
  HomeComp2DotView: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    // flex: 1,
    margin: 5,
    borderBottomColor: light_gray,
    borderBottomWidth: 4,
    paddingBottom: 5,
    // paddingTop: 15,
  },
  detailsfontimage:{width: 20, height: 20,bottom:5},
  detailTime: {
    color: dark_graycolor,
    fontFamily: 'Roboto-Medium',
    fontSize: 9,

  },
  shortsshareimage:{ width: 18, height: 18 ,paddingBottom:17,right:10},
  shortsmainView:{ flexDirection: 'row', justifyContent: 'space-between', padding: 10,
    backgroundColor: whitecolor, borderBottomWidth: 1, borderBottomColor: graycolor,height:50 },
  shortstimeview:{  flexDirection: 'row', justifyContent: 'space-between',
     paddingLeft: 10, paddingRight: 20 },
  shortsheading:{ color: blackcolor, fontFamily: 'Lora-Medium', fontSize: 22,paddingRight:20 },
  detailauthor:{ color: blackcolor,fontFamily: 'Roboto-Medium',
  },
  DetailsTwocategoryView: {

    paddingBottom: 15,
    paddingTop: 15,
    paddingRight: 10,
  },

  DetailsMainView: {
    backgroundColor: whitecolor,borderBottomColor:light_gray,borderBottomWidth:4,
  },
  DetailsSubView: {
    flexDirection: 'row', justifyContent: 'space-between', paddingLeft: 12,
    paddingRight: 12,alignItems:'center'
  },
  DetailsCategoryTextView: {
        borderBottomColor: blackcolor, borderBottomWidth: 1,maxWidth: screenWidth - 50,flexShrink: 1,
  },

  DetailsCategoryText: { fontSize: 15, color: marooncolor, fontWeight: 'bold', 
    fontFamily: 'Lora-Medium',lineHeight: 25, },
  DetailsShareImage: { width: 18, height: 18,},

  ShortsflatView: {
    position: 'relative',
    paddingBottom: 10,
    justifyContent: 'center',
    display: 'flex',
    borderBottomWidth: 1,
    borderBottomColor: graycolor,

  },
  slideStyle: {
    marginBottom: -70, // Adjust this value to reduce the space between slides
  },






  // new styles
  scroll: { backgroundColor: whitecolor },
  TextView: {
    flexDirection: 'row', flex: 2,
    fontFamily: 'Lora-Medium', fontSize: 20, lineHeight: 33, justifyContent: 'center',
  },
  flatView: {
    position: 'relative',
    // margin: 5,
    justifyContent: 'center',
    display: 'flex'
  },
  Textdot: {
    marginTop: 10,
  },

  CategorysliderGradient: {
    width: ITEM_WIDTH - 30, flex: 1.4, bottom: 0, borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    position: 'absolute', height: 100,
  },

  HomeComp2MainView: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  HomeComp2Text: {
    color: blackcolor,
    fontFamily: 'Lora-Medium',
    fontSize: 18,
    lineHeight: 28,
    marginLeft: 5,
    justifyContent: 'center',
  },
  Homecartoonimg: {
    width: Dimensions.get('window').height * 0.40,
    borderRadius: 10, resizeMode: 'contain', margin: 5,
    aspectRatio: 3 / 4,
  },
  HomePhotoimgOne: {
    width: Dimensions.get('window').height * 0.40,
    borderRadius: 10, resizeMode: 'contain', margin: 5,
    height: Dimensions.get('window').height - 500,
  },
  HomePhotoimgTwo: {
    width: Dimensions.get('window').height * 0.20,
    borderRadius: 10, resizeMode: 'contain', margin: 5,
    aspectRatio: 3 / 3,
  },
  //

  spinnerView: { justifyContent: 'center', alignItems: 'center', marginTop: 100 },
  spinnerText: { fontSize: 16, textAlign: 'center', color: '#000000' },
  loader: {
    marginTop: 10,
    alignItems: 'center',
  },
  cateMView: {
    flexDirection: 'row',
    left: 10,
    marginRight: 10,
    flex: 2,
  },
  menuview: {
    // backgroundColor: blackcolor,
    alignItems: 'center',
    marginRight: 10,
    left: 20,
  },
  menutext: {
    // backgroundColor: whitecolor,
    paddingHorizontal: 10,
    textAlign: 'center',
    textAlignVertical: 'center',
    color: blackcolor,
    fontSize: 22,
    fontFamily: 'Lora-Medium',
  },
  latestMainView: { width: Dimensions.get('window').width / 2.2, margin: 5 },
  latestsubView: {
    backgroundColor: whitecolor,
    height: 155, borderRadius: 5,
    borderBottomColor: graycolor, borderBottomWidth: 2,
    borderLeftColor: graycolor, borderLeftWidth: 1,
    borderRightColor: graycolor, borderRightWidth: 1,
  },
  latestimgTag: {
    width: '100%',
    height: 100,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderRightColor: graycolor,
    borderRightWidth: 1,
  },
  latestTxtTag: {
    color: blackcolor, fontFamily: 'Lora-Medium',
    fontSize: 16, lineHeight: 25, left: 5, right: 2, paddingRight: 20,
  },

  photocard: {
    height: Dimensions.get('window').height * 0.32,
    resizeMode: 'contain',
    aspectRatio: 9 / 9,
    borderRadius: 5,

  },
  videocard: {
    height: Dimensions.get('window').height * 0.32,
    resizeMode: 'contain',
    aspectRatio: 10 / 9,
    borderRadius: 5,

  },
  pagination: {
    position: 'relative',
    // top: -20,
  },



  linearGradient: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    height: 100,
    width: '100%',
    position: 'absolute',
    bottom: 0,
    flex: 1,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,

  },

  sliderView: {
    position: 'relative', backgroundColor: 'transparent',
  },

  // latestCard: {
  //   backgroundColor: '#fff',
  //   padding: 5,
  //   elevation: 5,
  //   margin: 5,
  //   // height:120,
  //   borderRadius: 10,
  //   flexDirection: 'row',
  //   flex: 1,
  //   shadowColor: '#000',
  //   shadowOffset: { width: 0, height: 2 },
  //   shadowOpacity: 0.7,
  //   shadowRadius: 2,
  // },
  latestImage: {
    width: '100%', height: screenHeight * 0.12,
    borderRadius: 10,
  },
  cateView: { flexDirection: 'row', marginLeft: 5, width: '100%' },
  cateImage: { width: 120, height: 70,  },
  latestText: {
    color: blackcolor, fontFamily: 'Lora-Medium', fontSize: 16, lineHeight: 20
    , marginLeft: 5, justifyContent: 'center',
  },

  cardViewFirst: {
    backgroundColor: whitecolor,
    padding: 3,
    elevation: 5,
    margin: 5,
    // height:120,
    borderRadius: 10,
    flexDirection: 'row',
    flex: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.7,
    shadowRadius: 2,
  },
  cardView: {
    backgroundColor: whitecolor,
    padding: 3,
    elevation: 5,
    margin: 5,
    // height:120,
    borderRadius: 10,
    flexDirection: 'row',
    flex: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.7,
    shadowRadius: 2,
    borderBottomColor: graycolor, borderBottomWidth: 2,
    borderLeftColor: graycolor, borderLeftWidth: 1,
    borderRightColor: graycolor, borderRightWidth: 1,
  },
  latestViewcard: {
    backgroundColor: whitecolor,
    padding: 5,
    elevation: 5,
    margin: 5,
    width: '100%',
    // height:120,
    borderRadius: 10,
    // flexDirection: 'row',
    // flex: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.7,
    shadowRadius: 2,

  },
  cardViewHome: {
    backgroundColor: whitecolor,
    padding: 5,
    elevation: 3,
    margin: 5,
    borderRadius: 5,
    flex: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.5,
    shadowRadius: 1,
    borderBottomColor: graycolor, borderBottomWidth: 1,
    borderLeftColor: graycolor, borderLeftWidth: 1,
    borderRightColor: graycolor, borderRightWidth: 1,

  },
  cardViewLatest: {
    backgroundColor: whitecolor,
    // padding: 5,
    elevation: 5,
    margin: 5,
    borderRadius: 10,
    flexDirection: 'row',
    flex: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    borderBottomColor: graycolor, borderBottomWidth: 1,
    borderLeftColor: graycolor, borderLeftWidth: 1,
    borderRightColor: graycolor, borderRightWidth: 1,


  },
  cardViewhomevideos: {
    backgroundColor: whitecolor,
    padding: 2,
    elevation: 5,
    margin: 5,
    borderRadius: 5,
    flexDirection: 'row',
    flex: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    // shadowOpacity: 0.2,
    shadowRadius: 1,
    borderBottomColor: graycolor, borderBottomWidth: 1,
    borderLeftColor: graycolor, borderLeftWidth: 1,
    borderRightColor: graycolor, borderRightWidth: 1,

  },
  cinemaText: {
    // color: blackcolor, fontFamily: 'Lora-Medium', fontSize: 22, lineHeight: 29,
    color: blackcolor, fontFamily: 'Lora-Medium', fontSize: 22, lineHeight: 30,
  },
  SportCard: {
    flex: 1,
    backgroundColor: '#fff',
    elevation: 1,
    margin: 5,
    borderRadius: 5,
    height: 170,
    // height: Dimensions.get('window').height * 0.12,
    flexDirection: 'row',
  },

  sportimage: {
    height: Dimensions.get('window').height * 0.12,
    borderRadius: 10, resizeMode: 'center',
  },
  CartoonCard: {
    width: '95%',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: '#fff',
    elevation: 1,
    margin: 10,
    borderRadius: 5,
    height: 'auto',
    flexDirection: 'row',
    paddingRight: 10,
  },
  pcard: {
    // flex: 1,
    width: '95%',
    backgroundColor: '#fff',
    elevation: 1,
    margin: 5,
    borderRadius: 5,
    height: Dimensions.get('window').height * 0.32,
    flexDirection: 'row',
  },
  vcard: {
    // flex: 1,
    width: '95%',
    backgroundColor: whitecolor,
    elevation: 1,
    margin: 5,
    borderRadius: 5,
    height: Dimensions.get('window').height * 0.3,
    flexDirection: 'row',
  },
  pimg: {
    width: '98%', height: 180,
    borderRadius: 10, resizeMode: 'contain', margin: 5,
    // width: '100%', height: 280, resizeMode: "contain",

  },
  vimg: {
    width: '96%', height: 180,
    borderRadius: 10, resizeMode: 'contain', margin: 5,
    // width: '100%', height: 280, resizeMode: "contain",

  },
  cartoonimg: {
    width: '100%',
    height: 210,
    borderRadius: 10, resizeMode: 'contain',
    // aspectRatio: 3 / 2.5,
  },
  photoimage: {
    width: '110%',
    height: Dimensions.get('window').height * 0.13,
    borderRadius: 15,
    resizeMode: 'center',
  },
  SportText: {
    color: blackcolor, fontFamily: 'Lora-Medium', fontSize: 18,
  },
  Detailslargecard: {
    flex: 1,
    height: 230,
    width: '100%',
    
  },


  cateviewText: {
    flex: 1.9,
    fontFamily: 'Lora-Medium', fontSize: 20, lineHeight: 25, justifyContent: 'center',
  },
  cateviewImg: { marginRight: 5, flexDirection: 'row' },
  cateflist: { top: 10, margin: 5 },
  photoflist: { paddingBottom: 150, top: 10, margin: 5 },

  videoImg: {
    width: Dimensions.get('window').width * 0.3,
    height: Dimensions.get('window').height * 0.2,
    borderRadius: 10, resizeMode: 'stretch',
  },

  bgDarkGrey: {
    width: '100%', backgroundColor: '#85929e', paddingTop: 10,
    paddingBottom: 10, paddingRight: 3, paddingLeft: 3,
    borderTopLeftRadius: 8, borderTopRightRadius: 8,
  },
  prevText: {
    color: blackcolor,
    textAlign: 'center', fontSize: 18,
    fontFamily: 'Lora-Medium',
  },
  prevNextMainView: {
    flexDirection: 'row', flex: 1,
    justifyContent: 'space-between',
    marginTop: 5, marginBottom: 5,
  },
  prevView: { flex: 0.25, height: 30, justifyContent: 'center', marginLeft: 10 },
  nextView: { flex: 0.2, height: 30, justifyContent: 'center', marginRight: 10 },
  relatedText: { color: '#000', fontSize: 20, fontFamily: 'Lora-Medium' },
  photoflash: { color: whitecolor, fontSize: 20, fontFamily: 'Lora-Medium' },
  nextText: { color: blackcolor, fontSize: 20, fontFamily: 'Lora-Medium' },
  flashView: {
    backgroundColor: blackcolor,
    borderRadius: 10, margin: 5,
    width: '97%', paddingBottom: 10, marginTop: 10, paddingTop: 10,
  },
  flashtext: {
    color: whitecolor,
    fontFamily: 'Lora-Medium',
    fontSize: 22,
    // marginBottom: 5,
    marginLeft: 10,
    marginRight: 10,
    lineHeight: 29,
    position: 'relative',
    top: 25,
  },
  categoryMview: { flexDirection: 'row' },
  moreview: { alignContent: 'flex-end', alignItems: 'flex-end' },
  moretext: {
    fontFamily: 'Lora-Medium',
    fontSize: 18, color: blackcolor,
  },
  loadingview: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
  },
  loadingtext: {
    fontSize: 16,
    textAlign: 'center',
    color: '#000000',
  },
  // Horoscope new design 17/3 /23
  horoMainView: {
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    flex: 1,
    margin: 5,
    borderBottomColor: graycolor,
    borderBottomWidth: 1.5,
  },
  horoimageView: {
    marginRight: 5,
    flexDirection: 'row'
  },
  horoimage: {
    width: 120, height: 90,
    borderRadius: 5, resizeMode: 'contain'
  },
  horotextView: { flex: 2 },
  horotext: {
    color: blackcolor,
    fontFamily: 'Lora-Medium',
    fontSize: 18,
    lineHeight: 31,
    marginLeft: 5,
    marginVertical: 20,
  },
  horomore: { justifyContent: 'flex-end', alignItems: 'flex-end', alignSelf: 'flex-end' },
  horomoretext: {
    fontFamily: 'Lora-Medium',
    fontSize: 18, color: blackcolor,
  },

});
