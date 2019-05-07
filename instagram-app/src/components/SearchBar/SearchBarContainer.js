import React from 'react';
import IGLogo from '../../assets/iglogo.png';
import './Bar.css';

const SearchBar = props => {
  return (
    <div className="search-bar-wrap">
      <div className="image-wrap">
        <img alt="insta logo" src={IGLogo} className="logo-image" />
      </div>
      <div>
        <input type="text" placeholder="Search" onKeyDown={props.searchPosts} />
      </div>
      <div className="social-wrap">
        <div className="social">
          <i className="far fa-compass" />
        </div>
        <div className="social">
          <i className="far fa-heart" />
        </div>
        <div className="social">
          <i className="far fa-user-circle" />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;