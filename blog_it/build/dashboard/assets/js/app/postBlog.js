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
			fileUrl: document.getElementById("imageUrl").value,
			
		}),
	})
	.then(res => res.json())
	.then(data => {
		document.getElementById("message").innerHTML = "Post created successfully";
		document.getElementById("post_title").value = ""
		document.getElementById("postText").value = ""
		document.getElementById("imageUrl").value = ""
	})
}
let categories = [];
let select = document.getElementById("category");
let categorie = document.createElement("option");
let catgs = []
console.log("categories");
const fetchCategories = () => {
	fetch("https://blog-it-zjku.onrender.com" + "/categories", {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
		}
	})
	.then(res => res.json())
	.then(data => {
		categories = data.categories;
		console.log(categories);
	})
	.then(() => {
		catgs = categories.map((category) => {
			categorie = document.createElement("option");
			categorie.value = category._id;
			categorie.innerHTML = category.name;
			return categorie;
		})
		console.log(catgs);
	})
	.then(() => {
		catgs.map((categorie) => {
			select.appendChild(categorie);
		})
		console.log(select);
	})
	.catch(err => {
		console.log(err);
	})
}
fetchCategories();

const postCategory = () => {
	fetch("https://blog-it-zjku.onrender.com" + "/categories/create", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			"Authorization": `Bearer ${localStorage.getItem("accessToken")}`
		},
		body: JSON.stringify({
			name: document.getElementById("post_title").value,
			description: document.getElementById("postText").value,
		}),
	})
	.then(res => res.json())
	.then(data => {
		document.getElementById("message").innerHTML = "Category created successfully"+JSON.stringify(data);
		setTimeout(() => {
			document.getElementById("message").innerHTML = "";
		}, 3000);
		document.getElementById("post_title").value = ""
		document.getElementById("postText").value = ""
	})
}