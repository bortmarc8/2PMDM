const cb = document.getElementById("cbChangeImage");
const img = document.getElementById("image");
const btn = document.getElementById("btnChangeImage");

cb.addEventListener("change", (event) => {
	if (event.target.checked) {
		btn.disabled = false;
		btn.style.background = "blue";
	} else {
		btn.disabled = true;
		btn.style.background = "grey";
	}
});

btn.addEventListener("click", (event) => {
	img.src = "https://github.githubassets.com/images/modules/logos_page/Octocat.png";
	btn.style.background = "grey";
	btn.disabled = true;
	cb.checked = false;
});		


	
