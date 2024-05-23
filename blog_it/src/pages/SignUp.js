import React from "react";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";

function SignUp() {
	const [email, setEmail] = React.useState("");
	const [password, setPassword] = React.useState("");
	const [username, setUsername] = React.useState("");
	const [error, setError] = React.useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();
		const response = await fetch("http://localhost:5000/auth/register", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				email,
				password,
				username
			})
		});
		const data = await response.json();
		localStorage.setItem("accessToken", data.accessToken);
		alert(data.accessToken);
		console.log(data);
	}
	const comparePassword = (confirmPassword) => {
		if (password !== confirmPassword) {
			setError("Passwords do not match")
		} else {
			setError("");
		}
	}


	return (
		<>		
		<Banner h1="" h2="sign up"/>
		<div className="container">
			<div className="row">
				<div className="col-lg-8 offset-lg-2">
					<div style={{marginTop:"10vmin"}}>
					<div className="form-group">
							<label for="username">Username</label>
							<input type="username"
								className="form-control"
								id="username"
								onChange={(e) => setUsername(e.target.value)}
								required
							/>
						</div>
						<div className="form-group">
							<label for="exampleInputEmail1">Email address</label>
							<input type="email"
								className="form-control"
								id="exampleInputEmail1"
								aria-describedby="emailHelp"
								onChange={(e) => setEmail(e.target.value)}
								required
							/>
						</div>
						<div className="form-group">
							<label for="exampleInputPassword1">Password</label>
							<input type="password"
								className="form-control"
								id="exampleInputPassword1"
								onChange={(e) => setPassword(e.target.value)}
								required
							/>
						</div>
						<div className="form-group">
							<label for="exampleInputPassword1">Confirm Password</label>
							<input type="password"
								className="form-control"
								id="exampleInputPassword1"
								onChange={(e) => comparePassword(e.target.value)}
								required
							/>
							<p style={{color:"red"}}>{error}</p>
						</div>
						<button type="submit"
							className="btn btn-primary"
							onClick={handleSubmit}
						>Submit</button>
						
					</div>
					<Link to="/login">Already have an account? Log in</Link>
				</div>
			</div>
		</div>
		</>
	)
}

export default SignUp;