/* eslint-disable prettier/prettier */

import {
    GET_EDUCATION,
    GET_EDUCATION_SUCCESS,
    GET_EDUCATION_ERROR,
  } from '../actions/getEducationAction';

  const initialState = {
    educationData: [],
    educationLoading: false,
    error: false,
  };

  function educationReducer(state = initialState, action) {
    switch (action.type) {
      case GET_EDUCATION:
        return {...state, educationLoading: true};
      case GET_EDUCATION_SUCCESS:
        return {...state, educationData: action.payload, educationLoading: false};
              case GET_EDUCATION_ERROR:
  return {...state, educationLoading: true, error: true};
      default:
        return state;
    }
  }

  export default educationReducer;
