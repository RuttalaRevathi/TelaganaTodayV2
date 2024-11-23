/* eslint-disable prettier/prettier */

import { BaseUrl, CategoryUrl, Education} from '../../utilities/urls';

export const GET_EDUCATION_SUCCESS = 'GET_EDUCATION_SUCCESS';
export const GET_EDUCATION_ERROR = 'GET_EDUCATION_ERROR';
export const GET_EDUCATION = 'GET_EDUCATION';

 const getEducationAction = () => {

    try {
      return async dispatch => {
        dispatch({
          type: GET_EDUCATION,
        });
        const result = await fetch(BaseUrl + CategoryUrl + Education, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const json = await result.json();
        if (json) {
          dispatch({
            type: GET_EDUCATION_SUCCESS,
            payload: json,
          });
        }
  else {
          dispatch({
            type: GET_EDUCATION_ERROR,
          });
          console.log('Unable to fetch!');
        }
      };
    } catch (error) {
      console.log(error);
    }
  };
export default getEducationAction;
