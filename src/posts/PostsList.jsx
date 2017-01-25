import React, { PropTypes } from 'react';
import PostsListItem from './PostsListItem';

class PostsList extends React.Component {
  componentDidMount() {
    if(!this.props.posts.length) {
      this.props.onLoad();
    }
  }
  renderPlaceholder() {
    return (
      <p>There are not posts yet.</p>
    );
  }
  renderPosts() {
    const {posts, onRemove, onToggleComments} = this.props;

    return posts.map((post) => {
      return (
        <PostsListItem key={post.id} {...post}
          onRemove={() => {onRemove(post)}}
          onToggleComments={() => {onToggleComments(post)}}
        />
      );
    });
  }
  render () {
    const count = this.props.posts.length;

    return (
      <div>
        <h2>Posts</h2>
        {count > 0 ? this.renderPosts() : this.renderPlaceholder()}
      </div>
    );
  }
}

PostsList.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired
    })
  )
};

export default PostsList;
