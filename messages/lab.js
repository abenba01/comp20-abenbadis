xhr = new XMLHttpRequest();
jsondata = xhr.open("get", "data.json", true);

function parse() {
	parsedObjects = JSON.parse(jsondata);
	elem = document.getElementById("messages");
	for (count = 0; count < parsedObjects.length; count++) {

		console.log(Object.keys(parsedObjects[count]));
		elem.innerHTML += parsedObjects[count]["content"] + parsedObjects[count]["username"];

	}


}