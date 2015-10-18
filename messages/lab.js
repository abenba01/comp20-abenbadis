xhr = new XMLHttpRequest();
xhr.open("get", "data.json", true);

function parse() {
	jsondata = 'data.json';
	parsedObjects = JSON.parse(jsondata);
	elem = document.getElementById("messages");
	for (count = 0; count < parsedObjects.length; count++) {

		console.log(Object.keys(parsedObjects[count]));
		elem.innerHTML = parsedObjects[count]["username"];

	}


}