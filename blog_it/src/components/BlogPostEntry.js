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
					<li><a href="https://">Admin</a></li>
					<li><a href="https://">{post.date}</a></li>
					<li><a href="https://">{post.commentsCount}</a></li>
				</ul>
				<p>You can browse different tags such as <a rel="nofollow" href="https://templatemo.com/tag/multi-page" target="_parent">multi-page</a>, <a rel="nofollow" href="https://templatemo.com/tag/resume" target="_parent">resume</a>, <a rel="nofollow" href="https://templatemo.com/tag/video" target="_parent">video</a>, etc. to see more CSS templates. Sed hendrerit rutrum arcu, non malesuada nisi...</p>
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