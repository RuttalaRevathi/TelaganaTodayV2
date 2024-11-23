/* eslint-disable prettier/prettier */

import {
    GET_ARTICLEDETAIL,
    GET_ARTICLEDETAIL_SUCCESS,
    GET_ARTICLEDETAIL_ERROR,
  } from '../actions/getArticleDetailAction';

  const initialState = {
    articleDetailData: [],
    articleDetailLoading: false,
    error: false,
  };

  function articleDetailReducer(state = initialState, action) {
    switch (action.type) {
      case GET_ARTICLEDETAIL:
        return {...state, articleDetailLoading: true};
      case GET_ARTICLEDETAIL_SUCCESS:
        return {...state, articleDetailData: action.payload, articleDetailLoading: false};
              case GET_ARTICLEDETAIL_ERROR:
  return {...state, articleDetailLoading: true, error: true};
      default:
        return state;
    }
  }

  export default articleDetailReducer;
