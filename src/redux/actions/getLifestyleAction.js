/* eslint-disable prettier/prettier */

import { BaseUrl, CategoryUrl, Lifestyle,} from '../../utilities/urls';

export const GET_LIFESTYLE_SUCCESS = 'GET_LIFESTYLE_SUCCESS';
export const GET_LIFESTYLE_ERROR = 'GET_LIFESTYLE_ERROR';
export const GET_LIFESTYLE = 'GET_LIFESTYLE';

 const getLifestyleAction = () => {

    try {
      return async dispatch => {
        dispatch({
          type: GET_LIFESTYLE,
        });
        const result = await fetch(BaseUrl + CategoryUrl + Lifestyle, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
         
        });
        const json = await result.json();
        if (json) {
          dispatch({
            type: GET_LIFESTYLE_SUCCESS,
            payload: json,
          });
        }
  else {
          dispatch({
            type: GET_LIFESTYLE_ERROR,
          });
          console.log('Unable to fetch!');
        }
      };
    } catch (error) {
      console.log(error);
    }
  };
export default getLifestyleAction;
