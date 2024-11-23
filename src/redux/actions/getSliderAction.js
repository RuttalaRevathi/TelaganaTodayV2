/* eslint-disable prettier/prettier */

import { BaseUrl, Slider } from "../../utilities/urls";

export const GET_SLIDER_DATA = 'GET_SLIDER_DATA';
export const GET_SLIDER_DATA_SUCCESS = 'GET_SLIDER_DATA_SUCCESS';
export const GET_SLIDER_DATA_ERROR = 'GET_SLIDER_DATA_ERROR';

const getSliderAction = () => {
  try {
    return async dispatch => {
      dispatch({
        type: GET_SLIDER_DATA,
      });
      const result = await fetch(BaseUrl + Slider, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const json = await result.json();

      if (json) {
        dispatch({
          type: GET_SLIDER_DATA_SUCCESS,
          payload: json,
        });
      } else {
        dispatch({
          type: GET_SLIDER_DATA_ERROR,
        });
        console.log('Unable to fetch!');
      }
    };
  } catch (error) {
    console.log(error);
  }
};
export default getSliderAction;
