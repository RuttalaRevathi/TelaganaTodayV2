/* eslint-disable prettier/prettier */

import {
    GET_RELATED,
    GET_RELATED_SUCCESS,
    GET_RELATED_ERROR,
  } from '../actions/getRelatedAction';

  const initialState = {
    relatedData: [],
    relatedLoading: false,
    error: false,
  };

  function relatedReducer(state = initialState, action) {
    switch (action.type) {
      case GET_RELATED:
        return {...state, relatedLoading: true};
      case GET_RELATED_SUCCESS:
        return {...state, relatedData: action.payload, relatedLoading: false};
              case GET_RELATED_ERROR:
  return {...state, relatedLoading: true, error: true};
      default:
        return state;
    }
  }

  export default relatedReducer;
