import React from 'react';

function Comments() {
	return (
		<div className="sidebar-item comments">
			<div className="sidebar-heading">
			<h2>4 comments</h2>
			</div>
			<div className="content">
			<ul>
				<li>
				<div className="author-thumb">
					<img src="assets/images/comment-author-01.jpg" alt="" />
				</div>
				<div className="right-content">
					<h4>Charles Kate<span>May 16, 2020</span></h4>
					<p>Fusce ornare mollis eros...</p>
				</div>
				</li>
				{/* Add more comments here */}
			</ul>
			</div>
		</div>
	)
}

export default Comments;
