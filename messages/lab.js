xhr = new XMLHttpRequest();
xhr.open("get", "data.json", true);

function parse() {
	
	data = "data.json";	
	elem = document.getElementById("messages");
	for (count = 0; count < data.length; count++) {
		console.log(Object.keys(data[count]));
		elem.innerHTML += data[count]["content"] + data[count]["username"];

	}

}