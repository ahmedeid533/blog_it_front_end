import React, { useEffect, useState } from 'react';

import commentImage from '../assets/images/profile_avatar.png';

function Comments(probs) {
	const id = probs.id;
	const [comments, setComments] = useState([]);
	const [message, setMessage] = useState("");
	const fetchComments = () => {
		fetch(process.env.REACT_APP_API + "/comments/post/" + id, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				"Authorization": `Bearer ${localStorage.getItem("accessToken")}`
			}
		})
		.then(res => res.json())
		.then(data => {
			setComments(data.comments)
		})
		.catch(err => {
			console.log(err);
		})
		
	}

	const [comment, setComment] = useState("");
	const sendComment = () => {
		document.getElementById('comment-button').disabled = true
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
			setMessage(data.message)
			setComment("")
			document.getElementById('comment-input').value = ""
			setTimeout(() => {
				setMessage("")
				document.getElementById('message').innerHTML = ""
				document.getElementById('comment-button').disabled = false
			}, 3000)
			fetchComments()
		})
		.catch(err => {
			console.log(err);
		})
	}
	useEffect(()=>{
		fetchComments()
	},[id])
	return (
		<div className="sidebar-item comments">
			<div className="sidebar-heading">
			<h2>{comments? comments.length : 0} comments</h2>
			</div>
			<div className="content">
			
				{
					comments &&
					comments.map((comment, index) => {
						if (!comment.createdAt) {
							return <ul><li key={index}>{JSON.stringify(comment)}</li></ul>
						}
						return (
							<ul>
								<li key={index}>
								<div className="author-thumb">
									{/* fixed image */}
									<img src={commentImage} alt="profile image" />
								</div>
								<div className="right-content">
									<h4>{comment.username ? comment.username : "private"}<span>{comment.createdAt.split("T")[0]}</span></h4>
									<p>{comment.body}</p>
								</div>
							</li>
							</ul>	
						)
					})
				
				}{
					!comments  && 
					<ul>
					<li >
						<div className="author-thumb">
							<img alt="" />
						</div>
						<div className="right-content">
							<h4>no commnet yet</h4>
							<h3>or you have to log in to see comments</h3>
						</div>
					</li>
					</ul>
				}
			
			<div>
				<input 
					type="text"
					placeholder="add your comment"
					id='comment-input'
					style={{width:"100%",padding:"1vmin 2vmin", fontSize:"1vmax",
						borderColor:"#f48840",
						borderWidth:"2px",
						boxShadow:'none',
						borderStyle:"solid"
					}}
					onChange={(e) => setComment(e.target.value)}
				/>
				<button 
				className='nav-item-button'
				id='comment-button'
				style={{color:"black",margin:"1vmax", marginLeft:0}}
				 onClick={sendComment}>Post Comment</button>
			</div>
			<h4 id='message'>{message}</h4>
			</div>
		</div>
	)
}

export default Comments;
