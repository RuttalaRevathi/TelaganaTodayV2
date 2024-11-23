/* eslint-disable prettier/prettier */

import { articleDetails, BaseUrl,} from '../../utilities/urls';

export const GET_ARTICLEDETAIL_SUCCESS = 'GET_ARTICLEDETAIL_SUCCESS';
export const GET_ARTICLEDETAIL_ERROR = 'GET_ARTICLEDETAIL_ERROR';
export const GET_ARTICLEDETAIL = 'GET_ARTICLEDETAIL';

 const getArticleDetailAction = (article_id) => {

    try {
      return async dispatch => {
        dispatch({
          type: GET_ARTICLEDETAIL,
        });
        const result = await fetch(BaseUrl + articleDetails + '?id=' + article_id, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const json = await result.json();
        if (json) {
          dispatch({
            type: GET_ARTICLEDETAIL_SUCCESS,
            payload: json,
          });
        }
  else {
          dispatch({
            type: GET_ARTICLEDETAIL_ERROR,
          });
          console.log('Unable to fetch!');
        }
      };
    } catch (error) {
      console.log(error);
    }
  };
export default getArticleDetailAction;
