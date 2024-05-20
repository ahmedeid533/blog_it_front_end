import React from 'react';
import HomeBanner from '../components/HomeBanner';
import BlogPostEntry from '../components/BlogPostEntry';
import Sidebar from '../components/Sidebar';
import blogThumb1 from '../assets/images/blog-thumb-01.jpg';

function Home() {
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
										<BlogPostEntry post={post}/>
										<BlogPostEntry post={post}/>
										<BlogPostEntry post={post}/>
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
