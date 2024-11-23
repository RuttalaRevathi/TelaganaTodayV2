/* eslint-disable prettier/prettier */

import { BaseUrl,  Cartoonurl,  CategoryUrl} from '../../utilities/urls';

export const GET_CARTOON_SUCCESS = 'GET_CARTOON_SUCCESS';
export const GET_CARTOON_ERROR = 'GET_CARTOON_ERROR';
export const GET_CARTOON = 'GET_CARTOON';

 const getCartoonAction = () => {

    try {
      return async dispatch => {
        dispatch({
          type: GET_CARTOON,
        });
        const result = await fetch(BaseUrl + CategoryUrl + Cartoonurl, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const json = await result.json();
        if (json) {
          dispatch({
            type: GET_CARTOON_SUCCESS,
            payload: json,
          });
        }
  else {
          dispatch({
            type: GET_CARTOON_ERROR,
          });
          console.log('Unable to fetch!');
        }
      };
    } catch (error) {
      console.log(error);
    }
  };
export default getCartoonAction;
