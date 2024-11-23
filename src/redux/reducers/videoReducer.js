/* eslint-disable prettier/prettier */

import {
  GET_VIDEOS,
  GET_VIDEOS_SUCCESS,
  GET_VIDEOS_ERROR,
} from '../actions/getVideoAction';

const initialState = {
  videosData: [],
  videosLoading: false,
  error: false,
};

function videoReducer(state = initialState, action) {
  switch (action.type) {
    case GET_VIDEOS:
      return {...state, videosLoading: true};
    case GET_VIDEOS_SUCCESS:
      return {...state, videosData: action.payload, videosLoading: false};
            case GET_VIDEOS_ERROR:
return {...state, videosLoading: true, error: true};
    default:
      return state;
  }
}

export default videoReducer;
