import React, { useEffect } from 'react';
import { useState } from 'react';
import HomeBanner from '../components/HomeBanner';
import BlogPostEntry from '../components/BlogPostEntry';
import Sidebar from '../components/Sidebar';
import blogThumb1 from '../assets/images/blog-post-01.jpg';
import blogThumb2 from '../assets/images/blog-post-02.jpg';
import blogThumb3 from '../assets/images/blog-post-03.jpg';

const images = [blogThumb1, blogThumb2, blogThumb3,];
function Home() {
	const [blog, setBlog] = useState([]);
	const fetchBlogs = () => {
		fetch(process.env.REACT_APP_API + "/posts", {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				"Authorization": `Bearer ${localStorage.getItem("accessToken")}`
			}
		})
		.then(res => res.json())
		.then(data => {
			data.posts.map((post) => {
				post.image = post.fileUrl ?
							 post.fileUrl :
							 images[Math.floor(Math.random() * images.length)]
				post.tags = ['Best Templates', 'TemplateMo'];
				post.share = ['Facebook', 'Twitter', 'LinkedIn'];
				return post;
			})
			setBlog(data.posts.splice(data.posts.length - 4, data.posts.length - 1));
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
