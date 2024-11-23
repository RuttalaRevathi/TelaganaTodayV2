/* eslint-disable prettier/prettier */

import {
    GET_REVIEWS,
    GET_REVIEWS_SUCCESS,
    GET_REVIEWS_ERROR,
  } from '../actions/getReviewsAction';

  const initialState = {
    reviewsData: [],
    reviewsLoading: false,
    error: false,
  };

  function reviewsReducer(state = initialState, action) {
    switch (action.type) {
      case GET_REVIEWS:
        return {...state, reviewsLoading: true};
      case GET_REVIEWS_SUCCESS:
        return {...state, reviewsData: action.payload, reviewsLoading: false};
              case GET_REVIEWS_ERROR:
  return {...state, reviewsLoading: true, error: true};
      default:
        return state;
    }
  }

  export default reviewsReducer;
