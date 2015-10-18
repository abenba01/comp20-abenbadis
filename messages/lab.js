xhr = new XMLHttpRequest();
xhr.open("get", "data.json", true);

function parse() {
	
	elem = document.getElementById("messages");
	for (count = 0; count < xhr.length; count++) {
		elem.innerHTML += xhr[count]["content"] + xhr[count]["username"];
	}
}

	