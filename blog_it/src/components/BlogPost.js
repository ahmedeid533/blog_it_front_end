import React from "react";
import { Link } from "react-router-dom";


function BlogPost (props) {
	const post = props.post;
	let date = new Date(post.createdAt);
	// convert date to form "yyyy-mm-dd"
	date = date.toISOString().split('T')[0];
	return (
		<div className="col-lg-6" key={post.id}>
			<div className="blog-post">
				<div className="blog-thumb">
				<img src={post.image} alt="" />
				</div>
				<div className="down-content">
				<span>Lifestyle</span>
				<Link to={"post-details/"+post._id}><h4>{post.title}</h4></Link>
				<ul className="post-info">
					<li><a href={process.env.PUBLIC_URL}>Admin</a></li>
					<li><a href={process.env.PUBLIC_URL}>{date}</a></li>
					<li><a href={process.env.PUBLIC_URL}>{post.comments ? post.comments.length : 0}</a></li>
				</ul>
				<p>{post.body}</p>
				<div className="post-options">
					<div className="row">
					<div className="col-lg-12">
						<ul className="post-tags">
						<li><i className="fa fa-tags"></i></li>
						<li><a href={process.env.PUBLIC_URL}>Best Templates</a>,</li>
						<li><a href={process.env.PUBLIC_URL}>TemplateMo</a></li>
						</ul>
					</div>
					</div>
				</div>
				</div>
			</div>
		</div>
	)
}

export default BlogPost;