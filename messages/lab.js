xhr = new XMLHttpRequest();
xhr.open("get", "data.json", true);


function parse() {
	
	elem = document.getElementById("messages");
	for (count = 0; count < elem.length; count++) {
		console.log(Object.keys(elem[count]));
		elem.innerHTML += elem[count]["content"] + elem[count]["username"];
	}

}