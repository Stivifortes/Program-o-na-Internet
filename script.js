window.load = slide (1) ;

var bgNumber = 1;

function slide (n) {
	var img = document.getElementById("imageBg");
	img.style.backgroundImage = "url('images/" + n + ".jpg')";
} 

function anterior (){
	if (bgNumber > 1) {
		bgNumber--;
		slide(bgNumber);
	}else if (bgNumber = 1) {
		bgNumber = 3;
		slide (bgNumber);
	}
}

function proximo (){
	if (bgNumber < 3) {
		bgNumber++;
		slide(bgNumber);
	}else if (bgNumber = 3) {
		bgNumber = 1;
		slide (bgNumber);
	}
}
