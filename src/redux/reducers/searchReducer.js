import {SHOW_SEARCH, HIDE_SEARCH} from '../actions/getSearchAction';

const initialState = {
  showSearch: false,
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_SEARCH:
      return {...state, showSearch: true};
    case HIDE_SEARCH:
      return {...state, showSearch: false};
    default:
      return state;
  }
};

export default searchReducer;
