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
	if(localStorage.getItem("accessToken") === "undefined" || !localStorage.getItem("accessToken")) {
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
			} else {
				localStorage.setItem("accessToken", data.accessToken);
			}
		})
		.catch(err => {
			console.log(err);
		})
	} else {
		return;
	}
}

var minutes = 15; // to clear the localStorage after 15 minute
               // (if someone want to clear after more minute simply change minutes = 25)
var now = new Date().getTime();
var setupTime = localStorage.getItem('setupTimeToken');
if (setupTime == null) {
	localStorage.setItem('setupTimeToken', now)
	window.location.href = '/login';
} else {
    if(now-setupTime > minutes*60*1000 || localStorage.getItem("accessToken") === "undefined") {
		refresh();
		localStorage.setItem("accessToken","anyValue")
		let nowTime = new Date().getTime();
		localStorage.setItem("setupTimeToken", nowTime);
		window.location.href = '/';
    }
}
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
		  <Route path="/post-details/:id" element={<PostDetails/>} />
		  <Route path="/login" element={<Login/>} />
		  <Route path="/signup" element={<SignUp/>} />
        </Routes>
        <Footer />
    </Router>
  );
}

export default App;
