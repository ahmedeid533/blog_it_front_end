const REACT_APP_API="https://blog-it-zjku.onrender.com"
const fetchPosts = async () => {
	const response = await fetch(REACT_APP_API + "/posts", {
		method: "GET",
		credentials: 'include',
		headers: {
			"Content-Type": "application/json"
		}
	})
	.catch(e => console.log(e))
	const data = await response.json();
	if(data.error){
		console.log(data.error);
	} else {
		document.getElementById("postsCount").innerHTML = data.length;
	}
}
fetchPosts();

const fetchUsers = async () => {
	const response = await fetch(REACT_APP_API + "/users", {
		method: "GET",
		credentials: 'include',
		headers: {
			"Content-Type": "application/json",
			"Autorization": "Bearer " + localStorage.getItem("accessToken")
		}
	})
	.catch(e => console.log(e))
	const data = await response.json();
	if(data.error){
		console.log(data.error);
	} else {
		document.getElementById("usersCount").innerHTML = data.length;
		const newUsers = data.filter(user => user.createdAt > new Date().getTime() - 86400000);
		document.getElementById("newUsersCount").innerHTML = newUsers.length;
		const newPerOld = newUsers.length / data.length * 100;
		document.getElementById("newPerOld").innerHTML = "+" + newPerOld.toFixed(2) + "%";
	}
}
fetchUsers();

const fetchComments = async () => {
	const response = await fetch(REACT_APP_API + "/comments", {
		method: "GET",
		credentials: 'include',
		headers: {
			"Content-Type": "application/json",
			"Autorization": "Bearer " + localStorage.getItem("accessToken")
		}
	})
	.catch(e => console.log(e))
	const data = await response.json();
	if(data.error){
		console.log(data.error);
	} else {
		document.getElementById("commentsCount").innerHTML = data.length;
	}
}
fetchComments();