xhr = new XMLHttpRequest();
xhr.open("get", "data.json", true);

function parse() {
	
	elem = document.getElementById("messages");
	for (count = 0; count < xhr.length; count++) {

		console.log(Object.keys(xhr[count]));
		elem.innerHTML += xhr[count]["content"] + parsedObjects[count]["username"];

	}


}