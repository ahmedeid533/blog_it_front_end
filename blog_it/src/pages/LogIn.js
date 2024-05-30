import React , {useState} from "react";
import { Link } from "react-router-dom";
import Banner from "../components/Banner";

function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();
		const response = await fetch(process.env.REACT_APP_API + "/auth/login", {
			method: "POST",
			credentials: 'include',
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				email,
				password
			})
		})
		.catch(e => console.log(e))
		const data = await response.json();
		if(data.accessToken){
			localStorage.setItem("accessToken", data.accessToken);
			localStorage.setItem("isAdmin", data.isAdmin);
			let nowTime = new Date().getTime();
			localStorage.setItem("setupTimeToken", nowTime);
			if (data.isAdmin) {
				window.location.href = "/dashboard/index.html";
			} else {
				window.location.href = "/";
			}	
		} else {
			setError(data.message);
		}
		
	}

	return (
		<>
		<Banner h1="" h2="log in"/>
		<div className="container">
			<div className="row">
				<div className="col-lg-8 offset-lg-2">
					<div style={{marginTop:"10vmin"}}>
						<div className="form-group">
							<label for="exampleInputEmail1">Email address</label>
							<input type="email"
								className="form-control"
								id="exampleInputEmail1"
								aria-describedby="emailHelp"
								onChange={(e) => setEmail(e.target.value)}
							/>
						</div>
						<div className="form-group">
							<label for="exampleInputPassword1">Password</label>
							<input type="password" 
								className="form-control"
								id="exampleInputPassword1"
								onChange={(e) => {
									setPassword(e.target.value)
									if (7 >= e.target.value.length) {
										setError("Password is too short")
									} else {
										setError("");
									}
								}}
							/>
							<p style={{color:"red"}}>{error}</p>
						</div>
						<button type="submit"
							className="btn btn-primary"
							onClick={handleSubmit}
						>Submit</button>
					</div>
					<Link to="/signup"> you don't have account ? / sign up </Link>
				</div>
			</div>
		</div>
		</>
	)
}

export default Login;