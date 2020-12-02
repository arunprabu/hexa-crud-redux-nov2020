import React from 'react';
import ReactDOM from 'react-dom';
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import ReduxToastr from 'react-redux-toastr'


// Step 0: npm i redux react-redux

// Step 1: Let's begin with creating a store
import { createStore, applyMiddleware } from 'redux'; 
// step 14.3 - use redux-thunk middleware for async actions -- Refer the above line

// Step 5: 
//let’s import the combineReducer 
//and pass it to the store as an argument.
import rootReducers from './reducers'; 

// Step 6: Let's work on providing the store dato to the entire comp
//  [In src/index.js] inside the ReactDOM.render() block,
// Provide the store data to the entire app 
import { Provider } from 'react-redux'; 
//Definition: The Provider component uses something 
//called as React Context which allows you to pass the 
//store object to any components 
//that needs to access it without the need to pass props.
//Provider should be imported from react-redux 
// Refer [actions/types.js] for Step 7

// Step 14.2
// setting up logger middleware and redux-thunk middleware
import logger from 'redux-logger'; // npm i redux-logger 
import thunk from 'redux-thunk';  //npm i redux-thunk
// to setup redux devtools
import { composeWithDevTools } from 'redux-devtools-extension';

// Step 2:  Exec createStore() method and save it in a variable 
const store = createStore(rootReducers, composeWithDevTools(applyMiddleware(thunk, logger))); //this needs a special argument called 'reducer'
// [Refer reducers/postReducer.js] -- for Step 3

ReactDOM.render(
  <React.StrictMode>
    {/* this is how we have to provide store data to the app  */}
    <Provider store={store}> 
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
