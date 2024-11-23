/* eslint-disable prettier/prettier */

import {
    GET_ENTERTAINMENT,
    GET_ENTERTAINMENT_SUCCESS,
    GET_ENTERTAINMENT_ERROR,
  } from '../actions/getEntertainmentAction';

  const initialState = {
    entertainmentData: [],
    entertainmentLoading: false,
    error: false,
  };

  function entertainmentReducer(state = initialState, action) {
    switch (action.type) {
      case GET_ENTERTAINMENT:
        return {...state, entertainmentLoading: true};
      case GET_ENTERTAINMENT_SUCCESS:
        return {...state, entertainmentData: action.payload, entertainmentLoading: false};
              case GET_ENTERTAINMENT_ERROR:
  return {...state, entertainmentLoading: true, error: true};
      default:
        return state;
    }
  }

  export default entertainmentReducer;
