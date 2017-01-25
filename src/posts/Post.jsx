import {connect} from 'react-redux';
import PostForm from './PostForm';
import {updatePost} from './actions';
import {browserHistory} from 'react-router';

const mapStateToProps = (state, ownProps) => {
  const id = parseInt(ownProps.params.id, 10);
  return {
    initialValues: state.posts.present.find((post) => (post.id === id))
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const id = parseInt(ownProps.params.id, 10);
  return {
    onSubmit({title, body}) {
      dispatch(updatePost(id, {title, body}));
      browserHistory.push('/');
    }
  };
};

const Post = connect(
  mapStateToProps,
  mapDispatchToProps
)(PostForm);

export default Post;
