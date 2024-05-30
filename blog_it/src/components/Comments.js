import React, { useEffect, useState } from 'react';

function Comments(probs) {
	const [comments, setComments] = useState([]);
	const id = probs.id;
	
	const fetchComments = () => {
		fetch(process.env.REACT_APP_API + "/comments/post/" + id, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			}
		})
		.then(res => res.json())
		.then(data => {
			setComments(data.comments);
		})
		.catch(err => {
			console.log(err);
		})
	}

	const [comment, setComment] = useState("");
	const sendComment = () => {
		fetch(process.env.REACT_APP_API + "/comments/create", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				"Authorization": `Bearer ${localStorage.getItem("accessToken")}`
			},
			body: JSON.stringify({
				body: comment,
				post: id
			})
		})
		.then(res => res.json())
		.then(data => {
			fetchComments();
		})
		.catch(err => {
			console.log(err);
		})
	}
	useEffect(() => {
		fetchComments();
	}, [])
	return (
		<div className="sidebar-item comments">
			<div className="sidebar-heading">
			<h2>{comments.lenght} comments</h2>
			</div>
			<div className="content">
			<ul>
				<li>
				<div className="author-thumb">
					<img src={process.env.PUBLIC_URL + "/assets/images/comment-author-01.jpg"} alt="" />
				</div>
				<div className="right-content">
					<h4>Charles Kate<span>May 16, 2020</span></h4>
					<p>Fusce ornare mollis eros...</p>
				</div>
				</li>
				{
					comments.lenght > 0 &&
					comments.map((comment) => {
						return (
							<li>
								<div className="author-thumb">
									<img src="assets/images/comment-author-01.jpg" alt="" />
								</div>
								<div className="right-content">
									<h4>{comment.author}<span>{comment.createdAt}</span></h4>
									<p>{comment.body}</p>
								</div>
							</li>
						)
					})
				
				}
			</ul>
			<div>
				<input 
					type="text"
					placeholder="yout comment" 
					onChange={(e) => setComment(e.target.value)}
				/>
				<button onClick={sendComment}>Post Comment</button>
			</div>
			</div>
		</div>
	)
}

export default Comments;
