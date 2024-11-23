/* eslint-disable prettier/prettier */

import { BaseUrl, CategoryUrl, Columuns, } from '../../utilities/urls';

export const GET_COLUMUNS_SUCCESS = 'GET_COLUMUNS_SUCCESS';
export const GET_COLUMUNS_ERROR = 'GET_COLUMUNS_ERROR';
export const GET_COLUMUNS = 'GET_COLUMUNS';

 const getColumunsAction = () => {

    try {
      return async dispatch => {
        dispatch({
          type: GET_COLUMUNS,
        });
        const result = await fetch(BaseUrl + CategoryUrl + Columuns, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const json = await result.json();
        if (json) {
          dispatch({
            type: GET_COLUMUNS_SUCCESS,
            payload: json,
          });
        }
  else {
          dispatch({
            type: GET_COLUMUNS_ERROR,
          });
          console.log('Unable to fetch!');
        }
      };
    } catch (error) {
      console.log(error);
    }
  };
export default getColumunsAction;
