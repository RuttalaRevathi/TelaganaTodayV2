/* eslint-disable prettier/prettier */

import { BaseUrl, CategoryUrl, Hyderabad} from '../../utilities/urls';

export const GET_HYDERABAD_SUCCESS = 'GET_HYDERABAD_SUCCESS';
export const GET_HYDERABAD_ERROR = 'GET_HYDERABAD_ERROR';
export const GET_HYDERABAD = 'GET_HYDERABAD';

 const getHyderabadAction = () => {

    try {
      return async dispatch => {
        dispatch({
          type: GET_HYDERABAD,
        });
        const result = await fetch(BaseUrl + CategoryUrl + Hyderabad, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const json = await result.json();
        if (json) {
          dispatch({
            type: GET_HYDERABAD_SUCCESS,
            payload: json,
          });
        }
  else {
          dispatch({
            type: GET_HYDERABAD_ERROR,
          });
          console.log('Unable to fetch!');
        }
      };
    } catch (error) {
      console.log(error);
    }
  };
export default getHyderabadAction;
