/* eslint-disable prettier/prettier */

import {
    GET_BUSINESS,
    GET_BUSINESS_SUCCESS,
    GET_BUSINESS_ERROR,
  } from '../actions/getBusinessAction';

  const initialState = {
    businessData: [],
    businessLoading: false,
    error: false,
  };

  function businessReducer(state = initialState, action) {
    switch (action.type) {
      case GET_BUSINESS:
        return {...state, businessLoading: false};
      case GET_BUSINESS_SUCCESS:
      return {...state, businessData: action.payload, businessLoading: true};
              case GET_BUSINESS_ERROR:
  return {...state, businessLoading: false, error: true};
      default:
        return state;
    }
  }

  export default businessReducer;
