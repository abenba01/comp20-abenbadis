xhr = new XMLHttpRequest();
xhr.open("get", "data.json", true);


function parse() {
	parsedObjects = JSON;
	elem = document.getElementById("messages");
	for (count = 0; count < parsedObjects.length; count++) {
		console.log(Object.keys(parsedObjects[count]));
		elem.innerHTML += parsedObjects[count]["content"] + xhr[count]["username"];
	}

}