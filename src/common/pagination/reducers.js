import {
  POSTS_REQUEST,
  POSTS_SUCCESS,
  POSTS_FAILURE
} from '../../posts/actions';

const pagination = (state = {posts: {isFetching: true}}, action) => {
  switch (action.type) {
    case POSTS_REQUEST:
      return Object.assign({}, state, {
        posts: {isFetching: true}
      });
    case POSTS_SUCCESS:
    case POSTS_FAILURE:
      return Object.assign({}, state, {
        posts: {isFetching: false}
      });
    default:
      return state;
  }
};

export default pagination;
