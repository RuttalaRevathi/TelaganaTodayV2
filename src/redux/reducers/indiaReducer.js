/* eslint-disable prettier/prettier */

import {
    GET_INDIA,
    GET_INDIA_SUCCESS,
    GET_INDIA_ERROR,
  } from '../actions/getIndiaAction';

  const initialState = {
    indiaData: [],
    indiaLoading: false,
    error: false,
  };

  function indiaReducer(state = initialState, action) {
    switch (action.type) {
      case GET_INDIA:
        return {...state, indiaLoading: true};
      case GET_INDIA_SUCCESS:
        return {...state, indiaData: action.payload, indiaLoading: false};
              case GET_INDIA_ERROR:
  return {...state, indiaLoading: true, error: true};
      default:
        return state;
    }
  }

  export default indiaReducer;
