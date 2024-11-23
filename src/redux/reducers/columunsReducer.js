/* eslint-disable prettier/prettier */

import {
    GET_COLUMUNS,
    GET_COLUMUNS_SUCCESS,
    GET_COLUMUNS_ERROR,
  } from '../actions/getColumunsAction';

  const initialState = {
    columunsData: [],
    columunsLoading: false,
    error: false,
  };

  function columunsReducer(state = initialState, action) {
    switch (action.type) {
      case GET_COLUMUNS:
        return {...state, columunsLoading: true};
      case GET_COLUMUNS_SUCCESS:
        return {...state, columunsData: action.payload, columunsLoading: false};
              case GET_COLUMUNS_ERROR:
  return {...state, columunsLoading: true, error: true};
      default:
        return state;
    }
  }

  export default columunsReducer;
