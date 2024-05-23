function getCookie(cname) {
	let name = cname + "=";
	let decodedCookie = decodeURIComponent(document.cookie);
	let ca = decodedCookie.split(';');
	for(let i = 0; i <ca.length; i++) {
	  let c = ca[i];
	  while (c.charAt(0) == ' ') {
		c = c.substring(1);
	  }
	  if (c.indexOf(name) == 0) {
		return true;
	  }
	}
	return false;
  }
const refresh = setInterval(() => {
	if(getCookie("jwt")) {
		fetch("http://localhost:5000/auth/refresh", {
			credentials: 'include',
			headers: {
				"Content-Type": "application/json"
			},
		})
		.then(res => res.json())
		.then(data => {
			localStorage.setItem("accessToken", data.accessToken);
		})
	} else {
		window.location.href = "/login";
		clearInterval(refresh);
	}
}, 1000 * 60 * 15);
if(getCookie("jwt")) {
	fetch("http://localhost:5000/auth/refresh", {
		credentials: 'include',
		headers: {
			"Content-Type": "application/json"
		},
	})
	.then(res => res.json())
	.then(data => {
		localStorage.setItem("accessToken", data.accessToken);
	})
} else {
	window.location.href = "/login";
	clearInterval(refresh);
}
function getUsers() {
	const user_ = document.createElement('tr')
user_.innerHTML = `
<td>
	<div class="d-flex px-2 py-1">
		<div>
			<img id="img" src="https://demos.creative-tim.com/soft-ui-dashboard/assets/img/team-4.jpg" class="avatar avatar-sm me-3">
		</div>
		<div class="d-flex flex-column justify-content-center">
			<h6 class="mb-0 text-sm">Miriam Eric</h6>
			<p class="text-xs text-secondary mb-0">miriam@creative-tim.com</p>
		</div>
	</div>
</td>
<td>
	<p class="text-xs font-weight-bold mb-0" id="_id"></p>
	<p class="text-xs text-secondary mb-0" id="bio"></p>
</td>
<td class="align-middle text-center text-sm">
	<span class="badge badge-sm bg-gradient-secondary">Offline</span>
</td>
<td class="align-middle text-center">
	<span class="text-secondary text-xs font-weight-bold" id="date">14/09/20</span>
</td>
<td class="align-middle">
	<a href="#!" class="text-secondary font-weight-bold text-xs" data-toggle="tooltip" data-original-title="Edit user" id="delete" >
		Delete
	</a>
</td>`
function createUser(user,user_) {
	const userElement = user_.cloneNode(true);
	userElement.querySelector('#img').src = user.profilePicture ? user.profilePicture : `https://demos.creative-tim.com/soft-ui-dashboard/assets/img/team-${parseInt(Math.random() * 3) + 1}.jpg`;
	userElement.querySelector('h6').textContent = user.username ? user.username : 'No name';
	userElement.querySelector('p').textContent = user.email ? user.email : 'No email';
	userElement.querySelector('#_id').textContent = user._id ? user._id : 'No id';
	userElement.querySelector('#bio').textContent = user.bio ? user.bio : 'No bio';
	userElement.querySelector('span').textContent = user.status ? user.status : 'No status';
	const date = new Date(user.joinedAt);
	userElement.querySelector('#date').textContent = user.joinedAt ? `${date.getDay()}/${date.getMonth()}/${date.getFullYear()}` : 'No date';
	userElement.querySelector('#delete').addEventListener('click', () => {
		fetch(`http://localhost:5000/users/${user._id}`, {
			method: 'DELETE',
			credentials: 'include',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
			},
		})
		.then(res => res.json())
		.then(data => {
			console.log(data);
		})
	})
	return userElement;
}

fetch('http://localhost:5000/users', {
	method: 'GET',
	headers: {
		'Content-Type': 'application/json',
		'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
	},
})
.then(res => res.json())
.then(data => {
	data.forEach(user => {
		document.getElementById('users').appendChild(createUser(user,user_));
	});
})
}
getUsers();