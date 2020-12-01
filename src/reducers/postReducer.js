// Step 3:
// Setup Reducer for the store

/*
  What's a Reducer?
    It is a function that takes the current state and 
    an action that was dispatched as it’s parameters and returns the new state.

*/

// Setting up postReducer so that
// we can combine this reducer with other reducers later 
// and make a big object for the store 
// reducer should mandatorily return a state.
// [Refer reducers/index.js] - for Step 4

import { ADD_POST, DELETE_POST, EDIT_POST, GET_POSTS, GET_POST_BY_ID  } from "../actions/types";

const postReducer = (state = [], action) => {
  // Step 8: 
  /* Have [reducers/postReducer.js] to have better switch case statement 
  with much more scalable code by using the action types  */
  // Step 8.1
  // Let's understand actions. 
  // What are Actions?
    //Actions are plain Javascript objects with a type property. 
    //This type property describes the event that is taking place 
    //in the application.
  
    switch(action.type){ // triggered from comp -- during dispatch
      case ADD_POST:
        // Step 8.2 -- 
        // action.type = Event 
        // and action.data = Form Data from Add Post

        // For Step 9-- Refer [PostForm.js]
        return state.concat(action.payload);
      case GET_POSTS:
        return action.posts;
      case GET_POST_BY_ID:
        return action.post;
      case EDIT_POST:
        return action.post;
      case DELETE_POST:
        return action.post;
      default:
        return state;
    }



}
export default postReducer;