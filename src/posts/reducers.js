import {
  POSTS_SUCCESS,
  UPDATE_POST,
  REMOVE_POST,
  TOGGLE_POST_COMMENTS,
  POST_COMMENTS_SUCCESS
} from './actions';

import undoable, { includeAction } from 'redux-undo'

const post = (state = {}, action) => {
  switch (action.type) {
    case POST_COMMENTS_SUCCESS:
      return Object.assign({}, state, {
        comments: action.comments.slice(0),
        areCommentsVisible: true
      });
    case TOGGLE_POST_COMMENTS:
      return Object.assign({}, state, {
        areCommentsVisible: !state.areCommentsVisible
      });
    case UPDATE_POST:
      return Object.assign({}, state, action.data);
    default:
      return state;
  }
};

const posts = (state = [], action) => {
  switch (action.type) {
    case POST_COMMENTS_SUCCESS:
    case TOGGLE_POST_COMMENTS:
    case UPDATE_POST:
      return state.map((item) => {
        if(item.id === action.id) {
          return post(item, action);
        }

        return item;
      });
    case REMOVE_POST:
      return state.filter((post) => (post.id !== action.id));
    case POSTS_SUCCESS:
      return [...action.posts];
    default:
      return state;
  }
};

const undoablePosts = undoable(posts, {
  filter: includeAction([UPDATE_POST, REMOVE_POST])
});

export default undoablePosts;
