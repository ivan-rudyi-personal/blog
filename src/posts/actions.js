import api from '../api';

export const TOGGLE_POST_COMMENTS = 'TOGGLE_POST_COMMENTS';
export const UPDATE_POST = 'UPDATE_POST';
export const REMOVE_POST = 'REMOVE_POST';

export const togglePostComments = (id) => {
  return {
    type: TOGGLE_POST_COMMENTS,
    id: id
  };
};

export const updatePost = (id, data) => {
  return {
    type: UPDATE_POST,
    id: id,
    data: data
  };
};

export const removePost = (id) => {
  return {
    type: REMOVE_POST,
    id: id
  };
};

export const POSTS_REQUEST = 'POSTS_REQUEST';
export const POSTS_SUCCESS = 'POSTS_SUCCESS';
export const POSTS_FAILURE = 'POSTS_FAILURE';

const postsRequest = () => {
  return {
    type: POSTS_REQUEST
  };
};

const postsSuccess = (posts) => {
  return {
    type: POSTS_SUCCESS,
    posts: posts.slice(0,20)
  }
};

const postsFailure = (message) => {
  return {
    type: POSTS_FAILURE,
    message: message
  }
};

export const loadPosts = () => {
  return (dispatch) => {
    dispatch(postsRequest());

    api.get('posts')
      .then(({data}) => {
        dispatch(postsSuccess(data));
      })
      .catch(({message}) => {
        dispatch(postsFailure(message));
      });
  }
};

export const POST_COMMENTS_REQUEST = 'POST_COMMENTS_REQUEST';
export const POST_COMMENTS_SUCCESS = 'POST_COMMENTS_SUCCESS';
export const POST_COMMENTS_FAILURE = 'POST_COMMENTS_FAILURE';

const postCommentsRequest = () => {
  return {
    type: POST_COMMENTS_REQUEST
  };
};

const postCommentsSuccess = (postId, comments) => {
  return {
    type: POST_COMMENTS_SUCCESS,
    id: postId,
    comments: comments.slice(0,20)
  }
};

const postCommentsFailure = (message) => {
  return {
    type: POST_COMMENTS_FAILURE,
    message: message
  }
};

export const loadPostComments = (postId) => {
  return (dispatch, getState) => {
    dispatch(postCommentsRequest());

    api.get(`posts/${postId}/comments`,)
      .then(({data}) => {
        dispatch(postCommentsSuccess(postId, data));
      })
      .catch(({message}) => {
        dispatch(postCommentsFailure(message));
      });
  }
};
