xhr = new XMLHttpRequest();
xhr.open("get", "data.json", true);

function parse() {
	
	elem = document.getElementById("messages");
	for (count = 0; count < parsedObjects.length; count++) {

		console.log(Object.keys(parsedObjects[count]));
		elem.innerHTML += parsedObjects[count]["content"] + parsedObjects[count]["username"];

	}


}