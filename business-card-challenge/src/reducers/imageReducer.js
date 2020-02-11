import initialState from './initialState';
import * as types from '../constants/actionTypes';

// Handles image related actions
export default function (state = initialState.names, action) {
  switch (action.type) {
    case types.JSONPLACEHOLDER_NAMES_SUCCESS:
      return [...state, action.JSONPLACEHOLDER_NAMES_SUCCESS];
    case types.SELECTED_NAME:
      return [...state, action.SELECTED_NAME];
    
    default:
      return state;
  }
}