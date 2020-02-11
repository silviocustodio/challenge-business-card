import { put, call } from 'redux-saga/effects';
import { jsonPlaceHolder } from '../Api/api';
import * as types from '../constants/actionTypes';

// Responsible for searching media library, making calls to the API
// and instructing the redux-saga middle ware on the next line of action,
// for success or failure operation.
export function* searchMediaSaga({ payload }) {
  try {
    const names = yield call(jsonPlaceHolder, payload);
   
    yield [
      put({ type: types.JSONPLACEHOLDER_NAMES_SUCCESS, names }),
      put({ type: types.SELECTED_NAME, name: names[0] }),
      
    ];
  } catch (error) {
    yield put({ type: 'SEARCH_MEDIA_ERROR', error });
  }
}