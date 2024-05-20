import React from "react";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";

function SignUp() {
	return (
		<>		
		<Banner h1="" h2="sign up"/>
		<div className="container">
			<div className="row">
				<div className="col-lg-8 offset-lg-2">
					<form style={{marginTop:"10vmin"}}>
						<div className="form-group">
							<label for="exampleInputEmail1">Email address</label>
							<input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
						</div>
						<div className="form-group">
							<label for="exampleInputPassword1">Password</label>
							<input type="password" className="form-control" id="exampleInputPassword1"/>
						</div>
						<div className="form-group">
							<label for="exampleInputPassword1">Confirm Password</label>
							<input type="password" className="form-control" id="exampleInputPassword1"/>
						</div>
						<button type="submit" className="btn btn-primary">Submit</button>
						
					</form>
					<Link to="/login">Already have an account? Log in</Link>
				</div>
			</div>
		</div>
		
		</>
	)
}

export default SignUp;