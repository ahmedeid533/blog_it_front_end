import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {
	const [signed, setsigned] = React.useState(false);
	const clearField = (index) => {
		console.log('clearField', index);
		for (let i = 0; i < 3; i++) {
			document.getElementsByClassName('nav-item')[i].classList.remove('active');
		}
		if (index === 4) {
			return;
		}
		document.getElementsByClassName('nav-item')[index].classList.add('active');
	}
	const setSinedIn = () => {
		const accessToken = localStorage.getItem('accessToken');
		console.log('accessToken', accessToken);
		if (accessToken) {
			setsigned(true);
		}
	}

	const logout = () => {
		localStorage.removeItem('accessToken');
		fetch('http://localhost:5000/auth/logout', {
			method: 'POST',
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
					{signed && <li className="nav-item-button" onClick={()=>{clearField(4)}}><a className="nav-link" href={process.env.PUBLIC_URL+"/dashboard/index.html"}>dashboard</a></li>}
					<li className="nav-item" onClick={()=>{clearField(0)}}><Link to="/" className="nav-link">HOME</Link></li>
					<li className="nav-item" onClick={()=>{clearField(1)}}><Link to="/blog" className="nav-link">BLOG ENTRIES</Link></li>
					<li className="nav-item" onClick={()=>{clearField(2)}}><Link to="/post-details" className="nav-link">Post Details</Link></li>
					{!signed && <li className="nav-item-button" onClick={()=>{clearField(4)}}><Link to="/signup" className="nav-link">Signup / login</Link></li>}
					{signed && <li className="nav-item-button" onClick={()=>{logout()}}><Link to="/" className="nav-link">Logout</Link></li>}
				</ul>
				</div>
			</div>
			</nav>
		</header>
	)
}

export default Header;
