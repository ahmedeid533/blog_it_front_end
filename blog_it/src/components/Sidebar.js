import React from 'react';
import Categories from './Categories';
import TagsSidebarItem from './Tags';
import { useState, useEffect } from 'react';

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
					title: post.title,
					createdAt: new Date(post.createdAt).toISOString().split('T')[0]
				}
				
			})
			setBlog(posts.splice(data.posts.length - 4, data.posts.length - 1));
			console.log(posts)
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
										<h5>{post.title}</h5>
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
			<TagsSidebarItem/>
		  </div>
		</div>
	  </div>
	)
}

export default Sidebar;
