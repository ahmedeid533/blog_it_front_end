import React from 'react';
import Banner from '../components/Banner';
import Comments from '../components/Comments';
import Sidebar from '../components/Sidebar';
import BlogPostEntry from '../components/BlogPostEntry';
import blogThumb1 from '../assets/images/blog-thumb-01.jpg';
function PostDetails() {

	const post = {
		id: 1,
		category: "lifestyle",
		title: 'Donec tincidunt leo',
		body: 'Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus.',
		author: 'Admin',
		date: 'May 31, 2020',
		comments: '12 Comments',
		commentsCount: 12,
		createdAt: '2020-05-31T00:00:00.000Z',
		image: blogThumb1,
		tags: ['Best Templates', 'TemplateMo'],
		share: ['Facebook', 'Twitter', 'LinkedIn']
	}
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
						<BlogPostEntry post={post}/>
						</div>
						<Comments/>
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
