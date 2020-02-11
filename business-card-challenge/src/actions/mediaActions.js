import * as types from '../constants/actionTypes';

// Returns an action type, SELECTED_NAME and the details selected
export const selectNameAction = (name) => ({
  type: types.SELECTED_NAME,
  name
});

export const searchMediaAction = (payload) => ({
    type: types.SEARCH_MEDIA_REQUEST,
    payload
  });