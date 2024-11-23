/* eslint-disable prettier/prettier */

import {
    GET_VIEWPOINT,
    GET_VIEWPOINT_SUCCESS,
    GET_VIEWPOINT_ERROR,
  } from '../actions/getViewpointAction';

  const initialState = {
    viewpointData: [],
    viewpointLoading: false,
    error: false,
  };

  function viewpointReducer(state = initialState, action) {
    switch (action.type) {
      case GET_VIEWPOINT:
        return {...state, viewpointLoading: true};
      case GET_VIEWPOINT_SUCCESS:
        return {...state, viewpointData: action.payload, viewpointLoading: false};
              case GET_VIEWPOINT_ERROR:
  return {...state, viewpointLoading: true, error: true};
      default:
        return state;
    }
  }

  export default viewpointReducer;
