function parse() {

	xhr = new XMLHttpRequest();
	xhr.open("get", "data.json", true);
	xhr.onreadystatechange = function () {
		if (( xhr.readyState == 4 ) && (xhr.status == 200)) {

			parsedObjects = JSON.parse(xhr.responseText);
			elem = document.getElementById("messages");

			for ( count = 0; count < parsedObjects.length; count++){
				elem.innerHTML += "<h3>" + parsedObjects[count]["content"] + "</h3>" + "<p>" + parsedObjects[count]["username"] + "</p>";

			}
		}
			
	}
	xhr.send();
	
}

	
