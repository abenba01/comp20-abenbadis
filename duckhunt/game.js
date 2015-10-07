background = new Image();
background.src = "duckhunt-background.gif";

duck1 = new Image();
duck1.src = "duckhunt_various_sheet.png";

duck2 = new Image();
duck2.src = "duckhunt_various_sheet.png";


background.onload = function init () {
	canvas = document.getElementById('game_canvas');
	ctx = canvas.getContext('2d');	
	ctx.drawImage(background,0,0, 800, 600);
	ctx.drawImage(duck1, 250, 107, 48, 49, 200, 10, 200, 200);
	ctx.drawImage(duck2, 75, 107, 40, 48, 500, 100, 200, 200);
}


