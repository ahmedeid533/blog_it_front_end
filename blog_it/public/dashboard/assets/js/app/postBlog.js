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
			fileUrl: document.getElementById("imageUrl").value
		}),
	})
}
let categories = [];
const fetchCategories = () => {
	fetch(process.env.REACT_APP_API + "/categories", {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
		}
	})
	.then(res => res.json())
	.then(data => {
		categories = data.categories;
	})
	.catch(err => {
		console.log(err);
	})
}
fetchCategories();
let select = document.getElementById("category");
let category = document.createElement("option");
let catgs = categories.map((category) => {
	category.value = category._id;
	category.innerHTML = category.name;
	return category;
})
catgs.forEach((category) => {
	select.appendChild(category);
})