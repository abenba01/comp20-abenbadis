xhr = new XMLHttpRequest();
xhr.open("get", "data.json", true);

function parse() {
	
	elem = document.getElementById("messages");
	for (count = 0; count < JSON.length; count++) {
		console.log(Object.keys(JSON[count]));
		elem.innerHTML += JSON[count]["content"] +JSON[count]["username"];
	}
}

	