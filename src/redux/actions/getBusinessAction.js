/* eslint-disable prettier/prettier */

import { BaseUrl, Business, CategoryUrl} from '../../utilities/urls';

export const GET_BUSINESS_SUCCESS = 'GET_BUSINESS_SUCCESS';
export const GET_BUSINESS_ERROR = 'GET_BUSINESS_ERROR';
export const GET_BUSINESS = 'GET_BUSINESS';

 const getBusinessAction = () => {

    try {
      return async dispatch => {
        dispatch({
          type: GET_BUSINESS,
        });
        const result = await fetch(BaseUrl + CategoryUrl + Business, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const json = await result.json();
        if (json) {
          dispatch({
            type: GET_BUSINESS_SUCCESS,
            payload: json,
          });
        }
  else {
          dispatch({
            type: GET_BUSINESS_ERROR,
          });
          console.log('Unable to fetch!');
        }
      };
    } catch (error) {
      console.log(error);
    }
  };
export default getBusinessAction;
