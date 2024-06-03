import React from 'react';
import blogThumb1 from '../assets/images/blog-thumb-01.jpg';
import blogThumb2 from '../assets/images/blog-thumb-02.jpg';
import blogThumb3 from '../assets/images/blog-thumb-03.jpg';
import blogThumb4 from '../assets/images/blog-thumb-04.jpg';
import blogThumb5 from '../assets/images/blog-thumb-05.jpg';
import blogThumb6 from '../assets/images/blog-thumb-06.jpg';
import Sidebar from '../components/Sidebar';
import Banner from '../components/Banner';
import BlogPost from '../components/BlogPost';
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const images = [blogThumb1, blogThumb2, blogThumb3, blogThumb4, blogThumb5, blogThumb6];

function BlogPosts () {
	const params = useParams();
	const [posts, setPosts] = useState([]);
	const [page, setPage] = useState(1);
	const [postsPage, setPostsPage] = useState([]);
	const location = useLocation();

	const fetchPosts = () => {
		if (params.id) {
			fetch(process.env.REACT_APP_API + `/posts/category/${params.id}`, {
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
				setPosts(data.posts);
				setPostsPage(data.posts.slice(0, 4));
			})
			.catch(err => {
				console.log(err);
			})
		} else {
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
					post.image = images[Math.floor(Math.random() * images.length)];
					post.tags = ['Best Templates', 'TemplateMo'];
					post.share = ['Facebook', 'Twitter', 'LinkedIn'];
					return post;
				})
				setPosts(data.posts);
				setPostsPage(data.posts.slice(0, 4));
			})
			.catch(err => {
				console.log(err);
			})
	}}

	useEffect(() => {
		fetchPosts();
		setPage(1);
	}, [location])
	useEffect(() => {
		if ((page - 1) * 4 < posts.length) {
			setPostsPage(posts.slice((page - 1) * 4, page * 4));
		} else {
			setPostsPage(posts.slice((page - 1) * 4));
		}
	}, [page])

  return (
    <>
	<Banner h1="RECENT POSTS" h2="OUR RECENT BLOG ENTRIES"/>
	<section className="blog-posts grid-system">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="all-blog-posts">
              <div className="row">
                {postsPage.map(post => (
                  <BlogPost post={post}/>
                ))}
                <div className="col-lg-12">
                  <ul className="page-numbers">
					{
					page != 1 
					&& <li
					onClick={() => {
						setPage(page - 1)
					}}
					><i>{"<"}</i></li>}
					{
					page != 1
					&&
					<li onClick={() => {
						setPage(page - 1)
					}}
					><i>{page - 1}</i></li>
					}
                    <li className="active"><i>{page}</i></li>
                    {
						(page) * 4 < posts.length
						&& <li onClick={() => {
							setPage(page + 1)
						}}><i>{page + 1}</i></li>
					}
					{
						(page + 1) * 4 < posts.length
						&& <li onClick={() => {
							setPage(page + 2)
						}}><i>{page + 2}</i></li>
					}
					{
						(page) * 4 < posts.length
						&& <li onClick={() => {
							setPage(page + 1)
						}}><i>{">"}</i></li>
					}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <Sidebar />
        </div>
      </div>
    </section>
	</>
  );
};

export default BlogPosts;
