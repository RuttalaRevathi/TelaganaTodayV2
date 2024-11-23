/* eslint-disable prettier/prettier */

import { BaseUrl, CategoryUrl, Entertainment} from '../../utilities/urls';

export const GET_ENTERTAINMENT_SUCCESS = 'GET_ENTERTAINMENT_SUCCESS';
export const GET_ENTERTAINMENT_ERROR = 'GET_ENTERTAINMENT_ERROR';
export const GET_ENTERTAINMENT = 'GET_ENTERTAINMENT';

 const getEntertainmentAction = () => {

    try {
      return async dispatch => {
        dispatch({
          type: GET_ENTERTAINMENT,
        });
        const result = await fetch(BaseUrl + CategoryUrl + Entertainment, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const json = await result.json();
        if (json) {
          dispatch({
            type: GET_ENTERTAINMENT_SUCCESS,
            payload: json,
          });
        }
  else {
          dispatch({
            type: GET_ENTERTAINMENT_ERROR,
          });
          console.log('Unable to fetch!');
        }
      };
    } catch (error) {
      console.log(error);
    }
  };
export default getEntertainmentAction;
