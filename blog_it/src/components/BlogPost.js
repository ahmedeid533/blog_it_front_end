import React from "react";

function BlogPost (props) {
	const post = props.post;
	return (
		<div className="col-lg-6" key={post.id}>
			<div className="blog-post">
				<div className="blog-thumb">
				<img src={post.image} alt="" />
				</div>
				<div className="down-content">
				<span>Lifestyle</span>
				<a href="post-details.html"><h4>{post.title}</h4></a>
				<ul className="post-info">
					<li><a href="#">Admin</a></li>
					<li><a href="#">{post.date}</a></li>
					<li><a href="#">{post.comments}</a></li>
				</ul>
				<p>Nullam nibh mi, tincidunt sed sapien ut, rutrum hendrerit velit. Integer auctor a mauris sit amet eleifend.</p>
				<div className="post-options">
					<div className="row">
					<div className="col-lg-12">
						<ul className="post-tags">
						<li><i className="fa fa-tags"></i></li>
						<li><a href="#">Best Templates</a>,</li>
						<li><a href="#">TemplateMo</a></li>
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