/* eslint-disable prettier/prettier */

  import {
    GET_LATEST_NEWS,
    GET_LATEST_NEWS_SUCCESS,
    GET_LATEST_NEWS_ERROR,
  } from '../actions/getLatestNewsAction';
  
  const initialState = {
    latestNews: [],
    latestLoading: false,
    error: false,
  };
  
  function latestNewsReducer(state = initialState, action) {
    switch (action.type) {
      case GET_LATEST_NEWS:
        return {...state, latestLoading: true};
      case GET_LATEST_NEWS_SUCCESS:
        return {...state, latestNews: action.payload, latestLoading: false};
              case GET_LATEST_NEWS_ERROR:
  return {...state, latestLoading: true, error: true};
      default:
        return state;
    }
  }
  
  export default latestNewsReducer;
  