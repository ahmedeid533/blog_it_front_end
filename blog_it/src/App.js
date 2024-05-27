import React from 'react';
import { BrowserRouter as Router, Routes,Route, Link } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Blog from './pages/Blog';
import PostDetails from './pages/PostDetails';
import Login from './pages/LogIn';
import SignUp from './pages/SignUp';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function refresh (){
	if(!localStorage.getItem("accessToken")) {
		fetch(process.env.REACT_APP_API + "/auth/refresh", {
			method: "POST",
			credentials: 'include',
			headers: {
				"Content-Type": "application/json"
			},
		})
		.then(res => res.json())
		.then(data => {
			if (!data.accessToken) {
				Link.to("/login");
			}else{
			localStorage.setItem("accessToken", data.accessToken);
		}
		})
		.catch(err => {
			console.log(err);
		})
	} else {
		Link.to("/login");
		clearInterval(refresh);
	}
}

setInterval( refresh, 1000 * 60 * 15);
// if(!localStorage.getItem("accessToken")) {
// 	fetch(process.env.REACT_APP_API + "/auth/refresh", {
// 		credentials: 'include',
// 		headers: {
// 			"Content-Type": "application/json"
// 		},
// 	})
// 	.then(res => res.json())
// 	.then(data => {
// 		if (!data.accessToken) {
			
// 		}else{
// 		localStorage.setItem("accessToken", data.accessToken);
// 	}
// 	})
// 	.catch(err => {
// 		console.log(err);
// 	})
// } else {
// 	window.location.href = "/login";
// }

function App() {

  return (
    <Router>
        <Header />
        <Routes>
		  <Route path="*" element={<Home/>} />
          <Route path="/" index exact element={<Home/>} />
          <Route path="/blog/:id" element={<Blog/>} />
		  <Route path="/blog" element={<Blog/>} />
		  <Route path="/post-details" element={<PostDetails/>} />
		  <Route path="/login" element={<Login/>} />
		  <Route path="/signup" element={<SignUp/>} />
        </Routes>
        <Footer />
    </Router>
  );
}

export default App;
