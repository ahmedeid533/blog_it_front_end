import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import bannerItem1 from '../assets/images/banner-item-01.jpg';
import bannerItem2 from '../assets/images/banner-item-02.jpg';
import bannerItem3 from '../assets/images/banner-item-03.jpg';
import bannerItem4 from '../assets/images/banner-item-04.jpg';
import bannerItem5 from '../assets/images/banner-item-05.jpg';
import bannerItem6 from '../assets/images/banner-item-06.jpg';

import blogThumb1 from '../assets/images/blog-post-01.jpg';
import blogThumb2 from '../assets/images/blog-post-02.jpg';
import blogThumb3 from '../assets/images/blog-post-03.jpg';

const images = [blogThumb1, blogThumb2, blogThumb3,];

const carouselItems = [
  {
    image: bannerItem1,
    category: 'Fashion',
    title: 'Morbi dapibus condimentum',
    date: 'May 12, 2020',
    comments: '12 Comments'
  },
  {
    image: bannerItem2,
    category: 'Nature',
    title: 'Donec porttitor augue at velit',
    date: 'May 14, 2020',
    comments: '24 Comments'
  },
  {
    image: bannerItem3,
    category: 'Lifestyle',
    title: 'Best HTML Templates on TemplateMo',
    date: 'May 16, 2020',
    comments: '36 Comments'
  },
  {
    image: bannerItem4,
    category: 'Fashion',
    title: 'Responsive and Mobile Ready Layouts',
    date: 'May 18, 2020',
    comments: '48 Comments'
  },
  {
    image: bannerItem5,
    category: 'Nature',
    title: 'Cras congue sed augue id ullamcorper',
    date: 'May 24, 2020',
    comments: '64 Comments'
  },
  {
    image: bannerItem6,
    category: 'Lifestyle',
    title: 'Suspendisse nec aliquet ligula',
    date: 'May 26, 2020',
    comments: '72 Comments'
  }
];

const MainBanner = () => {
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
				post.share = ['Facebook', 'Twitter', 'LinkedIn'];
				return post;
			})
			const randstart = Math.floor(Math.random() * (data.posts.length - 7))
			setBlog(data.posts.splice(randstart , randstart + 6));
		})
		.catch(err => {
			console.log(err);
		})
	}
	useEffect(() => {
		fetchBlogs();
	}, [])
  return (
    <div className="main-banner header-text">
      <div className="container-fluid">
        <OwlCarousel className="owl-banner owl-carousel" loop margin={10} nav>
          {blog.map((item, index) => (
            <div className="item" key={index}>
              <img src={item.image} alt={item.title} />
              <div className="item-content">
                <div className="main-content">
                  <div className="meta-category">
                    <span>{post.categoryName ? post.categoryName : "general"}</span>
                  </div>
                  <Link to={"/post-details/"+post._id}><h4>{item.title}</h4></Link>
                  <ul className="post-info">
                    <li onClick={(e)=>{e.preventDefault()}}><a href={process.env.PUBLIC_URL}>Admin</a></li>
                    <li onClick={(e)=>{e.preventDefault()}}><a href={process.env.PUBLIC_URL}>{item.createdAt.split("T")[0]}</a></li>
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </OwlCarousel>
      </div>
    </div>
  );
};

export default MainBanner;
