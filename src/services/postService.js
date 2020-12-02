/* Step 12 Create a file [services/postService.js] 
  and then have the following logic in it */

import axios from 'axios';
import { ADD_POST, DELETE_POST, EDIT_POST, GET_POSTS, GET_POST_BY_ID } from '../actions/types';
const POSTS_API_URL = 'https://jsonplaceholder.typicode.com/posts';

// util function for all your ajax calls
const callApi = (URL, data, dispatch) => {
  return axios.post(URL, data)
            .then( (res) => {
              console.log(res);
              dispatch(createPostSuccess(res));
            })
            .catch( (err) => {
              console.log(err);
              throw(err);
            })
            .finally( () => {
              console.log('It is over!');
            });
}

const createPostSuccess = (res) => {
  return {
    type: ADD_POST,
    payload: {
      id: res.data.id,
      title: res.data.title,
      body: res.data.body
    }
  }
}

// For Step 13 Refer [PostForm.js]
export const createPost = (data) => {
  console.log(data);

  return (dispatch) => {
    return callApi(POSTS_API_URL, data, dispatch); // callApi is an util function
  }
}

export const getPosts = () => {
  return (dispatch) => {
    // trigger an ajax call using axios. 
    return axios.get(POSTS_API_URL)
            .then( (res) => {
              console.log(res);

              dispatch({
                type: GET_POSTS,
                postList: res.data
              });
            })
            .catch( (err) => {
              console.log(err);
              throw(err);
            })
            .finally( () => {
              console.log('It is over!');
            });
  }
}

export const getPostById = (postId) =>{
  return (dispatch) => {
    // trigger an ajax call using axios. 
    return axios.get(POSTS_API_URL + '/' + postId)
            .then( (res) => {
              console.log(res);

              dispatch({
                type: GET_POST_BY_ID,
                post: res.data
              });
            })
            .catch( (err) => {
              console.log(err);
              throw(err);
            })
            .finally( () => {
              console.log('It is over!');
            });
  }
}

export const updatePost = (post) =>{
  return (dispatch) => {
    // trigger an ajax call using axios. 
    return axios.put(POSTS_API_URL + '/' + post.id, post)
            .then( (res) => {
              console.log(res);

              dispatch({
                type: EDIT_POST,
                post: res.data
              });
            })
            .catch( (err) => {
              console.log(err);
              throw(err);
            })
            .finally( () => {
              console.log('It is over!');
            });
  }
}

export const deletePost = (postId) =>{
  return (dispatch) => {
    // trigger an ajax call using axios. 
    return axios.delete(POSTS_API_URL + '/' + postId)
            .then( (res) => {
              console.log(res);

              dispatch({
                type: DELETE_POST,
                post: res.data
              });
            })
            .catch( (err) => {
              console.log(err);
              throw(err);
            })
            .finally( () => {
              console.log('It is over!');
            });
  }
}

