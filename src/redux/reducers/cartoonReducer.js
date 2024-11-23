/* eslint-disable prettier/prettier */

import {
    GET_CARTOON,
    GET_CARTOON_SUCCESS,
    GET_CARTOON_ERROR,
  } from '../actions/getCartoonAction';

  const initialState = {
    cartoonData: [],
    cartoonLoading: false,
    error: false,
  };

  function cartoonReducer(state = initialState, action) {
    switch (action.type) {
      case GET_CARTOON:
        return {...state, cartoonLoading: true};
      case GET_CARTOON_SUCCESS:
        return {...state, cartoonData: action.payload, cartoonLoading: false};
              case GET_CARTOON_ERROR:
  return {...state, cartoonLoading: true, error: true};
      default:
        return state;
    }
  }

  export default cartoonReducer;
