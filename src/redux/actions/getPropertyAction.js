/* eslint-disable prettier/prettier */

import { BaseUrl, CategoryUrl, Property, } from '../../utilities/urls';

export const GET_PROPERTY_SUCCESS = 'GET_PROPERTY_SUCCESS';
export const GET_PROPERTY_ERROR = 'GET_PROPERTY_ERROR';
export const GET_PROPERTY = 'GET_PROPERTY';

 const getPropertyAction = () => {

    try {
      return async dispatch => {
        dispatch({
          type: GET_PROPERTY,
        });
        const result = await fetch(BaseUrl + CategoryUrl + Property, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const json = await result.json();
        if (json) {
          dispatch({
            type: GET_PROPERTY_SUCCESS,
            payload: json,
          });
        }
  else {
          dispatch({
            type: GET_PROPERTY_ERROR,
          });
          console.log('Unable to fetch!');
        }
      };
    } catch (error) {
      console.log(error);
    }
  };
export default getPropertyAction;
