import React from 'react';

const TagsSidebarItem = () => {
  return (
    <div className="sidebar-item tags">
      <div className="sidebar-heading">
        <h2>Tag Clouds</h2>
      </div>
      <div className="content">
        <ul>
          <li><a href={process.env.PUBLIC_URL}>Lifestyle</a></li>
          <li><a href={process.env.PUBLIC_URL}>Creative</a></li>
          <li><a href={process.env.PUBLIC_URL}>HTML5</a></li>
          <li><a href={process.env.PUBLIC_URL}>Inspiration</a></li>
          <li><a href={process.env.PUBLIC_URL}>Motivation</a></li>
          <li><a href={process.env.PUBLIC_URL}>PSD</a></li>
          <li><a href={process.env.PUBLIC_URL}>Responsive</a></li>
        </ul>
      </div>
    </div>
  );
};

export default TagsSidebarItem;
