/* eslint-disable prettier/prettier */

import {
    GET_WEBSTORIES,
    GET_WEBSTORIES_SUCCESS,
    GET_WEBSTORIES_ERROR,
  } from '../actions/getWebstoriesAction';

  const initialState = {
    webstoriesData: [],
    webstoriesLoading: false,
    error: false,
  };

  function webstoriesReducer(state = initialState, action) {
    switch (action.type) {
      case GET_WEBSTORIES:
        return {...state, webstoriesLoading: true};
      case GET_WEBSTORIES_SUCCESS:
        return {...state, webstoriesData: action.payload, webstoriesLoading: false};
              case GET_WEBSTORIES_ERROR:
  return {...state, webstoriesLoading: true, error: true};
      default:
        return state;
    }
  }

  export default webstoriesReducer;
