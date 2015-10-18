xhr = new XMLHttpRequest();
JSON = xhr.open("get", "data.json", true);

function parse() {
	
	elem = document.getElementById("messages");
	for (count = 0; count < JSON.length; count++) {
		elem.innerHTML += JSON[count]["content"] + JSON[count]["username"];
	}
}

	