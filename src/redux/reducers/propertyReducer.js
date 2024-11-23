/* eslint-disable prettier/prettier */

import {
    GET_PROPERTY,
    GET_PROPERTY_SUCCESS,
    GET_PROPERTY_ERROR,
  } from '../actions/getPropertyAction';

  const initialState = {
    propertyData: [],
    propertyLoading: false,
    error: false,
  };

  function propertyReducer(state = initialState, action) {
    switch (action.type) {
      case GET_PROPERTY:
        return {...state, propertyLoading: true};
      case GET_PROPERTY_SUCCESS:
        return {...state, propertyData: action.payload, propertyLoading: false};
              case GET_PROPERTY_ERROR:
  return {...state, propertyLoading: true, error: true};
      default:
        return state;
    }
  }

  export default propertyReducer;
