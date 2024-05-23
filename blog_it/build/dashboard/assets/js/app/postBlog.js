function postData () {
	fetch(process.env.REACT_APP_API + "/posts", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			"Authorization": `Bearer ${localStorage.getItem("accessToken")}`
		},
		body: JSON.stringify({
			title: document.getElementById("post_title").value,
			author: document.getElementById("auther_id").value,
			body: document.getElementById("postText").value
		})
	})
}