import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Categories = () => {
	const [categories, setCategories] = useState([]);
	const fetchCategories = () => {
		fetch(process.env.REACT_APP_API + "/categories", {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			}
		})
		.then(res => res.json())
		.then(data => {
			setCategories(data.categories);
		})
		.catch(err => {
			console.log(err);
		})
	}
	useEffect(() => {
		fetchCategories();
	}, [])
  return (
    <div className="sidebar-item categories">
      <div className="sidebar-heading">
        <h2>Categories</h2>
      </div>
      <div className="content" style={{display:"flex", flexDirection:"row"}}>
        <ul style={{width:"50%"}}>
          {categories.map((category, index) => (
             index < categories.length/2? 
				<li key={index}>
              		<Link to={`/blog/${category._id}`}>- {category.name}</Link>
            	</li>
			:null
          ))}
        </ul>
		<ul style={{width:"50%"}}>
		  {categories.map((category, index) => (
			 index >= categories.length/2? 
				<li key={index}>
			  		<Link to={`/blog/${category._id}`}>- {category.name}</Link>
				</li>
			:null
		  ))}
		</ul>
      </div>
    </div>
  );
};

export default Categories;
