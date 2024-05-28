function postData () {
	fetch("https://blog-it-zjku.onrender.com" + "/posts/create", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			"Authorization": `Bearer ${localStorage.getItem("accessToken")}`
		},
		body: JSON.stringify({
			title: document.getElementById("post_title").value,
			body: document.getElementById("postText").value,
			categories: document.getElementById("category").value,
		}),
		file: {
			filename: document.getElementById("imageUrl").value
		},
	})
}