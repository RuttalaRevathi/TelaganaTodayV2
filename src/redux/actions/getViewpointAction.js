/* eslint-disable prettier/prettier */

import { BaseUrl, CategoryUrl, Viewpoint} from '../../utilities/urls';

export const GET_VIEWPOINT_SUCCESS = 'GET_VIEWPOINT_SUCCESS';
export const GET_VIEWPOINT_ERROR = 'GET_VIEWPOINT_ERROR';
export const GET_VIEWPOINT = 'GET_VIEWPOINT';

 const getViewpointAction = () => {

    try {
      return async dispatch => {
        dispatch({
          type: GET_VIEWPOINT,
        });
        const result = await fetch(BaseUrl + CategoryUrl + Viewpoint, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const json = await result.json();
        if (json) {
          dispatch({
            type: GET_VIEWPOINT_SUCCESS,
            payload: json,
          });
        }
  else {
          dispatch({
            type: GET_VIEWPOINT_ERROR,
          });
          console.log('Unable to fetch!');
        }
      };
    } catch (error) {
      console.log(error);
    }
  };
export default getViewpointAction;
