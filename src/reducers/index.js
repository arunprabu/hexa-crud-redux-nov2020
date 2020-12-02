/*
 work on combining all reducers for the entire app
  and have the following code 
*/

// Step 4
// Step 4.1: Combining Reducers using Redux's combineReducers
import {combineReducers} from 'redux';
import {reducer as toastrReducer} from 'react-redux-toastr'

import contactsReducer from './contactsReducer';

//Step 4.2 loading all reducers
import postReducer from './postReducer'; 

////Step 4.3 combine all reducers into one big object for store
const rootReducers = combineReducers({
  postData: postReducer,
  contacts: contactsReducer,
  toastr: toastrReducer
});

//Step 4.4 exporing the rootReducer -- that is the combined reducer
export default rootReducers;

// Step 5: [Refer srs/index.js] -- for setting up store with the rootReducer