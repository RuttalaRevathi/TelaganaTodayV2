/* eslint-disable prettier/prettier */

import {
    GET_LIFESTYLE,
    GET_LIFESTYLE_SUCCESS,
    GET_LIFESTYLE_ERROR,
  } from '../actions/getLifestyleAction';

  const initialState = {
    lifestyleData: [],
    lifestyleLoading: false,
    error: false,
  };

  function lifestyleReducer(state = initialState, action) {
    switch (action.type) {
      case GET_LIFESTYLE:
        return {...state, lifestyleLoading: true};
      case GET_LIFESTYLE_SUCCESS:
        return {...state, lifestyleData: action.payload, lifestyleLoading: false};
              case GET_LIFESTYLE_ERROR:
  return {...state, lifestyleLoading: true, error: true};
      default:
        return state;
    }
  }

  export default lifestyleReducer;
