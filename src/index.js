import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Step 0: npm i redux react-redux

// Step 1: Let's begin with creating a store
import { createStore } from 'redux';

// Step 5: 
//let’s import the combineReducer 
//and pass it to the store as an argument.
import rootReducers from './reducers'; 

// Step 2:  Exec createStore() method and save it in a variable 
const store = createStore(rootReducers); //this needs a special argument called 'reducer'
// [Refer reducers/postReducer.js] -- for Step 3


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
