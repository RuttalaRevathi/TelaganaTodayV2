/* eslint-disable prettier/prettier */

import { BaseUrl, WebstoriesUrl} from '../../utilities/urls';

export const GET_WEBSTORIES_SUCCESS = 'GET_WEBSTORIES_SUCCESS';
export const GET_WEBSTORIES_ERROR = 'GET_WEBSTORIES_ERROR';
export const GET_WEBSTORIES = 'GET_WEBSTORIES';

 const getWebstoriesAction = () => {

    try {
      return async dispatch => {
        dispatch({
          type: GET_WEBSTORIES,
        });
        const result = await fetch(BaseUrl + WebstoriesUrl, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
         
        });
        // console.log(result,"------>result");
        const json = await result.json();
        if (json) {
          dispatch({
            type: GET_WEBSTORIES_SUCCESS,
            payload: json,
          });
        }
  else {
          dispatch({
            type: GET_WEBSTORIES_ERROR,
          });
          console.log('Unable to fetch!');
        }
      };
    } catch (error) {
      console.log(error);
    }
  };
export default getWebstoriesAction;
