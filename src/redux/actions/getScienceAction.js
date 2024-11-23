/* eslint-disable prettier/prettier */

import { BaseUrl, CategoryUrl, Science} from '../../utilities/urls';

export const GET_SCIENCE_SUCCESS = 'GET_SCIENCE_SUCCESS';
export const GET_SCIENCE_ERROR = 'GET_SCIENCE_ERROR';
export const GET_SCIENCE = 'GET_SCIENCE';

 const getScienceAction = () => {

    try {
      return async dispatch => {
        dispatch({
          type: GET_SCIENCE,
        });
        const result = await fetch(BaseUrl + CategoryUrl + Science, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const json = await result.json();
        if (json) {
          dispatch({
            type: GET_SCIENCE_SUCCESS,
            payload: json,
          });
        }
  else {
          dispatch({
            type: GET_SCIENCE_ERROR,
          });
          console.log('Unable to fetch!');
        }
      };
    } catch (error) {
      console.log(error);
    }
  };
export default getScienceAction;
