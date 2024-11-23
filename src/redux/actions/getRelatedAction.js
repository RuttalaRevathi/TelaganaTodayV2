/* eslint-disable prettier/prettier */

import { BaseUrl, CategoryUrl, RelatedUrl} from '../../utilities/urls';

export const GET_RELATED_SUCCESS = 'GET_RELATED_SUCCESS';
export const GET_RELATED_ERROR = 'GET_RELATED_ERROR';
export const GET_RELATED = 'GET_RELATED';

 const getRelatedAction = (relate_id) => {

    try {
      return async dispatch => {
        dispatch({
          type: GET_RELATED,
        });
        const result = await fetch(BaseUrl + RelatedUrl + '?id=' + relate_id, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const json = await result.json();
        if (json) {
          dispatch({
            type: GET_RELATED_SUCCESS,
            payload: json,
          });
        }
  else {
          dispatch({
            type: GET_RELATED_ERROR,
          });
          console.log('Unable to fetch!');
        }
      };
    } catch (error) {
      console.log(error);
    }
  };
export default getRelatedAction;
