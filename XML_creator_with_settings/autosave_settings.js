window.onload = function () {

	let parentCatNameText = document.getElementById("parentCatname");
	let HandlerNameText = document.getElementById("handlerName");
	if (localStorage.getItem("parentCatnameAutosave")) {
		parentCatNameText.value = localStorage.getItem("parentCatnameAutosave");
	}
	if (localStorage.getItem("handlerNameAutosave")) {
		HandlerNameText.value = localStorage.getItem("handlerNameAutosave");
		HandlerNameText.parentElement.style = 'border-color: red;'
	}
	parentCatNameText.addEventListener("change", function () {
        localStorage.setItem("parentCatnameAutosave", parentCatNameText.value);
        console.log('sadsad');
	});
	HandlerNameText.addEventListener("change", function () {
		localStorage.setItem("handlerNameAutosave", HandlerNameText.value);
	});

}