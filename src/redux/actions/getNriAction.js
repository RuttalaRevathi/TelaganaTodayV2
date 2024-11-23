/* eslint-disable prettier/prettier */

import { BaseUrl, CategoryUrl, Nri} from '../../utilities/urls';

export const GET_NRI_SUCCESS = 'GET_NRI_SUCCESS';
export const GET_NRI_ERROR = 'GET_NRI_ERROR';
export const GET_NRI = 'GET_NRI';

 const getNriAction = () => {

    try {
      return async dispatch => {
        dispatch({
          type: GET_NRI,
        });
        const result = await fetch(BaseUrl + CategoryUrl + Nri, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const json = await result.json();
        if (json) {
          dispatch({
            type: GET_NRI_SUCCESS,
            payload: json,
          });
        }
  else {
          dispatch({
            type: GET_NRI_ERROR,
          });
          console.log('Unable to fetch!');
        }
      };
    } catch (error) {
      console.log(error);
    }
  };
export default getNriAction;
