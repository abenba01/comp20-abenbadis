function parse() {
	xhr = new XMLHttpRequest();
	xhr.open("get", "data.json", true);	

}

/*parsedObjects = JSON(xhr);
	elem = document.getElementById("messages");
	for (count = 0; count < parsedObjects.length; count++) {
		console.log(Object.keys(parsedObjects[count]));
		elem.innerHTML += parsedObjects[count]["content"] + xhr[count]["username"];
	}*/