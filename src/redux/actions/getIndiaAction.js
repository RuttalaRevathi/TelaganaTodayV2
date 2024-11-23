/* eslint-disable prettier/prettier */

import {  BaseUrl, CategoryUrl, India} from '../../utilities/urls';

export const GET_INDIA_SUCCESS = 'GET_INDIA_SUCCESS';
export const GET_INDIA_ERROR = 'GET_INDIA_ERROR';
export const GET_INDIA = 'GET_INDIA';

 const getIndiaAction = () => {

    try {
      return async dispatch => {
        dispatch({
          type: GET_INDIA,
        });
        const result = await fetch(BaseUrl + CategoryUrl + India, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const json = await result.json();
        if (json) {
          dispatch({
            type: GET_INDIA_SUCCESS,
            payload: json,
          });
        }
  else {
          dispatch({
            type: GET_INDIA_ERROR,
          });
          console.log('Unable to fetch!');
        }
      };
    } catch (error) {
      console.log(error);
    }
  };
export default getIndiaAction;
