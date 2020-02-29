// import { 
//     FETCH_ARTICLES_BEGIN, 
//     FETCH_ARTICLES_SUCCESS, 
//     FETCH_ARTICLES_FAILURE 
// } from '../actions/types';

// const initialState = {
//     items: [],
//     loading: false,
//     error: null
// }

// export default function articleReducer(state = initialState, action) { 
//     switch(action.type) {
//         case FETCH_ARTICLES_BEGIN:
//             return {
//                 ...state,
//                 loading: true,
//                 error: null
//             };
//         case FETCH_ARTICLES_SUCCESS:
//             return {
//                 ...state,
//                 loading: false,
//                 items: action.payload.articles
//             };
//         case FETCH_ARTICLES_FAILURE:
//             return {
//                 ...state,
//                 loading: false,
//                 error: action.payload.error,
//                 items: []
//             };
//         default:
//             return state;
//         }
// }

import { SET_ARTICLE_DETAILS } from "../actions/types";

const initialState = {
  articles: []
}

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_ARTICLE_DETAILS:
      return { articles: action.payload };
    default:
      return state
  }
}