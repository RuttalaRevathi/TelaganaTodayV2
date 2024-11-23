/* eslint-disable prettier/prettier */

import {
    GET_TELANGANA,
    GET_TELANGANA_SUCCESS,
    GET_TELANGANA_ERROR,
  } from '../actions/getTelanganaAction';

  const initialState = {
    telanganaData: [],
    telanganaLoading: false,
    error: false,
  };

  function telanganaReducer(state = initialState, action) {
    switch (action.type) {
      case GET_TELANGANA:
        return {...state, telanganaLoading: true};
      case GET_TELANGANA_SUCCESS:
        return {...state, telanganaData: action.payload, telanganaLoading: false};
              case GET_TELANGANA_ERROR:
  return {...state, telanganaLoading: true, error: true};
      default:
        return state;
    }
  }

  export default telanganaReducer;
