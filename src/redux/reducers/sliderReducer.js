/* eslint-disable prettier/prettier */
import {
  GET_SLIDER_DATA,
  GET_SLIDER_DATA_ERROR,
  GET_SLIDER_DATA_SUCCESS,
} from '../actions/getSliderAction';

const initialState = {
  sliderData: [],
  loading: false,
  error: false,
};

function sliderReducer(state = initialState, action) {
  switch (action.type) {
    case GET_SLIDER_DATA:
      return {...state, loading: true};
    case GET_SLIDER_DATA_SUCCESS:
      return {...state, sliderData: action.payload, loading: false};
    case GET_SLIDER_DATA_ERROR:
      return {...state, loading: true, error: false};
    default:
      return state;
  }
}
export default sliderReducer;
