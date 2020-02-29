// export const FETCH_ARTICLES_BEGIN   = 'FETCH_ARTICLES_BEGIN';
// export const FETCH_ARTICLES_SUCCESS = 'FETCH_ARTICLES_SUCCESS';
// export const FETCH_ARTICLES_FAILURE = 'FETCH_ARTICLES_FAILURE';

// export const fetchArticlesBegin = () => ({
//   type: FETCH_ARTICLES_BEGIN
// });

// export const fetchArticlesSuccess = Articles => ({
//   type: FETCH_ARTICLES_SUCCESS,
//   payload: { Articles }
// });

// export const fetchArticlesFailure = error => ({
//   type: FETCH_ARTICLES_FAILURE,
//   payload: { error }
// });

import axios from "axios";
import { SET_ARTICLE_DETAILS } from "./types"

export function fetchArticleDetails() {
  return function(dispatch) {
    let token = window.localStorage.getItem('auth_token') || null
    let config = {}
    if(token) {
      config = {
          url: 'http://localhost:3000/articles',
          headers: { 'Authorization': `Bearer ${token}` }
      }
      } else {
          throw "No token saved!"
    } 
    return axios(config)
    .then(({data}) => {
      dispatch(setArticleDetails(data));
    });
   
  }
}

function setArticleDetails(data){
  console.log(data)
  return {
    type: SET_ARTICLE_DETAILS,
    payload: data
  }
}


