import { combineReducers } from 'redux';
import names from './imageReducer';


// Combines all reducers to a single reducer function
const rootReducer = combineReducers({
  names
});

export default rootReducer;