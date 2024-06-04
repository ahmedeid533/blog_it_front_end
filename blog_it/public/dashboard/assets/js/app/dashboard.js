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
		document.getElementById("postsCount").innerHTML = data.posts.length;
		const newPosts = data.posts.filter(post => new Date(post.createdAt) > new Date().getTime() - 86400000);
		if (newPosts.length !== null) {
			const newPerOld = newPosts.length / data.posts.length * 100;
			document.getElementById("newPostsPerOld").innerHTML = "+" + newPerOld.toFixed(2) + "%";
		}
	}
}
fetchPosts();

const fetchUsers = async () => {
	const response = await fetch(REACT_APP_API + "/users", {
		method: "GET",
		credentials: 'include',
		headers: {
			"Content-Type": "application/json",
			"Authorization": "Bearer " + localStorage.getItem("accessToken")
		}
	})
	.catch(e => console.log(e))
	const data = await response.json();
	if(data.error){
		console.log(data.error);
	} else {
		document.getElementById("usersCount").innerHTML = data.length;
		const newUsers = data.filter(user => new Date(user.createdAt) > new Date().getTime() - 86400000);
		if (newUsers.length === null) {
			document.getElementById("newUsers").innerHTML = 0;
		} else {
			document.getElementById("newUsers").innerHTML = newUsers.length;
			const newPerOld = newUsers.length / data.length * 100;
			document.getElementById("newPerOld").innerHTML = "+" + newPerOld.toFixed(2) + "%";
		}
		
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
		document.getElementById("commentsCount").innerHTML = data.comments.length;
		const newComments = data.comments.filter(comment => new Date(comment.createdAt) > new Date().getTime() - 86400000);
		if (newComments.length !== null) {
			const newPerOld = newComments.length / data.comments.length * 100;
			document.getElementById("newCommentsPerOld").innerHTML = "+" + newPerOld.toFixed(2) + "%";
		}
	}
}
fetchComments();