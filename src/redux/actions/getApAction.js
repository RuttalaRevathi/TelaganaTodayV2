/* eslint-disable prettier/prettier */

import { Ap, BaseUrl, CategoryUrl} from '../../utilities/urls';

export const GET_AP_SUCCESS = 'GET_AP_SUCCESS';
export const GET_AP_ERROR = 'GET_AP_ERROR';
export const GET_AP = 'GET_AP';

 const getApAction = () => {

    try {
      return async dispatch => {
        dispatch({
          type: GET_AP,
        });
        const result = await fetch(BaseUrl + CategoryUrl + Ap, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const json = await result.json();
        if (json) {
          dispatch({
            type: GET_AP_SUCCESS,
            payload: json,
          });
        }
  else {
          dispatch({
            type: GET_AP_ERROR,
          });
          console.log('Unable to fetch!');
        }
      };
    } catch (error) {
      console.log(error);
    }
  };
export default getApAction;
