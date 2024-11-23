/* eslint-disable prettier/prettier */

import { BaseUrl, CategoryUrl,Rewind} from '../../utilities/urls';

export const GET_REWIND_SUCCESS = 'GET_REWIND_SUCCESS';
export const GET_REWIND_ERROR = 'GET_REWIND_ERROR';
export const GET_REWIND = 'GET_REWIND';

 const getRewindAction = () => {

    try {
      return async dispatch => {
        dispatch({
          type: GET_REWIND,
        });
        const result = await fetch(BaseUrl + CategoryUrl + Rewind, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const json = await result.json();
        if (json) {
          dispatch({
            type: GET_REWIND_SUCCESS,
            payload: json,
          });
        }
  else {
          dispatch({
            type: GET_REWIND_ERROR,
          });
          console.log('Unable to fetch!');
        }
      };
    } catch (error) {
      console.log(error);
    }
  };
export default getRewindAction;
