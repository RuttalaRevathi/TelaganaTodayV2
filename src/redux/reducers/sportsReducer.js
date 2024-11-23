/* eslint-disable prettier/prettier */

import {
    GET_SPORTS,
    GET_SPORTS_SUCCESS,
    GET_SPORTS_ERROR,
  } from '../actions/getSportsAction';

  const initialState = {
    sportsData: [],
    sportsLoading: false,
    error: false,
  };

  function sportsReducer(state = initialState, action) {
    switch (action.type) {
      case GET_SPORTS:
        return {...state, sportsLoading: true};
      case GET_SPORTS_SUCCESS:
        return {...state, sportsData: action.payload, sportsLoading: false};
              case GET_SPORTS_ERROR:
  return {...state, sportsLoading: true, error: true};
      default:
        return state;
    }
  }

  export default sportsReducer;
