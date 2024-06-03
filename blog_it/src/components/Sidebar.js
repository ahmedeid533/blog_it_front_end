import React from 'react';
import Categories from './Categories';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
	const [blog, setBlog] = useState([]);
	const [allBlogs, setAllBlogs] = useState([]);
	const search = (query) => {
		if (query !== "") {
			document.getElementById('result').innerHTML = "Search Results"
			const copy = allBlogs;
			const result  = copy.filter((post) => {
				return post.title.toLowerCase().includes(query.toLowerCase())
			})
			setBlog(result[0] ? result.slice(0,5) : [{title: "No results found"}])
		}
		else {
			document.getElementById('result').innerHTML = "Recent Posts"
			setBlog(allBlogs.slice(allBlogs.length - 4, allBlogs.length - 1))
		}
	}
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
			setAllBlogs(posts);
			setBlog(posts.slice(data.posts.length - 5, data.posts.length));
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
				<input type="text" 
						name="q"
						className="searchText" 
						placeholder="type to search..." 
						onChange={(e) => {
							search(e.target.value)
						}}
						/>
			  </div>
			</div>
			<div className="col-lg-12">
			  <div className="sidebar-item recent-posts">
				<div className="sidebar-heading">
				  <h2 id="result">Recent Posts</h2>
				</div>
				<div className="content">
				  <ul>
					{
						blog.length > 0 &&
						blog.map((post, idx) => {
							return (
								<li key={idx}>
									<Link to={"/post-details/"+post._id}><h5>{post.title}</h5></Link>
										<span>{post.createdAt}</span>
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
