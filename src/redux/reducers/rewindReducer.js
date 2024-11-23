/* eslint-disable prettier/prettier */

import {
    GET_REWIND,
    GET_REWIND_SUCCESS,
    GET_REWIND_ERROR,
  } from '../actions/getRewindAction';

  const initialState = {
    rewindData: [],
    rewindLoading: false,
    error: false,
  };

  function rewindReducer(state = initialState, action) {
    switch (action.type) {
      case GET_REWIND:
        return {...state, rewindLoading: true};
      case GET_REWIND_SUCCESS:
        return {...state, rewindData: action.payload, rewindLoading: false};
              case GET_REWIND_ERROR:
  return {...state, rewindLoading: true, error: true};
      default:
        return state;
    }
  }

  export default rewindReducer;
