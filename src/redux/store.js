/* eslint-disable prettier/prettier */
import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import sliderReducer from '../redux/reducers/sliderReducer';
import latestNewsReducer from '../redux/reducers/latestNewsReducer';
import hyderabadReducer from '../redux/reducers/hyderabadReducer';
import cartoonReducer from '../redux/reducers/cartoonReducer';
import telanganaReducer from '../redux/reducers/telanganaReducer';
import apReducer from '../redux/reducers/apReducer';
import sportsReducer from '../redux/reducers/sportsReducer';
import businessReducer from '../redux/reducers/businessReducer';
import nriReducer from '../redux/reducers/nriReducer';
import relatedReducer from '../redux/reducers/relatedReducer';
import videoReducer from '../redux/reducers/videoReducer';
import articleDetailReducer from '../redux/reducers/articleDetailReducer';
import topMenuDataReducer from './reducers/topMenuDataReducer';
import columunsReducer from './reducers/columunsReducer';
import lifestyleReducer from './reducers/lifestyleReducer';
import propertyReducer from './reducers/propertyReducer';
import reviewsReducer from './reducers/reviewsReducer';
import educationReducer from './reducers/educationReducer';
import viewpointReducer from './reducers/viewpointReducer';
import rewindReducer from './reducers/rewindReducer';
import scienceReducer from './reducers/scienceReducer';
import entertainmentReducer from './reducers/entertainmentReducer';
import worldReducer from './reducers/worldReducer';
import indiaReducer from './reducers/indiaReducer';
import webstoriesReducer from './reducers/webstoriesReducer';
import searchReducer from './reducers/searchReducer';
const rootReducer = combineReducers({sliderReducer,latestNewsReducer,hyderabadReducer,
cartoonReducer,telanganaReducer,apReducer,columunsReducer,sportsReducer,businessReducer,
nriReducer,relatedReducer,videoReducer,articleDetailReducer,topMenuDataReducer,lifestyleReducer,
propertyReducer,reviewsReducer,educationReducer,viewpointReducer,rewindReducer,scienceReducer,
entertainmentReducer,worldReducer,indiaReducer,webstoriesReducer,search: searchReducer,
});
export const store = createStore(rootReducer, applyMiddleware(thunk));
