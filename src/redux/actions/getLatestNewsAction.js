/* eslint-disable prettier/prettier */

import { BaseUrl, CategoryUrl, Hyderabad, LatestUrl, Slider } from "../../utilities/urls";

export const GET_LATEST_NEWS_SUCCESS = 'GET_LATEST_NEWS_SUCCESS';
export const GET_LATEST_NEWS_ERROR = 'GET_LATEST_NEWS_ERROR';
export const GET_LATEST_NEWS = 'GET_LATEST_NEWS';

 const getLatestNewsAction = () => {
    try {
      return async dispatch => {
        dispatch({
          type: GET_LATEST_NEWS,
        });
        const result = await fetch(BaseUrl + LatestUrl, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const json = await result.json();
        if (json) {
          dispatch({
            type: GET_LATEST_NEWS_SUCCESS,
            payload: json,
          });
        }
  else {
          dispatch({
            type: GET_LATEST_NEWS_ERROR,
          });
          console.log('Unable to fetch!');
        }
      };
    } catch (error) {
      console.log(error);
    }
  };
export default getLatestNewsAction;
