    
import React from 'react';
import PropTypes from 'prop-types';
import './Comment.css';

const Comment = props => {
  return (
    <div className="comment-text">
      <span className="comment">{props.com.text}</span>{' '}
      <span className="user">-{props.com.username}</span>
    </div>
  );
};

Comment.propTypes = {
  com: PropTypes.shape({
    text: PropTypes.string,
    username: PropTypes.string
  })
};

export default Comment;