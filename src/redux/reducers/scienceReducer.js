/* eslint-disable prettier/prettier */

import {
    GET_SCIENCE,
    GET_SCIENCE_SUCCESS,
    GET_SCIENCE_ERROR,
  } from '../actions/getScienceAction';

  const initialState = {
    scienceData: [],
    scienceLoading: false,
    error: false,
  };

  function scienceReducer(state = initialState, action) {
    switch (action.type) {
      case GET_SCIENCE:
        return {...state, scienceLoading: true};
      case GET_SCIENCE_SUCCESS:
        return {...state, scienceData: action.payload, sciencegLoading: false};
              case GET_SCIENCE_ERROR:
  return {...state, scienceLoading: true, error: true};
      default:
        return state;
    }
  }

  export default scienceReducer;
