/* eslint-disable prettier/prettier */

import {
    GET_WORLD,
    GET_WORLD_SUCCESS,
    GET_WORLD_ERROR,
  } from '../actions/getWorldAction';

  const initialState = {
    worldData: [],
    worldLoading: false,
    error: false,
  };

  function worldReducer(state = initialState, action) {
    switch (action.type) {
      case GET_WORLD:
        return {...state, worldLoading: true};
      case GET_WORLD_SUCCESS:
        return {...state, worldData: action.payload, worldLoading: false};
              case GET_WORLD_ERROR:
  return {...state, worldLoading: true, error: true};
      default:
        return state;
    }
  }

  export default worldReducer;
