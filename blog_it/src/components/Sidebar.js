import React from 'react';
import Categories from './Categories';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
	const [blog, setBlog] = useState([]);
	const fetchBlogs = () => {
		fetch(process.env.REACT_APP_API + "/posts", {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				"Authorization": `Bearer ${localStorage.getItem("accessToken")}`
			}
		})
		.then(res => res.json())
		.then(data => {
			const posts = data.posts.map((post) => {
				// convert format to yyyy-mm-dd
				return {
					_id: post._id,
					title: post.title,
					createdAt: new Date(post.createdAt).toISOString().split('T')[0]
				}
				
			})
			setBlog(posts.splice(data.posts.length - 4, data.posts.length - 1));
		})
		.catch(err => {
			console.log(err);
		})
	}
	useEffect(() => {
		fetchBlogs();
	}, [])
	return (
		<div className="col-lg-4">
		<div className="sidebar">
		  <div className="row">
			<div className="col-lg-12">
			  <div className="sidebar-item search">
				<form id="search_form" name="gs" method="GET" action="#">
				  <input type="text" name="q" className="searchText" placeholder="type to search..." />
				</form>
			  </div>
			</div>
			<div className="col-lg-12">
			  <div className="sidebar-item recent-posts">
				<div className="sidebar-heading">
				  <h2>Recent Posts</h2>
				</div>
				<div className="content">
				  <ul>
					{
						blog.length > 0 &&
						blog.map((post) => {
							return (
								<li>
									<a href="post-details.html">
										<Link to={"/post-details/"+post._id}><h5>{post.title}</h5></Link>
										<span>{post.createdAt}</span>
									</a>
								</li>
							)
						})
					}
				  </ul>
				</div>
			  </div>
			</div>
			<Categories/>
		  </div>
		</div>
	  </div>
	)
}

export default Sidebar;
