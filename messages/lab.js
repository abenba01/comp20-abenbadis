xhr = new XMLHttpRequest();
xhr.open("get", "data.json", true);

function parse() {
	
	elem = document.getElementById("messages");
	for (count = 0; count < "data.json".length; count++) {

		elem.innerHTML += "data.json"[count]["content"] + "data.json"[count]["username"];

	}

}