import React from "react";

import blogThumb1 from '../assets/images/blog-post-01.jpg';
import blogThumb2 from '../assets/images/blog-post-02.jpg';
import blogThumb3 from '../assets/images/blog-post-03.jpg';

const images = [blogThumb1, blogThumb2, blogThumb3,];

function BlogPostEntry(props) {
	const post = props.post;
	let date = new Date(post.createdAt);
	// convert date to form "yyyy-mm-dd"
	date = date.toISOString().split('T')[0];
	return (
		<div className="blog-post">
			<div className="blog-thumb">
				<img 
					src={images[Math.floor(Math.random() * images.length)]}
					alt=""
					style={{ height: "50vmin", objectFit: "contain", objectPosition: "center",width: "100%",}}
				/>
			</div>
			<div className="down-content">
				<span>{post.category}</span>
				<a href="/post-details"><h4>{post.title}</h4></a>
				<ul className="post-info">
					<li><a href="https://">{post.author}</a></li>
					<li><a href="https://">{date}</a></li>
					<li><a href="https://">{post.commentsCount ? post.commentsCount : 0}</a></li>
				</ul>
				<p>{post.body}</p>
				<div className="post-options">
					<div className="row">
						<div className="col-6">
							<ul className="post-tags">
								<li><i className="fa fa-tags"></i></li>
								<li><a href="https://">{post.tags[0]}</a>,</li>
								<li><a href="https://">{post.tags[1]}</a></li>
							</ul>
						</div>
						<div className="col-6">
							<ul className="post-share">
								<li><i className="fa fa-share-alt"></i></li>
								<li><a href="https://">{post.share[0]}</a>,</li>
								<li><a href="https://">{post.share[1]}</a></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default BlogPostEntry;