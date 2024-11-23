/* eslint-disable prettier/prettier */

import {
    GET_AP,
    GET_AP_SUCCESS,
    GET_AP_ERROR,
  } from '../actions/getApAction';

  const initialState = {
    apData: [],
    apLoading: false,
    error: false,
  };

  function apReducer(state = initialState, action) {
    switch (action.type) {
      case GET_AP:
        return {...state, apLoading: true};
      case GET_AP_SUCCESS:
        return {...state, apData: action.payload, apLoading: false};
              case GET_AP_ERROR:
  return {...state, apLoading: true, error: true};
      default:
        return state;
    }
  }

  export default apReducer;
