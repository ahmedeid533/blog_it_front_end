import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {
	const [signed, setsigned] = useState(false);
	const [isAdmin, setIsAdmin] = useState(false);
	const clearField = (index) => {
		for (let i = 0; i < 2; i++) {
			document.getElementsByClassName('nav-item')[i].classList.remove('active');
		}
		if (index === 3) {
			return;
		}
		document.getElementsByClassName('nav-item')[index].classList.add('active');
	}
	const setSinedIn = () => {
		const accessToken = localStorage.getItem('accessToken');
		const isAdmin = localStorage.getItem('isAdmin');
		if (accessToken) {
			setsigned(true);
		}
		if (isAdmin === "undefined" || isAdmin === "false") {
			setIsAdmin(false);
		} else {
			setIsAdmin(true);
		}
	}

	const logout = () => {
		localStorage.removeItem('accessToken');
		fetch(process.env.REACT_APP_API + '/auth/logout', {
			method: 'POST',
			credentials: 'include',
			headers: {
				'Content-Type': 'application/json'
			},
		})
		setsigned(false);
	}

	useEffect(() => {
		setSinedIn();
	}, []);
	return (
		<header>
			<nav className="navbar navbar-expand-lg">
			<div className="container">
				<a className="navbar-brand" href="/"><h2>Blog it<em>.</em></h2></a>
				<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
				<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarResponsive">
				<ul className="navbar-nav ml-auto">
					{signed && isAdmin && <li className="nav-item-button" onClick={()=>{clearField(3)}}><a className="nav-link" href={process.env.PUBLIC_URL+"/dashboard/index.html"}>dashboard</a></li>}
					<li className="nav-item" onClick={()=>{clearField(0)}}><Link to="/" className="nav-link">HOME</Link></li>
					<li className="nav-item" onClick={()=>{clearField(1)}}><Link to="/blog" className="nav-link">BLOG ENTRIES</Link></li>
					{!signed && <li className="nav-item-button" onClick={()=>{clearField(3)}}><Link to="/signup" className="nav-link">Signup / login</Link></li>}
					{signed && <li className="nav-item-button" onClick={()=>{logout()}}><Link to="/" className="nav-link">Logout</Link></li>}
				</ul>
				</div>
			</div>
			</nav>
		</header>
	)
}

export default Header;
