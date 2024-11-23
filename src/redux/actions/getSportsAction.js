/* eslint-disable prettier/prettier */

import { BaseUrl, CategoryUrl, Sports} from '../../utilities/urls';

export const GET_SPORTS_SUCCESS = 'GET_SPORTS_SUCCESS';
export const GET_SPORTS_ERROR = 'GET_SPORTS_ERROR';
export const GET_SPORTS = 'GET_SPORTS';

 const getSportsAction = () => {

    try {
      return async dispatch => {
        dispatch({
          type: GET_SPORTS,
        });
        const result = await fetch(BaseUrl + CategoryUrl + Sports, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const json = await result.json();
        if (json) {
          dispatch({
            type: GET_SPORTS_SUCCESS,
            payload: json,
          });
        }
  else {
          dispatch({
            type: GET_SPORTS_ERROR,
          });
          console.log('Unable to fetch!');
        }
      };
    } catch (error) {
      console.log(error);
    }
  };
export default getSportsAction;
