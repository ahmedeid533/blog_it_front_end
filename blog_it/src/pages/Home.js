import React, { useEffect } from 'react';
import { useState } from 'react';
import HomeBanner from '../components/HomeBanner';
import BlogPostEntry from '../components/BlogPostEntry';
import Sidebar from '../components/Sidebar';
import blogThumb1 from '../assets/images/blog-thumb-01.jpg';

function Home() {
	const [blog, setBlog] = useState([]);
	const post = {
		id: 1,
		category: "lifestyle",
		title: 'Donec tincidunt leo',
		date: 'May 31, 2020',
		comments: '12 Comments',
		commentsCount: 12,
		image: blogThumb1,
		tags: ['Best Templates', 'TemplateMo'],
		share: ['Facebook', 'Twitter', 'LinkedIn']
	}
	const fetchBlogs = () => {

		fetch("http://localhost:5000/posts", {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				"Authorization": `Bearer ${localStorage.getItem("accessToken")}`
			}
		})
		.then(res => res.json())
		.then(data => {
			data.posts.map((post) => {
				post.image = blogThumb1;
				post.tags = ['Best Templates', 'TemplateMo'];
				post.share = ['Facebook', 'Twitter', 'LinkedIn'];
				return post;
			})
			setBlog(data.posts.splice(1, 4));
			console.log(data.posts)
		})
		.catch(err => {
			console.log(err);
		})
	}
	useEffect(() => {
		fetchBlogs();
	}, [])
	return ( 
		<div>
			<HomeBanner />
			<section className="blog-posts grid-system">
				<div className="container">
					<div className="row">
						<div className="col-lg-8">
							<div className="all-blog-posts">
								<div className="row">
									<div className="col-lg-12">
										{blog.length > 0 &&
											blog.map((post) => {
												return (
													<BlogPostEntry post={post}/>
												)
											})
										}
									</div>
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

export default Home;
