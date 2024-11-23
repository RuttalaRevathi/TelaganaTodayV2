/* eslint-disable prettier/prettier */

import {
    GET_HYDERABAD,
    GET_HYDERABAD_SUCCESS,
    GET_HYDERABAD_ERROR,
  } from '../actions/getHyderabadAction';

  const initialState = {
    hyderabadData: [],
    hyderabadLoading: false,
    error: false,
  };

  function hyderabadReducer(state = initialState, action) {
    switch (action.type) {
      case GET_HYDERABAD:
        return {...state, hyderabadLoading: true};
      case GET_HYDERABAD_SUCCESS:
        return {...state, hyderabadData: action.payload, hyderabadLoading: false};
              case GET_HYDERABAD_ERROR:
  return {...state, hyderabadLoading: true, error: true};
      default:
        return state;
    }
  }

  export default hyderabadReducer;
