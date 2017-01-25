import React, { PropTypes } from 'react';
import Comment from './Comment';

class CommentsList extends React.Component {
  renderPlaceholder() {
    return (
      <p>There are not posts yet.</p>
    );
  }
  renderComments() {
    const {comments} = this.props;

    return comments.map((comment) => {
      return (
        <Comment key={comment.id} {...comment} />
      );
    });
  }
  render () {
    const count = this.props.comments.length;

    return (
      <div>
        {count > 0 ? this.renderComments() : this.renderPlaceholder()}
      </div>
    );
  }
}

CommentsList.propTypes = {
  comments: PropTypes.array.isRequired
}

export default CommentsList;
