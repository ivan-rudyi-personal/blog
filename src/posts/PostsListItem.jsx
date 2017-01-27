import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import CommentsList from '../comments/CommentsList';

class PostsListItem extends React.Component {
  render () {
    const {
      id,
      title,
      body,
      comments,
      onRemove,
      onToggleComments,
      areCommentsVisible
    } = this.props;

    return (
      <div className="mb-3">
        <h3>{title}</h3>
        <p>{body}</p>
        <div>
          <a href="#" className="btn btn-danger"
            onClick={(e) => {e.preventDefault(); onRemove();}}>
            Remove
          </a>
          <Link className="btn btn-warning ml-1" to={`/post/${id}`}>Edit</Link>
          <a  href="#" className="btn btn-link ml-1 float-right"
            onClick={(e) => {e.preventDefault(); onToggleComments();}}>
            {areCommentsVisible ? 'Hide comments' : 'Show comments'}
          </a>
        </div>
        <div className="ml-4">
          {comments && areCommentsVisible && (
            <CommentsList comments={comments} />
          )}
        </div>
      </div>
    );
  }
}

PostsListItem.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  onRemove: PropTypes.func.isRequired,
  onToggleComments: PropTypes.func.isRequired
};

export default PostsListItem;
