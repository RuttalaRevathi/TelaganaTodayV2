/* eslint-disable prettier/prettier */

import {
  GET_TOP_MENU_DATA,
  GET_TOP_MENU_DATA_SUCCESS,
  GET_TOP_MENU_DATA_ERROR,
} from '../actions/getTopMenuDataAction';

const initialState = {
  topMenuData: [],
  topMenuDataLoading: false,
  error: false,
};

function topMenuDataReducer(state = initialState, action) {
  switch (action.type) {
      case GET_TOP_MENU_DATA:
          return {...state, topMenuDataLoading: true};
      case GET_TOP_MENU_DATA_SUCCESS:
          console.log('Updated topMenuData:', action.payload);
          return {...state, topMenuData: action.payload, topMenuDataLoading: false};
      case GET_TOP_MENU_DATA_ERROR:
          return {...state, topMenuDataLoading: false, error: true};
      default:
          return state;
  }
}

export default topMenuDataReducer;
