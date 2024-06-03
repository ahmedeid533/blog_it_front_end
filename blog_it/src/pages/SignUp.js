import React, { useState } from "react";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";

function SignUp() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [username, setUsername] = useState("");
	const [errorUser, setErrorUser] = useState(false);
	const [errorEmail, setErrorEmail] = useState(false);
	const [errorPassword, setErrorPassword] = useState(false);
	const [error, setError] = useState("Please fill in all fields");

	const checkErrors = () => {
		if (!errorUser || !errorEmail || !errorPassword) {
			setError("Please fill in all fields")
			return true;
		}
		if (error !== "") {
			return true;
		}
		return false;
	}

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (checkErrors()) {
			return;
		}
		const response = await fetch(process.env.REACT_APP_API + "/auth/register", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				email,
				password,
				username
			})
		});
		const data = await response.json();
		if (response.status !== 200) {
			setError(data.message);
			return;
		}
		localStorage.setItem("accessToken", data.accessToken);
		let nowTime = new Date().getTime();
		localStorage.setItem("setupTimeToken", nowTime);
		if (data.isAdmin) {
			window.location.href = "/blogit/dashboard/index.html";
			localStorage.setItem("isAdmin", data.isAdmin);
		} else {
			localStorage.setItem("isAdmin", false);
		}
		window.location.href = "/";
	}
	
	const comparePassword = () => {
		let pass1 = document.getElementById("exampleInputPassword1").value;
		let pass2 = document.getElementById("exampleInputPassword2").value;
		if (pass1 !== pass2) {
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
							<label htmlFor="username">Username</label>
							<input type="username"
								className="form-control"
								id="username"
								onChange={(e) => {
									setUsername(e.target.value)
									if (e.target.value !== "") {
										setErrorUser(true)
										setError("")
									} else {
										setError("Username cannot be empty")
										setErrorUser(false)
									}
								}}
								required
							/>
						</div>
						<div className="form-group">
							<label htmlFor="exampleInputEmail1">Email address</label>
							<input type="email"
								className="form-control"
								id="exampleInputEmail1"
								aria-describedby="emailHelp"
								onChange={(e) =>{ 
									setEmail(e.target.value)
									if (e.target.value !== "") {
										setErrorEmail(true)
										setError("")
									} else {
										setError("Email cannot be empty")
										setErrorEmail(false)
									}
								}}
								required
							/>
						</div>
						<div className="form-group">
							<label htmlFor="exampleInputPassword1">Password</label>
							<input type="password"
								className="form-control"
								id="exampleInputPassword1"
								onChange={(e) => {
									setPassword(e.target.value)
									comparePassword()
									if (e.target.value !== "") {
										setErrorPassword(true)
										setError("")
									} else {
										setError("Password cannot be empty")
										setErrorPassword(false)}
								}}
								required
							/>
						</div>
						<div className="form-group">
							<label htmlFor="exampleInputPassword2">Confirm Password</label>
							<input type="password"
								className="form-control"
								id="exampleInputPassword2"
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