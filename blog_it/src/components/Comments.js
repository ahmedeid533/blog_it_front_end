import React, { useEffect, useState } from 'react';

function Comments(probs) {
	const id = probs.id;
	const [comments, setComments] = useState([]);
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
			console.log(data);
			window.location.reload();
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
							return <ul><li>{JSON.stringify(comment)}</li></ul>
						}
						return (
							<ul>
								<li key={index}>
								<div className="author-thumb">
									<img src={process.env.PUBLIC_URL + `/assets/images/comment-author-0${index%2 + 1}.jpg`} alt="fake image" />
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
				style={{color:"black",margin:"1vmax", marginLeft:0}}
				 onClick={sendComment}>Post Comment</button>
			</div>
			</div>
		</div>
	)
}

export default Comments;
