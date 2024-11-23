/* eslint-disable prettier/prettier */

import { BaseUrl, MenuUrl,} from '../../utilities/urls';

export const GET_TOP_MENU_DATA_SUCCESS = 'GET_TOP_MENU_DATA_SUCCESS';
export const GET_TOP_MENU_DATA_ERROR = 'GET_TOP_MENU_DATA_ERROR';
export const GET_TOP_MENU_DATA = 'GET_TOP_MENU_DATA';

const getTopMenuDataAction = () => {
  return async dispatch => {
    try {
      console.log('Dispatching GET_TOP_MENU_DATA');
      dispatch({ type: GET_TOP_MENU_DATA });

      console.log('Fetching data from:', BaseUrl + MenuUrl);
      const result = await fetch(BaseUrl + MenuUrl, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const json = await result.json();
      console.log('Fetched data:', json);

      if (json) {
        dispatch({ type: GET_TOP_MENU_DATA_SUCCESS, payload: json });
      } else {
        dispatch({ type: GET_TOP_MENU_DATA_ERROR });
        console.log('Unable to fetch!');
      }
    } catch (error) {
      console.log('Error fetching data:', error);
      dispatch({ type: GET_TOP_MENU_DATA_ERROR });
    }
  };
};
