/* eslint-disable prettier/prettier */

import {
    GET_NRI,
    GET_NRI_SUCCESS,
    GET_NRI_ERROR,
  } from '../actions/getNriAction';

  const initialState = {
    nriData: [],
    nriLoading: false,
    error: false,
  };

  function nriReducer(state = initialState, action) {
    switch (action.type) {
      case GET_NRI:
        return {...state, nriLoading: true};
      case GET_NRI_SUCCESS:
        return {...state, nriData: action.payload, nriLoading: false};
              case GET_NRI_ERROR:
  return {...state, nriLoading: true, error: true};
      default:
        return state;
    }
  }

  export default nriReducer;
