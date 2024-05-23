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

function getCookie(cname) {
	let name = cname + "=";
	let decodedCookie = decodeURIComponent(document.cookie);
	let ca = decodedCookie.split(';');
	for(let i = 0; i <ca.length; i++) {
	  let c = ca[i];
	  while (c.charAt(0) == ' ') {
		c = c.substring(1);
	  }
	  if (c.indexOf(name) == 0) {
		return c.substring(name.length, c.length);
	  }
	}
	return "";
  }
const refresh = setInterval(() => {
	const jwt = getCookie("jwt");
	if(jwt) {
		fetch("http://localhost:5000/auth/refresh", {
			method: "POST",
			credentials: 'include',
			headers: {
				"Content-Type": "application/json"
			},
		})
		.then(res => res.json())
		.then(data => {
			localStorage.setItem("accessToken", data.accessToken);
		})
	} else {
		Link.to("/login");
		clearInterval(refresh);
	}
}, 1000 * 60 * 15);
if(getCookie("jwt")) {
	fetch("http://localhost:5000/auth/refresh", {
		credentials: 'include',
		headers: {
			"Content-Type": "application/json"
		},
	})
	.then(res => res.json())
	.then(data => {
		localStorage.setItem("accessToken", data.accessToken);
	})
} else {
	window.location.href = "/login";
	clearInterval(refresh);
}

function App() {

  return (
    <Router>
        <Header />
        <Routes>
		  <Route path="*" element={<Home/>} />
          <Route path="/" index exact element={<Home/>} />
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
