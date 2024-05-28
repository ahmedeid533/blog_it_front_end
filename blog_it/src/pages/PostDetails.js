import React from 'react';
import { useState, useEffect } from 'react';
import Banner from '../components/Banner';
import Comments from '../components/Comments';
import Sidebar from '../components/Sidebar';
import BlogPostEntry from '../components/BlogPostEntry';
import { useParams } from 'react-router-dom';
function PostDetails() {
	const [post, setPost] = useState({});
	const id = useParams().id;
	// const post = {
	// 	id: 1,
	// 	category: "lifestyle",
	// 	title: 'Donec tincidunt leo',
	// 	body: 'Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus.',
	// 	author: 'Admin',
	// 	date: 'May 31, 2020',
	// 	comments: '12 Comments',
	// 	commentsCount: 12,
	// 	createdAt: '2020-05-31T00:00:00.000Z',
	// 	image: blogThumb1,
	// 	tags: ['Best Templates', 'TemplateMo'],
	// 	share: ['Facebook', 'Twitter', 'LinkedIn']
	// }
	const fetchPost = () => {
		fetch(process.env.REACT_APP_API + "/posts/" + id, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			}
		})
		.then(res => res.json())
		.then(data => {
			setPost(data.post);
			console.log(data.post);
		})
		.catch(err => {
			console.log(err);
		})
	}

	useEffect(() => {
		fetchPost();
	}, [])

	return (
		<div className="post-details">
			<Banner h1="POST DETAILS" h2="SINGLE BLOG POST"/>
			<section className="blog-posts grid-system">
			<div className="container">
				<div className="row">
				<div className="col-lg-8">
					<div className="all-blog-posts">
					<div className="row">
						<div className="col-lg-12">
						{
							post && post.title &&
							<BlogPostEntry post={post}/>
						}
						</div>
						<Comments id={id}/>
					</div>
					</div>
				</div>
				<Sidebar />
				</div>
			</div>
			</section>
	  </div>
	)
}

export default PostDetails;
