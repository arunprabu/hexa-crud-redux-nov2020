import React from 'react'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// receiving the needed props using obj destructuring
const Post = ({ id, title, body }) => { 
  return (
    <div className="list-group">
      <div className="list-group-item list-group-item-action">
        <div className="d-flex w-100 justify-content-between">
          <h5 className="mb-1">
          <Link to={`/posts/${id}`}>{title}</Link>
          </h5>
          <small>Post Id: {id}</small>
        </div>
        <p className="mb-1">
          {body}
        </p>
      </div>
    </div>
  )
}

Post.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  body: PropTypes.string
}

export default Post;
