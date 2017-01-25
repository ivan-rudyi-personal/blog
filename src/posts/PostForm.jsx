import React, { PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router';

class Form extends React.Component {
  render () {
    const {initialValues, handleSubmit} = this.props;

    return (
      <div>
        <h2>Edit Post #{initialValues.id}</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <Field className="form-control" name="title" type="text" component="input"></Field>
          </div>
          <div className="form-group">
            <Field className="form-control" name="body" type="text" component="textarea" rows="10"></Field>
          </div>
          <button className="btn btn-primary" type="submit">Save</button>
          <Link className="btn btn-link" to={`/`}>Back</Link>
        </form>
      </div>
    );
  }
}

let PostForm = reduxForm({
  form: 'post-form'
})(Form);

export default PostForm;
