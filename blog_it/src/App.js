import React from 'react';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Blog from './pages/Blog';
import PostDetails from './pages/PostDetails';
import Login from './pages/LogIn';
import SignUp from './pages/SignUp';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <Router>
        <Header />
        <Routes>
          <Route path="/" exact element={<Home/>} />
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
