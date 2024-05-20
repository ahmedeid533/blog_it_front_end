import React from "react";
import { Link } from "react-router-dom";
import Banner from "../components/Banner";

function Login() {
	return (
		<>
		<Banner h1="" h2="log in"/>
		<div className="container">
			<div className="row">
				<div className="col-lg-8 offset-2">
					<form style={{marginTop:"10vmin"}}>
						<div className="form-group">
							<label for="exampleInputEmail1">Email address</label>
							<input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
						</div>
						<div className="form-group">
							<label for="exampleInputPassword1">Password</label>
							<input type="password" className="form-control" id="exampleInputPassword1"/>
						</div>
						<button type="submit" className="btn btn-primary">Submit</button>
					</form>
					<Link to="/signup"> you don't have account ? / sign up </Link>
				</div>
			</div>
		</div>
		</>
	)
}

export default Login;