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

function BlogPosts () {
  const posts = [
    { id: 1, title: 'Donec tincidunt leo', date: 'May 31, 2020', comments: '12 Comments', image: blogThumb1 },
    { id: 2, title: 'Suspendisse et metus', date: 'May 22, 2020', comments: '26 Comments', image: blogThumb2 },
    { id: 3, title: 'Donec tincidunt leo', date: 'May 18, 2020', comments: '42 Comments', image: blogThumb3 },
    { id: 4, title: 'Mauris ac dolor ornare', date: 'May 16, 2020', comments: '28 Comments', image: blogThumb4 },
    { id: 5, title: 'Donec tincidunt leo', date: 'May 12, 2020', comments: '16 Comments', image: blogThumb5 },
    { id: 6, title: 'Mauris ac dolor ornare', date: 'May 10, 2020', comments: '3 Comments', image: blogThumb6 },
  ];

  return (
    <>
	<Banner h1="RECENT POSTS" h2="OUR RECENT BLOG ENTRIES"/>
	<section className="blog-posts grid-system">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="all-blog-posts">
              <div className="row">
                {posts.map(post => (
                  <BlogPost post={post}/>
                ))}
                <div className="col-lg-12">
                  <ul className="page-numbers">
                    <li><a href="#">1</a></li>
                    <li className="active"><a href="#">2</a></li>
                    <li><a href="#">3</a></li>
                    <li><a href="#"><i className="fa fa-angle-double-right"></i></a></li>
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
