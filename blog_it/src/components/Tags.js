import React from 'react';

const TagsSidebarItem = () => {
  return (
    <div className="sidebar-item tags">
      <div className="sidebar-heading">
        <h2>Tag Clouds</h2>
      </div>
      <div className="content">
        <ul>
          <li><a href="#">Lifestyle</a></li>
          <li><a href="#">Creative</a></li>
          <li><a href="#">HTML5</a></li>
          <li><a href="#">Inspiration</a></li>
          <li><a href="#">Motivation</a></li>
          <li><a href="#">PSD</a></li>
          <li><a href="#">Responsive</a></li>
        </ul>
      </div>
    </div>
  );
};

export default TagsSidebarItem;
