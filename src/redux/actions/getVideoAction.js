/* eslint-disable prettier/prettier */

import { BaseUrl, CategoryUrl, Videos} from '../../utilities/urls';

export const GET_VIDEOS_SUCCESS = 'GET_VIDEOS_SUCCESS';
export const GET_VIDEOS_ERROR = 'GET_VIDEOS_ERROR';
export const GET_VIDEOS = 'GET_VIDEOS';

 const getVideoAction = () => {

    try {
      return async dispatch => {
        dispatch({
          type: GET_VIDEOS,
        });
        const result = await fetch(BaseUrl + CategoryUrl + Videos , {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const json = await result.json();
        if (json) {
          dispatch({
            type: GET_VIDEOS_SUCCESS,
            payload: json,
          });
        }
  else {
          dispatch({
            type: GET_VIDEOS_ERROR,
          });
          console.log('Unable to fetch!');
        }
      };
    } catch (error) {
      console.log(error);
    }
  };
export default getVideoAction;
