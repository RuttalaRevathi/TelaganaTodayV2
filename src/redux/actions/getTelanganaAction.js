/* eslint-disable prettier/prettier */

import { BaseUrl, CategoryUrl, Telangana} from '../../utilities/urls';

export const GET_TELANGANA_SUCCESS = 'GET_TELANGANA_SUCCESS';
export const GET_TELANGANA_ERROR = 'GET_TELANGANA_ERROR';
export const GET_TELANGANA = 'GET_TELANGANA';

 const getTelanganaAction = () => {

    try {
      return async dispatch => {
        dispatch({
          type: GET_TELANGANA,
        });
        const result = await fetch(BaseUrl + CategoryUrl + Telangana, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const json = await result.json();
        if (json) {
          dispatch({
            type: GET_TELANGANA_SUCCESS,
            payload: json,
          });
        }
  else {
          dispatch({
            type: GET_TELANGANA_ERROR,
          });
          console.log('Unable to fetch!');
        }
      };
    } catch (error) {
      console.log(error);
    }
  };
export default getTelanganaAction;
