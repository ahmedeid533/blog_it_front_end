import React from 'react';

const categories = [
  'Nature Lifestyle',
  'Awesome Layouts',
  'Creative Ideas',
  'Responsive Templates',
  'HTML5 / CSS3 Templates',
  'Creative & Unique'
];

const Categories = () => {
  return (
    <div className="sidebar-item categories">
      <div className="sidebar-heading">
        <h2>Categories</h2>
      </div>
      <div className="content">
        <ul>
          {categories.map((category, index) => (
            <li key={index}>
              <a href="#">- {category}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Categories;
