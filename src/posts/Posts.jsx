import {connect} from 'react-redux';
import PostsList from './PostsList';
import {loadPosts, removePost, togglePostComments, loadPostComments} from './actions';

const mapStateToProps = (state) => {
  return {
    posts: state.posts.present,
    isFetching: state.pagination.posts.isFetching
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onLoad() {
      dispatch(loadPosts());
    },
    onEdit() {

    },
    onRemove(post) {
      dispatch(removePost(post.id));
    },
    onToggleComments(post) {
      if(!post.comments) {
        dispatch(loadPostComments(post.id));
      }

      dispatch(togglePostComments(post.id));
    }
  };
};

const Posts = connect(
  mapStateToProps,
  mapDispatchToProps
)(PostsList);

export default Posts;
