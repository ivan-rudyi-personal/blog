import React, { PropTypes } from 'react'

class Comment extends React.Component {
  render () {
    const {id, name, email, body} = this.props;

    return (
      <div className="media">
        <div className="media-body">
          <h5 className="mt-2">#{id} {name} {email}</h5>
          {body}
        </div>
      </div>
    );
  }
}

Comment.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired
};

export default Comment;
