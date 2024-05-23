import React from "react";

function BlogPostEntry(props) {
	const post = props.post;
	return (
		<div className="blog-post">
			<div className="blog-thumb">
				<img src="assets/images/blog-post-02.jpg" alt="" />
			</div>
			<div className="down-content">
				<span>{post.category}</span>
				<a href="/post-details"><h4>{post.title}</h4></a>
				<ul className="post-info">
					<li><a href="https://">{post.author}</a></li>
					<li><a href="https://">{post.date}</a></li>
					<li><a href="https://">{post.commentsCount}</a></li>
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