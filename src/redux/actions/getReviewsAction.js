/* eslint-disable prettier/prettier */

import { BaseUrl, CategoryUrl, Reviews,} from '../../utilities/urls';

export const GET_REVIEWS_SUCCESS = 'GET_REVIEWS_SUCCESS';
export const GET_REVIEWS_ERROR = 'GET_REVIEWS_ERROR';
export const GET_REVIEWS = 'GET_REVIEWS';

 const getReviewsAction = () => {

    try {
      return async dispatch => {
        dispatch({
          type: GET_REVIEWS,
        });
        const result = await fetch(BaseUrl + CategoryUrl + Reviews, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const json = await result.json();
        if (json) {
          dispatch({
            type: GET_REVIEWS_SUCCESS,
            payload: json,
          });
        }
  else {
          dispatch({
            type: GET_REVIEWS_ERROR,
          });
          console.log('Unable to fetch!');
        }
      };
    } catch (error) {
      console.log(error);
    }
  };
export default getReviewsAction;
