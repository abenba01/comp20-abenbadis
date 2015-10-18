


function parse() {
	xhr = new XMLHttpRequest();
	
	elem = document.getElementById("messages");
	for (count = 0; count < xhr.length; count++) {
		console.log(Object.keys(xhr[count]));
		elem.innerHTML += xhr[count]["content"] + xhr[count]["username"];
	}


	xhr.open("get", "data.json", true);
}

	