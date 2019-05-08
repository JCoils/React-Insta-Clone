import React from 'react';

const Like = props => {
  return [
    <div
      className="like-section"
      key="likes-icons-container"
      onClick={props.incrementLike}
    >
      <div className="like-section-wrap">
        <i className="far ig-heart" />
      </div>
      <div className="like-section-wrap">
        <i className="far ig-comment" />
      </div>
    </div>,
    <div className="like-section" key="likes-container">
      <div className="like-section-wrap">{props.likes}</div>
    </div>
  ];
};

export default Like;